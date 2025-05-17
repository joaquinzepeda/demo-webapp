import { useState } from 'react';

export default function Llamadas() {
  const [tipo, setTipo] = useState('individual');

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-[var(--color-primary)]">Ejecutar llamadas</h2>



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        {/* Llamada Individual */}
        <div className="space-y-4 border p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold text-[var(--color-primary)]">Llamada individual</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre del cliente" className="w-full border p-2 rounded" />
            <input type="text" placeholder="RUT" className="w-full border p-2 rounded" />
            <input type="datetime-local" className="w-full border p-2 rounded" />
            <select className="w-full border p-2 rounded">
              <option>Carla (IA)</option>
              <option>José (IA)</option>
              <option>Ana (IA)</option>
            </select>
            <input type="text" placeholder="Información adicional" className="w-full border p-4 rounded" />
            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] text-white py-2 rounded font-semibold hover:bg-[var(--color-highlight)] transition"
            >
              Realizar llamada
            </button>
          </form>
        </div>

        {/* Llamada Masiva */}
        <div className="space-y-4 border p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold text-[var(--color-primary)]">Llamada masiva</h3>
          <p className="text-sm text-gray-700">
            Sube un archivo <strong>.csv</strong> con los siguientes campos obligatorios:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li><strong>numero</strong> (Ej: +56912345678)</li>
            <li><strong>nombre</strong> (Ej: Juan Pérez)</li>
            <li><strong>fecha</strong> (Ej: 2025-05-16)</li>
            <li><strong>hora</strong> (Ej: 14:30)</li>
            <li><strong>agente</strong> (Carlos)</li>
          </ul>
          <input type="file" accept=".csv" className="w-full border p-2 rounded" />
          <button
            className="w-full bg-[var(--color-accent)] text-white py-2 rounded font-semibold hover:bg-[var(--color-highlight)] transition"
          >
            Programar llamadas masivas
          </button>
        </div>
      </div>
    </div>
  );
}
