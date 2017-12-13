var open_id = wx.getStorageSync('open_id');
var usercontent = wx.getStorageSync('usercontent');
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
function transform(obj) {
  var arr = [];
  for (var item in obj) {
    arr.push(obj[item]);
  }
  return arr;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden: true,
    // actionSheetItems: ['订单类', '服务类', '信息类', '钱包类']
    actionSheetItems: [],
    hidden: false,
    select: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight();
    this.getfeedbacktype();
  },
  // 获取反馈类型
  getfeedbacktype: function () {
    let that = this;
    wx.request({
      url: API + 'app_getfeedbacktype',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log('2.获取反馈类型接口', res.data);
        that.setData({
          actionSheetItems: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  phoneBlur: function (e) {
    console.log(e.detail.value);
    let phone = e.detail.value;
    if (phone != "") {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
      var flag = reg.test(phone); //true
      console.log(flag);
      if (!flag) {
        wx.showToast({
          title: '请输入正确的手机号码！',
          icon: 'warm',
          duration: 1500,
          mask: true,
        })
      }
    }


  },
  // 获取屏幕高度
  getHeight: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.screenHeight - 64
        })
        console.log(res.screenHeight);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 选择图片并上传
  chooseImg: function () {
    let that = this;
        wx.chooseImage({
          count: 3,
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function (res) {
            that.setData({
              source: res.tempFiles
            })
            
            let path = res.tempFilePaths;
            console.log(path.length);
            let savepath = path[0] + ',' + path[1] + ',' + path[2];
            that.data.savepath = savepath.replace(/,undefined/g, "");
            var tempFilePaths = res.tempFilePaths;
            console.log('选择的图片地址', that.data.savepath);
            wx.uploadFile({
              url: API + '/uploadfile',
              filePath: tempFilePaths[0],
              name: 'file',
              header: { "Content-Type": "multipart/form-data" },
              formData: {},
              success: function (res) {
                console.log(res.data);
                that.data.imgsavepath = res.data
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          },
        })
  },
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  actionSheetChange: function (e) {
    console.log(e);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  bindItemTap: function (e) {
    let that = this;
    that.setData({
      feedbackCart: e.currentTarget.dataset.name,
      actionSheetHidden: true,
    })
    that.data.feedback = e.currentTarget.dataset.idt
    console.log(e.currentTarget.dataset);
  },
  blueFeedback: function (e) {
    console.log(e.detail.value)
    let content = e.detail.value;
    if (content != "") {
      this.setData({
        select: false
      })
    } else {
      this.setData({
        select: true
      })
    }
  },
  submitFeedback: function (e) {
    console.log(e);
    console.log(this.data);
    let feedback_type_id = this.data.feedback;//反馈类型ID
    if (feedback_type_id == undefined){
      wx.showToast({
        title: '请选择分类',
        icon: 'warm',
        duration: 1500,
        mask: true,
      })
      return;
    }
    let content = e.detail.value.content; //反馈内容
    let save_path = this.data.imgsavepath;//反馈图片地址
    let phone = e.detail.value.phone;
    console.log(feedback_type_id);

    wx.request({
      url: API + 'app_userfeedback',
      data: {
        'usercontent': usercontent,
        'content': content,
        'save_path': save_path,
        'feedback_type_id': feedback_type_id,
        'phone': phone
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        if (res.data == 1) {
          wx.showToast({
            title: '提交成功',
            duration: 1000,
            mask: true,
            success: function (res) {
              wx.navigateBack({
                delta: 1,
              })
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
        console.log(res);
      },
    })
  },

  //点击预览图片
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

  },
})

function upload(page, path) {
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    wx.uploadFile({
      url: API + '/uploadfile',
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}