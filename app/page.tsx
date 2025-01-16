import OtherPointsPart from '@/components/OtherPointsPart';
import EngagePart from '@/components/EngagePart';
import UnlockPotentialPart from '@/components/UnlockPotentialPart';
import AffordablePart from '@/components/AffordablePart';
import Testimonial from '@/components/testimonial';
import Link from 'next/link';
import MainActions from '@/components/MainActions';
import Contact from '@/components/contact';

export default async function HomePage() {
  return (
    <>
      <section className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[130px] px-16 bg-center bg-[url('/header--5@3x.png')] bg-cover bg-no-repeat shrink-0  text-left text-37xl text-text-alternate font-heading-desktop-h2 mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:pt-[151px] mq1050:pb-[151px] mq1050:box-border mq450:pt-[98px] mq450:pb-[98px] mq450:box-border">
        <div className="w-[760px] flex flex-col items-start justify-start gap-[24px] max-w-full bg-indigo-500/20 p-8 rounded-3xl backdrop-blur-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit text-[45px] [text-shadow:2px_2px_0px_#000]  mq1050:leading-[54px] mq450:text-[34px] mq450:leading-[40px]">
              Get access to affordable part-time software development services
              of high quality.
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] font-text-small-link [text-shadow:2px_2px_0px_#000]">
              Maintain and update your apps with subscription
            </div>
          </div>
          <MainActions />
        </div>
      </section>
      <Testimonial />
      <AffordablePart />
      <UnlockPotentialPart />
      <EngagePart />
      <OtherPointsPart />
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[129px] px-16 bg-[url('/cta--3@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:f6aba90] text-left text-29xl text-text-alternate font-heading-desktop-h2 mq750:pt-[84px] mq750:pb-[84px] mq750:box-border mq1050:gap-[40px] mq1050:pl-8 mq1050:pr-8 mq1050:box-border mq450:gap-[20px]">
        <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full bg-indigo-500/20 p-8 rounded-3xl backdrop-blur-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit [text-shadow:2px_2px_0px_#000] text-[45px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Transform your software development experience
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] font-text-small-link [text-shadow:2px_2px_0px_#000]">
              Unlock the potential of your software with Trimatech's unique
              subscription model.
            </div>
          </div>
          <MainActions />
        </div>
      </section>
      <Contact />
    </>
  );
}
