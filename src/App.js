import { useEffect, useCallback, useState } from "react";
import { Spin } from 'antd';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.less";
import { getDataAction } from "./service/service";
import Header from "./components/header";
import CustomTable from "./components/table";
import {
  constructDailyColumn,
  constructAllColumn,
  constructMonthColumn,
  landMonthColumn,
  ownerAllColumn,
  ownerMonthColumn,
} from "./column";

function App() {
  const [constructDaily, setConstructDaily] = useState([]);
  const [constructAll, setConstructAll] = useState([]);
  const [constructMonth, setConstructMonth] = useState([]);
  const [landMonth, setLandMonth] = useState([]);
  const [ownMonth, setOwnMonth] = useState([]);
  const [ownAllMonth, setOwnAllMonth] = useState([]);
  const [current, setCurrent] = useState(1);
  const [firstProgress, setFirstProgress] = useState({});
  const [secondProgress, setSecondProgress] = useState({});
  const [loading, setLoading] = useState(true);

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
  const setFPorgress = useCallback((key, value) => {
    setFirstProgress((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);
  const setSPorgress = useCallback((key, value) => {
    setSecondProgress((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    Promise.all([getConstructData(), getLandData(), getOwnData()]).then(() => {
      setLoading(false);
    });
  }, [getConstructData, getLandData, getOwnData]);
  useEffect(() => {
    const firstKeys = Object.keys(firstProgress);
    const secondKeys = Object.keys(secondProgress);
    if (
      !loading && 
      firstKeys.length > 0 &&
      firstKeys.every((key) => firstProgress[key])
    ) {
      setCurrent(2);
      setFirstProgress({});
      return;
    }
    if (
      !loading && 
      secondKeys.length > 0 &&
      secondKeys.every((key) => secondProgress[key])
    ) {
      setCurrent(1);
      setSecondProgress({});
      return;
    }
  }, [firstProgress, loading, secondProgress]);
  const renderContent = useCallback(() => {
    if(loading){
      return <div className="loading-wrapper"><Spin size="large"/></div>
    }
    if (current === 2) {
      return (
        <div className="content-table">
          <CustomTable
            dataSource={landMonth}
            columns={landMonthColumn}
            title="土地矿权-近一月成交信息"
            sum={landMonth.length}
            setProgress={setSPorgress}
            labelKey="landMonth"
            currentScreen={current}
          />
          <div className="two-table">
            <CustomTable
              dataSource={ownMonth}
              columns={ownerMonthColumn}
              title="资产资源-近一月成交信息"
              sum={ownMonth.length}
              className="left-table"
              setProgress={setSPorgress}
              labelKey="ownMonth"
              currentScreen={current}
            />
            <CustomTable
              dataSource={ownAllMonth}
              columns={ownerAllColumn}
              title="资产资源-可参与项目信息"
              sum={ownAllMonth.length}
              className="right-table"
              setProgress={setSPorgress}
              labelKey="ownAllMonth"
              currentScreen={current}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="content-table">
        <CustomTable
        dataSource={constructDaily}
        columns={constructDailyColumn}
        title="建设工程-当日交易项目信息"
        sum={constructDaily.length}
        setProgress={setFPorgress}
        labelKey="constructDaily"
        currentScreen={current}
      />
        <div className="two-table">
          <CustomTable
          dataSource={constructAll}
          columns={constructAllColumn}
          title="建设工程-可参与项目信息"
          sum={constructAll.length}
          className="left-table"
          setProgress={setFPorgress}
          labelKey="constructAll"
          currentScreen={current}
        />
          <CustomTable
            dataSource={constructMonth}
            columns={constructMonthColumn}
            title="建设工程-近一月成交信息"
            sum={constructMonth.length}
            className="right-table"
            setProgress={setFPorgress}
            labelKey="constructMonth"
            currentScreen={current}
          />
        </div>
      </div>
    );
  }, [constructAll, constructDaily, constructMonth, current, landMonth, loading, ownAllMonth, ownMonth, setFPorgress, setSPorgress]);
  return (
    <div className="App">
      <Header />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
