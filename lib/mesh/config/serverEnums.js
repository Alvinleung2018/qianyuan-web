/**
 * 搜索匹配模式，對應數據庫的對等模式
 * @type {*[]}
 */
export const CondType = [{value: 'ER', label: '=', tip: '數據等於搜索值'},
    {value: 'NE', label: '<>', tip: '數據不等於搜索值'},
    {value: 'GT', label: '>', tip: '數據大於搜索值'},
    {value: 'GE', label: '>=', tip: '數據大於等於搜索值'},
    {value: 'LT', label: '<', tip: '數據小於等於搜索值'},
    {value: 'LE', label: '<=', tip: '數據小於等於搜索值'},
    {value: 'Like', label: '?', tip: '數據全文模糊搜索'}
];

export const DefaultCondValue = 'Like';

/**
 * 搜索关联模式
 * @type {*[]}
 */
export const RelationType = [{value: 'AND', label: '並且', tip: '查詢條件全部滿足'},
    {value: 'OR', label: '或者', tip: '查詢條件滿足之一'},
    {value: 'BETWEEN', label: '範圍', tip: '取值存在於兩個值之期間'}
];

/**
 * 對BETWEEN類型進行標記處理
 * @type {{relationType: string, condType: string}}
 */
export const BETWEENCondMapping = {condType: 'CUS', relationType: 'BETWEEN'};

export const OrderType = [{value: 'DESC', label: '降序', tip: '降序排列'},
    {value: 'ASC', label: '升序', tip: '升序排列'}];

/**
 * table組件返回數據和枚舉量的映射
 * @type {{descend: string, ascend: string}}
 */
export const TableOrderTypeMapping = {
    ascend: 'ASC',
    descend: 'DESC'
};

/**
 * 顯示類型
 * @type {*[]}
 */
export const ShowType = [
    {value: 'NONE', label: '缺省', tip: '不顯示不查詢不傳輸'},
    {value: 'HIDE', label: '隱藏', tip: '不在列表、表單中顯示，但是會傳輸'},
    {value: 'LIST', label: '列显示', tip: '僅在列表中顯示'},
    {value: 'FORM', label: '表显示', tip: '盡再表單中顯示'},
    {value: 'ALL', label: '全显示', tip: '會在列、表單中都顯示'}
];

/**
 * 表單編輯狀態
 * @type {*[]}
 */
export const EditType = [
    {value: 'NONE', label: '禁止', tip: '不允許進行修改和新增操作!'},
    {value: 'EDIT', label: '编辑', tip: '數據存在時，可以進行編輯!'}
];

export const EditTypeDict = {
    NONE:'NONE',
    EDIT:'EDIT'
};

/**
 * 表單操作能力
 * @type {{"1": number, "3": number, "7": number}}
 */
export const OptionsFlag = {
    QUERY: 1, //查詢
    EDIT: 3, //更新
    ADD: 7 //添加
};

/**
 * 菜单编辑权限
 * @type {{ADD: string, EDIT: string, VIEW: string}}
 */
export const OptionsState = {
    VIEW: 'VIEW',
    EDIT: 'EDIT',
    ADD: 'ADD'
};