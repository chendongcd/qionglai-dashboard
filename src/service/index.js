import request from "../utils/request";
export const getDataApi = (params) => {
  return request(
    "/newtongji1/bigScreen/data/bigScreenDataController/queryData.do",
    {
      method: "GET",
      body: {
        ...params,
        areaId: "68391EFBB85C405DBB9A9CC0F92645A8",
      },
    }
  );
};
