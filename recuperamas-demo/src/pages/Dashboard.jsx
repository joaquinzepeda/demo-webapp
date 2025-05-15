import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[var(--color-base)] text-[var(--color-dark)] overflow-hidden">
      {/* Topbar horizontal */}
      <Topbar />

      {/* Layout bajo el topbar */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}