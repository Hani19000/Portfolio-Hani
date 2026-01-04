import React from 'react';

const FooterCopy: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="footer__copyright">
      <small>&copy; {currentYear} Hani Derrouiche. All rights reserved.</small>
    </div>
  );
};

export default FooterCopy;