'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChampionCell = function (_wepy$component) {
  _inherits(ChampionCell, _wepy$component);

  function ChampionCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChampionCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChampionCell.__proto__ || Object.getPrototypeOf(ChampionCell)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      item: {}
    }, _this.props = {
      item: Object
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChampionCell, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.item);
    }
  }]);

  return ChampionCell;
}(_wepy2.default.component);

exports.default = ChampionCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGwuanMiXSwibmFtZXMiOlsiQ2hhbXBpb25DZWxsIiwiZGF0YSIsIml0ZW0iLCJwcm9wcyIsIk9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBR1BDLEssR0FBUTtBQUNORCxZQUFNRTtBQURBLEs7Ozs7OzZCQUdDO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLSixJQUFqQjtBQUNEOzs7O0VBVHVDLGVBQUtLLFM7O2tCQUExQlAsWSIsImZpbGUiOiJjZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW1waW9uQ2VsbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgaXRlbToge31cbiAgICB9XG4gICAgcHJvcHMgPSB7XG4gICAgICBpdGVtOiBPYmplY3RcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtKVxuICAgIH1cbiAgfVxuIl19