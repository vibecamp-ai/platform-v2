import Link from "next/link";
import ButtonLogout from "@/components/ButtonLogout";
import { auth } from "@/auth";

export default async function SuccessPage() {
	const session = await auth();

	return (
		<main className="bg-base-200 min-h-screen">
			{/* HEADER */}
			<section className="bg-base-100">
				<div className="max-w-5xl mx-auto px-5 py-3 flex justify-between">
					<Link href="/dashboard" className="btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
								clipRule="evenodd"
							/>
						</svg>
						Back
					</Link>
					<ButtonLogout session={session} />
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-5 py-12 flex flex-col items-center gap-8">
				<h1 className="text-xl font-bold">Thanks for your purchase ❤️</h1>
				<Link href="/dashboard" className="btn btn-primary">
					Go to Dashboard
				</Link>
			</section>
		</main>
	);
}
