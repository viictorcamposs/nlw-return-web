import { FormEvent, useState } from "react";

import { ArrowLeft } from "phosphor-react";

import { Loading } from "../../Loading";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

import { FeedbackType, feedbackTypes } from "..";

type IProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested(): void;
  onFeedbackSent(): void;
};

export function FeedbackContentStep(props: IProps): JSX.Element {
  const [comment, setComment] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  function handleSubmitFeedback(event: FormEvent): void {
    event.preventDefault();

    setIsFormSubmitting(() => true);

    setTimeout(() => {
      console.log({
        screenshot,
        comment,
      });

      setIsFormSubmitting(() => false);
      props.onFeedbackSent();
    }, 1000);
  }

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

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={({ target: { value } }) => setComment(value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
            disabled={comment.length === 0}
          />

          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isFormSubmitting ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
