import Link from "next/link";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "./Icons";
import { useTheme } from "next-themes";
import { Bar3Icon, XMarkIcon } from "./Icons";

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 bg-slate-300 dark:text-gray-200 dark:bg-slate-700"
            : "font-normal text-gray-600 dark:text-gray-300",
          "hidden md:inline-block sm:px-3 sm:py-2 rounded-lg cursor-pointer hover:underline hover:underline-offset-4"
        )}
      >
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpened, setOpen] = useState<boolean>(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-center w-full py-2 bg-slate-100 bg-opacity-40 backdrop-blur-sm dark:bg-slate-800 dark:bg-opacity-40 dark:backdrop-blur-sm z-10">
        <div className="flex justify-between items-center max-w-2xl w-full px-4">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <a className="font-semibold text-xl mr-4 ">Duy Tran</a>
            </Link>
            <NavItem href="/courses" text="Courses" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/goodies" text="Goodies" />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-slate-300 hover:ring-2 ring-gray-400 dark:bg-slate-700 dark:ring-slate-500"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? (
                <SunIcon fill="#FFFFFF" />
              ) : (
                <MoonIcon />
              )}
            </button>

            <button
              onClick={() => setOpen(!isOpened)}
              className="w-9 h-9 flex items-center justify-center rounded-md border visible md:hidden border-slate-400 dark:border-slate-300"
            >
              {isOpened ? <XMarkIcon /> : <Bar3Icon />}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          isOpened ? "translate-x-0 " : "translate-x-full",
          "fixed h-screen w-screen z-10 left-0 visible md:hidden flex flex-col bg-slate-100 bg-opacity-40 backdrop-blur-sm dark:bg-slate-800 dark:bg-opacity-40 dark:backdrop-blur-sm ease-in-out duration-300",
          "py-4 px-8 divide-y divide-slate-400 dark:divide-slate-600"
        )}
      >
        <Link href="/courses" passHref>
          <a
            className="font-semibold text-lg py-4"
            onClick={() => setOpen(false)}
          >
            Courses
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a
            className="font-semibold text-lg py-4"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
        </Link>
        <Link href="/blog" passHref>
          <a
            className="font-semibold text-lg py-4"
            onClick={() => setOpen(false)}
          >
            Blog
          </a>
        </Link>
        <Link href="/goodies" passHref>
          <a
            className="font-semibold text-lg py-4"
            onClick={() => setOpen(false)}
          >
            Goodies
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
