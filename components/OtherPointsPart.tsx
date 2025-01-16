import type { NextPage } from 'next';

const OtherPointsPart: NextPage = () => {
  return (
    <section className="self-stretch bg-background-color-alternate overflow-hidden flex flex-row items-start justify-start py-16 px-16 shrink-0 text-left text-13xl text-text-alternate font-heading-desktop-h2 mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border  mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start  max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border max-w-full mq750:pt-[34px] mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[380px] max-w-full shrink-0 mq750:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] text-3xl font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                  Part-time software development services
                </h1>
                <div className="self-stretch relative text-base leading-[150%] font-text-small-link">
                  Trimatech offers part-time software development services to
                  small and medium-sized companies. Our team of experienced
                  developers can help you fix bugs, add new features, and
                  enhance your existing software.
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[380px] max-w-full shrink-0 mq750:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] text-3xl font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                  Flexible development solutions
                </h1>
                <div className="self-stretch relative text-base leading-[150%] font-text-small-link">
                  With our flexible development solutions, you can choose the
                  plan that suits your needs. Whether you need a steady amount
                  of development time or the ability to pause your subscription
                  during inactive months, we have you covered.
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[380px] max-w-full shrink-0 mq750:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] text-3xl font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                  Quality and value
                </h1>
                <div className="self-stretch relative text-base leading-[150%] font-text-small-link">
                  At Trimatech, we are committed to delivering high-quality work
                  in a short timeframe. Our goal is to provide you with
                  exceptional value, offering more than just bug fixes and
                  feature additions. We strive to transform your software into a
                  reliable, feature-rich, and future-proof asset.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden object-cover mr-[-64px]"
          alt=""
          src="/placeholder-image-2@2x.png"
        />
      </div>
    </section>
  );
};

export default OtherPointsPart;
