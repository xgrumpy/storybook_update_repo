import type { NextApiRequest, NextApiResponse } from 'next';
import { Extension, ResponseData } from './index.d';

const createExtension = function (props: Extension) {
  const defaults: Extension = {
    description: 'We use extensions to add additional information to resources that are not part of the FHIR standard.',
    url: 'https://dev.lotuscares.ai/extensions/',
    resource: '',
    valueType: 'string',
  }

  return ({
    ...defaults,
    ...props
  });
};

const Extensions: Extension[] = [
  createExtension({ url: 'claimpower_id', description: 'Id to match Patients in a Claimpower database', resource: 'Patient', valueType: 'string' }),
  createExtension({ url: 'claimpower_db_name', description: 'Key associated with Patient or Resource owner in ClaimPower', resource: '*', valueType: 'string' }),
  createExtension({ url: 'proxie_id', description: 'Id to match Patients in Proxie', resource: 'Patient', valueType: 'string' }),
  createExtension({ url: 'phasezero_id', description: 'Id to match Patients in Proxie', resource: 'Patient', valueType: 'string' }),
  createExtension({ url: 'phasezero_tenant_id', description: 'PhaseZero client database', resource: 'Organization,Patient', valueType: 'string' }),
  createExtension({ url: 'lotus_id', description: 'Our local identifier', resource: '*', valueType: 'string' }),
  createExtension({ url: 'slug', description: 'Local identifier for easier URLs', resource: 'Questionnaire', valueType: 'string' }),
  createExtension({ url: 'form_id', description: 'Unique form identifier for forms', resource: 'Questionnaire', valueType: 'string' }),
  createExtension({ url: 'form_type', description: 'Form categories can change the behavior ', resource: 'Questionnaire', valueType: 'string' }),
  createExtension({ url: 'url', description: 'External URL with additional information', resource: '*', valueType: 'string' }),
  createExtension({ url: 'settings.ui.vitalCodes', description: 'List of LOINC codes to display in the capture form', resource: '*', valueType: 'code[]' }),
  createExtension({ url: 'careteam_address', description: 'Address for the CareTeam', resource: 'CareTeam', valueType: 'Address' }),
  createExtension({ url: 'careteam_name', description: 'Address for the CareTeam', resource: 'CareTeam', valueType: 'Address' }),
  createExtension({ url: 'medplum_id', description: 'Medplum ID', resource: 'Patient', valueType: 'string' }),
  createExtension({ url: 'submit_text', description: 'Medplum ID', resource: 'Patient', valueType: 'string' }),
  createExtension({ url: 'format', description: 'Medplum ID', resource: 'Resource', valueType: 'JSON|YAML' }),
];

/**
 * @swagger
 * /api/extensions/?name:
 *   get:
*     description: See extension definitions for FHIR Resources
 *     responses:
 *       200:
 *         description: Returns a list of extensions or a single one when a name is provided
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const name = req.query['name'] as string;

  if (name) {
    const extension = Extensions.find((e) => e.url == name) || createExtension({ url: name, description: '', resource: '', valueType: '' });

    return res.status(200).json({
      message: 'Resource Extensions - Proxie',
      timestamp: Date.now(),
      extensions: [extension],
      name,
    });
  }

  res.status(200).json({
    message: 'Resource Extensions - Proxie',
    timestamp: Date.now(),
    extensions: Extensions,
  });
}
