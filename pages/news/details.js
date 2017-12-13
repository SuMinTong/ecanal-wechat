// pages/news/details.js
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
var open_id = wx.getStorageSync('open_id');
var usercontent = wx.getStorageSync('usercontent');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Default:false,
    num:0,
    hidden: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("++++++++++++++++++++++++",options);
    this.getCommentReply(options.idx);
    this.data.commentId = options.idx;
    // this.getCommentReply(4);
    this.getComment(options.idx);
    // this.getComment(4);
  },

  comment:function(){},
  getComment: function (id) {
    let that = this;
    wx.request({
      url: API + 'app_getcommentbyid',
      data: {
        'comment_id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        if (res.data.user_phone == null){
          that.setData({
            Default: true
          })
        }
        that.setData({
          comment_content: res.data
        })
        console.log(res);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
// 评论点赞接口
  laud:function(e){
    // console.log(this.data.comment_content.id);
    let that = this;
    let id = this.data.comment_content.id
    wx.request({
      url: API + 'app_commentlikes',
      data: {
        'comment_id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function(res) {
        if(res.data == -1){
          wx.showToast({
            title: '您已经点过赞了！',
            icon: 'success',
            duration: 1500,
            mask: true,
          })
          that.setData({
            islike: true,
          })
          return;
        }
        that.getComment(id);
        console.log(res);
      },
    })


  },

  submitComment: function (e) {
    console.log(this);
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    this.setData({ flag: true })
    let id = this.data.articleId;
    let that = this;
    let commentNUM = that.data.commentNum;
    let content = e.detail.value.commentContent;
    if (content == "") {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'warm',
        duration: 0,
        mask: true,
      })
      return;
    }
    wx.request({
      url: API + '/app_commentnews',
      data: {
        'news_id': id,
        'content': content,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(that.data);
        that.getComment(id);
        console.log(res);
        if (res.data.iuser == 1) {
          that.setData({
            comment: true,
            commentNum: commentNUM + 1
          })

        }
      },
    })
  },
  getCommentReply: function (id) {
    let that=this;
    wx.request({
      url: API + 'app_commentreply',
      data: {
        'comment_id': id,
        'page': 1,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res);
        that.setData({
          replyComment:res.data
        })
        
      },
    })
  },

  // 对评论回复
  submitReplyComment: function (e) {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    let id = this.data.Idt;
    let commentId = this.data.commentId;
    let that = this;
    let content = e.detail.value.commentContent;
    wx.request({
      url: API + 'app_comment_reply',
      data: {
        'comment_id': id,
        'content': content,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res.data.message);
        that.setData({ hidden: true});
        wx.showToast({
          title: '评论成功',
          duration: 1500,
          mask: true,
        })
        that.getCommentReply(commentId);
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
// 取消评论
  cancel: function () {
    this.setData({ hidden: true })
  },

  // 评论回复点击事件，
  replyComment: function (e) {
    console.log(" 评论回复点击事件，",e);
    this.data.Idt = e.currentTarget.dataset.idx
    this.setData({ hidden: false })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})