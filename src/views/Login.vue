<template>
        <el-card class="box-card">
            <div  class="clearfix">
                <el-tabs v-model="activeName" type="card" stretch>
                    <el-tab-pane label="登录" name="登录">
                        <el-form :model="loginForm" :rules="rules" status-icon label-width="100px" ref="loginForm" >
                            <el-form-item label="账号:" prop="username">
                                <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:" prop="password">
                                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="getlogin()">登录</el-button>
                                <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                        </el-form>

                    </el-tab-pane>
                    <el-tab-pane label="注册" name="注册">
                        <el-form :model="registerForm" :rules="rules" status-icon label-width="100px" ref="registerForm" >
                            <el-form-item label="账号:" prop="username">
                                <el-input type="text" v-model="registerForm.username" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="mail" class="check">
                                <el-input class="checkbox" type="text" v-model="registerForm.mail" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:" prop="password">
                                <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码:" prop="password">
                                <el-input type="password" v-model="registerForm.password1" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button  v-model="registerForm.mail" @click="getnum()">获取验证码</el-button>
                                <el-button  @click="regist()">注册</el-button>
                                <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
</template>

<script>
    import {mapState,mapGetters} from "vuex"
    import {getregister} from "@/api";
     export default {
        name: "Login",

        data() {
            var validateusername = (rule, value, callback) => {
                if (value ==='') {
                    callback(new Error('账号不能为空！'));
                } else{
                    callback();
                }
            };
            var validatepassword = (rule, value, callback) => {
                if (value ==='') {
                    callback(new Error('密码不能为空！'));
                } else if(value.length<6){
                    callback(new Error('密码长度不能小于6！'));
                }else{
                    callback();
                }
            };
            var validatemail = (rule, value, callback) => {
                if (value ==='') {
                    callback(new Error('邮箱不能为空！'));
                } else if(value.length<6){
                    callback(new Error('长度不能小于6！'));
                }else{
                    callback();
                }
            };
            return {
                // tokenmsg:this.token,
                activeName: 'login',
                loginForm:{
                    username:"",
                    password:'',
                },
                registerForm:{
                    username:"",
                    password:'',
                    mail:'',
                    password1:''
                },
                rules:{
                    username:[
                        {validator:validateusername,trigger: 'blur'},
                    ],
                    password:[{
                        validator:validatepassword,trigger: 'blur'
                    }],
                    mail:[{
                        validator:validatemail,trigger: 'blur'
                    }],
                }
            };
        },
         mounted() {

         },
         computed:{
            ...mapState(
                {
                // statu:state =>state.register.statu,
                }),
            ...mapGetters(['token',"statu"])

        },
        methods: {
            resetForm(formName) {
                // console.log(this.loginForm.password);
                this.loginForm.password='';
                this.loginForm.username='';
            },
            submitForm(formName) {
                // console.log(formName)
                this.$refs[formName].validate((valid) => {
                    if (formName=='registerForm') {
                        console.log(this.registerForm)
                    } else if(formName=='loginForm'){
                        console.log(this.loginForm)
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //登录按钮登录
           async getlogin(){
                let params={
                    phone:this.loginForm.username,
                    password:this.loginForm.password
                }
                if(params.phone && params.password) {
                  await  this.$store.dispatch('tologin', params)
                    console.log("logintoken",this.token)

                    this.$router.push({
                        name:'home'
                    })
                }else{
                    console.log('登录失败')
                }
            },

            //获取验证码
           async getnum(){
                // console.log(this.registerForm.username)
                let phone=this.registerForm.username
                await this.$store.dispatch('getcode',phone)
                this.registerForm.mail=Math.ceil(Math.random() * 10)
                console.log("statu",this.statu)
                if(this.statu.code==200|| this.statu.message=="成功"){
                    this.registerForm.mail=this.statu.data
                }else{
                    console.log('获取验证错误')
                }
            },

            //注册按钮注册
            async regist(){
                    let params={
                            phone:this.registerForm.username,
                            password:this.registerForm.password,
                            code:this.registerForm.mail
                    }
                    if(this.registerForm.password===this.registerForm.password1){
                        this.$router.push({
                            name:"Layout",
                            params:params
                        })
                    let register= await getregister(params);
                    console.log(register)
                    this.$bus.$emit('register',register)
                    }else{
                        console.log('注册失败，密码和确定密码要一致');
                    }
            }
        }

    }
</script>

<style scoped>

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 500px;
        height: 380px;
        margin: 100px auto;
    }
</style>