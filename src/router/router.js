import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import ExamPaper from '../pages/exam/examPaper'
import Exam from '../pages/exam/exam'
import ExamList from '../pages/exam/examList'
import ExamRecord from '../pages/exam/examRecord'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import ganbuList from '../pages/ganbu/list'
import ganbuDetail from '../pages/ganbu/detail'
import ganbuAdd from '../pages/ganbu/add'
import zuzhiList from '../pages/zuzhi/list'
import zuzhiDetail from '../pages/zuzhi/detail'
import zuzhiAdd from '../pages/zuzhi/add'
import zuzhileixingList from '../pages/zuzhileixing/list'
import zuzhileixingDetail from '../pages/zuzhileixing/detail'
import zuzhileixingAdd from '../pages/zuzhileixing/add'
import huodongfenleiList from '../pages/huodongfenlei/list'
import huodongfenleiDetail from '../pages/huodongfenlei/detail'
import huodongfenleiAdd from '../pages/huodongfenlei/add'
import zuzhizixunList from '../pages/zuzhizixun/list'
import zuzhizixunDetail from '../pages/zuzhizixun/detail'
import zuzhizixunAdd from '../pages/zuzhizixun/add'
import zuzhixinxiList from '../pages/zuzhixinxi/list'
import zuzhixinxiDetail from '../pages/zuzhixinxi/detail'
import zuzhixinxiAdd from '../pages/zuzhixinxi/add'
import huodongxinxiList from '../pages/huodongxinxi/list'
import huodongxinxiDetail from '../pages/huodongxinxi/detail'
import huodongxinxiAdd from '../pages/huodongxinxi/add'
import zuzhishenqingList from '../pages/zuzhishenqing/list'
import zuzhishenqingDetail from '../pages/zuzhishenqing/detail'
import zuzhishenqingAdd from '../pages/zuzhishenqing/add'
import zuzhijingfeiList from '../pages/zuzhijingfei/list'
import zuzhijingfeiDetail from '../pages/zuzhijingfei/detail'
import zuzhijingfeiAdd from '../pages/zuzhijingfei/add'
import zuzhicaiwuList from '../pages/zuzhicaiwu/list'
import zuzhicaiwuDetail from '../pages/zuzhicaiwu/detail'
import zuzhicaiwuAdd from '../pages/zuzhicaiwu/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import xueshenghuojiangList from '../pages/xueshenghuojiang/list'
import xueshenghuojiangDetail from '../pages/xueshenghuojiang/detail'
import xueshenghuojiangAdd from '../pages/xueshenghuojiang/add'
import renwufenpeiList from '../pages/renwufenpei/list'
import renwufenpeiDetail from '../pages/renwufenpei/detail'
import renwufenpeiAdd from '../pages/renwufenpei/add'
import kaoqinqiandaoList from '../pages/kaoqinqiandao/list'
import kaoqinqiandaoDetail from '../pages/kaoqinqiandao/detail'
import kaoqinqiandaoAdd from '../pages/kaoqinqiandao/add'
import renwuwanchengList from '../pages/renwuwancheng/list'
import renwuwanchengDetail from '../pages/renwuwancheng/detail'
import renwuwanchengAdd from '../pages/renwuwancheng/add'
import ganbushenqingList from '../pages/ganbushenqing/list'
import ganbushenqingDetail from '../pages/ganbushenqing/detail'
import ganbushenqingAdd from '../pages/ganbushenqing/add'
import gonggaoxinxiList from '../pages/gonggaoxinxi/list'
import gonggaoxinxiDetail from '../pages/gonggaoxinxi/detail'
import gonggaoxinxiAdd from '../pages/gonggaoxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusszuzhizixunList from '../pages/discusszuzhizixun/list'
import discusszuzhizixunDetail from '../pages/discusszuzhizixun/detail'
import discusszuzhizixunAdd from '../pages/discusszuzhizixun/add'
import discusszuzhixinxiList from '../pages/discusszuzhixinxi/list'
import discusszuzhixinxiDetail from '../pages/discusszuzhixinxi/detail'
import discusszuzhixinxiAdd from '../pages/discusszuzhixinxi/add'
import discusshuodongxinxiList from '../pages/discusshuodongxinxi/list'
import discusshuodongxinxiDetail from '../pages/discusshuodongxinxi/detail'
import discusshuodongxinxiAdd from '../pages/discusshuodongxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'examPaper',
					component: ExamPaper
				},
				{
					path: 'examList',
					component:ExamList
				},
				{
					path: 'examRecord/:type',
					component:ExamRecord
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'ganbu',
					component: ganbuList
				},
				{
					path: 'ganbuDetail',
					component: ganbuDetail
				},
				{
					path: 'ganbuAdd',
					component: ganbuAdd
				},
				{
					path: 'zuzhi',
					component: zuzhiList
				},
				{
					path: 'zuzhiDetail',
					component: zuzhiDetail
				},
				{
					path: 'zuzhiAdd',
					component: zuzhiAdd
				},
				{
					path: 'zuzhileixing',
					component: zuzhileixingList
				},
				{
					path: 'zuzhileixingDetail',
					component: zuzhileixingDetail
				},
				{
					path: 'zuzhileixingAdd',
					component: zuzhileixingAdd
				},
				{
					path: 'huodongfenlei',
					component: huodongfenleiList
				},
				{
					path: 'huodongfenleiDetail',
					component: huodongfenleiDetail
				},
				{
					path: 'huodongfenleiAdd',
					component: huodongfenleiAdd
				},
				{
					path: 'zuzhizixun',
					component: zuzhizixunList
				},
				{
					path: 'zuzhizixunDetail',
					component: zuzhizixunDetail
				},
				{
					path: 'zuzhizixunAdd',
					component: zuzhizixunAdd
				},
				{
					path: 'zuzhixinxi',
					component: zuzhixinxiList
				},
				{
					path: 'zuzhixinxiDetail',
					component: zuzhixinxiDetail
				},
				{
					path: 'zuzhixinxiAdd',
					component: zuzhixinxiAdd
				},
				{
					path: 'huodongxinxi',
					component: huodongxinxiList
				},
				{
					path: 'huodongxinxiDetail',
					component: huodongxinxiDetail
				},
				{
					path: 'huodongxinxiAdd',
					component: huodongxinxiAdd
				},
				{
					path: 'zuzhishenqing',
					component: zuzhishenqingList
				},
				{
					path: 'zuzhishenqingDetail',
					component: zuzhishenqingDetail
				},
				{
					path: 'zuzhishenqingAdd',
					component: zuzhishenqingAdd
				},
				{
					path: 'zuzhijingfei',
					component: zuzhijingfeiList
				},
				{
					path: 'zuzhijingfeiDetail',
					component: zuzhijingfeiDetail
				},
				{
					path: 'zuzhijingfeiAdd',
					component: zuzhijingfeiAdd
				},
				{
					path: 'zuzhicaiwu',
					component: zuzhicaiwuList
				},
				{
					path: 'zuzhicaiwuDetail',
					component: zuzhicaiwuDetail
				},
				{
					path: 'zuzhicaiwuAdd',
					component: zuzhicaiwuAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'xueshenghuojiang',
					component: xueshenghuojiangList
				},
				{
					path: 'xueshenghuojiangDetail',
					component: xueshenghuojiangDetail
				},
				{
					path: 'xueshenghuojiangAdd',
					component: xueshenghuojiangAdd
				},
				{
					path: 'renwufenpei',
					component: renwufenpeiList
				},
				{
					path: 'renwufenpeiDetail',
					component: renwufenpeiDetail
				},
				{
					path: 'renwufenpeiAdd',
					component: renwufenpeiAdd
				},
				{
					path: 'kaoqinqiandao',
					component: kaoqinqiandaoList
				},
				{
					path: 'kaoqinqiandaoDetail',
					component: kaoqinqiandaoDetail
				},
				{
					path: 'kaoqinqiandaoAdd',
					component: kaoqinqiandaoAdd
				},
				{
					path: 'renwuwancheng',
					component: renwuwanchengList
				},
				{
					path: 'renwuwanchengDetail',
					component: renwuwanchengDetail
				},
				{
					path: 'renwuwanchengAdd',
					component: renwuwanchengAdd
				},
				{
					path: 'ganbushenqing',
					component: ganbushenqingList
				},
				{
					path: 'ganbushenqingDetail',
					component: ganbushenqingDetail
				},
				{
					path: 'ganbushenqingAdd',
					component: ganbushenqingAdd
				},
				{
					path: 'gonggaoxinxi',
					component: gonggaoxinxiList
				},
				{
					path: 'gonggaoxinxiDetail',
					component: gonggaoxinxiDetail
				},
				{
					path: 'gonggaoxinxiAdd',
					component: gonggaoxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusszuzhizixun',
					component: discusszuzhizixunList
				},
				{
					path: 'discusszuzhizixunDetail',
					component: discusszuzhizixunDetail
				},
				{
					path: 'discusszuzhizixunAdd',
					component: discusszuzhizixunAdd
				},
				{
					path: 'discusszuzhixinxi',
					component: discusszuzhixinxiList
				},
				{
					path: 'discusszuzhixinxiDetail',
					component: discusszuzhixinxiDetail
				},
				{
					path: 'discusszuzhixinxiAdd',
					component: discusszuzhixinxiAdd
				},
				{
					path: 'discusshuodongxinxi',
					component: discusshuodongxinxiList
				},
				{
					path: 'discusshuodongxinxiDetail',
					component: discusshuodongxinxiDetail
				},
				{
					path: 'discusshuodongxinxiAdd',
					component: discusshuodongxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/exam',
			component: Exam
		}
	]
})
