
Page({
  data: {
    motto: 'Hello World',
    nodes: [{
      name: 'h2',
      attrs: {
        class: 'h2_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!111'
      }]
    }]

    ,
    article: '<h2>我是一个内容</h2> <div>我是一个<strong>div</strong><img src="http://image08.71.net/image08/27/95/11/20/3f8e890b-2243-4054-a433-21c9621b3cb8.jpg" /></div>'
  }
})
