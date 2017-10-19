
import React, { Component } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Table from 'bee-table';
import { dataInfo } from './data';
import Pagination from 'bee-pagination';
import Search from "./Search";
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
            name: "boyu5",
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
        }]

}


class TableShowSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataInfo: props.data,
            data: [],
            defaultData: [],
            arrFlag: true
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
                    defaultData: [],
                    arrFlag: true
                })
            }
        }
    }

    /**
     * 搜索的回调
     */
    handleSearchData = (value) => (e) => {
        let { data } = this.state;
        let arr = [];
        if (value) {
            data.map(function (item, index) {
                if (item.name.indexOf(value) != -1) {
                    arr.push(item);
                }
            })
            if (arr.length > 0) {
                this.setState({
                    defaultData: arr,
                    arrFlag: true
                })
            } else {
                this.setState({
                    arrFlag: false
                })
            }

        }
    }
    render() {
        let { data, defaultData,arrFlag } = this.state;
        let { columns } = this.props;
        if (arrFlag) {
            if (defaultData.length > 0) {
                data = defaultData;
            }
        } else {
            data = [];
        }

        return (

            <div>
                <Search onSearch={(value) => {
                    this.handleSearchData(value)()
                }} />

                <Table columns={columns} data={data} className="margin-top-10" />

            </div>


        )
    }
}

TableShowSearch.propTypes = propTypes;
TableShowSearch.defaultProps = defaultProps;

export default TableShowSearch;