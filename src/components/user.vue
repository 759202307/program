<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="城市" width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.city }}</span>
            </template>
        </el-table-column>
        <el-table-column label="年龄" width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.age }}</span>
            </template>
        </el-table-column>
        <el-table-column label="生日" width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.birthday }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >更新</el-button
                >
                <Dialog v-show="flag"></Dialog>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import axios from "axios";
import Dialog from "./dialog";

export default {
    name: "Dialog",
    data() {
        return {
            tableData: [],
            flag: false
        };
    },
    methods: {
        handleEdit(index, row) {
            const { id, birthday, age, name } = row;
            this.flag = !this.flag;
            axios.post("/api/update", { id, birthday, age, name }).then(res => {
                console.log(res);
            });
            //console.log(id, "删除");
            console.log(id, "id");
        },
        handleDelete(index, row) {
            const { id } = row;
            //console.log(id, "删除");
            this.remove(id);
        },
        //删除用户
        remove(id) {
            axios.post("/api/remove", { id }).then(({ data }) => {
                this.tableData = data;
            });
        }
    },
    //初始化渲染用户
    created() {
        axios.get("/api").then(({ data }) => {
            this.tableData = data;
        });
    },
    mounted() {
        axios.get("/api").then(({ data }) => {
            this.tableData = data;
        });
    }
};
</script>