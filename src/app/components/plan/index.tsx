import styled from "styled-components";
import tw from "twin.macro";
import { IPlan } from "../../../typings/plan";
import { Button } from "../button";

interface IPlanProps extends IPlan {}

const PlanContainer = styled.div`
  width: 22em;
  min-height: 35em;
  max-height: 35em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-blue-600
    text-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const TitleName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-white
    mt-1
    mb-1
  `};
`;

const PlanDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const StratButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `};
`;

export function Plan(props: IPlanProps) {
  return (
    <PlanContainer key={props._id}>
      <TitleName>{props.title}</TitleName>
      <TitleName>{props.description}</TitleName>
      <TitleName>{props.price}</TitleName>
      <TitleName>{props.details}</TitleName>
      <Seperator />
      <PlanDetailsContainer></PlanDetailsContainer>
      <StratButton text="Get start" />
    </PlanContainer>
  );
}
