// pages/shopCart/nodata/nodata.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodataFlag:{
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goIndex () {
      console.log()
      wx.redirectTo({
        url: '/pages/index/index/index',
      })
    }
  }
})
