
var page =0;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;

Page({
  data:{
    hidden:true,
    list:[],
    scrollTop : 0,
    scrollHeight:0,
    navTab: [],
    currentNavtab: "0",
    newInfo:[],
    "nav_scroll_left" : 0,
    load:true,
    hidden:false
  },
bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  }, 

  onLoad:function(){
      this.getNavTab();
      this.getList(14);
      this.switchTab();
  },

  getNavTab:function(code){
    var self = this;
    wx.request({
      url: 'http://www.eyunhe.com.cn/index.php/Home/articles/getCat?CatId=13',
      data: {},
      method: 'GET', 
      // header: {}, // 设置请求的 header
      success: function(res){
         console.log(res.data);
         this.cid=res.data[0].cid
        self.setData({
              "cates" : res.data,
              "cid":res.data
          });
      },
    })

  },

  getList:function(code){
    var that=this;
    wx.request({
      url: 'http://www.eyunhe.com.cn/index.php/home/product?cid='+code,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        var data=res.data;
        console.log("列表页",res);
        that.setData({
            newInfo:data,
            hidden: true,
        });
      },
    })
  },

  scroll:function(event){
     this.setData({
         scrollTop : event.detail.scrollTop
     });
  },
 
   switchTab:function(e) {
      var that = this; 
      that.setData( {  
        currentNavtab: e.currentTarget.dataset.index
      })    
     console.log(e.currentTarget.dataset.cid);
      var nav_scroll_left = 0;
      this.cid = e.currentTarget.dataset.cid;
      this.current_index = e.currentTarget.dataset.index;
      var nav_temp = 0;
      if(this.data.current_index == undefined || this.data.current_index < this.current_index) {
         if(this.data.cates.length  - this.current_index >= 2 &&  this.current_index >= 2) {
            nav_scroll_left =  parseInt((this.current_index - 2)) *  this.data.windowWidth + this.data.windowWidth / 5;
            console.log(this.data.windowWidth);
            this.setData({"nav_scroll_left" : nav_scroll_left});
         }  
      } else if(this.data.current_index > this.current_index) {
        if(this.data.cates.length - this.current_index > 3) {
          if(this.current_index > 1) {
            nav_scroll_left =  -(parseInt((this.current_index - 2)) *  this.data.windowWidth - this.data.windowWidth / 5);
            console.log(nav_scroll_left);
          }
          this.setData({"nav_scroll_left" : nav_scroll_left});
        }  
      }
      this.setData({"current_index" : this.current_index});
      this.refresh(e.currentTarget.dataset.cid);
      
  },
   refresh:function(e) {
    //  this.loadding();
     this.setData({
      newInfo:"",
      "scroll_Top" : -Math.random()
    });
    this.page = 1;
    this.getList(e);
  },  
})