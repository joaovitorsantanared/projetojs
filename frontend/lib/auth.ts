import jwt from "jsonwebtoken";

export interface JWTPayload {
  id: number;
  email: string;
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
  } catch {
    return null;
  }
}