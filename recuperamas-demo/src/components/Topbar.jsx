import logoMas from '../assets/logo-mas-analytics-color.svg'
import logo from '../assets/recuperamas-logo@2x.svg';
import UserMenu from './UserMenu';

export default function Topbar() {
    const userName = "Joaquin";
    const firstLetter = userName.charAt(0).toUpperCase();
  
    return (
      <header className="w-full flex items-center justify-between bg-[var(--color-dark)] text-white px-8 py-2 shadow">
        {/*<img src={logoMas} alt="Logo MAS" className="h-16 w-auto" />*/}
        
  
    {/* Hero y logo */}
        <img src={logo} alt="RecuperaMAS" className="h-16 w-auto" />

        {/* Opciones de usuario */}
        <div className="flex items-center gap-6">
          {/* Inicial del nombre */}
          <UserMenu firstLetter="J" />

        </div>

        
      </header>
    );
  }









  