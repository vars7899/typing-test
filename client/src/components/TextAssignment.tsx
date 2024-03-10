"use client";

import { useWPM } from "@/hooks";
import { cn } from "@/utils/utils";
import React, { ChangeEvent, FormEventHandler } from "react";

interface TextAssignmentOptions extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

const TextAssignment: React.FC<TextAssignmentOptions> = ({ content }) => {
  const {
    startTypingTimer,
    endTypingTimer,
    startTime,
    endTime,
    grossWpm,
    netWpm,
    addKeyStrokeError,
    accuracy,
  } = useWPM(content);
  const inputRef = React.useRef<null | HTMLInputElement>(null);
  const [textTyped, setTextTyped] = React.useState<string>("");
  const [cursorPosition, setCursorPosition] = React.useState<number>(0);
  const [wrongKey, setWrongKey] = React.useState<Array<number>>([]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTypingTimer();
    setTextTyped(() => e.target.value);

    if (e.target.value.slice(-1) !== content[cursorPosition]) {
      setWrongKey((prev) =>
        prev.includes(e.target.value.length - 1)
          ? prev
          : [...prev, e.target.value.length - 1]
      );
      addKeyStrokeError(e.target.value.length - 1);
      setTextTyped((prev) => prev.slice(0, -1));
      return;
    }
    setCursorPosition((prev) => prev + 1);
  };

  React.useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [content]);

  React.useEffect(() => {
    if (textTyped.length && cursorPosition === content.length) {
      endTypingTimer();
    }
  }, [textTyped, cursorPosition, content.length]);

  const ignoreKey = (e: KeyboardEvent, keyCode?: string) => {
    if (e.code === keyCode) e.preventDefault();
  };

  React.useEffect(() => {
    window.addEventListener("keydown", (e) => ignoreKey(e, "Backspace"));
    return () => {
      window.removeEventListener("keydown", ignoreKey);
    };
  });

  console.log(accuracy, netWpm, grossWpm);

  return (
    <div>
      <p className="text-4xl font-manjari text-zinc-50">
        {content.split("").map((character, index) => (
          <span
            key={`character-${index}`}
            className={cn(
              character === " " && "px-2",
              index === cursorPosition && "bg-green-700 animate-pulse",
              wrongKey.includes(index) &&
                index !== cursorPosition &&
                "text-red-600"
            )}
          >
            {character}
          </span>
        ))}
      </p>
      <input
        ref={inputRef}
        className="h-0"
        value={textTyped}
        onChange={handleUserInput}
      />
    </div>
  );
};

export default TextAssignment;
