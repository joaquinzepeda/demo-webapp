import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-full flex flex-col justify-between">
      <nav className="flex-1 p-4 space-y-2">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `block px-4 py-2 rounded font-medium ${
            isActive
              ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
              : 'text-[var(--color-accent)] hover:bg-gray-100'
          }`
        }
      >
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/llamadas"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Llamadas
        </NavLink>

        <NavLink
          to="/dashboard/agentes"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Agentes
        </NavLink>

        <NavLink
          to="/dashboard/monitoreo"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Monitoreo
        </NavLink>
      </nav>

      <div className="p-4">
        <button className="w-full bg-[var(--color-highlight)] text-white py-2 rounded">
          + New Space
        </button>
      </div>
    </div>
  )
}
