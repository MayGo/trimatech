import type { NextPage } from 'next';
import MainActions from './MainActions';

const AffordablePart: NextPage = () => {
  return (
    <section className="self-stretch bg-background-color-alternate overflow-hidden flex flex-col items-start justify-start py-8 pb-0 px-16 shrink-0 [debug_commit:f6aba90] text-center text-base text-text-alternate font-text-small-link mq750:gap-[40px] mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[77px] relative leading-[150%] font-semibold inline-block min-w-[77px]">
              Affordable
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl font-heading-desktop-h2">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit text-[45px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Cost-effective subscription model for flexibility and savings
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] font-text-small-link">
                Trimatech offers a unique subscription model that provides
                cost-effective software development solutions. With our plans,
                you can save money while enjoying the flexibility to fix bugs
                and add new features to your existing software.
              </div>
            </div>
          </div>
          <MainActions />
        </div>
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/placeholder-image@2x.png"
        />
      </div>
    </section>
  );
};

export default AffordablePart;
