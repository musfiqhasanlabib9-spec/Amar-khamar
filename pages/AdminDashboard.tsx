
import React from 'react';
import { Language } from '../types';

const AdminDashboard: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Admin Control Center</h1>
        <p className="text-slate-500">Overview of the platform operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Farmers', value: '1,245', color: 'bg-indigo-600' },
          { label: 'Active Orders', value: '458', color: 'bg-green-600' },
          { label: 'Pending Verifications', value: '12', color: 'bg-amber-600' },
          { label: 'Disputes', value: '3', color: 'bg-rose-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-slate-500 text-sm font-semibold uppercase mb-2">{stat.label}</p>
            <p className="text-4xl font-extrabold text-slate-900">{stat.value}</p>
            <div className={`h-1.5 w-full mt-4 rounded-full ${stat.color}`}></div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-xl font-bold text-slate-900">Verification Queue</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-slate-500 text-sm">
                <th className="p-6 font-semibold">Farmer Name</th>
                <th className="p-6 font-semibold">District</th>
                <th className="p-6 font-semibold">Joined Date</th>
                <th className="p-6 font-semibold">Status</th>
                <th className="p-6 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: 'Jamal Uddin', dist: 'Gazipur', date: 'Oct 12, 2023', status: 'Pending' },
                { name: 'Mofizur Rahman', dist: 'Tangail', date: 'Oct 11, 2023', status: 'Reviewing' },
                { name: 'Sumon Ahmed', dist: 'Bogura', date: 'Oct 11, 2023', status: 'Pending' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-slate-800">{row.name}</td>
                  <td className="p-6 text-slate-600">{row.dist}</td>
                  <td className="p-6 text-slate-600">{row.date}</td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      row.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-green-600 font-bold text-sm hover:underline">Verify</button>
                    <button className="ml-4 text-slate-400 font-bold text-sm hover:text-slate-600">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
