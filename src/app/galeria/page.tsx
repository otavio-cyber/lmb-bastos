"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ImageIcon } from "lucide-react";
import Image from "next/image";

type Foto = { id: string; nome: string; filename: string; album_id: string };
type Album = { id: string; nome: string; fotos: Foto[] };

export default function Galeria() {
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [expandidos, setExpandidos] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/galeria")
      .then((r) => r.json())
      .then((data: Album[]) => {
        setAlbuns(data);
        const estado: Record<string, boolean> = {};
        data.forEach((a: Album) => { estado[a.id] = false; });
        setExpandidos(estado);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function toggle(id: string) {
    setExpandidos((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Galeria</h1>
          <p className="text-white/70 text-lg">
            Momentos e atividades da Legião Mirim de Bastos
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {loading && (
          <div className="text-center text-gray-400 py-20">Carregando álbuns...</div>
        )}

        {!loading && albuns.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <ImageIcon className="mx-auto mb-3 opacity-30" size={48} />
            <p>Nenhum álbum disponível no momento.</p>
          </div>
        )}

        {!loading && albuns.length > 0 && (
          <div className="space-y-4">
            {albuns.map((album) => (
              <div key={album.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggle(album.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ImageIcon size={20} className="text-[#1A3A5C]" />
                    <span className="font-semibold text-[#1A3A5C] text-lg">{album.nome}</span>
                    <span className="text-sm text-gray-400 font-normal">
                      ({album.fotos.length} {album.fotos.length === 1 ? "foto" : "fotos"})
                    </span>
                  </div>
                  <div className="text-[#1A3A5C]">
                    {expandidos[album.id] ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </button>

                {expandidos[album.id] && (
                  <div className="px-6 pb-6">
                    {album.fotos.length === 0 ? (
                      <p className="text-gray-400 text-sm py-4">Nenhuma foto neste álbum ainda.</p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                        {album.fotos.map((foto) => (
                          <div key={foto.id} className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={`/api/files/fotos/${foto.filename}`}
                              alt={foto.nome || album.nome}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}