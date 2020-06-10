import {Layout, Menu} from 'antd';
const {Header, Content, Footer} = Layout;
import React from "react";

/**
 *
 * @param props.Component
 * @param props.pageProps
 * @return {*}
 * @constructor
 */
const Lay = props => {
    const {Component} = props;
    return (<Layout style={{height:'100%'}}>
        <Header style={{height:'46px', lineHeight: '46px', padding: '0'}}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">數據集列表</Menu.Item>
                <Menu.Item key="2">數據集設計</Menu.Item>
                <Menu.Item key="3">基礎數據配置</Menu.Item>
            </Menu>
        </Header>
        <Content>
            <Component {...props.pageProps}/>
        </Content>
        <Footer style={{textAlign: 'center'}}>UePay Data Collection ©2018 Created by UePay Tech</Footer>
    </Layout>);
}

export default Lay