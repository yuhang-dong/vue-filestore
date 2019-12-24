<template>
    <!--    主页-->
    <el-container class="min-percent">

        <el-header class="header">
            <el-row style="height: 100%;display: flex;align-items: center;">
                <el-col :span="18" :offset="3">
                    <i class="head_title">Vue And Go File Website</i>
                </el-col>
            </el-row>
        </el-header>

        <el-main class="main">
            <el-row>
                <el-col :span="18" :offset="3">
                    <el-card>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
<!--                            TODO: 主页的改动不需要使用到vue router ,直接ajax然后数据替换即可-->
                            <el-breadcrumb-item v-for="(item,index) in paths" :to="item.completeUrl">{{item.path}}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-card>

                    <el-card>
                        <el-row>
                            <!--                    按钮组-->
                            <!--                        上传按钮-->
                            <el-col :span="1">
                                <UploadButton/>
                            </el-col>
                            <!--                        隐藏按钮-->
                            <el-col :span="1">
                                <el-button size="mini" type="danger" @click="hidden"><i class="far"
                                                                                        :class="eyeClass"></i>
                                </el-button>
                            </el-col>

                        </el-row>


                    </el-card>

                    <Directory style="margin-bottom: 50px"/>
                    <File/>
                </el-col>
            </el-row>

        </el-main>
        <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" border="0" id="catIframe"></iframe>
        <el-footer class="footer">
            <el-row style="height: 100%;display: flex;justify-content: center;align-items: center">

                    <i style="color: gray;font-size: smaller">Vue And Go File Website.And Others Information hahaha</i>

            </el-row>
        </el-footer>
    </el-container>

</template>

<script>
    // @ is an alias to /src
    import Directory from "../components/Directory";
    import File from "../components/File";
    import UploadButton from "../components/UploadButton";

    export default {
        name: 'home',
        components: {
            Directory,
            File,
            UploadButton
        },
        data() {
            return {
                hiddenFile: true, // 该文件下是否隐藏文件
                directory: {}, // 该文件夹下的文件（文件夹和文件）
                fileName: '', // 该文件夹下需要显示文件内容的文件名
                fileContent: '', // 显示的文件的文件内容
            }
        },
        computed: {
            paths() {
                let ans = [];
                let completeUrl = "";
                for (let i of this.$store.state.urls.split("/")) {
                    completeUrl += "/" + i;
                    ans.push({
                        path: i,
                        completeUrl
                    })
                }
                return ans;
            },
            eyeClass() {
                return {
                    "fa-mavon-eye": this.hiddenFile,
                    "fa-mavon-eye-slash": !this.hiddenFile
                }
            }
        },
        methods: {
            hidden() {
                // 图标变
                this.hiddenFile = !this.hiddenFile;
                // TODO 显示/隐藏文件
            }
        }
    }
</script>

<style scope>

    .min-percent {
        min-height: 100%;
    }

    .header {
        border-bottom: 1px solid rgba(0, 0, 0, .22);
    }

    .main {
        background-color: #e2e2e2;
        min-height: 100%;
    }

    .footer {
        border-top: 1px solid rgba(0, 0, 0, .22);
    }

    [class*=" fa-mavon-"]::before, [class^="fa-mavon-"]::before {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    #catIframe {
        position: fixed;

        width: 400px;

        padding: 50px 0;

        margin-right: 0px;

        right: 0;

        border: 0;

        bottom: 0;
    }

    .head_title {
        color: #F24646;
        font-size: larger;
        cursor: pointer;
    }

    .head_title:hover {
        color: red;
    }
</style>
