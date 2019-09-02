module.exports = app => {
    const { router, controller } = app
    //所有用户列表
    router.get("/", controller.home.index)
    //登录
    router.post("/login", controller.home.login)
    //删除
    router.post("/remove", controller.home.remove)
    //更新
    router.post("/update", controller.home.update)
}