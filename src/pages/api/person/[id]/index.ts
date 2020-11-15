import { NextApiRequest, NextApiResponse } from 'next'

export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    res.json({byId: req.query.id, message: "getPersonById" })
}