<template>
<!--    主页-->
    <el-container class="min-percent">

        <el-header class="header">

        </el-header>

        <el-main class="main">
            <el-row>
                <el-col :span="10" :offset="7">
                    <el-card>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item v-for="(item,index) in paths">{{item.path}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-card>

                    <Directory style="margin-bottom: 50px"/>
                    <File />
                </el-col>
            </el-row>

        </el-main>

        <el-footer class="footer">

        </el-footer>
    </el-container>

</template>

<script>
// @ is an alias to /src
import Directory from "./Directory";
import File from "./File";
export default {
  name: 'home',
  components: {
      Directory,
      File
  },
    data() {
      return {
          paths: [
              {
                  path: "home"
              },
              {
                  path: "dir1"
              },
              {
                  path: "dir2"
              }
          ]
      }
    }
}
</script>

<style scope>

    .min-percent {
        min-height: 100%;
    }
    .header {
        border-bottom: 1px solid rgba(0,0,0,.22);
    }

    .main {
        background-color: #e2e2e2;
        min-height: 100%;
    }

    .footer {
        border-top: 1px solid rgba(0,0,0,.22);
    }
</style>
