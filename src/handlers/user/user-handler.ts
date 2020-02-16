import { AppAdaptedRequest } from "../../utilities/helpers/helpers";

export const respondTosystemAvailabilityRequest = (request: AppAdaptedRequest): Object => {
  return { active: true, message: "System active" };
};
