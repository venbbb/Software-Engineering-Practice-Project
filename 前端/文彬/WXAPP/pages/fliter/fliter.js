const app = getApp()

Page({
  data: {
    array: ['￥1~￥5', '￥6~￥10', '￥10~￥20', '￥20~'],
    sex:['男','女'],
    date: '2019-11-11',
    time: '12:00',
    index:0,

  },
  onLoad: function () {

  },
  goBack:function(event){
    wx.showToast({
      title: '筛选成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        setTimeout(function () {
          wx.switchTab({
            url: '../market/market'
          })
        }, 1000);
      }
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})