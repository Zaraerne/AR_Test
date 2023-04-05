// components/x_fram_start/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    handleTouchModel: function ({detail}: any) {
      const {target} = detail.value;
      const id = target.id;
      
      wx.showToast({title: `点击了模型： ${id}`});
    }
  }
})
