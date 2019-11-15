<template>
    <el-upload
            action="这里写地址"
            multiple
            :show-file-list="false" :on-success="success" :on-error="error" :on-progress="progress">

            <el-button  size="mini" type="danger" ><i class="el-icon-upload"></i></el-button>

    </el-upload>
</template>

<script>
    export default {
        name: 'UploadButton',
        data() {
            return {
                data: {
                    //上传时附带的额外参数
                },
                success:function(response, file, fileList) {
                    // 上传成功的钩子函数
                    // TODO:重新加载当前文件列表
                    // 提示成功
                },
                error:function(err, file, fileList) {
                    // 提示失败
                },
                progress:function(event, file, fileList) {
                    // 上传时的过程钩子
                    // 显示进度条 nprogress...
                }
            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
