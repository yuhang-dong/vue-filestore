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
            self: Random.boolean(), // 自己的文件
            public: Random.boolean(), // 非公开
            anoymous: Random.boolean(),
            id: 1234
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

/** 模拟文件信息 */
Mock.mock(RegExp('/info.*'), "get", function(opt) {
    // console.log(opt); 无法通过opt拿到get的params
    return {
        status: true,
        info: {
            username: Random.cname(),
            uploadtime: Random.datetime(),
            filesize: Random.integer(),
            md5: Random.id()
        }
    }
})