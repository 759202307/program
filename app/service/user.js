const { Service } = require("egg")

class UserService extends Service {
    //获取所有用户列表
    async all() {
        const { app } = this
        const $sql = "select * from users"
        const list = await app.mysql.query($sql)
        return list
    }
    //登录接口
    async find(name, password) {
        const { app } = this
        const $sql = `select * from logins where name=? and password=? `
        const list = await app.mysql.query($sql, [name, password])
        return list
    }
    //登录态
    async saveToken(token, id) {
        const { app } = this
        const $sql = `update logins set token=? where id=?`
        const list = await app.mysql.query($sql, [token, id])
        return list
    }
    //删除
    async remove(id) {
        const { app } = this
        const $sql = `delete from users  where id=?`
        const list = await app.mysql.query($sql, id)
        return list
    }
    //更新用户信息
    async update(name, age, city, birthday, id) {
        const { app } = this
        const $sql = `update users set name=?,age=?,city=?,birthday=? where id=?`
        const list = await app.mysql.query($sql, [name, age, city, birthday, id])
        return list
    }
}
module.exports = UserService