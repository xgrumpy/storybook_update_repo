import localFont from 'next/font/local';

export const satoshiFont = localFont({ src: './files/Satoshi-Variable.ttf', weight: '400 900', 'variable': '--satoshi-variable' });

export const coolveticaFont = localFont({
  src: [
    { path: './files/coolvetica-regular.otf', weight: '400 900', style: 'regular' },
  ],
  'variable': '--coolvetica-regular-variable'
});


