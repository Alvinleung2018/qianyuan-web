import React from 'react'
import {Input} from 'antd';
import css from "../columnDesign.scss";

const {TextArea} = Input;

class SqlContain extends React.Component {

    constructor(...props) {
        super(...props);
        this.state = {value: this.props.sql};
    }

    /**
     * 獲取輸入框中的内容
     * @return {*}
     */
    getVal() {
        return this.state.value;
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    };


    render() {
        return (
            <div className={css.sql}>
                <TextArea id="text-area"
                          value={this.state.value}
                          style={{height: '100%'}}
                          placeholder="请输入SQL语句"
                          onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default SqlContain