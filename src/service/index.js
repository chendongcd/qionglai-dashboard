import request from "../utils/request";
export const getDataApi = (params) => {
  return request(
    "bigScreen/data/bigScreenDataController/queryData.do",
    {
      method: "GET",
      body: params,
    }
  );
};
