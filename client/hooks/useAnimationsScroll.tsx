import { useEffect } from "react";
import { getTop } from "../utils/goTo";

export type ArrayElement = {
  element: any;
  notAppearClass: string;
  screenPercentage: number; // From bottom (top: 1, bottom: 0)
};

type Params = {
  componentsList: Array<ArrayElement>;
  isBothSides?: boolean;
};

export const useAnimationsScroll = ({
  componentsList,
  isBothSides = false
}: Params) => {
  useEffect(() => {
    addClasses();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const addClasses = () => {
    try {
      for (let i = 0; i < componentsList.length; i++) {
        const { element, notAppearClass }: ArrayElement = componentsList[i];
        const htmlElement = element.current;
        if (!htmlElement) continue;

        htmlElement.classList.add(notAppearClass);
      }
    } catch {}
  };

  const handleScroll = () => {
    try {
      for (let i = 0; i < componentsList.length; i++) {
        const {
          element,
          notAppearClass,
          screenPercentage
        }: ArrayElement = componentsList[i];

        const top = getTop(element.current);
        const htmlElement = element.current;
        let percentage: number = 1 - screenPercentage;
        if (0 > percentage || percentage > 1) {
          percentage = 0.5;
        }

        if (!htmlElement) continue;

        if (
          document.scrollingElement &&
          document.scrollingElement.scrollTop >=
            top - window.innerHeight * percentage
        ) {
          // Element is visble
          // Remove class notAppear
          htmlElement.classList.remove(notAppearClass);
        } else if (isBothSides) {
          // Element is not visble and add class notAppear
          htmlElement.classList.add(notAppearClass);
        }
      }
    } catch {}
  };
};
