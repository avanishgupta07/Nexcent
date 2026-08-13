import Link from "next/link";
import { authLinks, navigation } from "../data/site";

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 32" className="h-8 w-[42px]">
      <path fill="#4CAF50" d="M2 3h12L8 14H0L2 3Z" />
      <path fill="#4CAF50" d="M17 3h10l-5 9H12l5-9Z" />
      <path fill="#263238" d="m31 3 9 9h-9l-5-9h5Z" />
      <path fill="#4CAF50" d="m2 17 7-1 6 11H4L2 17Z" />
      <path fill="#4CAF50" d="m19 16 6 1-5 10h-9l8-11Z" />
      <path fill="#263238" d="m30 17 9-1-2 10h-9l2-9Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="h-[95px] border-t border-[#263238] bg-page">
      <div className="mx-auto flex h-full max-w-[1298px] items-center justify-between px-6 xl:px-0">
        <Link href="#home" className="flex items-center gap-2.5" aria-label="Nexcent home">
          <BrandMark />
          <span className="text-[34px] font-bold tracking-[-1.5px] text-[#263238]">Nexcent</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-[54px] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[18px] font-normal text-[#18191F] transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-10 md:flex">
          <Link href={authLinks.login.href} className="text-[16px] text-brand">
            {authLinks.login.label}
          </Link>
          <Link
            href={authLinks.signup.href}
            className="rounded-md bg-brand px-7 py-3 text-[16px] font-medium text-white transition hover:bg-[#429645]"
          >
            {authLinks.signup.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          className="rounded-md border border-[#d9dddf] p-2 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-[#263238]" />
          <span className="my-1.5 block h-0.5 w-6 bg-[#263238]" />
          <span className="block h-0.5 w-6 bg-[#263238]" />
        </button>
      </div>
    </header>
  );
}
