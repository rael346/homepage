import Link from "next/link";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { MoonIcon } from "./Icons";

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <span
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:underline hover:underline-offset-8 dark:hover:bg-gray-800 transition-all"
        )}
      >
        {text}
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-center w-full bg-white dark:bg-slate-50 py-4 bg-opacity-40 backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-2xl w-full">
        <div className="flex justify-between items-center space-x-2">
          <Link href="/">
            <a className="font-semibold text-xl mr-4">Duy Tran</a>
          </Link>
          <NavItem href="/courses" text="Courses" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/goodies" text="Goodies" />
        </div>

        <button
          type="button"
          className="w-9 h-9 bg-indigo-500 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-indigo-300 transition-all"
        >
          <MoonIcon fill="#FFFFFF" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
