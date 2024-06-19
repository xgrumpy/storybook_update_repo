import { encodeBase64 } from '@medplum/core';
import { getUrl } from '@/utils/medplum';
import HTTP from '@/utils/http';
import type { TokenResponse } from '@/utils/medplum/index.d';

/**
 * This token is currently being used by get_form_url
 *
 * When a form link is created for a patient we retrieve some data from claimpower
 * All of that data about the patient is stored using this token -
 * and will be associated to the clientApplication that generated it
 *
 * @TODO: Accept a list of scopes in header to narrow tokens for different methods
 */
const DEFAULT_SCOPES: string = [
  'openid',
  // 'patient/QuestionnaireResponse.cr',
  // 'patient/Patient.crs',
  // 'patient/Questionnaire.rs',
  // 'patient/ClientApplication.crs',
  // 'project/ClientApplication.crs',
  // 'patient/ClientApplication.rs',
  // // 'patient/Coverage.crs',
  // // 'patient/ActivityDefinition.crs',
  // // 'patient/Medication.crs',
  // // 'patient/DocumentReference.crs',
  // // 'patient/MedicationAdministration.crs',
  // 'patient/Organization.crs',
].join(' ');

/**
 * Async method to get a token from the Medplum server
 * @param client_id
 * @param client_secret
 * @param scope optional string with the requested scopes "patient/Questionnaire.c"
 * @returns
 */
async function GetToken(client_id: string, client_secret: string, scope: string = DEFAULT_SCOPES): Promise<TokenResponse> {
  const tokenUrl: string = getUrl('oauth2/token');
  const authHeader = encodeBase64(`${client_id}:${client_secret}`);

  const body = new URLSearchParams();
  body.set("grant_type", "client_credentials");
  body.set("scope", scope);

  console.log("Requesting auth token", { tokenUrl, client_id, scope });

  const response = await HTTP.post(tokenUrl, {
    headers: {
      "Authorization": `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: body.toString(),
  });

  return {
    ...response.data,
    access_token: response.data?.access_token,
    status: response.status,
    ok: response.ok,
  };
};

const auth = {
  token: GetToken,
};

export default auth;
