const { Controller } = require("egg")
const { createToken } = require("../utils")

class HomeController extends Controller {
    //所有列表用户
    async index() {
        const { ctx } = this
        const list = await ctx.service.user.all()
        ctx.body = list
    }
    //用户登录 
    async login() {
        const { ctx } = this
        const { name, password } = ctx.request.body
        const list = await ctx.service.user.find(name, password)
        if (list.length) {
            //登录态
            const { id } = list[0]
            const token = createToken(id)
            const save = await ctx.service.user.saveToken(token, id)
            return ctx.body = {
                code: 1,
                msg: "登录成功",
                list
            }
        } else {
            return ctx.body = {
                code: 0,
                msg: "登录失败"
            }
        }
    }
    //删除用户
    async remove() {
        const { ctx } = this
        const { id } = ctx.request.body
        const list = await ctx.service.user.remove(id)
        ctx.body = list
    }
    //更新信息
    async update() {
        const { ctx } = this
        const { name, age, city, birthday, id } = ctx.request.body
        const list = await ctx.service.user.update(name, age, city, birthday, id)
        ctx.body = list
    }
}
module.exports = HomeController