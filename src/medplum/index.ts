// import { MedplumClient } from '@medplum/core';

// const ENV = process.env.NODE_ENV || 'development';
const DEFAULT_URL = `https://devapi.medplum.lotuscares.ai/`;

export const MEDPLUM_URL: string = process.env.NEXT_PUBLIC_MEDPLUM_BASE_URL || DEFAULT_URL;

// export const medplum: () => MedplumClient = () => new MedplumClient({
//   baseUrl: MEDPLUM_URL,
// });

export const getUrl = (path: string): string => {
  return new URL(path, MEDPLUM_URL).toString();
};

export const MEDPLUM_CLIENT_ID = process.env.MEDPLUM_CLIENT_ID || '';
export const MEDPLUM_CLIENT_SECRET = process.env.LOTUS_CLIENT_SECRET || '';
