import { useState } from 'react';

export default function Agentes() {
  // Datos de los agentes creados
  const agentes = [
    { nombre: 'Carla (IA)', voz: 'Voz 2 - Femenina', rendimiento: '90%', llamadaPrueba: 'Pendiente' },
    { nombre: 'José (IA)', voz: 'Voz 1 - Masculina', rendimiento: '85%', llamadaPrueba: 'Pendiente' },
    { nombre: 'Ana (IA)', voz: 'Voz 3 - Neutra', rendimiento: '95%', llamadaPrueba: 'Pendiente' },
  ];

  const [modalAbierto, setModalAbierto] = useState(false);
  const [agenteSeleccionado, setAgenteSeleccionado] = useState(null);

  const handleAbrirModal = () => {
    setModalAbierto(true);
  };

  const handleCerrarModal = () => {
    setModalAbierto(false);
    setAgenteSeleccionado(null);
  };

  const handleEditarAgente = (agente) => {
    alert(`Editando agente: ${agente.nombre}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-[var(--color-primary)]">Gestiona tus Agentes IA</h2>

      <p className="text-lg text-gray-700">
        <strong>Aumenta la recaudación con agentes de IA Generativa que automatizan tus acciones. </strong> 
        Optimiza tus gestiones de cobranza con agentes conversacionales de voz y texto. Estos agentes integran estrategias personalizadas, speech analytics y monitoreo en tiempo real, proporcionando una interacción más eficiente y natural.
      </p>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleAbrirModal}
          className="px-6 py-3 text-lg font-semibold bg-[var(--color-accent)] text-white rounded-lg shadow hover:bg-[var(--color-highlight)] transition"
        >
          Crear nuevo agente
        </button>
      </div>

      {/* Tabla de agentes creados */}
      <div className="mt-8 overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Agentes creados</h3>
        <table className="min-w-full mt-4 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Voz</th>
              <th className="px-4 py-2 text-left">Rendimiento</th>
              <th className="px-4 py-2 text-left">Llamada de prueba</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {agentes.map((agente, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{agente.nombre}</td>
                <td className="px-4 py-2">{agente.voz}</td>
                <td className="px-4 py-2">{agente.rendimiento}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-4 py-2 text-sm font-semibold bg-[var(--color-accent)] text-white rounded-lg shadow hover:bg-[var(--color-highlight)] transition"
                  >
                    Realizar llamada de prueba
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditarAgente(agente)}
                    className="px-4 py-2 text-sm font-semibold bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para crear un nuevo agente */}
      {modalAbierto && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Crear nuevo agente</h3>
            <form className="grid gap-4 mt-4">
              <input
                type="text"
                placeholder="Nombre del agente"
                className="w-full border p-2 rounded-lg"
              />
              <textarea
                placeholder="Prompt del agente. ¿Cómo te gustaría que fuera?"
                className="w-full border p-2 rounded-lg"
                rows="4"
              />
              <select className="w-full border p-2 rounded-lg">
                <option>Voz 1 - Masculina</option>
                <option>Voz 2 - Femenina</option>
                <option>Voz 3 - Neutra</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white py-2 rounded-lg font-semibold hover:bg-[var(--color-highlight)] transition"
              >
                Crear agente
              </button>
            </form>
            <button
              onClick={handleCerrarModal}
              className="mt-4 w-full px-6 py-3 text-lg font-semibold bg-gray-100 text-[var(--color-primary)] border border-gray-300 rounded-lg hover:bg-gray-200 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
