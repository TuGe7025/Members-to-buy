<template>
  <div class="contaiter">
    <div class="login">
      <header>注册 会员购</header>
      <div class="register-info">
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            label="账号"
            :right-icon="usernameIcon"
            placeholder="请输入手机号"
            :error-message="usernameState"
          />
          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            clearable
            :right-icon="passwordIcon"
            :error-message="passwordState"
          />
          <van-field
            v-model="sms"
            center
            required
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button class="sc" slot="button" @click="sendCode" size="small" type="primary">获取验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <van-button  type="default" :disabled='flag' class="lg" @click="login">登陆</van-button>
      <van-button type="default" class="register" :disabled = "flagg" :loading = "flagg"  @click="register">同意并注册</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Field, Cell, CellGroup, Button, Toast, Dialog } from 'vant'

Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '',
      password: '',
      flag: false,
      flagg: false,
      sms: '',
      code: '12345'
    }
  },
  methods: {
    login () {
      this.$router.replace('/login')
    },
    sendCode () {
      this.flag = true
      if (this.username !== '') {
        fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data === 1) {
              Toast('该手机号已经注册')
            } else if (data === 0) {
              Toast('获取验证码失败')
            } else {
              this.code = data.code // 模拟操纵
              this.flag = false
            }
          })
      } else {
        Toast('请输入手机号')
      }
    },
    register () {
      this.flagg = true
      if (this.sms !== this.code) {
        Toast('验证码错误')
        this.flagg = false
        return null
      }
      if (this.usernameIcon !== 'checked') {
        Toast('手机号格式错误')
        this.flagg = false
        return null
      }
      if (this.passwordIcon !== 'checked') {
        Toast('密码格式错误')
        this.flagg = false
        return null
      }
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        this.flagg = false
        if (data === 1) {
          Toast('注册成功')
          this.$router.push('/login')
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户已经注册，是否直接登录'
          }).then(() => {
            // on confirm
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
          })
        } else {
          Toast('注册失败')
        }
      })
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'checked'
      } else {
        return ''
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if (this.password.length >= 5) {
        return 'checked'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss">
.login {
  header {
    width: 100%;
    height: 0.44rem;
    background: #ffffff;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.15rem;
    margin-bottom: 0.13rem;
  }
  .register-info {
    margin-bottom: 0.15rem;
  }
  .register {
    width:45%;
    margin-left: 0.1rem;
    border: 1px solid #fb7299;
    color: #fff;
    background: #ff9db5;
  }
  .lg {
    width:45%;
    margin-left: 0.1rem;
    border: 1px solid #fb7299;
    color: #fb7299;
  }
  .sc {
    border: 0;
    color: #fb7299;
    background: #fff;
    font-size: 14px;
  }
}
</style>
