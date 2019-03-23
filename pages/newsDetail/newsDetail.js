// pages/newsDtail/newsDtail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[],
    date:'',
    source:'',
    title:'',
    readCount:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getNewsdetail(options.id);    
  },
  getNewsdetail(id){
      wx.request({
        url: 'https://test-miniprogram.com/api/news/detail',
        data:{
          id:id
        },
        success:(res)=>{
          let result = res.data.result;
         console.log(result);
         let content = result.content;//新闻内容
         let date = result.date;//日期
         let source = result.source;//来源
         let title = result.title;//标题
         let readCount = result.readCount;//阅读数
          content.forEach(item=>{
           if(item.type=="image"){
             item.src = "http:"+item.src;
           }
         })
         this.setData({
           content: content,
           date: date,
           source: source,
           title: title,
           readCount: readCount
         })

        }
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