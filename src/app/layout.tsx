import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Inter } from 'next/font/google'
import { StateProvider } from '@/globalState/StateProvider';
import MedplumWrappers from './wrappers';
import ChatUI from '@/components/ui/chatUI';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proxie',
  description: 'Proxie is designed to support caregivers who are responsible for managing their loved one’s medical care and social needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StateProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className='w-full h-full bg-white sm:max-h-screen max-w-screen sm:overflow-y-scroll	'>
            <Header />
            <MedplumWrappers>
              {children}
            </MedplumWrappers>
            <Footer />
            <ChatUI/>
            </div>
          </body>
        </html>
    </StateProvider>
  )
};

