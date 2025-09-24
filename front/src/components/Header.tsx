import React from "react";
import logoHospital from "../img/logo_hospital.png";

const Header: React.FC = () => {
  return (
    <header
      className="w-full border-b-[1px] border-b-[#817f81]"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="w-[90%] mx-auto flex items-center justify-start py-4">
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src={logoHospital}
            alt="Logo Hospital"
            className="max-h-[80px] w-auto"
          />
        </a>

        <nav className="ml-4" aria-label="Menu principal">
          <ul
            className="flex items-center gap-8 whitespace-nowrap list-none m-0 p-0"
            style={{ gap: "1.75rem" }}
          >
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/equipe">Equipe</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
