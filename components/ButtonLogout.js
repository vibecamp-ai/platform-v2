"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const ButtonLogout = () => {
  return (
    <Button 
      variant="ghost" 
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
};

export default ButtonLogout;