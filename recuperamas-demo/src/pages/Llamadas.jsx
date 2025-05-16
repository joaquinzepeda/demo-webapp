import { useState } from 'react'

export default function Llamadas() {
  const [tipo, setTipo] = useState('individual')

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--color-primary)]">Ejecutar llamadas</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setTipo('individual')}
          className={`px-4 py-2 rounded ${tipo === 'individual' ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-200'}`}
        >
          Llamada individual
        </button>
        <button
          onClick={() => setTipo('masiva')}
          className={`px-4 py-2 rounded ${tipo === 'masiva' ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-200'}`}
        >
          Llamada masiva
        </button>
      </div>

      {tipo === 'individual' ? (
        <form className="grid gap-4 max-w-xl">
          <input type="text" placeholder="Nombre del cliente" className="border p-2 rounded" />
          <input type="text" placeholder="RUT" className="border p-2 rounded" />
          <input type="datetime-local" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>Agente 1</option>
            <option>Agente 2</option>
          </select>
          <button type="submit" className="bg-[var(--color-accent)] text-white py-2 rounded">
            Simular llamada
          </button>
        </form>
      ) : (
        <div className="space-y-2">
          <p>Sube un archivo CSV con los datos de llamadas masivas:</p>
          <input type="file" className="border p-2 rounded" />
        </div>
      )}
    </div>
  )
}
