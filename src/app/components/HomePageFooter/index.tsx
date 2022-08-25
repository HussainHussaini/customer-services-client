
import styled, { css } from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../responsive";

const HomePageFooterContainer = styled.div`
  min-height: 4.3em;
 
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;



export function HomePageFooter() {

  return (
    <HomePageFooterContainer>
      <div>Trusted by the best companies in the world
        <div>this section is remaining ....</div>

      </div>
      
     
    </HomePageFooterContainer>
  );
}
