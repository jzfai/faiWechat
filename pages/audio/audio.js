Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioAction: {
      method: 'false'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },

  //获取音频播放的总时间
  audioTimeUpdated: function (e) {

    this.duration = e.detail.duration;     /*获取音频的播放时间  s*/
  },

  timeSliderChanged: function (e) {
    console.log(this.duration);
    console.log(e.detail.value);
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;    //总时间诚意百分比
    console.log(time)
    this.setData({         //改变音频的播放时间
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  playbackRateSliderChanged: function (e) {    /*改变音频播放的速率*/

    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })

  },

  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})