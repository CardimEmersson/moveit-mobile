import React, { createContext, ReactNode, useState } from "react";
import challenges from "../data/challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  handleLevel: (newLevel: number) => void;
  handleCurrentExperience: (newCurrentExperience: number) => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);

  const [currentExperience, setCurrentExperience] = useState(10);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const handleLevel = (newLevel: number) => {
    setLevel(newLevel);
  };

  const handleCurrentExperience = (newCurrentExperience: number) => {
    setCurrentExperience(newCurrentExperience);
  };

  return (
    <ChallengesContext.Provider
      value={{
        currentExperience,
        experienceToNextLevel,
        level,
        handleLevel,
        handleCurrentExperience,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export { ChallengesProvider };
