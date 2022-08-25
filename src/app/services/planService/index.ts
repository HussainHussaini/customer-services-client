import { apolloClient } from "../../graphql";
import { GET_ALL_PLANS } from "./queries";
import { GetPlans_plans } from "./__generated__/GetPlans";

class PlanService {
  public async getPlans(): Promise<GetPlans_plans []> {
    const response = await apolloClient
      .query({ query: GET_ALL_PLANS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.plans)
    console.log("Response.Data.Plans!!");
    console.log(response.data);
      return response.data.plans as GetPlans_plans [];

    return [];
  }
}

export default new PlanService();
