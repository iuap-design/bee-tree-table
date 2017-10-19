'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeLayout = require('bee-layout');

var _beeTable = require('bee-table');

var _beeTable2 = _interopRequireDefault(_beeTable);

var _data = require('./data');

var _beePagination = require('bee-pagination');

var _beePagination2 = _interopRequireDefault(_beePagination);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require('bee-input-group');

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultProps = {
    defaultColumn: []
};

var propTypes = {
    columns: _propTypes2["default"].array
};

var pageData = {
    1: [{
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
    2: [{
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

};

var pageData2 = {
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

};

var pageData3 = {
    1: [{
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
    2: [{
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

};

var pageData4 = {
    1: [{
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
    2: [{
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

};

var TableShowPaga = function (_Component) {
    _inherits(TableShowPaga, _Component);

    function TableShowPaga(props) {
        _classCallCheck(this, TableShowPaga);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            oldData: props.data,
            activePage: 1,
            changeData: [],
            dataInfo: props.data,
            data: []
        };
        return _this;
    }

    TableShowPaga.prototype.componentDidMount = function componentDidMount() {
        var data = this.props.data;

        var getData = _data.dataInfo["data" + data];
        this.setState({
            data: getData
        });
    };

    TableShowPaga.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        var data = props.data;

        if (data) {
            if (this.state.dataInfo == data) {
                return;
            } else {
                var getData = _data.dataInfo["data" + data];
                this.setState({
                    data: getData,
                    dataInfo: data,
                    changeData: [],
                    activePage: 1
                });
            }
        }
    };
    /**
        * 界面分页点选
        * @param eventKey
        */


    TableShowPaga.prototype.handleSelect = function handleSelect(eventKey) {

        if (this.state.dataInfo == "1_0_0_0") {
            this.setState({
                changeData: pageData2[eventKey],
                activePage: eventKey
            }, function () {
                console.log('加载完成');
            });
        } else if (this.state.dataInfo == "1_0") {
            this.setState({
                changeData: pageData[eventKey],
                activePage: eventKey
            }, function () {
                console.log('加载完成');
            });
        } else if (this.state.dataInfo == "1_1_0") {
            this.setState({
                changeData: pageData3[eventKey],
                activePage: eventKey
            }, function () {
                console.log('加载完成');
            });
        } else if (this.state.dataInfo == "1_1_0_1") {
            this.setState({
                changeData: pageData4[eventKey],
                activePage: eventKey
            }, function () {
                console.log('加载完成');
            });
        }
    };

    TableShowPaga.prototype.render = function render() {
        var _state = this.state,
            data = _state.data,
            changeData = _state.changeData,
            activePage = _state.activePage;

        var getColumns = this.props.columns;
        var columns = void 0;
        if (getColumns && getColumns.length > 0) {
            columns = getColumns;
        } else {
            columns = this.props.defaultColumn;
        }
        if (changeData && changeData.length > 0) {
            data = changeData;
        }
        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_beeTable2["default"], { columns: columns, data: data }),
            data.length >= 5 ? _react2["default"].createElement(_beePagination2["default"], {
                first: true,
                last: true,
                prev: true,
                next: true,
                boundaryLinks: true,
                items: 2,
                maxButtons: 5,
                activePage: this.state.activePage,
                onSelect: this.handleSelect.bind(this) }) : ""
        );
    };

    return TableShowPaga;
}(_react.Component);

TableShowPaga.propTypes = propTypes;
TableShowPaga.defaultProps = defaultProps;

exports["default"] = TableShowPaga;
module.exports = exports['default'];