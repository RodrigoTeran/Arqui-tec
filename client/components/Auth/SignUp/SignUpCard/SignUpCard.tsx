import { Dispatch, SetStateAction } from "react";
import styles from "./SignUpCard.module.scss";

// Componnets
import Card from "../../../Card/Card";
import InputText from "../../../Input/Text/InputText";
import BtnClick from "../../../Buttons/BtnClick/BtnClick";

type Props = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  signUp: () => any;
  isLoading: boolean;
};

const SignUpCard = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  signUp,
  isLoading
}: Props) => {
  return (
    <section className={styles.card_signup}>
      <Card>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <h1>Crear cuenta</h1>
          <div className={styles.card_signup_inputs}>
            <InputText
              text="Nombre de usuario"
              value={username}
              setValue={setUsername}
              id="#username-sign-up"
              type="text"
            />
            <InputText
              text="Correo electrónico"
              value={email}
              setValue={setEmail}
              id="#email-sign-up"
              type="email"
            />
            <InputText
              text="Contraseña"
              value={password}
              setValue={setPassword}
              id="#password-sign-up"
              type="password"
            />
            <InputText
              text="Confirma contraseña"
              value={confirmPassword}
              setValue={setConfirmPassword}
              id="#confirm-password-sign-up"
              type="password"
            />
          </div>
          <div>
            <BtnClick
              text="Crear cuenta"
              callback={signUp}
              color="lavender-300"
              border="round_5"
              additionalClass="btn-create-signup"
              isLoading={isLoading}
            />
          </div>
        </form>
      </Card>
    </section>
  );
};

export default SignUpCard;
