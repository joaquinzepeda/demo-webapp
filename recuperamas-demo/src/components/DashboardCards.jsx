export default function DashboardCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2 text-[var(--color-primary)]">LineUp</h2>
          <p>Contenido de LineUp...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2 text-[var(--color-primary)]">Trending</h2>
          <p>Contenido de Trending...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2 text-[var(--color-primary)]">My Work</h2>
          <p>Contenido de My Work...</p>
        </div>
      </div>
    )
  }