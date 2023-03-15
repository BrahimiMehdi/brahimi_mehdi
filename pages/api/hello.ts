// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  calc: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const calc = ()=>{
    return 1+1
  }
  res.status(200).json({ name: 'John Doe',calc:calc() })
}
