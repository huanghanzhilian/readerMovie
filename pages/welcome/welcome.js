Page({
  onTap:function(){
    //路由跳转
    wx.navigateTo({
      url:"../posts/post"
    });
    //重定向 由当前路由平行跳转
    // wx.redirectTo({
    //   url:"../posts/post"
    // })
  },
  onteztop:function(){
    console.log(" ssssonteztop")
  },
  onHide:function(){
    // 当页面隐藏
     console.log("onHide")
  },
  onUnload:function(){
    //当页面关闭
     console.log("onUnload")
  }
})