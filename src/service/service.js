import { getDataApi } from "./index";
export const getDataAction = async (params) => {
  try {
    const res = await getDataApi(params);
    return res.success && res.fieldData.result;
  } catch {
    return [];
  }
};
