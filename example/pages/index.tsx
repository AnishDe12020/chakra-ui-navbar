import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Navbar } from "../../";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Create Chakra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </Box>
  );
};

export default Home;
