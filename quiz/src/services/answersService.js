import { getCookie } from "../helpers/cookie";
import { get } from "../utils/request";

export const getListAnswers = async (id) => {
  const userId = getCookie("id");
  const result = await get(`answers?userId=${userId}`);
  return result;
}