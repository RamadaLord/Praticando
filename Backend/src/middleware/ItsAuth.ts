import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function ItsAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.json({dados: 'Token Invalido'});
  }
  const [, token] = authToken.split(' ');
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload 
    req.user_id = sub
    return next();
  } catch (err) {
    return res.json({dados:'Token invalido'});
  }
}
