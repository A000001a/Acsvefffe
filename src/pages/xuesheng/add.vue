<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#edeff1"}'>
    <el-form
	  :style='{"border":"0px solid #28890b30","width":"100%","padding":"30px","position":"relative","background":"none"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学号" prop="xuehao">
            <el-input v-model="ruleForm.xuehao" 
                placeholder="学号" clearable :disabled=" false  ||ro.xuehao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="密码" prop="mima">
            <el-input v-model="ruleForm.mima" 
                placeholder="密码" clearable :disabled=" false  ||ro.mima"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生姓名" prop="xueshengxingming">
            <el-input v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" clearable :disabled=" false  ||ro.xueshengxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="个人照片" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
                    <el-image v-if="ruleForm.touxiang" :src="ruleForm.touxiang?baseUrl + ruleForm.touxiang:''" style="width:150px;height:150px;"></el-image>
                    <el-button @click="imgAddClick">人脸识别</el-button>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="个人照片" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="性别" prop="xingbie">
            <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" :disabled=" false  ||ro.xingbie" >
              <el-option
                  v-for="(item,index) in xingbieOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生电话" prop="xueshengdianhua">
            <el-input v-model="ruleForm.xueshengdianhua" 
                placeholder="学生电话" clearable :disabled=" false  ||ro.xueshengdianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="年龄" prop="nianling">
            <el-input v-model.number="ruleForm.nianling" 
                placeholder="年龄" clearable :disabled=" false  ||ro.nianling"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="所属组织" prop="suoshuzuzhi">
            <el-select v-model="ruleForm.suoshuzuzhi" placeholder="请选择所属组织" :disabled=" false  ||ro.suoshuzuzhi" >
              <el-option
                  v-for="(item,index) in suoshuzuzhiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="民族" prop="minzu">
            <el-input v-model="ruleForm.minzu" 
                placeholder="民族" clearable :disabled=" false  ||ro.minzu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="专业班级" prop="zhuanyebanji">
            <el-input v-model="ruleForm.zhuanyebanji" 
                placeholder="专业班级" clearable :disabled=" false  ||ro.zhuanyebanji"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="年级" prop="nianji">
            <el-input v-model="ruleForm.nianji" 
                placeholder="年级" clearable :disabled=" false  ||ro.nianji"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="政治面貌" prop="zhengzhimianmao">
            <el-input v-model="ruleForm.zhengzhimianmao" 
                placeholder="政治面貌" clearable :disabled=" false  ||ro.zhengzhimianmao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="电子邮箱" prop="dianziyouxiang">
            <el-input v-model="ruleForm.dianziyouxiang" 
                placeholder="电子邮箱" clearable :disabled=" false  ||ro.dianziyouxiang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="QQ" prop="qq">
            <el-input v-model="ruleForm.qq" 
                placeholder="QQ" clearable :disabled=" false  ||ro.qq"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="微信" prop="weixin">
            <el-input v-model="ruleForm.weixin" 
                placeholder="微信" clearable :disabled=" false  ||ro.weixin"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="班级任职情况" prop="banjirenzhiqingkuang">
            <el-input v-model="ruleForm.banjirenzhiqingkuang" 
                placeholder="班级任职情况" clearable :disabled=" false  ||ro.banjirenzhiqingkuang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="组织任职情况" prop="zuzhirenzhiqingkuang">
            <el-input v-model="ruleForm.zuzhirenzhiqingkuang" 
                placeholder="组织任职情况" clearable :disabled=" false  ||ro.zuzhirenzhiqingkuang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="寝室号" prop="qinshihao">
            <el-input v-model="ruleForm.qinshihao" 
                placeholder="寝室号" clearable :disabled=" false  ||ro.qinshihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="班主任" prop="banzhuren">
            <el-input v-model="ruleForm.banzhuren" 
                placeholder="班主任" clearable :disabled=" false  ||ro.banzhuren"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="学生职务评定" prop="xueshengzhiwupingding">
            <el-select v-model="ruleForm.xueshengzhiwupingding" placeholder="请选择学生职务评定" :disabled=" false  ||ro.xueshengzhiwupingding" >
              <el-option
                  v-for="(item,index) in xueshengzhiwupingdingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="联系地址" prop="lianxidizhi">
            <el-input v-model="ruleForm.lianxidizhi" 
                placeholder="联系地址" clearable :disabled=" false  ||ro.lianxidizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="备注" prop="beizhu">
            <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" clearable :disabled=" false  ||ro.beizhu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="密保问题" prop="pquestion">
            <el-input v-model="ruleForm.pquestion" 
                placeholder="密保问题" clearable :disabled=" false  ||ro.pquestion"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="密保答案" prop="panswer">
            <el-input v-model="ruleForm.panswer" 
                placeholder="密保答案" clearable :disabled=" false  ||ro.panswer"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"10px 0 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"20px","background":"#3795c4","width":"128px","lineHeight":"44px","fontSize":"16px","height":"44px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #3795c4","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#3795c4","borderRadius":"30px","background":"none","width":"128px","lineHeight":"44px","fontSize":"16px","height":"44px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    <imgAdd ref="imgAdd" @imgChange="imgChange"></imgAdd>
</div>
</template>

