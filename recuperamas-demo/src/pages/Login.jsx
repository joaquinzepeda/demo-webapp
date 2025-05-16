import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo from '../assets/fondo-llamada-cobranza-e1744900954735.png';
import logo from '../assets/logo-mas-analytics-color.svg';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem('user', email);
      navigate('/dashboard');
    }
  };

  const handleGoogleSignIn = () => {
    alert('Simulación de inicio con Google');
    navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute top-8 left-8">
        <img src={logo} alt="MAS Analytics" className="w-56 h-auto" />
      </div>

      <div className="bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-2">¡Bienvenido!</h1>
        <p className="text-sm text-center text-gray-700 mb-6">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[var(--color-accent)] text-white py-2 rounded font-semibold hover:bg-[var(--color-highlight)] transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="my-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">o</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle className="mr-2 text-xl" />
          Iniciar con Google
        </button>

        <div className="text-center mt-6 text-sm text-gray-600 space-y-2">
          <p>
            <a href="#" className="hover:underline">Olvidé mi contraseña</a>
          </p>
          <p>
            ¿No tienes cuenta? <a href="#" className="text-[var(--color-primary)] font-medium hover:underline">Crear cuenta</a>
          </p>
        </div>
      </div>
    </div>
  );
}
