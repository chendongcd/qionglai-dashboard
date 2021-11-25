import { Table } from "antd";
function CustomTable({ title, sum, dataSource, columns }) {
  return (
    <div className="table">
      <div className="title">
        {title} <div className="sum">{sum}</div>
      </div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default CustomTable;
