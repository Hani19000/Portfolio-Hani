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
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index++));
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <Loading>
      <h1 className="header__title">
        {text}
        <span className="cursor">|</span>
      </h1>
    </Loading>
  );
};

export default HeaderTitle;
