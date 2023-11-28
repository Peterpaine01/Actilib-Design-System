import React, { ReactNode } from "react";
import { Icon } from "react-feather";

// interface IconComponentProps {
//   icon?: Icon;
//   children: ReactNode;
// }

const IconComponent = ({ icon: FeatherIcon, children }) => {
  return (
    <button>
      {FeatherIcon && <FeatherIcon size={18} />}
      {children}
    </button>
  );
};

export default IconComponent;

const useStyle = () => {
  // On destructure l'objet retourné par le hook `useWindowDimensions`
  const { height, width } = useWindowDimensions();

  // On créé notre feuille de style
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      // width: "60%",
      borderRadius: 6,
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 5,
    },
    container_solid: {
      backgroundColor: AppStyles.color.primary,
      borderColor: AppStyles.color.primary,
    },
    container_outlined: {
      backgroundColor: "white",
      borderColor: AppStyles.color.primary,
    },
    text: {
      textAlign: "center",
      fontSize: 18,
      fontFamily: AppStyles.font.regular,
    },
    text_solid: {
      color: "white",
    },
    text_outlined: {
      color: AppStyles.color.primary,
    },
  });

  // On retourne l'objet contenant tout notre style pour l'utiliser dans notre composant
  return styles;
};
