import React from 'react';


const CareTips: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded">
      <h2 className="text-headingCard font-semibold mb-4">Care & Condition Tips</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col border-2 border-outlineGrey justify-center p-4 rounded-md shadow-md  bg-white">
          <span className='flex flex-row mb-2'>
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3281 18.332C16.5373 18.332 18.3281 16.5412 18.3281 14.332C18.3281 12.1229 16.5373 10.332 14.3281 10.332C12.119 10.332 10.3281 12.1229 10.3281 14.332C10.3281 16.5412 12.119 18.332 14.3281 18.332Z" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8193 14.3828H12.8359" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.3281 12.9238V15.9155" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.3307 7.24039C18.3307 8.88205 17.9057 10.332 17.2391 11.5904C16.5057 10.8154 15.4724 10.3321 14.3307 10.3321C12.1224 10.3321 10.3307 12.1237 10.3307 14.3321C10.3307 15.3571 10.7224 16.2904 11.3557 16.9987C11.0474 17.1404 10.7641 17.2571 10.5141 17.3404C10.2307 17.4404 9.76407 17.4404 9.48073 17.3404C7.06407 16.5154 1.66406 13.0737 1.66406 7.24039C1.66406 4.66539 3.73906 2.58203 6.29739 2.58203C7.80573 2.58203 9.15573 3.3154 9.9974 4.4404C10.8391 3.3154 12.1891 2.58203 13.6974 2.58203C16.2557 2.58203 18.3307 4.66539 18.3307 7.24039Z" stroke="#FF5151" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='flex font-semibold  text-titleCard flex justify-center items-center ml-2'>Managing Diabetes at Home</span>
          </span>
          <span className='flex flex-row mt-0 font-light'>Taking charge of diabetes management is crucial to lead a healthy life. At home, you can play an active role in controlling your blood sugar levels and overall well-being. Check out these valuable tips to help you stay on top of your diabetes care:</span>
          <span className='flex justify-end text-primaryBlue underline'>Read More</span>
        </div>
        <div className="flex flex-col border-2 border-outlineGrey justify-center p-4 rounded-md shadow-md  bg-white">
          <span className='flex flex-row mb-2'>
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.95937 2.04063C9.53437 1.54896 10.476 1.54896 11.0594 2.04063L12.376 3.17405C12.626 3.39071 13.0927 3.56569 13.426 3.56569H14.8427C15.726 3.56569 16.451 4.29063 16.451 5.17397V6.59069C16.451 6.91569 16.626 7.3907 16.8427 7.6407L17.976 8.95733C18.4677 9.53233 18.4677 10.474 17.976 11.0573L16.8427 12.374C16.626 12.624 16.451 13.0907 16.451 13.424V14.8407C16.451 15.724 15.726 16.449 14.8427 16.449H13.426C13.101 16.449 12.626 16.624 12.376 16.8406L11.0594 17.974C10.4844 18.4656 9.54271 18.4656 8.95937 17.974L7.64272 16.8406C7.39272 16.624 6.92604 16.449 6.59271 16.449H5.15103C4.2677 16.449 3.54271 15.724 3.54271 14.8407V13.4156C3.54271 13.0906 3.36771 12.624 3.15938 12.374L2.03437 11.049C1.55104 10.474 1.55104 9.54067 2.03437 8.96567L3.15938 7.6407C3.36771 7.3907 3.54271 6.92404 3.54271 6.59904V5.17397C3.54271 4.29063 4.2677 3.56569 5.15103 3.56569H6.59271C6.91771 3.56569 7.39272 3.39071 7.64272 3.17405L8.95937 2.04063Z" stroke="#FFCC30" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.24325 12.3497L9.45156 13.283C9.6099 13.4413 9.95991 13.5163 10.1932 13.5163H11.6682C12.1349 13.5163 12.6432 13.1664 12.7599 12.6997L13.6932 9.84966C13.8849 9.30799 13.5349 8.83302 12.9516 8.83302H11.3932C11.1599 8.83302 10.9682 8.64141 11.0016 8.36641L11.1932 7.11641C11.2682 6.76641 11.0349 6.37471 10.6849 6.25805C10.3766 6.14138 9.98491 6.29968 9.82657 6.53301L8.22656 8.90799" stroke="#FFCC30" stroke-width="1.25" stroke-miterlimit="10" />
              <path d="M6.25 12.3493V8.53269C6.25 7.98269 6.48334 7.79102 7.03334 7.79102H7.425C7.96667 7.79102 8.20834 7.98269 8.20834 8.53269V12.3493C8.20834 12.891 7.975 13.091 7.425 13.091H7.03334C6.48334 13.091 6.25 12.8993 6.25 12.3493Z" stroke="#FFCC30" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='flex font-semibold  text-titleCard flex justify-center items-center ml-2'>Caring for a Loved One with Alzheimer's</span>
          </span>
          <span className='flex flex-row mt-0 font-light'>Providing care for someone with Alzheimer's requires understanding, patience, and compassion. At home, you can create a supportive environment to enhance their quality of life. Here are some practical tips to guide you on your caregiving journey:</span>
          <span className='flex justify-end text-primaryBlue underline'>Read More</span>
        </div>
        <div className="flex flex-col border-2 border-outlineGrey justify-center p-4 rounded-md shadow-md  bg-white">
          <span className='flex flex-row mb-2'>
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.95937 2.04063C9.53437 1.54896 10.476 1.54896 11.0594 2.04063L12.376 3.17405C12.626 3.39071 13.0927 3.56569 13.426 3.56569H14.8427C15.726 3.56569 16.451 4.29063 16.451 5.17397V6.59069C16.451 6.91569 16.626 7.3907 16.8427 7.6407L17.976 8.95733C18.4677 9.53233 18.4677 10.474 17.976 11.0573L16.8427 12.374C16.626 12.624 16.451 13.0907 16.451 13.424V14.8407C16.451 15.724 15.726 16.449 14.8427 16.449H13.426C13.101 16.449 12.626 16.624 12.376 16.8406L11.0594 17.974C10.4844 18.4656 9.54271 18.4656 8.95937 17.974L7.64272 16.8406C7.39272 16.624 6.92604 16.449 6.59271 16.449H5.15103C4.2677 16.449 3.54271 15.724 3.54271 14.8407V13.4156C3.54271 13.0906 3.36771 12.624 3.15938 12.374L2.03437 11.049C1.55104 10.474 1.55104 9.54067 2.03437 8.96567L3.15938 7.6407C3.36771 7.3907 3.54271 6.92404 3.54271 6.59904V5.17397C3.54271 4.29063 4.2677 3.56569 5.15103 3.56569H6.59271C6.91771 3.56569 7.39272 3.39071 7.64272 3.17405L8.95937 2.04063Z" stroke="#FFCC30" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.24325 12.3497L9.45156 13.283C9.6099 13.4413 9.95991 13.5163 10.1932 13.5163H11.6682C12.1349 13.5163 12.6432 13.1664 12.7599 12.6997L13.6932 9.84966C13.8849 9.30799 13.5349 8.83302 12.9516 8.83302H11.3932C11.1599 8.83302 10.9682 8.64141 11.0016 8.36641L11.1932 7.11641C11.2682 6.76641 11.0349 6.37471 10.6849 6.25805C10.3766 6.14138 9.98491 6.29968 9.82657 6.53301L8.22656 8.90799" stroke="#FFCC30" stroke-width="1.25" stroke-miterlimit="10" />
              <path d="M6.25 12.3493V8.53269C6.25 7.98269 6.48334 7.79102 7.03334 7.79102H7.425C7.96667 7.79102 8.20834 7.98269 8.20834 8.53269V12.3493C8.20834 12.891 7.975 13.091 7.425 13.091H7.03334C6.48334 13.091 6.25 12.8993 6.25 12.3493Z" stroke="#FFCC30" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='flex font-semibold  text-titleCard flex justify-center items-center ml-2'>Caring for a Loved One with Alzheimer's</span>
          </span>
          <span className='flex flex-row mt-0 font-light'>Providing care for someone with Alzheimer's requires understanding, patience, and compassion. At home, you can create a supportive environment to enhance their quality of life. Here are some practical tips to guide you on your caregiving journey:</span>
          <span className='flex justify-end text-primaryBlue underline'>Read More</span>
        </div>
        <div className="flex flex-col border-2 border-outlineGrey justify-center p-4 rounded-md shadow-md  bg-white">
          <span className='flex flex-row mb-2'>
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3281 18.332C16.5373 18.332 18.3281 16.5412 18.3281 14.332C18.3281 12.1229 16.5373 10.332 14.3281 10.332C12.119 10.332 10.3281 12.1229 10.3281 14.332C10.3281 16.5412 12.119 18.332 14.3281 18.332Z" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8193 14.3828H12.8359" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.3281 12.9238V15.9155" stroke="#FF5151" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.3307 7.24039C18.3307 8.88205 17.9057 10.332 17.2391 11.5904C16.5057 10.8154 15.4724 10.3321 14.3307 10.3321C12.1224 10.3321 10.3307 12.1237 10.3307 14.3321C10.3307 15.3571 10.7224 16.2904 11.3557 16.9987C11.0474 17.1404 10.7641 17.2571 10.5141 17.3404C10.2307 17.4404 9.76407 17.4404 9.48073 17.3404C7.06407 16.5154 1.66406 13.0737 1.66406 7.24039C1.66406 4.66539 3.73906 2.58203 6.29739 2.58203C7.80573 2.58203 9.15573 3.3154 9.9974 4.4404C10.8391 3.3154 12.1891 2.58203 13.6974 2.58203C16.2557 2.58203 18.3307 4.66539 18.3307 7.24039Z" stroke="#FF5151" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='flex font-semibold  text-titleCard flex justify-center items-center ml-2'>Managing Diabetes at Home</span>
          </span>
          <span className='flex flex-row mt-0 font-light'>Taking charge of diabetes management is crucial to lead a healthy life. At home, you can play an active role in controlling your blood sugar levels and overall well-being. Check out these valuable tips to help you stay on top of your diabetes care:</span>
          <span className='flex justify-end text-primaryBlue underline'>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default CareTips;