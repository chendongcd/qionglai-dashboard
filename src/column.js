export const constructDailyColumn = [
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
]

export const constructAllColumn = [
    {
        title: "序号",
        dataIndex: "pkId",
        key: "pkId",
        render: (text, record, index) => index + 1,
        width:60,
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
]

export const constructMonthColumn = [
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
]

export const landMonthColumn = [
    {
        title: "序号",
        dataIndex: "noticeNo",
        key: "noticeNo",
        render: (text, record, index) => index + 1,
      },
      {
        title: "公众号",
        dataIndex: "noticeNo",
        key: "noticeNo",
      },
      {
        title: "宗地编号",
        dataIndex: "landCode",
        key: "landCode",
      },
      {
        title: "宗地位置",
        dataIndex: "landAddress",
        key: "landAddress",
      },
      {
        title: "交易时间",
        dataIndex: "transDate",
        key: "transDate",
      },
      {
        title: "交易方式",
        dataIndex: "transMode",
        key: "transMode",
      },
      {
        title: "成交时间",
        dataIndex: "dealDate",
        key: "dealDate",
      },
      {
        title: "成交价/元",
        dataIndex: "dealPrice",
        key: "dealPrice",
      },
      {
        title: "竞得人",
        dataIndex: "transMode",
        key: "winners",
      },
]
export const ownerMonthColumn = [
    {
        title: "序号",
        dataIndex: "noticeNo",
        key: "noticeNo",
        render: (text, record, index) => index + 1,
      },
      {
        title: "公众号",
        dataIndex: "noticeNo",
        key: "noticeNo",
      },
      {
        title: "标的物名称",
        dataIndex: "projectName",
        key: "projectName",
      },
      {
        title: "标的物编号",
        dataIndex: "projectCode",
        key: "projectCode",
      },
      {
        title: "起始价/元",
        dataIndex: "startPrice",
        key: "startPrice",
      },
      {
        title: "成交价/元",
        dataIndex: "dealPrice",
        key: "dealPrice",
      },
      {
        title: "竞得人",
        dataIndex: "bidder",
        key: "bidder",
      },
]
export const ownerAllColumn = [
    {
        title: "序号",
        dataIndex: "noticeNo",
        key: "noticeNo",
        render: (text, record, index) => index + 1,
      },
      {
        title: "公众号",
        dataIndex: "noticeNo",
        key: "noticeNo",
      },
      {
        title: "标的物名称",
        dataIndex: "projectName",
        key: "projectName",
      },
      {
        title: "标的物编号",
        dataIndex: "projectCode",
        key: "projectCode",
      },
      {
        title: "交易方式",
        dataIndex: "tradeMode",
        key: "tradeMode",
      },
]