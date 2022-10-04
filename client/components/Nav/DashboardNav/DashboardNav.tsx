import styles from "./DashboardNav.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

// Btns
import BtnSpinner from "../../Buttons/BtnClick/BtnClick";

// Animations
import { fadeVariants } from "../../../animations/fade";

// Logo
import LogoIcon from "../../Svgs/Logo";
import UsersIcon from "../../Svgs/Users";
import UserAltIcon from "../../Svgs/UserAlt";


type PropsLinksImg = {
  children: any,
  rule: boolean,
  link: string
};
const LinkImg = ({
  children,
  rule,
  link
}: PropsLinksImg) => {
  const router = useRouter();

  return (
    <div onClick={() => {
      router.replace(link);
    }} className={styles.link_img}>
      {rule &&
        <div className={styles.link_img_active}></div>
      }
      {children}
    </div>
  )
}

type Props = {
  rules: any;
};

export const DashBoardNavControls = ({ rules }: Props) => {
  const router = useRouter();
  return (
    <div className={rules.nav_controls}>
      <div className={rules.nav_controls_links}>
        <LinkImg
          rule={router.pathname.includes("/community")}
          link="/designs/community"
        >
          <UsersIcon />
        </LinkImg>
        <LinkImg
          rule={router.pathname.includes("/mine")}
          link="/designs/mine"
        >
          <UserAltIcon />
        </LinkImg>
      </div>
      <div className={rules.nav_controls_info}>
        <div className={rules.nav_controls_info_user}>
          <BtnSpinner
            text="Crear diseño"
            callback={() => { }}
            color="border-color"
            additionalClass="btn_create"
            border="round_5"
          />
        </div>
      </div>
    </div>
  );
};

const DashboardNav = () => {
  return (
    <motion.nav
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.nav_logo}>
        <Link href="/">
          <a>
            <LogoIcon />
            Arqui-tec</a>
        </Link>
      </div>
      <DashBoardNavControls rules={styles} />
    </motion.nav>
  );
};

export default DashboardNav;
