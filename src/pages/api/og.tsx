import { ImageResponse } from '@vercel/og';
import type { NextApiRequest } from 'next';
// import absoluteUrl from 'next-absolute-url';

export const config = {
  runtime: 'edge',
};

/**
 * @swagger
 * /api/og:
 *   post:
 *     description: |
 *       Using a questionnaire responses id, it creates and returns a PDF file
 *     params:
 *       title:
 *        description: Title
 *       content-type: 'application/json'
 *     responses:
 *       200:
 *         description: OG image to embed
 *         content:
 *            application/png:
 */
export default async function handler(request: NextApiRequest) {

  const { searchParams } = new URL(request.url as string);
  // const { protocol, host } = absoluteUrl(request, 'localhost:8004');
  // const baseUrl: string = `${protocol}//${host}/`;

  const hasTitle = searchParams.has('title');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Human assisted healthcare';

  // const imageData = await fetch(new URL('./image.png', import.meta.url)).then(
  //   (res) => res.arrayBuffer(),
  // );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '36px 72px',
          textAlign: 'left',
          // justifyContent: 'start,./',
          alignItems: 'flex-start',
          display: 'flex'
        }}
      >
        <>
          <div style={{ margin: '36px 0', display: 'flex' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-code" width="120" height="120" viewBox="0 0 24 24" stroke-width="2" stroke="#FF0386" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img width="256" height="256" alt="proxie" src={imageData} /> */}

          <h1 style={{ position: 'absolute', fontSize: '28px', top: '150px' }}>
            Proxie  </h1>
          <h2 style={{ position: 'absolute', fontSize: '28px', top: '200px', maxWidth: '70%', color: '#0B53FF' }}>
            {title}
          </h2>
        </>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
