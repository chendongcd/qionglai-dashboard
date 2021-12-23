/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "antd";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import "./table.less";
const pageSize = 10;
const speed = 5000;
function CustomTable({
  title,
  sum,
  dataSource,
  columns,
  setProgress,
  labelKey,
  currentScreen,
}) {
  const [current, setCurrent] = useState(1);
  const intervel = useRef(null);
  const timeout = useRef(null);
  const pages = useMemo(() => {
    const total = dataSource.length;
    return Math.ceil(total / pageSize);
  }, [dataSource]);
  const changeCurrent = useCallback(() => {
    if (intervel && intervel.current) {
      clearInterval(intervel.current);
    }
    if (pages === 0) {
      return setProgress(currentScreen !== 6 ? currentScreen + 1 : 1);
    }
    intervel.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= pages && pages > 0) {
          clearInterval(intervel.current);
          setProgress(currentScreen !== 6 ? currentScreen + 1 : 1);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  }, [labelKey, pages, current, setProgress]);
  useEffect(() => {
    if (dataSource.length > 0) {
      changeCurrent();
      return;
    } else {
      timeout.current = setTimeout(
        () => setProgress(currentScreen !== 6 ? currentScreen + 1 : 1),
        speed
      );
    }
    return () => {
      if (intervel && intervel.current) {
        clearInterval(intervel.current);
      }
      if (timeout && timeout.current) {
        clearInterval(timeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  const newColumns = useMemo(() => {
    const temp = [...columns];
    temp[0].render = (text, record, index) => {
      if (current > pages && pages > 0) {
        return index + 1 + (current - 2) * pageSize;
      }
      return index + 1 + (current - 1) * pageSize;
    };
    return temp;
  }, [columns, labelKey, current]);

  useEffect(() => {
    setCurrent(1);
  }, [currentScreen]);
  useEffect(() => {
    console.log("重新进入");
    return () => {
      console.log("离去");
      if (intervel && intervel.current) {
        clearInterval(intervel.current);
      }
    };
  }, []);
  return (
    <div className="table">
      <div className="title">
        <div className="line" />
        {title}{" "}
        <div className="sum">
          合计： <span className="sum-num">{sum}</span> 项
        </div>
      </div>
      <Table
        rowKey={(record, index) => {
          return labelKey + (index + 1 + (current - 1) * pageSize);
        }}
        footer={false}
        pagination={{
          pageSize,
          current,
        }}
        size="small"
        dataSource={dataSource}
        columns={newColumns}
        locale={{ emptyText: "暂无数据" }}
        className="custom-table"
      />
    </div>
  );
}

export default CustomTable;
