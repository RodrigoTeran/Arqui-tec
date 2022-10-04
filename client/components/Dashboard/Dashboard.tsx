import styles from "./Dashboard.module.scss";

// Icons
import AnglesLeftIcon from "../Svgs/AnglesLeft";

// Components
import Menu from "./Menu/Menu";
import Body from "./Body/Body";
import { useState } from "react";

type Props = {
  children: any;
};

const DashboardWrapper = ({ children }: Props) => {
  const [isMenuToggleVisible, setIsMenuToggleVisible] = useState<boolean>(
    false
  );

  return (
    <>
      <section className={styles.dashboard}>
        <Menu
          setIsMenuToggleVisible={setIsMenuToggleVisible}
          isMenuToggled={false}
        />
        <div
          title="Toggle menu"
          className={`${styles.menu_toggle} ${isMenuToggleVisible &&
            styles.menu_toggle_visible}`}
        >
          <AnglesLeftIcon />
        </div>
        <Body isMenuToggled={false}>{children}</Body>
      </section>
      <div className={styles.nel}>
        Esta aplicación no está pensada para dispositivos móviles...
      </div>
    </>
  );
};

export default DashboardWrapper;
