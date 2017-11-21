'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../helpers/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummonerList = function (_wepy$component) {
  _inherits(SummonerList, _wepy$component);

  function SummonerList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SummonerList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SummonerList.__proto__ || Object.getPrototypeOf(SummonerList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      summoners: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SummonerList, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      getTools(function (_ref2) {
        var data = _ref2.data;

        self.summoners = data;
        self.$apply();
      });
    }
  }]);

  return SummonerList;
}(_wepy2.default.component);

exports.default = SummonerList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1vbmVyLmpzIl0sIm5hbWVzIjpbIlN1bW1vbmVyTGlzdCIsImRhdGEiLCJzdW1tb25lcnMiLCJzZWxmIiwiZ2V0VG9vbHMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXO0FBRE4sSzs7Ozs7NkJBSUc7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQUMsZUFBUyxpQkFBWTtBQUFBLFlBQVZILElBQVUsU0FBVkEsSUFBVTs7QUFDbkJFLGFBQUtELFNBQUwsR0FBaUJELElBQWpCO0FBQ0FFLGFBQUtFLE1BQUw7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFYdUMsZUFBS0MsUzs7a0JBQTFCTixZIiwiZmlsZSI6InN1bW1vbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7Z2V0U3VtbW9uZXJ9IGZyb20gJy4uL2hlbHBlcnMvYXBpLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bW1vbmVyTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgc3VtbW9uZXJzOiBbXVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBnZXRUb29scygoe2RhdGF9KSA9PiB7XG4gICAgICAgIHNlbGYuc3VtbW9uZXJzID0gZGF0YVxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19