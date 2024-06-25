import React from 'react';

const CarePlan: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded">
      <h2 className="text-headingCard font-semibold mb-4">Care plan</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-1 bg-gray-100 rounded">
          <div className='w-full outline outline-outlineGrey rounded-lg bg-white shadow-test'>
            <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Medical</span>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <p className="text-splitCard font-semibold">Doctor visits</p>
                <p className="text-smallLink pt-2">Next: <span className='text-customRed'>today</span ></p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="gray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6M9 16h6M9 8h6M5 12h.01M5 16h.01M5 8h.01M17 12h.01M17 16h.01M17 8h.01M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
                <p className="text-splitCard font-semibold">To Do List</p>
                <p className="text-customGreen text-smallLink pt-2">3 tasks left</p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" />
                </svg>
                <p className="text-splitCard font-semibold">Coaching</p>
                <p className="text-smallLink pt-2">4 articles</p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
                <p className="text-splitCard font-semibold">Medication regimen</p>
                <p className="text-smallLink pt-2">24 medications</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 bg-gray-100 rounded">
          <div className='w-full outline outline-outlineGrey rounded-lg bg-white shadow-test'>
            <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Social</span>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="gray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6M9 16h6M9 8h6M5 12h.01M5 16h.01M5 8h.01M17 12h.01M17 16h.01M17 8h.01M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
                <p className="text-splitCard font-semibold">Grocery, pharmacy</p>
                <p className="text-smallLink pt-2">7 items</p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <p className="text-splitCard font-semibold">community center</p>
                <p className="text-smallLink pt-2">Next: 10/01</p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
                <p className="text-splitCard font-semibold">Home service</p>
                <p className="text-smallLink pt-2">Next: 09/29</p>
              </div>
              <div className="flex flex-col outline outline-outlineGrey items-center justify-center p-4 rounded shadow-md bg-white">
                <svg className="h-10 w-10 mb-2"  viewBox="0 0 24 24" stroke-width="1" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" />
                </svg>
                <p className="text-splitCard font-semibold">Coaching</p>
                <p className="text-smallLink pt-2">5 articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlan;