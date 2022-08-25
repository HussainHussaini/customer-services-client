import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;



export function Logo(props: ILogoProps) {
 

  return (
    <LogoContainer>
      <LogoText color="dark">LoGo</LogoText>
    </LogoContainer>
  );
}
