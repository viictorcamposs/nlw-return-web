import { CloseButton } from "../../CloseButton";

import { FeedbackType, feedbackTypes } from "..";
import { ArrowLeft } from "phosphor-react";

type IProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested(): void;
};

export function FeedbackContentStep(props: IProps): JSX.Element {
  const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          onClick={props.onFeedbackRestartRequested}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-1">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />

          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  );
}
