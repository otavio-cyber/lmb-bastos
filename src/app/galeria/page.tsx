import type { Metadata } from "next";
import pool, { initDb } from "@/lib/db";

export const metadata: Metadata = { title: "Galeria | Legião Mirim de Bastos" };
export const revalidate = 60;

async function getAlbuns() {
  try {
    await initDb();
    const albuns = await pool.query("SELECT * FROM albuns ORDER BY created_at ASC");
    const fotos = await pool.query("SELECT * FROM fotos ORDER BY created_at DESC");
    return albuns.rows.map((a: { id: string; nome: string }) => ({
      ...a,
      fotos: fotos.rows.filter((f: { album_id: string }) => f.album_id === a.id),
    }));
  } catch {
    return [];
  }
}

export default async function Galeria() {
  const albuns = await getAlbuns();

  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto pl-6">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Fotos e momentos</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Galeria</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {albuns.length === 0 && (
            <p className="text-center font-body text-gray-400 py-16">Nenhuma foto publicada ainda.</p>
          )}
          {albuns.map((album: { id: string; nome: string; fotos: { id: string; nome: string; filename: string; album_id: string }[] }) => (
            <div key={album.id}>
              <h2 className="font-display font-black text-2xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>
                {album.nome}
                <span className="font-body font-normal text-sm text-gray-400 ml-3">{album.fotos.length} foto{album.fotos.length !== 1 ? "s" : ""}</span>
              </h2>

              {album.fotos.length === 0 ? (
                <p className="font-body text-sm text-gray-400">Nenhuma foto neste álbum ainda.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {album.fotos.map((f) => (
                    <a
                      key={f.id}
                      href={`/api/files/galeria/${f.album_id}/${f.filename}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative rounded-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/api/files/galeria/${f.album_id}/${f.filename}`}
                        alt={f.nome}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-body text-xs text-white truncate">{f.nome}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
