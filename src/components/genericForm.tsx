"use client";
// GenericForm.js
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import Comps from '@/images/Comps.png';
import Visibility from '@/images/visibility.png';
import NonVisibility from '@/images/visibility_off.png';

type AdditionalContent  = React.ReactElement<{ type: "submit" }>;

type FormConfig = {
    fields: {
        [key: string]: {
            type: string;
            label: string;
            autoComplete: string | undefined;
            required: boolean;
        };
    };
    onSubmit: SubmitHandler<Record<string, string>>;
    formHeading: string;
    additionalContent: AdditionalContent;
};


const GenericForm: React.FC<FormConfig> = ({ formHeading, fields, onSubmit, additionalContent }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const imageStyle = {
        color: 'transparent',
        width: '444px',
        minHeight: '600px',
        position: 'absolute',
        bottom: '0',
        marginLeft: '5em'
    }

    const Form = () => {
        const [showPassword, setShowPassword] = useState(false);
        const inputType = showPassword ? 'text' : 'password';
        return (
            <div className="flex w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-2/3 h1/2 z-10 mx-auto mt-56">
                    <h2 className="mb-32 sm:text-center lg:text-left">{formHeading}</h2>
                    {Object.keys(fields).map((fieldName) => (
                        <div key={fieldName} className='relative'>
                            <input className="rounded-lg bg-grayLightest py-3 px-3.5 mb-3 w-full" placeholder={fields[fieldName].label} type={fields[fieldName].type === "password" ? inputType : fields[fieldName].type} autoComplete={fields[fieldName].autoComplete}
                                {...register(`${fieldName}`, { required: fields[fieldName].required })} /> {fields[fieldName].type === 'password' &&
                                    <Image
                                        src={showPassword ? NonVisibility : Visibility}
                                        alt="Proxie Logo"
                                        priority
                                        data-testid="proxie-logo"
                                        className='max-h-4 w-4 absolute top-1/4 right-4 cursor-pointer'
                                        onClick={() => setShowPassword(!showPassword)}
                                    // style={}
                                    />}
                            {errors[fieldName] && <span>This field is required</span>}
                        </div>
                    ))}
                    {additionalContent}
                </form>
            </div>
        )
    }
    return (
        <div className="w-screen h-screen flex">
            <div className="flex flex-row sm:w-full lg:w-1/2">
                <Form />
            </div>

            <div className="sm:hidden lg:flex lg:flex-row lg:w-1/2 mx-auto" style={{ backgroundColor: '#5964F7' }}>
                <div className="flex-row mx-auto mt-20 p-4 mx-16 text-white text-5xl font-semibold text-center leading-12">Bridging gaps to < span className='italic font-normal'>enrich</span> the care relationship</div>
                <Image
                    src={Comps}
                    alt="Proxie Logo"
                    priority
                    data-testid="proxie-logo"
                    className='max-h-8 w-8'
                    // style={imageStyle}
                />
            </div>
        </div>
    );
};

export default GenericForm;
