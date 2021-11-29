import request from "../utils/request";
export const getDataApi = (params) => {
  return request(
    "/newtongji1/bigScreen/data/bigScreenDataController/queryData.do",
    {
      method: "GET",
      body: params,
    }
  );
};
