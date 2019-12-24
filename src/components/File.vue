<template>
<!--    显示该文件夹中的README.md 文件 或者点击某确定文件时的内容显示 -->
    <el-card shadow="always">
        <div slot="header" class="clearfix">
            <span>{{fileName}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <mavon-editor :value="fileContent" :editable="false" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"/>
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
           
        }

    },
    props: ['fileName', 'fileContent']
}

</script>

<style>

</style>
