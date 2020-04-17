import request from "./_config_";

// 1获取菜单数据接口
function getMenuDataApi(data) {
  return request({
    url: "/Api/GetMenusByUserId",
    method: 'post',
    data
  });
}

export {
  getMenuDataApi, // 1获取菜单数据接口
}