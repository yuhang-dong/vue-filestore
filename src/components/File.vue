<template>
<!--    显示该文件夹中的README.md 文件 或者点击某确定文件时的内容显示 -->
    <el-card shadow="always">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <mavon-editor :value="markdown" :editable="false" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"/>
    </el-card>
</template>

<script>
export default {
    name: 'file',
    components: {
        // VueMarkdown
    },
    data() {
        return {
            fileName: "fileName",
            fileSize: "125 KB",
            markdown: "\`\`\`javascript\n" +
                "exports default {\n" +
                "    methods: {\n" +
                "        // 绑定@imgAdd event\n" +
                "        $imgAdd(pos, $file){\n" +
                "            // 第一步.将图片上传到服务器.\n" +
                "           var formdata = new FormData();\n" +
                "           formdata.append('image', $file);\n" +
                "           axios({\n" +
                "               url: 'server url',\n" +
                "               method: 'post',\n" +
                "               data: formdata,\n" +
                "               headers: { 'Content-Type': 'multipart/form-data' },\n" +
                "           }).then((url) => {\n" +
                "               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)\n" +
                "               /**\n" +
                "               * $vm 指为mavonEditor实例，可以通过如下两种方式获取\n" +
                "               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`\n" +
                "               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`\n" +
                "               */\n" +
                "               $vm.$img2Url(pos, url);\n" +
                "           })\n" +
                "        }\n" +
                "    }\n" +
                "}" +
                "\`\`\`"
        }

    }
}

</script>

<style>

</style>
