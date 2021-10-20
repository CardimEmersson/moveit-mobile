import React from "react";
import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChellengesContext";
import {
  Container,
  ExperienceInitial,
  ProgressBar,
  ProgressFill,
  CurrentExperience,
  ExperienceToNextLevel,
} from "./styles";

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <ExperienceInitial>0 xp</ExperienceInitial>

      <ProgressBar>
        <ProgressFill percentage={percentToNextLevel}></ProgressFill>
        <CurrentExperience
          percentage={percentToNextLevel}
          style={{
            transform: [{ translateX: -20 }],
          }}
        >
          {currentExperience} xp
        </CurrentExperience>
      </ProgressBar>

      <ExperienceToNextLevel>{experienceToNextLevel} xp</ExperienceToNextLevel>
    </Container>
  );
}

export { ExperienceBar };
