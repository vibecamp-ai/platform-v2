"use client";

import { signOut } from "next-auth/react";

const ButtonLogout = ({ session }) => {
	// Only render the button if the user is logged in
	if (!session) {
		return null;
	}

	return (
		<button
			className="btn btn-ghost"
			onClick={() => {
				signOut({ callbackUrl: "/" });
			}}
		>
			Logout
		</button>
	);
};

export default ButtonLogout;
