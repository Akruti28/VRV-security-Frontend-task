import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement, // ArcElement for Pie chart
  Title,
  Tooltip,
  Legend,
  PieController // PieController to use Pie chart
} from "chart.js";

// Register the necessary components for Pie chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,   // ArcElement for pie chart rendering
  Title,
  Tooltip,
  Legend,
  PieController  // Register the Pie chart controller
);

const PermissionGraph = () => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      // Destroy the existing chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create the new chart with Pie chart type
      chartInstanceRef.current = new ChartJS(canvasRef.current, {
        type: "pie", // Changed to 'pie' chart
        data: {
          labels: ["Read", "Write", "Delete"], // Data labels
          datasets: [
            {
              label: "Permissions",
              data: [15, 10, 5], // Sample data for permissions
              backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(255, 99, 132, 0.5)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Permissions Overview",
            },
            legend: {
              display: true,
              position: "top",
            },
          },
        },
      });
    };

    createChart();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="flex justify-center my-6">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PermissionGraph;
