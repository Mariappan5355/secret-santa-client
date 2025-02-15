import React from 'react';
import { Assignment } from '../types/types';

interface AssignmentsListProps {
  assignments: Assignment[];
}

const AssignmentsList: React.FC<AssignmentsListProps> = ({ assignments }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Santa
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Santa Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Child
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Child Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.employeeName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.employeeEmailId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.secretChildName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.secretChildEmailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsList;