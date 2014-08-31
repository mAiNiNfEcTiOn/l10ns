function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['JavascriptWrapper']=function anonymous(it) {
var out=';(function() {\n  var localizations = {\n    \'en-US\': {\n      \'key-1\': function(it) {\n'+(it.functionBody)+'\n      }\n    }\n  };\n\n  function requireLocale(locale) {\n    return (function(locale) {\n      return function l(key) {\n        if(!(locale in localizations)) {\n          return \'LOCALE_NOT_IN_LOCALIZATIONS: \' + locale;\n        }\n        if(!(key in localizations[locale])) {\n          return \'KEY_NOT_IN_LOCALIZATIONS: \' + key;\n        }\n        return localizations[locale][key].call(undefined, arguments[1]);\n      };\n    })(locale);\n  };\n\n  if(typeof require === "function" && typeof exports === \'object\' && typeof module === \'object\') {\n    module.exports = requireLocale;\n  }\n  else if (typeof define === "function" && define.amd) {\n    define(function() {\n      return requireLocale;\n    });\n  }\n  else {\n    window.requireLocale = requireLocale;\n  }\n})();\n';return out;
};
module.exports = tmpl;