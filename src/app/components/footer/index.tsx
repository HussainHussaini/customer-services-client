import styled from "styled-components";
import tw from "twin.macro";
const FooterContainer = styled.div`
  background-color: white;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-center
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
      text-sm
      text-black
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-black
    mb-3
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <SectionContainer>
          <HeaderTitle>Product</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Use Cases</a>
            </ListItem>
            <ListItem>
              <a href="#">Pricing</a>
            </ListItem>
            <ListItem>
              <a href="#">App</a>
            </ListItem>
            <ListItem>
              <a href="#">Feactures</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Resources</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
            <ListItem>
              <a href="#">What's New</a>
            </ListItem>
            <ListItem>
              <a href="#">Docs</a>
            </ListItem>
            <ListItem>
              <a href="#">Guides</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Company</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">About</a>
            </ListItem>
            <ListItem>
              <a href="#">Press</a>
            </ListItem>
            <ListItem>
              <a href="#">Customers</a>
            </ListItem>
            <ListItem>
              <a href="#">Careers</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Legal</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">claim</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>Copyright 2022 . All rights reserved.</CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
