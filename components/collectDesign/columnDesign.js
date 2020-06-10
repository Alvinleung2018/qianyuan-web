import React from 'react'
import PropTypes from "prop-types";
import {Button, message, notification, Popconfirm} from 'antd';

import css from './columnDesign.scss'
import SqlContain from './columnDesign/sqlContain'
import ColumnSet from './columnDesign/columnSet'
import ColumnList from './columnDesign/columnList'

class ColumnDesign extends React.Component {

    constructor(...props){
        super(...props)
        this.collect = {...this.props.collect}; // 數據集
        const columns = this.collect.fieldList || [];
        const pkName = this.collect.pkName; // 數據集主鍵
        let isSubmit, curPk = false;
        if(columns.length > 0) {
            isSubmit = true;
            for (let index = 0; index < columns.length; index++) {
                if (columns[index].name === pkName) {
                    curPk = index;
                    columns[index].isPk = true;
                }
            }
        }

        this.state = {
            onSqlSubmit: false, //标记是否正在执行SQL查询
            isSubmit: isSubmit, //标记是否已经完成SQL查询
            curSet: false, //当前设置字段，对应pos下标
            curPk: curPk, //当前主键，对应pos下标
            columns: columns, //字段列表
            preView: false //列表数据预览
        }
    }

    sqlDom = false; //SqlContain實例
    collect = {}

    /**
     * 初始化字段序列，将字段按排序字段排序
     * @param columns
     */

    static initColumns = columns => {
        const list = new Array(columns.length);
        for (let column of columns) {
            column.isPk = false;
            list[column.sort] = column;
        }
        return list;
    }

    handleSql = () => {

    }

    handleNext = () => {

    }

    handleColumnModify = () => {

    }

    handlePk = (pos, name) => {
        const {curPk, columns} = this.state;
    }

    /**
     * 设置字段属性
     * @param pos
     * @param name
     */
    handleSet = (pos, name) => {
        this.setState({curSet: pos})
    };

    submitCollect() {
        const {curPk, columns} = this.state;
        if(typeof curPk !== "number" || !columns[curPk].isPk) {
            message.error('请选择查询主键!');
        } else if (columns[curPk].show === 'NONE') {
            message.error('查询主键不能缺省!');
        } else {
            const {collect} = this;
            collect.pkName = columns[curPk].name;
            collect.fieldList = columns;
            return collect;
        }
    }

    render() {
        console.log(this.props)
        const {isSubmit, onSqlSubmit, columns, curSet, preView} = this.state;

        return (
            <div className={css.contain}>
                <div className={css.bar}>
                    {
                        isSubmit
                            ?
                            (
                                <Popconfirm title="使用新的SQL需要重新设计数据集，确定?"
                                            onConfirm={this.handleSql}
                                            placement="bottomLeft"
                                            okText="Yes"
                                            cancelText="No">
                                    <Button loading={onSqlSubmit} className={css.btn} type="primary">更新SQL</Button>
                                </Popconfirm>
                            )
                            :
                            (
                                <Button onClick={this.handleSql}
                                        loading={onSqlSubmit}
                                        className={css.btn}
                                        type="primary">
                                    提交SQL
                                </Button>
                            )
                    }
                    <Button type={isSubmit ? "primary" : "dashed"}
                            className={css.btn}
                            disabled={!isSubmit}
                            onClick={this.handleNext}
                    >
                        下一步
                    </Button>
                    <Button className={css.btn}>
                        數據集預覽
                    </Button>
                </div>
                <div className={css.options}>
                    <div className={css.left}>
                        <SqlContain sql={this.collect.sql}
                                    ref={ins => {this.sqlDom = ins}}
                        />
                    </div>
                    <div className={css.column}>
                        <ColumnSet onModify={this.handleColumnModify}
                                   pos={curSet}
                                   columns={columns}/>
                    </div>
                    <div className={css.right}>
                        <ColumnList list={columns}
                                    onRadioChange={this.handlePk}
                                    onSet={this.handleSet}

                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ColumnDesign