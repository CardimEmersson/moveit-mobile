import React, { createContext, ReactNode, useState } from "react";
import challenges from "../data/challenges.json";

export type typeChallenge = "body" | "eye";

export interface Challenge {
  type: typeChallenge;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  isLevelUpModalOpen: boolean;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  handleLevel: (newLevel: number) => void;
  handleCurrentExperience: (newCurrentExperience: number) => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);

  const [currentExperience, setCurrentExperience] = useState(0);

  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge: Challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);
  }

  const handleLevel = (newLevel: number) => {
    setLevel(newLevel);
  };

  const handleCurrentExperience = (newCurrentExperience: number) => {
    setCurrentExperience(newCurrentExperience);
  };

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        level,
        activeChallenge,
        isLevelUpModalOpen,
        levelUp,
        startNewChallenge,
        resetChallenge,
        handleLevel,
        handleCurrentExperience,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export { ChallengesProvider, ChallengesContext };
