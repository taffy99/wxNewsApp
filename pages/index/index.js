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
        isSelected:true
      },
      {
        navText: '国际',
        isSelected: false
      },
      {
        
        navText: '财经',
        isSelected: false
      },
      {
       
        navText: '娱乐',
        isSelected: false
      },
      {
        navText: '军事',
        isSelected: false
      },
      {
        navText: '体育',
        isSelected: false
      },
      {
        navText: '其他',
        isSelected: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
      navList: navlist
    })
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
