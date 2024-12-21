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
const employeesrh = () => {
 const [employees] = useState([
    { id: 1, name: "Jane Cooper", phone: "(225) 555-0118", email: "jane@microsoft.com", status: "present" },
    { id: 2, name: "Floyd Miles", phone: "(205) 555-0100", email: "floyd@yahoo.com", status: "present" },
    { id: 3, name: "Ronald Richards", phone: "(302) 555-0107", email: "ronald@adobe.com", status: "absent" },
    { id: 4, name: "Marvin McKinney", phone: "(252) 555-0126", email: "marvin@tesla.com", status: "present" },
    { id: 5, name: "Jerome Bell", phone: "(629) 555-0129", email: "jerome@google.com", status: "present" },
    { id: 6, name: "Kathryn Murphy", phone: "(406) 555-0120", email: "kathryn@microsoft.com", status: "present" },
    { id: 7, name: "Jacob Jones", phone: "(208) 555-0112", email: "jacob@yahoo.com", status: "present" },
  ]);

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
      </div>
      )}


export default employeesrh;




      
    