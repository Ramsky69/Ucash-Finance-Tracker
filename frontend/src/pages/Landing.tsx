import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Landing = () => {
  const navigate = useNavigate();

  // Data for the doughnut chart
  const pieData = {
    labels: ['Entertainment', 'Food', 'Transportation', 'Remaining Budget'],
    datasets: [
      {
        data: [5000, 4000, 5400, 4600], // Example values
        backgroundColor: ['#FFA500', '#1E90FF', '#9370DB', '#32CD32'],
        hoverBackgroundColor: ['#FFB347', '#63B8FF', '#AB82FF', '#90EE90'],
        borderWidth: 0, // Removes border around segments
      },
    ],
  };

  // Options for the doughnut chart
  const pieOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'top', // Must be one of the allowed values
        labels: {
          color: '#FFFFFF',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw as number; // Ensure `raw` is a number
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-500">UC</span>ASH
          </div>

          {/* Links and CTA */}
          <div className="flex items-center space-x-8">
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="/login" className="text-gray-300 hover:text-white transition-colors">
              Login
            </a>
            <button
              onClick={() => navigate('/register')}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start for free
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">
              Track your Finance with us.
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              We believe that when you track your finance, you live better. Our platform is designed to help you stay intack with finance habits that lead to long-term stability and success.
            </p>
            <button
              className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => navigate('/register')}
            >
              Register Now
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-16">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-300">Budget Overview</h3>
              <div className="mt-6" style={{ height: '300px' }}>
                <Doughnut data={pieData} options={pieOptions} />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Total Expenses: <span className="text-red-500">$15,400.00</span>
                </p>
                <p className="text-gray-400">
                  Remaining Budget: <span className="text-green-500">$4,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;