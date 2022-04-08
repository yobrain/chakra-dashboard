import React from "react";
import { Icon, useToken } from "@chakra-ui/react";

const Logo = () => {
  const [brand400, brand600] = useToken("colors", ["brand.400", "brand.600"]);

  return (
    <Icon
      boxSize={30}
      float="left"
      mr={2}
      viewBox="0 0 889 917"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <path d="M548 460L443 400.5V252.5L675 385.5L548 460Z" fill={brand600} />
      <path d="M443 1.5V147L765 335L888 260.5L443 1.5Z" fill={brand600} />
      <path
        d="M91 456.5L448.5 665.5V518.5L219.5 383.5L91 456.5Z"
        fill={brand600}
      />
      <path
        d="M219 531.5L92 456L219 384L346.5 456L219 531.5Z"
        fill={brand400}
      />
      <path d="M2 656.5L449 916.5V769L131 582L2 656.5Z" fill={brand600} />
      <path
        d="M221.986 529.876L1.99998 656.5L0.999966 510L92.9791 455.021L221.986 529.876Z"
        fill={brand400}
      />
      <path
        d="M889 662.123L449 916.5L448 768.86L885.005 509L889 662.123Z"
        fill={brand400}
      />
      <path
        d="M448.5 665.5V518.5L888 260.5V406.5L448.5 665.5Z"
        fill={brand400}
      />
      <path d="M0 259L3.5 407L443 146.5V0.5L0 259Z" fill={brand400} />
    </Icon>
  );
};

export default Logo;
