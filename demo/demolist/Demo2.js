

/**
*
* @title Tree数据可控事例
* @description 点击每项tree结构的时候,右侧table进行相应数据更新
*
*/

import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import TreeTable from '../../src';
import Tree from 'bee-tree';

const x = 2;
const y = 1;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}_${i}`;
        tns.push({ title: key, key:"node"+key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

const TreeNode = Tree.TreeNode;


class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedKeys: ['0_0_0', '0_0_1'],
            autoExpandParent: true,
            selectedKeys: [],
            data: "0_0"
        };
        this.onExpand = this.onExpand.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }
    onExpand(expandedKeys) {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
   
    onSelect = (info) => {
        console.log('selected', info);
        let data;
        if (info) {
            data = info[0].substring(4);
            this.setState({
                data: data
            })
        }

    }
    render() {
         let data = this.state.data;
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.key} >
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.key} />;
        });
        return (
            <TreeTable data={data} >
                <Tree
                    onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}
                >
                    {loop(gData)}
                </Tree>
            </TreeTable>


        );
    }
};


export default Demo2;