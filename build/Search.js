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

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        var _temp, _this, _ret;

        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            searchValue: "",
            empty: false
        }, _this.handleSearch = function () {
            var onSearch = _this.props.onSearch;

            onSearch && onSearch(_this.state.searchValue);
        }, _this.handleKeyDown = function (e) {
            if (e.keyCode === 13) {
                _this.handleSearch();
            }
        }, _this.handleChange = function (e) {
            _this.setState({
                searchValue: e
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
    * 搜索
    */


    /**
     * 捕获回车
     * @param e
     */


    /**
     * 输入框改变
     * @param e
     */


    Search.prototype.render = function render() {
        return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: 'search-component' },
            _react2["default"].createElement(_beeFormControl2["default"], {
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                defaultValue: this.state.searchValue,
                type: 'text'
            }),
            _react2["default"].createElement(
                _beeInputGroup2["default"].Button,
                { onClick: this.handleSearch, shape: 'border' },
                _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search' })
            )
        );
    };

    return Search;
}(_react.Component);

exports["default"] = Search;
module.exports = exports['default'];