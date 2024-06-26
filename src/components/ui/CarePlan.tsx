import React from 'react';

const CarePlan: React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-headingCard font-semibold mb-4">Care plan</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='w-full border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
          <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Medical</span>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3359 3.33398V8.33398" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6641 3.33398V8.33398" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.83594 15.1504H34.1693" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 14.1673V28.334C35 33.334 32.5 36.6673 26.6667 36.6673H13.3333C7.5 36.6673 5 33.334 5 28.334V14.1673C5 9.16732 7.5 5.83398 13.3333 5.83398H26.6667C32.5 5.83398 35 9.16732 35 14.1673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9882 22.8314H20.0032" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.8164 22.8314H13.8313" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.8164 27.8314H13.8313" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Doctor visits</p>
              <p className="text-smallLink pt-4">Next: <span className='text-customRed'>today</span ></p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6094 14.8008H29.3594" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6406 14.8008L11.8906 16.0508L15.6406 12.3008" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.6094 26.4688H29.3594" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6406 26.4687L11.8906 27.7187L15.6406 23.9688" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0026 36.6673H25.0026C33.3359 36.6673 36.6693 33.334 36.6693 25.0007V15.0007C36.6693 6.66732 33.3359 3.33398 25.0026 3.33398H15.0026C6.66927 3.33398 3.33594 6.66732 3.33594 15.0007V25.0007C3.33594 33.334 6.66927 36.6673 15.0026 36.6673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">To Do List</p>
              <p className="text-customGreen text-smallLink pt-4">3 tasks left</p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1693 31.6673H13.3359C6.66927 31.6673 3.33594 30.0007 3.33594 21.6673V13.334C3.33594 6.66732 6.66927 3.33398 13.3359 3.33398H26.6693C33.3359 3.33398 36.6693 6.66732 36.6693 13.334V21.6673C36.6693 28.334 33.3359 31.6673 26.6693 31.6673H25.8359C25.3193 31.6673 24.8193 31.9173 24.5026 32.334L22.0026 35.6673C20.9026 37.134 19.1026 37.134 18.0026 35.6673L15.5026 32.334C15.2359 31.9673 14.6193 31.6673 14.1693 31.6673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6641 13.334H28.3307" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6641 21.666H21.6641" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Coaching</p>
              <p className="text-smallLink pt-4">4 articles</p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3307 13.7507V30.0007C33.3307 35.0007 30.3474 36.6673 26.6641 36.6673H13.3307C9.6474 36.6673 6.66406 35.0007 6.66406 30.0007V13.7507C6.66406 8.33398 9.6474 7.08398 13.3307 7.08398C13.3307 8.11732 13.7474 9.05064 14.4307 9.73398C15.114 10.4173 16.0474 10.834 17.0807 10.834H22.9141C24.9807 10.834 26.6641 9.15065 26.6641 7.08398C30.3474 7.08398 33.3307 8.33398 33.3307 13.7507Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6693 7.08398C26.6693 9.15065 24.9859 10.834 22.9193 10.834H17.0859C16.0526 10.834 15.1192 10.4173 14.4359 9.73398C13.7526 9.05064 13.3359 8.11732 13.3359 7.08398C13.3359 5.01732 15.0193 3.33398 17.0859 3.33398H22.9193C23.9526 3.33398 24.886 3.75066 25.5693 4.43399C26.2526 5.11732 26.6693 6.05065 26.6693 7.08398Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3359 21.666H20.0026" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3359 28.334H26.6693" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Medication regimen</p>
              <p className="text-smallLink pt-4">24 medications</p>
            </div>
          </div>
        </div>
        <div className='w-full border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
          <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Social</span>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6094 14.8008H29.3594" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6406 14.8008L11.8906 16.0508L15.6406 12.3008" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.6094 26.4688H29.3594" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6406 26.4687L11.8906 27.7187L15.6406 23.9688" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0026 36.6673H25.0026C33.3359 36.6673 36.6693 33.334 36.6693 25.0007V15.0007C36.6693 6.66732 33.3359 3.33398 25.0026 3.33398H15.0026C6.66927 3.33398 3.33594 6.66732 3.33594 15.0007V25.0007C3.33594 33.334 6.66927 36.6673 15.0026 36.6673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Grocery, pharmacy</p>
              <p className="text-smallLink pt-4">7 items</p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3359 3.33398V8.33398" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6641 3.33398V8.33398" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.83594 15.1504H34.1693" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 14.1673V28.334C35 33.334 32.5 36.6673 26.6667 36.6673H13.3333C7.5 36.6673 5 33.334 5 28.334V14.1673C5 9.16732 7.5 5.83398 13.3333 5.83398H26.6667C32.5 5.83398 35 9.16732 35 14.1673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9882 22.8314H20.0032" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.8164 22.8314H13.8313" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.8164 27.8314H13.8313" stroke="#A8A8BF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">community center</p>
              <p className="text-smallLink pt-4">Next: 10/01</p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3307 13.7507V30.0007C33.3307 35.0007 30.3474 36.6673 26.6641 36.6673H13.3307C9.6474 36.6673 6.66406 35.0007 6.66406 30.0007V13.7507C6.66406 8.33398 9.6474 7.08398 13.3307 7.08398C13.3307 8.11732 13.7474 9.05064 14.4307 9.73398C15.114 10.4173 16.0474 10.834 17.0807 10.834H22.9141C24.9807 10.834 26.6641 9.15065 26.6641 7.08398C30.3474 7.08398 33.3307 8.33398 33.3307 13.7507Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6693 7.08398C26.6693 9.15065 24.9859 10.834 22.9193 10.834H17.0859C16.0526 10.834 15.1192 10.4173 14.4359 9.73398C13.7526 9.05064 13.3359 8.11732 13.3359 7.08398C13.3359 5.01732 15.0193 3.33398 17.0859 3.33398H22.9193C23.9526 3.33398 24.886 3.75066 25.5693 4.43399C26.2526 5.11732 26.6693 6.05065 26.6693 7.08398Z" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3359 21.666H20.0026" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3359 28.334H26.6693" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Home service</p>
              <p className="text-smallLink pt-4">Next: 09/29</p>
            </div>
            <div className="flex flex-col border-2 border-customGray items-center justify-center p-4 rounded  bg-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className='mb-2' xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1693 31.6673H13.3359C6.66927 31.6673 3.33594 30.0007 3.33594 21.6673V13.334C3.33594 6.66732 6.66927 3.33398 13.3359 3.33398H26.6693C33.3359 3.33398 36.6693 6.66732 36.6693 13.334V21.6673C36.6693 28.334 33.3359 31.6673 26.6693 31.6673H25.8359C25.3193 31.6673 24.8193 31.9173 24.5026 32.334L22.0026 35.6673C20.9026 37.134 19.1026 37.134 18.0026 35.6673L15.5026 32.334C15.2359 31.9673 14.6193 31.6673 14.1693 31.6673Z" stroke="#A8A8BF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6641 13.334H28.3307" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6641 21.666H21.6641" stroke="#A8A8BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-splitCard font-semibold">Coaching</p>
              <p className="text-smallLink pt-4">5 articles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlan;