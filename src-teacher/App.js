import React from 'react';
import {Table, Button} from "antd";
const columns = [
  {
    title: '行号',
    align:'center',
    dataIndex: 'key',
  },
  {
    title: '班级',
    align:'center',
    dataIndex: 'age',
  },
  {
    title: '课程',
    align:'center',
    dataIndex: 'class',
  },
  {
    title: '课程时间',
    align:'center',
    dataIndex: 'time',
  },
  {
    title: '课节时间',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '教师',
    align:'center',
    dataIndex: 'names',
  },
  {
    title: '教室',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '班主任',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '助教',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '教研室',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '调代课状态',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '被代课讲师',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '点名表状态',
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '点名时间',
    align:'center',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    names: `易航`,
    age: 23,
    address: `网站 ${i}`,
    time:`20-9-05-27`,
    class:"react"
  });
}
class App extends React.Component{
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render(){
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return <div className="wrap">
      <div style={{ marginBottom: 10 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ height:'30px' }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table bordered='true' align="center" rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  }
 
}

export default App;
