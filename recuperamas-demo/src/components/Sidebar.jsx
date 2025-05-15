import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-full flex flex-col justify-between">
      <nav className="flex-1 p-4 space-y-2">
      <NavLink
        to="/dashboard/home"
        className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
            isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
        }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/notes"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Notes
        </NavLink>

        <NavLink
          to="/dashboard/goals"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Goals
        </NavLink>

        <NavLink
          to="/dashboard/activity"
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white !text-opacity-100'
                : 'text-[var(--color-accent)] hover:bg-gray-100'
            }`
          }
        >
          Activity
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
