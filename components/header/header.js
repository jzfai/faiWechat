// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: "String",
      value: "头部"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '这是一个头部组件'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run() {
      console.log(this.data.msg);
      this.setData({
        msg: '头部'
      })
    },
    getParent() {
      console.log('111');
      this.triggerEvent('myevent','子组件的数据');
    }
  }
})
