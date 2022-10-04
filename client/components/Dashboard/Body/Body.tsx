import styles from "./Body.module.scss";

type Props = {
  children: any;
  isMenuToggled: boolean;
};

const BodyDashboard = ({ children, isMenuToggled }: Props) => {

  return (
    <div
      className={`${styles.dashboard} ${isMenuToggled && styles.menu_toggled}`}
    >
      {children}
    </div>
  );
};

export default BodyDashboard;
