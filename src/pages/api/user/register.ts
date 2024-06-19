import type { NextApiRequest, NextApiResponse } from 'next';
import { getUrl } from '@/medplum';
import { User, Patient } from '@medplum/fhirtypes';
import HTTP from '@/utils/http';

type ResponseData = {
  message: string,
  req?: NextApiRequest,
  result?: any,
  patient?: Patient,
  user?: User,
  status?: number,
};

type RegisterRequest = {
  email?: string,
  phone?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  project_id?: string,
  data?: any,
  client_id?: string,
};

/**
 * @swagger
 * /client|proxie/user/register:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint registers a new user. If a password is not provided, a random password is generated.
 *     parameters:
 *       - in: header
 *         name: Content-Type
 *         required: true
 *         schema:
 *           type: string
 *           default: application/json
 *       - in: header
 *         name: client_id
 *         required: true
 *         schema:
 *           type: string
 *           default: application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user. Email or phone must be provided
 *               phone:
 *                 type: string
 *                 description: The phone number of the user. Email or phone must be provided
 *               password:
 *                 type: string
 *                 description: The password of the user. If not provided, a random password is generated.
 *               firstName:
 *                 type: string
 *                 description: The first name of the user
 *               lastName:
 *                 type: string
 *                 description: The last name of the user
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Email or phone number is required.
 *       500:
 *         description: Failed to register user.
 *       405:
 *         description: Please POST to this endpoint.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { email, phone, password, firstName, lastName, project_id, client_id } = req.body as RegisterRequest;
  const externalId = phone ? `phone:${phone}` : `email:${email}`;
  const { token } = req.headers;

  console.log("Receiving request /api/proxie/user/register", { email, phone, client_id, project_id });

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' } as ResponseData);
    return;
  }

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized client request', result: {}, status: 403 } as ResponseData);
  }

  if (!email && !phone) {
    return res.status(400).json({ message: 'Email or phone are required', result: {}, status: 400 } as ResponseData);
  }

  const userPassword = password || Math.random().toString(36).slice(2);

  const url = getUrl(`/admin/projects/${project_id}/invite`);

  // /https://www.medplum.com/docs/api/project-admin/invite
  const user = await HTTP.post(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: {
      resourceType: 'Patient',
      password: userPassword,
      firstName,
      lastName,
      email,
      sendEmail: false,
      admin: false,
      externalId,
      client_id,
    },
  });

  console.log('Creating Patient Invite', { url, status: user.status, user_id: user?.data?.id });

  // @TODO: Create PHASEZERO user here
  // @TODO: Store QuestionnaireAnwers here

  if (!user.ok) {
    console.log('Failed Creating Patient Invite', { url, status: user.status, data: user.data });
    res.status(500).json({ message: 'Failed to register user', status: user.status, data: user.data } as ResponseData);
    return;
  }

  res.status(201).json({ message: 'User registered successfully', status: user.status, data: user.data } as ResponseData);
};
