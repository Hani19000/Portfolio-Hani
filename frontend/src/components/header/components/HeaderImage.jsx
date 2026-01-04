const HeaderImage = ({ src, alt = "Profile" }) => (
  <div className="me">
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

export default HeaderImage;