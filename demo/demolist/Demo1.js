
/**
*
* @title 根据用户喜好，自己设定tree结构
* @description 点击每项tree结构的时候,右侧table进行相应数据更新
*
*/
import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import TreeTable from '../../src';
import Tree from 'bee-tree';

const propTypes = {};
const TreeNode = Tree.TreeNode;
const defaultProps = {
    keys: ['0_0_0', '0_0_1']
};
const value = [{
            key: "2-0-0",
            name: "thirdChild1",
            age: 100,
            address: "New York No.2-1-1 Lake Park"
        }, {
            key: "2-0-1",
            name: "thirdChild2",
            age: 100,
            address: "New York No.2-1-2 Lake Park"
        }, {
            key: "2-0-2",
            name: "thirdChild3",
            age: 100,
            address: "New York No.2-1-3 Lake Park"
        }];
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

Demo1.defaultProps = defaultProps;
export default Demo1;