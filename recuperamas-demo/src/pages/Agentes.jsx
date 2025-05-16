export default function Agentes() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">Crear agente</h2>
  
        <form className="grid gap-4 max-w-xl">
          <input type="text" placeholder="Nombre del agente" className="border p-2 rounded" />
          <textarea placeholder="Script o prompt" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>Voz 1</option>
            <option>Voz 2</option>
            <option>Voz 3</option>
          </select>
          <button type="submit" className="bg-[var(--color-accent)] text-white py-2 rounded">
            Crear agente
          </button>
        </form>
      </div>
    )
  }
  