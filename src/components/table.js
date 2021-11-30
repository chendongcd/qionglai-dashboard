import { Table } from "antd";
import "./table.less";

function CustomTable({ title, sum, dataSource, columns }) {
  return (
    <div className="table">
      <div className="title">
        <div className="line" />
        {title}{" "}
        <div className="sum">
          合计： <span>{sum}</span>项
        </div>
      </div>
      <Table rowKey="pkId" pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default CustomTable;
