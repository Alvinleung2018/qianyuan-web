import {getServerUrl} from '../runtime/ctx'
import {get, post} from '../lib/mesh/util/net';

export const getSqlColumn = (sql) => {
    return get(`${getServerUrl()}/data/mesh/builder/init-column`, {sql: encodeURI(sql)});
};

export const submitCollect = (collect) => {
    return post(`${getServerUrl()}/data/mesh/builder/submit-collect`, {collect});
};

export const getCollectById = (collectId) => {
    return get(`${getServerUrl()}/data/mesh/builder/get-collect`, {collectId});
};