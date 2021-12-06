import { Table } from "antd";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import "./table.less";
const pageSize = 8;
const speed = 10000;
function CustomTable({
  title,
  sum,
  dataSource,
  columns,
  setProgress,
  labelKey,
}) {
  const [current, setCurrent] = useState(1);
  const intervel = useRef(null);
  const pages = useMemo(() => {
    const total = dataSource.length;
    return Math.ceil(total / pageSize);
  }, [dataSource]);
  const changeCurrent = useCallback(() => {
    if (intervel && intervel.current) {
      clearInterval(intervel.current);
    }
    if (pages === 0) {
      return setProgress(labelKey, true);
    }
    intervel.current = setInterval(() => {
      setProgress(labelKey, false);
      setCurrent((prev) => {
        if (prev === pages && pages > 0) {
          clearInterval(intervel.current);
          setProgress(labelKey, true);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  }, [labelKey, pages, setProgress]);
  useEffect(() => {
    if (dataSource.length > 0) {
      changeCurrent();
      return;
    }
    return () => {
      if (intervel && intervel.current) {
        clearInterval(intervel.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);
  return (
    <div className="table">
      <div className="title">
        <div className="line" />
        {title}{" "}
        <div className="sum">
          合计： <span>{sum}</span>项
        </div>
      </div>
      <Table
        rowKey={(record,index)=>labelKey+index}
        footer={false}
        pagination={{
          pageSize,
          current,
        }}
        size="small"
        dataSource={dataSource}
        columns={columns}
        locale={{emptyText:'暂无数据'}}
      />
    </div>
  );
}

export default CustomTable;
