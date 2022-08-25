import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;



const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
    h-3/6
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <InfoContainer>
        <Title>Solve customer problems proactively</Title>
        <InfoText>Container............
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
