// pages/customerService/customerService.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      observer(val) {
        console.log(val)
      }
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
    go(e){
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  }
})
