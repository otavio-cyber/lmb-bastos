"use client";
import { useState } from "react";
import { Lock, Upload, FileText, Image, LogOut, FolderOpen } from "lucide-react";

// Senha simples — em produção usar variável de ambiente + cookie httpOnly
const SENHA = "lmb2024admin";

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [aba, setAba] = useState<"transparencia" | "galeria">("transparencia");

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (senha === SENHA) {
      setAutenticado(true);
      setErro("");
    } else {
      setErro("Senha incorreta. Tente novamente.");
    }
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
              <input
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                className="w-full border border-gray-200 rounded-sm px-3 py-2.5 font-body text-sm focus:outline-none focus:border-blue-400"
                placeholder="••••••••"
              />
            </div>
            {erro && <p className="font-body text-xs text-red-500">{erro}</p>}
            <button
              type="submit"
              className="w-full py-3 font-display font-bold text-base rounded-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-azul)" }}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cinza-claro)" }}>
      {/* Header admin */}
      <div style={{ backgroundColor: "var(--color-azul-escuro)" }} className="px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-white text-lg">Painel Administrativo</p>
          <p className="font-body text-xs text-white/50">Legião Mirim de Bastos</p>
        </div>
        <button
          onClick={() => setAutenticado(false)}
          className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-body transition-colors"
        >
          <LogOut size={14} /> Sair
        </button>
      </div>

      {/* Abas */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex gap-2 mb-8">
          {([["transparencia", FileText, "Transparência"], ["galeria", Image, "Galeria"]] as const).map(([key, Icon, label]) => (
            <button
              key={key}
              onClick={() => setAba(key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-display font-bold text-sm transition-all"
              style={aba === key
                ? { backgroundColor: "var(--color-azul)", color: "white" }
                : { backgroundColor: "white", color: "var(--color-azul-escuro)" }
              }
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* Aba Transparência */}
        {aba === "transparencia" && (
          <div className="bg-white rounded-sm shadow-sm p-8">
            <h2 className="font-display font-black text-xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>Área de Transparência</h2>
            <p className="font-body text-sm text-gray-400 mb-8">Faça upload de PDFs (relatórios financeiros, estatuto, atas, convênios).</p>

            {/* Upload simulado */}
            <div className="border-2 border-dashed border-gray-200 rounded-sm p-10 text-center hover:border-blue-300 transition-colors cursor-pointer">
              <Upload size={32} className="mx-auto mb-3 text-gray-300" />
              <p className="font-display font-bold text-base mb-1" style={{ color: "var(--color-azul-escuro)" }}>Arraste o arquivo PDF aqui</p>
              <p className="font-body text-xs text-gray-400 mb-4">ou clique para selecionar</p>
              <button
                className="px-6 py-2 font-display font-bold text-sm rounded-sm text-white"
                style={{ backgroundColor: "var(--color-azul)" }}
              >
                Selecionar arquivo
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Relatório Financeiro", "Estatuto Social", "Ata de Eleição", "Convênio"].map(cat => (
                <div key={cat} className="border border-gray-100 rounded-sm p-3 flex items-center gap-2 font-body text-sm text-gray-500">
                  <FileText size={14} style={{ color: "var(--color-azul)" }} /> {cat}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aba Galeria */}
        {aba === "galeria" && (
          <div className="bg-white rounded-sm shadow-sm p-8">
            <h2 className="font-display font-black text-xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>Galeria de Imagens</h2>
            <p className="font-body text-sm text-gray-400 mb-8">Gerencie os álbuns e faça upload de fotos.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Conheça a Entidade", "Atividades"].map(album => (
                <div key={album} className="border border-gray-100 rounded-sm p-5 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen size={16} style={{ color: "var(--color-azul)" }} />
                    <p className="font-display font-bold text-base" style={{ color: "var(--color-azul-escuro)" }}>{album}</p>
                  </div>
                  <button
                    className="text-xs font-body px-3 py-1.5 rounded-sm text-white"
                    style={{ backgroundColor: "var(--color-azul-medio)" }}
                  >
                    + Adicionar fotos
                  </button>
                </div>
              ))}
              <div className="border-2 border-dashed border-gray-200 rounded-sm p-5 flex items-center justify-center">
                <button className="font-display font-bold text-sm" style={{ color: "var(--color-azul)" }}>
                  + Criar novo álbum
                </button>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-sm p-8 text-center hover:border-blue-300 transition-colors cursor-pointer">
              <Upload size={28} className="mx-auto mb-2 text-gray-300" />
              <p className="font-body text-sm text-gray-400">Selecione um álbum acima e faça o upload das fotos</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
