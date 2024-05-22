<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240305/c46698d0e9e14ad1b5729fb8a33a6d90.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
        <el-form class='rgs-form' v-if="pageFlag=='security1'" :style='{"minHeight":"800px","padding":"20px 2vw 0 5vw","margin":"40px auto 40px","borderRadius":"0px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 20px","color":"#2a8ec0","textAlign":"center","width":"90%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","fontWeight":"600"}'>找回密码</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' prop="username">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}'>账号：</div>
				<el-input v-model="forgetForm.username" placeholder="请您输入账号" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","color":"#fff","display":"block","outline":"none","borderRadius":"4px","background":"#3795c4","width":"400px","fontSize":"16px","height":"50px","order":"30"}' type="primary" @click="getSecurity()">下一步</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"12px auto 20px","color":"#3795c4","textAlign":"center","display":"block","width":"400px","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"50"}' to="/login">已有账户登录</router-link>
        </el-form>
		<el-form class='rgs-form' v-if="pageFlag=='security2'" :style='{"minHeight":"800px","padding":"20px 2vw 0 5vw","margin":"40px auto 40px","borderRadius":"0px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 20px","color":"#2a8ec0","textAlign":"center","width":"90%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","fontWeight":"600"}'>找回密码</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' prop="pquestion">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}'>密保问题：</div>
				<el-input readonly v-model="registerForm.pquestion" placeholder="密保问题" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' prop="myanswer">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}'>密保答案：</div>
				<el-input v-model="registerForm.myanswer" placeholder="请您输入密保答案" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","color":"#fff","display":"block","outline":"none","borderRadius":"4px","background":"#3795c4","width":"400px","fontSize":"16px","height":"50px","order":"30"}' type="primary" @click="validateSecurity()">下一步</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"12px auto 20px","color":"#3795c4","textAlign":"center","display":"block","width":"400px","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"50"}' to="/login">已有账户登录</router-link>
		</el-form>
        <el-form class='rgs-form' v-if="pageFlag=='security3'" :style='{"minHeight":"800px","padding":"20px 2vw 0 5vw","margin":"40px auto 40px","borderRadius":"0px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 20px","color":"#2a8ec0","textAlign":"center","width":"90%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","fontWeight":"600"}'>找回密码</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' prop="newpassword">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}'>新密码：</div>
				<el-input v-model="registerForm.newpassword" type="password" placeholder="请您输入新密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' prop="repassword">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}'>确认密码：</div>
				<el-input v-model="registerForm.repassword" type="password" placeholder="请您确认密码" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","color":"#fff","display":"block","outline":"none","borderRadius":"4px","background":"#3795c4","width":"400px","fontSize":"16px","height":"50px","order":"30"}' type="primary" @click="updatePassword()">修改密码</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"12px auto 20px","color":"#3795c4","textAlign":"center","display":"block","width":"400px","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"50"}' to="/login">已有账户登录</router-link>
        </el-form>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"minHeight":"800px","padding":"20px 2vw 0 5vw","margin":"40px auto 40px","borderRadius":"0px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40vw","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"20px auto 20px","color":"#2a8ec0","textAlign":"center","width":"90%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","fontWeight":"600"}'>学生组织管理系统注册</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xuehao')?'required':''">学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueshengxingming')?'required':''">学生姓名：</div>
				<el-input v-model="registerForm.xueshengxingming"  placeholder="请输入学生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">个人照片：</div>
                <file-upload
					tip="点击上传个人照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengdianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueshengdianhua')?'required':''">学生电话：</div>
				<el-input v-model="registerForm.xueshengdianhua"  placeholder="请输入学生电话" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="nianling">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="suoshuzuzhi">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('suoshuzuzhi')?'required':''">所属组织：</div>
                <el-select v-model="registerForm.suoshuzuzhi" placeholder="请选择所属组织" >
                  <el-option
                      v-for="(item,index) in xueshengsuoshuzuzhiOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="minzu">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('minzu')?'required':''">民族：</div>
				<el-input v-model="registerForm.minzu"  placeholder="请输入民族" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanyebanji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zhuanyebanji')?'required':''">专业班级：</div>
				<el-input v-model="registerForm.zhuanyebanji"  placeholder="请输入专业班级" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="nianji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('nianji')?'required':''">年级：</div>
				<el-input v-model="registerForm.nianji"  placeholder="请输入年级" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhengzhimianmao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zhengzhimianmao')?'required':''">政治面貌：</div>
				<el-input v-model="registerForm.zhengzhimianmao"  placeholder="请输入政治面貌" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="dianziyouxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianziyouxiang')?'required':''">电子邮箱：</div>
				<el-input v-model="registerForm.dianziyouxiang"  placeholder="请输入电子邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="qq">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('qq')?'required':''">QQ：</div>
				<el-input v-model="registerForm.qq"  placeholder="请输入QQ" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="weixin">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('weixin')?'required':''">微信：</div>
				<el-input v-model="registerForm.weixin"  placeholder="请输入微信" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="banjirenzhiqingkuang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('banjirenzhiqingkuang')?'required':''">班级任职情况：</div>
				<el-input v-model="registerForm.banjirenzhiqingkuang"  placeholder="请输入班级任职情况" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zuzhirenzhiqingkuang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhirenzhiqingkuang')?'required':''">组织任职情况：</div>
				<el-input v-model="registerForm.zuzhirenzhiqingkuang"  placeholder="请输入组织任职情况" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="qinshihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('qinshihao')?'required':''">寝室号：</div>
				<el-input v-model="registerForm.qinshihao"  placeholder="请输入寝室号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="banzhuren">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('banzhuren')?'required':''">班主任：</div>
				<el-input v-model="registerForm.banzhuren"  placeholder="请输入班主任" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengzhiwupingding">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueshengzhiwupingding')?'required':''">学生职务评定：</div>
                <el-select v-model="registerForm.xueshengzhiwupingding" placeholder="请选择学生职务评定" >
                  <el-option
                      v-for="(item,index) in xueshengxueshengzhiwupingdingOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="lianxidizhi">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('lianxidizhi')?'required':''">联系地址：</div>
				<el-input v-model="registerForm.lianxidizhi"  placeholder="请输入联系地址" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="beizhu">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('beizhu')?'required':''">备注：</div>
				<el-input v-model="registerForm.beizhu"  placeholder="请输入备注" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="pquestion">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('pquestion')?'required':''">密保问题：</div>
				<el-input v-model="registerForm.pquestion"  placeholder="请输入密保问题" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xuesheng'" prop="panswer">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('panswer')?'required':''">密保答案：</div>
				<el-input v-model="registerForm.panswer"  placeholder="请输入密保答案" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="ganbuzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('ganbuzhanghao')?'required':''">干部账号：</div>
				<el-input v-model="registerForm.ganbuzhanghao"  placeholder="请输入干部账号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="ganbuxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('ganbuxingming')?'required':''">干部姓名：</div>
				<el-input v-model="registerForm.ganbuxingming"  placeholder="请输入干部姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in ganbuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="ganbudianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('ganbudianhua')?'required':''">干部电话：</div>
				<el-input v-model="registerForm.ganbudianhua"  placeholder="请输入干部电话" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="ganbutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='ganbu'" prop="zuzhimingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhimingcheng')?'required':''">所属组织：</div>
				<el-input v-model="registerForm.zuzhimingcheng"  placeholder="请输入所属组织" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="zuzhizhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhizhanghao')?'required':''">组织账号：</div>
				<el-input v-model="registerForm.zuzhizhanghao"  placeholder="请输入组织账号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="zuzhixingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhixingming')?'required':''">组织姓名：</div>
				<el-input v-model="registerForm.zuzhixingming"  placeholder="请输入组织姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in zuzhixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="zuzhidianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhidianhua')?'required':''">组织电话：</div>
				<el-input v-model="registerForm.zuzhidianhua"  placeholder="请输入组织电话" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="zuzhitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='zuzhi'" prop="zuzhimingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zuzhimingcheng')?'required':''">所属组织：</div>
				<el-input v-model="registerForm.zuzhimingcheng"  placeholder="请输入所属组织" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","color":"#fff","display":"block","outline":"none","borderRadius":"4px","background":"#3795c4","width":"400px","fontSize":"16px","height":"50px","order":"30"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 0px","margin":"0px auto","color":"#999","textAlign":"right","display":"none","outline":"none","borderRadius":"4px","background":"none","width":"400px","fontSize":"14px","height":"44px","order":"40"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"12px auto 20px","color":"#3795c4","textAlign":"center","display":"block","width":"400px","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"50"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            xueshengxingbieOptions: [],
            xueshengsuoshuzuzhiOptions: [],
            xueshengxueshengzhiwupingdingOptions: [],
            ganbuxingbieOptions: [],
            zuzhixingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='xuesheng'){
				this.registerForm = {
					xuehao: '',
					mima: '',
					mima2: '',
					xueshengxingming: '',
					touxiang: '',
					xingbie: '',
					xueshengdianhua: '',
					nianling: '',
					suoshuzuzhi: '',
					minzu: '',
					zhuanyebanji: '',
					nianji: '',
					zhengzhimianmao: '',
					dianziyouxiang: '',
					qq: '',
					weixin: '',
					banjirenzhiqingkuang: '',
					zuzhirenzhiqingkuang: '',
					qinshihao: '',
					banzhuren: '',
					xueshengzhiwupingding: '',
					lianxidizhi: '',
					beizhu: '',
					pquestion: '',
					panswer: '',
				}
			}
			if(this.tableName=='ganbu'){
				this.registerForm = {
					ganbuzhanghao: '',
					mima: '',
					mima2: '',
					ganbuxingming: '',
					xingbie: '',
					ganbudianhua: '',
					touxiang: '',
					zuzhimingcheng: '',
				}
			}
			if(this.tableName=='zuzhi'){
				this.registerForm = {
					zuzhizhanghao: '',
					mima: '',
					mima2: '',
					zuzhixingming: '',
					xingbie: '',
					zuzhidianhua: '',
					touxiang: '',
					zuzhimingcheng: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.suoshuzuzhi = [{ required: true, message: '请输入所属组织', trigger: 'blur' }]
			}
			if ('ganbu' == this.tableName) {
				this.requiredRules.ganbuzhanghao = [{ required: true, message: '请输入干部账号', trigger: 'blur' }]
			}
			if ('ganbu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('ganbu' == this.tableName) {
				this.requiredRules.ganbuxingming = [{ required: true, message: '请输入干部姓名', trigger: 'blur' }]
			}
			if ('zuzhi' == this.tableName) {
				this.requiredRules.zuzhizhanghao = [{ required: true, message: '请输入组织账号', trigger: 'blur' }]
			}
			if ('zuzhi' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('zuzhi' == this.tableName) {
				this.requiredRules.zuzhixingming = [{ required: true, message: '请输入组织姓名', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('xuesheng' == this.tableName) {
			this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }];
		  }
			this.xueshengxingbieOptions = "男,女".split(',');
		  if ('xuesheng' == this.tableName) {
			this.rules.xueshengdianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
			this.$http({
			  url: `option/zuzhixinxi/zuzhimingcheng`,
			  method: "get",
			  params: {}
			}).then(({ data }) => {
			  if (data && data.code === 0) {
				  this.xueshengsuoshuzuzhiOptions = data.data;
			  }
			});
		  if ('xuesheng' == this.tableName) {
			this.rules.suoshuzuzhi = [{ required: true, message: '请输入所属组织', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.dianziyouxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
			this.xueshengxueshengzhiwupingdingOptions = "甲,乙,丙".split(',');
		  if ('ganbu' == this.tableName) {
			this.rules.ganbuzhanghao = [{ required: true, message: '请输入干部账号', trigger: 'blur' }];
		  }
		  if ('ganbu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('ganbu' == this.tableName) {
			this.rules.ganbuxingming = [{ required: true, message: '请输入干部姓名', trigger: 'blur' }];
		  }
			this.ganbuxingbieOptions = "男,女".split(',');
		  if ('ganbu' == this.tableName) {
			this.rules.ganbudianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('zuzhi' == this.tableName) {
			this.rules.zuzhizhanghao = [{ required: true, message: '请输入组织账号', trigger: 'blur' }];
		  }
		  if ('zuzhi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('zuzhi' == this.tableName) {
			this.rules.zuzhixingming = [{ required: true, message: '请输入组织姓名', trigger: 'blur' }];
		  }
			this.zuzhixingbieOptions = "男,女".split(',');
		  if ('zuzhi' == this.tableName) {
			this.rules.zuzhidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      ganbutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      zuzhitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


//获取密保问题
        getSecurity(){
            this.tableName = 'xuesheng'
            if(!this.tableName) {
                this.$message.error("请选择角色");
                return false
            }
            if(!this.forgetForm.username){
                this.$message.error("请输入账号");
                return false
            }
            this.$http({
                url: this.tableName+`/security?username=` + this.forgetForm.username,
                method: "get",
            }).then(({
                data
            }) => {
                if (data.data && data.code === 0) {
                    this.registerForm = data.data;
                    this.pageFlag="security2"
                } else {
                    if(!data.data) {
                        this.$message.error("用户不存在");
                    } else {
                        this.$message.error(data.msg);
                    }
                }
            });
        },
        //验证密保问题
        validateSecurity(){
            let that = this
            if(this.registerForm.panswer!=this.registerForm.myanswer){
                this.$message.error("答案输入不正确");
                return false
            }
            this.$message.success("答案正确");
            setTimeout(()=>{
                this.pageFlag="security3";
            },1000)
        },
        // 修改密码
        updatePassword() {
            if (!this.registerForm.newpassword) {
                this.$message.error("请输入新密码");
                return;
            }
            if (this.registerForm.newpassword != this.registerForm.repassword) {
                this.$message.error("两次密码输入不一致");
                return;
            }
            this.registerForm.mima = this.registerForm.newpassword;
            this.registerForm.password = this.registerForm.newpassword;
            this.$http.post(this.tableName+`/update`, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                    message: "密码修改成功",
                    type: "success",
                    duration: 1500,
                    onClose: () => {
                      this.$router.push('/login');
                    }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.xuehao) && `xuesheng` == this.tableName){
					this.$message.error(`学号不能为空`);
					return
				}
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xuesheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.xueshengxingming) && `xuesheng` == this.tableName){
					this.$message.error(`学生姓名不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.xueshengdianhua &&(!this.$validate.isMobile2(this.registerForm.xueshengdianhua))){
						this.$message.error(`学生电话应输入手机格式`);
						return
					}
				if(`xuesheng` == this.tableName && this.registerForm.nianling &&(!this.$validate.isIntNumer2(this.registerForm.nianling))){
					this.$message.error(`年龄应输入整数`);
					return
				}
				if((!this.registerForm.suoshuzuzhi) && `xuesheng` == this.tableName){
					this.$message.error(`所属组织不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.dianziyouxiang &&(!this.$validate.isEmail2(this.registerForm.dianziyouxiang))){
						this.$message.error(`电子邮箱应输入邮件格式`);
						return
					}
				if(`xuesheng` == this.tableName && this.registerForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`xuesheng` == this.tableName && this.registerForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
				if((!this.registerForm.ganbuzhanghao) && `ganbu` == this.tableName){
					this.$message.error(`干部账号不能为空`);
					return
				}
               if(`ganbu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `ganbu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.ganbuxingming) && `ganbu` == this.tableName){
					this.$message.error(`干部姓名不能为空`);
					return
				}
					if(`ganbu` == this.tableName && this.registerForm.ganbudianhua &&(!this.$validate.isMobile2(this.registerForm.ganbudianhua))){
						this.$message.error(`干部电话应输入手机格式`);
						return
					}
				if((!this.registerForm.zuzhizhanghao) && `zuzhi` == this.tableName){
					this.$message.error(`组织账号不能为空`);
					return
				}
               if(`zuzhi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `zuzhi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.zuzhixingming) && `zuzhi` == this.tableName){
					this.$message.error(`组织姓名不能为空`);
					return
				}
					if(`zuzhi` == this.tableName && this.registerForm.zuzhidianhua &&(!this.$validate.isMobile2(this.registerForm.zuzhidianhua))){
						this.$message.error(`组织电话应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240305/c46698d0e9e14ad1b5729fb8a33a6d90.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						height: 50px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 140px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
