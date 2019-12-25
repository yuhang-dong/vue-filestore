<template>


    <el-card shadow="always" >

        
    <!-- 配置界面 -->
    
        <el-dialog
        title="文件配置"
        :visible.sync="dialogVisible"
        width="30%">

<el-form>
            <el-form-item label="是否公开：">
                <el-radio v-model="config.row.public" :label="true">公开</el-radio>
                <el-radio v-model="config.row.public" :label="false">不公开</el-radio>
            </el-form-item>

            <el-form-item label="公开方式：">
                <el-radio v-model="config.row.anoymous" :label="true">匿名公开</el-radio>
            <el-radio v-model="config.row.anoymous" :label="false">实名公开</el-radio>
            </el-form-item>
</el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateConfig">确 定</el-button>
        </span>
        </el-dialog>
        <el-table
                :data="myfiles"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="Name"
                    >
                    <!-- TODO 姓名列可以被点击  点击到文件 尽可能显示文件内容， 点击到目录， 继续执行目录信息 -->
            </el-table-column>
            <el-table-column
                    prop="size"
                    label="Size"
                    >
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="ModTime">
            </el-table-column>
            <el-table-column
                    label="Actions"
            >
            <template slot-scope="scope">
<!--                显示不同的按钮，都可以显示信息，文件夹可以下载压缩包，文件可以复制URL，显示分享二维码-->
                <i class="el-icon-download point" @click="download(scope.row)"></i>
                <!--  只有属于自己的才可以delete or config -->
                <i class="el-icon-delete point" @click="delete(scope.row)" v-if="scope.row.self"></i>
                <i class="el-icon-setting point" @click="mconfig(scope.row)" v-if="scope.row.self"></i>
                <!-- TODO 显示文件信息 -->
                <i class="el-icon-info point"></i>

            </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        name: 'directory',
        // 声明props
        props: ['myfiles'],
        data() {
            return {
                dialogVisible: false,
                config: {
                    row: {},
                    
                }
                
            }
        },
        methods: {
            download(row) {
                // TODO 下载文件
            },
            delete(row) {
                // TODO 删除文件 然后 refresh
                refresh();
            },
            mconfig(row) {
                // 显示dialog 配置文件公开性
                console.log(row)
                this.config.row = row;
                this.dialogVisible = true;
                
                
            },
            refresh() {
                // 告知父组件（Home） 重新加载数据
                this.$emit('refresh');
            },
            updateConfig() {
                // TODO 向后端发送配置信息

                this.dialogVisible = false; // dialog关闭
                
            }
        }
    }

</script>

<style>

    .point {
        margin-left: 3px;
        cursor: pointer;
        font-size: 18px;
    }

    .point:hover {
        color: #F24646;
    }

</style>
