import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaCog,
  FaBook,
  FaQuestionCircle,
  FaInfoCircle,
  FaSignOutAlt
} from 'react-icons/fa';

export default function UserMenu({ firstLetter = 'J' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white text-sm flex items-center justify-center font-bold shadow-md transition duration-200 hover:scale-105"
      >
        {firstLetter}
      </button>

    {menuOpen && (
      <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 text-sm overflow-hidden transition-all duration-300">
        <ul className="py-1 divide-y divide-gray-100">
          <MenuItem icon={<FaUser />} label="Ver perfil" />
          <MenuItem icon={<FaCog />} label="Configuración" />
          <MenuItem icon={<FaBook />} label="Términos y Políticas" />
          <MenuItem icon={<FaQuestionCircle />} label="Ayuda" />
          <MenuItem icon={<FaInfoCircle />} label="Preguntas frecuentes" />
          <MenuItem
            icon={<FaSignOutAlt />}
            label="Cerrar sesión"
            isDanger
            onClick={handleLogout}
          />
        </ul>
      </div>
    )}
    </div>
  );
}

function MenuItem({ icon, label, isDanger = false, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition duration-200 ${
          isDanger
            ? 'text-red-500 hover:bg-red-50 hover:text-red-600'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );
}