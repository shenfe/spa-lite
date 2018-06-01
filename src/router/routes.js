import Home from '@/view/Home'
import Api from '@/view/Api'
import Sub from '@/view/SubMenu'
import Sub1 from '@/component/SubMenu/Item1'
import Sub2 from '@/component/SubMenu/Item2'
import DemoForm from '@/view/DemoForm'

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
    }
  }
]
