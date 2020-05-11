
const menus = [
  {
    id: "1",
    title: 'demo1',
    icon: "el-icon-monitor",
    children: [
      {
        id: "1-1",
        title: "home",
        url: "/home",
        permissions: ['home-add', 'home-edit']
      },
    ]
  },
  {
    id: "2",
    title: "demo2",
    icon: "el-icon-video-camera",
    children: [
      {
        id: "2-1",
        title: "about",
        url: "/about",
        permissions: ['about-del']
      },
    ] // 菜单数据
  }
]

export default [
  {
    url: '/Api/GetMenusByUserId',
    response: () => {
      return {
        code: 200,
        data: menus
      }
    }
  },
]
