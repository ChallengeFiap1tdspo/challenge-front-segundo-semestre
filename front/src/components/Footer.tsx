import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#005b96] w-full text-white">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-12">
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold mb-4 relative pb-2 after:block after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#00a1e0]">
          Teleconsulta - Hospital Das Clínicas
        </h3>
        <p className="mb-3 leading-relaxed">
          Consultas médicas online acessíveis para toda a comunidade.
        </p>
        <p className="leading-relaxed">
          Comprometidos com a saúde e bem-estar dos nossos pacientes.
        </p>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold mb-4 relative pb-2 after:block after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#00a1e0]">
          Contato
        </h3>
        <p className="mb-2">(11) 1111-1111</p>
        <p className="mb-2">(11) 99999-9999 (WhatsApp)</p>
        <p>teleconsulta@hsp.com.br</p>
      </div>
    </div>
    <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm">
      © Hospital Das Clínicas. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
