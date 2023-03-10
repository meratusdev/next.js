import { Heading } from "@chakra-ui/react";
import { type NextPage } from "next";

import PageWrapper from "~/src/components/Layout/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Meratus Dev">
      <Heading>Meratus Dev</Heading>
    </PageWrapper>
  );
};

export default Home;
