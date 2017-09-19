
import React, { Component, PropTypes } from 'react';
import { Con, Row, Col } from 'bee-layout';
import Table from 'bee-table';
import { dataInfo } from './data';
import Pagination from 'bee-pagination';
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import FormControl from 'bee-form-control';


class Search extends Component {
    state = {
        searchValue: "",
        empty: false
    };

    /**
  * 搜索
  */
    handleSearch = () => {
        let { onSearch } = this.props;
        onSearch && onSearch(this.state.searchValue);
    };

    /**
     * 捕获回车
     * @param e
     */
    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.handleSearch();
        }
    };

    /**
     * 输入框改变
     * @param e
     */
    handleChange = (e) => {
        this.setState({
            searchValue: e
        });
    };

    

    render() {
        return (
            <InputGroup simple className="search-component">
                <FormControl
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    defaultValue={this.state.searchValue}
                    type="text"
                />
                <InputGroup.Button onClick={this.handleSearch} shape="border">
                    <Icon type="uf-search" />
                </InputGroup.Button>
            </InputGroup>
        );
    }
}

export default Search;