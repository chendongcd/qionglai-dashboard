import { useEffect } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.less";
import { getDataApi } from "./service/index";
import Header from "./components/header";
import CustomTable from "./components/table";
import { dailyData } from "./mock";
const column = [
  {
    title: "序号",
    dataIndex: "pkId",
    key: "pkId",
  },
  {
    title: "项目名称",
    dataIndex: "projectName",
    key: "projectName",
  },
  {
    title: "开标时间",
    dataIndex: "bidDate",
    key: "bidDate",
  },
  {
    title: "开标房间",
    dataIndex: "bidRoom",
    key: "bidRoom",
  },
  {
    title: "是否电子标",
    dataIndex: "isDz",
    key: "isDz",
  },
  {
    title: "是否不见面开标",
    dataIndex: "isNoMeet",
    key: "isNoMeet",
  },
  {
    title: "交易方式",
    dataIndex: "transMode",
    key: "transMode",
  },
];
function App() {
  useEffect(() => {
    getDataApi({
      projectType: 1,
      queryType: 1,
      areaId: "68391EFBB85C405DBB9A9CC0F92645A8",
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <CustomTable
          dataSource={dailyData}
          columns={column}
          title="建设工程-当日交易项目信息"
          sum={dailyData.length}
        />
      </div>
    </div>
  );
}

export default App;
