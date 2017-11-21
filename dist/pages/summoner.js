'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../helpers/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summoner = function (_wepy$page) {
  _inherits(Summoner, _wepy$page);

  function Summoner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Summoner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Summoner.__proto__ || Object.getPrototypeOf(Summoner)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      summoners: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Summoner, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      (0, _api.getSummoner)(function (_ref2) {
        var data = _ref2.data;

        self.summoners = data;
        self.$apply();
      });
    }
  }]);

  return Summoner;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Summoner , 'pages/summoner'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1vbmVyLmpzIl0sIm5hbWVzIjpbIlN1bW1vbmVyIiwiZGF0YSIsInN1bW1vbmVycyIsInNlbGYiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEksR0FBTztBQUNMQyxpQkFBVztBQUROLEs7Ozs7OzZCQUlHO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsNEJBQVksaUJBQVk7QUFBQSxZQUFWRixJQUFVLFNBQVZBLElBQVU7O0FBQ3RCRSxhQUFLRCxTQUFMLEdBQWlCRCxJQUFqQjtBQUNBRSxhQUFLQyxNQUFMO0FBQ0QsT0FIRDtBQUlEOzs7O0VBWG1DLGVBQUtDLEk7O2tCQUF0QkwsUSIsImZpbGUiOiJzdW1tb25lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQge2dldFN1bW1vbmVyfSBmcm9tICcuLi9oZWxwZXJzL2FwaS5qcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdW1tb25lciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHN1bW1vbmVyczogW11cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgZ2V0U3VtbW9uZXIoKHtkYXRhfSkgPT4ge1xuICAgICAgICBzZWxmLnN1bW1vbmVycyA9IGRhdGFcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==