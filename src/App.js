import {useEffect} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.less';
import {getDataApi} from './service/index'

function App() {
  useEffect(()=>{
    getDataApi({
      projectType:1,
      queryType:1,
      areaId:'68391EFBB85C405DBB9A9CC0F92645A8 '
    })
  },[])
  return (
    <div className="App">
      <div className="title">
      邛崃市公共资源交易服务中心
      </div>
    </div>
  );
}

export default App;
