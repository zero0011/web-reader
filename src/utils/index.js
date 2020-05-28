function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

// 数据库请求
const db = wx.cloud.database();
const request_interface = db.collection('test').doc('jPGtt7QxCXrwS1CHR8in6QV0qFRcUnS5uJjLUWsBJfExW1D3');

// 批量下载图片
export function downloadFile(baseUrl, imgs, callback) {
  imgs.forEach(img => {
    wx.cloud.downloadFile({
      fileID: baseUrl + img + '.png'
    }).then(res => {
        // 下载成功的回调
        callback(img,res)
    })
  });
}


export default {
  formatNumber,
  formatTime,
  request_interface,
  downloadFile
}
