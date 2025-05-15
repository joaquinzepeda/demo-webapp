import logoMas from '../assets/logo-mas-analytics-color.svg'


export default function Topbar() {
    const userName = "Joaquin";
    const firstLetter = userName.charAt(0).toUpperCase();
  
    return (
      <header className="w-full flex items-center justify-between bg-[var(--color-dark)] text-white px-8 py-2 shadow">
        <img src={logoMas} alt="Logo MAS" className="h-16 w-auto" />
        {/* Opciones de usuario */}
        <div className="flex items-center gap-6">
          {/* Inicial del nombre */}
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center font-semibold">
            {firstLetter}
          </div>
  
          {/* Opciones de texto */}
          <div className="flex gap-4 text-sm font-medium">
            <span className="hover:underline cursor-pointer">Perfil</span>
            <span
              className="text-red-300 hover:text-red-400 cursor-pointer"
              onClick={() => {
                localStorage.removeItem("loggedIn");
                window.location.href = "/";
              }}
            >
              Cerrar sesión
            </span>
          </div>
        </div>
      </header>
    );
  }