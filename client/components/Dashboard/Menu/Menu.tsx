import styles from "./Menu.module.scss";
import stylesNav from "../../Nav/DashboardNav/DashboardNav.module.scss";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

// Components
import { DashBoardNavControls } from "../../Nav/DashboardNav/DashboardNav";

// Icons
import BriefcaseIcon from "../../Svgs/UserAlt";

type Props = {
  text: string;
  click: () => any;
  children: any;
  isActive: boolean;
};

const LinkMenu = ({ text, click, children, isActive }: Props) => {
  return (
    <div className={styles.menu_links_link} onClick={click}>
      <div
        className={`${styles.menu_links_link_svg} ${isActive && styles.active}`}
      >
        {children}
      </div>
      <div
        className={`${styles.menu_links_link_text} ${isActive &&
          styles.active}`}
      >
        {text}
      </div>
    </div>
  );
};

type PropsMenu = {
  isMenuToggled: boolean;
  setIsMenuToggleVisible: Dispatch<SetStateAction<boolean>>;
};

const MenuDashboard = ({
  isMenuToggled,
  setIsMenuToggleVisible
}: PropsMenu) => {
  const router = useRouter();

  return (
    <aside
      className={`${styles.menu} ${isMenuToggled && styles.menu_toggled}`}
      onMouseEnter={() => {
        setIsMenuToggleVisible(true);
      }}
      onMouseLeave={() => {
        setIsMenuToggleVisible(false);
      }}
    >
      <div className={styles.menu_nav}>
        <div className={styles.menu_nav_title}>Menu</div>
        <DashBoardNavControls
          rules={{
            ...stylesNav,
            ...styles
          }}
        />
      </div>
      <div className={styles.user_img}>

      </div>
      <div className={styles.menu_links}>
        {/* Companies Array */}
        <LinkMenu
          isActive={router.pathname == "/profile"}
          text="Mi perfil"
          click={() => {
            // First travel
            router.replace("/profile");
          }}
        >
          <BriefcaseIcon />
        </LinkMenu>
      </div>
    </aside>
  );
};

export default MenuDashboard;
