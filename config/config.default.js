const config = {

}

config.keys = "213123213"
config.mysql = {
    client: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "123321",
        database: "db_ht"
    },
    app: true,
    agent: false
}
config.security={
    csrf:{
        enable:false
    }
}
module.exports = {
    ...config
}