import styles from "./Product.module.scss";
import stylesLanding from "../Landing.module.scss";
import { useRef } from "react";

// Hooks
import {
  useAnimationsScroll,
  ArrayElement
} from "../../../hooks/useAnimationsScroll";

// Svgs
import DriveSvg from "../../Svgs/Drive";
import ChatSvg from "../../Svgs/Chat";
import CalendarSvg from "../../Svgs/Calendar";

type Props = {
  title: string;
  children?: any;
  Icon: any;
  _ref: any;
};

const ProductCard = ({ title, children, Icon, _ref }: Props) => {
  return (
    <div title={`Go to ${title}`} ref={_ref} className={styles.product_card}>
      <div className={styles.product_card_svg}>
        <Icon />
      </div>
      <div className={styles.product_card_title}>{title}</div>
      <div className={styles.product_card_children}>{children}</div>
    </div>
  );
};

const Product = () => {
  // Animations on scroll
  const h1 = useRef<any>(null);
  const card1 = useRef<any>(null);
  const card2 = useRef<any>(null);
  const card3 = useRef<any>(null);

  const animClass = (
    elem: any,
    percentage: number,
    customClass: string = styles.product_card_animation
  ): ArrayElement => {
    return {
      notAppearClass: customClass,
      screenPercentage: percentage,
      element: elem
    };
  };

  useAnimationsScroll({
    componentsList: [
      animClass(h1, 0.5, styles.product_h1_animation),
      animClass(card1, 0.35),
      animClass(card2, 0.35),
      animClass(card3, 0.35)
    ]
  });

  return (
    <section className={`${styles.product} ${stylesLanding.section}`}>
      <h2 className={styles.product_h1} ref={h1}>
        ¿Qué es Arqui-tec?
      </h2>
      <div className={styles.product_cards}>
        <ProductCard _ref={card1} title="Plataforma" Icon={ChatSvg}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo quae perspiciatis!
        </ProductCard>
        <ProductCard _ref={card2} title="Comunidad" Icon={DriveSvg}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem suscipit maxime ex iste, rerum distinctio?
        </ProductCard>
        <ProductCard _ref={card3} title="Jugabilidad" Icon={CalendarSvg}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores neque ad a.
        </ProductCard>
      </div>
    </section>
  );
};

export default Product;
