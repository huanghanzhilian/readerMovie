Page({
  onTap:function(){
    //路由跳转
    // wx.navigateTo({
    //   url:"../posts/post"
    // });
    wx.switchTab({
	    url: "../posts/post"
	});
  }
})