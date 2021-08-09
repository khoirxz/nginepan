import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { HiOutlineMenuAlt3, HiUser } from "react-icons/hi";
import ContainerLayout from "../../utils/ContainerLayout";

const Navbar = ({ solid = false }) => {
  return (
    <Box
      as="nav"
      bgColor={solid ? "#015567" : "transparent"}
      color={solid ? "white" : "black"}
    >
      <ContainerLayout>
        <Flex
          as="div"
          justifyContent="space-between"
          alignItems="center"
          py="0.5rem"
        >
          <Text as="h1" fontSize="28px" fontWeight="bold" letterSpacing="2px">
            NGINEPAN
          </Text>
          <Flex
            as="ul"
            listStyleType="none"
            display={["none", "none", "flex"]}
            alignItems="center"
          >
            <Text
              as="li"
              fontWeight="500"
              fontSize="15px"
              textTransform="uppercase"
              lineHeight="22px"
              mx="3"
            >
              DESTINASI
            </Text>
            <Text
              as="li"
              fontWeight="500"
              fontSize="15px"
              textTransform="uppercase"
              lineHeight="22px"
              mx="3"
            >
              penyewaan
            </Text>
            <Text
              as="li"
              fontWeight="500"
              fontSize="15px"
              textTransform="uppercase"
              lineHeight="22px"
              mx="3"
            >
              about us
            </Text>
            <Text
              as="li"
              fontWeight="500"
              fontSize="15px"
              textTransform="uppercase"
              lineHeight="22px"
              mx="3"
            >
              masuk
            </Text>
            <Text as="li">
              <Button
                bgColor="#4EC0C1"
                color="white"
                leftIcon={<HiUser />}
                fontWeight="light"
                ml="3px"
                boxShadow="md"
                _focus={{
                  outline: "none",
                }}
                _hover={{
                  backgroundColor: "#3EA2A3",
                }}
                _active={{
                  backgroundColor: "#289090",
                }}
              >
                DAFTAR
              </Button>
            </Text>
          </Flex>

          <Text as="span" display={["flex", "flex", "none"]}>
            <HiOutlineMenuAlt3 size="2em" />
          </Text>
        </Flex>
      </ContainerLayout>
    </Box>
  );
};

export default Navbar;
