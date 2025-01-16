import type { NextPage } from 'next';
import Link from 'next/link';

const MainActions: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left text-base text-text-alternate font-text-small-link">
      <Link
        href="/signin"
        className="btn btn-outline btn-secondary font-semibold text-base font-semibold w-[150px]"
      >
        Learn More
      </Link>

      <Link
        href="/signin"
        className="btn btn-primary font-semibold text-base font-semibold w-[150px]"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default MainActions;
