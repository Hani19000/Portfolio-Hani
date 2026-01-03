import "./experience.css";
import experienceCards from "./ExperiencesCards";

function Experience() {
    const renderCards = (type) =>
    experienceCards
      .filter((card) => card.type === type)
      .map((card, index) => (
        <article className="experience__details" key={index}>
          <span className="experience__details-icon">{card.icon}</span>
          <h5>{card.title}</h5>
          <small className="text-light">{card.description}</small>
        </article>
      ));
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">{renderCards("frontend")}</div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">{renderCards("backend")}</div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
