// pages/newsDtail/newsDtail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[],//新闻内容
    time:'', //发布时间
    source:'', //来源
    title:'', //标题
    readCount:'', //阅读数
    newsId:'' //新闻id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
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
         //console.log(result);
         let content = result.content ;//新闻内容
         let date = result.date;//日期
         let time = result.date.split("T")[1].split(".")[0];//发布时间
         let source = result.source;//来源
         let title = result.title;//标题
         let readCount = result.readCount;//阅读数
          content.forEach(item=>{
           if(item.type=="image"){
             item.src = "http:"+item.src.replace("http:","");
           }
         })
         this.setData({
           newsId:id,
           content: content,
           time: time,
           source: source,
           title: title,
           readCount: readCount
         })
        }
      
      })
  },
  

  
})