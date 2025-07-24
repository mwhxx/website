import React, { useMemo } from "react";

// This component takes text and animates each word
export default function AnimatedText({ text, isVisible }) {
  // Split the text into words
  const words = text.split(" ");

  // Generate and store random durations for each word efficiently
  const durations = useMemo(
    () => words.map(() => Math.random() * 2300 + 1000), // Random
    [words] // Re-calculate only if the text changes
  );

  return (
    // The container for the line of text
    <span className="inline-block">
      {words.map((word, index) => (
        // Use a React.Fragment to group the word and the space
        <React.Fragment key={index}>
          <span
            className={`inline-block transition-all ease-out ${
              isVisible ? "opacity-100 blur-0" : "opacity-0 blur-md"
            }`}
            style={{
              // Each word gets its own random duration
              transitionDuration: `${durations[index]}ms`,
              // Each word's animation is delayed based on its position
              transitionDelay: `${index * 0}ms`,
            }}
          >
            {word}
          </span>
          {/* By adding the space outside the span, it's preserved */}{" "}
        </React.Fragment>
      ))}
    </span>
  );
}
