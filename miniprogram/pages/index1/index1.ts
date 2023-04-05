Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
  },
  onLoad() {
    // 异步得到信息  
    const info = wx.getSystemInfoSync();
    // 得到屏幕的宽度
    const width = info.windowWidth;
    // 得到屏幕的高度
    const height = info.windowHeight;
    // 得到屏幕的像素比率
    const dpi = info.pixelRatio;
    // 设置数据
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  },
})