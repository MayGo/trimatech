import type { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import Navlinks from './ui/Navbar/Navlinks';
import Link from 'next/link';

const Navbar: NextPage = async () => {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <header className="self-stretch bg-background-color-alternate flex flex-col items-center justify-center py-3  shrink-0 text-left text-13xl text-background-color-alternate font-bowlby-one-sc border-b-[1px] border-solid border-text-alternate mq750:pl-8 mq750:pr-8 mq750:box-border">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full">
        <Link href="/" aria-label="Logo">
          <div className="w-[201px] flex flex-row items-center justify-center gap-[10px]">
            <img
              className="h-[50px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/trimatech-logo-1@2x.png"
            />
            <div className="h-[42px] w-[147px] relative leading-[130%] capitalize hidden whitespace-nowrap">
              Trimatech
            </div>
          </div>
        </Link>

        <Navlinks user={user} />
      </div>
    </header>
  );
};

export default Navbar;
