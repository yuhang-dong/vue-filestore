<template>

    <el-card shadow="always" >
        <el-table
                :data="tableData"
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
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }

</script>

<style>


</style>
