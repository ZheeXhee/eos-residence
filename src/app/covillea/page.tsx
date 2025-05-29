import Covillea from "@/components/residences/covillea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covillea",
  description: "Find your ideal hostel today at EOS Residence!",
};

export default function CovilleaPage() {
  return (
    <div className="px-4">
      <Covillea />
    </div>
  );
}