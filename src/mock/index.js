const Mock = require('mockjs');

Mock.mock('/login', /post/i, function(opt) {
    let data = JSON.parse(opt.body)
    if(data.username == "admin" && data.password == "123") {
        // 模拟登录成功
        return {
            status: true
        }
    }

    // 模拟登录失败
    return {
        status: false,
        reason: '密码错误'
    }
    
})
