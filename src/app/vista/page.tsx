import Vista from "@/components/residences/vista";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vista Komanvel B",
  description: "Find your ideal hostel today at EOS Residence!",
};

export default function VistaPage() {
  return (
    <div className="px-4">
      <Vista />
    </div>
  )
}