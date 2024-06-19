import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string
}

/**
 * @swagger
 * /api/healthcheck:
 *   get:
 *     description: Returns a valid response if the server is alive
 *     responses:
 *       200:
 *         description: Healthy!
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Even the smallest API can change the course of the future' })
};
