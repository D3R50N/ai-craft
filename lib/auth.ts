import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { Request } from "express";

const JWT_SECRET = process.env.JWT_SECRET || "bloggy_vloggers_super_secret_key_2026";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: { userId: string; username: string; email: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): { userId: string; username: string; email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; username: string; email: string };
  } catch (error) {
    return null;
  }
}

export function parseCookies(cookieHeader?: string): Record<string, string> {
  const list: Record<string, string> = {};
  if (!cookieHeader) return list;

  cookieHeader.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    if (parts.length >= 2) {
      const name = parts.shift()?.trim();
      const val = decodeURIComponent(parts.join("=").trim());
      if (name) list[name] = val;
    }
  });

  return list;
}

export function getUserFromReq(req: Request) {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies.bloggy_token;
  if (!token) return null;
  return verifyToken(token);
}
