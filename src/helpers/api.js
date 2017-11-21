const get = (url, cb) => wx.request({
  url,
  header: {
    'DAIWAN-API-TOKEN': 'AEDD5-EEA1D-D14C8-48E4A'
  },
  success: cb
})

export const getChampion = (cb) => get('http://pvp.qq.com/web201605/js/herolist.json', cb)
export const getTools = (cb) => get('http://pvp.qq.com/web201605/js/item.json', cb)
export const getSummoner = (cb) => get('http://pvp.qq.com/web201605/js/summoner.json', cb)
