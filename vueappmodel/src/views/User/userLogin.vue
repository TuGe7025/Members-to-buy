<template>
  <div class="contaiter">
    <div class="login">
      <header>登陆 会员购</header>
      <div class="login-info">
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
        </van-cell-group>
        <div class="forget-group">
          <p >忘记密码</p>
        </div>
      </div>
      <van-button  type="default" class="register" @click="register">注册</van-button>
      <van-button type="default" class="lg" :disabled = "flag" :loading = "flag" loading-text="登陆中..."  @click="login">登陆</van-button>
      <div class="sns">
        <div class="sns-box">
          <span class="sns-box-left"></span>
          <span class='sns-box-info'>其他登陆方式</span>
          <span class="sns-box-right"></span>
        </div>
        <div class="sns-btn">
          <div class="sns-btn-left" >
              <span class="iconfont iconQQ"></span>
              <p>QQ</p>
          </div>
          <div class="sns-btn-right">
            <span class="iconfont iconweibo"></span>
            <p>微博</p>
          </div>
        </div>
      </div>
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
      flag: false
    }
  },
  methods: {
    register () {
      this.$router.replace('/register')
    },
    login () {
      if (this.usernameIcon !== 'checked') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'checked') {
        Toast('密码格式错误')
        return null
      }
      this.flag = true
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        this.flag = false
        console.log(data)
        if (data === 1) {
          Toast('登陆成功')
          this.$store.commit('changeLoginState', 'ok')
          this.$router.back()
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户还未注册，是否注册'
          }).then(() => {
            // on confirm
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录失败')
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
<style lang="scss" scoped>
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
  .forget-group {
    height: 0.5rem;
    padding-top: 0.08rem;
    padding-right: 0.1rem;
    p {
      text-align: right;
      color: #fb7299;
      font-size: 12px;
    }
  }
  .van-button {
    width:45%;
    margin-left: 0.1rem;
    &.register {
      border: 1px solid #fb7299;
      color: #fb7299;
    }
    &.lg {
      background: #ff9db5;
      border: 1px solid #fb7299;
      color: #fff;
    }
  }
  .sns {
    padding-top: 1.5rem;
    .sns-box {
      height: 0.25rem;
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .sns-box-left, .sns-box-right {
        margin-top: .266667rem;
        width: 0.8rem;
        display: inline-block;
        height: 0.01rem;
        background: #e7e7e7;
      }
      .sns-box-info {
         color: #757575;
      }
    }
    .sns-btn {
      width: 100%;
      height: 0.44rem;
      margin-top: 0.3rem;
      display: flex;
      justify-content: center;
      .sns-btn-left, .sns-btn-right {
        text-align: center;
        margin-right: 0.15rem;
      }
    }
  }
}
</style>
