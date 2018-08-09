// pages/mains/mains.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option)
    this.toast = this.selectComponent("#toast")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var header = this.selectComponent("#header");

    //  header.run1();   /*父组件里面执行子组件的方法*/

    console.log(header.data.msg);  /*父组件里面直接获取子组件的数据*/
  },

  run(e) {
    console.log(e);
    console.log('我是user页面的方法');
  },
 showToast: function () {
    this.toast.showToast('我是传过来的toast内容', 5000)
  }  
})