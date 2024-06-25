'use client'
import './globals.css'
import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const medplum = new MedplumClient({
  // onUnauthenticated: () => (window.location.href = '/'),
  onUnauthenticated: () => (console.log("UNAUTHORIZED")),
});

export default function MedplumWrappers({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <MedplumProvider medplum={medplum}>

      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </MedplumProvider>


  )
}
