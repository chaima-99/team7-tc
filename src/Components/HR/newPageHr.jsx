import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RH = () => {
  // Liste des employés
 

  // État des tâches assignées
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (id) => {
    setTasks((prevTasks) =>
      prevTasks.includes(id) ? prevTasks.filter((taskId) => taskId !== id) : [...prevTasks, id]
    );
  };

  // Données pour le graphique
  const chartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Present",
        data: [120, 150, 180, 200, 220, 250, 300],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        fill: true,
      },
      {
        label: "Late",
        data: [100, 120, 140, 160, 180, 200, 220],
        borderColor: "rgb(249, 115, 22)",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        fill: true,
      },
      {
        label: "Absent",
        data: [50, 70, 60, 80, 100, 90, 110],
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">HR Space</h1>

      {/* Tableau des employés */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All Employees</h2>
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.phone}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td
                  className={`px-4 py-2 font-bold ${
                    employee.status === "present" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {employee.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Graphique */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Attendance Chart</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <Line data={chartData} />
        </div>
      </div>

      {/* Assignation des tâches */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tasks Assigned by Admin</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          {employees.map((employee) => (
            <div key={employee.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`task-${employee.id}`}
                className="mr-2"
                checked={tasks.includes(employee.id)}
                onChange={() => handleTaskChange(employee.id)}
              />
              <label htmlFor={`task-${employee.id}`} className="cursor-pointer">
                Task assigned to {employee.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


