import type { NextApiRequest, NextApiResponse } from 'next'

interface Data{
    message:string;
    page:string;
}
export default async function asynchandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    try {
        console.log(req.body)
      const response = await fetch(process.env.NEXT_PUBLIC_SHEET_API + "?action=" + req.body.action, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
        res.status(200).send({message:"success",page:"/thank-you"});
    } catch (error) {
      console.error(error);
      res.status(200).send({message:"error",page:"error"});

    }
  
  }