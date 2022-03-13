(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/chitterModel.js
  var require_chitterModel = __commonJS({
    "lib/chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
        }
        addPeep(peep) {
          this.peeps.unshift(peep);
        }
        getPeeps() {
          return this.peeps;
        }
        setPeeps(peeps) {
          this.peeps = peeps;
        }
        removePeep(peepId) {
          this.peeps.splice(this.peeps.findIndex((peep) => peep.id === peepId), 1);
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // node_modules/relative-time-format/commonjs/LocaleDataStore.js
  var require_LocaleDataStore = __commonJS({
    "node_modules/relative-time-format/commonjs/LocaleDataStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getDefaultLocale = getDefaultLocale;
      exports.setDefaultLocale = setDefaultLocale;
      exports.getLocaleData = getLocaleData;
      exports.addLocaleData = addLocaleData;
      exports.resolveLocale = resolveLocale;
      var defaultLocale = "en";
      var localesData = {};
      var lowercaseLocaleLookup = {};
      function getDefaultLocale() {
        return defaultLocale;
      }
      function setDefaultLocale(locale) {
        defaultLocale = locale;
      }
      function getLocaleData(locale) {
        return localesData[locale];
      }
      function addLocaleData(localeData) {
        if (!localeData) {
          throw new Error("No locale data passed");
        }
        localesData[localeData.locale] = localeData;
        lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
      }
      function resolveLocale(locale) {
        if (localesData[locale]) {
          return locale;
        }
        if (lowercaseLocaleLookup[locale.toLowerCase()]) {
          return lowercaseLocaleLookup[locale.toLowerCase()];
        }
      }
    }
  });

  // node_modules/relative-time-format/commonjs/resolveLocale.js
  var require_resolveLocale = __commonJS({
    "node_modules/relative-time-format/commonjs/resolveLocale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = resolveLocale;
      exports.resolveLocaleLookup = resolveLocaleLookup;
      var _LocaleDataStore = require_LocaleDataStore();
      function resolveLocale(locale) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var localeMatcher = options.localeMatcher || "lookup";
        switch (localeMatcher) {
          case "lookup":
            return resolveLocaleLookup(locale);
          case "best fit":
            return resolveLocaleLookup(locale);
          default:
            throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
        }
      }
      function resolveLocaleLookup(locale) {
        var resolvedLocale = (0, _LocaleDataStore.resolveLocale)(locale);
        if (resolvedLocale) {
          return resolvedLocale;
        }
        var parts = locale.split("-");
        while (locale.length > 1) {
          parts.pop();
          locale = parts.join("-");
          var _resolvedLocale = (0, _LocaleDataStore.resolveLocale)(locale);
          if (_resolvedLocale) {
            return _resolvedLocale;
          }
        }
      }
    }
  });

  // node_modules/relative-time-format/commonjs/PluralRuleFunctions.js
  var require_PluralRuleFunctions = __commonJS({
    "node_modules/relative-time-format/commonjs/PluralRuleFunctions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var $ = {
        af: function af(n) {
          return n == 1 ? "one" : "other";
        },
        am: function am(n) {
          return n >= 0 && n <= 1 ? "one" : "other";
        },
        ar: function ar(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
          return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
        },
        ast: function ast(n) {
          var s = String(n).split("."), v0 = !s[1];
          return n == 1 && v0 ? "one" : "other";
        },
        be: function be(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
          return n10 == 1 && n100 != 11 ? "one" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "few" : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? "many" : "other";
        },
        br: function br(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
          return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? "one" : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? "two" : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? "few" : n != 0 && t0 && n1000000 == 0 ? "many" : "other";
        },
        bs: function bs(n) {
          var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
          return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
        },
        ceb: function ceb(n) {
          var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
          return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
        },
        cs: function cs(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1];
          return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
        },
        cy: function cy(n) {
          return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 ? "few" : n == 6 ? "many" : "other";
        },
        da: function da(n) {
          var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n;
          return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
        },
        dsb: function dsb(n) {
          var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
          return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
        },
        dz: function dz(n) {
          return "other";
        },
        es: function es(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
          return n == 1 ? "one" : i != 0 && i1000000 == 0 && v0 ? "many" : "other";
        },
        ff: function ff(n) {
          return n >= 0 && n < 2 ? "one" : "other";
        },
        fr: function fr(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
          return n >= 0 && n < 2 ? "one" : i != 0 && i1000000 == 0 && v0 ? "many" : "other";
        },
        ga: function ga(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n;
          return n == 1 ? "one" : n == 2 ? "two" : t0 && n >= 3 && n <= 6 ? "few" : t0 && n >= 7 && n <= 10 ? "many" : "other";
        },
        gd: function gd(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n;
          return n == 1 || n == 11 ? "one" : n == 2 || n == 12 ? "two" : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? "few" : "other";
        },
        he: function he(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
          return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
        },
        is: function is(n) {
          var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
          return t0 && i10 == 1 && i100 != 11 || !t0 ? "one" : "other";
        },
        it: function it(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
          return n == 1 && v0 ? "one" : i != 0 && i1000000 == 0 && v0 ? "many" : "other";
        },
        ksh: function ksh(n) {
          return n == 0 ? "zero" : n == 1 ? "one" : "other";
        },
        lt: function lt(n) {
          var s = String(n).split("."), f = s[1] || "", t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
          return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
        },
        lv: function lv(n) {
          var s = String(n).split("."), f = s[1] || "", v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
          return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
        },
        mk: function mk(n) {
          var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
          return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : "other";
        },
        mt: function mt(n) {
          var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
          return n == 1 ? "one" : n == 0 || n100 >= 2 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 19 ? "many" : "other";
        },
        pa: function pa(n) {
          return n == 0 || n == 1 ? "one" : "other";
        },
        pl: function pl(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
          return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
        },
        pt: function pt(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
          return i == 0 || i == 1 ? "one" : i != 0 && i1000000 == 0 && v0 ? "many" : "other";
        },
        ro: function ro(n) {
          var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
          return n == 1 && v0 ? "one" : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? "few" : "other";
        },
        ru: function ru(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
          return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
        },
        se: function se(n) {
          return n == 1 ? "one" : n == 2 ? "two" : "other";
        },
        si: function si(n) {
          var s = String(n).split("."), i = s[0], f = s[1] || "";
          return n == 0 || n == 1 || i == 0 && f == 1 ? "one" : "other";
        },
        sl: function sl(n) {
          var s = String(n).split("."), i = s[0], v0 = !s[1], i100 = i.slice(-2);
          return v0 && i100 == 1 ? "one" : v0 && i100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || !v0 ? "few" : "other";
        }
      };
      $.as = $.am;
      $.az = $.af;
      $.bg = $.af;
      $.bn = $.am;
      $.ca = $.ast;
      $.ce = $.af;
      $.chr = $.af;
      $.de = $.ast;
      $.ee = $.af;
      $.el = $.af;
      $.en = $.ast;
      $.et = $.ast;
      $.eu = $.af;
      $.fa = $.am;
      $.fi = $.ast;
      $.fil = $.ceb;
      $.fo = $.af;
      $.fur = $.af;
      $.fy = $.ast;
      $.gl = $.ast;
      $.gu = $.am;
      $.ha = $.af;
      $.hi = $.am;
      $.hr = $.bs;
      $.hsb = $.dsb;
      $.hu = $.af;
      $.hy = $.ff;
      $.ia = $.ast;
      $.id = $.dz;
      $.ig = $.dz;
      $.ja = $.dz;
      $.jgo = $.af;
      $.jv = $.dz;
      $.ka = $.af;
      $.kea = $.dz;
      $.kk = $.af;
      $.kl = $.af;
      $.km = $.dz;
      $.kn = $.am;
      $.ko = $.dz;
      $.ku = $.af;
      $.ky = $.af;
      $.lb = $.af;
      $.lkt = $.dz;
      $.lo = $.dz;
      $.ml = $.af;
      $.mn = $.af;
      $.mr = $.af;
      $.ms = $.dz;
      $.my = $.dz;
      $.nb = $.af;
      $.ne = $.af;
      $.nl = $.ast;
      $.nn = $.af;
      $.no = $.af;
      $.or = $.af;
      $.pcm = $.am;
      $.ps = $.af;
      $.rm = $.af;
      $.sah = $.dz;
      $.sc = $.ast;
      $.sd = $.af;
      $.sk = $.cs;
      $.so = $.af;
      $.sq = $.af;
      $.sr = $.bs;
      $.su = $.dz;
      $.sv = $.ast;
      $.sw = $.ast;
      $.ta = $.af;
      $.te = $.af;
      $.th = $.dz;
      $.ti = $.pa;
      $.tk = $.af;
      $.to = $.dz;
      $.tr = $.af;
      $.ug = $.af;
      $.uk = $.ru;
      $.ur = $.ast;
      $.uz = $.af;
      $.vi = $.dz;
      $.wae = $.af;
      $.wo = $.dz;
      $.yi = $.ast;
      $.yo = $.dz;
      $.yue = $.dz;
      $.zh = $.dz;
      $.zu = $.am;
      var _default = $;
      exports.default = _default;
    }
  });

  // node_modules/relative-time-format/commonjs/getPluralRulesLocale.js
  var require_getPluralRulesLocale = __commonJS({
    "node_modules/relative-time-format/commonjs/getPluralRulesLocale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getPluralRulesLocale;
      function getPluralRulesLocale(locale) {
        if (locale === "pt-PT") {
          return locale;
        }
        return getLanguageFromLanguageTag(locale);
      }
      var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;
      function getLanguageFromLanguageTag(languageTag) {
        var match = languageTag.match(LANGUAGE_REG_EXP);
        if (!match) {
          throw new TypeError("Invalid locale: ".concat(languageTag));
        }
        return match[1];
      }
    }
  });

  // node_modules/relative-time-format/commonjs/PluralRules.js
  var require_PluralRules = __commonJS({
    "node_modules/relative-time-format/commonjs/PluralRules.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _PluralRuleFunctions = _interopRequireDefault(require_PluralRuleFunctions());
      var _getPluralRulesLocale = _interopRequireDefault(require_getPluralRulesLocale());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var PluralRules = /* @__PURE__ */ function() {
        function PluralRules2(locale, options) {
          _classCallCheck(this, PluralRules2);
          var locales = PluralRules2.supportedLocalesOf(locale);
          if (locales.length === 0) {
            throw new RangeError("Unsupported locale: " + locale);
          }
          if (options && options.type !== "cardinal") {
            throw new RangeError('Only "cardinal" "type" is supported');
          }
          this.$ = _PluralRuleFunctions.default[(0, _getPluralRulesLocale.default)(locales[0])];
        }
        _createClass(PluralRules2, [{
          key: "select",
          value: function select(number) {
            return this.$(number);
          }
        }], [{
          key: "supportedLocalesOf",
          value: function supportedLocalesOf(locales) {
            if (typeof locales === "string") {
              locales = [locales];
            }
            return locales.filter(function(locale) {
              return _PluralRuleFunctions.default[(0, _getPluralRulesLocale.default)(locale)];
            });
          }
        }]);
        return PluralRules2;
      }();
      exports.default = PluralRules;
    }
  });

  // node_modules/relative-time-format/commonjs/RelativeTimeFormat.js
  var require_RelativeTimeFormat = __commonJS({
    "node_modules/relative-time-format/commonjs/RelativeTimeFormat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.UNITS = void 0;
      var _LocaleDataStore = require_LocaleDataStore();
      var _resolveLocale = _interopRequireDefault(require_resolveLocale());
      var _PluralRules = _interopRequireDefault(require_PluralRules());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
      exports.UNITS = UNITS;
      var NUMERIC_VALUES = ["auto", "always"];
      var STYLE_VALUES = ["long", "short", "narrow"];
      var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
      var RelativeTimeFormat = /* @__PURE__ */ function() {
        function RelativeTimeFormat2() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          _classCallCheck(this, RelativeTimeFormat2);
          _defineProperty(this, "numeric", "always");
          _defineProperty(this, "style", "long");
          _defineProperty(this, "localeMatcher", "lookup");
          var numeric = options.numeric, style = options.style, styleFallback = options.styleFallback, localeMatcher = options.localeMatcher;
          if (numeric !== void 0) {
            if (NUMERIC_VALUES.indexOf(numeric) < 0) {
              throw new RangeError('Invalid "numeric" option: '.concat(numeric));
            }
            this.numeric = numeric;
          }
          if (style !== void 0) {
            if (STYLE_VALUES.indexOf(style) < 0 && !styleFallback) {
              throw new RangeError('Invalid "style" option: '.concat(style));
            }
            this.style = style;
          }
          if (localeMatcher !== void 0) {
            if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
              throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
            }
            this.localeMatcher = localeMatcher;
          }
          if (typeof locales === "string") {
            locales = [locales];
          }
          locales.push((0, _LocaleDataStore.getDefaultLocale)());
          this.locale = RelativeTimeFormat2.supportedLocalesOf(locales, {
            localeMatcher: this.localeMatcher
          })[0];
          if (!this.locale) {
            throw new Error("No supported locale was found");
          }
          if (_PluralRules.default.supportedLocalesOf(this.locale).length > 0) {
            this.pluralRules = new _PluralRules.default(this.locale);
          } else {
            console.warn('"'.concat(this.locale, '" locale is not supported'));
          }
          if (typeof Intl !== "undefined" && Intl.NumberFormat) {
            this.numberFormat = new Intl.NumberFormat(this.locale);
            this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
          } else {
            this.numberingSystem = "latn";
          }
          this.locale = (0, _resolveLocale.default)(this.locale, {
            localeMatcher: this.localeMatcher
          });
          if (styleFallback) {
            var styles = Object.keys((0, _LocaleDataStore.getLocaleData)(this.locale));
            var _arr = [this.style].concat(STYLE_VALUES, [styles[0]]);
            for (var _i = 0; _i < _arr.length; _i++) {
              var _style = _arr[_i];
              if (styles.indexOf(_style) >= 0) {
                this.style = _style;
                break;
              }
            }
          }
        }
        _createClass(RelativeTimeFormat2, [{
          key: "format",
          value: function format() {
            var _parseFormatArgs = parseFormatArgs(arguments), _parseFormatArgs2 = _slicedToArray(_parseFormatArgs, 2), number = _parseFormatArgs2[0], unit = _parseFormatArgs2[1];
            return this.getRule(number, unit).replace("{0}", this.formatNumber(Math.abs(number)));
          }
        }, {
          key: "formatToParts",
          value: function formatToParts() {
            var _parseFormatArgs3 = parseFormatArgs(arguments), _parseFormatArgs4 = _slicedToArray(_parseFormatArgs3, 2), number = _parseFormatArgs4[0], unit = _parseFormatArgs4[1];
            var rule = this.getRule(number, unit);
            var valueIndex = rule.indexOf("{0}");
            if (valueIndex < 0) {
              return [{
                type: "literal",
                value: rule
              }];
            }
            var parts = [];
            if (valueIndex > 0) {
              parts.push({
                type: "literal",
                value: rule.slice(0, valueIndex)
              });
            }
            parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function(part) {
              return _objectSpread({}, part, {
                unit
              });
            }));
            if (valueIndex + "{0}".length < rule.length - 1) {
              parts.push({
                type: "literal",
                value: rule.slice(valueIndex + "{0}".length)
              });
            }
            return parts;
          }
        }, {
          key: "getRule",
          value: function getRule(value, unit) {
            var unitMessages = (0, _LocaleDataStore.getLocaleData)(this.locale)[this.style][unit];
            if (typeof unitMessages === "string") {
              return unitMessages;
            }
            if (this.numeric === "auto") {
              if (value === -2 || value === -1) {
                var message = unitMessages["previous".concat(value === -1 ? "" : "-" + Math.abs(value))];
                if (message) {
                  return message;
                }
              } else if (value === 1 || value === 2) {
                var _message = unitMessages["next".concat(value === 1 ? "" : "-" + Math.abs(value))];
                if (_message) {
                  return _message;
                }
              } else if (value === 0) {
                if (unitMessages.current) {
                  return unitMessages.current;
                }
              }
            }
            var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"];
            if (typeof pluralizedMessages === "string") {
              return pluralizedMessages;
            }
            var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || "other";
            return pluralizedMessages[quantifier] || pluralizedMessages.other;
          }
        }, {
          key: "formatNumber",
          value: function formatNumber(number) {
            return this.numberFormat ? this.numberFormat.format(number) : String(number);
          }
        }, {
          key: "formatNumberToParts",
          value: function formatNumberToParts(number) {
            return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
              type: "integer",
              value: this.formatNumber(number)
            }];
          }
        }, {
          key: "resolvedOptions",
          value: function resolvedOptions() {
            return {
              locale: this.locale,
              style: this.style,
              numeric: this.numeric,
              numberingSystem: this.numberingSystem
            };
          }
        }]);
        return RelativeTimeFormat2;
      }();
      exports.default = RelativeTimeFormat;
      RelativeTimeFormat.supportedLocalesOf = function(locales) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (typeof locales === "string") {
          locales = [locales];
        } else if (!Array.isArray(locales)) {
          throw new TypeError('Invalid "locales" argument');
        }
        return locales.filter(function(locale) {
          return (0, _resolveLocale.default)(locale, options);
        });
      };
      RelativeTimeFormat.addLocale = _LocaleDataStore.addLocaleData;
      RelativeTimeFormat.setDefaultLocale = _LocaleDataStore.setDefaultLocale;
      RelativeTimeFormat.getDefaultLocale = _LocaleDataStore.getDefaultLocale;
      RelativeTimeFormat.PluralRules = _PluralRules.default;
      var UNIT_ERROR = 'Invalid "unit" argument';
      function parseUnit(unit) {
        if (_typeof(unit) === "symbol") {
          throw new TypeError(UNIT_ERROR);
        }
        if (typeof unit !== "string") {
          throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
        }
        if (unit[unit.length - 1] === "s") {
          unit = unit.slice(0, unit.length - 1);
        }
        if (UNITS.indexOf(unit) < 0) {
          throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
        }
        return unit;
      }
      var NUMBER_ERROR = 'Invalid "number" argument';
      function parseNumber(value) {
        value = Number(value);
        if (Number.isFinite) {
          if (!Number.isFinite(value)) {
            throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
          }
        }
        return value;
      }
      function isNegativeZero(number) {
        return 1 / number === -Infinity;
      }
      function isNegative(number) {
        return number < 0 || number === 0 && isNegativeZero(number);
      }
      function parseFormatArgs(args) {
        if (args.length < 2) {
          throw new TypeError('"unit" argument is required');
        }
        return [parseNumber(args[0]), parseUnit(args[1])];
      }
    }
  });

  // node_modules/relative-time-format/index.commonjs.js
  var require_index_commonjs = __commonJS({
    "node_modules/relative-time-format/index.commonjs.js"(exports, module) {
      "use strict";
      exports = module.exports = require_RelativeTimeFormat().default;
      exports["default"] = require_RelativeTimeFormat().default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/cache.js
  var require_cache = __commonJS({
    "node_modules/javascript-time-ago/commonjs/cache.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var Cache = /* @__PURE__ */ function() {
        function Cache2() {
          _classCallCheck(this, Cache2);
          _defineProperty(this, "cache", {});
        }
        _createClass(Cache2, [{
          key: "get",
          value: function get() {
            var cache = this.cache;
            for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
              keys[_key] = arguments[_key];
            }
            for (var _i = 0; _i < keys.length; _i++) {
              var key = keys[_i];
              if (_typeof(cache) !== "object") {
                return;
              }
              cache = cache[key];
            }
            return cache;
          }
        }, {
          key: "put",
          value: function put() {
            for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              keys[_key2] = arguments[_key2];
            }
            var value = keys.pop();
            var lastKey = keys.pop();
            var cache = this.cache;
            for (var _i2 = 0; _i2 < keys.length; _i2++) {
              var key = keys[_i2];
              if (_typeof(cache[key]) !== "object") {
                cache[key] = {};
              }
              cache = cache[key];
            }
            return cache[lastKey] = value;
          }
        }]);
        return Cache2;
      }();
      exports.default = Cache;
    }
  });

  // node_modules/javascript-time-ago/commonjs/locale.js
  var require_locale = __commonJS({
    "node_modules/javascript-time-ago/commonjs/locale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = chooseLocale;
      exports.intlDateTimeFormatSupportedLocale = intlDateTimeFormatSupportedLocale;
      exports.intlDateTimeFormatSupported = intlDateTimeFormatSupported;
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function chooseLocale(locales, isLocaleDataAvailable) {
        for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var locale = _ref;
          if (isLocaleDataAvailable(locale)) {
            return locale;
          }
          var parts = locale.split("-");
          while (parts.length > 1) {
            parts.pop();
            locale = parts.join("-");
            if (isLocaleDataAvailable(locale)) {
              return locale;
            }
          }
        }
        throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(", ")));
      }
      function intlDateTimeFormatSupportedLocale(locales) {
        if (intlDateTimeFormatSupported()) {
          return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
        }
      }
      function intlDateTimeFormatSupported() {
        var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === "object";
        return isIntlAvailable && typeof Intl.DateTimeFormat === "function";
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/isStyleObject.js
  var require_isStyleObject = __commonJS({
    "node_modules/javascript-time-ago/commonjs/isStyleObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isStyleObject;
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function isStyleObject(object) {
        return isObject(object) && (Array.isArray(object.steps) || Array.isArray(object.gradation) || Array.isArray(object.flavour) || typeof object.flavour === "string" || Array.isArray(object.labels) || typeof object.labels === "string" || Array.isArray(object.units) || typeof object.custom === "function");
      }
      var OBJECT_CONSTRUCTOR = {}.constructor;
      function isObject(object) {
        return _typeof(object) !== void 0 && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/units.js
  var require_units = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/units.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getSecondsInUnit = getSecondsInUnit;
      exports.year = exports.month = exports.week = exports.day = exports.hour = exports.minute = void 0;
      var minute = 60;
      exports.minute = minute;
      var hour = 60 * minute;
      exports.hour = hour;
      var day = 24 * hour;
      exports.day = day;
      var week = 7 * day;
      exports.week = week;
      var month = 30.44 * day;
      exports.month = month;
      var year = 146097 / 400 * day;
      exports.year = year;
      function getSecondsInUnit(unit) {
        switch (unit) {
          case "second":
            return 1;
          case "minute":
            return minute;
          case "hour":
            return hour;
          case "day":
            return day;
          case "week":
            return week;
          case "month":
            return month;
          case "year":
            return year;
        }
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/getStepDenominator.js
  var require_getStepDenominator = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/getStepDenominator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getStepDenominator;
      var _units = require_units();
      function getStepDenominator(step) {
        if (step.factor !== void 0) {
          return step.factor;
        }
        return (0, _units.getSecondsInUnit)(step.unit || step.formatAs) || 1;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/round.js
  var require_round = __commonJS({
    "node_modules/javascript-time-ago/commonjs/round.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getRoundFunction = getRoundFunction;
      exports.getDiffRatioToNextRoundedNumber = getDiffRatioToNextRoundedNumber;
      function getRoundFunction(round) {
        switch (round) {
          case "floor":
            return Math.floor;
          default:
            return Math.round;
        }
      }
      function getDiffRatioToNextRoundedNumber(round) {
        switch (round) {
          case "floor":
            return 1;
          default:
            return 0.5;
        }
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/getStepMinTime.js
  var require_getStepMinTime = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/getStepMinTime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getStepMinTime;
      var _units = require_units();
      var _round = require_round();
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function getStepMinTime(step, _ref) {
        var prevStep = _ref.prevStep, timestamp = _ref.timestamp, now = _ref.now, future = _ref.future, round = _ref.round;
        var minTime;
        if (prevStep) {
          if (prevStep.id || prevStep.unit) {
            minTime = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
          }
        }
        if (minTime === void 0) {
          if (step.threshold !== void 0) {
            minTime = step.threshold;
            if (typeof minTime === "function") {
              minTime = minTime(now, future);
            }
          }
        }
        if (minTime === void 0) {
          minTime = step.minTime;
        }
        if (_typeof(minTime) === "object") {
          if (prevStep && prevStep.id && minTime[prevStep.id] !== void 0) {
            minTime = minTime[prevStep.id];
          } else {
            minTime = minTime.default;
          }
        }
        if (typeof minTime === "function") {
          minTime = minTime(timestamp, {
            future,
            getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
              return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
                round
              });
            }
          });
        }
        if (minTime === void 0) {
          if (step.test) {
            if (step.test(timestamp, {
              now,
              future
            })) {
              minTime = 0;
            } else {
              minTime = 9007199254740991;
            }
          }
        }
        if (minTime === void 0) {
          if (prevStep) {
            if (step.formatAs && prevStep.formatAs) {
              minTime = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
                round
              });
            }
          } else {
            minTime = 0;
          }
        }
        if (minTime === void 0) {
          console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(step, null, 2));
        }
        return minTime;
      }
      function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
        var round = _ref2.round;
        var toUnitAmount = (0, _units.getSecondsInUnit)(toUnit);
        var fromUnitAmount;
        if (fromUnit === "now") {
          fromUnitAmount = (0, _units.getSecondsInUnit)(toUnit);
        } else {
          fromUnitAmount = (0, _units.getSecondsInUnit)(fromUnit);
        }
        if (toUnitAmount !== void 0 && fromUnitAmount !== void 0) {
          return toUnitAmount - fromUnitAmount * (1 - (0, _round.getDiffRatioToNextRoundedNumber)(round));
        }
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/getStep.js
  var require_getStep = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/getStep.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getStep;
      var _getStepDenominator = _interopRequireDefault(require_getStepDenominator());
      var _getStepMinTime = _interopRequireDefault(require_getStepMinTime());
      var _round = require_round();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function getStep(steps, secondsPassed, _ref) {
        var now = _ref.now, future = _ref.future, round = _ref.round, units = _ref.units, getNextStep = _ref.getNextStep;
        steps = filterStepsByUnits(steps, units);
        var step = _getStep(steps, secondsPassed, {
          now,
          future,
          round
        });
        if (getNextStep) {
          if (step) {
            var prevStep = steps[steps.indexOf(step) - 1];
            var nextStep = steps[steps.indexOf(step) + 1];
            return [prevStep, step, nextStep];
          }
          return [void 0, void 0, steps[0]];
        }
        return step;
      }
      function _getStep(steps, secondsPassed, _ref2) {
        var now = _ref2.now, future = _ref2.future, round = _ref2.round;
        if (steps.length === 0) {
          return;
        }
        var i = getStepIndex(steps, secondsPassed, {
          now,
          future: future || secondsPassed < 0,
          round
        });
        if (i === -1) {
          return;
        }
        var step = steps[i];
        if (step.granularity) {
          var secondsPassedGranular = (0, _round.getRoundFunction)(round)(Math.abs(secondsPassed) / (0, _getStepDenominator.default)(step) / step.granularity) * step.granularity;
          if (secondsPassedGranular === 0 && i > 0) {
            return steps[i - 1];
          }
        }
        return step;
      }
      function getStepIndex(steps, secondsPassed, options) {
        var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var minTime = (0, _getStepMinTime.default)(steps[i], _objectSpread({
          prevStep: steps[i - 1],
          timestamp: options.now - secondsPassed * 1e3
        }, options));
        if (minTime === void 0) {
          return i - 1;
        }
        if (Math.abs(secondsPassed) < minTime) {
          return i - 1;
        }
        if (i === steps.length - 1) {
          return i;
        }
        return getStepIndex(steps, secondsPassed, options, i + 1);
      }
      function filterStepsByUnits(steps, units) {
        return steps.filter(function(_ref3) {
          var unit = _ref3.unit, formatAs = _ref3.formatAs;
          unit = unit || formatAs;
          if (unit) {
            return units.indexOf(unit) >= 0;
          }
          return true;
        });
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/getTimeToNextUpdateForUnit.js
  var require_getTimeToNextUpdateForUnit = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/getTimeToNextUpdateForUnit.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getTimeToNextUpdateForUnit;
      var _units = require_units();
      var _round = require_round();
      function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
        var now = _ref.now, round = _ref.round;
        if (!(0, _units.getSecondsInUnit)(unit)) {
          return;
        }
        var unitDenominator = (0, _units.getSecondsInUnit)(unit) * 1e3;
        var future = timestamp > now;
        var preciseAmount = Math.abs(timestamp - now);
        var roundedAmount = (0, _round.getRoundFunction)(round)(preciseAmount / unitDenominator) * unitDenominator;
        if (future) {
          if (roundedAmount > 0) {
            return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round, unitDenominator);
          } else {
            return preciseAmount - roundedAmount + 1;
          }
        }
        return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round, unitDenominator);
      }
      function getDiffToNextRoundedNumber(round, unitDenominator) {
        return (0, _round.getDiffRatioToNextRoundedNumber)(round) * unitDenominator;
      }
      function getDiffToPreviousRoundedNumber(round, unitDenominator) {
        return (1 - (0, _round.getDiffRatioToNextRoundedNumber)(round)) * unitDenominator + 1;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/getTimeToNextUpdate.js
  var require_getTimeToNextUpdate = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/getTimeToNextUpdate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getTimeToNextUpdate;
      exports.getStepChangesAt = getStepChangesAt;
      exports.getTimeToStepChange = getTimeToStepChange;
      exports.INFINITY = void 0;
      var _getTimeToNextUpdateForUnit2 = _interopRequireDefault(require_getTimeToNextUpdateForUnit());
      var _getStepMinTime = _interopRequireDefault(require_getStepMinTime());
      var _round = require_round();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var YEAR = 365 * 24 * 60 * 60 * 1e3;
      var INFINITY = 1e3 * YEAR;
      exports.INFINITY = INFINITY;
      function getTimeToNextUpdate(date, step, _ref) {
        var prevStep = _ref.prevStep, nextStep = _ref.nextStep, now = _ref.now, future = _ref.future, round = _ref.round;
        var timestamp = date.getTime ? date.getTime() : date;
        var getTimeToNextUpdateForUnit = function getTimeToNextUpdateForUnit2(unit2) {
          return (0, _getTimeToNextUpdateForUnit2.default)(unit2, timestamp, {
            now,
            round
          });
        };
        var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
          future,
          now,
          round,
          prevStep: future ? prevStep : step
        });
        if (timeToStepChange === void 0) {
          return;
        }
        var timeToNextUpdate;
        if (step) {
          if (step.getTimeToNextUpdate) {
            timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
              getTimeToNextUpdateForUnit,
              getRoundFunction: _round.getRoundFunction,
              now,
              future,
              round
            });
          }
          if (timeToNextUpdate === void 0) {
            var unit = step.unit || step.formatAs;
            if (unit) {
              timeToNextUpdate = getTimeToNextUpdateForUnit(unit);
            }
          }
        }
        if (timeToNextUpdate === void 0) {
          return timeToStepChange;
        }
        return Math.min(timeToNextUpdate, timeToStepChange);
      }
      function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
        var now = _ref2.now, future = _ref2.future, round = _ref2.round, prevStep = _ref2.prevStep;
        var minTime = (0, _getStepMinTime.default)(currentOrNextStep, {
          timestamp,
          now,
          future,
          round,
          prevStep
        });
        if (minTime === void 0) {
          return;
        }
        if (future) {
          return timestamp - minTime * 1e3 + 1;
        } else {
          if (minTime === 0 && timestamp === now) {
            return INFINITY;
          }
          return timestamp + minTime * 1e3;
        }
      }
      function getTimeToStepChange(step, timestamp, _ref3) {
        var now = _ref3.now, future = _ref3.future, round = _ref3.round, prevStep = _ref3.prevStep;
        if (step) {
          var stepChangesAt = getStepChangesAt(step, timestamp, {
            now,
            future,
            round,
            prevStep
          });
          if (stepChangesAt === void 0) {
            return;
          }
          return stepChangesAt - now;
        } else {
          if (future) {
            return timestamp - now + 1;
          } else {
            return INFINITY;
          }
        }
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/LocaleDataStore.js
  var require_LocaleDataStore2 = __commonJS({
    "node_modules/javascript-time-ago/commonjs/LocaleDataStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getLocaleData = getLocaleData;
      exports.addLocaleData = addLocaleData;
      var localesData = {};
      function getLocaleData(locale) {
        return localesData[locale];
      }
      function addLocaleData(localeData) {
        if (!localeData) {
          throw new Error("[javascript-time-ago] No locale data passed.");
        }
        localesData[localeData.locale] = localeData;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/round.js
  var require_round2 = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/round.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = [{
        formatAs: "now"
      }, {
        formatAs: "second"
      }, {
        formatAs: "minute"
      }, {
        formatAs: "hour"
      }, {
        formatAs: "day"
      }, {
        formatAs: "week"
      }, {
        formatAs: "month"
      }, {
        formatAs: "year"
      }];
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/round.js
  var require_round3 = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/round.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _round = _interopRequireDefault(require_round2());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = {
        steps: _round.default,
        labels: "long"
      };
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/roundMinute.js
  var require_roundMinute = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/roundMinute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _round = _interopRequireDefault(require_round3());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _round.default, {
        steps: _round.default.steps.filter(function(step) {
          return step.formatAs !== "second";
        })
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/approximate.js
  var require_approximate = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _units = require_units();
      var _default = [{
        factor: 1,
        unit: "now"
      }, {
        threshold: 1,
        threshold_for_now: 45.5,
        factor: 1,
        unit: "second"
      }, {
        threshold: 45.5,
        factor: _units.minute,
        unit: "minute"
      }, {
        threshold: 2.5 * _units.minute,
        granularity: 5,
        factor: _units.minute,
        unit: "minute"
      }, {
        threshold: 22.5 * _units.minute,
        factor: 0.5 * _units.hour,
        unit: "half-hour"
      }, {
        threshold: 42.5 * _units.minute,
        threshold_for_minute: 52.5 * _units.minute,
        factor: _units.hour,
        unit: "hour"
      }, {
        threshold: 20.5 / 24 * _units.day,
        factor: _units.day,
        unit: "day"
      }, {
        threshold: 5.5 * _units.day,
        factor: _units.week,
        unit: "week"
      }, {
        threshold: 3.5 * _units.week,
        factor: _units.month,
        unit: "month"
      }, {
        threshold: 10.5 * _units.month,
        factor: _units.year,
        unit: "year"
      }];
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/approximate.js
  var require_approximate2 = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _approximate = _interopRequireDefault(require_approximate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = {
        gradation: _approximate.default,
        flavour: "long",
        units: ["now", "minute", "hour", "day", "week", "month", "year"]
      };
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/approximateTime.js
  var require_approximateTime = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/approximateTime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _approximate = _interopRequireDefault(require_approximate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = {
        gradation: _approximate.default,
        flavour: "long-time",
        units: ["now", "minute", "hour", "day", "week", "month", "year"]
      };
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/helpers.js
  var require_helpers = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getDate = getDate;
      function getDate(value) {
        return value instanceof Date ? value : new Date(value);
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/index.js
  var require_steps = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "approximate", {
        enumerable: true,
        get: function get() {
          return _approximate.default;
        }
      });
      Object.defineProperty(exports, "convenient", {
        enumerable: true,
        get: function get() {
          return _approximate.default;
        }
      });
      Object.defineProperty(exports, "round", {
        enumerable: true,
        get: function get() {
          return _round.default;
        }
      });
      Object.defineProperty(exports, "canonical", {
        enumerable: true,
        get: function get() {
          return _round.default;
        }
      });
      Object.defineProperty(exports, "minute", {
        enumerable: true,
        get: function get() {
          return _units.minute;
        }
      });
      Object.defineProperty(exports, "hour", {
        enumerable: true,
        get: function get() {
          return _units.hour;
        }
      });
      Object.defineProperty(exports, "day", {
        enumerable: true,
        get: function get() {
          return _units.day;
        }
      });
      Object.defineProperty(exports, "week", {
        enumerable: true,
        get: function get() {
          return _units.week;
        }
      });
      Object.defineProperty(exports, "month", {
        enumerable: true,
        get: function get() {
          return _units.month;
        }
      });
      Object.defineProperty(exports, "year", {
        enumerable: true,
        get: function get() {
          return _units.year;
        }
      });
      Object.defineProperty(exports, "getDate", {
        enumerable: true,
        get: function get() {
          return _helpers.getDate;
        }
      });
      var _approximate = _interopRequireDefault(require_approximate());
      var _round = _interopRequireDefault(require_round2());
      var _units = require_units();
      var _helpers = require_helpers();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/steps/renameLegacyProperties.js
  var require_renameLegacyProperties = __commonJS({
    "node_modules/javascript-time-ago/commonjs/steps/renameLegacyProperties.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _default(step_) {
        var step = _objectSpread({}, step_);
        if (step.minTime !== void 0) {
          if (_typeof(step.minTime) === "object") {
            var _arr = Object.keys(step.minTime);
            for (var _i = 0; _i < _arr.length; _i++) {
              var key = _arr[_i];
              if (key === "default") {
                step.threshold = step.minTime.default;
              } else {
                step["threshold_for_".concat(key)] = step.minTime[key];
              }
            }
          } else {
            step.threshold = step.minTime;
          }
          delete step.minTime;
        }
        if (step.formatAs) {
          step.unit = step.formatAs;
          delete step.formatAs;
        }
        return step;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/renameLegacyProperties.js
  var require_renameLegacyProperties2 = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/renameLegacyProperties.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;
      var _renameLegacyProperties = _interopRequireDefault(require_renameLegacyProperties());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _default(style_) {
        var style = _objectSpread({}, style_);
        if (style.steps) {
          style.gradation = style.steps.map(_renameLegacyProperties.default);
          delete style.steps;
        }
        if (style.labels) {
          style.flavour = style.labels;
          delete style.labels;
        }
        return style;
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/twitter.js
  var require_twitter = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/twitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _steps = require_steps();
      var _locale = require_locale();
      var _renameLegacyProperties = _interopRequireDefault(require_renameLegacyProperties2());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var steps = [{
        formatAs: "second"
      }, {
        formatAs: "minute"
      }, {
        formatAs: "hour"
      }];
      var formatters = {};
      var monthAndDay = {
        minTime: function minTime(timestamp, _ref) {
          var future = _ref.future, getMinTimeForUnit = _ref.getMinTimeForUnit;
          return getMinTimeForUnit("day");
        },
        format: function format(value, locale) {
          if (!formatters[locale]) {
            formatters[locale] = {};
          }
          if (!formatters[locale].dayMonth) {
            formatters[locale].dayMonth = new Intl.DateTimeFormat(locale, {
              month: "short",
              day: "numeric"
            });
          }
          return formatters[locale].dayMonth.format((0, _steps.getDate)(value));
        }
      };
      var yearMonthAndDay = {
        minTime: function minTime(timestamp, _ref2) {
          var future = _ref2.future;
          if (future) {
            var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1;
            return (timestamp - maxFittingNow) / 1e3;
          } else {
            var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime();
            return (minFittingNow - timestamp) / 1e3;
          }
        },
        format: function format(value, locale) {
          if (!formatters[locale]) {
            formatters[locale] = {};
          }
          if (!formatters[locale].dayMonthYear) {
            formatters[locale].dayMonthYear = new Intl.DateTimeFormat(locale, {
              year: "numeric",
              month: "short",
              day: "numeric"
            });
          }
          return formatters[locale].dayMonthYear.format((0, _steps.getDate)(value));
        }
      };
      if ((0, _locale.intlDateTimeFormatSupported)()) {
        steps.push(monthAndDay, yearMonthAndDay);
      } else {
        steps.push({
          formatAs: "day"
        }, {
          formatAs: "week"
        }, {
          formatAs: "month"
        }, {
          formatAs: "year"
        });
      }
      var _default = {
        steps,
        labels: [
          "mini",
          "short-time",
          "narrow",
          "short"
        ]
      };
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/twitterNow.js
  var require_twitterNow = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/twitterNow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _twitter = _interopRequireDefault(require_twitter());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _twitter.default, {
        steps: [{
          formatAs: "now"
        }].concat(_twitter.default.steps)
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/twitterMinute.js
  var require_twitterMinute = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/twitterMinute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _twitter = _interopRequireDefault(require_twitter());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _twitter.default, {
        steps: _twitter.default.steps.filter(function(step) {
          return step.formatAs !== "second";
        })
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/twitterMinuteNow.js
  var require_twitterMinuteNow = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/twitterMinuteNow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _twitterMinute = _interopRequireDefault(require_twitterMinute());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _twitterMinute.default, {
        steps: [{
          formatAs: "now"
        }].concat(_twitterMinute.default.steps)
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/twitterFirstMinute.js
  var require_twitterFirstMinute = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/twitterFirstMinute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _units = require_units();
      var _twitter = _interopRequireDefault(require_twitter());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _twitter.default, {
        steps: _twitter.default.steps.filter(function(step) {
          return step.formatAs !== "second";
        }).map(function(step) {
          return step.formatAs === "minute" ? _objectSpread({}, step, {
            minTime: _units.minute
          }) : step;
        })
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/mini.js
  var require_mini = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/mini.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = {
        steps: [{
          formatAs: "second"
        }, {
          formatAs: "minute"
        }, {
          formatAs: "hour"
        }, {
          formatAs: "day"
        }, {
          formatAs: "month"
        }, {
          formatAs: "year"
        }],
        labels: [
          "mini",
          "short-time",
          "narrow",
          "short"
        ]
      };
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/miniNow.js
  var require_miniNow = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/miniNow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mini = _interopRequireDefault(require_mini());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _mini.default, {
        steps: [{
          formatAs: "now"
        }].concat(_mini.default.steps)
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/miniMinute.js
  var require_miniMinute = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/miniMinute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mini = _interopRequireDefault(require_mini());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _mini.default, {
        steps: _mini.default.steps.filter(function(step) {
          return step.formatAs !== "second";
        })
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/miniMinuteNow.js
  var require_miniMinuteNow = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/miniMinuteNow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _miniMinute = _interopRequireDefault(require_miniMinute());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var _default = _objectSpread({}, _miniMinute.default, {
        steps: [{
          formatAs: "now"
        }].concat(_miniMinute.default.steps)
      });
      exports.default = _default;
    }
  });

  // node_modules/javascript-time-ago/commonjs/style/getStyleByName.js
  var require_getStyleByName = __commonJS({
    "node_modules/javascript-time-ago/commonjs/style/getStyleByName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getStyleByName;
      var _round = _interopRequireDefault(require_round3());
      var _roundMinute = _interopRequireDefault(require_roundMinute());
      var _approximate = _interopRequireDefault(require_approximate2());
      var _approximateTime = _interopRequireDefault(require_approximateTime());
      var _twitter = _interopRequireDefault(require_twitter());
      var _twitterNow = _interopRequireDefault(require_twitterNow());
      var _twitterMinute = _interopRequireDefault(require_twitterMinute());
      var _twitterMinuteNow = _interopRequireDefault(require_twitterMinuteNow());
      var _twitterFirstMinute = _interopRequireDefault(require_twitterFirstMinute());
      var _mini = _interopRequireDefault(require_mini());
      var _miniNow = _interopRequireDefault(require_miniNow());
      var _miniMinute = _interopRequireDefault(require_miniMinute());
      var _miniMinuteNow = _interopRequireDefault(require_miniMinuteNow());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getStyleByName(style) {
        switch (style) {
          case "default":
          case "round":
            return _round.default;
          case "round-minute":
            return _roundMinute.default;
          case "approximate":
            return _approximate.default;
          case "time":
          case "approximate-time":
            return _approximateTime.default;
          case "mini":
            return _mini.default;
          case "mini-now":
            return _miniNow.default;
          case "mini-minute":
            return _miniMinute.default;
          case "mini-minute-now":
            return _miniMinuteNow.default;
          case "twitter":
            return _twitter.default;
          case "twitter-now":
            return _twitterNow.default;
          case "twitter-minute":
            return _twitterMinute.default;
          case "twitter-minute-now":
            return _twitterMinuteNow.default;
          case "twitter-first-minute":
            return _twitterFirstMinute.default;
          default:
            return _approximate.default;
        }
      }
    }
  });

  // node_modules/javascript-time-ago/commonjs/TimeAgo.js
  var require_TimeAgo = __commonJS({
    "node_modules/javascript-time-ago/commonjs/TimeAgo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _relativeTimeFormat = _interopRequireDefault(require_index_commonjs());
      var _cache = _interopRequireDefault(require_cache());
      var _locale = _interopRequireDefault(require_locale());
      var _isStyleObject = _interopRequireDefault(require_isStyleObject());
      var _getStep3 = _interopRequireDefault(require_getStep());
      var _getStepDenominator = _interopRequireDefault(require_getStepDenominator());
      var _getTimeToNextUpdate = _interopRequireDefault(require_getTimeToNextUpdate());
      var _LocaleDataStore = require_LocaleDataStore2();
      var _roundMinute = _interopRequireDefault(require_roundMinute());
      var _getStyleByName = _interopRequireDefault(require_getStyleByName());
      var _round = require_round();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var TimeAgo = /* @__PURE__ */ function() {
        function TimeAgo2() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, polyfill = _ref.polyfill;
          _classCallCheck(this, TimeAgo2);
          if (typeof locales === "string") {
            locales = [locales];
          }
          this.locale = (0, _locale.default)(locales.concat(TimeAgo2.getDefaultLocale()), _LocaleDataStore.getLocaleData);
          if (typeof Intl !== "undefined") {
            if (Intl.NumberFormat) {
              this.numberFormat = new Intl.NumberFormat(this.locale);
            }
          }
          if (polyfill === false) {
            this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
            this.IntlPluralRules = Intl.PluralRules;
          } else {
            this.IntlRelativeTimeFormat = _relativeTimeFormat.default;
            this.IntlPluralRules = _relativeTimeFormat.default.PluralRules;
          }
          this.relativeTimeFormatCache = new _cache.default();
          this.pluralRulesCache = new _cache.default();
        }
        _createClass(TimeAgo2, [{
          key: "format",
          value: function format(input, style, options) {
            if (!options) {
              if (style && !isStyle(style)) {
                options = style;
                style = void 0;
              } else {
                options = {};
              }
            }
            if (!style) {
              style = _roundMinute.default;
            }
            if (typeof style === "string") {
              style = (0, _getStyleByName.default)(style);
            }
            var timestamp = getTimestamp(input);
            var _this$getLabels = this.getLabels(style.flavour || style.labels), labels = _this$getLabels.labels, labelsType = _this$getLabels.labelsType;
            var now;
            if (style.now !== void 0) {
              now = style.now;
            }
            if (now === void 0 && options.now !== void 0) {
              now = options.now;
            }
            if (now === void 0) {
              now = Date.now();
            }
            var secondsPassed = (now - timestamp) / 1e3;
            var future = options.future || secondsPassed < 0;
            var nowLabel = getNowLabel(labels, (0, _LocaleDataStore.getLocaleData)(this.locale).now, (0, _LocaleDataStore.getLocaleData)(this.locale).long, future);
            if (style.custom) {
              var custom = style.custom({
                now,
                date: new Date(timestamp),
                time: timestamp,
                elapsed: secondsPassed,
                locale: this.locale
              });
              if (custom !== void 0) {
                return custom;
              }
            }
            var units = getTimeIntervalMeasurementUnits(style.units, labels, nowLabel);
            var round = options.round || style.round;
            var _getStep = (0, _getStep3.default)(style.gradation || style.steps || _roundMinute.default.steps, secondsPassed, {
              now,
              units,
              round,
              future,
              getNextStep: true
            }), _getStep2 = _slicedToArray(_getStep, 3), prevStep = _getStep2[0], step = _getStep2[1], nextStep = _getStep2[2];
            var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
              labels,
              labelsType,
              nowLabel,
              now,
              future,
              round
            }) || "";
            if (options.getTimeToNextUpdate) {
              var timeToNextUpdate = (0, _getTimeToNextUpdate.default)(timestamp, step, {
                nextStep,
                prevStep,
                now,
                future,
                round
              });
              return [formattedDate, timeToNextUpdate];
            }
            return formattedDate;
          }
        }, {
          key: "formatDateForStep",
          value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
            var _this = this;
            var labels = _ref2.labels, labelsType = _ref2.labelsType, nowLabel = _ref2.nowLabel, now = _ref2.now, future = _ref2.future, round = _ref2.round;
            if (!step) {
              return;
            }
            if (step.format) {
              return step.format(timestamp, this.locale, {
                formatAs: function formatAs(unit2, value) {
                  return _this.formatValue(value, unit2, {
                    labels,
                    future
                  });
                },
                now,
                future
              });
            }
            var unit = step.unit || step.formatAs;
            if (!unit) {
              throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
            }
            if (unit === "now") {
              return nowLabel;
            }
            var amount = Math.abs(secondsPassed) / (0, _getStepDenominator.default)(step);
            if (step.granularity) {
              amount = (0, _round.getRoundFunction)(round)(amount / step.granularity) * step.granularity;
            }
            var valueForFormatting = -1 * Math.sign(secondsPassed) * (0, _round.getRoundFunction)(round)(amount);
            if (valueForFormatting === 0) {
              if (future) {
                valueForFormatting = 0;
              } else {
                valueForFormatting = -0;
              }
            }
            switch (labelsType) {
              case "long":
              case "short":
              case "narrow":
                return this.getFormatter(labelsType).format(valueForFormatting, unit);
              default:
                return this.formatValue(valueForFormatting, unit, {
                  labels,
                  future
                });
            }
          }
        }, {
          key: "formatValue",
          value: function formatValue(value, unit, _ref3) {
            var labels = _ref3.labels, future = _ref3.future;
            return this.getFormattingRule(labels, unit, value, {
              future
            }).replace("{0}", this.formatNumber(Math.abs(value)));
          }
        }, {
          key: "getFormattingRule",
          value: function getFormattingRule(formattingRules, unit, value, _ref4) {
            var future = _ref4.future;
            var locale = this.locale;
            formattingRules = formattingRules[unit];
            if (typeof formattingRules === "string") {
              return formattingRules;
            }
            var pastOrFuture = value === 0 ? future ? "future" : "past" : value < 0 ? "past" : "future";
            var quantifierRules = formattingRules[pastOrFuture] || formattingRules;
            if (typeof quantifierRules === "string") {
              return quantifierRules;
            }
            var quantifier = this.getPluralRules().select(Math.abs(value));
            return quantifierRules[quantifier] || quantifierRules.other;
          }
        }, {
          key: "formatNumber",
          value: function formatNumber(number) {
            return this.numberFormat ? this.numberFormat.format(number) : String(number);
          }
        }, {
          key: "getFormatter",
          value: function getFormatter(labelsType) {
            return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
              style: labelsType
            }));
          }
        }, {
          key: "getPluralRules",
          value: function getPluralRules() {
            return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
          }
        }, {
          key: "getLabels",
          value: function getLabels() {
            var labelsType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            if (typeof labelsType === "string") {
              labelsType = [labelsType];
            }
            labelsType = labelsType.map(function(labelsType2) {
              switch (labelsType2) {
                case "tiny":
                case "mini-time":
                  return "mini";
                default:
                  return labelsType2;
              }
            });
            labelsType = labelsType.concat("long");
            var localeData = (0, _LocaleDataStore.getLocaleData)(this.locale);
            for (var _iterator = labelsType, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
              var _ref5;
              if (_isArray) {
                if (_i2 >= _iterator.length)
                  break;
                _ref5 = _iterator[_i2++];
              } else {
                _i2 = _iterator.next();
                if (_i2.done)
                  break;
                _ref5 = _i2.value;
              }
              var _labelsType = _ref5;
              if (localeData[_labelsType]) {
                return {
                  labelsType: _labelsType,
                  labels: localeData[_labelsType]
                };
              }
            }
          }
        }]);
        return TimeAgo2;
      }();
      exports.default = TimeAgo;
      var defaultLocale = "en";
      TimeAgo.getDefaultLocale = function() {
        return defaultLocale;
      };
      TimeAgo.setDefaultLocale = function(locale) {
        return defaultLocale = locale;
      };
      TimeAgo.addDefaultLocale = function(localeData) {
        if (defaultLocaleHasBeenSpecified) {
          return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
        }
        defaultLocaleHasBeenSpecified = true;
        TimeAgo.setDefaultLocale(localeData.locale);
        TimeAgo.addLocale(localeData);
      };
      var defaultLocaleHasBeenSpecified;
      TimeAgo.addLocale = function(localeData) {
        (0, _LocaleDataStore.addLocaleData)(localeData);
        _relativeTimeFormat.default.addLocale(localeData);
      };
      TimeAgo.locale = TimeAgo.addLocale;
      TimeAgo.addLabels = function(locale, name, labels) {
        var localeData = (0, _LocaleDataStore.getLocaleData)(locale);
        if (!localeData) {
          (0, _LocaleDataStore.addLocaleData)({
            locale
          });
          localeData = (0, _LocaleDataStore.getLocaleData)(locale);
        }
        localeData[name] = labels;
      };
      function getTimestamp(input) {
        if (input.constructor === Date || isMockedDate(input)) {
          return input.getTime();
        }
        if (typeof input === "number") {
          return input;
        }
        throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
      }
      function isMockedDate(object) {
        return _typeof(object) === "object" && typeof object.getTime === "function";
      }
      function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
        var units = Object.keys(labels);
        if (nowLabel) {
          units.push("now");
        }
        if (allowedUnits) {
          units = allowedUnits.filter(function(unit) {
            return unit === "now" || units.indexOf(unit) >= 0;
          });
        }
        return units;
      }
      function getNowLabel(labels, nowLabels, longLabels, future) {
        var nowLabel = labels.now || nowLabels && nowLabels.now;
        if (nowLabel) {
          if (typeof nowLabel === "string") {
            return nowLabel;
          }
          if (future) {
            return nowLabel.future;
          } else {
            return nowLabel.past;
          }
        }
        if (longLabels && longLabels.second && longLabels.second.current) {
          return longLabels.second.current;
        }
      }
      function isStyle(variable) {
        return typeof variable === "string" || (0, _isStyleObject.default)(variable);
      }
    }
  });

  // node_modules/javascript-time-ago/index.commonjs.js
  var require_index_commonjs2 = __commonJS({
    "node_modules/javascript-time-ago/index.commonjs.js"(exports, module) {
      "use strict";
      exports = module.exports = require_TimeAgo().default;
      exports["default"] = require_TimeAgo().default;
      var locale = require_locale();
      exports.intlDateTimeFormatSupported = locale.intlDateTimeFormatSupported;
      exports.intlDateTimeFormatSupportedLocale = locale.intlDateTimeFormatSupportedLocale;
    }
  });

  // node_modules/javascript-time-ago/locale/en.json
  var require_en = __commonJS({
    "node_modules/javascript-time-ago/locale/en.json"(exports, module) {
      module.exports = {
        locale: "en",
        long: {
          year: {
            previous: "last year",
            current: "this year",
            next: "next year",
            past: {
              one: "{0} year ago",
              other: "{0} years ago"
            },
            future: {
              one: "in {0} year",
              other: "in {0} years"
            }
          },
          quarter: {
            previous: "last quarter",
            current: "this quarter",
            next: "next quarter",
            past: {
              one: "{0} quarter ago",
              other: "{0} quarters ago"
            },
            future: {
              one: "in {0} quarter",
              other: "in {0} quarters"
            }
          },
          month: {
            previous: "last month",
            current: "this month",
            next: "next month",
            past: {
              one: "{0} month ago",
              other: "{0} months ago"
            },
            future: {
              one: "in {0} month",
              other: "in {0} months"
            }
          },
          week: {
            previous: "last week",
            current: "this week",
            next: "next week",
            past: {
              one: "{0} week ago",
              other: "{0} weeks ago"
            },
            future: {
              one: "in {0} week",
              other: "in {0} weeks"
            }
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            },
            future: {
              one: "in {0} day",
              other: "in {0} days"
            }
          },
          hour: {
            current: "this hour",
            past: {
              one: "{0} hour ago",
              other: "{0} hours ago"
            },
            future: {
              one: "in {0} hour",
              other: "in {0} hours"
            }
          },
          minute: {
            current: "this minute",
            past: {
              one: "{0} minute ago",
              other: "{0} minutes ago"
            },
            future: {
              one: "in {0} minute",
              other: "in {0} minutes"
            }
          },
          second: {
            current: "now",
            past: {
              one: "{0} second ago",
              other: "{0} seconds ago"
            },
            future: {
              one: "in {0} second",
              other: "in {0} seconds"
            }
          }
        },
        short: {
          year: {
            previous: "last yr.",
            current: "this yr.",
            next: "next yr.",
            past: "{0} yr. ago",
            future: "in {0} yr."
          },
          quarter: {
            previous: "last qtr.",
            current: "this qtr.",
            next: "next qtr.",
            past: {
              one: "{0} qtr. ago",
              other: "{0} qtrs. ago"
            },
            future: {
              one: "in {0} qtr.",
              other: "in {0} qtrs."
            }
          },
          month: {
            previous: "last mo.",
            current: "this mo.",
            next: "next mo.",
            past: "{0} mo. ago",
            future: "in {0} mo."
          },
          week: {
            previous: "last wk.",
            current: "this wk.",
            next: "next wk.",
            past: "{0} wk. ago",
            future: "in {0} wk."
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            },
            future: {
              one: "in {0} day",
              other: "in {0} days"
            }
          },
          hour: {
            current: "this hour",
            past: "{0} hr. ago",
            future: "in {0} hr."
          },
          minute: {
            current: "this minute",
            past: "{0} min. ago",
            future: "in {0} min."
          },
          second: {
            current: "now",
            past: "{0} sec. ago",
            future: "in {0} sec."
          }
        },
        narrow: {
          year: {
            previous: "last yr.",
            current: "this yr.",
            next: "next yr.",
            past: "{0} yr. ago",
            future: "in {0} yr."
          },
          quarter: {
            previous: "last qtr.",
            current: "this qtr.",
            next: "next qtr.",
            past: {
              one: "{0} qtr. ago",
              other: "{0} qtrs. ago"
            },
            future: {
              one: "in {0} qtr.",
              other: "in {0} qtrs."
            }
          },
          month: {
            previous: "last mo.",
            current: "this mo.",
            next: "next mo.",
            past: "{0} mo. ago",
            future: "in {0} mo."
          },
          week: {
            previous: "last wk.",
            current: "this wk.",
            next: "next wk.",
            past: "{0} wk. ago",
            future: "in {0} wk."
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            },
            future: {
              one: "in {0} day",
              other: "in {0} days"
            }
          },
          hour: {
            current: "this hour",
            past: "{0} hr. ago",
            future: "in {0} hr."
          },
          minute: {
            current: "this minute",
            past: "{0} min. ago",
            future: "in {0} min."
          },
          second: {
            current: "now",
            past: "{0} sec. ago",
            future: "in {0} sec."
          }
        },
        "short-time": {
          year: "{0} yr.",
          month: "{0} mo.",
          week: "{0} wk.",
          day: {
            one: "{0} day",
            other: "{0} days"
          },
          hour: "{0} hr.",
          minute: "{0} min.",
          second: "{0} sec."
        },
        "long-time": {
          year: {
            one: "{0} year",
            other: "{0} years"
          },
          month: {
            one: "{0} month",
            other: "{0} months"
          },
          week: {
            one: "{0} week",
            other: "{0} weeks"
          },
          day: {
            one: "{0} day",
            other: "{0} days"
          },
          hour: {
            one: "{0} hour",
            other: "{0} hours"
          },
          minute: {
            one: "{0} minute",
            other: "{0} minutes"
          },
          second: {
            one: "{0} second",
            other: "{0} seconds"
          }
        },
        now: {
          now: {
            current: "now",
            future: "in a moment",
            past: "just now"
          }
        },
        tiny: {
          year: "{0}yr",
          month: "{0}mo",
          week: "{0}wk",
          day: "{0}d",
          hour: "{0}h",
          minute: "{0}m",
          second: "{0}s",
          now: "now"
        },
        mini: {
          year: "{0}yr",
          month: "{0}mo",
          week: "{0}wk",
          day: "{0}d",
          hour: "{0}h",
          minute: "{0}m",
          second: "{0}s",
          now: "now"
        }
      };
    }
  });

  // views/chitterView.js
  var require_chitterView = __commonJS({
    "views/chitterView.js"(exports, module) {
      var TimeAgo = require_index_commonjs2();
      var en = require_en();
      TimeAgo.addDefaultLocale(en);
      var ChitterView2 = class {
        constructor(ChitterModel2, api2) {
          this.model = ChitterModel2;
          this.api = api2;
          this.timeAgo = new TimeAgo("en-US");
          this.mainContainerEl = document.querySelector("#main-container");
          this.submitLogonEl = document.querySelector("#logon");
          this.submitLogonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.startSession();
          });
          this.logOffEl = document.querySelector("#logoff");
          this.logOffEl.addEventListener("click", (e) => {
            localStorage.clear();
            this.hideAddPeep();
            this.hideWelcome();
            this.showPeeps();
          });
          this.modalEl = document.getElementById("registration-modal");
          this.registerEl = document.querySelector("#register");
          this.registerEl.addEventListener("click", (e) => {
            this.showRegisterModal();
          });
          this.spanEl = document.getElementsByClassName("close")[0];
          this.spanEl.addEventListener("click", () => {
            this.modalEl.style.display = "none";
          });
          window.addEventListener("click", (e) => {
            if (e.target == this.modalEl) {
              this.modalEl.style.display = "none";
            }
          });
          this.registerButtonEl = document.getElementById("create-user");
          this.registerButtonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.createUser();
            this.spanEl.click();
          });
        }
        showRegisterModal() {
          this.modalEl.style.display = "block";
        }
        showPeeps() {
          const peeps = this.model.getPeeps();
          document.querySelectorAll(".peep").forEach((e) => e.remove());
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            const paraEl = document.createElement("p");
            const paraEl2 = document.createElement("p");
            const linebreakEl = document.createElement("br");
            paraEl2.innerText = peep.user.handle + " " + this.timeAgo.format(Date.parse(peep.created_at));
            paraEl.innerText = peep.body;
            peepEl.className = "peep";
            peepEl.appendChild(paraEl2);
            peepEl.appendChild(paraEl);
            if (peep.user.id == localStorage.getItem("user-id")) {
              const imgDelEl = this.createDeleteElement(peep);
              peepEl.appendChild(imgDelEl);
            }
            this.mainContainerEl.append(peepEl);
          });
        }
        createDeleteElement(peep) {
          const imgDelEl = document.createElement("img");
          imgDelEl.id = peep.id;
          imgDelEl.src = "https://img.icons8.com/dotty/80/000000/filled-trash.png";
          imgDelEl.style.width = "20px";
          imgDelEl.style.height = "20px";
          imgDelEl.addEventListener("click", (e) => {
            this.deletePeep(peep.id);
          });
          return imgDelEl;
        }
        startSession() {
          localStorage.clear();
          const inputHandleEl = document.getElementById("handle");
          const inputPasswordEl = document.getElementById("password");
          localStorage.setItem("handle", inputHandleEl.value);
          var promise = new Promise((resolve) => {
            this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) => {
              resolve(session);
            });
          });
          promise.then((session) => {
            this.setLocalStorage(session);
            this.showPeeps();
            this.showAddPeep();
            this.showWelcome();
            inputHandleEl.value = "";
            inputPasswordEl.value = "";
          });
        }
        deletePeep(peepId) {
          const sessionKey = localStorage.getItem("session-key");
          this.api.deletePeep(peepId, sessionKey);
          this.model.removePeep(peepId);
          this.showPeeps();
        }
        addPeep() {
          const peepInputEl = document.getElementById("peep-input");
          const userId = localStorage.getItem("user-id");
          const sessionKey = localStorage.getItem("session-key");
          this.api.createPeep(userId, sessionKey, peepInputEl.value, (response) => {
            this.model.addPeep(response);
            this.showPeeps();
          });
          peepInputEl.value = "";
        }
        createUser() {
          const inputHandleEl = document.getElementById("new-user-handle");
          const inputPasswordEl = document.getElementById("new-user-password");
          this.api.createUser(inputHandleEl.value, inputPasswordEl.value, (session) => {
            console.log(session);
          });
          inputHandleEl.value = "";
          inputPasswordEl.value = "";
        }
        setLocalStorage(session) {
          localStorage.setItem("user-id", session.user_id);
          localStorage.setItem("session-key", session.session_key);
        }
        showWelcome() {
          const welcomeEl = document.createElement("div");
          welcomeEl.id = "welcome";
          this.mainContainerEl.prepend(welcomeEl);
          const welcomeTextEl = document.createElement("p");
          welcomeTextEl.id = "welcomeText";
          welcomeEl.appendChild(welcomeTextEl);
          welcomeTextEl.innerText = "Welcome " + localStorage.getItem("handle");
        }
        hideWelcome() {
          const welcomeEl = document.getElementById("welcome");
          if (welcomeEl != null) {
            while (welcomeEl.firstChild) {
              welcomeEl.firstChild.remove();
            }
            this.mainContainerEl.removeChild(welcomeEl);
          }
        }
        showAddPeep() {
          const peepFormEl = document.createElement("form");
          peepFormEl.id = "peep-container";
          const peepInputEl = document.createElement("input");
          peepInputEl.id = "peep-input";
          peepInputEl.setAttribute("type", "text");
          peepInputEl.setAttribute("placeholder", "peep here");
          const submitPeepEl = document.createElement("input");
          submitPeepEl.id = "peep-submit";
          submitPeepEl.setAttribute("type", "submit");
          submitPeepEl.setAttribute("value", "Peep");
          submitPeepEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.addPeep();
          });
          peepFormEl.appendChild(peepInputEl);
          peepFormEl.appendChild(submitPeepEl);
          this.mainContainerEl.prepend(peepFormEl);
        }
        hideAddPeep() {
          const adPeepEl = document.getElementById("peep-container");
          if (adPeepEl != null) {
            while (adPeepEl.firstChild) {
              adPeepEl.firstChild.remove();
            }
            this.mainContainerEl.removeChild(adPeepEl);
          }
        }
      };
      module.exports = ChitterView2;
    }
  });

  // lib/chitterApi.js
  var require_chitterApi = __commonJS({
    "lib/chitterApi.js"(exports, module) {
      var ChitterApi = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        async startSession(handle, password, callback) {
          let header = new Headers();
          header.set("content-type", "application/json");
          try {
            const payload = JSON.stringify({ session: { handle, password } });
            const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
              method: "POST",
              headers: header,
              body: payload
            });
            const json = await response.json();
            callback(json);
          } catch (error) {
            console.error("Error:", error);
          }
        }
        createPeep(userId, sessionKey, peep, callback) {
          const payload = JSON.stringify({ peep: { user_id: userId, body: peep } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        createUser(handle, password, callback) {
          const payload = JSON.stringify({ user: { handle, password } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        deletePeep(peepId, sessionKey) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
            method: "DELETE",
            headers: {
              "Authorization": `Token token=${sessionKey}`
            }
          }).catch((error) => console.error("Error:", error));
        }
      };
      module.exports = ChitterApi;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChittersApi = require_chitterApi();
  var api = new ChittersApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  localStorage.clear();
  console.log(localStorage.getItem("user-id"));
  api.loadPeeps((peeps) => {
    model.setPeeps(peeps);
    view.showPeeps();
  });
})();
