import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define your own payload type
interface MyJwtPayload {
  id: string;
  role?: string;
  // Add any other fields included in the token
}

export const requireSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies?.auth_token;

    if (!token) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as MyJwtPayload;

    // Optionally extend Request type (or cast for now)
    (req as any).user = decoded;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
