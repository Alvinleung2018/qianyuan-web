import React from 'react'
import PropTypes from 'prop-types';
import {List, Radio, Input, Popover, Button, Icon} from 'antd';

import css from './columnList.scss'
import {ShowType} from '../../../lib/mesh/config/serverEnums'


class ColumnList extends React.Component {
    render() {
        const {props} = this
        const {list} = this.props
        return (
            <div className={css.contain}>
                <div className={css.list}>
                    <List  size="small"
                           bordered
                           dataSource={list}
                           renderItem={(item, index) => (
                               <List.Item>
                                   <Item onSet={props.onSet}
                                         pos={index}
                                         {...item}
                                   />
                               </List.Item>
                           )}
                    />
                </div>
            </div>
        )
    }
}

export default ColumnList


const ShowTypeDef = {
    NONE: {view: 'column-view-none', icon: 'close'},
    HIDE: {view: 'column-view-hide', icon: 'eye-invisible'},
    LIST: {view: 'column-view-list', icon: 'ordered-list'},
    FORM: {view: 'column-view-form', icon: 'form'},
    ALL: {view: 'column-view-form', icon: 'eye'},
};

const ShowTypeMapping = (() => {
    const mapping = {};
    for (let item of ShowType) {
        mapping[item.value] = Object.assign({}, item, ShowTypeDef[item.value])
    }
    return mapping;
})()

class Item extends React.Component {

    handleRadioChange = () => {

    }

    handleSet = () => {
        const {props} = this;
        props.onSet(props.pos, props.name);
    }

    handleUp = () => {

    }

    handleDown = () => {

    }

    handleShow = () => {

    }

    render() {
        const {props} = this;
        console.log(props)
        return (
            <div className={css.item}>
                <div>
                    <Popover content={`设定字段${props.name}为查询主键`} title="设置">
                        <Radio checked={props.isPk} onChange={this.handleRadioChange}/>
                    </Popover>
                    <span className={css['column-name']}>{props.name}</span>|
                    <span className={css['column-name']}>{props.display}</span>
                </div>
                <div>
                <span onClick={this.handleShow}>
                <View show={props.show}/>
                </span>
                    <Button type={props.curSet === props.pos ? "primary" : "default"} size="small"
                            onClick={this.handleSet}>设置</Button>
                    <Icon className={css['icon-lf']} type="up" onClick={this.handleUp}/>
                    <Icon className={css['icon-rg']} type="down" onClick={this.handleDown}/>
                </div>
            </div>
        )
    }
}


const View = props => {
    const {show} = props
    const {view, label, icon} = ShowTypeMapping[show]
    return (
        <span className={`${css['column-view']} ${css[view]}`}>
            <span className={css['column-view-title']}>{label}</span>
            <Icon type={icon}/>
        </span>
    )
}