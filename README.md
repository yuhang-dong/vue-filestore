# vue-filestore
开发一个网盘项目(file store application)，该仓库为前端显示页面，所有数据由mockjs虚拟生成。



## Want

- [x] 登录界面
- [x] 主页面
- [x] 文件显示
- [x] 文件上传、下载、是否公开、公开是否匿名
- [x] 显示文件信息（上传人、上传时间、文件大小、[文件夹中文件数量]等
- [ ] 登录的用户信息设置

## show - timeline

* 2019.11.14 主界面大致配色与设计
    ![主界面大致配色与设计](https://raw.githubusercontent.com/Ollyder/vue-filestore/master/assets/pic-20191114.png)

* 2019.12.24 登录界面完成
    ![登录界面完成](https://raw.githubusercontent.com/Ollyder/vue-filestore/master/assets/login.png)

* 2019.12.24 主页面数据交互设计完成
    ![](https://raw.githubusercontent.com/Ollyder/vue-filestore/master/assets/index.png)
* 2019.12.25 文件是否公开，公开是否匿名完成
    ![](https://raw.githubusercontent.com/Ollyder/vue-filestore/master/assets/icons.png)

* 2019.12.26 显示文件（文件夹）信息
    ![](https://raw.githubusercontent.com/Ollyder/vue-filestore/master/assets/info.png)

************以下为后端设计，写前端时的一些想法，暂写在此，最后整理***************

## TODO 文件所有权与文件处理权的一些想法[此部分在后端实现]

* 刚开始，文件属于文件上传者
* 上传者可以设置**自己文件**的私有 or 公有
* 用户可以*看到* **自己的文件**和其他人公开的文件
* **看到**意为可以进行下载与查看具体信息
* **自己的文件**在**看到**的基础功能之上，还可以进行文件的公开方式设置已经进行文件的链接式分享
* 用户对于能够**看到**但不是**自己的文件**可以进行“add”操作，使其变为自己的文件。区别在于：如果只是**看到**的文件，没加入到自己的文件列表中，当某个文件被其**所有者**取消共享的时候，其他用户就看不到该文件

## 对文件来说的用户类型

1. 上传者： 只在文件上传时有意义，最根本的上传人（传重复文件被秒传处理怎么办？）

2. 所有者： 将文件保存在自己文件列表的角色，拥有字面意思上【删、查、下、分享等】的完全控制权

3. 看到者： 只能看到，未加入自己文件列表，有【查、下】控制权