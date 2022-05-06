import html2canvax from "html2canvas";

import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

type IProps = {
  onScreenshot(screenshot: string | null): void;
  screenshot: string | null;
  disabled: boolean;
};

export function ScreenshotButton({
  screenshot,
  onScreenshot,
  disabled,
}: IProps): JSX.Element {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot(): Promise<void> {
    setIsTakingScreenshot(() => true);

    const canvas = await html2canvax(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    setTimeout(() => {
      onScreenshot(base64image);
      setIsTakingScreenshot(() => false);
    }, 1000);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-zinc-800"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
