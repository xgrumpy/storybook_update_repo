/**
 * Medplum API response type for the oauth2/token endpoint
 */
export type TokenResponse = {
  status?: number;
  access_token: string;
  scope?: string;
  ok?: boolean;
};
