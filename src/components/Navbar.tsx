import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-50 p-4 ">
      <div className="container flex justify-between mx-auto">
        <Link href={"/"} className="font-bold text-lg">
          <i className="bi bi-code"></i> Snippets
        </Link>
        <div className="flex gap-6">
          <Link href={"/snippets/new"}>
            <i className="bi bi-plus-lg"></i> New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
