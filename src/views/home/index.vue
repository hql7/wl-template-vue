<template>
  <ft-container>
    home
    <div>
      <ft-add v-auth="authKey.add">添 加</ft-add>
      <ft-add v-auth="[authKey.add, authKey.edit]">编 辑</ft-add>
      <ft-add type="danger" v-auth="authKey.del">删 除</ft-add>
    </div>
  </ft-container>
</template>

<script>
/**
 * @name 按钮权限指令
 * @description 支持字符串和数组，注意数组时是或关系
 */
export default {
  name: "home",
  data() {
    return {
      authKey: {
        add: "home-add",
        edit: "home-edit",
        del: "home-del"
      } // 权限码
    };
  },
  created() {
  }
};
</script>