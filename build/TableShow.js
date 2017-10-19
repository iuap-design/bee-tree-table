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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultProps = {
    dataSource: [],
    defaultColumn: [{
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "40%"
    }, {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: "30%"
    }, {
        title: "Address",
        dataIndex: "address",
        key: "address"
    }]
};

var propTypes = {
    columns: _propTypes2["default"].array,
    dataSource: _propTypes2["default"].array
};

var TableShow = function (_Component) {
    _inherits(TableShow, _Component);

    function TableShow(props) {
        _classCallCheck(this, TableShow);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            data: [],
            dataSource: props.dataSource
        };
        return _this;
    }

    TableShow.prototype.componentDidMount = function componentDidMount() {
        var data = this.props.data;

        var getData = _data.dataInfo["data" + data];
        console.log(getData);
        this.setState({
            data: getData
        });
    };

    TableShow.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        var data = props.data;

        if (data) {
            var getData = _data.dataInfo["data" + data];
            console.log(getData);
            this.setState({
                data: getData
            });
        }
    };

    TableShow.prototype.render = function render() {
        var data = this.state.data;
        var dataSource = this.props.dataSource;
        var getColumns = this.props.columns;
        var columns = void 0;
        if (dataSource && dataSource.length > 0) {
            data = dataSource;
        }
        if (getColumns && getColumns.length > 0) {
            columns = getColumns;
        } else {
            columns = this.props.defaultColumn;
        }

        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_beeTable2["default"], { columns: columns, data: data })
        );
    };

    return TableShow;
}(_react.Component);

TableShow.propTypes = propTypes;
TableShow.defaultProps = defaultProps;

exports["default"] = TableShow;
module.exports = exports['default'];