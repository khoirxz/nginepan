import React from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import ContainerLayout from "../../utils/ContainerLayout";
import { HiSearch } from "react-icons/hi";

import imgHero from "../../assets/svg/PEGUNUNGAN.svg";

const Hero = () => {
  return (
    <Box
      color="white"
      backgroundImage="linear-gradient(to top, #cfe2c6, #acd1b8, #89c0af, #64aea9, #3f9ba6, #2e8fa0, #1b8299, #007692, #006d87, #00657c, #005c71, #015466)"
    >
      <Box
        h="100vh"
        backgroundImage={imgHero}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center bottom"
      >
        <ContainerLayout>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
            ]}
            pt="10rem"
          >
            <Box textAlign="center">
              <Text
                as="p"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
                letterSpacing="0.02em"
              >
                bingung mau kemana diakhir pekan ?
              </Text>
              <Text
                as="h1"
                fontWeight="800"
                fontSize="54px"
                lineHeight="81px"
                letterSpacing="0.02em"
              >
                Ayo ! Liburan Bersama NGINEPAN
              </Text>
              <Text
                as="h3"
                fontWeight="500"
                fontSize="20px"
                lineHeight="30px"
                letterSpacing="0.03em"
              >
                Jadikan hari anda mengesankan bersama tempat liburan yang keren
              </Text>
              <Button
                bgColor="#4EC0C1"
                leftIcon={<HiSearch />}
                boxShadow="lg"
                rounded="sm"
                size="lg"
                my={5}
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
                CARI
              </Button>
            </Box>
          </Grid>
        </ContainerLayout>
      </Box>
    </Box>
  );
};

export default Hero;
