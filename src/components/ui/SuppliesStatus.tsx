import React from 'react';

const SuppliesStatus: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Supplies Status</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <p>Canes</p>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <p>Walkers</p>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <p>Wheelchairs</p>
        </div>
      </div>
    </div>
  );
};

export default SuppliesStatus;