import { CloseButton } from "../../CloseButton";

import { FeedbackType, feedbackTypes } from "..";

type IProps = {
  onFeedbackTypeChanged(key: FeedbackType): void;
};

export function FeedbackTypeStep(props: IProps): JSX.Element {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
