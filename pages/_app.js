import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/frame/layout'
import './style.css';
import 'antd/dist/antd.css';
import '../lib/mesh/style.css';

export default class Uepay extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return <React.Fragment>
            <Head>
                <meta content="text/html;charset=UTF-8"/>
                <meta name="applicable-device" content="pc,mobile"/>
                <meta content="width=device-width,initial-scale=1,user-scalable=no"
                      name="viewport"/>
                <title>数据集设计平台</title>
                <style>
                    {"#__next {height:100%; width: 100%;background-color: #fff;};"}
                </style>
            </Head>
            <Layout pageProps={pageProps} Component={Component}/>

        </React.Fragment>
    }
}