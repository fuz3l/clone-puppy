import { redirect } from "next/navigation";

/**
 * Root page redirects to /home (the new homepage).
 */
export default function RootPage() {
  redirect("/home");
}
