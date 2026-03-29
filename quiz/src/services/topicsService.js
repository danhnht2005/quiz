import { get } from "../utils/request";

export const getListTopics = async () => {
  const result = await get("topics");
  return result;
}