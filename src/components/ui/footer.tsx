import React from 'react';
import Image from 'next/image';
import ProxieLogo from '@/images/proxie-logo-light.svg';

const Footer = (styleProps:any) => {

  const footerStyle = {
     backgroundColor: '#313132',
    ...styleProps.styleProps

  };
  const linkContainer = {
    marginBottom: '50px',
    left: '120px',
    display: 'flex'
  };
  const logoSubtextStyle = {
    fontSize: '18px',
    fontWeight: '200',
    lineHeight: '24px',
    letterSpacing: '0em',
    marginTop: '24px'
  };
  const linkCategory = {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '0em',
  };
  const footerLink = {
    fontSize: '18px',
    fontWeight: '300',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: '#FFFFFFCC'
  };
  const copyrightSubtextStyle = {
    fontSize: '16px',
    fontWeight: '200',
    lineHeight: '23px',
    letterSpacing: '0em',
    margin: '1.25em auto'
  };
  const lineStyle = {
    width: '90%',
    borderTop: '1px solid #fff', // Add a white top border to create the line
    display: 'flex',
    margin: 'auto'
  }
  const mobileButton = {
    width: '85%'
  };

  // Mock array of links 
  const linksArray = [
    {
      label: 'Navigation',
      urlKeyValuePair: [
        {
          key: 'About Us',
          vlaue: '/'
        },
        {
          key: 'Resources',
          vlaue: '/'
        },
        {
          key: 'Careers',
          vlaue: '/'
        },
        {
          key: 'For Families',
          vlaue: '/'
        },
        {
          key: 'For Providers',
          vlaue: '/'
        },
        {
          key: 'For Employers',
          vlaue: '/'
        },

      ]
    },
    {
      label: 'Contact',
      urlKeyValuePair: [
        {
          key: 'Facebook',
          vlaue: '/'
        },
        {
          key: 'Instagram',
          vlaue: '/'
        },
        {
          key: 'hello@proxiehealth.com',
          vlaue: '/'
        },

      ]
    }
  ]

  return (
    <footer className="flex flex-col sm:h-screen md:h-96 w-screen text-white " style={footerStyle}>
      <div className="w-full flex sm:flex-wrap md:flex-nowrap md:min-w-full md:h-3/4">
        <div className="md:w-2/5 sm:w-full" >
          <div className=" flex relative md:top-16 md:left-32 flex-col sm:left-0 top-0 ">
            <Image
              src={ProxieLogo}
              alt="Proxie Logo"
              width={200}
              height={49}
              priority
              data-testid="proxie-logo"
              className='sm:w-32 mt-8 ml-5 md:w-52 md:mt-0 md:ml-0'
            />
            <span className='ml-5 mb-10' style={logoSubtextStyle}>Transforming at-home care</span>
            <div className='md:hidden sm:flex mx-auto' style={mobileButton}>
              <button className="sm:  font-extralight w-full h-12 w-44 px-3 py-1 rounded-full bg-white text-primary">Join Proxie</button>
            </div>
          </div>
        </div>
        <div className="sm:w-full sm:flex-col md:flex-row w-3/5 md:mt-16 ml-8 " style={linkContainer}>
          {linksArray.map((linkObject) => {
            return (
              <div key={linkObject.label} className='sm:w-full sm:mt-10 md:w-1/2 h-full md:mt-4'>
                <span style={linkCategory}>{linkObject.label}</span>
                <div className='flex flex-col flex-wrap md:h-full'>
                  {linkObject.urlKeyValuePair.map((links) => {
                    return (
                      <a key={links.key} className="block mt-6" style={footerLink} href={links.vlaue}>{links.key}</a>
                    )
                  }
                  )}
                </div>
              </div>
            )
          })}
          <button className="sm:hidden md:block font-extralight relative right-28 w-142 h-12 w-44 px-3 py-1 rounded-full bg-white text-primary">Join Proxie</button>
        </div>
      </div>
      <div className="flex flex-col">
        <hr style={lineStyle} />
        <span style={copyrightSubtextStyle}>© 2023 Proxie. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;