<script>
import imgAdd from "@/components/img";
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				xuehao : false,
				mima : false,
				xueshengxingming : false,
				touxiang : false,
				xingbie : false,
				xueshengdianhua : false,
				nianling : false,
				suoshuzuzhi : false,
				minzu : false,
				zhuanyebanji : false,
				nianji : false,
				zhengzhimianmao : false,
				dianziyouxiang : false,
				qq : false,
				weixin : false,
				banjirenzhiqingkuang : false,
				zuzhirenzhiqingkuang : false,
				qinshihao : false,
				banzhuren : false,
				xueshengzhiwupingding : false,
				lianxidizhi : false,
				beizhu : false,
				pquestion : false,
				panswer : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          xuehao: '',
          mima: '',
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
        },
        xingbieOptions: [],
        suoshuzuzhiOptions: [],
        xueshengzhiwupingdingOptions: [],


        rules: {
          xuehao: [
            { required: true, message: '学号不能为空', trigger: 'blur' },
          ],
          mima: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ],
          xueshengxingming: [
            { required: true, message: '学生姓名不能为空', trigger: 'blur' },
          ],
          touxiang: [
          ],
          xingbie: [
          ],
          xueshengdianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          nianling: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          suoshuzuzhi: [
            { required: true, message: '所属组织不能为空', trigger: 'blur' },
          ],
          minzu: [
          ],
          zhuanyebanji: [
          ],
          nianji: [
          ],
          zhengzhimianmao: [
          ],
          dianziyouxiang: [
            { validator: this.$validate.isEmail, trigger: 'blur' },
          ],
          qq: [
          ],
          weixin: [
          ],
          banjirenzhiqingkuang: [
          ],
          zuzhirenzhiqingkuang: [
          ],
          qinshihao: [
          ],
          banzhuren: [
          ],
          xueshengzhiwupingding: [
          ],
          lianxidizhi: [
          ],
          beizhu: [
          ],
          pquestion: [
          ],
          panswer: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
        imgAdd
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
        imgAddClick(){
            this.$refs.imgAdd.onTake()
        },
        imgChange(e){
            this.ruleForm.touxiang = 'upload/' + e
        },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='xuehao'){
              this.ruleForm.xuehao = obj[o];
              this.ro.xuehao = true;
              continue;
            }
            if(o=='mima'){
              this.ruleForm.mima = obj[o];
              this.ro.mima = true;
              continue;
            }
            if(o=='xueshengxingming'){
              this.ruleForm.xueshengxingming = obj[o];
              this.ro.xueshengxingming = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='xueshengdianhua'){
              this.ruleForm.xueshengdianhua = obj[o];
              this.ro.xueshengdianhua = true;
              continue;
            }
            if(o=='nianling'){
              this.ruleForm.nianling = obj[o];
              this.ro.nianling = true;
              continue;
            }
            if(o=='suoshuzuzhi'){
              this.ruleForm.suoshuzuzhi = obj[o];
              this.ro.suoshuzuzhi = true;
              continue;
            }
            if(o=='minzu'){
              this.ruleForm.minzu = obj[o];
              this.ro.minzu = true;
              continue;
            }
            if(o=='zhuanyebanji'){
              this.ruleForm.zhuanyebanji = obj[o];
              this.ro.zhuanyebanji = true;
              continue;
            }
            if(o=='nianji'){
              this.ruleForm.nianji = obj[o];
              this.ro.nianji = true;
              continue;
            }
            if(o=='zhengzhimianmao'){
              this.ruleForm.zhengzhimianmao = obj[o];
              this.ro.zhengzhimianmao = true;
              continue;
            }
            if(o=='dianziyouxiang'){
              this.ruleForm.dianziyouxiang = obj[o];
              this.ro.dianziyouxiang = true;
              continue;
            }
            if(o=='qq'){
              this.ruleForm.qq = obj[o];
              this.ro.qq = true;
              continue;
            }
            if(o=='weixin'){
              this.ruleForm.weixin = obj[o];
              this.ro.weixin = true;
              continue;
            }
            if(o=='banjirenzhiqingkuang'){
              this.ruleForm.banjirenzhiqingkuang = obj[o];
              this.ro.banjirenzhiqingkuang = true;
              continue;
            }
            if(o=='zuzhirenzhiqingkuang'){
              this.ruleForm.zuzhirenzhiqingkuang = obj[o];
              this.ro.zuzhirenzhiqingkuang = true;
              continue;
            }
            if(o=='qinshihao'){
              this.ruleForm.qinshihao = obj[o];
              this.ro.qinshihao = true;
              continue;
            }
            if(o=='banzhuren'){
              this.ruleForm.banzhuren = obj[o];
              this.ro.banzhuren = true;
              continue;
            }
            if(o=='xueshengzhiwupingding'){
              this.ruleForm.xueshengzhiwupingding = obj[o];
              this.ro.xueshengzhiwupingding = true;
              continue;
            }
            if(o=='lianxidizhi'){
              this.ruleForm.lianxidizhi = obj[o];
              this.ro.lianxidizhi = true;
              continue;
            }
            if(o=='beizhu'){
              this.ruleForm.beizhu = obj[o];
              this.ro.beizhu = true;
              continue;
            }
            if(o=='pquestion'){
              this.ruleForm.pquestion = obj[o];
              this.ro.pquestion = true;
              continue;
            }
            if(o=='panswer'){
              this.ruleForm.panswer = obj[o];
              this.ro.panswer = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.xingbieOptions = "男,女".split(',')
        this.$http.get('option/zuzhixinxi/zuzhimingcheng', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.suoshuzuzhiOptions = res.data.data;
          }
        });
        this.xueshengzhiwupingdingOptions = "甲,乙,丙".split(',')

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`xuesheng/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('xuesheng/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`xuesheng/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`xuesheng/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 150px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 4px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 4px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 4px;
	  padding: 0 10px;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 80px;
	  border-radius: 4px;
	  background: #fff;
	  width: 80px;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 80px;
	  border-radius: 4px;
	  background: #fff;
	  width: 80px;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 80px;
	  border-radius: 4px;
	  background: #fff;
	  width: 80px;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0px solid #eee;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  min-width: 800px;
	  height: 120px;
	}
</style>
