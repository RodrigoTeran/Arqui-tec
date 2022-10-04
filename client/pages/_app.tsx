import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from "react";

// Components
import Nav from "../components/Nav/Nav";
import Loader from "../components/Loader/Spinner/Spinner";

// Animations
import { fadeVariantsLongerExit } from "../animations/fade";

// Context
export const GlobalContext = createContext<Partial<ValueAppProvider>>({});
import { DATA_GET_USER } from "../routes/main.routes";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Modals
import Messages, { Message } from "../components/Modals/Messages/Messages";

interface ValueAppProvider {
  user: DATA_GET_USER;
  refetchUser: (_callback?: any) => any;
  isAuth: boolean;
  setArrayMsgs: Dispatch<SetStateAction<Array<Message>>>;
}

function MyApp({ Component, pageProps }: AppProps) {
  // Auth
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<DATA_GET_USER | undefined>(undefined);

  // Modal Msgs
  const [arrayMsgs, setArrayMsgs] = useState<Array<Message>>([]);

  const { refetch: refetchUser, isLoading } = useAuth({
    setUser,
    setIsAuth
  });

  return (
    <GlobalContext.Provider
      value={{
        user,
        refetchUser,
        isAuth,
        setArrayMsgs
      }}
    >
      <Head>
        <title>Arqui-tec</title>
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {isLoading ? (
          <motion.div
            variants={fadeVariantsLongerExit}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="app-loader"
            key="loader-app-container"
          >
            <Loader
              additionalClass="loader-app"
              color="lavender-200"
            />
          </motion.div>
        ) : (
          <>
            <Nav />
            <Messages
              arrayMsgs={arrayMsgs}
              setArrayMsgs={setArrayMsgs}
            />
            <main className="main-content">
              <Component {...pageProps} />
            </main>
          </>
        )}
      </AnimatePresence>
    </GlobalContext.Provider>
  );
}

export default MyApp;
