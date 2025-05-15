import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './pages/Dashboard'
import DashboardCards from './components/DashboardCards'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardCards />} />
          <Route path="home" element={<div>Contenido de Home</div>} />
          <Route path="notes" element={<div>Contenido de Notes</div>} />
          <Route path="goals" element={<div>Contenido de Goals</div>} />
          <Route path="activity" element={<div>Contenido de Activity</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
