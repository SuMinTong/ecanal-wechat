
// var api = "https://aaafs.top/";
var api = "http://admin.eyunhe.com.cn/";
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

// const Promise = require('./Promise')

const REGX_HTML_DECODE = /&\w{1,};|&#\d{1,};/g;
const HTML_DECODE = {
        "&lt;"  : "<", 
        "&gt;"  : ">", 
        "&amp;" : "&", 
        "&nbsp;": " ", 
        "&quot;": "\"", 
        "&copy;": "©"
   };


function login(){
  return new Promise((resolve,reject) => wx.login({
    success:resolve,
    fail:reject
  }))
}

function getUserInfo(){
  return login().then(res => new Promise((resolve,reject) => 
    wx.getUserInfo({
      success:resolve,
      fail:reject
    })
  ))
}

function decodeHtml(str){
  return (typeof str != "string") ? str :
    str.replace(REGX_HTML_DECODE,function($0){
      var c  = HTML_DECODE[$0]
      if(c === undefined){
          var m = $0.match(/\d{1,}/);
          if(m){
              var cc = m[0];
              cc = (cc === 0xA0) ? 0x20 : cc;
              c = String.fromCharCode(cc);
          }else{
              c = $0;
          }
      }
      return c;
    }) 
}

function makeArray(num,val){
  var arr = []
  for(var i = 0; i < num ; i++){
    arr.push(typeof val !== 'undefined' ? val : i)
  }
  return arr
}

const categorysJson = require('./categorys')
function getCategorys(){
  return new Promise((resolve,reject) => {
    // [{id:1,order:2...}]
    var liked = wx.getStorageSync('USER_COLLECT') || [];
    var categorys = categorysJson.data

    categorys.forEach(category => {
      if(!liked.length){
        category.selected = true
      }else{
        category.selected = false
        liked.forEach(like => 
          category.lanmu_id === like.id && (category.selected = true)
        )
      }
    })

    resolve(categorys)
  })
}


function requstGet(url,data){
  return requst(url,'GET',data)
}

function requstPost(url,data){
  return requst(url,'POST',data)
}





