export const Rol = {
  ADMIN: "admin",
  CLIENT: "client"
} as const;

export type Rol = (typeof Rol)[keyof typeof Rol];