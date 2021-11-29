import React, { createContext, ReactNode, useState, useEffect } from "react";
import challenges from "../data/challenges.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useAuth } from "../hooks/auth";

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
  handleChallengesCompleted: (newChallengesCompleteds: number) => void;
}

const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { user, dataChallenge } = useAuth();

  const [level, setLevel] = useState(0);

  const [currentExperience, setCurrentExperience] = useState(0);

  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  async function saveData() {
    const dataKey = `@moveit:data-${user.id}`;

    try {
      const dataFormated = {
        level,
        currentExperience,
        challengesCompleted,
      };
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));
    } catch (err) {
      Alert.alert("Não foi possível salvar os dados");
    }
  }

  useEffect(() => {
    user.id && saveData();
  }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    dataChallenge.level && handleLevel(dataChallenge.level);
    dataChallenge.challengesCompleted &&
      handleChallengesCompleted(dataChallenge.challengesCompleted);
    dataChallenge.currentExperience &&
      handleCurrentExperience(dataChallenge.currentExperience);
  }, [dataChallenge]);

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

  const handleChallengesCompleted = (newChallengesCompleteds: number) => {
    setChallengesCompleted(newChallengesCompleteds);
  };

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
        handleChallengesCompleted,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export { ChallengesProvider, ChallengesContext };
