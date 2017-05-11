// pages/home/about.js

function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    about:""
  },
  onLoad:function(options){
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    var aboutUs=`<!DOCTYPE html>
<html>
 <head></head> 
 <body> 
  <div id="bd"> 
   <div class="wp"> 
    <div class="article"> 
     <h1>e运河服务平台</h1> 
     <p class="time">时间：2017-02-15 14:30:12</p> 
     <div class="article-con"> 
      <section style="margin: 0px; padding: 10px 8px; max-width: 100%; word-wrap: break-word !important; overflow-wrap: break-word !important;"> 
       <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" danmu-list="{{danmuList}}" enable-danmu danmu-btn controls></video>
       <p style="margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: 微软雅黑; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">公司旗下“e运河”网，着力运用信息科技技术，系统性优化工商流通领域服务模式与效率。为原材料、制造、商贸、运输、物流等企业，提供产业信息服务与电子商务交易平台。“e运河”网，运用网络信息技术，优化流通领域服务模式：为工矿、商贸、物流、航运、交通等行业和管理部门，提供行业信息服务；为原料、制造、商贸、运输、物流等企业，提供电子商务服务；为制造业提供工业4.0版，智慧物联网交互枢纽及联网应用服务。</span></p> 
      </section> 
      <section class="" data-source="bj.96weixin.com" style="margin: 0px; padding: 0px 5px; max-width: 100%; line-height: 18.5714px; border: 1px dashed transparent; word-wrap: break-word !important; overflow-wrap: break-word !important;"> 
       <section style="margin: 10px 0px 10px 10px; padding: 0px; max-width: 100%; border-radius: 0px 5px 5px 0px; word-wrap: break-word !important; overflow-wrap: break-word !important;"> 

       
       
        权威合作；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">近年来，政策暖风频吹，航运升级加速。各部门政府从思想上、政策上、资金上对内河航运发展给予了大力支持，使内河航运不再是交通运输发展的短板，从而真正成为综合交通运输体系的重要组成部分。e运河平台已和中信银行建立合作关系，来保障支付安全。我们与水运公司、物流公司、第三方、大型船厂，港口等都展开了良好的合作，以互利共赢为目标，携手打造内河航运第一平台，共同进步。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 宋体; margin: 0px; padding: 0px; max-width: 100%; line-height: 28.5px; font-size: 19px; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85d4fab280.gif" style="font-family: 微软雅黑; max-width: 100%; width: 538px;" /><br style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; color: rgb(122, 68, 66); font-size: 18px; line-height: 1.5em; word-wrap: break-word !important;">诚信体制；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">e运河平台将会在用户入驻该平台前设置关卡，对注册的新用户进行实名认证。 淘汰那些信用差的客户，优胜劣汰。对船主、货主、第三方、港口进行考核，确保信息真实可靠并利用AIS技术，搭建基于运河电子图的船舶动态查询系统,用户可免费进行船位查询，进行货物跟踪。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85d6b10f44.gif" style="max-width: 100%; width: 538px;" /><br /></span></p> 
           </section> 
           <p style="margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(103, 106, 108); font-size: 13px; line-height: 2em; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;"><span style="font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; color: rgb(62, 62, 62); line-height: 25.6px;">➁.</span>配套服务：</span></p> 
           <section style="margin: 0px; padding: 10px 8px; max-width: 100%; word-wrap: break-word !important; word-break: normal !important; overflow-wrap: break-word !important;"> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">私定制服务；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">用户只需要选择货物的出发地和目的地、填写货物的基本信息以及发货时间，把要求填写完整后提交订单，我们就可以做到一站式服务，服务到家</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">，</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">用户注明船只信息、货物类型、出港时间后，我们会根据实时资讯信息，让船只从码头到船闸达到最畅通当货物需要陆运和航运转化时，注明目的地，货物的信息，想要选择的运输车辆类型，我们就会为用户选择最合适的方案根据货物的到港时间，推荐合适的码头，节约装卸时间，提高效率，降低运输成本。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85d7cd5747.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">紧急救助；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">在航行过程中，船只出现故障时，呼叫紧急救助，根据船只定位信息，我们会以最快的速度到达用户的身边，提供帮助配套项目：当船只需要维修检查时，我们提供养护修理服务，有配套的零件设备可以维修更换，并检查船只的设备状况，保证安全出行。有大型的船厂为用户提供所需船只，确保船只质量可靠安全。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85d8cd3a5c.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">超市到船；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">当船上的粮食储备，生活日用品等消耗品出现短缺时，只需呼叫我们，我们会以最快的速度送达，从而不影响用户的日常生活。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85da62b771.gif" style="max-width: 100%; width: 538px;" /><br /></span></p> 
           </section> 
           <p style="margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(103, 106, 108); font-size: 13px; line-height: 2em; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;"><span style="font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; color: rgb(62, 62, 62); line-height: 25.6px;">➂.</span>简单快捷<span style="margin: 0px; padding: 0px; max-width: 100%; font-weight: bold; word-wrap: break-word !important;">：</span></span></p> 
           <section style="margin: 0px; padding: 10px 8px; max-width: 100%; word-wrap: break-word !important; word-break: normal !important; overflow-wrap: break-word !important;"> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">叫船服务；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">根据实时定位信息，搜索周围闲置船只，可即时叫船，极大程度上节约船主和货主的时间和物流成本。提前预约船只后，一方面相关信息推送到条件匹配的船主手机上，另一方面叫船信息会出现在船主入口中的货源信息，船主自行选择。这样实现了船只资源的有效利用和合理化配置。</span><br style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">支付；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">e运河提供多种在线支付的方式，避免支付方式的单一，操作方式简单通俗，可以帮助用户轻松实现在线支付。在多种多样的支付方式中，我们最重要的特色是可以选择“打白条支付”，即货主不需要提前支付现金，通过“打白条”直接下单。</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">支付交易完成后，订单会推送到后台。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85de2e7871.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">签约；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">用户确认订单信息后，可完全实现在线签约。合同的法律效力有保障，省去线下签约带来的不便，提高签约效率。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85df042fb8.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">信息</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">；可以查看附近运河信息，如仓库、港口、船闸等情况和分布，了解港口、船闸、仓库等相关的详细信息和实时变化，科学安排航运路线和货物仓储。可以查看附近路况信息，了解实时路况，合理安排和及时调整货运路线，避免和减少交通拥堵对货运物流的影响，节约时间，节省物流成本，提高经济效益。</span></p> 
           </section> 
           <p style="margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(103, 106, 108); font-size: 13px; line-height: 2em; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;"><span style="font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; color: rgb(62, 62, 62); line-height: 25.6px;">➃.</span>贴心智能：</span></p> 
           <section style="margin: 0px; padding: 10px 8px; max-width: 100%; word-wrap: break-word !important; word-break: normal !important; overflow-wrap: break-word !important;"> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">安防；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">通过服务信息、图象传输存储、数据存储和处理，可以实现全船监控，守护货物安全。智能安防报警系统是由传感器、功能键、探测器及执行器共同构成的安防体系，发生情况时，可及时报警。无论是谁进出周围环境，系统会自动的快速拍照记录，留下可供查看的信息。利用</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">AIS技术，搭建基于运河电子图的船舶动态查询系统,用户可免费船位查询，进行货物跟踪。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">多种支付方式；&nbsp;</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">一个完整的交易只有费用支付后才能算是交易完成，网络平台作为第三方，支付环节有一定的难度。但e运河的多种支付方式在一定程度上解决了这个问题，除了线下支付，更强大的是完全线上支付功能，使整个支付环节通畅，提高了支付效率。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85f5278f0a.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">信息:&nbsp;</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">e运河平台通过线上线下信息整合，为用户提供关于航运的各种航务信息，如政务、船闸、货物、码头、天气、水温、船员等信息，极大程度上降低人力物力财力。在货物的运送过程中e运河平台会及时掌握船只和货物的实时信息，不仅能够在极大程度上保障货物的安全，而且还有助于货主船主了解即时情况。此服务是对订单内的时间点进行提醒，能够及时提醒用户，以防出现时间和财产上的损失。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;">资产；</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">e运河平台为用户提供了理财、贷款以及投资等方面的服务，能够为用户带来经济效应，从而达到互利共赢的结果。通过投资和贷款等方式既可以促进资金的流动，又帮助用户解决资金流转的困难。</span></p> 
           </section> 
           <p style="margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(103, 106, 108); font-size: 13px; line-height: 2em; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 1.5em; color: rgb(122, 68, 66); font-size: 18px; word-wrap: break-word !important; background-color: transparent;"><span style="font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; color: rgb(62, 62, 62); line-height: 25.6px;">➄.</span>互惠共赢</span></p> 
           <section style="margin: 0px; padding: 10px 8px; max-width: 100%; word-wrap: break-word !important; word-break: normal !important; overflow-wrap: break-word !important;"> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">相比以往，</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">e</span><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">运河一改之前和中介的竞争关系，变成良好合作的伙伴，与中介开展广泛的合作，中介聚集和提供大批船只和货物信息，打开业务拓展面这方面我们有巨大的优势，而且平台可以实现与合作方以及合作企业平台的连接。</span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; text-align: center; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;"><img src="http://www.yuyigufen.com/Public/Uploads/2017-04-20/58f85e35808eb.gif" style="max-width: 100%; width: 538px;" /><br style="margin: 0px; padding: 0px; max-width: 100%; word-wrap: break-word !important;" /></span></p> 
            <p style="font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; font-size: 13px; line-height: 18.5714px; white-space: pre-wrap; word-wrap: break-word !important; word-break: normal !important; background-color: rgb(244, 244, 244);"><span style="font-family: 微软雅黑; margin: 0px; padding: 0px; max-width: 100%; font-size: 18px; line-height: 1.6; word-wrap: break-word !important;">我们与港口、水运公司、物流公司、大型船厂等都开展良好的合作，对于货主、船、港口三方的调度合作理想可以实现互利共赢，共同进步。</span></p> 
           </section> 
          </section>
         </section>
        </section>
       </section>
      </section>
     </div> 
    </div> 
   </div> 
  </div>  
 </body>
</html>
`;
// eyunhe="http://mp.weixin.qq.com/s/S4FMG8O7sexbiYgtoI6H3g";
 WxParse.wxParse('aboutUs', 'html', aboutUs, that, 5);
  // WxParse.wxParse('aboutUs', 'html', eyunhe, that, 5); 
  },

onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
    data: {
        src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }]
    },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})