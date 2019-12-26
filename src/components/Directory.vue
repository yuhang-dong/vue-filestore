<template>
  <el-card shadow="always">
    <!-- 文件配置界面 -->

    <el-dialog title="文件配置" :visible.sync="config.dialogVisible" width="30%" class="min_dialog">
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
        <el-button @click="config.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateConfig">确 定</el-button>
      </span>
    </el-dialog>

    <!-- TODO 文件信息显示 -->
    <el-dialog title="文件配置" :visible.sync="info.visible" width="30%" class="min_dialog">
      <el-form label-width="80px">
        <el-form-item label="上传人">
          <el-input v-model="info.info.username" :readonly="true"></el-input>
        </el-form-item>

        <el-form-item label="上传时间">
          <el-date-picker v-model="info.info.uploadtime" :readonly="true" type="datetime"></el-date-picker>
        </el-form-item>

        <el-form-item label="文件大小">
            <el-input v-model="info.info.filesize" :readonly="true">
                <template slot="append">KB</template>
            </el-input>
        </el-form-item>
        <el-form-item label="文件md5">
            <el-input v-model="info.info.md5" :readonly="true"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="info.visible = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>

    <el-table :data="myfiles" style="width: 100%">
      <el-table-column prop="name" label="Name">
        <!-- TODO 姓名列可以被点击  点击到文件 尽可能显示文件内容， 点击到目录， 继续执行目录信息 -->
      </el-table-column>
      <el-table-column prop="size" label="Size"></el-table-column>
      <el-table-column prop="date" label="ModTime"></el-table-column>
      <el-table-column label="Actions">
        <template slot-scope="scope">
          <!--                显示不同的按钮，都可以显示信息，文件夹可以下载压缩包，文件可以复制URL，显示分享二维码-->
          <i class="el-icon-download point" @click="download(scope.row)"></i>
          <!--  只有属于自己的才可以delete or config -->
          <i class="el-icon-delete point" @click="delete(scope.row)" v-if="scope.row.self"></i>
          <i class="el-icon-setting point" @click="mconfig(scope.row)" v-if="scope.row.self"></i>
          <!--  显示文件信息 -->
          <i class="el-icon-info point" @click="showInfo(scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "directory",
  // 声明props
  props: ["myfiles"],
  data() {
    return {
      config: {
        dialogVisible: false,
        row: {}
      },
      info: {
        visible: false,
        info: {}
      }
    };
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
      console.log(row);
      this.config.row = row;
      this.config.dialogVisible = true;
    },
    refresh() {
      // 告知父组件（Home） 重新加载数据
      this.$emit("refresh");
    },
    updateConfig() {
      // TODO 向后端发送配置信息

      this.config.dialogVisible = false; // dialog关闭
    },
    showInfo(row) {
      // 显示文件的信息
      let that = this;

      // 获取文件信息
      this.$ajax
        .get(`/info?fileid=${row.id}`)
        .then(function(resp) {
          let data = resp.data;
          if (data.status) {
            //获取成功则显示信息
            that.info.info = data.info;
            that.info.visible = true;
          } else {
            // 获取失败 则跳出提示
            that.$message.warning(data.reason);
          }
        })
        .catch(function(error) {
          // 获取失败 则跳出提示
          that.$message.warning(error);
        });
    }
  }
};
</script>

<style scoped>
.point {
  margin-left: 3px;
  cursor: pointer;
  font-size: 18px;
}

.point:hover {
  color: #f24646;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100% !important;
}

.min_dialog {
    min-width: 400px;
}
</style>
