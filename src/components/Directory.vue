<template>

    <el-card shadow="always" >
        <el-table
                :data="files"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="Name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Size"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="ModTime">
            </el-table-column>
            <el-table-column
                    label="Actions"
            >
<!--                显示不同的按钮，都可以显示信息，文件夹可以下载压缩包，文件可以复制URL，显示分享二维码-->
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        name: 'directory',
        // 声明props
        props: ['files'],
        data() {

        }
    }

</script>

<style>


</style>
