import type { NextPage } from 'next';
import { ContactForm } from './ContactForm';

const Contact: NextPage = () => {
  return (
    <section className="self-stretch bg-background-color-alternate overflow-hidden flex flex-row items-start justify-start py-28 px-16 shrink-0 text-center text-base text-text-alternate font-text-small-link mq750:gap-[40px] mq750:py-[47px] mq750:px-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border mq450:gap-[20px]">
      <div className="flex-1 flex flex-row items-start justify-start gap-[21px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[32px] min-w-[350px] max-w-full lg:flex-1 mq750:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[60px] relative leading-[150%] font-semibold inline-block min-w-[60px]">
              Efficient
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl font-heading-desktop-h2">
              <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit text-[45px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Get in touch
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] font-text-small-link">
                Have a question or want to learn more? Contact us!
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden object-cover self-center"
          alt=""
          src="/placeholder-image-3@2x.png"
        />
      </div>
    </section>
  );
};

export default Contact;
