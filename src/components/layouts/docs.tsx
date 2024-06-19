"use client";

import '@/app/globals.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconHeartCog, IconFileTypeDoc, IconHome } from '@tabler/icons-react';
import Head from 'next/head';

/**
 * Layout for Markdown pages
 *
 * @param props
 * @returns
 */
export default function DocsLayout({ children, metadata }: { children: React.ReactNode, metadata: { title: string } }) {
  // const isOpen = true;

  const title = `Proxie | ${metadata?.title || 'Developer Documentation'}`;

  // @TODO: this is interfering with rendering the mdx files in storybook
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Our platform is designed with safety and interoperability in mind, leveraging industry-standard technologies and best practices.' />
        <meta property="og:image" content={`/api/og/?title=${encodeURIComponent(title)}`} key="og:image" />
      </Head>
      <div className="mdx-layout" style={{ position: 'relative', margin: '4.20rem 1rem 2rem' }}>
      {/* <div className={`fixed z-20 inset-0 flex-none h-full w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${isOpen ? '' : 'hidden'}`} >
        <div className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
          <h2>Sidebar Nav</h2>
        </div>
      </div> */}
      {/* <button className="lg:hidden" onClick={() => )}> */}
      <div className="flex items-center justify-left" >
        <a href='/docs' title="docs homepage">
          <IconHeartCog color="#962BF9" size={36} className="mx-4" />
        </a>
        <h3>
          <a href='/docs' title='docs homepage'>
            Proxie Health Developer Documentation
          </a>
        </h3>
      </div>
      {/* </button> */}
      <div className="" style={{ maxWidth: '860px', marginLeft: '1rem' }}>
        {children}
      </div>
        <div className='py-8 flex'>
          <Link href="/">
            <IconHome size={24} className="mx-4" color='#e4007c' />
          </Link>
          {/* {router.pathname !== '/docs' && (
            <Link href="/docs">
              <IconFileTypeDoc size={24} className="mx-4" />
            </Link>
          )} */}
        </div>
    </div>
    </>
  );
};
