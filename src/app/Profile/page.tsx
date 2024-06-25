'use client'
import React, { useContext, useState } from 'react';
import LoginForm from '../login/page';
import AVI from '@/images/profile-sample.png';
import Image from 'next/image';
import Link from 'next/link';
import { AttachmentButton } from '@medplum/react';
import { useForm } from 'react-hook-form';
import { store } from '@/globalState/StateProvider';
const INITIAL_EXAMPLE = { fullName: "Beth Johnson", email: "bethjohnson@mail.com", city: "Orlando", state: "FL", cityState: "Orlando, FL", phone: "+1 (985) 478-6988", prefferedMessenger: "WhatsApp" }
type ProfileComponentTypes = {
  isReadOnly: boolean;
  onSubmit: (arg:any) => void;
}

type FormStateType = {
  fullName: string; 
  email: string; 
  city:string; 
  state: string; 
  cityState: string; 
  phone: string; 
  prefferedMessenger: string;
}

const ProfileInformation = ({ isReadOnly, onSubmit }: ProfileComponentTypes) => {
  const { state } = useContext(store);

  const displayName = state.apiResponse?.data?.profile?.display;
  const email = state.apiResponse?.data?.user?.display;

  const INITIAL_STATE = { fullName: displayName, email: email, city: "Orlando", state: "FL", cityState: "Orlando, FL", phone: "", prefferedMessenger: "WhatsApp" }


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: INITIAL_STATE,
  });
  //Should Query for the profile info if not already in state



  return (
    <div className="flex-auto p-5 mt-8">
      <form onSubmit={handleSubmit(() => onSubmit(touchedFields))} className="">

        {/* <div className="flex items-center mb-4"> */}

        {/* User Details */}
        <div className="flex flex-col w-full">


          <div className="flex flex-row w-full border-b border-outlineGrey pb-2 pt-2">
            <label htmlFor="fullName" className="mr-auto text-sm font-normal text-proxieSecondary">Full Name</label>
            <input type="text" id="fullName" placeholder="Beth Johnson" className="placeholder:text-proxiePrimary text-right text-proxiePrimary text-lg font-normal bg-transparent outline-none" readOnly={isReadOnly}
              {...register(`fullName`, { required: true })} />
          </div>
          {/* </div> */}

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="flex flex-row w-full border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="email" className="mr-auto text-sm font-normal text-proxieSecondary">Email</label>
            <input type="email" id="email" placeholder="bethjohnson@mail.com" className="text-right placeholder:text-proxiePrimary text-proxiePrimary bg-transparent outline-none" readOnly={isReadOnly}
              {...register(`email`, { required: true })} />
          </div>
          <div className="flex flex-row w-full border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="cityState" className="mr-auto text-sm font-normal text-proxieSecondary">City/State</label>
            <input type="text" id="cityState" placeholder="Orlando, FL" className="text-right placeholder:text-proxiePrimary text-proxiePrimary bg-transparent outline-none" readOnly={isReadOnly}
              {...register(`cityState`, { required: true })} />

          </div>
          <div className="flex flex-row w-full border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="phone" className="mr-auto text-sm font-normal text-proxieSecondary">Phone number</label>
            <input type="tel" id="phone" placeholder="+1 (985) 478-6988" className="text-right placeholder:text-proxiePrimary text-proxiePrimary bg-transparent outline-none" readOnly={isReadOnly}
              {...register(`phone`, { required: true })} />

          </div>
          <div className="flex flex-row w-full border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="messenger" className="mr-auto text-sm font-normal text-proxieSecondary">Preferred messenger</label>
            <select id="messenger" className="text-right text-proxiePrimary bg-transparent outline-none pr-2" disabled={isReadOnly} defaultValue={"WhatsApp"}>
              <option >WhatsApp</option>
              <option >Text</option>
              <option >CALL</option>
              {/* Other options */}
            </select>
          </div>

        </div>

        {/* Save Button */}
        {/* <button className="mx-auto mt-1 appearance-none relative rounded-3xl h-10 w-1/2 bg-primaryBlue text-white font-light margin-auto" type="submit" // Toggle readOnly state
 >Save </button>       */}
      </form>

    </div>

  )
}

const Button = (props) => {
  return <button {...props} />;
};


