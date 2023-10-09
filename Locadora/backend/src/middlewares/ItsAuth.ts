import { Request , Response , NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface Payload{
    sub:string
}

export function ItsAuth(
    req: Request,
    res: Response,
    nest: NextFunction
){
    const authToken = req.headers.authorization
    if(!authToken){
        return res.status(401).end
    }
    const [, token] = authToken.split(' ')
    try{
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload
        console.log(sub)
    }catch(err){
        return res.status(401).end
    }
}