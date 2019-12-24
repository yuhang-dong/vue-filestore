const Mock = require('mockjs');

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
    let directory  = [
        {
            date: '2019-12-24',
            name: 'XYs',
            address: 'aaa'
        },
        {
            date: '2019-12-24',
            name: 'XYs',
            address: 'aaa'
        },
        {
            date: '2019-12-24',
            name: 'XYs',
            address: 'aaa'
        },
    ];
    let fileName = "README.md";
    let fileContent = `### title
* t1
* t2
        
> and so on
    `;
    return {
        status: true,
        directory : directory,
        fileContent : fileContent,
        fileName : fileName
    }

})