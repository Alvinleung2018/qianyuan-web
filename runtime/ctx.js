import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig(),
    config = JSON.parse(publicRuntimeConfig.uepayConfig);

export const getServerUrl = () => {
    return config['server.host'];
};