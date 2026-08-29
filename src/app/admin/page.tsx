"use client";
import { useState, useEffect, useRef } from "react";
import { Lock, Upload, FileText, Image, LogOut, FolderOpen, Trash2, Plus, X, CheckCircle } from "lucide-react";

type Documento = { id: string; nome: string; categoria: string; mes_ano: string; filename: string };
type Foto = { id: string; nome: string; filename: string; album_id: string };
type Album = { id: string; nome: string; fotos: Foto[] };

const CATEGORIAS = ["Estatuto Social", "Ata de Eleição", "Convênio", "Relatório Financeiro", "Outro"];

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-sm shadow-lg text-white text-sm font-body"
      style={{ backgroundColor: "var(--color-azul)" }}>
      <CheckCircle size={16} /> {msg}
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100"><X size={14} /></button>
    </div>
  );
}

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [aba, setAba] = useState<"transparencia" | "galeria">("transparencia");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  // Transparência
  const [docs, setDocs] = useState<Documento[]>([]);
  const [docNome, setDocNome] = useState("");
  const [docCategoria, setDocCategoria] = useState(CATEGORIAS[0]);
  const [docMesAno, setDocMesAno] = useState("");
  const [docFile, setDocFile] = useState<File | null>(null);
  const docRef = useRef<HTMLInputElement>(null);

  // Galeria
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [albumSelecionado, setAlbumSelecionado] = useState("");
  const [novoAlbum, setNovoAlbum] = useState("");
  const [fotoNome, setFotoNome] = useState("");
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const fotoRef = useRef<HTMLInputElement>(null);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth", { method: "POST", body: JSON.stringify({ password: senha }), headers: { "Content-Type": "application/json" } });
    if (res.ok) { setAutenticado(true); setErro(""); loadDocs(); loadAlbuns(); }
    else setErro("Senha incorreta.");
  }

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    setAutenticado(false);
  }

  async function loadDocs() {
    const res = await fetch("/api/transparencia");
    setDocs(await res.json());
  }

  async function loadAlbuns() {
    const res = await fetch("/api/galeria");
    const data = await res.json();
    setAlbuns(data);
    if (data.length > 0 && !albumSelecionado) setAlbumSelecionado(data[0].id);
  }

  async function uploadDoc(e: React.FormEvent) {
    e.preventDefault();
    if (!docFile) return;
    setLoading(true);
    const fd = new FormData();
    fd.append("file", docFile);
    fd.append("nome", docNome);
    fd.append("categoria", docCategoria);
    fd.append("mes_ano", docMesAno);
    const res = await fetch("/api/transparencia", { method: "POST", body: fd });
    if (res.ok) { setToast("Documento enviado!"); setDocNome(""); setDocMesAno(""); setDocFile(null); if (docRef.current) docRef.current.value = ""; loadDocs(); }
    setLoading(false);
  }

  async function deleteDoc(id: string) {
    if (!confirm("Excluir este documento?")) return;
    await fetch(`/api/transparencia/${id}`, { method: "DELETE" });
    setToast("Documento excluído."); loadDocs();
  }

  async function criarAlbum(e: React.FormEvent) {
    e.preventDefault();
    if (!novoAlbum) return;
    await fetch("/api/galeria/album", { method: "POST", body: JSON.stringify({ nome: novoAlbum }), headers: { "Content-Type": "application/json" } });
    setNovoAlbum(""); setToast("Álbum criado!"); loadAlbuns();
  }

  async function uploadFoto(e: React.FormEvent) {
    e.preventDefault();
    if (!fotoFile || !albumSelecionado) return;
    setLoading(true);
    const fd = new FormData();
    fd.append("file", fotoFile);
    fd.append("album_id", albumSelecionado);
    fd.append("nome", fotoNome || fotoFile.name);
    const res = await fetch("/api/galeria", { method: "POST", body: fd });
    if (res.ok) { setToast("Foto enviada!"); setFotoNome(""); setFotoFile(null); if (fotoRef.current) fotoRef.current.value = ""; loadAlbuns(); }
    setLoading(false);
  }

  async function deleteFoto(id: string) {
    if (!confirm("Excluir esta foto?")) return;
    await fetch(`/api/galeria/${id}`, { method: "DELETE" });
    setToast("Foto excluída."); loadAlbuns();
  }

  if (!autenticado) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "var(--color-cinza-claro)" }}>
        <div className="bg-white rounded-sm shadow-lg p-10 w-full max-w-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-sm mb-6 mx-auto" style={{ backgroundColor: "var(--color-azul)" }}>
            <Lock size={20} className="text-white" />
          </div>
          <h1 className="font-display font-black text-2xl text-center mb-1" style={{ color: "var(--color-azul-escuro)" }}>Painel Administrativo</h1>
          <p className="font-body text-xs text-center text-gray-400 mb-8">Legião Mirim de Bastos</p>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="font-body text-xs text-gray-500 block mb-1.5">Senha de acesso</label>
              <input type="password" value={senha} onChange={e => setSenha(e.target.value)}
                className="w-full border border-gray-200 rounded-sm px-3 py-2.5 font-body text-sm focus:outline-none focus:border-blue-400" placeholder="••••••••" />
            </div>
            {erro && <p className="font-body text-xs text-red-500">{erro}</p>}
            <button type="submit" className="w-full py-3 font-display font-bold text-base rounded-sm text-white" style={{ backgroundColor: "var(--color-azul)" }}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  const albumAtual = albuns.find(a => a.id === albumSelecionado);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cinza-claro)" }}>
      {toast && <Toast msg={toast} onClose={() => setToast("")} />}

      <div style={{ backgroundColor: "var(--color-azul-escuro)" }} className="px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-white text-lg">Painel Administrativo</p>
          <p className="font-body text-xs text-white/50">Legião Mirim de Bastos</p>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-body transition-colors">
          <LogOut size={14} /> Sair
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        <div className="flex gap-2 mb-8">
          {([["transparencia", FileText, "Transparência"], ["galeria", Image, "Galeria"]] as const).map(([key, Icon, label]) => (
            <button key={key} onClick={() => setAba(key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-display font-bold text-sm transition-all"
              style={aba === key ? { backgroundColor: "var(--color-azul)", color: "white" } : { backgroundColor: "white", color: "var(--color-azul-escuro)" }}>
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* ── TRANSPARÊNCIA ── */}
        {aba === "transparencia" && (
          <div className="space-y-6">
            {/* Upload */}
            <div className="bg-white rounded-sm shadow-sm p-8">
              <h2 className="font-display font-black text-xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Enviar documento</h2>
              <form onSubmit={uploadDoc} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Nome do documento *</label>
                    <input value={docNome} onChange={e => setDocNome(e.target.value)} required
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm font-body focus:outline-none focus:border-blue-400"
                      placeholder="Ex: Relatório Financeiro Janeiro 2026" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Categoria *</label>
                    <select value={docCategoria} onChange={e => setDocCategoria(e.target.value)}
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm font-body focus:outline-none focus:border-blue-400">
                      {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Mês/Ano (opcional)</label>
                    <input value={docMesAno} onChange={e => setDocMesAno(e.target.value)}
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm font-body focus:outline-none focus:border-blue-400"
                      placeholder="Ex: Jan/2026" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Arquivo PDF *</label>
                    <input ref={docRef} type="file" accept=".pdf" onChange={e => setDocFile(e.target.files?.[0] || null)} required
                      className="w-full text-sm font-body text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-sm file:border-0 file:text-xs file:font-bold file:text-white cursor-pointer"
                      style={{ ["--file-bg" as string]: "var(--color-azul)" }} />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="flex items-center gap-2 px-6 py-2.5 font-display font-bold text-sm rounded-sm text-white disabled:opacity-50"
                  style={{ backgroundColor: "var(--color-azul)" }}>
                  <Upload size={15} /> {loading ? "Enviando..." : "Enviar documento"}
                </button>
              </form>
            </div>

            {/* Lista */}
            <div className="bg-white rounded-sm shadow-sm p-8">
              <h2 className="font-display font-black text-xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Documentos publicados</h2>
              {docs.length === 0
                ? <p className="font-body text-sm text-gray-400 text-center py-8">Nenhum documento ainda.</p>
                : <div className="space-y-2">
                  {docs.map(d => (
                    <div key={d.id} className="flex items-center justify-between gap-4 border border-gray-100 rounded-sm p-3">
                      <div className="flex items-center gap-3">
                        <FileText size={16} style={{ color: "var(--color-azul)" }} className="shrink-0" />
                        <div>
                          <p className="font-body text-sm font-medium" style={{ color: "var(--color-azul-escuro)" }}>{d.nome}</p>
                          <p className="font-body text-xs text-gray-400">{d.categoria}{d.mes_ano ? ` · ${d.mes_ano}` : ""}</p>
                        </div>
                      </div>
                      <button onClick={() => deleteDoc(d.id)} className="text-red-400 hover:text-red-600 transition-colors p-1">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        )}

        {/* ── GALERIA ── */}
        {aba === "galeria" && (
          <div className="space-y-6">
            {/* Criar álbum */}
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h2 className="font-display font-black text-lg mb-4" style={{ color: "var(--color-azul-escuro)" }}>Álbuns</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {albuns.map(a => (
                  <button key={a.id} onClick={() => setAlbumSelecionado(a.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-display font-bold transition-all"
                    style={albumSelecionado === a.id
                      ? { backgroundColor: "var(--color-azul)", color: "white" }
                      : { backgroundColor: "var(--color-cinza-claro)", color: "var(--color-azul-escuro)" }}>
                    <FolderOpen size={14} /> {a.nome} <span className="opacity-60 text-xs">({a.fotos.length})</span>
                  </button>
                ))}
              </div>
              <form onSubmit={criarAlbum} className="flex gap-2">
                <input value={novoAlbum} onChange={e => setNovoAlbum(e.target.value)}
                  className="border border-gray-200 rounded-sm px-3 py-2 text-sm font-body focus:outline-none focus:border-blue-400 flex-1"
                  placeholder="Nome do novo álbum" />
                <button type="submit" className="flex items-center gap-1.5 px-4 py-2 font-display font-bold text-sm rounded-sm text-white"
                  style={{ backgroundColor: "var(--color-azul-medio)" }}>
                  <Plus size={14} /> Criar
                </button>
              </form>
            </div>

            {/* Upload de foto */}
            <div className="bg-white rounded-sm shadow-sm p-8">
              <h2 className="font-display font-black text-xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>
                Adicionar fotos — {albumAtual?.nome}
              </h2>
              <form onSubmit={uploadFoto} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Descrição (opcional)</label>
                    <input value={fotoNome} onChange={e => setFotoNome(e.target.value)}
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm font-body focus:outline-none focus:border-blue-400"
                      placeholder="Ex: Sala de aula 1" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1">Foto (JPG, PNG, WEBP) *</label>
                    <input ref={fotoRef} type="file" accept="image/jpeg,image/png,image/webp"
                      onChange={e => setFotoFile(e.target.files?.[0] || null)} required
                      className="w-full text-sm font-body text-gray-500 cursor-pointer" />
                  </div>
                </div>
                <button type="submit" disabled={loading || !albumSelecionado}
                  className="flex items-center gap-2 px-6 py-2.5 font-display font-bold text-sm rounded-sm text-white disabled:opacity-50"
                  style={{ backgroundColor: "var(--color-azul)" }}>
                  <Upload size={15} /> {loading ? "Enviando..." : "Enviar foto"}
                </button>
              </form>
            </div>

            {/* Grid de fotos do álbum selecionado */}
            {albumAtual && albumAtual.fotos.length > 0 && (
              <div className="bg-white rounded-sm shadow-sm p-8">
                <h2 className="font-display font-black text-lg mb-6" style={{ color: "var(--color-azul-escuro)" }}>
                  Fotos — {albumAtual.nome}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {albumAtual.fotos.map(f => (
                    <div key={f.id} className="relative group rounded-sm overflow-hidden border border-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/api/files/galeria/${f.album_id}/${f.filename}`}
                        alt={f.nome}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button onClick={() => deleteFoto(f.id)} className="text-white bg-red-500 rounded-full p-1.5">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="font-body text-xs text-gray-500 px-2 py-1.5 truncate">{f.nome}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
