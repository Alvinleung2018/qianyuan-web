import {get, post} from "../util/net";

/**
 *
 * @param host
 * @param collectId
 * @return {Promise<Response>}
 */
export const getCollectById = ({host, collectId}) => {
    const params = {collectId};
    return get(`${host}/data/mesh/execute/collect`, params);
};
/**
 *
 * @param classDes
 * @param search
 * @param sorter
 * @param page
 */
export const listQueryWithClassDes = ({host, collect, search = false, sorter = false, page = false}) => {
    const params = {collect};
    search && (params.search = search);
    sorter && (params.sorter = sorter);
    page && (params.page = page);
    return post(`${host}/data/mesh/execute/query-with-descriptor`, params);
};

/**
 * 獲取單條數據
 * @param host
 * @param collect
 * @param pkValue
 * @return {Promise<Response>}
 */
export const formWithClassDes = ({host, collect, pkValue}) => {
    return post(`${host}/data/mesh/execute/form-with-descriptor`, {collect, pkValue});
};

/**
 * 提交编辑的数据
 * @param host
 * @param collect
 * @param pkValue
 * @param data
 * @return {Promise<Response>}
 */
export const formSubmitWithClassDes = ({host, collect, pkValue, data}) => {
    return post(`${host}/data/mesh/execute/submit-with-descriptor`, {collect, data, pkValue});
};

/**
 * 提交新增的数据
 * @param host
 * @param collect
 * @param data
 * @return {Promise<Response>}
 */
export const formAddWithClassDes = ({host, collect, data}) => {
    return post(`${host}/data/mesh/execute/add-with-descriptor`, {collect, data});
};