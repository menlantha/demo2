<template>
<div class="ele-form">
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    class="ele-form"
    label-position='top'>

    <label>邮箱</label>
    <el-form-item  prop="username" class="ele-form-item">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>

    <label>密码</label>
    <el-form-item  prop="password" class="ele-form-item">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
        minlength="6"
        maxlength="20"
      />
    </el-form-item>

    <!-- <div>
      <label>验证码</label>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item  prop="code" class="ele-form-item">
              <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6" />
            </el-form-item>
          </el-col>
          <el-col :span="12"><el-button type='success' class="ele-form-button">获取验证码</el-button></el-col>
        </el-row>
    </div> -->

    <el-form-item>
      <el-button type="danger" @click="submitForm(ruleFormRef)" class="login-button ele-form-button">登录</el-button> 
    </el-form-item>
  </el-form>
</div>
</template>

<script lang="ts">
import { ref, reactive} from 'vue'
import type { FormInstance } from 'element-plus'
import {validateEmail} from '@/utils/validate.js'

export default {
setup(){
  const ruleFormRef = ref<FormInstance>()
  // 校验邮箱地址
  const validateusername = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入邮箱地址'))
    } else if (validateEmail(value)){
      callback(new Error('不支持的邮箱地址'));
    }else {
      callback()  //验证通过
    }  
  }
  // 验证密码强度
  const validatepassword = (rule: any, value: any, callback: any) => {
    let pass =/^(\w){6,20}$/;
    if (value === '') {
      callback(new Error('请输入密码！'))
    } else if (!pass.test(value)) {
      callback(new Error("只能输入6-20个字母、数字、下划线"))
    } else {
      callback()
    }
  }



  const ruleForm = reactive({
    username: '',
    password: '',
  })

  const rules = reactive({
    username: [{ validator: validateusername, trigger: 'blur' }],
    password: [{ validator: validatepassword, trigger: 'blur' }],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  return {submitForm,rules,ruleForm,validatepassword,validateusername,ruleFormRef}
},
  name:'elelogin'  
}
</script>

<style scoped>
.ele-form label{
  display: block;
  margin-bottom: 3px;
  font-size: 13px;
  color: white;
}
.ele-form{
  width: 50%;
  margin: auto;
}
.ele-form-item{
  margin-bottom: 15px;
}
.ele-form-button{
  display: block; /* 块元素 */
  width: 100%;
}
.login-button{
  margin-top:19px
}
</style>
