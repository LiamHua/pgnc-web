> 每个请求的Header中都会携带token，content-type默认为application/json

> 附：`token` 
>
> ```json
> {
>   
> }
> ```



## 一、用户模块

### 1. 注册

```json
{
  url: 'auth/register',
  method: 'post',
  data: {
    registerForm: {
			nickname: '',  // 2-10位字符
    	username: '',  // 11位手机号
    	password: '',  // 经md5加密的32位密码
    	sms: ''        // 4位数验证码
    }
  }
}
```



### 2.登陆

+ 密码登陆

```json
{
  url: 'auth/loginWithPassword',
  method: 'post',
  data: {
    loginForm: {
			username: '',  // 11位手机号
    	password: ''   // 经md5加密的32位密码
    } 
  }
}
```

+ 短信验证码登陆

```json
{
  url: 'auth/loginWithSMS',
  method: 'post',
  data: {
    loginForm: {
			username: '',   // 11位手机号
    	sms: ''         // 4位验证码
    }
  }
}
```



### 3. 获取短信验证码

```json
{
  url: 'auth/getSMS',
  method: 'get',
  data: {
    username: ''   // 11位手机号
  }
}
```



### 4. 获取用户个人信息

```json
{
  url: 'auth/getUserInfo',
  method: 'get',
  data: {
    
  }
}
```



### 5. 保存个人信息

```json
{
  url: 'auth/saveUserInfo',
  method: 'get',
  data: {
    userInfo: {
			avatar: {},    // 用户头像
      nickname: '',  // 用户昵称
      name: '',      // 真实姓名
      school: '',    // 学校
      sex: '',       // 性别
      age: '',       // 年龄
      signature: ''  // 个性签名
    }
  }
}
```



## 二、功能模块

### 1. 获取主页分类菜单

```json
{
  url: 'api/getMenu',
  method: 'get',
  data: {
    
  }
}
```



### 2. 获取轮播图

```json
{
  url: 'api/getCarousel',
  method: 'get',
  data: {
    
  }
}
```

