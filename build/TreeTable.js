'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeLayout = require('bee-layout');

var _beeTree = require('bee-tree');

var _beeTree2 = _interopRequireDefault(_beeTree);

var _TableShow = require('./TableShow');

var _TableShow2 = _interopRequireDefault(_TableShow);

var _TableShowPaga = require('./TableShowPaga');

var _TableShowPaga2 = _interopRequireDefault(_TableShowPaga);

var _TableShowSearch = require('./TableShowSearch');

var _TableShowSearch2 = _interopRequireDefault(_TableShowSearch);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    columns: _propTypes2["default"].array,
    dataSource: _propTypes2["default"].array
};
var defaultProps = {
    data: "0_0",
    dataSource: []
};
console.log(_beeTree2["default"]);

var TreeTable = function (_Component) {
    _inherits(TreeTable, _Component);

    function TreeTable(props) {
        _classCallCheck(this, TreeTable);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            data: props.data
        };
        return _this;
    }

    TreeTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        var data = props.data;

        if (data) {
            this.setState({
                data: data
            });
        }
    };

    TreeTable.prototype.render = function render() {
        var data = this.state.data;
        var _props = this.props,
            dataSource = _props.dataSource,
            columns = _props.columns,
            pageFlag = _props.pageFlag,
            searchFlag = _props.searchFlag;

        if (dataSource && dataSource.length > 0) {
            data = "";
        }
        return _react2["default"].createElement(
            _beeLayout.Row,
            null,
            _react2["default"].createElement(
                _beeLayout.Col,
                { md: 4, sm: 4 },
                this.props.children ? _react2["default"].createElement(
                    'div',
                    null,
                    this.props.children
                ) : ""
            ),
            _react2["default"].createElement(
                _beeLayout.Col,
                { md: 8, sm: 8 },
                pageFlag == true ? _react2["default"].createElement(_TableShowPaga2["default"], { data: data, columns: columns, dataSource: dataSource }) : searchFlag ? _react2["default"].createElement(_TableShowSearch2["default"], { data: data, columns: columns, dataSource: dataSource }) : _react2["default"].createElement(_TableShow2["default"], { data: data, dataSource: dataSource, columns: columns })
            )
        );
    };

    return TreeTable;
}(_react.Component);

;
TreeTable.propTypes = propTypes;
TreeTable.defaultProps = defaultProps;
exports["default"] = TreeTable;
module.exports = exports['default'];