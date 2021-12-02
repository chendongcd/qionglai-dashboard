import { useEffect, useCallback, useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.less";
import { getDataAction } from "./service/service";
import Header from "./components/header";
import CustomTable from "./components/table";
import { dailyData } from "./mock";
import {constructDailyColumn,constructAllColumn,constructMonthColumn,landMonthColumn,ownerAllColumn,ownerMonthColumn} from './column'
const column = [
  {
    title: "序号",
    dataIndex: "pkId",
    key: "pkId",
    render: (text, record, index) => index + 1,
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
  const [constructDaily, setConstructDaily] = useState([]);
  const [constructAll, setConstructAll] = useState([]);
  const [constructMonth, setConstructMonth] = useState([]);
  const [landMonth, setLandMonth] = useState([]);
  const [ownMonth, setOwnMonth] = useState([]);
  const [ownAllMonth, setOwnAllMonth] = useState([]);

  const getConstructData = useCallback(() => {
    getDataAction({
      projectType: 1,
      queryType: 1,
    }).then((daily) => {
      setConstructDaily(daily);
    });
    getDataAction({
      projectType: 1,
      queryType: 2,
    }).then((all) => {
      setConstructAll(all);
    });
    getDataAction({
      projectType: 1,
      queryType: 3,
    }).then((month) => {
      setConstructMonth(month);
    });
  }, []);
  const getLandData = useCallback(() => {
    getDataAction({
      projectType: 2,
      queryType: 3,
    }).then((data) => {
      setLandMonth(data);
    });
  }, []);
  const getOwnData = useCallback(() => {
    getDataAction({
      projectType: 3,
      queryType: 3,
    }).then((data) => {
      setOwnMonth(data);
    });
    getDataAction({
      projectType: 3,
      queryType: 2,
    }).then((data) => {
      setOwnAllMonth(data);
    });
  }, []);
  useEffect(() => {
    getConstructData();
    getLandData()
    getOwnData()
  }, [getConstructData,getLandData,getOwnData]);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <CustomTable
          dataSource={constructDaily}
          columns={constructDailyColumn}
          title="建设工程-当日交易项目信息"
          sum={constructDaily.length}
        />
        <div className="two-table">
          <CustomTable
            dataSource={constructAll}
            columns={constructAllColumn}
            title="建设工程-可参与项目信息"
            sum={constructAll.length}
            className="left-table"
          />
          <CustomTable
            dataSource={constructMonth}
            columns={constructMonthColumn}
            title="建设工程-近一月成交时间"
            sum={constructMonth.length}
            className="right-table"
          />
        </div>
        <CustomTable
          dataSource={landMonth}
          columns={landMonthColumn}
          title="土地矿权-近一月成交信息"
          sum={landMonth.length}
        />
        <div className="two-table">
          <CustomTable
            dataSource={ownMonth}
            columns={ownerMonthColumn}
            title="资产资源-近一月成交信息"
            sum={ownMonth.length}
            className="left-table"
          />
          <CustomTable
            dataSource={ownAllMonth}
            columns={ownerAllColumn}
            title="资产资源-可参与项目信息"
            sum={ownAllMonth.length}
            className="right-table"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
