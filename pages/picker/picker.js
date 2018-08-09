// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList: ['北京', '上海', '深圳', '广州'], 
    cityIndex: 1, 


    time: '17:01', 


    date: '2018-6-28',     

    customItem: "全部", 
    region: ['广东省', '深圳市', '宝安区'],

    
    multiArray: [['宝马', '大众', '奥迪'], ['宝马1', '宝马2', '宝马3', '宝马4']],
    multiIndex: [0, 0]


  },

  //普通选择器
  bindCityChange(e){
  //e.detail.value 选中的索引值
    this.setData({
      cityIndex: e.detail.value
    })
  },
  bindTimeChange(e){
   
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange(e) {
    console.log(e.detail.value);
    this.setData({
      region: e.detail.value
    })
  }
  ,
  bindMultiPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log(e.detail)
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value; //multiIndex: [0, 0]


    if (e.detail.column==0){  /*第一列改变*/


        //获取第一列选中的值   e.detail.value

      if (e.detail.value==0){

        data.multiArray[1] = ['宝马1', '宝马2', '宝马3', '宝马4'];

      } else if (e.detail.value == 1){

        data.multiArray[1] = ['大众1', '大众2', '大众3', '大众4'];
      }else{
        data.multiArray[1] = ['奥迪1', '奥迪2', '奥迪3', '奥迪4'];

      }


    }

    //改变data里面的值

    this.setData(data);



  }
  

 
})