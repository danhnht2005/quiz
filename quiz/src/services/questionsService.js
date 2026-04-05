import { get } from "../utils/request";

export const getListQuestions = async (id) => {
  const result = await get(`questions?topics=${id}`);
  return result;
} 