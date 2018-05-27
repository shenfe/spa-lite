import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page21 from '@/components/Page21'
import Page22 from '@/components/Page22'

export default [
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
    extraTitle: '页面1',
    extraType: 'setting'
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
    extraTitle: '页面2',
    extraType: 'setting',
    children: [
      {
        path: 'page21',
        component: Page21,
        extraTitle: '页面21'
      },
      {
        path: 'page22',
        component: Page22,
        extraTitle: '页面22'
      }
    ]
  }
]
