import { useState, useEffect } from "react";

export type UserRole = "user" | "professional" | "admin";

export const useRole = () => {
  const [role, setRole] = useState<UserRole>(() => {
    const stored = localStorage.getItem("minconnect-role");
    return (stored as UserRole) || "user";
  });

  useEffect(() => {
    localStorage.setItem("minconnect-role", role);
  }, [role]);

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
  };

  return { role, switchRole };
};
