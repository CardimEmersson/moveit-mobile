import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

type DataChallenges = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoadding: boolean;
  dataChallenge: DataChallenges;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

// TODO PROCESS.ENV
const CLIENT_ID =
  "189398350865-h3bo7gcch2jug9g00spqid1r31cbdmrt.apps.googleusercontent.com";
const REDIRECT_URI = "https://auth.expo.io/@emersson/moveit";
//

const AuthContext = createContext({} as IAuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const userStorageKey = "@moveit:user";
  const [userStorageLoadding, setUserStorageLoadding] = useState(true);

  const [dataChallenge, setDataChallenge] = useState<DataChallenges>(
    {} as DataChallenges
  );

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        });

        await AsyncStorage.setItem(
          userStorageKey,
          JSON.stringify({
            id: userInfo.id,
            email: userInfo.email,
            name: userInfo.given_name,
            photo: userInfo.picture,
          })
        );

        loadData(userInfo.id);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem(userStorageKey);
    await AsyncStorage.removeItem(`@moveit:data-${user.id}`);
    setUser({} as User);
    setDataChallenge({} as DataChallenges);
  }

  async function loadData(userId: string) {
    const response = await AsyncStorage.getItem(`@moveit:data-${userId}`);
    const data = response
      ? (JSON.parse(response) as DataChallenges)
      : ({} as DataChallenges);

    setDataChallenge(data);
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(userStorageKey);

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
        loadData(userLogged.id);
      }
    }

    loadUserStorageData();

    setUserStorageLoadding(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        signOut,
        user,
        userStorageLoadding,
        dataChallenge,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
