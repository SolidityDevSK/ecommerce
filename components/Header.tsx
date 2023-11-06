import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
];

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-slate-500 text-white shadow-md" : ""
      } hover:bg-slate-500 mx-3 my-auto font-bold hover:text-white hover:shadow-md py-1.5 px-3 text-sm rounded-full`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex border-b-2 justify-between p-4">
      <div className="flex">
        <Image src="/next.svg" width={130} height={130} alt="next-logo" />
      </div>
      <div className="flex">
        {navLinks.map((i, k) => (
          <NavLink key={k} href={i.href}>
            {i.label}
          </NavLink>
        ))}
      </div>
      <div>
        <button className="border-2 rounded-2xl bg-slate-700 text-white font-bold px-8 py-2">
          Login
        </button>
        <button className="border-2 rounded-2xl bg-slate-700 text-white font-bold px-8 py-2">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
