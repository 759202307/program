<template>
    <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
    >
        <el-form-item label="姓名" prop="name">
            <el-input
                type="name"
                v-model="ruleForm.name"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
                >登录</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("年龄不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    if (value < 18) {
                        callback(new Error("必须年满0岁"));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        return {
            ruleForm: {
                name: "",
                password: ""
            },
            rules: {}
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (
                        this.ruleForm &&
                        this.ruleForm.name !== "" &&
                        this.ruleForm.password !== ""
                    ) {
                        this.login(this.ruleForm);
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //用户登录  将name password 作为参数传入
        login(params) {
            axios.post("/api/login", params).then(res => {
                if (res.data.code === 1) {
                    alert(res.data.msg);
                    window.localStorage.setItem(
                        "token",
                        res.data.list[0].token
                    );
                    this.$router.push("/user");
                } else {
                    alert(res.data.msg);
                }
            });
        }
    }
};
</script>
<style >
</style>