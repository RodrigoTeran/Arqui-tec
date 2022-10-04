import styles from "./Info.module.scss";
import BtnLink from "../../../Buttons/BtnLink/BtnLink";

const Info = () => {
  return (
    <div className={styles.info}>
      <h2>Arqui-tec</h2>
      <p>
        Arqui-tec es una plataforma para compartir diseños, basados en la arquitectura
        de Minecraft, con la comunidad.
      </p>
      <BtnLink
        text="Repositorio en Github"
        url="/"
        color="lavender-300"
        border="round_5"
        additionalClass="btn-go-contact"
      />
    </div>
  );
};

export default Info;
