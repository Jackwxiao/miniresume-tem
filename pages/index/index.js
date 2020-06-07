// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: '你的名字',
    spell: '名字拼音',
    job: '你想应聘的职位',
    tel: '你的电话 ',
    sex: "性别",
    age: 22,
    email: '你的邮箱',
    address: '你的住址',
    skill: [
      { name: '技能一', percent: 70},
      { name: '技能二', percent: 70 },
      { name: '技能三', percent: 80 },
      { name: '技能四', percent: 50 },
    ],
    edu:[
      {
        school: '你的学校',
        major: '你的专业',
        year: '在校时间如2015-2019',
        desc: '描述一下你的专业'
      }
    ],
    work:[
      {
        project:"项目名",
        duty: 'xx负责人',
        cycle: '开发周期' ,
        desc: '项目描述......'
      },
      {
        project:"项目名",
        duty: 'xx负责人',
        cycle: '开发周期',
        desc: '项目描述'
      },
      {
        project: "项目名",
        duty: 'xx负责人',
        cycle: '开发周期',
        desc: '项目描述'
      },
      {
        project: "项目名",
        duty: 'xx负责人',
        cycle: '开发周期',
        desc: '项目描述'
      },
    ],
    work2:[
      {
        project: "工作经验一",
        duty: 'xx负责人',
        cycle: '在职时间',
        desc: '经验描述'
      },
      {
        project: "工作经验二",
        duty: 'xx负责人',
        cycle: '在职时间',
        desc: '经验描述'
      },
      {
        project: "工作经验三",
        duty: 'xx负责人',
        cycle: '在职时间',
        desc: '经验描述'
      },
      {
        project: "工作经验四",
        duty: 'xx负责人',
        cycle: '在职时间',
        desc: '经验描述'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let width = wx.getSystemInfoSync().windowWidth
    let height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width: width,
      height: height
    })
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
