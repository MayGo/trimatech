import type { NextPage } from 'next';
import Column1 from './column1';

const Testimonial: NextPage = () => {
  return (
    <section className="self-stretch bg-background-color-alternate overflow-hidden flex flex-col items-start justify-start py-3 px-16 gap-[80px] shrink-0 [debug_commit:f6aba90] text-left text-29xl text-text-alternate font-heading-desktop-h2 lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[40px] mq750:pt-[73px] mq750:pb-[73px] mq750:box-border mq450:gap-[20px]">
      <div className="w-[560px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit  text-[45px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Client stories
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] font-text-small-link">
          Hear what our clients have to say
        </div>
      </div>
      <div className="w-[1280px] flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full text-xl mq750:gap-[32px] mq450:gap-[16px]">
        <Column1
          quote="Our experience with Trimatech has been exceptional. Their team consistently delivers high-quality work and has helped us improve our software significantly."
          text="John Doe"
          text1="CTO, ABC Company"
        />
        <Column1
          quote="Trimatech has been a valuable partner in our software development journey. Their expertise and dedication have made a significant impact on our application's performance and user experience."
          text="Jane Smith"
          text1="CEO, XYZ Corporation"
          propWidth="unset"
          propFlex="unset"
          propMinWidth="unset"
          propMinWidth1="82px"
          propFlex1="unset"
          propMinWidth2="unset"
          propHeight="58.5px"
          propWidth1="140px"
          propHeight1="unset"
          propFlex2="1"
          propMaxHeight="100%"
        />
      </div>
    </section>
  );
};

export default Testimonial;
