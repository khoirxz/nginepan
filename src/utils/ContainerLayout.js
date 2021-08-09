import React from "react";
import { Box } from "@chakra-ui/react";

const ContainerLayout = ({ children, ...rest }) => {
  return (
    <Box
      as="div"
      maxW="1460px"
      w={["90%", "80%", "79%"]}
      margin="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ContainerLayout;
