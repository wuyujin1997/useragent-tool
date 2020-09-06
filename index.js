"user strict";

var userAgentList = require("./data/userAgentList");

/**
 * 获取指定区间内的整数
 * @param {Number} start 数值下限(包含)
 * @param {Number} end 数值上限(不包含)
 * @return {Number} 区间[start, end)内的随机整数
 */
function getIntegerBetween(start, end) {
    var result = start + Math.random() * (end - start);
    return Math.floor(result);  // 向下取证
}

/**
 * 从 userAgentList 中随机获取一个元素
 * @return {String} 随机取出的一个 user-agent 字符串
 */
function getRandomUserAgent() {
    var index = getIntegerBetween(0, userAgentList.length);
    return userAgentList[index];
}

module.exports = {
    userAgentList,
    getRandomUserAgent,
};