import type { NextPage } from 'next';
import Column from './column';
import MainActions from './MainActions';

const EngagePart: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-start bg-[url('/placeholder-image-1@2x.png')] bg-cover bg-no-repeat bg-center justify-start py-0 px-16 gap-[60px] shrink-0 [debug_commit:f6aba90] text-center text-base text-text-alternate font-text-small-link mq750:gap-[40px] mq750:py-[47px] mq750:px-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border mq450:gap-[20px]">
      <div className="flex flex-col items-start justify-start gap-[16px] max-w-full bg-indigo-500/20 p-8 rounded-3xl backdrop-blur-sm">
        <div className="w-[78px] relative leading-[150%] font-semibold inline-block min-w-[78px]">
          Streamline
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl font-heading-desktop-h2">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit text-[45px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Engage with Trimatech: from video calls to Trello
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-text-small-link">
            At Trimatech, we make it easy to get started. Simply schedule a
            video call with our team to discuss your software development needs.
            Once we determine that we're a good fit, we'll set up a
            collaborative Trello board to keep track of the progress.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-13xl font-heading-desktop-h2 mq750:gap-[24px] bg-indigo-500/20 p-8 rounded-3xl backdrop-blur-sm">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
          <Column
            iconCalendar="/icon--calendar.svg"
            heading="Schedule a Video Call with Our Team"
            text="Book a video call with our team to discuss your software development needs and ensure we're a good fit for your project."
          />
          <Column
            iconCalendar="/icon--award.svg"
            heading="Start Building Your Software Solution Today"
            text="Take the first step towards improving your software by scheduling a video call with our team and setting up a collaborative Trello board."
          />
          <Column
            iconCalendar="/icon--spreadsheet.svg"
            heading="Collaborative Trello Board for Progress Tracking"
            text="We'll set up a Trello board where you can collaborate with our team, track the progress of your project, and provide feedback."
          />
        </div>
        <MainActions />
      </div>
    </section>
  );
};

export default EngagePart;
