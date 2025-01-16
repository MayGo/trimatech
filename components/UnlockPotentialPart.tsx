import type { NextPage } from 'next';
import ListItem from './list-item';

const UnlockPotentialPart: NextPage = () => {
  return (
    <section className="self-stretch bg-background-color-alternate flex flex-col items-start justify-start py-16  px-0 gap-[80px] shrink-0 [debug_commit:f6aba90] text-left text-21xl text-text-alternate font-heading-desktop-h2 lg:pt-[73px] lg:pb-[73px] lg:box-border mq750:gap-[40px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq450:gap-[20px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-20 box-border gap-[80px] max-w-full lg:gap-[40px] lg:pl-10 lg:pr-10 lg:box-border mq750:gap-[20px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start min-w-[390px] max-w-full mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit text-[45px] mq1050:text-13xl mq1050:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            Unlock your software's full potential with trimatech
          </h1>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[32px] min-w-[390px] max-w-full text-lg font-text-small-link mq750:gap-[16px] mq750:min-w-full">
          <div className="self-stretch relative leading-[150%]">
            Trimatech offers cost-effective software development solutions to
            continuously improve and maintain your software. Our unique
            subscription model provides high-quality work in a short timeframe,
            delivering more value than hiring a full-time developer.
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-xl font-heading-desktop-h2 mq750:flex-wrap">
            <ListItem
              iconAlarm="/icon--alarm.svg"
              heading="Save Time"
              text="Focus on your core business while we handle your software development needs."
            />
            <ListItem
              iconAlarm="/icon--moneywithdraw.svg"
              heading="Cost Savings"
              text="Get high-quality work done at a fraction of the cost of hiring a full-time developer."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotentialPart;
