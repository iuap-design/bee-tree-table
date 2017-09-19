/**
*
* @title 树表基本使用事例
* @description 事例涵盖 checkbox如何选择，disable状态和部分选择状态。
*
*/


import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import TreeTable from '../../src';
import Tree from 'bee-tree';

const TreeNode = Tree.TreeNode;

const defaultProps = {
    keys: ['0_0_0', '0_0_1']
}

class Demo4 extends Component {
    constructor(props) {
        super(props);
        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
            data: "0_0_1_0",
            dataSource: [],
            selectedKeys: []
        };
    }
    onSelect = (info) => {
        console.log('selected', info + "first");
        let data;
        if (info) {
            data = info[0];
            this.setState({
                data: data
            })
        }
    }
    onCheck = (info) => {
        console.log('onCheck', info);
        let data;

        if (info.length > 0) {
            let arr = [];
            let it = "";
            info.map(function (item, index) {
                if (item.length >= it.length) {
                    it = item;
                }
            })
            data = it;
            this.setState({
                data: data
            })
        } else {
            this.setState({
                data: "0_0",
            })
        }
    }
    render() {
        let { data, dataSource } = this.state;
        return (
            <div>
                <div>
                    <Row>

                        <Col md={12} sm={12}>
                            <TreeTable data={data} dataSource={dataSource} >
                                <Tree className="myCls" showLine checkable
                                    defaultExpandedKeys={this.state.defaultExpandedKeys}
                                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                                    defaultCheckedKeys={this.state.defaultCheckedKeys}
                                    onSelect={this.onSelect} onCheck={this.onCheck}
                                    selectedKeys={this.state.selectedKeys}
                                >
                                    <TreeNode title="node 0_0" key="0_0">
                                        <TreeNode title="node 0_0_0" key="0_0_0" disabled>
                                            <TreeNode title="node 0_0_0_0" key="0_0_0_0" disableCheckbox />
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
        );
    }
}

Demo4.defaultProps = defaultProps;

export default Demo4;