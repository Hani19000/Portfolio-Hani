import React, { useEffect, useState } from "react";
import Loading from "../Loading";

interface HeaderTitleProps {
  fullText?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  fullText = "Des idées au code...",
}) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    let isCancelled = false;

    const type = () => {
      if (index <= fullText.length && !isCancelled) {
        setText(fullText.slice(0, index));
        index++;
        // j'utilise setTimeout mais je pourrait aussi ajuster la vitesse pour un effet plus naturel (plus lent au début, plus vite à la fin)
        setTimeout(type, 50);
      }
    };

    type();

    return () => {
      isCancelled = true;
    };
  }, [fullText]);

  return <h1 className="header__title">{text}</h1>;
};

export default HeaderTitle;
