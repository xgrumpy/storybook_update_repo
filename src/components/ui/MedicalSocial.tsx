import React from 'react';

const MedicalSocial: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className='w-full border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
        <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Medical</span>
        <div className="p-5 h-56">
          <p className="text-splitCard font-semibold">Medical Services</p>
          <p className="text-smallLink h-48 flex items-center justify-center">Medical services not added</p>
        </div>
        <div className="p-5 h-56 mb-8">
          <p className="text-splitCard font-semibold">Health Plan Providers</p>
          <p className="text-smallLink h-48 flex items-center justify-center">Health Plan Providers not added</p>
        </div>
      </div>
      <div className='w-full border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
        <span className='text-titleCard font-semibold mt-5 ml-5 inline-block'>Social</span>
        <div className="container mx-auto p-4 space-y-4">
          <div className="flex items-center justify-between p-4 border border-outlineGrey rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-500">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.77344 14.5234V20.1359C3.77344 25.7484 6.02344 27.9984 11.6359 27.9984H18.3734C23.9859 27.9984 26.2359 25.7484 26.2359 20.1359V14.5234" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.9967 15.5C17.2842 15.5 18.9717 13.6375 18.7467 11.35L17.9217 3H12.0842L11.2467 11.35C11.0217 13.6375 12.7092 15.5 14.9967 15.5Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22.8953 15.5C25.4203 15.5 27.2703 13.45 27.0203 10.9375L26.6703 7.5C26.2203 4.25 24.9703 3 21.6953 3H17.8828L18.7578 11.7625C18.9703 13.825 20.8328 15.5 22.8953 15.5Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.05388 15.5C9.11638 15.5 10.9789 13.825 11.1789 11.7625L11.4539 9L12.0539 3H8.24138C4.96638 3 3.71638 4.25 3.26638 7.5L2.92888 10.9375C2.67888 13.45 4.52888 15.5 7.05388 15.5Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.0078 21.75C12.9203 21.75 11.8828 22.7875 11.8828 24.875V28H18.1328V24.875C18.1328 22.7875 17.0953 21.75 15.0078 21.75Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Supermarket</p>
                <p className="text-lg font-semibold">Supermarket Name</p>
              </div>
            </div>
            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90625 20.4201L15.4263 13.9001C16.1963 13.1301 16.1963 11.8701 15.4263 11.1001L8.90625 4.58008" stroke="#A8A8BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-outlineGrey rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-500">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 3V15.5C18.75 16.875 17.625 18 16.25 18H2.5V8C2.5 5.2375 4.7375 3 7.5 3H18.75Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.5 18V21.75C27.5 23.825 25.825 25.5 23.75 25.5H22.5C22.5 24.125 21.375 23 20 23C18.625 23 17.5 24.125 17.5 25.5H12.5C12.5 24.125 11.375 23 10 23C8.625 23 7.5 24.125 7.5 25.5H6.25C4.175 25.5 2.5 23.825 2.5 21.75V18H16.25C17.625 18 18.75 16.875 18.75 15.5V6.75H21.05C21.95 6.75 22.775 7.23751 23.225 8.01251L25.3625 11.75H23.75C23.0625 11.75 22.5 12.3125 22.5 13V16.75C22.5 17.4375 23.0625 18 23.75 18H27.5Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 28C21.3807 28 22.5 26.8807 22.5 25.5C22.5 24.1193 21.3807 23 20 23C18.6193 23 17.5 24.1193 17.5 25.5C17.5 26.8807 18.6193 28 20 28Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.5 15.5V18H23.75C23.0625 18 22.5 17.4375 22.5 16.75V13C22.5 12.3125 23.0625 11.75 23.75 11.75H25.3625L27.5 15.5Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Grocery delivery service</p>
                <p className="text-lg font-semibold">Delivery Name</p>
              </div>
            </div>
            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90625 20.4201L15.4263 13.9001C16.1963 13.1301 16.1963 11.8701 15.4263 11.1001L8.90625 4.58008" stroke="#A8A8BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div className='border border-outlineGrey rounded-lg shadow-sm  p-4'>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <div className="text-2xl text-gray-500">
                  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4531 14.0875C11.3281 14.075 11.1781 14.075 11.0406 14.0875C8.06562 13.9875 5.70312 11.55 5.70312 8.55C5.70312 5.4875 8.17813 3 11.2531 3C14.3156 3 16.8031 5.4875 16.8031 8.55C16.7906 11.55 14.4281 13.9875 11.4531 14.0875Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.5141 5.5C22.9391 5.5 24.8891 7.4625 24.8891 9.875C24.8891 12.2375 23.0141 14.1625 20.6766 14.25C20.5766 14.2375 20.4641 14.2375 20.3516 14.25" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.19844 18.7C2.17344 20.725 2.17344 24.025 5.19844 26.0375C8.63594 28.3375 14.2734 28.3375 17.7109 26.0375C20.7359 24.0125 20.7359 20.7125 17.7109 18.7C14.2859 16.4125 8.64844 16.4125 5.19844 18.7Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.9297 25.5C23.8297 25.3125 24.6797 24.95 25.3797 24.4125C27.3297 22.95 27.3297 20.5375 25.3797 19.075C24.6922 18.55 23.8547 18.2 22.9672 18" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Community activity center</p>
                  <p className="text-lg font-semibold">Community Name</p>
                </div>
              </div>
              <div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.90625 20.4201L15.4263 13.9001C16.1963 13.1301 16.1963 11.8701 15.4263 11.1001L8.90625 4.58008" stroke="#A8A8BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='flex space-x-4 ml-1'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4308 9.57227C13.3995 11.541 13.3995 14.726 11.4308 16.686C9.46203 18.646 6.27703 18.6548 4.31703 16.686C2.35703 14.7173 2.34828 11.5323 4.31703 9.57227" stroke="#030733" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.27 11.7333C7.2225 9.68578 7.2225 6.36078 9.27 4.30453C11.3175 2.24828 14.6425 2.25703 16.6987 4.30453C18.755 6.35203 18.7462 9.67703 16.6987 11.7333" stroke="#030733" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-sm text-blue-500">linkwebsite.com</p>
            </div>
          </div>
          <div className='border border-outlineGrey rounded-lg shadow-sm  p-4'>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <div className="text-2xl text-gray-500">
                  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3359 7.58787L8.06093 10.1879L6.11094 6.98789C5.39843 5.81289 5.77343 4.26289 6.94843 3.55039C8.12343 2.83789 9.67343 3.21287 10.3859 4.38787L12.3359 7.58787Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.7778 11.95L10.8278 14.35C8.52783 15.75 7.82782 18.575 8.94032 20.825L11.5028 26.05C12.3278 27.7375 14.3278 28.325 15.9278 27.3375L23.9653 22.45C25.5778 21.475 25.9653 19.4375 24.8528 17.925L21.3903 13.25C19.8903 11.225 17.0778 10.55 14.7778 11.95Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4526 6.87269L7.04688 10.7734L9.64737 15.0439L16.0531 11.1432L13.4526 6.87269Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.8906 21.5117L19.9531 24.8992" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6875 23.4629L16.75 26.8504" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0859 19.5625L23.1484 22.95" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Home cleaning service</p>
                  <p className="text-lg font-semibold">Service Name</p>
                </div>
              </div>
              <div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.90625 20.4201L15.4263 13.9001C16.1963 13.1301 16.1963 11.8701 15.4263 11.1001L8.90625 4.58008" stroke="#A8A8BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='flex space-x-4 ml-1'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4308 9.57227C13.3995 11.541 13.3995 14.726 11.4308 16.686C9.46203 18.646 6.27703 18.6548 4.31703 16.686C2.35703 14.7173 2.34828 11.5323 4.31703 9.57227" stroke="#030733" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.27 11.7333C7.2225 9.68578 7.2225 6.36078 9.27 4.30453C11.3175 2.24828 14.6425 2.25703 16.6987 4.30453C18.755 6.35203 18.7462 9.67703 16.6987 11.7333" stroke="#030733" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-sm text-blue-500">linkwebsite.com</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-outlineGrey rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-500">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.875 13C9.29125 13 11.25 11.0412 11.25 8.625C11.25 6.20875 9.29125 4.25 6.875 4.25C4.45875 4.25 2.5 6.20875 2.5 8.625C2.5 11.0412 4.45875 13 6.875 13Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 26.75C9.29125 26.75 11.25 24.7912 11.25 22.375C11.25 19.9588 9.29125 18 6.875 18C4.45875 18 2.5 19.9588 2.5 22.375C2.5 24.7912 4.45875 26.75 6.875 26.75Z" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.5 8L10.8125 20.475" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.5 22.9641L10.8125 10.4766" stroke="#6E6E8D" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Barber/Salon</p>
                <p className="text-lg font-semibold">Barber Name</p>
              </div>
            </div>
            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90625 20.4201L15.4263 13.9001C16.1963 13.1301 16.1963 11.8701 15.4263 11.1001L8.90625 4.58008" stroke="#A8A8BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSocial;