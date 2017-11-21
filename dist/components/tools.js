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

var ToolsList = function (_wepy$component) {
  _inherits(ToolsList, _wepy$component);

  function ToolsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolsList.__proto__ || Object.getPrototypeOf(ToolsList)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolsList, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      (0, _api.getTools)(function (_ref2) {
        var data = _ref2.data;

        self.tools = data;
        self.$apply();
      });
    }
  }]);

  return ToolsList;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    tools: []
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
};

exports.default = ToolsList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLmpzIl0sIm5hbWVzIjpbIlRvb2xzTGlzdCIsInNlbGYiLCJkYXRhIiwidG9vbHMiLCIkYXBwbHkiLCJjb21wb25lbnQiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsImxpc3QiLCJwdXNoIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFzQlQ7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQSx5QkFBUyxpQkFBWTtBQUFBLFlBQVZDLElBQVUsU0FBVkEsSUFBVTs7QUFDbkJELGFBQUtFLEtBQUwsR0FBYUQsSUFBYjtBQUNBRCxhQUFLRyxNQUFMO0FBQ0QsT0FIRDtBQUlEOzs7O0VBNUJvQyxlQUFLQyxTOzs7OztPQUMxQ0gsSSxHQUFPO0FBQ0xDLFdBQU87QUFERixHO09BR1BHLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDRDtBQUpNLEc7T0FPVEUsTyxHQUFVO0FBQ1JDLE9BRFEsaUJBQ0Q7QUFDTDtBQUNBTixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLE1BQXpCO0FBQ0QsS0FKTztBQUtSSyxPQUxRLGlCQUtEO0FBQ0wsVUFBSUMsTUFBTSxLQUFLQyxJQUFMLENBQVVWLE1BQXBCO0FBQ0EsV0FBS1UsSUFBTCxDQUFVQyxJQUFWLENBQWUsRUFBQ0MsSUFBSUgsTUFBTSxDQUFYLEVBQWNJLE9BQU8sV0FBV0osR0FBaEMsRUFBZjtBQUNEO0FBUk8sRzs7O2tCQVhTakIsUyIsImZpbGUiOiJ0b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQge2dldFRvb2xzfSBmcm9tICcuLi9oZWxwZXJzL2FwaS5qcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sc0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHRvb2xzOiBbXVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLm5hbWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgLy8gdGhpcy5udW0gPSB0aGlzLm51bSArIDFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgIH0sXG4gICAgICBhZGQgKCkge1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5saXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7aWQ6IGxlbiArIDEsIHRpdGxlOiAndGl0bGVfJyArIGxlbn0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGdldFRvb2xzKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgc2VsZi50b29scyA9IGRhdGFcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==