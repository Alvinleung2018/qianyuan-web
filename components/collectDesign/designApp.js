import React from 'react'
import PropTypes from "prop-types";
import {Steps, Icon, Modal, message, notification} from 'antd'

import css from './designApp.scss'
import ColumnDesign from './columnDesign'
import {getCollectById} from '../../lib/mesh/data/request'
import {getServerUrl} from '../../runtime/ctx'
import {get, put} from '../../lib/mesh/data/localStore'
// import {getServerUrl} from '../../runtime/ctx'


const {Step} = Steps;
const {confirm} = Modal;

const STEPS = [
    {key: 'init', title: '初始化'},
    {key: 'column', title: '字段设计'},
    {key: 'update', title: '更新设计'},
    {key: 'form', title: '表单设计'},
    {key: 'collect', title: '数据集设计'},
    {key: 'preView', title: '數據預覽'}
];

const InitStep = 1;

const storageToCollect = () => {
    return get('CollectionDesignTmp') || {};
};

const collectToStorage = (collect) => {
    const timestamp = new Date().getTime();
    put('CollectionDesignTmp', {collect, timestamp})
};

class DesignApp extends React.Component {

    state = {initConfirm: false, step: 0};

    // collect = {}; //數據集信息

    componentDidMount() {
        const {collectId} = this.props;
        collectId ? this.loadServer(collectId) : this.loadLocal();
    }

    loadServer(collectId) { //从服务器加载
        const _this = this;
        getCollectById({host: getServerUrl(), collectId}).then((res => {
            if (res && 0 < res.code) {
                console.log(res)
                if(res.data){
                    _this.collect = res.data;
                }else {
                    message.warn(`数据集${collectId}不存在`)
                }
                _this.setState({step: InitStep})
            } else {
                notification.error({message:res && res.msg || '网络故障!'})
                _this.setState({step: InitStep})
            }
        }));
    }

    loadLocal() { //本地缓存加载
        const {collect, timestamp} = storageToCollect();
        console.log(storageToCollect())
        if (timestamp) {
            this.showInitInfo(timestamp, collect);
        } else { //如果没有缓存数据，直接打开第一个页面
            this.setState({step: InitStep})
        }
    }

    handleNext = collect => {
        const {step} = this.state;
        this.processStep(collect);
        this.setState({step: step + 1})
    }

    processStep(collect) {
        this.collect = collect;
        collectToStorage(this.collect); // 保存緩存
    }

    render() {

        const {step} = this.state, {collect} = this;

        let comp = null;

        switch (step) {
            case 1:
                comp = (
                    <ColumnDesign collect={collect}
                                  onNext={this.handleNext}
                    />
                )
        }

        return (
            <div className={css['design-contain']}>
                <Steps>
                    {STEPS.map((item, index) => {
                        let status = 'process', icon = 'loading';
                        if (step > index) {
                            status = 'finish';
                            icon = 'check';
                        } else if (step < index) {
                            status = 'wait';
                            icon = 'edit';
                        }
                        return (<Step key={item.key} status={status} title={item.title} icon={<Icon type={icon}/>}/>);
                    })}
                </Steps>
                {comp}
            </div>
        )
    }
}

export default DesignApp