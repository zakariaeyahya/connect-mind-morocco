import { UserRole } from "@/hooks/useRole";
import { User, Stethoscope, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface RoleSelectorProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const RoleSelector = ({ currentRole, onRoleChange }: RoleSelectorProps) => {
  const roles: { value: UserRole; label: string; icon: any }[] = [
    { value: "user", label: "Utilisateur", icon: User },
    { value: "professional", label: "Professionnel", icon: Stethoscope },
    { value: "admin", label: "Admin", icon: Shield }
  ];

  return (
    <div className="relative inline-block">
      <select
        value={currentRole}
        onChange={(e) => onRoleChange(e.target.value as UserRole)}
        className="appearance-none bg-secondary hover:bg-muted/50 border border-border rounded-full px-4 py-2 pr-10 cursor-pointer transition-smooth font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {roles.map((role) => (
          <option key={role.value} value={role.value}>
            {role.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {roles.find(r => r.value === currentRole)?.icon && (
          <motion.div
            key={currentRole}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {(() => {
              const Icon = roles.find(r => r.value === currentRole)!.icon;
              return <Icon className="w-4 h-4 text-primary" />;
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RoleSelector;
