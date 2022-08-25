
import { Plan } from "../../components/plan";
import MoonLoader from "react-spinners/MoonLoader";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import planService from "../../services/planService";
import { Dispatch } from "redux";
import { GetPlans_plans } from "../../services/planService/__generated__/GetPlans";
import { setPlans } from "./plansSlice";

const TopPlansContainer = styled.div`
  ${tw`
   
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
    bg-white
    text-black
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const PlansContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyPlans = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setPlans: (plans: GetPlans_plans[]) => dispatch(setPlans(plans)),
});

export function Plans() {
  const { setPlans } = actionDispatch(useAppDispatch());
  const [isLoading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const plans = useAppSelector((state) => state.plans);
  console.log("plann!!!!!!!!!");
  console.log(plans);

  const fetchPlans = async () => {
    setLoading(true);
    const plans = await planService.getPlans().catch((err) => {
      console.log("Error: ", err);
    });
    if (plans) setPlans(plans);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  
  const isEmptyPlans = !plans.plans || plans.plans.length === 0;
  const planss =
    (!isEmptyPlans && plans.plans.map((plan) => <Plan {...plan} />)) || [];
    
  return (
    <TopPlansContainer>
      <Title>Pricing</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyPlans && !isLoading && <div>No Price Plan To Show! Or Mongodb is disconnected!</div>}
      {!isEmptyPlans && !isLoading && (
        <PlansContainer>{planss}</PlansContainer>
      )}
    </TopPlansContainer>
  );
}