const handleUpload = (e) => {
  e.preventDefault();

  console.log("TEST", e.target.value)

}
const ProfileComponent = () => {
  const [profileData, setProfileData] = useState(INITIAL_EXAMPLE)
  const [isReadOnly, setReadOnly] = useState(true)


  const onSubmit = (formState: FormStateType ) => {

    console.log("TESTSTSTST", formState);
    window.alert("Submitted")
    return setReadOnly(true)

  }
  const [isSMSChecked, setIsSMSChecked] = useState(false)
  const [isEmailChecked, setIsEmailChecked] = useState(false)


  return (
    //Header
    <div className='flex-column w-11/12 mx-auto sm:0 md:mt-24'>
      <div className='flex mt-24 text-titleCard font-medium mb-8 mt-4'>Profile settings</div>
      <div className='flex sm:flex-col sm:h-fit md:flex-row md:h-96'>
        <div className="flex flex-col  outline outline-outlineGrey rounded-lg bg-white shadow-test sm:flex-row sm:w-full sm:mt-8 md:flex-col md:mt-0 md:w-3/5">
          {/* <!-- General Section Title --> */}
          <div className='flex sm:flex-col sm:mx-auto md:flex-row md:mx-0'>

            <div className="flex-none">
              <span className="text-headingCard font-semibold mt-3 ml-5 inline-block text-2xl">General</span>
              {/* User Image */}
              <div className="p-4 flex mx-auto flex-col">
                <Image
                  src={AVI}
                  alt="location-icon"
                  priority
                  data-testid="proxie-logo"
                  width={140}
                  className='mx-auto'
                // style={}
                />
                {/* <img src="path_to_image" alt="User" className="rounded-full h-full w-full object-cover" /> */}
                {/* <Link className="ml-5 mt-2 text-smallLink underline" href="/">Change Photo</Link> */}

                <AttachmentButton onUpload={(e) => handleUpload(e)}>{props => <Button className=" mt-2 text-smallLink underline" {...props}>Change Photo</Button>}</AttachmentButton>

              </div>
            </div>


            {/* <!-- User Information Section --> */}


            <ProfileInformation isReadOnly={isReadOnly} setReadOnly={setReadOnly} onSubmit={onSubmit} profileInfo={profileData} />
            <div className='flex sm:flex-row md:hidden'>
              {!isReadOnly ? <button className="mx-auto mt-1 mb-8 cursor-pointer appearance-none relative rounded-3xl h-10 w-11/12 bg-primaryBlue text-white font-light margin-auto" type="submit" onClick={() => onSubmit()} // Toggle readOnly state
              >Save </button> :
                <button
                  className="mx-auto mt-1 mb-8 cursor-pointer appearance-none rounded-3xl h-10 w-11/12 bg-white text-proxiePrimaryBlue border border-primaryBlue font-light"
                  onClick={() => setReadOnly(false)} // Toggle readOnly state
                  type="button" // Specify button type to prevent form submission
                >Edit</button>}
            </div>
          </div>
          <div className='sm:hidden md:flex md:flex-row'>
            {!isReadOnly ? <button className="mx-auto mt-1 cursor-pointer appearance-none relative rounded-3xl h-10 w-1/2 bg-primaryBlue text-white font-light margin-auto" type="submit" onClick={() => onSubmit()} // Toggle readOnly state
            >Save </button> :
              <button
                className="mx-auto mt-1 cursor-pointer appearance-none rounded-3xl h-10 w-1/2 bg-white text-proxiePrimaryBlue border border-primaryBlue font-light"
                onClick={() => setReadOnly(false)} // Toggle readOnly state
                type="button" // Specify button type to prevent form submission
              >Edit</button>}
          </div>

        </div>

        {/* PAYMENT OPTIONS */}
        <div className='flex flex-col outline outline-outlineGrey rounded-lg bg-white shadow-test sm:ml-0 sm:w-full sm:mt-8 sm:h-96 md:ml-4 md:w-2/5 md:mt-0 md:h-full'>
          <span className='text-headingCard font-semibold mt-3 ml-5 inline-block text-2xl'>Payment options</span>
          <div className="flex mx-auto w-11/12 flex-row border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="messenger" className="mr-auto text-sm font-normal text-proxieSecondary">Free</label>
            <label htmlFor="messenger" className="ml-auto text-sm font-normal text-proxiePrimary">$0</label>

          </div>
          <input className="mx-auto mt-6 mb-6 appearance-none relative rounded-3xl h-10 w-11/12 bg-white text-proxiePrimaryBlue border border-primaryBlue font-light" type="submit" value="Upgrade your plan" />

          <div className='mx-auto my-auto font-normal text-proxieSecondary'>No payment method</div>
          {/*  Radio Button examples
          <label className="ml-4 flex bg-gray-100 text-gray-700 rounded-md px-3 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Country"/>
             <span className="pl-4">... 4321</span>
        </label>
        <label className="ml-4 flex bg-gray-100 text-gray-700 rounded-md px-3 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Country"/>
             <span className="pl-4">... 3343</span>
        </label> */}
          <input className="mx-auto mt-6 mb-6 appearance-none relative rounded-3xl h-10 w-11/12 bg-white text-proxiePrimaryBlue border border-primaryBlue font-light" type="submit" value="Add payment method" />

        </div>
      </div>


      <div className='flex sm:flex-col md:flex-row md:mt-8'>

        <div className='flex flex-col h-48 outline outline-outlineGrey rounded-lg bg-white shadow-test sm:w-full sm:mt-8 md:w-1/3 md:mt-0'>
          <span className='text-headingCard font-semibold mt-3 ml-5 inline-block text-2xl'>Access account</span>
          <div className='flex flex-col mx-auto my-auto w-11/12'>

            <div className="flex flex-row w-full border-b border-outlineGrey pb-2 ">
              <label htmlFor="full-name" className="mr-auto text-sm font-normal text-proxieSecondary">Password</label>
              <input type="password" id="password" value="Password" className="text-right text-proxiePrimary text-lg font-normal bg-transparent outline-none" readOnly={isReadOnly} />
            </div>

            <input className="mx-auto mt-6 appearance-none relative rounded-3xl h-10 w-full bg-white text-proxiePrimaryBlue border border-primaryBlue font-light" type="submit" value="Change Password" />
          </div>

        </div>
        {/* PAYMENT OPTIONS */}
        <div className='flex flex-col h-48 outline outline-outlineGrey rounded-lg bg-white shadow-test sm:w-full sm:mt-8 md:w-1/3 md:mt-0 md:ml-4'>
          <span className='text-headingCard font-semibold mt-3 ml-5 inline-block text-2xl'>Notifications</span>

          <label className=' border-b border-outlineGrey w-11/12 mx-auto pt-4 pb-2 autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              name='autoSaver'
              className='sr-only'
              checked={isEmailChecked}
              onChange={() => setIsEmailChecked(!isEmailChecked)}
            />
            <span className='label text-proxieSecondary flex items-center text-sm font-normal text-black'>
              Receive email notifications
            </span>
            <span className='flex ml-auto'>

              <span
                className={`slider mr-3 flex h-[32px] w-[48px] items-center rounded-full p-1 duration-200 ${isEmailChecked ? 'bg-primaryBlue' : 'bg-proxieSecondary'
                  }`}
              >
                <span
                  className={`dot h-[25px] w-[25px] rounded-full bg-white duration-200 ${isEmailChecked ? 'translate-x-4' : ''
                    }`}
                ></span>
              </span>
            </span>

          </label>

          <label className=' border-b border-outlineGrey w-11/12 mx-auto pt-4 pb-2 autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              name='autoSaver'
              className='sr-only'
              checked={isSMSChecked}
              onChange={() => setIsSMSChecked(!isSMSChecked)}
            />
            <span className='label text-proxieSecondary flex items-center text-sm font-normal text-black'>
              Receive SMS notifications
            </span>
            <span className='flex ml-auto'>

              <span
                className={`slider mr-3 flex h-[32px] w-[48px] items-center rounded-full p-1 duration-200 ${isSMSChecked ? 'bg-primaryBlue' : 'bg-proxieSecondary'
                  }`}
              >
                <span
                  className={`dot h-[25px] w-[25px] rounded-full bg-white duration-200 ${isSMSChecked ? 'translate-x-4' : ''
                    }`}
                ></span>
              </span>
            </span>

          </label>

        </div>
        <div className='flex flex-col h-32 outline outline-outlineGrey rounded-lg bg-white shadow-test sm:w-full sm:mt-8 md:mt-0 md:ml-4 md:w-1/3'>
          <span className='text-headingCard font-semibold mt-3 ml-5 inline-block text-2xl'>Space & Time</span>

          <div className="flex mx-auto w-11/12 flex-row border-b border-outlineGrey pb-2 pt-4">
            <label htmlFor="messenger" className="mr-auto text-sm font-normal text-proxieSecondary">Time Zone Preference</label>
            <select id="messenger" className="text-right text-proxiePrimary bg-transparent outline-none pr-2">
              <option selected></option>
            </select>
          </div>

        </div>
      </div>


      <div className='flex'>

        <div className='mt-16 text-alert underline flex sm:mx-auto sm:mb-16 md:mr-auto md:ml-0'>Delete account</div>
      </div>
    </div>
  )
}

const Profile = () => {
  const token = localStorage.getItem('authToken');

  return (
    <div className="w-screen min-h-screen flex">
      {token ? <ProfileComponent /> : <LoginForm />}
    </div>
  )
};




export default Profile;
