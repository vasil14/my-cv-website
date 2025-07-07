// Typewriter.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  font-family: monospace;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  color: #4caf50;
`;

const Typewriter = ({ texts = [] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const currentFullText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentFullText.slice(0, charIndex + 1);
        setCurrentText(nextText);
        setCharIndex(charIndex + 1);

        if (nextText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before delete
        }
      } else {
        const nextText = currentFullText.slice(0, charIndex - 1);
        setCurrentText(nextText);
        setCharIndex(charIndex - 1);

        if (nextText === "") {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return <TextWrapper>{currentText}</TextWrapper>;
};

export default Typewriter;
