import React from 'react';

const CarePlan: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Care plan</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Medical</h3>
          <p>Doctor visits</p>
          <p>Medication regimen</p>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Social</h3>
          <p>Grocery, pharmacy</p>
          <p>Home service</p>
        </div>
      </div>
    </div>
  );
};

export default CarePlan;