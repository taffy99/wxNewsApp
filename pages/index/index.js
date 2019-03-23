//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[
      {
        navText:'国内',
        navcode:"gn",
        isSelected:true
      },
      {
        navText: '国际',
        navcode: "gj",
        isSelected: false
      },
      {
        
        navText: '财经',
        navcode: "cj",
        isSelected: false
      },
      {
       
        navText: '娱乐',
        navcode: "yl",
        isSelected: false
      },
      {
        navText: '军事',
        navcode: "js",
        isSelected: false
      },
      {
        navText: '体育',
        navcode: "ty",
        isSelected: false
      },
      {
        navText: '其他',
        navcode: "other",
        isSelected: false
      }
    ],
    newsList:[], //新闻列表
    navSelected:"gn" //选中导航
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList(this.data.navSelected);
  },
  getNewsList(navcode,callBack){
      wx.request({
        url: 'https://test-miniprogram.com/api/news/list',
        data:{
          type: navcode
        },
        success:(res)=>{
          let newslist = res.data.result;
          //console.log(newslist);
          newslist.forEach(item=>{
            item.date = item.date.replace("T"," ").replace(".000Z","");
            item.firstImage = "http:"+ item.firstImage;
          })
          this.setData({
            newsList:newslist
          })
        },
        complete:()=>{
          callBack && callBack();
        }
      })
  },
  //导航栏事件
  navSelect(e){
    let selectIndex = e.target.dataset.index;
    let navlist = [];
    for(let i =0;i<this.data.navList.length;i++){
       navlist.push(this.data.navList[i]);
    };
    navlist.forEach((item,index)=>{
      if (selectIndex == index){
        item.isSelected = true;
      }else{
        item.isSelected = false;
      }
    });
    this.setData({
      navList: navlist,
      navSelected:navlist[selectIndex].navcode
    });
    this.getNewsList(this.data.navSelected);
  },
  //跳转新闻详情页
  toNewsdetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id='+id
    });
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
    this.getNewsList(this.data.navSelected,()=>{
      wx.stopPullDownRefresh();
    })
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
