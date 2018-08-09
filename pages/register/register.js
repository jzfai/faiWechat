// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',   /*inputValue*/

    items: [
      { name: 'USA', value: '美国', checked: 'true'},
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ]
  },

  doInput: function (e) {

    console.log(e);

    this.setData({
      inputValue: e.detail.value
    })
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
  , switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  }
  , 
  doPost(e) {


   //获取form表单提交的数据  注意表单要定义名称
    console.log(e.detail.value);

    
  }
  
})