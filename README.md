# bee-tree-table

[![npm version](https://img.shields.io/npm/v/bee-tree-table.svg)](https://www.npmjs.com/package/bee-tree-table)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tree-table/master.svg)](https://travis-ci.org/tinper-bee/bee-tree-table)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tree-table/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tree-table?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tree-table.svg)](https://david-dm.org/tinper-bee/bee-tree-table#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-tree-table.svg?style=flat)](https://npmjs.org/package/bee-tree-table)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-tree-table.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree-table "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-tree-table.svg)](http://isitmaintained.com/project/tinper-bee/bee-tree-table "Percentage of issues still open")


react bee-tree-table component for tinper-bee

左树右表结构，支持点击左侧的树节点，进行相应的table数据的请求展示，支持分页和表格的搜索等功能

## 使用方法

```
class Demo1 extends Component {
    constructor(props) {
        super(props);
        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            data: "0_0",
            dataSource: [],
            selectedKeys:[]
        };
    }
    /**
     * 被选中的时候，触发的事件
     */
    onSelect = (info) => {
        console.log('selected', info +"first");
        let data;
        if (info) {
            data = info[0];
             this.setState({
                data: data
            }) 
        }

    }
    /**
     * 这里与后台请求用来返回数据
     */
    getData = (value) =>{
            this.setState({
                dataSource: value
            })
    }

    render() {
        let {data,dataSource} = this.state;
        return (
            <div>
                <div>
                    <Row>

                        <Col md={12} sm={12}>
                            <TreeTable data={data} dataSource={dataSource} >
                                <Tree className="myCls" showLine
                                    onSelect={this.onSelect} 
                                    selectedKeys={this.state.selectedKeys}
                                >
                                    <TreeNode title="node 0_0" key="0_0">
                                        <TreeNode title="node 0_0_0" key="0_0_0" >
                                            <TreeNode title="node 0_0_0_0" key="0_0_0_0" />
                                            <TreeNode title="node 0_0_0_1" key="0_0_0_1" />
                                        </TreeNode>
                                        <TreeNode title="node 0_0_1" key="0_0_1">
                                            <TreeNode title="node 0_0_1_0" key="0_0_1_0" />
                                        </TreeNode>
                                    </TreeNode>
                                </Tree>
                            </TreeTable>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

```




## API
### bee-tree-table
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|data|传入的key,需要与后台返回数据对象的key或者唯一的一个标示符进行匹配|any|-|
|dataSource|table要显示的表结构|array|[]|
|placeholder|输入框的默认提示|string|-|
|onChange| input 的 value 变化时，调用此函数|handleChange(value)|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onSelect| 当用户选择树节点触发的回调函数|onSelect()|-|
|onSearch| 当用户点击搜索图标时触发的回调函数|handleSearchData(value)|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-tree-table
$ cd bee-tree-table
$ npm install
$ npm run dev
```
