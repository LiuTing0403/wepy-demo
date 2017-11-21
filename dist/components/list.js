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

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      (0, _api.getChampion)(function (_ref2) {
        var data = _ref2.data;

        self.champion = data;
        self.$apply();
      });
    }
  }]);

  return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    champion: []
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

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsInNlbGYiLCJkYXRhIiwiY2hhbXBpb24iLCIkYXBwbHkiLCJjb21wb25lbnQiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsImxpc3QiLCJwdXNoIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFzQlQ7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQSw0QkFBWSxpQkFBWTtBQUFBLFlBQVZDLElBQVUsU0FBVkEsSUFBVTs7QUFDdEJELGFBQUtFLFFBQUwsR0FBZ0JELElBQWhCO0FBQ0FELGFBQUtHLE1BQUw7QUFDRCxPQUhEO0FBSUQ7Ozs7RUE1QitCLGVBQUtDLFM7Ozs7O09BQ3JDSCxJLEdBQU87QUFDTEMsY0FBVTtBQURMLEc7T0FHUEcsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRCxJQUF2RTtBQUNEO0FBSk0sRztPQU9URSxPLEdBQVU7QUFDUkMsT0FEUSxpQkFDRDtBQUNMO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsTUFBekI7QUFDRCxLQUpPO0FBS1JLLE9BTFEsaUJBS0Q7QUFDTCxVQUFJQyxNQUFNLEtBQUtDLElBQUwsQ0FBVVYsTUFBcEI7QUFDQSxXQUFLVSxJQUFMLENBQVVDLElBQVYsQ0FBZSxFQUFDQyxJQUFJSCxNQUFNLENBQVgsRUFBY0ksT0FBTyxXQUFXSixHQUFoQyxFQUFmO0FBQ0Q7QUFSTyxHOzs7a0JBWFNqQixJIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7Z2V0Q2hhbXBpb259IGZyb20gJy4uL2hlbHBlcnMvYXBpLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY2hhbXBpb246IFtdXHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLm5hbWV9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhcCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5udW0gPSB0aGlzLm51bSArIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxyXG4gICAgICB9LFxyXG4gICAgICBhZGQgKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2goe2lkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW59KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGdldENoYW1waW9uKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBzZWxmLmNoYW1waW9uID0gZGF0YVxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==