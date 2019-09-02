const md5 = require("md5")

module.exports.createToken = uid => {
    const token = JSON.stringify({
        tim: new Date().getTime(),
        uid
    })
    return md5(token)
}