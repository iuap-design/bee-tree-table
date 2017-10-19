
import React, { Component } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Table from 'bee-table';
import { dataInfo } from './data';
import Pagination from 'bee-pagination';
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import FormControl from 'bee-form-control';
import PropTypes from 'prop-types';


const defaultProps = {
    defaultColumn: []
};

const propTypes = {
    columns: PropTypes.array
};

const pageData = {
    1: [
        {
            key: "1-0-1",
            name: "博宇1",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-2",
            name: "博宇2",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-3",
            name: "博宇3",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-4",
            name: "博宇4",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-5",
            name: "博宇5",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    2: [
        {
            key: "1-0-6",
            name: "博宇6",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-7",
            name: "博宇7",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-8",
            name: "博宇8",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-9",
            name: "博宇9",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-10",
            name: "博宇10",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    3: [{
        key: "1-0-8",
        name: "姚鑫",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-6",
        name: "赵宇",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-7",
        name: "王皓",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-10",
        name: "认化",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-11",
        name: "邵震",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }]

}

const pageData2 = {
    1: [{
        key: "1-0-1",
        name: "永峰",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"

    }, {
        key: "1-0-2",
        name: "李刚",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-3",
        name: "卫东",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-4",
        name: "岳明",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-5",
        name: "波波",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }],
    data1_0_0_0: [{
        key: "1-0-1",
        name: "永峰",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"

    }, {
        key: "1-0-2",
        name: "李刚",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-3",
        name: "卫东",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-4",
        name: "岳明",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-5",
        name: "波波",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }],

    2: [{
        key: "1-0-8",
        name: "姚鑫",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-6",
        name: "赵宇",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-7",
        name: "王皓",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-10",
        name: "认化",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-11",
        name: "邵震",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }],
    3: [{
        key: "1-0-12",
        name: "胡月",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }]

}

const pageData3 = {
    1: [
        {
            key: "1-0-1",
            name: "boa1",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-2",
            name: "boa2",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-3",
            name: "boa3",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-4",
            name: "boa4",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-5",
            name: "boa5",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    2: [
        {
            key: "1-0-6",
            name: "boa6",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-7",
            name: "boa7",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-8",
            name: "boa8",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-9",
            name: "boa9",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-10",
            name: "boa10",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    3: [{
        key: "1-0-8",
        name: "boa11",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-6",
        name: "boa12",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-7",
        name: "boa13",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-10",
        name: "boa14",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }]

}

const pageData4 = {
    1: [
        {
            key: "1-0-1",
            name: "aa",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-2",
            name: "bb",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-3",
            name: "cc",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-4",
            name: "dd",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"

        }, {
            key: "1-0-5",
            name: "ee",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    2: [
        {
            key: "1-0-6",
            name: "ff",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-7",
            name: "gg",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-8",
            name: "hh",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-9",
            name: "jj",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }, {
            key: "1-0-10",
            name: "kk",
            mail: 'boyu163@qq.com',
            status: 'approved',
            date: '01/11/02',
            address: "No.1"
        }],
    3: [{
        key: "1-0-8",
        name: "ll",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-6",
        name: "mm",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-7",
        name: "zz",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-10",
        name: "yy",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }, {
        key: "1-0-11",
        name: "nn",
        mail: 'boyu163@qq.com',
        status: 'approved',
        date: '01/11/02',
        address: "No.1"
    }]

}




class TableShowPaga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldData: props.data,
            activePage: 1,
            changeData: [],
            dataInfo: props.data,
            data: []
        }
    }

    componentDidMount() {
        let { data } = this.props;
        let getData = dataInfo["data" + data];
        this.setState({
            data: getData
        })
    }

    componentWillReceiveProps(props) {
        let { data } = props;
        if (data) {
            if (this.state.dataInfo == data) {
                return;
            } else {
                let getData = dataInfo["data" + data];
                this.setState({
                    data: getData,
                    dataInfo: data,
                    changeData: [],
                    activePage: 1
                })
            }

        }

    }
    /**
        * 界面分页点选
        * @param eventKey
        */
    handleSelect(eventKey) {

        if (this.state.dataInfo == "1_0_0_0") {
            this.setState({
                changeData: pageData2[eventKey],
                activePage: eventKey
            }, () => {
                console.log('加载完成')
            });
        } else if (this.state.dataInfo == "1_0") {
            this.setState({
                changeData: pageData[eventKey],
                activePage: eventKey
            }, () => {
                console.log('加载完成')
            });
        } else if (this.state.dataInfo == "1_1_0") {
            this.setState({
                changeData: pageData3[eventKey],
                activePage: eventKey
            }, () => {
                console.log('加载完成')
            });
        } else if (this.state.dataInfo == "1_1_0_1") {
            this.setState({
                changeData: pageData4[eventKey],
                activePage: eventKey
            }, () => {
                console.log('加载完成')
            });
        }

    }

    render() {
        let { data, changeData, activePage } = this.state;
        let getColumns = this.props.columns;
        let columns;
        if (getColumns && getColumns.length > 0) {
            columns = getColumns
        } else {
            columns = this.props.defaultColumn;
        }
        if (changeData && changeData.length > 0) {
            data = changeData;
        }
        return (

            <div>

                <Table columns={columns} data={data} />
                
                {
                    data.length >= 5 ? <Pagination
                        first
                        last
                        prev
                        next
                        boundaryLinks
                        items={2}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect.bind(this)} /> : ""
                }

            </div>


        )
    }
}

TableShowPaga.propTypes = propTypes;
TableShowPaga.defaultProps = defaultProps;

export default TableShowPaga;