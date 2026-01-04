import { useEffect, useState } from 'react';

const HeaderTitle = ({ fullText = "Des idées au code, donnons vie à vos projets" }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index <= fullText.length ? setText(fullText.slice(0, index++)) : clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <h1 className="header__title">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default HeaderTitle;