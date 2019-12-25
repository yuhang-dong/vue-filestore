const Mock = require('mockjs');
const Random = Mock.Random;
/** 模拟登陆 */
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

/** 模拟获得主页信息 */
Mock.mock('/files', /post/i, function(opt) {
    let directoryLen = Random.integer(3,10);
    let directory  = [];
    for(i = 0; i< directoryLen; i++) {
        directory.push({
            name: Random.cname(),
            date: Random.date(),
            size: Random.float(0, 15682),
            self: true, // 自己的文件
            public: true, // 非公开
            anoymous: true,

        })
    }
    
    let fileName = "README.md";
    let fileContent = Random.paragraph();
    return {
        status: true,
        directory : directory,
        fileContent : fileContent,
        fileName : fileName
    }

})