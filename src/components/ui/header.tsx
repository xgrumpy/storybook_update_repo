import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/types/UserTypes';
import ProxieLogo from '@/images/proxie-logo.png';
import NavProfile from '@/images/nav-profile.png';
import NavCareTeam from '@/images/nav-careteam.png';
import NavCarePlan from '@/images/nav-care-plan.png';
import NavMore from '@/images/nav-more.png';
import NavHome from '@/images/nav-home.png';
import NavNoti from '@/images/nav-noti.png';
import NavMobileHome from '@/images/nav-mobile-home.png'
interface HeaderProps {
  user?: User,
  onLogin: ()=> void,
  onLogout: ()=> void,
  onCreateAccount: ()=> void,
  mobile: boolean;
}
interface StoryBookProps {
  mobile: boolean;
}

export default function Header({user }: HeaderProps, mobile :StoryBookProps) {
  const headerStyle = {
    position: 'absolute',
    left: 0
  };

  const imageContainer = {
    maxWidth:'139px',
    maxHeight: '34px',
  };

  const linksArray = [
    {
      key: 'Home',
      value: '/',
      icon: NavHome

    },
    {
      key: 'Care Plan',
      value: '/',
      icon: NavCarePlan
    },
    {
      key: 'Care Team',
      value: '/',
      icon: NavCareTeam

    },
    {
      key: 'Profiles',
      value: '/',
      icon: NavProfile
    },
    {
      key: 'More',
      value: '/',
      icon: NavMore
    },

  ]
  const linksArrayMobile = [
    {
      key: 'Care Plan',
      value: '/',
      icon: NavCarePlan
    },
    {
      key: 'Care Team',
      value: '/',
      icon: NavCareTeam

    },
    {
      key: undefined,
      value: '/',
      icon: NavMobileHome

    },
    {
      key: 'Profiles',
      value: '/',
      icon: NavProfile
    },
    {
      key: 'More',
      value: '/',
      icon: NavMore
    },

  ]

  const additionalClass = mobile ? 'absolute left-0' : '';

  return (
    <header className={`min-w-full fixed md:top-0 md:pt-4 ${additionalClass}`}>
      <div className='sm:hidden md:block'>
      <div className='pb-4 flex justify-between items-center'>
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
                <Image
                  src={link.icon}
                  alt="Proxie Logo"
                  width={32}
                  height={32}
                  priority
                  data-testid="proxie-logo"
                  className='max-h-8 w-8'
                />
                <span className='my-auto md:ml-4'>
                    {link.key}
                </span>
              </Link>
            )
          })}
        </div>
{user &&        <div className="relative">
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
      <div>
      <div className="flex mr-auto text-slate-400 md:ml-24 md:hidden	">
          {user && linksArrayMobile.map(link => {
            return (
              <Link key={`link-${link.key}`} href={link.value} className='flex flex-col mx-auto p-2 w-1/5'>
                <Image
                  src={link.icon}
                  alt="Proxie Logo"
                  width={!link.key ? 61:32}
                  height={!link.key ? 61:32}
                  priority
                  data-testid="proxie-logo"
                  // className='max-h-8 w-8 mx-auto'
                  className='mx-auto'
                />
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
