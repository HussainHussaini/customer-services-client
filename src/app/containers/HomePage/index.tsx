import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePageFooter } from "../../components/HomePageFooter";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { Plans } from "./plans";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    text-white
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <HomePageFooter />
      <AboutUs />
      <Plans />
      <Footer />
    </PageContainer>
  );
}
