// @TODO: Review and fix this file, this can be better customized to also perform editing, and also create more kinds of resources
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUrl } from '@/medplum';

async function getQuestionnaire(token: string, id: string) {
  const url: string = getUrl(`/fhir/R4/QuestionnaireResponse/${id}`);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/fhir+json"
    }
  });

  const result = await response.json();
  return result;
};

async function createResource(token: string, data: any) {
  const url: string = getUrl(`/fhir/R4/QuestionnaireResponse`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/fhir+json"
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

async function replaceResource(token: string, id: string, data: any) {
  const url: string = getUrl(`/fhir/R4/QuestionnaireResponse/${id}`);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/fhir+json"
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};


/**
 * @swagger
 * /api/fhir/qr/?id:
 *   put:
 *     description: Same as POST will replace the information
 *   post:
 *     description: Receives FHIR information and saves it in our medplum store, to create Resources faster over JSON
 *     headers:
 *       token:
 *        description: the access token from from auth
 *        required: true
 *       content-type: 'application/json+fhir'
 *     responses:
 *       200:
 *         description: valid token, valid data
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: the patient id
 *                  resourceType:
 *                    type: string
 *                    description: the resource type, in this case
 *                    value: Resource
 *       401:
 *         description: Invalid token
 *   get:
 *     description: Retrieves information from a resource
 *     headers:
 *       token:
 *        description: the access token from from auth
 *        required: true
 *       content-type: 'application/json+fhir'
 *     responses:
 *       200:
 *         description: valid token, valid data
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: the patient id
 *                  resourceType:
 *                    type: string
 *                    description: the resource type, in this case
 *                    value: Patient
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { headers, body } = req;
  const token = headers['token'] as string;
  const { data } = JSON.parse(body);
  const id = req.query['id'] as string;

  if (!token) {
    return res.status(401).json({ message: 'INVALID_TOKEN' });
  }

  if (req.method === 'GET' && id) {
    return getQuestionnaire(token, id).then((result) => {
      res.status(200).json({
        status: result.status,
        ...result,
      })
    });
  }

  if (req.method === 'POST') {
    return createResource(token, data).then((result) => {
      res.status(200).json({
        status: result.status,
        ...result,
      })
    });
  }

  if (req.method === 'PUT' && id) {
    return replaceResource(token, id, data).then((result) => {
      res.status(200).json({
        status: result.status,
        ...result,
      })
    });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
};
