'use client'
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/types/UserTypes';
import ProxieLogo from '@/images/proxie-logo.png';
import { PROFILESVG, CAREPLANSVG, CARETEAMSVG, SETTINGSSVG, HOMESVG,HOMEICONSVG, MORESVG, CarePlanSVG2 } from '@/images/svgConstants';
import NavNoti from '@/images/nav-noti.png';
import { usePathname } from 'next/navigation'
interface HeaderProps {
  user?: User,
  mobile?: boolean;
}
interface StoryBookProps {
  mobile: boolean;
}
interface SVGWrapperProps {
  children: React.ReactNode;
  className: string;
  // include other props as needed
}

export const SVGWrapper: React.FC<SVGWrapperProps> = ({ children, ...props }) => {
  return (

    <div {...props}>
      {children}
    </div>
  )

}

export default function Header({ }: HeaderProps, mobile: StoryBookProps) {
  const user = { name: "Brian" }

  const headerStyle = {
    position: 'absolute',
    left: 0
  };

  const imageContainer = {
    maxWidth: '139px',
    maxHeight: '34px',
  };

  const linksArray = [
    {
      key: 'Home',
      value: '/',
      icon: HOMESVG

    },
    {
      key: 'Care Plan',
      value: '/CarePlan',
      icon: CAREPLANSVG
    },
    {
      key: 'Coaching',
      value: '/Coaching',
      icon: CARETEAMSVG

    },
    {
      key: 'Profiles',
      value: '/Profiles',
      icon: PROFILESVG
    },
    {
      key: 'More',
      value: '/',
      icon: MORESVG
    },

  ]

  const linksArrayMobile = [
    {
      key: 'Care Plan',
      value: '/CarePlan',
      icon: CAREPLANSVG
    },
    {
      key: 'Coaching',
      value: '/Coaching',
      icon: CARETEAMSVG

    },
    {
      key: undefined,
      value: '/',
      icon: HOMEICONSVG

    },
    {
      key: 'Profiles',
      value: '/Profiles',
      icon: PROFILESVG
    },
    {
      key: 'More',
      value: '/',
      icon: SETTINGSSVG
    },

  ]

  // const linksArrayMobile = [

  //   {
  //     key: 'Care Team',
  //     value: '/',
  //     icon: LOCATIONSVG
  //   //Should include PROFILESVG somehow

  //   },
  //   {
  //     key: 'Profiles',
  //     value: '/Profiles',
  //     icon: PROFILESVG
  //   // Should include LOCATIONSVG somehow
  //   }

  // ]


  // return(
  //     <div>
  //     <div className="flex mr-auto text-slate-400 md:ml-24 md:hidden ">
  //       {user && linksArrayMobile.map(link => {
  //         return (
  //           <Link key={`link-${link.key}`} href={link.value} className='flex flex-col mx-auto p-2 w-1/5'>
  //             <SVGWrapper className='mx-auto !stroke-primaryBlue'>
  //             {link.icon({ height: 15, width: 14 })}
  //             </SVGWrapper>
  //             <span className='m-auto md:ml-4 text-[11px]'>
  //               {link.key}
  //             </span>
  //           </Link>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
  const router = usePathname();

  return (
    <header style={mobile && headerStyle} className="z-40 w-screen max-h-fit fixed md:top-0 md:pt-1 sm:bottom-0 sm:bg-primaryBlue sm:text-white md:bg-white">
      <div className='sm:hidden md:block shadow-md'>
        <div className='pb-1 flex justify-between items-center'>
          <div className="md:ml-10 md:block sm:hidden">
            <Image
              src={ProxieLogo}
              alt="Proxie Logo"
              width={139}
              height={34}
              priority
              data-testid="proxie-logo"
              style={imageContainer}
            />
          </div>
          <div className="flex mr-auto text-slate-400 md:ml-24	">
            {user && linksArray.map(link => {
              return (
                <Link key={`link-${link.key}`} href={link.value} className='flex p-4'>
                  <SVGWrapper className='!stroke-primaryBlack '>
                    {/* {link.icon({ height: !link.key ? 61 : 32, width: !link.key ? 61 : 32})} */}
                    {link.icon({ height: !link.key ? 61 : 32, width: !link.key ? 61 : 32, isActive: router == link.value })}
                  </SVGWrapper>
                  <span className='my-auto md:ml-4 text-slate-400'>
                    {link.key}
                  </span>
                </Link>
              )
            })}
          </div>
          {user && <div className="relative">
            <Image
              src={NavNoti}
              alt="Proxie Logo"
              width={24}
              height={24}
              priority
              data-testid="proxie-logo"
              className='mr-4'
            />
          </div>
          }
        </div>
      </div>
      <div className='h-20 md:hidden'>
        <div className="flex mr-auto text-slate-400 md:ml-24 md:hidden ">
          {user && linksArrayMobile.map(link => {
            return (
              <Link key={`link-${link.key}`} href={link.value} className='flex flex-col mx-auto p-2 w-1/5'>
                <SVGWrapper className='mx-auto !stroke-white '>
                {link.icon({ height: !link.key ? 61 : 32, width: !link.key ? 61 : 32, isActive: router == link.value })}
                </SVGWrapper>
                <span className='m-auto md:ml-4 text-[11px]'>
                  {link.key}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  );
}
