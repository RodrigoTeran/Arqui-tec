import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

// Animations
import { fadeVariants } from "../../animations/fade";

// Componnets
import DashboardWrapper from "../../components/Dashboard/Dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arqui-tec | My designs</title>
      </Head>
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="dashboard-page"
      >
        <DashboardWrapper>
          my designs
        </DashboardWrapper>
      </motion.div>
    </>
  );
};

export default Dashboard;
