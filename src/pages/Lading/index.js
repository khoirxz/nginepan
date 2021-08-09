import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Hero, Layout, Navbar } from "../../components";
import Footer from "../../components/Footer/Footer";
import ContainerLayout from "../../utils/ContainerLayout";

import data from "../../data";

const Landing = () => {
  return (
    <Layout>
      <Navbar solid={true} />
      <Hero />
      <Box>
        <ContainerLayout>
          <Box textAlign="center" my="3rem" height="auto">
            <Text
              as="h1"
              fontSize="36px"
              lineHeight="54px"
              letterSpacing="0.03em"
              fontWeight="bold"
            >
              TEMPAT YANG LAGI NGE{" "}
              <Text as="span" color="#FF005C">
                TREND
              </Text>{" "}
              🌈
            </Text>
          </Box>

          <Grid
            templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
            gap={[5, 8, 10]}
          >
            {data
              ? data.map((item) => (
                  <GridItem
                    as={Flex}
                    flexDir="column"
                    bgColor="white"
                    rounded="md"
                    shadow="sm"
                    key={item.id}
                  >
                    <Box my={3} mx={4}>
                      <Text
                        as="h1"
                        fontWeight="bold"
                        fontSize="3xl"
                        textTransform="uppercase"
                      >
                        {item.title}
                      </Text>
                      <Text as="p" mb="2" fontSize="sm">
                        {item.location}
                      </Text>
                    </Box>

                    <Box>
                      <Image
                        maxWidth="full"
                        width="full"
                        maxHeight="200px"
                        objectFit="cover"
                        margin="auto"
                        src={item.img}
                      />
                    </Box>
                    <Text
                      as="a"
                      my={2}
                      textAlign="center"
                      fontWeight="bold"
                      color="blackAlpha.400"
                    >
                      Kunjungi
                    </Text>
                  </GridItem>
                ))
              : null}
          </Grid>
        </ContainerLayout>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Landing;
