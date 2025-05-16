import { FaEye, FaFileCsv, FaFileExcel, FaEdit } from 'react-icons/fa';

const llamadas = [
  { hora: "10:00", numero: "+56912345678", estado: "En curso", agente: "Carla" },
  { hora: "10:05", numero: "+56987654321", estado: "Finalizada", agente: "José" },
  { hora: "10:10", numero: "+56922334455", estado: "En curso", agente: "Ana" },
  { hora: "10:15", numero: "+56955667788", estado: "Sin respuesta", agente: "Carla" },
  { hora: "10:20", numero: "+56999887766", estado: "Finalizada", agente: "José" },
  { hora: "10:25", numero: "+56966778899", estado: "En curso", agente: "Ana" }
];

export default function Monitoreo() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">Monitoreo de llamadas</h2>
        <div className="flex gap-2">
          <a
            href="/mnt/data/llamadas_monitoreo.csv"
            download
            className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-3 py-1 rounded hover:bg-[var(--color-highlight)]"
          >
            <FaFileCsv /> CSV
          </a>
          <a
            href="/mnt/data/llamadas_monitoreo.xlsx"
            download
            className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            <FaFileExcel /> Excel
          </a>
        </div>
      </div>

      <div className="overflow-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[var(--color-white)] text-[var(--color-dark)]">
            <tr>
              <th className="px-4 py-3 text-left">Hora</th>
              <th className="px-4 py-3 text-left">Número</th>
              <th className="px-4 py-3 text-left">Estado</th>
              <th className="px-4 py-3 text-left">Agente</th>
              <th className="px-4 py-3 text-left">Acción</th>
            </tr>
          </thead>
          <tbody className="text-[var(--color-dark)]">
            {llamadas.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{item.hora}</td>
                <td className="px-4 py-2">{item.numero}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                    ${item.estado === 'En curso' ? 'bg-blue-100 text-blue-800' :
                      item.estado === 'Finalizada' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'}`}>
                    {item.estado}
                  </span>
                </td>
                <td className="px-4 py-2">{item.agente}</td>
                <td className="px-4 py-2 flex gap-2 items-center">
                  <button title="Monitorear" className="text-[var(--color-accent)] hover:text-[var(--color-highlight)]">
                    <FaEye />
                  </button>
                  <button title="Editar" className="text-[var(--color-primary)] hover:text-[var(--color-accent)]">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
