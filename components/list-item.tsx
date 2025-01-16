import type { NextPage } from "next";

export type ListItemType = {
  iconAlarm?: string;
  heading?: string;
  text?: string;
};

const ListItem: NextPage<ListItemType> = ({ iconAlarm, heading, text }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[187px] text-left text-xl text-text-alternate font-heading-desktop-h2">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconAlarm}
      />
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {heading}
      </b>
      <div className="self-stretch relative text-base leading-[150%] font-text-small-link">
        {text}
      </div>
    </div>
  );
};

export default ListItem;
