import React from "react";
import experienceItems, { ExperienceItem } from "../../Data/experience/ExperiencesItems";

interface ExperienceCardsProps {
  type: "frontend" | "backend";
}

const ExperienceCards: React.FC<ExperienceCardsProps> = ({ type }) => {
  return (
    <>
      {experienceItems
        .filter((item: ExperienceItem) => item.type === type)
        .map((item: ExperienceItem, index: number) => (
          <article className="experience__details" key={index}>
            <span className="experience__details-icon">{item.icon}</span>
            <div>
              <h5>{item.title}</h5>
              <small className="text-light">{item.description}</small>
            </div>
          </article>
        ))}
    </>
  );
};

export default ExperienceCards;