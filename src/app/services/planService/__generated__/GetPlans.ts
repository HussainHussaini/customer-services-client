/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlans
// ====================================================

export interface GetPlans_plans {
   __typename: "Plan";
  _id: string,
  title: string,
  description: string,
  price: number,
  details:string,

}

export interface GetPlans {
  plans: GetPlans_plans [];
}
