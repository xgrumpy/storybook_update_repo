export type SVGProps = {
  height: number;
  width: number;
  isActive?: boolean;
}
export const PROFILESVG = ({ height, width, isActive }: SVGProps) => {
  return isActive ? (
    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9989 29.333C23.3627 29.333 29.3322 23.3635 29.3322 15.9997C29.3322 8.63592 23.3627 2.66638 15.9989 2.66638C8.63506 2.66638 2.66553 8.63592 2.66553 15.9997C2.66553 23.3635 8.63506 29.333 15.9989 29.333Z" fill="url(#paint0_linear_2929_32856)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.989 25.8401C22.6156 28.0134 19.469 29.3334 16.0023 29.3334C12.5356 29.3334 9.38896 28.0134 7.01562 25.8401C7.14896 24.5867 7.94896 23.3601 9.37563 22.4001C13.029 19.9734 19.0023 19.9734 22.629 22.4001C24.0556 23.3601 24.8556 24.5867 24.989 25.8401Z" fill="url(#paint1_linear_2929_32856)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.1583 17.0409C16.065 17.0276 15.945 17.0276 15.8383 17.0409C13.4917 16.9609 11.625 15.041 11.625 12.681C11.625 10.2676 13.5717 8.30762 15.9983 8.30762C18.4117 8.30762 20.3717 10.2676 20.3717 12.681C20.3583 15.041 18.505 16.9609 16.1583 17.0409Z" fill="url(#paint2_linear_2929_32856)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_2929_32856" x1="4.79886" y1="7.19972" x2="25.5989" y2="27.7331" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint1_linear_2929_32856" x1="8.45349" y1="22.0681" x2="13.872" y2="33.0513" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint2_linear_2929_32856" x1="12.3247" y1="9.79228" x2="19.1369" y2="16.5273" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
      </defs>
    </svg>

  ) : (


    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.989 25.8401C22.6156 28.0134 19.469 29.3334 16.0023 29.3334C12.5356 29.3334 9.38896 28.0134 7.01562 25.8401C7.14896 24.5867 7.94896 23.3601 9.37563 22.4001C13.029 19.9734 19.0023 19.9734 22.629 22.4001C24.0556 23.3601 24.8556 24.5867 24.989 25.8401Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.1583 17.0419C16.065 17.0286 15.945 17.0286 15.8383 17.0419C13.4917 16.9619 11.625 15.0419 11.625 12.6819C11.625 10.2686 13.5717 8.30859 15.9983 8.30859C18.4117 8.30859 20.3717 10.2686 20.3717 12.6819C20.3583 15.0419 18.505 16.9619 16.1583 17.0419Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export const LOCATIONSVG = ({ height, width }:SVGProps) => {
  return (

    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99969 8.33336C8.00485 8.33336 8.81969 7.51852 8.81969 6.51336C8.81969 5.5082 8.00485 4.69336 6.99969 4.69336C5.99453 4.69336 5.17969 5.5082 5.17969 6.51336C5.17969 7.51852 5.99453 8.33336 6.99969 8.33336Z" strokeWidth="0.875" />
      <path d="M2.11036 5.45185C3.25952 0.400184 10.7437 0.406017 11.887 5.45768C12.5579 8.42102 10.7145 10.9294 9.09869 12.481C7.92619 13.6127 6.07119 13.6127 4.89286 12.481C3.28286 10.9294 1.43952 8.41518 2.11036 5.45185Z" strokeWidth="0.875" />
    </svg>

  )
}

export const CAREPLANSVG = ({ height, width, isActive }: SVGProps) => {
  return isActive ?
    (
      <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0001 29.3334C23.3639 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3639 2.66675 16.0001 2.66675C8.63628 2.66675 2.66675 8.63628 2.66675 16.0001C2.66675 23.3639 8.63628 29.3334 16.0001 29.3334Z" fill="url(#paint0_linear_2929_32808)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.442 23.2662C16.202 23.3462 15.7887 23.3462 15.5487 23.2662C13.4687 22.5595 8.802 19.5862 8.802 14.5462C8.802 12.3195 10.5887 10.5195 12.802 10.5195C14.1087 10.5195 15.2687 11.1462 16.002 12.1329C16.722 11.1595 17.8953 10.5195 19.202 10.5195C21.4153 10.5195 23.202 12.3195 23.202 14.5462C23.202 19.5862 18.5353 22.5595 16.442 23.2662Z" fill="url(#paint1_linear_2929_32808)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_2929_32808" x1="4.80008" y1="7.20008" x2="25.6001" y2="27.7334" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B10CF6" />
            <stop offset="0.324801" stopColor="#765DF9" />
            <stop offset="1" stopColor="#03E5F5" />
          </linearGradient>
          <linearGradient id="paint1_linear_2929_32808" x1="9.954" y1="12.6967" x2="19.8899" y2="23.7255" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B10CF6" />
            <stop offset="0.324801" stopColor="#765DF9" />
            <stop offset="1" stopColor="#03E5F5" />
          </linearGradient>
        </defs>
      </svg>

    )
    :
    (
      <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7 29.3334C24.0638 29.3334 30.0334 23.3639 30.0334 16.0001C30.0334 8.63628 24.0638 2.66675 16.7 2.66675C9.33624 2.66675 3.3667 8.63628 3.3667 16.0001C3.3667 23.3639 9.33624 29.3334 16.7 29.3334Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.1419 23.2662C16.9019 23.3462 16.4886 23.3462 16.2486 23.2662C14.1686 22.5595 9.50195 19.5862 9.50195 14.5462C9.50195 12.3195 11.2886 10.5195 13.502 10.5195C14.8086 10.5195 15.9686 11.1462 16.7019 12.1329C17.4219 11.1595 18.5953 10.5195 19.9019 10.5195C22.1153 10.5195 23.9019 12.3195 23.9019 14.5462C23.9019 19.5862 19.2353 22.5595 17.1419 23.2662Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )

}


export const CarePlanSVG2 = ({ height, width, isActive }: SVGProps) => {
  return (


    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7 29.3334C24.0638 29.3334 30.0334 23.3639 30.0334 16.0001C30.0334 8.63628 24.0638 2.66675 16.7 2.66675C9.33624 2.66675 3.3667 8.63628 3.3667 16.0001C3.3667 23.3639 9.33624 29.3334 16.7 29.3334Z"
        // stroke={isActive ? "white" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1419 23.2662C16.9019 23.3462 16.4886 23.3462 16.2486 23.2662C14.1686 22.5595 9.50195 19.5862 9.50195 14.5462C9.50195 12.3195 11.2886 10.5195 13.502 10.5195C14.8086 10.5195 15.9686 11.1462 16.7019 12.1329C17.4219 11.1595 18.5953 10.5195 19.9019 10.5195C22.1153 10.5195 23.9019 12.3195 23.9019 14.5462C23.9019 19.5862 19.2353 22.5595 17.1419 23.2662Z"
        // stroke={isActive ? "white" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isActive ? "url(#paint0_linear)" : "none"}
      />
      {isActive && (
        <defs>
          <linearGradient id="paint0_linear" x1="4.80008" y1="7.20008" x2="25.6001" y2="27.7334" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B10CF6" />
            <stop offset="0.324801" stopColor="#765DF9" />
            <stop offset="1" stopColor="#03E5F5" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
export const CAREPLANACTIVESVG = ({ height, width }:SVGProps) => {
  return (

    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0001 29.3334C23.3639 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3639 2.66675 16.0001 2.66675C8.63628 2.66675 2.66675 8.63628 2.66675 16.0001C2.66675 23.3639 8.63628 29.3334 16.0001 29.3334Z" fill="url(#paint0_linear_2929_32808)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.442 23.2662C16.202 23.3462 15.7887 23.3462 15.5487 23.2662C13.4687 22.5595 8.802 19.5862 8.802 14.5462C8.802 12.3195 10.5887 10.5195 12.802 10.5195C14.1087 10.5195 15.2687 11.1462 16.002 12.1329C16.722 11.1595 17.8953 10.5195 19.202 10.5195C21.4153 10.5195 23.202 12.3195 23.202 14.5462C23.202 19.5862 18.5353 22.5595 16.442 23.2662Z" fill="url(#paint1_linear_2929_32808)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_2929_32808" x1="4.80008" y1="7.20008" x2="25.6001" y2="27.7334" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint1_linear_2929_32808" x1="9.954" y1="12.6967" x2="19.8899" y2="23.7255" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
      </defs>
    </svg>




  )
}
export const SETTINGSSVG = ({ height, width }:SVGProps) => {
  return (

    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.96826 17.1733V14.8267C2.96826 13.44 4.1016 12.2933 5.5016 12.2933C7.91493 12.2933 8.9016 10.5867 7.68826 8.49333C6.99493 7.29333 7.40826 5.73333 8.62159 5.04L10.9283 3.72C11.9816 3.09333 13.3416 3.46666 13.9683 4.52L14.1149 4.77333C15.3149 6.86666 17.2883 6.86666 18.5016 4.77333L18.6483 4.52C19.2749 3.46666 20.6349 3.09333 21.6883 3.72L23.9949 5.04C25.2083 5.73333 25.6216 7.29333 24.9283 8.49333C23.7149 10.5867 24.7016 12.2933 27.1149 12.2933C28.5016 12.2933 29.6483 13.4267 29.6483 14.8267V17.1733C29.6483 18.56 28.5149 19.7067 27.1149 19.7067C24.7016 19.7067 23.7149 21.4133 24.9283 23.5067C25.6216 24.72 25.2083 26.2667 23.9949 26.96L21.6883 28.28C20.6349 28.9067 19.2749 28.5333 18.6483 27.48L18.5016 27.2267C17.3016 25.1333 15.3283 25.1333 14.1149 27.2267L13.9683 27.48C13.3416 28.5333 11.9816 28.9067 10.9283 28.28L8.62159 26.96C7.40826 26.2667 6.99493 24.7067 7.68826 23.5067C8.9016 21.4133 7.91493 19.7067 5.5016 19.7067C4.1016 19.7067 2.96826 18.56 2.96826 17.1733Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.3015 20C18.5107 20 20.3015 18.2091 20.3015 16C20.3015 13.7909 18.5107 12 16.3015 12C14.0924 12 12.3015 13.7909 12.3015 16C12.3015 18.2091 14.0924 20 16.3015 20Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export const MORESVG = ({ height, width }:SVGProps) => {
  return (

    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.69922 14C7.59922 14 6.69922 14.9 6.69922 16C6.69922 17.1 7.59922 18 8.69922 18C9.79922 18 10.6992 17.1 10.6992 16C10.6992 14.9 9.79922 14 8.69922 14ZM22.6992 14C21.5992 14 20.6992 14.9 20.6992 16C20.6992 17.1 21.5992 18 22.6992 18C23.7992 18 24.6992 17.1 24.6992 16C24.6992 14.9 23.7992 14 22.6992 14ZM15.6992 14C14.5992 14 13.6992 14.9 13.6992 16C13.6992 17.1 14.5992 18 15.6992 18C16.7992 18 17.6992 17.1 17.6992 16C17.6992 14.9 16.7992 14 15.6992 14Z" fill="#6E6E8D" />
    </svg>

  )
}
export const CARETEAMSVG = ({ height, width, isActive }: SVGProps) => {
  return isActive ? (
    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.4798 10.7861C26.4798 11.3461 26.4398 11.8928 26.3732 12.4128C25.7598 12.1461 25.0932 11.9995 24.3865 11.9995C22.7598 11.9995 21.3198 12.7861 20.4265 13.9861C19.5198 12.7861 18.0798 11.9995 16.4532 11.9995C13.7198 11.9995 11.5065 14.2261 11.5065 16.9861C11.5065 20.5595 13.3998 23.2928 15.5065 25.1461C15.4398 25.1861 15.3732 25.1995 15.3065 25.2262C14.9065 25.3728 14.2398 25.3728 13.8398 25.2262C10.3865 24.0395 2.6665 19.1328 2.6665 10.7861C2.6665 7.10613 5.62649 4.13281 9.27983 4.13281C11.4532 4.13281 13.3732 5.1728 14.5732 6.78613C15.7865 5.1728 17.7065 4.13281 19.8665 4.13281C23.5198 4.13281 26.4798 7.10613 26.4798 10.7861Z" fill="url(#paint0_linear_2929_32832)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.3315 16.9867C29.3315 23.2267 23.5582 26.9067 20.9716 27.7867C20.6649 27.8933 20.1715 27.8933 19.8649 27.7867C18.7582 27.4133 17.0649 26.52 15.5049 25.1466C13.3982 23.2933 11.5049 20.56 11.5049 16.9867C11.5049 14.2267 13.7182 12 16.4515 12C18.0782 12 19.5182 12.7867 20.4249 13.9867C21.3182 12.7867 22.7582 12 24.3849 12C25.0916 12 25.7582 12.1467 26.3715 12.4133C28.1182 13.1867 29.3315 14.9333 29.3315 16.9867Z" fill="url(#paint1_linear_2929_32832)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_2929_32832" x1="4.57157" y1="7.73738" x2="21.0239" y2="25.978" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint1_linear_2929_32832" x1="12.931" y1="14.6973" x2="25.242" y2="28.3517" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
      </defs>
    </svg>

  ) : (

    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.5785 10.7861C26.5785 11.3461 26.5385 11.8928 26.4718 12.4128C25.8585 12.1461 25.1918 11.9995 24.4851 11.9995C22.8585 11.9995 21.4185 12.7861 20.5251 13.9861C19.6185 12.7861 18.1785 11.9995 16.5518 11.9995C13.8185 11.9995 11.6051 14.2261 11.6051 16.9861C11.6051 20.5595 13.4985 23.2928 15.6051 25.1461C15.5385 25.1861 15.4718 25.1995 15.4052 25.2262C15.0052 25.3728 14.3385 25.3728 13.9385 25.2262C10.4851 24.0395 2.76514 19.1328 2.76514 10.7861C2.76514 7.10613 5.72513 4.13281 9.37846 4.13281C11.5518 4.13281 13.4718 5.1728 14.6718 6.78613C15.8851 5.1728 17.8051 4.13281 19.9651 4.13281C23.6185 4.13281 26.5785 7.10613 26.5785 10.7861Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.4302 16.9867C29.4302 23.2267 23.6569 26.9067 21.0702 27.7867C20.7635 27.8933 20.2702 27.8933 19.9635 27.7867C18.8568 27.4133 17.1635 26.52 15.6035 25.1466C13.4968 23.2933 11.6035 20.56 11.6035 16.9867C11.6035 14.2267 13.8168 12 16.5502 12C18.1768 12 19.6169 12.7867 20.5235 13.9867C21.4169 12.7867 22.8569 12 24.4835 12C25.1902 12 25.8568 12.1467 26.4702 12.4133C28.2168 13.1867 29.4302 14.9333 29.4302 16.9867Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>




  )
}
export const HOMESVG = ({ height, width, isActive }: SVGProps) => {
  return isActive ?
    (
      <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4244 3.75947L4.18442 11.1595C3.14442 11.9861 2.47775 13.7328 2.70442 15.0395L4.47775 25.6528C4.79775 27.5461 6.61108 29.0795 8.53108 29.0795H23.4644C25.3711 29.0795 27.1978 27.5328 27.5177 25.6528L29.2911 15.0395C29.5044 13.7328 28.8378 11.9861 27.8111 11.1595L18.5711 3.77281C17.1444 2.62614 14.8377 2.62614 13.4244 3.75947Z" fill="url(#paint0_linear_2929_32784)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 24V20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_2929_32784" x1="4.79381" y1="7.35975" x2="25.2064" y2="27.8975" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B10CF6" />
            <stop offset="0.324801" stopColor="#765DF9" />
            <stop offset="1" stopColor="#03E5F5" />
          </linearGradient>
        </defs>
      </svg>

    )
    :
    (
      <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4244 3.75947L4.18442 11.1595C3.14442 11.9861 2.47775 13.7328 2.70442 15.0395L4.47775 25.6528C4.79775 27.5461 6.61108 29.0795 8.53108 29.0795H23.4644C25.3711 29.0795 27.1977 27.5328 27.5177 25.6528L29.2911 15.0395C29.5044 13.7328 28.8378 11.9861 27.8111 11.1595L18.5711 3.77281C17.1444 2.62614 14.8377 2.62614 13.4244 3.75947Z" stroke="#6E6E8D" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 24V20" stroke="#6E6E8D" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    )
}
export const HOMEICONSVG = ({ height, width }:SVGProps) => {
  return (

    <svg className="home-nav" width={width} height={height} viewBox={`9 7 ${height + 4} ${width + 4}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_5366_39023)">
        <circle cx="42.5" cy="38.5" r="30.5" fill="#5964F7" />
        <circle cx="42.5" cy="38.5" r="29.5" fill="white" stroke="url(#paint0_linear_5366_39023)" strokeWidth="2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M41.3773 20.8105C39.205 21.2894 37.5622 22.7535 36.8584 24.8376L36.6082 25.5786L36.5786 29.0851L36.549 32.5915H33.2396C29.4995 32.5915 29.1848 32.6288 28.0042 33.2118C24.7335 34.827 23.7006 38.8687 25.7809 41.9114C26.5366 43.0168 27.788 43.8854 29.1328 44.2382C29.7711 44.4057 30.126 44.4118 39.1121 44.4118H48.4294V35.1332C48.4294 26.9023 48.4138 25.7892 48.291 25.2755C47.7941 23.1976 46.1309 21.4707 44.0864 20.91C43.3505 20.7081 42.0573 20.6607 41.3773 20.8105ZM43.5445 23.5998C44.5976 23.9638 45.2765 24.6634 45.5927 25.711C45.7612 26.2695 45.7651 26.4834 45.743 34.0029L45.7204 41.7214L38.1523 41.7471C32.7864 41.7655 30.434 41.744 30.0682 41.6732C28.9661 41.4602 27.9753 40.6453 27.6063 39.6484C27.4821 39.3128 27.4261 38.9547 27.4246 38.4867C27.4229 37.9139 27.4629 37.7216 27.6854 37.234C28.1505 36.2145 29.0058 35.5411 30.1078 35.3267C30.3771 35.2743 32.3593 35.2378 34.9361 35.2378H39.3076L39.332 30.4964C39.3558 25.8502 39.36 25.7468 39.5422 25.3426C39.9007 24.5468 40.7253 23.8175 41.5739 23.5455C42.1257 23.3686 42.9402 23.391 43.5445 23.5998Z" fill="url(#paint1_linear_5366_39023)" />
        <path d="M50.0642 35.2374V33.9077V32.5781L52.8377 32.6083C55.5878 32.6382 55.6168 32.6405 56.2645 32.8743C58.232 33.5843 59.6753 35.1345 60.1617 37.06C60.3398 37.7645 60.3406 39.2317 60.1636 39.9441C59.9036 40.9901 59.471 41.7385 58.6247 42.6066C58.0161 43.2307 57.7015 43.4772 57.176 43.7413C55.9504 44.3573 55.6071 44.4082 52.6657 44.41L50.0642 44.4114V43.0883V41.7651H52.3682C54.8539 41.7651 55.3535 41.6996 56.0413 41.2829C58.5428 39.7677 57.923 35.986 55.0714 35.3662C54.6579 35.2763 53.8623 35.2401 52.2787 35.2389L50.0642 35.2374Z" fill="url(#paint2_linear_5366_39023)" />
        <path d="M36.802 52.0261C36.6386 51.4845 36.6168 51.157 36.5837 48.7559L36.5469 46.0875H37.9305H39.314V48.554C39.314 50.8327 39.3276 51.0579 39.4922 51.5089C39.7412 52.1917 40.3873 52.8909 41.1035 53.2526C41.6343 53.5205 41.7375 53.5414 42.5373 53.5414C43.293 53.5414 43.4598 53.5122 43.8924 53.3042C44.4308 53.0454 45.1426 52.3746 45.3816 51.9008C45.7124 51.2449 45.7621 50.7898 45.7631 48.403L45.7641 46.0875H47.0971H48.4302V48.6315C48.4302 51.5273 48.3568 52.0279 47.7649 53.1698C47.3614 53.9483 46.3601 55.0046 45.5921 55.4622C44.6185 56.0422 43.87 56.2318 42.5527 56.2318C41.2176 56.2318 40.6939 56.1161 39.753 55.6132C38.3027 54.8379 37.2721 53.5853 36.802 52.0261Z" fill="url(#paint3_linear_5366_39023)" />
      </g>
      <defs>
        <filter id="filter0_dd_5366_39023" x="0" y="-6" width="85" height="91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5366_39023" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_5366_39023" result="effect2_dropShadow_5366_39023" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5366_39023" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_5366_39023" x1="16.88" y1="18.37" x2="64.46" y2="65.34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint1_linear_5366_39023" x1="26.6012" y1="24.7498" x2="45.0791" y2="43.0194" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint2_linear_5366_39023" x1="38.4468" y1="36.5993" x2="56.8975" y2="54.8867" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
        <linearGradient id="paint3_linear_5366_39023" x1="38.4468" y1="36.5993" x2="56.8975" y2="54.8867" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10CF6" />
          <stop offset="0.324801" stopColor="#765DF9" />
          <stop offset="1" stopColor="#03E5F5" />
        </linearGradient>
      </defs>
    </svg>





  )
}


export const CHAT_SVG = ({height,width}: SVGProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_2929_32870)">
        <g clipPath="url(#clip0_2929_32870)">
          <rect x="11" y="7" width="56" height="56" rx="16" fill="#F3D4FF" />
          <path d="M45 41.8597H44.24C43.44 41.8597 42.68 42.1697 42.12 42.7297L40.41 44.4197C39.63 45.1897 38.36 45.1897 37.58 44.4197L35.87 42.7297C35.31 42.1697 34.54 41.8597 33.75 41.8597H33C31.34 41.8597 30 40.5298 30 38.8898V27.9797C30 26.3397 31.34 25.0098 33 25.0098H45C46.66 25.0098 48 26.3397 48 27.9797V38.8898C48 40.5198 46.66 41.8597 45 41.8597Z" stroke="#7A11A4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39.28 37.96C39.13 38.01 38.88 38.01 38.72 37.96C37.42 37.51 34.5 35.66 34.5 32.51C34.5 31.12 35.62 30 37 30C37.82 30 38.54 30.39 39 31C39.46 30.39 40.18 30 41 30C42.38 30 43.5 31.12 43.5 32.51C43.49 35.66 40.58 37.51 39.28 37.96Z" stroke="#7A11A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <defs>
        <filter id="filter0_dd_2929_32870" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2929_32870" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_2929_32870" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_2929_32870" result="effect2_dropShadow_2929_32870" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2929_32870" result="shape" />
        </filter>
        <clipPath id="clip0_2929_32870">
          <rect x="11" y="7" width="56" height="56" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}