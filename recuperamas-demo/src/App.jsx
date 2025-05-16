import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './pages/Dashboard';
import DashboardCards from './components/DashboardCards';
import Llamadas from './pages/Llamadas';
import Agentes from './pages/Agentes';
import Monitoreo from './pages/Monitoreo';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardCards />} />
          <Route path="llamadas" element={<Llamadas />} />
          <Route path="agentes" element={<Agentes />} />
          <Route path="monitoreo" element={<Monitoreo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
