
import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Table from 'bee-table';
import { dataInfo } from './data';


const defaultProps = {
    dataSource: [],
    defaultColumn: [{
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "40%"
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: "30%"
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    }]
};

const propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array
};
class TableShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataSource: props.dataSource
        }
    }

    componentDidMount() {
        let { data } = this.props;
        let getData = dataInfo["data" + data];
        console.log(getData);
        this.setState({
            data: getData
        })
    }

    componentWillReceiveProps(props) {
        let { data } = props;
        if (data) {
            let getData = dataInfo["data" + data];
            console.log(getData);
            this.setState({
                data: getData
            })
        }

    }
    
    render() {
        let data = this.state.data;
        let dataSource = this.props.dataSource;
        let getColumns = this.props.columns;
        let columns;
        if (dataSource && dataSource.length > 0) {
            data = dataSource;
        }
        if (getColumns && getColumns.length > 0) {
            columns = getColumns
        } else {
            columns = this.props.defaultColumn;
        }

        return (
            <div>
                {
                   <Table columns={columns} data={data} />
                }

            </div>
        )
    }
}

TableShow.propTypes = propTypes;
TableShow.defaultProps = defaultProps;

export default TableShow;