import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const root = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement) : null;

const colorHighlight = root?.getPropertyValue('--color-highlight')?.trim() || '#5F4EFC';
const colorDark = root?.getPropertyValue('--color-dark')?.trim() || '#21224C';
const colorSupport = root?.getPropertyValue('--color-support')?.trim() || '#21224C';
const colorSecondary = root?.getPropertyValue('--color-secondary')?.trim() || '#21224C';
const colorAccent = root?.getPropertyValue('--color-accent')?.trim() || '#21224C';

// === Datos ficticios ===
const labels = [
  '1/05', '2/05', '3/05', '4/05', '5/05',
  '6/05', '7/05', '8/05', '9/05', '10/05',
  '11/05', '12/05', '13/05', '14/05', '15/05'
];

const duracionPromedioPorAgente = {
  'Carla (IA)': 180, // segundos
  'José (IA)': 145,
  'Ana (IA)': 210,
};

const tasaExito = 62.3; // porcentaje ficticio

const dineroData = [621958, 1171155, 631932, 865838, 759178, 711949, 693392, 1450524, 1281177, 1347090, 663302, 548131, 1406801, 1483115, 885932];
const llamadasData = [299, 351, 330, 349, 457, 323, 245, 337, 485, 487, 324, 257, 361, 243, 243];

const totalRecaudadoMes = dineroData.reduce((a, b) => a + b, 0);
const totalLlamadasMes = llamadasData.reduce((a, b) => a + b, 0);
const totalRecaudadoHoy = dineroData[dineroData.length - 1]; // 15 de mayo
const tasaContacto = 75.2;

export default function DashboardCards() {
  return (
    <div className="space-y-5">
      {/* Tarjetas KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-sm font-medium text-[var(--color-dark)]">Recaudado Hoy</h2>
          <p className="text-2xl font-bold text-[var(--color-accent)] mt-1">${totalRecaudadoHoy.toLocaleString('es-CL')}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-sm font-medium text-[var(--color-dark)]">Recaudado en Mayo</h2>
          <p className="text-2xl font-bold text-[var(--color-accent)] mt-1">${totalRecaudadoMes.toLocaleString('es-CL')}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-sm font-medium text-[var(--color-dark)]">Llamadas en el Mes</h2>
          <p className="text-2xl font-bold text-[var(--color-highlight)] mt-1">{totalLlamadasMes.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-sm font-medium text-[var(--color-dark)]">Tasa de Contacto</h2>
          <p className="text-2xl font-bold text-[var(--color-highlight)] mt-1">{tasaContacto.toFixed(1)}%</p>
        </div>
      </div>

      {/* Gráficos principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Dinero diario */}
        <div className="bg-white p-4 rounded-lg shadow h-[350px]">
          <h3 className="text-lg font-semibold mb-2 text-[var(--color-dark)]">Dinero Recaudado Diario</h3>
          <div className="h-[280px]">
            <Line
              data={{
                labels,
                datasets: [{
                  label: 'CLP',
                  data: dineroData,
                  borderColor: colorAccent,
                  backgroundColor: colorSupport,
                  pointBackgroundColor: 'var(--color-accent)',
                  pointBorderColor: 'white',
                  tension: 0.4,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) =>
                        `$${context.raw.toLocaleString('es-CL')} CLP`
                    }
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      callback: (value) => `$${value.toLocaleString('es-CL')}`,
                      color: 'var(--color-dark)'
                    },
                    grid: { color: '#eee' }
                  },
                  x: {
                    ticks: { color: 'var(--color-dark)' },
                    grid: { color: '#f5f5f5' }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Llamadas por día */}
        <div className="bg-white p-4 rounded-lg shadow h-[350px]">
          <h3 className="text-lg font-semibold mb-2 text-[var(--color-dark)]">Llamadas por Día</h3>
          <div className="h-[280px]">
            <Bar
              data={{
                labels,
                datasets: [{
                  label: 'Cantidad de Llamadas',
                  data: llamadasData,
                  backgroundColor: colorHighlight,
                  borderRadius: 4,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: { color: 'var(--color-dark)' },
                    grid: { color: '#eee' }
                  },
                  x: {
                    ticks: { color: 'var(--color-dark)' },
                    grid: { color: '#f5f5f5' }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Tasa de contacto */}
        <div className="bg-white p-4 rounded-lg shadow h-[350px] flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-dark)]">Tasa de Contacto</h3>
          <div className="w-[180px] h-[180px]">
            <Doughnut
              data={{
                labels: ['Contactadas', 'No Contactadas'],
                datasets: [{
                  data: [tasaContacto, 100 - tasaContacto],
                  backgroundColor: [colorHighlight, colorDark],
                  borderColor: 'white',
                  hoverOffset: 8,
                }]
              }}
              options={{
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) =>
                        `${context.label}: ${context.raw.toFixed(1)}%`
                    }
                  }
                }
              }}
            />
          </div>
          <p className="text-xl font-bold mt-4 text-[var(--color-primary)]">{tasaContacto.toFixed(1)}%</p>
        </div>
      </div>

      {/* Gráficos secundarios */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Duración promedio (más ancho) */}
        <div className="bg-white p-4 rounded-lg shadow h-[350px] lg:col-span-2">
          <h3 className="text-lg font-semibold mb-2 text-[var(--color-dark)]">Promedio de duración por Agente (segundos)</h3>
          <div className="h-[280px]">
            <Bar
              data={{
                labels: Object.keys(duracionPromedioPorAgente),
                datasets: [{
                  label: 'Duración (s)',
                  data: Object.values(duracionPromedioPorAgente),
                  backgroundColor: [colorHighlight, colorSecondary, colorSupport],
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: {
                      color: 'var(--color-dark)',
                      callback: value => `${value}s`
                    },
                    grid: { color: '#eee' }
                  },
                  x: {
                    ticks: { color: 'var(--color-dark)' },
                    grid: { color: '#f5f5f5' }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Tasa de éxito */}
        <div className="bg-white p-4 rounded-lg shadow h-[350px] flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-dark)]">Tasa de Éxito</h3>
          <div className="w-[180px] h-[180px]">
            <Doughnut
              data={{
                labels: ['Finalizadas', 'Otras'],
                datasets: [{
                  data: [tasaExito, 100 - tasaExito],
                  backgroundColor: [colorAccent, '#E5E7EB'],
                  borderColor: 'white',
                  hoverOffset: 6,
                }]
              }}
              options={{
                cutout: '70%',
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: context => `${context.label}: ${context.raw.toFixed(1)}%`
                    }
                  }
                },
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
          <p className="text-xl font-bold mt-4 text-[var(--color-primary)]">{tasaExito.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}
