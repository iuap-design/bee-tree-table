
/**
*
* @title 带分页的树表结构
* @description 用户点击左侧的树形结构，可以进行右侧table数据的请求展示，table支持分页功能的操作
*
*/
import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Button from 'bee-button';
import TreeTable from '../../src';
import Tree from 'bee-tree';

const propTypes = {};
const TreeNode = Tree.TreeNode;
const defaultProps = {
    keys: ['0_0_0', '0_0_1'],
    defaultColumn: []
};

class Demo3 extends Component {
    constructor(props) {
        super(props);
        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            data: "1_0",
            dataSource: [],
            pageFlag: true,
            selectedKeys: []
        };
        this.defaultColumn = [{
            title: "第一列",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "第二列",
            dataIndex: "mail",
            key: "mail"
        },
        {
            title: "第三列",
            dataIndex: "status",
            key: "status"
        },
        {
            title: "第四列",
            dataIndex: "date",
            key: "date"
        }, {
            title: "第五列",
            dataIndex: "address",
            key: "address"
        }]
    }
    /**
     * 点击每一项
     */
    onSelect = (info) => {
        console.log('selected', info);
        let data;
        if (info) {
            data = info[0];
            this.setState({
                data: data
            })
            // this.getData(value); 这个方法用来与后台数据进行请求
        }

    }
    /**
     * 这里与后台请求用来返回数据
     */
    getData = (value) => {
        this.setState({
            dataSource: value
        })
    }

    render() {
        let { data, dataSource, pageFlag } = this.state;
        return (
            <div>
                <div>
                    <Row>

                        <Col md={12} sm={12}>
                            <TreeTable data={data} dataSource={dataSource} pageFlag={pageFlag} columns={this.defaultColumn}>
                                <Tree className="myCls" showLine
                                    defaultExpandedKeys={this.state.defaultExpandedKeys}
                                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                                    onSelect={this.onSelect}
                                    selectedKeys={this.state.selectedKeys}
                                >
                                    <TreeNode title="畅捷通网络科技" key="1_0">
                                        <TreeNode title="集成开发部" key="1_0_0" >
                                            <TreeNode title="前端技术部" key="1_0_0_0" />
                                        </TreeNode>
                                        <TreeNode title="集团iuap平台" key="1_1_0">
                                            <TreeNode title="集团iuap平台第一子公司" key="1_1_0_1" />
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

Demo3.propTypes = propTypes;
Demo3.defaultProps = defaultProps;
export default Demo3;