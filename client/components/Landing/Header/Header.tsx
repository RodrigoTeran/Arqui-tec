import styles from "./Header.module.scss";
import stylesLanding from "../Landing.module.scss";
import BtnLink from "../../Buttons/BtnLink/BtnLink";
import WorkSvg from "../../Svgs/Work";

const Header = () => {
  return (
    <header className={`${styles.header} ${stylesLanding.section}`}>
      <div className={styles.header_left}>
        <h1>Arqui-tec</h1>
        <p>
          Arqui-tec es una plataforma para compartir diseños, basados en la arquitectura
          de Minecraft, con la comunidad.
        </p>
        <div className={styles.header_left_btns}>
          <BtnLink
            text="Repositorio en Github"
            url="/"
            color="lavender-300"
            border="round_5"
            additionalClass="pay-header"
            title="Repositorio en Github"
          />
        </div>
      </div>
      <div className={styles.header_img}>
        <WorkSvg />
      </div>
    </header>
  );
};

export default Header;
