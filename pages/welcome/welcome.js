Page({
  onTap:function(){
    //路由跳转
    // wx.navigateTo({
    //   url:"../posts/post"
    // });
    wx.switchTab({
	    url: "../posts/post"
	});
  },
  openPlugin(event){
    var postName = event.target.dataset.postname;
    var baseUrl='plugin-private://wx3da652f5c8b7700c/pages/';
    var goUrl='';
    var appid='bddf948c219eda2a';
    var uid='52';
    var phone='18231321037';
    // var appid='';
    // var uid='';
    // var phone='';
    switch (postName) {
        case 'home':
            goUrl= `${baseUrl}home/home?appid=${appid}&uid=${uid}&phone=${phone}`;
            break;
        case 'goodsList':
            goUrl= `${baseUrl}goodsList/goodsList?appid=${appid}&uid=${uid}&phone=${phone}`;
            break;
        case 'detail':
            goUrl= `${baseUrl}detail/detail?appid=${appid}&uid=${uid}&phone=${phone}&id=1695`;
            break;
        case 'orderConfirm':
            goUrl= `${baseUrl}orderConfirm/orderConfirm?appid=${appid}&uid=${uid}&phone=${phone}&goods_id=1695&goods_num=1`;
            break;
        case 'orderResult':
            goUrl= `${baseUrl}orderResult/orderResult?appid=${appid}&uid=${uid}&phone=${phone}&psyStatus=1&order_id=7260`;
            break;
        default:
            goUrl= `${baseUrl}home/home?appid=${appid}&uid=${uid}&phone=${phone}`;
    }
    wx.navigateTo({
      url:goUrl
    })
  },
})