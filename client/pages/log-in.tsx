import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

// Animations
import { fadeVariants } from "../animations/fade";

// Components
import LogInComponent from "../components/Auth/LogIn/LogIn";

const LogIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arqui-tec | Log In</title>
      </Head>
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="log-in-page"
      >
        <LogInComponent />
      </motion.div>
    </>
  );
};

export default LogIn;
