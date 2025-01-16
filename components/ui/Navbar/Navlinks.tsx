'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-[32px] max-w-full  mq750:w-[461px] mq750:gap-[16px] mq1050:w-[266px]">
        <div className="flex-1 overflow-hidden flex flex-row items-end  gap-[20px] mq1050:hidden">
          <Link
            href="/pricing"
            className="btn btn-ghost font-semibold text-base font-semibold"
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className="btn btn-ghost font-semibold text-base font-semibold"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="btn btn-ghost font-semibold text-base font-semibold"
          >
            Contact Us
          </Link>
          <Link
            href="/pricing"
            className="btn btn-ghost font-semibold text-base font-semibold"
          >
            Pricing
          </Link>
          {user && (
            <Link
              href="/account"
              className="btn btn-ghost font-semibold text-base font-semibold"
            >
              Account
            </Link>
          )}
        </div>

        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button
              type="submit"
              className="btn btn-outline btn-secondary font-semibold text-base font-semibold"
            >
              Sign out
            </button>
          </form>
        ) : (
          <Link
            href="/signin"
            className="btn btn-outline btn-secondary font-semibold text-base font-semibold w-[150px]"
          >
            Sign In
          </Link>
        )}
      </div>
    </>
  );
}
