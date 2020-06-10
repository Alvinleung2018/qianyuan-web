const Config = {
    Prefix: 'UePay',
    Json: '-JSON-',
    Def: '-None-'
}

let localData = {};

/**
 *
 * @param key
 * @param value {Object} value必須是一個對象
 */
export const put = (key, value) => {
    localData[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
    let data = localData[key];
    if (!data) {
        data = localStorage.getItem(key);
        if (data) {
            data = JSON.parse(localStorage.getItem(key));
        }
    }
    return data;
};

export const clean = () => {
    localData = {};
};