import React from 'react';

const CareTips: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Care & Condition Tips</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <p>Managing Diabetes at Home</p>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <p>Caring for a Loved One with Alzheimer's</p>
        </div>
      </div>
    </div>
  );
};

export default CareTips;