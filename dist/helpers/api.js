'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var get = function get(url, cb) {
  return wx.request({
    url: url,
    header: {
      'DAIWAN-API-TOKEN': 'AEDD5-EEA1D-D14C8-48E4A'
    },
    success: cb
  });
};

var getChampion = exports.getChampion = function getChampion(cb) {
  return get('http://pvp.qq.com/web201605/js/herolist.json', cb);
};
var getTools = exports.getTools = function getTools(cb) {
  return get('http://pvp.qq.com/web201605/js/item.json', cb);
};
var getSummoner = exports.getSummoner = function getSummoner(cb) {
  return get('http://pvp.qq.com/web201605/js/summoner.json', cb);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJnZXQiLCJ1cmwiLCJjYiIsInd4IiwicmVxdWVzdCIsImhlYWRlciIsInN1Y2Nlc3MiLCJnZXRDaGFtcGlvbiIsImdldFRvb2xzIiwiZ2V0U3VtbW9uZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLFNBQWFDLEdBQUdDLE9BQUgsQ0FBVztBQUNsQ0gsWUFEa0M7QUFFbENJLFlBQVE7QUFDTiwwQkFBb0I7QUFEZCxLQUYwQjtBQUtsQ0MsYUFBU0o7QUFMeUIsR0FBWCxDQUFiO0FBQUEsQ0FBWjs7QUFRTyxJQUFNSyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNMLEVBQUQ7QUFBQSxTQUFRRixJQUFJLDhDQUFKLEVBQW9ERSxFQUFwRCxDQUFSO0FBQUEsQ0FBcEI7QUFDQSxJQUFNTSw4QkFBVyxTQUFYQSxRQUFXLENBQUNOLEVBQUQ7QUFBQSxTQUFRRixJQUFJLDBDQUFKLEVBQWdERSxFQUFoRCxDQUFSO0FBQUEsQ0FBakI7QUFDQSxJQUFNTyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNQLEVBQUQ7QUFBQSxTQUFRRixJQUFJLDhDQUFKLEVBQW9ERSxFQUFwRCxDQUFSO0FBQUEsQ0FBcEIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0ID0gKHVybCwgY2IpID0+IHd4LnJlcXVlc3Qoe1xuICB1cmwsXG4gIGhlYWRlcjoge1xuICAgICdEQUlXQU4tQVBJLVRPS0VOJzogJ0FFREQ1LUVFQTFELUQxNEM4LTQ4RTRBJ1xuICB9LFxuICBzdWNjZXNzOiBjYlxufSlcblxuZXhwb3J0IGNvbnN0IGdldENoYW1waW9uID0gKGNiKSA9PiBnZXQoJ2h0dHA6Ly9wdnAucXEuY29tL3dlYjIwMTYwNS9qcy9oZXJvbGlzdC5qc29uJywgY2IpXG5leHBvcnQgY29uc3QgZ2V0VG9vbHMgPSAoY2IpID0+IGdldCgnaHR0cDovL3B2cC5xcS5jb20vd2ViMjAxNjA1L2pzL2l0ZW0uanNvbicsIGNiKVxuZXhwb3J0IGNvbnN0IGdldFN1bW1vbmVyID0gKGNiKSA9PiBnZXQoJ2h0dHA6Ly9wdnAucXEuY29tL3dlYjIwMTYwNS9qcy9zdW1tb25lci5qc29uJywgY2IpXG4iXX0=