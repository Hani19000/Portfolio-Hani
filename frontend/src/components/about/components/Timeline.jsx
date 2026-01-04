const Timeline = ({ data, type = "education" }) => (
  <div className="about__timeline">
    <h3 className="about__timeline-title">
      {type === "education" ? "Education" : "Work Experience"}
    </h3>
    <div className="about__timeline-container">
      {data.map(({ year, title, institution, company, description }, i) => (
        <article key={i} className="about__timeline-item">
          <span className="about__timeline-dot" />
          <div className="about__timeline-content">
            <small className="about__timeline-year">{year}</small>
            <h4>{title}</h4>
            <p className="about__timeline-company">{institution || company}</p>
            <p className="about__timeline-description">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Timeline;