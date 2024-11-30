import { useEffect, useState } from "react";

const useRandomTextReveal = (
  text: string,
  qtRandomLetters: number,
  speedLetters: number,
  delay: number = 0
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setStart] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      let delayInterval = setInterval(() => {
        setStart(true);
        clearInterval(delayInterval);
      }, delay);
      return;
    }
    if (currentIndex < text.length) {
      let count = 0;
      let interval = setInterval(() => {
        if (count < qtRandomLetters) {
          const randomIndex = Math.floor(Math.random() * text.length);
          const randomLetter = text[randomIndex];
          setDisplayText(text.slice(0, currentIndex) + randomLetter);
          count += 1;
        } else {
          setCurrentIndex((index) => index + 1);
          setDisplayText(text.slice(0, currentIndex + 1));
          clearInterval(interval);
        }
      }, speedLetters);
      return () => clearInterval(interval);
    }
  }, [currentIndex, text, speedLetters, qtRandomLetters, hasStarted]);

  return displayText;
};

export default useRandomTextReveal;
