import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Column1Type = {
  quote?: string;
  text?: string;
  text1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
  propFlex2?: CSSProperties["flex"];
  propMaxHeight?: CSSProperties["maxHeight"];
};

const Column1: NextPage<Column1Type> = ({
  quote,
  text,
  text1,
  propWidth,
  propFlex,
  propMinWidth,
  propMinWidth1,
  propFlex1,
  propMinWidth2,
  propHeight,
  propWidth1,
  propHeight1,
  propFlex2,
  propMaxHeight,
}) => {
  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth2,
      height: propHeight,
      width: propWidth1,
    };
  }, [propFlex1, propMinWidth2, propHeight, propWidth1]);

  const logosIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex2,
      maxHeight: propMaxHeight,
    };
  }, [propHeight1, propFlex2, propMaxHeight]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[32px] min-w-[395px] max-w-full text-left text-xl text-text-alternate font-heading-desktop-h2 mq750:gap-[16px] mq750:min-w-full">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
      </div>
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {quote}
      </b>
      <div
        className="w-[396px] flex flex-row items-start justify-start gap-[19.7px] max-w-full text-base font-text-small-link mq450:flex-wrap"
        style={avatarStyle}
      >
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 shrink-0">
          <img
            className="w-14 h-14 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/avatar-image@2x.png"
          />
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border min-w-[91px] shrink-0"
          style={frameDivStyle}
        >
          <div className="flex flex-col items-start justify-start">
            <div
              className="relative leading-[150%] font-semibold inline-block min-w-[68px]"
              style={textStyle}
            >
              {text}
            </div>
            <div className="relative leading-[150%]">{text1}</div>
          </div>
        </div>
        <div className="h-[62px] w-px relative box-border border-r-[1px] border-solid border-background-color-alternate mq450:w-full mq450:h-px" />
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[91px] shrink-0"
          style={frameDiv1Style}
        >
          <img
            className="self-stretch h-14 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logos.svg"
            style={logosIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Column1;
