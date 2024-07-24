import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <Link className="text-2xl" href="/dashboard">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>
      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>
          {/* upgrade button */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
