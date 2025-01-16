import type { NextPage } from 'next';

export type ColumnType = {
  iconCalendar?: string;
  heading?: string;
  text?: string;
};

const Column: NextPage<ColumnType> = ({ iconCalendar, heading, text }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[297px] max-w-full text-left text-13xl text-text-alternate font-heading-desktop-h2">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconCalendar}
      />
      <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
        {heading}
      </h1>
      <div className="self-stretch relative text-base leading-[150%] font-text-small-link">
        {text}
      </div>
    </div>
  );
};

export default Column;
