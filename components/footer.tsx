import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-background-color-alternate overflow-hidden flex flex-col items-start justify-start py-20 px-16 gap-[8px] shrink-0 [debug_commit:f6aba90] text-left text-sm text-text-alternate font-text-small-link mq750:gap-[40px] mq750:py-[52px] mq750:px-8 mq750:box-border mq450:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-between gap-[8px] max-w-full lg:flex-wrap mq750:gap-[32px] mq450:gap-[16px]">
        <div className="w-[189px] h-[75px] relative overflow-hidden shrink-0">
          <img
            className="absolute top-[16px] left-[15px] w-[157px] h-[42px] object-cover"
            loading="lazy"
            alt=""
            src="/trimatech-logo33real1-1@2x.png"
          />
        </div>
        <div className="self-center flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--facebook.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--instagram.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--x.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--linkedin.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch h-px relative bg-background-color-alternate box-border border-[1px] border-solid border-background-color-alternate" />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="h-[21px] w-[240px] relative leading-[150%] inline-block">
            © 2024 Trimatech. All rights reserved.
          </div>
          <div className="w-[377px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <div className="h-[21px] w-[87px] relative [text-decoration:underline] leading-[150%] inline-block">
              Privacy Policy
            </div>
            <div className="h-[21px] flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[89px]">
              Terms and Conditions
            </div>
            <div className="h-[21px] w-[105px] relative [text-decoration:underline] leading-[150%] inline-block">
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
