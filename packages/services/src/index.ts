function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/*
* This tag manager service just helps with the programmatic way of sending events to google tag manager
* First you will have to configure and add gtm scripts for this service to work.
* More info here: https://www.notion.so/mrmilu/Integraci-n-GTM-4c005048b39845bc9e71b5827e3d7d0b
*/


var TagManagerService = /*#__PURE__*/function () {
  function TagManagerService() {
    _classCallCheck(this, TagManagerService);

    _defineProperty(this, "dataLayer", null);

    if (typeof window !== "undefined" && !window.dataLayer) {
      this.dataLayer = window.dataLayer || [];
    }
  }

  _createClass(TagManagerService, [{
    key: "sendEvent",
    value: function sendEvent(name, parameters) {
      if (this.dataLayer) {
        this.dataLayer.push(_objectSpread2({
          event: name
        }, parameters));
      }
    }
  }]);

  return TagManagerService;
}();

var TagManagerService$1 = TagManagerService;

export { TagManagerService$1 as TagManagerService };
