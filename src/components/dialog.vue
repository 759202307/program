<template>
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
                >确 定</el-button
            >
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style >
/* html,body{
    width: 100%;
    height: 100%;
    position: relative;
}
el-dialog,el-table__body-wrapper {
    width: 800px;
    height: 800px;
    background: #000;
    position: absolute;
    margin-left: -400px;
    margin-top: -200px;
    left: 50%;
    top: 50%;
} */
</style>