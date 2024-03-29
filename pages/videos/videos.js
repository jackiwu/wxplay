// pages/videos/videos.js
const videos = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    cardCur: 0,
    videos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(videos)
    this.setData({
      videos: videos.config.videos
    })
  },
  cardSwiper: function(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  videoPlay: function(e) {
    let src = e.currentTarget.dataset.video;
    let title = e.currentTarget.dataset.title;
    let desc = e.currentTarget.dataset.desc;
    console.log(e)
    wx.navigateTo({
      url: '/pages/playVideo/playVideo?title=' + title + "&desc=" + desc + "&src=" + src 
    })
  },
  selectVideo:function(){
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed:false,
      success(res){
console.log(res)
        wx.navigateTo({
          url: '/pages/playVideo/playVideo?src=' + res.tempFilePath
        })
      },
      fail(res){
console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})