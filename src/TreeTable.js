import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Tree from 'bee-tree';
import TableShow from './TableShow';
import TableShowPaga from './TableShowPaga';
import TableShowSearch from './TableShowSearch';


const propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array
};
const defaultProps = {
    data: "0_0",
    dataSource: []
};
console.log(Tree);
class TreeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    componentWillReceiveProps(props) {
        let { data } = props;
        if (data) {
            this.setState({
                data: data
            })
        }

    }

    render() {
        let { data } = this.state;
        let { dataSource, columns, pageFlag, searchFlag } = this.props;
        if (dataSource && dataSource.length > 0) {
            data = "";
        }
        return (
            <Row>
                <Col md={4} sm={4}>
                    {
                        this.props.children ? (
                            <div>{this.props.children}</div>
                        ) : ""
                    }
                </Col>
                <Col md={8} sm={8}>
                    {
                        pageFlag == true ? <TableShowPaga data={data} columns={columns} dataSource={dataSource}/> :
                            (searchFlag ? <TableShowSearch data={data} columns={columns} dataSource={dataSource}/> :  <TableShow data={data} dataSource={dataSource} columns={columns} />)
                    }
                </Col>
            </Row>
        )
    }
};
TreeTable.propTypes = propTypes;
TreeTable.defaultProps = defaultProps;
export default TreeTable;