// pages/mains/mains.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    windowHeight: '400',
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.requestData();
    // this.toast = this.selectComponent("#toast")
    //获取屏幕高度
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  requestData() {

    this.setData({
      flag: false
    })

    var that = this;
    var api = 'http://www.phonegap100.com/appapi.php';
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      data: {
        a: 'getPortalList',
        catid: '20',
        page: that.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data)

        if (res.data.result.length < 20) {
          var f = false;
        } else {

          var f = true;
        }

        var list = that.data.list.concat(res.data.result)
        var page = ++that.data.page;
        that.setData({
          list: list,
          page: page,
          flag: f
        })
      }
    })
  },
  loadMore() {
    console.log("scrollReachButton")
    if (this.data.flag) {
      this.requestData();
    }
  }
  // onShow: function () {
  //   var header = this.selectComponent("#header");

  //   //  header.run1();   /*父组件里面执行子组件的方法*/

  //   console.log(header.data.msg);  /*父组件里面直接获取子组件的数据*/
  // },
  ,run(e) {
    console.log(e);
    console.log('我是user页面的方法');
  },
 showToast: function () {
    this.toast.showToast('我是传过来的toast内容', 5000)
  },


  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})