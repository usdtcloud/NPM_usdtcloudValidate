/**
 * 手机号码
 * @param {*} s
 */
module.exports = (s) => {
    return /^[1][2-9][0-9]{9}$/.test(s)
}