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

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

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
        name: "boyu5",
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
    }]

};

var TableShowSearch = function (_Component) {
    _inherits(TableShowSearch, _Component);

    function TableShowSearch(props) {
        _classCallCheck(this, TableShowSearch);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleSearchData = function (value) {
            return function (e) {
                var data = _this.state.data;

                var arr = [];
                if (value) {
                    data.map(function (item, index) {
                        if (item.name.indexOf(value) != -1) {
                            arr.push(item);
                        }
                    });
                    if (arr.length > 0) {
                        _this.setState({
                            defaultData: arr,
                            arrFlag: true
                        });
                    } else {
                        _this.setState({
                            arrFlag: false
                        });
                    }
                }
            };
        };

        _this.state = {
            dataInfo: props.data,
            data: [],
            defaultData: [],
            arrFlag: true
        };
        return _this;
    }

    TableShowSearch.prototype.componentDidMount = function componentDidMount() {
        var data = this.props.data;

        var getData = _data.dataInfo["data" + data];
        this.setState({
            data: getData
        });
    };

    TableShowSearch.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        var data = props.data;

        if (data) {
            if (this.state.dataInfo == data) {
                return;
            } else {
                var getData = _data.dataInfo["data" + data];
                this.setState({
                    data: getData,
                    dataInfo: data,
                    defaultData: [],
                    arrFlag: true
                });
            }
        }
    };

    /**
     * 搜索的回调
     */


    TableShowSearch.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state,
            data = _state.data,
            defaultData = _state.defaultData,
            arrFlag = _state.arrFlag;
        var columns = this.props.columns;

        if (arrFlag) {
            if (defaultData.length > 0) {
                data = defaultData;
            }
        } else {
            data = [];
        }

        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_Search2["default"], { onSearch: function onSearch(value) {
                    _this2.handleSearchData(value)();
                } }),
            _react2["default"].createElement(_beeTable2["default"], { columns: columns, data: data, className: 'margin-top-10' })
        );
    };

    return TableShowSearch;
}(_react.Component);

TableShowSearch.propTypes = propTypes;
TableShowSearch.defaultProps = defaultProps;

exports["default"] = TableShowSearch;
module.exports = exports['default'];