import Home from '@/view/Home'
import Api from '@/view/Api'
import NotFound from '@/view/404'
import Sub from '@/view/SubMenu'
import Sub1 from '@/component/SubMenu/Item1'
import Sub2 from '@/component/SubMenu/Item2'
import DemoForm from '@/view/DemoForm'
import DemoTable from '@/view/DemoTable'
import Table1 from '@/component/Table/1'
import Table2 from '@/component/Table/2'
import DemoChart from '@/view/DemoChart'
import Layout from '@/view/Layout'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '欢迎'
    },
    icon: 'smile'
  },
  {
    path: '/api',
    name: 'api',
    component: Api,
    // hidden: true, // hidden就不会在导航中
    meta: {
      title: '接口'
    },
    icon: 'cubes'
  },
  {
    path: '/submenu',
    component: Sub,
    meta: {
      title: '子菜单'
    },
    redirect: '/submenu/1',
    children: [
      {
        path: '1',
        meta: {
          title: '子菜单项1'
        },
        component: Sub1
      },
      {
        path: '2',
        meta: {
          title: '子菜单项2'
        },
        component: Sub2
      }
    ]
  },
  {
    path: '/demo-form',
    component: DemoForm,
    meta: {
      title: '表单'
    },
    icon: ['fab', 'wpforms']
  },
  {
    path: '/demo-table',
    component: DemoTable,
    meta: {
      title: '表格'
    },
    redirect: '/demo-table/1',
    icon: 'table',
    children: [
      {
        path: '1',
        component: Table1,
        meta: {
          title: '简单示例'
        }
      },
      {
        path: '2',
        component: Table2,
        meta: {
          title: '表格&翻页&对话框'
        }
      }
    ]
  },
  {
    path: '/demo-chart',
    component: DemoChart,
    meta: {
      title: '图表'
    },
    icon: 'chart-line'
  },
  {
    path: '/layout',
    component: Layout,
    meta: {
      title: '布局'
    },
    icon: 'align-left'
  },
  {
    path: '*',
    component: NotFound,
    hidden: true
  }
]
