import { FaEye, FaFileCsv, FaEdit, FaPlay } from 'react-icons/fa';

const llamadas = [
  { fecha: "2025-05-16", hora: "10:00", numero: "+56912345678", estado: "En curso", agente: "Carla", id: 1 },
  { fecha: "2025-05-16", hora: "10:05", numero: "+56987654321", estado: "Finalizada", agente: "José", id: 2 },
  { fecha: "2025-05-16", hora: "10:10", numero: "+56922334455", estado: "En curso", agente: "Ana", id: 3 },
  { fecha: "2025-05-16", hora: "10:15", numero: "+56955667788", estado: "Sin respuesta", agente: "Carla", id: 4 },
  { fecha: "2025-05-16", hora: "10:20", numero: "+56999887766", estado: "Finalizada", agente: "José", id: 5 },
  { fecha: "2025-05-16", hora: "10:25", numero: "+56966778899", estado: "En curso", agente: "Ana", id: 6 },
  { fecha: "2025-05-18", hora: "11:00", numero: "+56944445555", estado: "Planificada", agente: "José", id: 7 },
  { fecha: "2025-05-19", hora: "11:30", numero: "+56922223333", estado: "Planificada", agente: "Carla", id: 8 },
];

export default function Monitoreo() {
  const ahora = new Date();

  const llamadasEnCurso = llamadas.filter(item => item.estado === 'En curso');
  const llamadasPlanificadas = llamadas.filter(item =>
    item.estado === 'Planificada' && new Date(item.fecha) > ahora
  );
  const llamadasPasadas = llamadas.filter(item =>
    item.estado !== 'En curso' && item.estado !== 'Planificada'
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#1E293B]">Monitoreo de llamadas</h2>
        <div className="flex gap-2">
          <a
            href="/mnt/data/llamadas_monitoreo.csv"
            download
            className="flex items-center gap-2 bg-[#22C55E] !text-white px-3 py-1 rounded hover:bg-[#16A34A]"
          >
            <FaFileCsv /> Exportar
          </a>
        </div>
      </div>

      {/* Sección llamadas en curso */}
      <LlamadasSeccion
        titulo="Llamadas en curso"
        llamadas={llamadasEnCurso}
        colorFondo="#DBEAFE"
        colorTexto="#1D4ED8"
      />

      {/* Sección llamadas planificadas */}
      <LlamadasSeccion
        titulo="Llamadas planificadas"
        llamadas={llamadasPlanificadas}
        colorFondo="#E0F2FE"
        colorTexto="#0369A1"
      />

      {/* Sección llamadas pasadas */}
      <LlamadasSeccion
        titulo="Llamadas pasadas"
        llamadas={llamadasPasadas}
        colorFondo="#FEF9C3"
        colorTexto="#92400E"
      />
    </div>
  );
}

function LlamadasSeccion({ titulo, llamadas, colorFondo, colorTexto }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold text-[#1E293B]">{titulo}</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[#F8FAFC] text-[#1E293B]">
            <tr>
              <th className="px-4 py-3 text-left">Fecha</th>
              <th className="px-4 py-3 text-left">Hora</th>
              <th className="px-4 py-3 text-left">Número</th>
              <th className="px-4 py-3 text-left">Estado</th>
              <th className="px-4 py-3 text-left">Agente</th>
              <th className="px-4 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-[#1E293B]">
            {llamadas.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{item.fecha}</td>
                <td className="px-4 py-2">{item.hora}</td>
                <td className="px-4 py-2">{item.numero}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: colorFondo, color: colorTexto }}>
                    {item.estado}
                  </span>
                </td>
                <td className="px-4 py-2">{item.agente}</td>
                <td className="px-4 py-2 flex gap-2 items-center">
                  <button title="Escuchar llamada" className="text-[#2563EB] hover:text-[#1D4ED8]">
                    <FaPlay />
                  </button>
                  <button title="Monitorear" className="text-[#8B5CF6] hover:text-[#7C3AED]">
                    <FaEye />
                  </button>
                  <button title="Editar" className="text-[#1E293B] hover:text-[#8B5CF6]">
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
