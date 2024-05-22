<template>
<div class="center-preview" :style='{"padding":"20px 12% 40px","margin":"0 auto","color":"#999","flexWrap":"wrap","background":"#edeff1","display":"block","width":"100%","fontSize":"14px","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#333","textAlign":"center","background":"none","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"80px 60px 80px 200px","margin":"20px 0 0 0","borderColor":"#28890b20","alignItems":"center","display":"flex","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto","order":"2"}'>
		<div :style='{"padding":"8px 30px","borderColor":"#eee","margin":"0 20px 0 0","color":"#333","letterSpacing":"0px","borderRadius":"0px","top":"20px","left":"170px","borderWidth":"0px","background":"none","width":"auto","lineHeight":"1.5","fontSize":"18px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"auto"}'>个人信息</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='ganbu'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='zuzhi'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>学号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xuehao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>学生姓名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xueshengxingming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>性别</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>学生电话</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xueshengdianhua}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>年龄</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.nianling}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>所属组织</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.suoshuzuzhi}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","margin":"20px 0 0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="学号" prop="xuehao">
            <el-input v-model="sessionForm.xuehao" placeholder="学号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="学生姓名" prop="xueshengxingming">
            <el-input v-model="sessionForm.xueshengxingming" placeholder="学生姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="个人照片" prop="touxiang">
			<file-upload
			tip="点击上传个人照片"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="xueshengtouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="学生电话" prop="xueshengdianhua">
            <el-input v-model="sessionForm.xueshengdianhua" placeholder="学生电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="年龄" prop="nianling">
            <el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="所属组织" prop="suoshuzuzhi">
            <el-select v-model="sessionForm.suoshuzuzhi" placeholder="请选择所属组织" >
              <el-option v-for="(item, index) in dynamicProp.suoshuzuzhi" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="民族" prop="minzu">
            <el-input v-model="sessionForm.minzu" placeholder="民族" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="专业班级" prop="zhuanyebanji">
            <el-input v-model="sessionForm.zhuanyebanji" placeholder="专业班级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="年级" prop="nianji">
            <el-input v-model="sessionForm.nianji" placeholder="年级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="政治面貌" prop="zhengzhimianmao">
            <el-input v-model="sessionForm.zhengzhimianmao" placeholder="政治面貌" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="电子邮箱" prop="dianziyouxiang">
            <el-input v-model="sessionForm.dianziyouxiang" placeholder="电子邮箱" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="QQ" prop="qq">
            <el-input v-model="sessionForm.qq" placeholder="QQ" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="微信" prop="weixin">
            <el-input v-model="sessionForm.weixin" placeholder="微信" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="班级任职情况" prop="banjirenzhiqingkuang">
            <el-input v-model="sessionForm.banjirenzhiqingkuang" placeholder="班级任职情况" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="组织任职情况" prop="zuzhirenzhiqingkuang">
            <el-input v-model="sessionForm.zuzhirenzhiqingkuang" placeholder="组织任职情况" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="寝室号" prop="qinshihao">
            <el-input v-model="sessionForm.qinshihao" placeholder="寝室号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="班主任" prop="banzhuren">
            <el-input v-model="sessionForm.banzhuren" placeholder="班主任" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="学生职务评定" prop="xueshengzhiwupingding">
            <el-select v-model="sessionForm.xueshengzhiwupingding" placeholder="请选择学生职务评定" >
              <el-option v-for="(item, index) in dynamicProp.xueshengzhiwupingding" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="联系地址" prop="lianxidizhi">
            <el-input v-model="sessionForm.lianxidizhi" placeholder="联系地址" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="备注" prop="beizhu">
            <el-input v-model="sessionForm.beizhu" placeholder="备注" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="密保问题" prop="pquestion">
            <el-input v-model="sessionForm.pquestion" placeholder="密保问题" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="密保答案" prop="panswer">
            <el-input v-model="sessionForm.panswer" placeholder="密保答案" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"1px solid #3795c4","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#3795c4","borderRadius":"30px","background":"#fff","width":"110px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的发布"></el-tab-pane>
      <el-tab-pane label="考试记录"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xuehao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xueshengxingming', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xueshengdianhua', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'nianling', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'suoshuzuzhi', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'minzu', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuanyebanji', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'nianji', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'zhengzhimianmao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'dianziyouxiang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'qq', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'weixin', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'banjirenzhiqingkuang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'zuzhirenzhiqingkuang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'qinshihao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'banzhuren', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xueshengzhiwupingding', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxidizhi', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'beizhu', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'pquestion', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'panswer', null);
		}

		if ('xuesheng' == this.userTableName&&this.rules['xuehao']){
			this.rules['xuehao'].push({ required: true, message: '请输入学号', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['xuehao']) {
			this.$set(this.rules, 'xuehao', [{ required: true, message: '请输入学号', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['xueshengxingming']){
			this.rules['xueshengxingming'].push({ required: true, message: '请输入学生姓名', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['xueshengxingming']) {
			this.$set(this.rules, 'xueshengxingming', [{ required: true, message: '请输入学生姓名', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'xueshengdianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'nianling', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['suoshuzuzhi']){
			this.rules['suoshuzuzhi'].push({ required: true, message: '请输入所属组织', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['suoshuzuzhi']) {
			this.$set(this.rules, 'suoshuzuzhi', [{ required: true, message: '请输入所属组织', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'dianziyouxiang', [{ required: false, validator: this.$validate.isEmail, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('xuesheng' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('xuesheng' == this.userTableName) {
          this.$http.get('option/zuzhixinxi/zuzhimingcheng', {emulateJSON: true}).then(res => {
            if (res.data.code == 0) {
              this.dynamicProp.suoshuzuzhi = res.data.data;
			  this.$forceUpdate()
            }
          });
        }
        if ('xuesheng' == this.userTableName) {
          this.dynamicProp.xueshengzhiwupingding = '甲,乙,丙'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`xuesheng` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      xueshengtouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的发布':
            tab.$router.push('/index/myForumList');
            break;
          case '考试记录':
            tab.$router.push('/index/examList');
            break;
          case '错题本':
            tab.$router.push('/index/examRecord/0');
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.userTableName == 'xuesheng') {
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.passwordForm.newpassword == this.passwordForm.password) {
						this.$message.error("新密码与原密码相同！");
						return;
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '试题库管理':
				return false
				break;
			case '试题管理':
				return false
				break;
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0 60px;
	margin: 20px 0 30px;
	background: #fff;
	width: 100%;
	border-color: #28890b20;
	border-width: 0 0 0px;
	position: relative;
	border-style: solid;
	text-align: center;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 10px;
  	color: #666;
  	font-weight: 500;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: none;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #fff;
  	background: #3795c4;
  	font-weight: 600;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	margin: 0 10px 0 0;
  	color: #fff;
  	font-weight: 600;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: #3795c4;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 0px;
  	margin: 0px 0 0;
  	background: none;
  	width: calc(100% - 20px);
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 100px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 100px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	padding: 0 10px 0 30px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	cursor: pointer;
  	color: #666;
  	font-weight: 600;
  	font-size: 24px;
  	border-color: #eee;
  	line-height: 80px;
  	border-radius: 4px;
  	background: #fff;
  	width: 120px;
  	border-width: 0px;
  	border-style: solid;
  	text-align: center;
  	height: 80px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border-radius: 4px;
  	padding: 0 12px;
  	color: #666;
  	background: #fff;
  	display: inline-block;
  	width: auto;
  	font-size: 14px;
  	border-color: #eee;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
</style>
