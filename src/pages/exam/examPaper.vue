<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#edeff1"}'>
    <div class="section-title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#333","textAlign":"center","background":"none","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>调查问卷</div>
	<el-form :style='{"padding":"10px 0","margin":"20px 0 0","borderColor":"#ddd","alignItems":"center","flexWrap":"wrap","background":"none","borderWidth":"0 0 0px","display":"flex","width":"100%","borderStyle":"solid","height":"auto","order":"2"}' :inline="true" :model="formSearch" class="center-form-pv">
		<el-form-item :style='{"margin":"0 5px 0px"}'>
			<div class="lable" v-if="true" :style='{"width":"auto","padding":"0 0 0 0px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>调查问卷名称：</div>
			<el-input v-model="formSearch.name" placeholder="调查问卷名称" @keydown.enter.native="getExamList(1)" clearable></el-input>
		</el-form-item>
		<el-button :style='{"cursor":"pointer","border":"0","padding":"0px 15px","margin":"0px 10px 0 0px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"30px","background":"#3795c4","width":"90px","fontSize":"14px","lineHeight":"40px","height":"40px"}' type="primary" @click="getExamList(1)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"16px"}' class="el-icon-search"></i>查询</el-button>
	</el-form>
    <el-table
		:data="tableData"
		style="width: 100%">
		<el-table-column
			label="调查问卷名称"
			prop="name">
		</el-table-column>
		<el-table-column
			label="考试时长">
			<template slot-scope="scope">
				{{ scope.row.time }}分钟
			</template>
		</el-table-column>
		<el-table-column
			label="创建时间"
			prop="addtime">
		</el-table-column>
		<el-table-column label="操作" width="150">
			<template slot-scope="scope">
				<el-button
				type="success"
				size="mini"
				@click="handleExam(scope.$index, scope.row)">考试</el-button>
			</template>
		</el-table-column>
    </el-table>
	
    <el-pagination
		background
		id="pagination" class="pagination"
		:pager-count="7"
		:page-size="pageSize"
		prev-text="上一页"
		next-text="下一页"
		:hide-on-single-page="false"
		:layout='["prev","pager","next"].join()'
		:total="total"
		:style='{"padding":"25px 0","margin":"0 auto","color":"#333","textAlign":"left","background":"none","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"auto","order":"50"}'
		@current-change="curChange"
		@prev-click="prevClick"
		@next-click="nextClick"
		></el-pagination>
	
</div>
</template>

<script>
	export default {
		data() {
			return {
				layouts: '',
				tableData: [],
				total: 1,
				pageSize: 5,
				totalPage: 1,
				formSearch: {}
			}
		},
		created() {
			this.getExamList(1);
		},
		methods: {
			getExamList(page) {
				let params = {page, limit: this.pageSize, status: 1,sort: 'addtime',order: 'desc'}
				if(this.formSearch.name){
					params['name'] = `%${this.formSearch.name}%`
				}
				this.$http.get('exampaper/list', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.tableData = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			curChange(page) {
				this.getExamList(page);
			},
			prevClick(page) {
				this.getExamList(page);
			},
			nextClick(page) {
				this.getExamList(page);
			},
			handleExam(index, row) {
				this.$router.push({path: '/exam', query: {id: row.id, time: row.time}})
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}
	.center-form-pv .el-input {
		width: auto;
	}

  
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 20px;
		padding: 0 16px;
		margin: 0 5px;
		color: #fff;
		background: #3795c4;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 20px;
		padding: 0 16px;
		margin: 0 5px;
		color: #fff;
		background: #3795c4;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 20px;
		padding: 0 16px;
		margin: 0 5px;
		color: #666;
		background: #dfdfdf;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 20px;
		padding: 0 16px;
		margin: 0 5px;
		color: #666;
		background: #dfdfdf;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
  
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 100%;
		background: #dfdfdf;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 100%;
		background: #3795c4;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 100%;
		background: #3795c4;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
  
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
</style>
