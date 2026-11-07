import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Service Details | AXIONYTE Consulting",
  description: "Enterprise Cybersecurity & AI Advisory Services",
};

export default function ServiceSinglePage() {
  redirect("/contact");
}
