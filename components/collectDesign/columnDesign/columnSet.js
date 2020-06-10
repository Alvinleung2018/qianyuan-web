import React from "react";
import {Input, InputNumber, Radio, Empty, Icon, Select} from 'antd';

import css from './columnSet.scss'

class ColumnSet extends React.Component {
    render() {
        const {props} = this
        const {pos, columns} = this.props
        const column = columns[pos];
        console.log(typeof pos)
        console.log(columns)
        const titleList = [
            'Java命名',
            '字段名',
            'AS${name}',
            '显示标题',
            '所属库',
            '所属表',
            'Java类型',
            '可更新',
            '自增序列'

        ]

        const TextInputList = titleList.map((item, index) => {
            return <TextItem key={index} title={item.title} />
        })


        const getList = (titleList, columns, pos) => {

        }


        return (
            typeof pos === 'number'
                ?
                (
                    <div className={css['column-set']}>
                        <TextItem pos={pos} title="Java命名" name="name" val={column.name}/>
                        <TextItem pos={pos} title="字段名" name="column" val={column.column}/>
                        <TextItem pos={pos} title="AS${name}" name="label" val={column.label}/>
                        {/*<TextInput pos={pos} title="显示标题" name="display" val={column.display} onModify={props.onModify}/>*/}
                        <TextItem pos={pos} title="所属库" name="catalog" val={column.catalog}/>
                        <TextItem pos={pos} title="所属表" name="table" val={column.table}/>
                        <TextItem pos={pos} title="Java类型" name="type" val={column.type}/>
                        <NumberInput pos={pos} max={columns.length - 1} title="顺序" name="sort" val={pos} onModify={props.onModify}/>
                    </div>
                )
                :
                (<Empty/>)
        )
    }
}

export default ColumnSet


/**
 *
 * @param props.pos {Number} 位置
 * @param props.title {String} 标题
 * @param props.name {String} 字段
 * @param props.val {String|Number} 要显示的数值
 * @return {*}
 * @constructor
 */
const TextItem = props => (<span className={css['text-item']}>
    <span className={css['text-item-title']}>{props.title}</span>:
    <span className={css['text-item-val']}>{props.val}</span>
</span>);


/**
 * @param props.pos {Number} 位置
 * @param props.max {Number} 最大位置
 * @param props.title {String} 标题
 * @param props.name {String} 字段
 * @param props.val {String|Number} 要显示的数值
 * @param props.onModify {Function} (pos:位置, key:数据名, val:修改值)={}
 * @return {*}
 */
class NumberInput extends React.Component {

    handleChange = value => {
        const {props} = this;
        props.onModify(props.pos, props.name, value);
    };

    render() {
        const {props} = this;
        return(
            <span className={css['text-item']}>
                <span className={css['text-item-title']}>{props.title}</span>:
                <InputNumber onChange={this.handleChange} min={0} max={props.max} size="small" className={css.input}
                             value={props.val}/>
            </span>
        )
    }
}