/*
Copyright (c) 2017 NAVER Corp.
@egjs/flicking project is licensed under the MIT <https://naver.github.io/egjs/license.txt> license

@egjs/flicking JavaScript library
https://github.com/naver/egjs-flicking

@version 2.4.1

All-in-one packaged file for ease use of '@egjs/flicking' with below dependencies.
- @egjs/axes ^2.5.7, @egjs/component ^2.1.2
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.eg = global.eg || {}, global.eg.Flicking = factory());
}(this, (function () { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /*
  Copyright (c) 2017 NAVER Corp.
  @egjs/component project is licensed under the MIT license

  @egjs/component JavaScript library
  https://naver.github.io/egjs-component

  @version 2.1.2
  */

  /**
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */
  function isUndefined(value) {
    return typeof value === "undefined";
  }
  /**
   * A class used to manage events in a component
   * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
   * @alias eg.Component
   */


  var Component =
  /*#__PURE__*/
  function () {
    var Component =
    /*#__PURE__*/
    function () {
      /**
      * Version info string
      * @ko 버전정보 문자열
      * @name VERSION
      * @static
      * @type {String}
      * @example
      * eg.Component.VERSION;  // ex) 2.0.0
      * @memberof eg.Component
      */

      /**
       * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
       */
      function Component() {
        this._eventHandler = {};
        this.options = {};
      }
      /**
       * Triggers a custom event.
       * @ko 커스텀 이벤트를 발생시킨다
       * @param {String} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
       * @param {Object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
       * @return {Boolean} Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">Ref</a> <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">참고</a></ko>
       * @example
      class Some extends eg.Component {
       some(){
       	if(this.trigger("beforeHi")){ // When event call to stop return false.
      	this.trigger("hi");// fire hi event.
       	}
       }
      }
      const some = new Some();
      some.on("beforeHi", (e) => {
      if(condition){
      	e.stop(); // When event call to stop, `hi` event not call.
      }
      });
      some.on("hi", (e) => {
      // `currentTarget` is component instance.
      console.log(some === e.currentTarget); // true
      });
      // If you want to more know event design. You can see article.
      // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
       */


      var _proto = Component.prototype;

      _proto.trigger = function trigger(eventName, customEvent) {
        if (customEvent === void 0) {
          customEvent = {};
        }

        var handlerList = this._eventHandler[eventName] || [];
        var hasHandlerList = handlerList.length > 0;

        if (!hasHandlerList) {
          return true;
        } // If detach method call in handler in first time then handler list calls.


        handlerList = handlerList.concat();
        customEvent.eventType = eventName;
        var isCanceled = false;
        var arg = [customEvent];
        var i = 0;

        customEvent.stop = function () {
          isCanceled = true;
        };

        customEvent.currentTarget = this;

        for (var _len = arguments.length, restParam = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParam[_key - 2] = arguments[_key];
        }

        if (restParam.length >= 1) {
          arg = arg.concat(restParam);
        }

        for (i = 0; handlerList[i]; i++) {
          handlerList[i].apply(this, arg);
        }

        return !isCanceled;
      };
      /**
       * Executed event just one time.
       * @ko 이벤트가 한번만 실행된다.
       * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
       * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
      class Some extends eg.Component {
       hi() {
         alert("hi");
       }
       thing() {
         this.once("hi", this.hi);
       }
      }
      var some = new Some();
      some.thing();
      some.trigger("hi");
      // fire alert("hi");
      some.trigger("hi");
      // Nothing happens
       */


      _proto.once = function once(eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;
          var i;

          for (i in eventHash) {
            this.once(i, eventHash[i]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var self = this;
          this.on(eventName, function listener() {
            for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              arg[_key2] = arguments[_key2];
            }

            handlerToAttach.apply(self, arg);
            self.off(eventName, listener);
          });
        }

        return this;
      };
      /**
       * Checks whether an event has been attached to a component.
       * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
       * @param {String} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
       * @return {Boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
       * @example
      class Some extends eg.Component {
       some() {
         this.hasOn("hi");// check hi event.
       }
      }
       */


      _proto.hasOn = function hasOn(eventName) {
        return !!this._eventHandler[eventName];
      };
      /**
       * Attaches an event to a component.
       * @ko 컴포넌트에 이벤트를 등록한다.
       * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
       * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
      class Some extends eg.Component {
       hi() {
         console.log("hi");
       }
       some() {
         this.on("hi",this.hi); //attach event
       }
      }
      */


      _proto.on = function on(eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;
          var name;

          for (name in eventHash) {
            this.on(name, eventHash[name]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var handlerList = this._eventHandler[eventName];

          if (isUndefined(handlerList)) {
            this._eventHandler[eventName] = [];
            handlerList = this._eventHandler[eventName];
          }

          handlerList.push(handlerToAttach);
        }

        return this;
      };
      /**
       * Detaches an event from the component.
       * @ko 컴포넌트에 등록된 이벤트를 해제한다
       * @param {eventName} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
       * @param {Function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
       * @return {eg.Component} An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
       * @example
      class Some extends eg.Component {
       hi() {
         console.log("hi");
       }
       some() {
         this.off("hi",this.hi); //detach event
       }
      }
       */


      _proto.off = function off(eventName, handlerToDetach) {
        // All event detach.
        if (isUndefined(eventName)) {
          this._eventHandler = {};
          return this;
        } // All handler of specific event detach.


        if (isUndefined(handlerToDetach)) {
          if (typeof eventName === "string") {
            this._eventHandler[eventName] = undefined;
            return this;
          } else {
            var eventHash = eventName;
            var name;

            for (name in eventHash) {
              this.off(name, eventHash[name]);
            }

            return this;
          }
        } // The handler of specific event detach.


        var handlerList = this._eventHandler[eventName];

        if (handlerList) {
          var k;
          var handlerFunction;

          for (k = 0; (handlerFunction = handlerList[k]) !== undefined; k++) {
            if (handlerFunction === handlerToDetach) {
              handlerList = handlerList.splice(k, 1);
              break;
            }
          }
        }

        return this;
      };

      return Component;
    }();

    Component.VERSION = "2.1.2";
    return Component;
  }();

  /*! Hammer.JS - v2.0.11 - 2018-10-10
   * http://naver.github.io/egjs
   *
   * Forked By Naver egjs
   * Copyright (c) hammerjs
   * Licensed under the MIT license */
  function _defineProperty$1(obj, key, value) {
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

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }
  /**
   * @private
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */


  var assign;

  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];

        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }

      return output;
    };
  } else {
    assign = Object.assign;
  }

  var assign$1 = assign;
  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round,
      abs = Math.abs;
  var now = Date.now;
  /**
   * @private
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */

  function prefixed(obj, property) {
    var prefix;
    var prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;

    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;

      if (prop in obj) {
        return prop;
      }

      i++;
    }

    return undefined;
  }

  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }

    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      return touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }

  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = 'ontouchstart' in window;
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];
  /**
   * @private
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */

  function each(obj, iterator, context) {
    var i;

    if (!obj) {
      return;
    }

    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;

      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  /**
   * @private
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */


  function boolOrFn(val, args) {
    if (typeof val === TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }

    return val;
  }
  /**
   * @private
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */


  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  /**
   * @private
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */


  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning

    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    } // pan-x OR pan-y


    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    } // manipulation


    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
  }
  /**
   * @private
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */


  var TouchAction =
  /*#__PURE__*/
  function () {
    function TouchAction(manager, value) {
      this.manager = manager;
      this.set(value);
    }
    /**
     * @private
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */


    var _proto = TouchAction.prototype;

    _proto.set = function set(value) {
      // find out the touch-action by the event handlers
      if (value === TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }

      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }

      this.actions = value.toLowerCase().trim();
    };
    /**
     * @private
     * just re-set the touchAction value
     */


    _proto.update = function update() {
      this.set(this.manager.options.touchAction);
    };
    /**
     * @private
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */


    _proto.compute = function compute() {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    };
    /**
     * @private
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */


    _proto.preventDefaults = function preventDefaults(input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection; // if the touch action did prevented once this session

      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }

      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

      if (hasNone) {
        // do not prevent defaults if this is a tap gesture
        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;

        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }

      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }

      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    };
    /**
     * @private
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */


    _proto.preventSrc = function preventSrc(srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    };

    return TouchAction;
  }();
  /**
   * @private
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */


  function hasParent(node, parent) {
    while (node) {
      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }
  /**
   * @private
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */


  function getCenter(pointers) {
    var pointersLength = pointers.length; // no need to loop when only one touch

    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }

    var x = 0;
    var y = 0;
    var i = 0;

    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }

    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  /**
   * @private
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */


  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;

    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }

    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  /**
   * @private
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */


  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]];
    var y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }
  /**
   * @private
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */


  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]];
    var y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  /**
   * @private
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */


  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }

  function computeDeltaXY(session, input) {
    var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
    // jscs throwing error on defalut destructured values and without defaults tests fail

    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  /**
   * @private
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */


  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  /**
   * @private
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */


  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  /**
   * @private
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */


  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  /**
   * @private
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */


  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input;
    var deltaTime = input.timeStamp - last.timeStamp;
    var velocity;
    var velocityX;
    var velocityY;
    var direction;

    if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  /**
  * @private
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */


  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length; // store the first input to calculate the distance and direction

    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    } // to compute scale and rotation we need to store the multiple touches


    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }

    var firstInput = session.firstInput,
        firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input); // find the correct target

    var target = manager.element;

    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }

    input.target = target;
  }
  /**
   * @private
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */


  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
      manager.session = {};
    } // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'


    input.eventType = eventType; // compute scale, rotation etc

    computeInputData(manager, input); // emit secret event

    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  /**
   * @private
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */


  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  /**
   * @private
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }
  /**
   * @private
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }
  /**
   * @private
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */


  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  /**
   * @private
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */


  var Input =
  /*#__PURE__*/
  function () {
    function Input(manager, callback) {
      var self = this;
      this.manager = manager;
      this.callback = callback;
      this.element = manager.element;
      this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
      // so when disabled the input events are completely bypassed.

      this.domHandler = function (ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
          self.handler(ev);
        }
      };

      this.init();
    }
    /**
     * @private
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */


    var _proto = Input.prototype;

    _proto.handler = function handler() {};
    /**
     * @private
     * bind the events
     */


    _proto.init = function init() {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    };
    /**
     * @private
     * unbind the events
     */


    _proto.destroy = function destroy() {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    };

    return Input;
  }();
  /**
   * @private
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */


  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;

      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          // do not use === here, test fails
          return i;
        }

        i++;
      }

      return -1;
    }
  }

  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  }; // in IE10 the pointer types is defined as an enum

  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }
  /**
   * @private
   * Pointer events input
   * @constructor
   * @extends Input
   */


  var PointerEventInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose$1(PointerEventInput, _Input);

    function PointerEventInput() {
      var _this;

      var proto = PointerEventInput.prototype;
      proto.evEl = POINTER_ELEMENT_EVENTS;
      proto.evWin = POINTER_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.store = _this.manager.session.pointerEvents = [];
      return _this;
    }
    /**
     * @private
     * handle mouse events
     * @param {Object} ev
     */


    var _proto = PointerEventInput.prototype;

    _proto.handler = function handler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

      var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      } // it not found, so the pointer hasn't been down (so it's probably a hover)


      if (storeIndex < 0) {
        return;
      } // update the event in the store


      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });

      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    };

    return PointerEventInput;
  }(Input);
  /**
   * @private
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */


  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  /**
   * @private
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */


  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
      var val = key ? src[i][key] : src[i];

      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }

      values[i] = val;
      i++;
    }

    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function (a, b) {
          return a[key] > b[key];
        });
      }
    }

    return results;
  }

  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * @private
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */

  var TouchInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose$1(TouchInput, _Input);

    function TouchInput() {
      TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
      TouchInput.prototype.targetIds = {};
      return _Input.apply(this, arguments) || this; // this.evTarget = TOUCH_TARGET_EVENTS;
      // this.targetIds = {};
    }

    var _proto = TouchInput.prototype;

    _proto.handler = function handler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);

      if (!touches) {
        return;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    };

    return TouchInput;
  }(Input);

  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }

    var i;
    var targetTouches;
    var changedTouches = toArray(ev.changedTouches);
    var changedTargetTouches = [];
    var target = this.target; // get target touches from touches

    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    }); // collect touches

    if (type === INPUT_START) {
      i = 0;

      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    } // filter changed touches to only contain touches that exist in the collected target ids


    i = 0;

    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      } // cleanup removed touches


      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }

      i++;
    }

    if (!changedTargetTouches.length) {
      return;
    }

    return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }

  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
  /**
   * @private
   * Mouse events input
   * @constructor
   * @extends Input
   */

  var MouseInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose$1(MouseInput, _Input);

    function MouseInput() {
      var _this;

      var proto = MouseInput.prototype;
      proto.evEl = MOUSE_ELEMENT_EVENTS;
      proto.evWin = MOUSE_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.pressed = false; // mousedown state

      return _this;
    }
    /**
     * @private
     * handle mouse events
     * @param {Object} ev
     */


    var _proto = MouseInput.prototype;

    _proto.handler = function handler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }

      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      } // mouse must be down


      if (!this.pressed) {
        return;
      }

      if (eventType & INPUT_END) {
        this.pressed = false;
      }

      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    };

    return MouseInput;
  }(Input);
  /**
   * @private
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */


  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;

  function setLastTouch(eventData) {
    var _eventData$changedPoi = eventData.changedPointers,
        touch = _eventData$changedPoi[0];

    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      var lts = this.lastTouches;
      this.lastTouches.push(lastTouch);

      var removeLastTouch = function removeLastTouch() {
        var i = lts.indexOf(lastTouch);

        if (i > -1) {
          lts.splice(i, 1);
        }
      };

      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }

  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }

  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX;
    var y = eventData.srcEvent.clientY;

    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x);
      var dy = Math.abs(y - t.y);

      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }

    return false;
  }

  var TouchMouseInput =
  /*#__PURE__*/
  function () {
    var TouchMouseInput =
    /*#__PURE__*/
    function (_Input) {
      _inheritsLoose$1(TouchMouseInput, _Input);

      function TouchMouseInput(_manager, callback) {
        var _this;

        _this = _Input.call(this, _manager, callback) || this;

        _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handler", function (manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
          var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputData)) {
            return;
          }

          _this.callback(manager, inputEvent, inputData);
        });

        _this.touch = new TouchInput(_this.manager, _this.handler);
        _this.mouse = new MouseInput(_this.manager, _this.handler);
        _this.primaryTouch = null;
        _this.lastTouches = [];
        return _this;
      }
      /**
       * @private
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */


      var _proto = TouchMouseInput.prototype;
      /**
       * @private
       * remove the event listeners
       */

      _proto.destroy = function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
      };

      return TouchMouseInput;
    }(Input);

    return TouchMouseInput;
  }();
  /**
   * @private
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */


  function createInputInstance(manager) {
    var Type; // let inputClass = manager.options.inputClass;

    var inputClass = manager.options.inputClass;

    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }

    return new Type(manager, inputHandler);
  }
  /**
   * @private
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */


  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }

    return false;
  }

  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;
  /**
   * @private
   * get a unique id
   * @returns {number} uniqueId
   */

  var _uniqueId = 1;

  function uniqueId() {
    return _uniqueId++;
  }
  /**
   * @private
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */


  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;

    if (manager) {
      return manager.get(otherRecognizer);
    }

    return otherRecognizer;
  }
  /**
   * @private
   * get a usable string, used as event postfix
   * @param {constant} state
   * @returns {String} state
   */


  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }

    return '';
  }
  /**
   * @private
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */

  /**
   * @private
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */


  var Recognizer =
  /*#__PURE__*/
  function () {
    function Recognizer(options) {
      if (options === void 0) {
        options = {};
      }

      this.options = _extends$1({
        enable: true
      }, options);
      this.id = uniqueId();
      this.manager = null; // default is enable true

      this.state = STATE_POSSIBLE;
      this.simultaneous = {};
      this.requireFail = [];
    }
    /**
     * @private
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */


    var _proto = Recognizer.prototype;

    _proto.set = function set(options) {
      assign$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

      this.manager && this.manager.touchAction.update();
      return this;
    };
    /**
     * @private
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.recognizeWith = function recognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }

      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }

      return this;
    };
    /**
     * @private
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    };
    /**
     * @private
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.requireFailure = function requireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }

      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }

      return this;
    };
    /**
     * @private
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);

      if (index > -1) {
        this.requireFail.splice(index, 1);
      }

      return this;
    };
    /**
     * @private
     * has require failures boolean
     * @returns {boolean}
     */


    _proto.hasRequireFailures = function hasRequireFailures() {
      return this.requireFail.length > 0;
    };
    /**
     * @private
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */


    _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    };
    /**
     * @private
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */


    _proto.emit = function emit(input) {
      var self = this;
      var state = this.state;

      function emit(event) {
        self.manager.emit(event, input);
      } // 'panstart' and 'panmove'


      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }

      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      } // panend and pancancel


      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    };
    /**
     * @private
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */


    _proto.tryEmit = function tryEmit(input) {
      if (this.canEmit()) {
        return this.emit(input);
      } // it's failing anyway


      this.state = STATE_FAILED;
    };
    /**
     * @private
     * can we emit?
     * @returns {boolean}
     */


    _proto.canEmit = function canEmit() {
      var i = 0;

      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }

        i++;
      }

      return true;
    };
    /**
     * @private
     * update the recognizer
     * @param {Object} inputData
     */


    _proto.recognize = function recognize(inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign$1({}, inputData); // is is enabled and allow recognizing?

      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      } // reset when we've reached the end


      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }

      this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
      // so trigger an event

      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    };
    /**
     * @private
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {constant} STATE
     */

    /* jshint ignore:start */


    _proto.process = function process(inputData) {};
    /* jshint ignore:end */

    /**
     * @private
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */


    _proto.getTouchAction = function getTouchAction() {};
    /**
     * @private
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */


    _proto.reset = function reset() {};

    return Recognizer;
  }();

  var defaults = {
    /**
     * @private
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * @private
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @private
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * @private
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * @private
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * @private
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [],

    /**
     * @private
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * @private
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: "none",

      /**
       * @private
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: "none",

      /**
       * @private
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: "none",

      /**
       * @private
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: "none",

      /**
       * @private
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: "none",

      /**
       * @private
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;
  /**
   * @private
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */

  function toggleCssProps(manager, add) {
    var element = manager.element;

    if (!element.style) {
      return;
    }

    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);

      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || "";
      }
    });

    if (!add) {
      manager.oldCssProps = {};
    }
  }
  /**
   * @private
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */


  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent("Event");
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  /**
  * @private
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */


  var Manager =
  /*#__PURE__*/
  function () {
    function Manager(element, options) {
      var _this = this;

      this.options = assign$1({}, defaults, options || {});
      this.options.inputTarget = this.options.inputTarget || element;
      this.handlers = {};
      this.session = {};
      this.recognizers = [];
      this.oldCssProps = {};
      this.element = element;
      this.input = createInputInstance(this);
      this.touchAction = new TouchAction(this, this.options.touchAction);
      toggleCssProps(this, true);
      each(this.options.recognizers, function (item) {
        var recognizer = _this.add(new item[0](item[1]));

        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
      }, this);
    }
    /**
     * @private
     * set options
     * @param {Object} options
     * @returns {Manager}
     */


    var _proto = Manager.prototype;

    _proto.set = function set(options) {
      assign$1(this.options, options); // Options that need a little more setup

      if (options.touchAction) {
        this.touchAction.update();
      }

      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }

      return this;
    };
    /**
     * @private
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */


    _proto.stop = function stop(force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    };
    /**
     * @private
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */


    _proto.recognize = function recognize(inputData) {
      var session = this.session;

      if (session.stopped) {
        return;
      } // run the touch-action polyfill


      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`

      var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
      // or when we're in a new session

      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        session.curRecognizer = null;
        curRecognizer = null;
      }

      var i = 0;

      while (i < recognizers.length) {
        recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.

        if (session.stopped !== FORCED_STOP && ( // 1
        !curRecognizer || recognizer === curRecognizer || // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer


        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          session.curRecognizer = recognizer;
          curRecognizer = recognizer;
        }

        i++;
      }
    };
    /**
     * @private
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */


    _proto.get = function get(recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }

      var recognizers = this.recognizers;

      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event === recognizer) {
          return recognizers[i];
        }
      }

      return null;
    };
    /**
     * @private add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */


    _proto.add = function add(recognizer) {
      if (invokeArrayArg(recognizer, "add", this)) {
        return this;
      } // remove existing


      var existing = this.get(recognizer.options.event);

      if (existing) {
        this.remove(existing);
      }

      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    };
    /**
     * @private
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */


    _proto.remove = function remove(recognizer) {
      if (invokeArrayArg(recognizer, "remove", this)) {
        return this;
      }

      var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, targetRecognizer);

        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }

      return this;
    };
    /**
     * @private
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */


    _proto.on = function on(events, handler) {
      if (events === undefined || handler === undefined) {
        return this;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    };
    /**
     * @private unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */


    _proto.off = function off(events, handler) {
      if (events === undefined) {
        return this;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    };
    /**
     * @private emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */


    _proto.emit = function emit(event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      } // no handlers, so skip it all


      var handlers = this.handlers[event] && this.handlers[event].slice();

      if (!handlers || !handlers.length) {
        return;
      }

      data.type = event;

      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };

      var i = 0;

      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    };
    /**
     * @private
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */


    _proto.destroy = function destroy() {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    };

    return Manager;
  }();
  /**
   * @private
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */


  var AttrRecognizer =
  /*#__PURE__*/
  function (_Recognizer) {
    _inheritsLoose$1(AttrRecognizer, _Recognizer);

    function AttrRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _Recognizer.call(this, _extends$1({
        pointers: 1
      }, options)) || this;
    }
    /**
     * @private
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */


    var _proto = AttrRecognizer.prototype;

    _proto.attrTest = function attrTest(input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    };
    /**
     * @private
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */


    _proto.process = function process(input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }

        return state | STATE_CHANGED;
      }

      return STATE_FAILED;
    };

    return AttrRecognizer;
  }(Recognizer);
  /**
   * @private
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */


  var RotateRecognizer =
  /*#__PURE__*/
  function (_AttrRecognizer) {
    _inheritsLoose$1(RotateRecognizer, _AttrRecognizer);

    function RotateRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends$1({
        event: 'rotate',
        threshold: 0,
        pointers: 2
      }, options)) || this;
    }

    var _proto = RotateRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    };

    _proto.attrTest = function attrTest(input) {
      return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    };

    return RotateRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */


  var PinchRecognizer =
  /*#__PURE__*/
  function (_AttrRecognizer) {
    _inheritsLoose$1(PinchRecognizer, _AttrRecognizer);

    function PinchRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends$1({
        event: 'pinch',
        threshold: 0,
        pointers: 2
      }, options)) || this;
    }

    var _proto = PinchRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    };

    _proto.attrTest = function attrTest(input) {
      return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    };

    _proto.emit = function emit(input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }

      _AttrRecognizer.prototype.emit.call(this, input);
    };

    return PinchRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * direction cons to string
   * @param {constant} direction
   * @returns {String}
   */


  function directionStr(direction) {
    if (direction === DIRECTION_DOWN) {
      return 'down';
    } else if (direction === DIRECTION_UP) {
      return 'up';
    } else if (direction === DIRECTION_LEFT) {
      return 'left';
    } else if (direction === DIRECTION_RIGHT) {
      return 'right';
    }

    return '';
  }
  /**
   * @private
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */


  var PanRecognizer =
  /*#__PURE__*/
  function (_AttrRecognizer) {
    _inheritsLoose$1(PanRecognizer, _AttrRecognizer);

    function PanRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _AttrRecognizer.call(this, _extends$1({
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
      }, options)) || this;
      _this.pX = null;
      _this.pY = null;
      return _this;
    }

    var _proto = PanRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      var direction = this.options.direction;
      var actions = [];

      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }

      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }

      return actions;
    };

    _proto.directionTest = function directionTest(input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY; // lock to axis?

      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x !== this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y !== this.pY;
          distance = Math.abs(input.deltaY);
        }
      }

      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    };

    _proto.attrTest = function attrTest(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
      this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    };

    _proto.emit = function emit(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);

      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }

      _AttrRecognizer.prototype.emit.call(this, input);
    };

    return PanRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */


  var SwipeRecognizer =
  /*#__PURE__*/
  function (_AttrRecognizer) {
    _inheritsLoose$1(SwipeRecognizer, _AttrRecognizer);

    function SwipeRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends$1({
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
      }, options)) || this;
    }

    var _proto = SwipeRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    };

    _proto.attrTest = function attrTest(input) {
      var direction = this.options.direction;
      var velocity;

      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }

      return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    };

    _proto.emit = function emit(input) {
      var direction = directionStr(input.offsetDirection);

      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }

      this.manager.emit(this.options.event, input);
    };

    return SwipeRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */


  var TapRecognizer =
  /*#__PURE__*/
  function (_Recognizer) {
    _inheritsLoose$1(TapRecognizer, _Recognizer);

    function TapRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _Recognizer.call(this, _extends$1({
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
      }, options)) || this; // previous time and center,
      // used for tap counting

      _this.pTime = false;
      _this.pCenter = false;
      _this._timer = null;
      _this._input = null;
      _this.count = 0;
      return _this;
    }

    var _proto = TapRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_MANIPULATION];
    };

    _proto.process = function process(input) {
      var _this2 = this;

      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();

      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      } // we only allow little movement
      // and we've reached an end event, so a tap is possible


      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType !== INPUT_END) {
          return this.failTimeout();
        }

        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;

        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }

        this._input = input; // if tap count matches we have recognized it,
        // else it has began recognizing...

        var tapCount = this.count % options.taps;

        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeout(function () {
              _this2.state = STATE_RECOGNIZED;

              _this2.tryEmit();
            }, options.interval);
            return STATE_BEGAN;
          }
        }
      }

      return STATE_FAILED;
    };

    _proto.failTimeout = function failTimeout() {
      var _this3 = this;

      this._timer = setTimeout(function () {
        _this3.state = STATE_FAILED;
      }, this.options.interval);
      return STATE_FAILED;
    };

    _proto.reset = function reset() {
      clearTimeout(this._timer);
    };

    _proto.emit = function emit() {
      if (this.state === STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    };

    return TapRecognizer;
  }(Recognizer);
  /**
   * @private
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */


  var PressRecognizer =
  /*#__PURE__*/
  function (_Recognizer) {
    _inheritsLoose$1(PressRecognizer, _Recognizer);

    function PressRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _Recognizer.call(this, _extends$1({
        event: 'press',
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
      }, options)) || this;
      _this._timer = null;
      _this._input = null;
      return _this;
    }

    var _proto = PressRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_AUTO];
    };

    _proto.process = function process(input) {
      var _this2 = this;

      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input; // we only allow little movement
      // and we've reached an end event, so a tap is possible

      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeout(function () {
          _this2.state = STATE_RECOGNIZED;

          _this2.tryEmit();
        }, options.time);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }

      return STATE_FAILED;
    };

    _proto.reset = function reset() {
      clearTimeout(this._timer);
    };

    _proto.emit = function emit(input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }

      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + "up", input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    };

    return PressRecognizer;
  }(Recognizer);
  /**
   * @private
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */


  var Hammer =
  /*#__PURE__*/
  function () {
    var Hammer =
    /**
      * @private
      * @const {string}
      */
    function Hammer(element, options) {
      if (options === void 0) {
        options = {};
      }

      return new Manager(element, _extends$1({
        recognizers: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {
          enable: false
        }], [PinchRecognizer, {
          enable: false
        }, ['rotate']], [SwipeRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }], [PanRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]]
      }, options));
    };

    _defineProperty$1(Hammer, "VERSION", "2.0.11");

    return Hammer;
  }();

  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * @private
   * Touch events input
   * @constructor
   * @extends Input
   */

  var SingleTouchInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose$1(SingleTouchInput, _Input);

    function SingleTouchInput() {
      var _this;

      var proto = SingleTouchInput.prototype;
      proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
      proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.started = false;
      return _this;
    }

    var _proto = SingleTouchInput.prototype;

    _proto.handler = function handler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

      if (type === INPUT_START) {
        this.started = true;
      }

      if (!this.started) {
        return;
      }

      var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    };

    return SingleTouchInput;
  }(Input);

  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
  }

  /*
  Copyright (c) 2017 NAVER Corp.
  @egjs/axes project is licensed under the MIT license

  @egjs/axes JavaScript library
  https://github.com/naver/egjs-axes

  @version 2.5.7
  */
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */

  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  function getInsidePosition(destPos, range, circular, bounce) {
    var toDestPos = destPos;
    var targetRange = [circular[0] ? range[0] : bounce ? range[0] - bounce[0] : range[0], circular[1] ? range[1] : bounce ? range[1] + bounce[1] : range[1]];
    toDestPos = Math.max(targetRange[0], toDestPos);
    toDestPos = Math.min(targetRange[1], toDestPos);
    return +toDestPos.toFixed(5);
  } // determine outside


  function isOutside(pos, range) {
    return pos < range[0] || pos > range[1];
  }

  function getDuration(distance, deceleration) {
    var duration = Math.sqrt(distance / deceleration * 2); // when duration is under 100, then value is zero

    return duration < 100 ? 0 : duration;
  }

  function isCircularable(destPos, range, circular) {
    return circular[1] && destPos > range[1] || circular[0] && destPos < range[0];
  }

  function getCirculatedPos(pos, range, circular) {
    var toPos = pos;
    var min = range[0];
    var max = range[1];
    var length = max - min;

    if (circular[1] && pos > max) {
      // right
      toPos = (toPos - max) % length + min;
    }

    if (circular[0] && pos < min) {
      // left
      toPos = (toPos - min) % length + max;
    }

    return +toPos.toFixed(5);
  }

  function equal(target, base) {
    for (var k in target) {
      if (target[k] !== base[k]) {
        return false;
      }
    }

    return true;
  }

  var AxisManager =
  /*#__PURE__*/
  function () {
    function AxisManager(axis, options) {
      var _this = this;

      this.axis = axis;
      this.options = options;

      this._complementOptions();

      this._pos = Object.keys(this.axis).reduce(function (acc, v) {
        acc[v] = _this.axis[v].range[0];
        return acc;
      }, {});
    }
    /**
       * set up 'css' expression
       * @private
       */


    var __proto = AxisManager.prototype;

    __proto._complementOptions = function () {
      var _this = this;

      Object.keys(this.axis).forEach(function (axis) {
        _this.axis[axis] = __assign({
          range: [0, 100],
          bounce: [0, 0],
          circular: [false, false]
        }, _this.axis[axis]);
        ["bounce", "circular"].forEach(function (v) {
          var axisOption = _this.axis;
          var key = axisOption[axis][v];

          if (/string|number|boolean/.test(typeof key)) {
            axisOption[axis][v] = [key, key];
          }
        });
      });
    };

    __proto.getDelta = function (depaPos, destPos) {
      var fullDepaPos = this.get(depaPos);
      return this.map(this.get(destPos), function (v, k) {
        return v - fullDepaPos[k];
      });
    };

    __proto.get = function (axes) {
      var _this = this;

      if (axes && Array.isArray(axes)) {
        return axes.reduce(function (acc, v) {
          if (v && v in _this._pos) {
            acc[v] = _this._pos[v];
          }

          return acc;
        }, {});
      } else {
        return __assign({}, this._pos, axes || {});
      }
    };

    __proto.moveTo = function (pos) {
      var _this = this;

      var delta = this.map(this._pos, function (v, key) {
        return pos[key] ? pos[key] - _this._pos[key] : 0;
      });
      this.set(pos);
      return {
        pos: __assign({}, this._pos),
        delta: delta
      };
    };

    __proto.set = function (pos) {
      for (var k in pos) {
        if (k && k in this._pos) {
          this._pos[k] = pos[k];
        }
      }
    };

    __proto.every = function (pos, callback) {
      var axisOptions = this.axis;

      for (var k in pos) {
        if (k) {
          if (!callback(pos[k], k, axisOptions[k])) {
            return false;
          }
        }
      }

      return true;
    };

    __proto.filter = function (pos, callback) {
      var filtered = {};
      var axisOptions = this.axis;

      for (var k in pos) {
        if (k) {
          callback(pos[k], k, axisOptions[k]) && (filtered[k] = pos[k]);
        }
      }

      return filtered;
    };

    __proto.map = function (pos, callback) {
      var tranformed = {};
      var axisOptions = this.axis;

      for (var k in pos) {
        if (k) {
          tranformed[k] = callback(pos[k], k, axisOptions[k]);
        }
      }

      return tranformed;
    };

    __proto.isOutside = function (axes) {
      return !this.every(axes ? this.get(axes) : this._pos, function (v, k, opt) {
        return !isOutside(v, opt.range);
      });
    };

    return AxisManager;
  }();

  function toArray$1(nodes) {
    // const el = Array.prototype.slice.call(nodes);
    // for IE8
    var el = [];

    for (var i = 0, len = nodes.length; i < len; i++) {
      el.push(nodes[i]);
    }

    return el;
  }

  function $(param, multi) {
    if (multi === void 0) {
      multi = false;
    }

    var el;

    if (typeof param === "string") {
      // String (HTML, Selector)
      // check if string is HTML tag format
      var match = param.match(/^<([a-z]+)\s*([^>]*)>/); // creating element

      if (match) {
        // HTML
        var dummy = document.createElement("div");
        dummy.innerHTML = param;
        el = toArray$1(dummy.childNodes);
      } else {
        // Selector
        el = toArray$1(document.querySelectorAll(param));
      }

      if (!multi) {
        el = el.length >= 1 ? el[0] : undefined;
      }
    } else if (param === window) {
      // window
      el = param;
    } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
      // HTMLElement, Document
      el = param;
    } else if ("jQuery" in window && param instanceof jQuery || param.constructor.prototype.jquery) {
      // jQuery
      el = multi ? param.toArray() : param.get(0);
    } else if (Array.isArray(param)) {
      el = param.map(function (v) {
        return $(v);
      });

      if (!multi) {
        el = el.length >= 1 ? el[0] : undefined;
      }
    }

    return el;
  }

  var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  var caf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

  if (raf && !caf) {
    var keyInfo_1 = {};
    var oldraf_1 = raf;

    raf = function (callback) {
      function wrapCallback(timestamp) {
        if (keyInfo_1[key]) {
          callback(timestamp);
        }
      }

      var key = oldraf_1(wrapCallback);
      keyInfo_1[key] = true;
      return key;
    };

    caf = function (key) {
      delete keyInfo_1[key];
    };
  } else if (!(raf && caf)) {
    raf = function (callback) {
      return window.setTimeout(function () {
        callback(window.performance && window.performance.now && window.performance.now() || new Date().getTime());
      }, 16);
    };

    caf = window.clearTimeout;
  }
  /**
   * A polyfill for the window.requestAnimationFrame() method.
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
   * @private
   */


  function requestAnimationFrame(fp) {
    return raf(fp);
  }
  /**
  * A polyfill for the window.cancelAnimationFrame() method. It cancels an animation executed through a call to the requestAnimationFrame() method.
  * @param {Number} key −	The ID value returned through a call to the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드가 반환한 아이디 값</ko>
  * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
  * @private
  */


  function cancelAnimationFrame(key) {
    caf(key);
  }

  function minMax(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  var AnimationManager =
  /*#__PURE__*/
  function () {
    function AnimationManager(_a) {
      var options = _a.options,
          itm = _a.itm,
          em = _a.em,
          axm = _a.axm;
      this.options = options;
      this.itm = itm;
      this.em = em;
      this.axm = axm;
      this.animationEnd = this.animationEnd.bind(this);
    }

    var __proto = AnimationManager.prototype;

    __proto.getDuration = function (depaPos, destPos, wishDuration) {
      var _this = this;

      var duration;

      if (typeof wishDuration !== "undefined") {
        duration = wishDuration;
      } else {
        var durations_1 = this.axm.map(destPos, function (v, k) {
          return getDuration(Math.abs(Math.abs(v) - Math.abs(depaPos[k])), _this.options.deceleration);
        });
        duration = Object.keys(durations_1).reduce(function (max, v) {
          return Math.max(max, durations_1[v]);
        }, -Infinity);
      }

      return minMax(duration, this.options.minimumDuration, this.options.maximumDuration);
    };

    __proto.createAnimationParam = function (pos, duration, option) {
      var depaPos = this.axm.get();
      var destPos = pos;
      var inputEvent = option && option.event || null;
      return {
        depaPos: depaPos,
        destPos: destPos,
        duration: minMax(duration, this.options.minimumDuration, this.options.maximumDuration),
        delta: this.axm.getDelta(depaPos, destPos),
        inputEvent: inputEvent,
        input: option && option.input || null,
        isTrusted: !!inputEvent,
        done: this.animationEnd
      };
    };

    __proto.grab = function (axes, option) {
      if (this._animateParam && axes.length) {
        var orgPos_1 = this.axm.get(axes);
        var pos = this.axm.map(orgPos_1, function (v, k, opt) {
          return getCirculatedPos(v, opt.range, opt.circular);
        });

        if (!this.axm.every(pos, function (v, k) {
          return orgPos_1[k] === v;
        })) {
          this.em.triggerChange(pos, option, !!option);
        }

        this._animateParam = null;
        this._raf && cancelAnimationFrame(this._raf);
        this._raf = null;
        this.em.triggerAnimationEnd(!!(option && option.event));
      }
    };

    __proto.getEventInfo = function () {
      if (this._animateParam && this._animateParam.input && this._animateParam.inputEvent) {
        return {
          input: this._animateParam.input,
          event: this._animateParam.inputEvent
        };
      } else {
        return null;
      }
    };

    __proto.restore = function (option) {
      var pos = this.axm.get();
      var destPos = this.axm.map(pos, function (v, k, opt) {
        return Math.min(opt.range[1], Math.max(opt.range[0], v));
      });
      this.animateTo(destPos, this.getDuration(pos, destPos), option);
    };

    __proto.animationEnd = function () {
      var beforeParam = this.getEventInfo();
      this._animateParam = null; // for Circular

      var circularTargets = this.axm.filter(this.axm.get(), function (v, k, opt) {
        return isCircularable(v, opt.range, opt.circular);
      });
      Object.keys(circularTargets).length > 0 && this.setTo(this.axm.map(circularTargets, function (v, k, opt) {
        return getCirculatedPos(v, opt.range, opt.circular);
      }));
      this.itm.setInterrupt(false);
      this.em.triggerAnimationEnd(!!beforeParam);

      if (this.axm.isOutside()) {
        this.restore(beforeParam);
      } else {
        this.em.triggerFinish(!!beforeParam);
      }
    };

    __proto.animateLoop = function (param, complete) {
      this._animateParam = __assign({}, param);
      this._animateParam.startTime = new Date().getTime();

      if (param.duration) {
        var info_1 = this._animateParam;
        var self_1 = this;

        (function loop() {
          self_1._raf = null;

          if (self_1.frame(info_1) >= 1) {
            if (!equal(param.destPos, self_1.axm.get(Object.keys(param.destPos)))) {
              self_1.em.triggerChange(param.destPos);
            }

            complete();
            return;
          } // animationEnd


          self_1._raf = requestAnimationFrame(loop);
        })();
      } else {
        this.em.triggerChange(param.destPos);
        complete();
      }
    };

    __proto.getUserControll = function (param) {
      var userWish = param.setTo();
      userWish.destPos = this.axm.get(userWish.destPos);
      userWish.duration = minMax(userWish.duration, this.options.minimumDuration, this.options.maximumDuration);
      return userWish;
    };

    __proto.animateTo = function (destPos, duration, option) {
      var _this = this;

      var param = this.createAnimationParam(destPos, duration, option);

      var depaPos = __assign({}, param.depaPos);

      var retTrigger = this.em.triggerAnimationStart(param); // to control

      var userWish = this.getUserControll(param); // You can't stop the 'animationStart' event when 'circular' is true.

      if (!retTrigger && this.axm.every(userWish.destPos, function (v, k, opt) {
        return isCircularable(v, opt.range, opt.circular);
      })) {
        console.warn("You can't stop the 'animation' event when 'circular' is true.");
      }

      if (retTrigger && !equal(userWish.destPos, depaPos)) {
        var inputEvent = option && option.event || null;
        this.animateLoop({
          depaPos: depaPos,
          destPos: userWish.destPos,
          duration: userWish.duration,
          delta: this.axm.getDelta(depaPos, userWish.destPos),
          isTrusted: !!inputEvent,
          inputEvent: inputEvent,
          input: option && option.input || null
        }, function () {
          return _this.animationEnd();
        });
      }
    }; // animation frame (0~1)


    __proto.frame = function (param) {
      var curTime = new Date().getTime() - param.startTime;
      var easingPer = this.easing(curTime / param.duration);
      var toPos = param.depaPos;
      toPos = this.axm.map(toPos, function (v, k, opt) {
        v += param.delta[k] * easingPer;
        return getCirculatedPos(v, opt.range, opt.circular);
      });
      this.em.triggerChange(toPos);
      return easingPer;
    };

    __proto.easing = function (p) {
      return p > 1 ? 1 : this.options.easing(p);
    };

    __proto.setTo = function (pos, duration) {
      if (duration === void 0) {
        duration = 0;
      }

      var axes = Object.keys(pos);
      this.grab(axes);
      var orgPos = this.axm.get(axes);

      if (equal(pos, orgPos)) {
        return this;
      }

      this.itm.setInterrupt(true);
      var movedPos = this.axm.filter(pos, function (v, k) {
        return orgPos[k] !== v;
      });

      if (!Object.keys(movedPos).length) {
        return this;
      }

      movedPos = this.axm.map(movedPos, function (v, k, opt) {
        if (opt.circular && (opt.circular[0] || opt.circular[1])) {
          return duration > 0 ? v : getCirculatedPos(v, opt.range, opt.circular);
        } else {
          return getInsidePosition(v, opt.range, opt.circular);
        }
      });

      if (equal(movedPos, orgPos)) {
        return this;
      }

      if (duration > 0) {
        this.animateTo(movedPos, duration);
      } else {
        this.em.triggerChange(movedPos);
        this.itm.setInterrupt(false);
      }

      return this;
    };

    __proto.setBy = function (pos, duration) {
      if (duration === void 0) {
        duration = 0;
      }

      return this.setTo(this.axm.map(this.axm.get(Object.keys(pos)), function (v, k) {
        return v + pos[k];
      }), duration);
    };

    return AnimationManager;
  }();

  var EventManager =
  /*#__PURE__*/
  function () {
    function EventManager(axes) {
      this.axes = axes;
    }
    /**
     * This event is fired when a user holds an element on the screen of the device.
     * @ko 사용자가 기기의 화면에 손을 대고 있을 때 발생하는 이벤트
     * @name eg.Axes#hold
     * @event
     * @type {object} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Object.<string, number>} pos coordinate <ko>좌표 정보</ko>
     * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
     * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("hold", function(event) {
     *   // event.pos
     *   // event.input
     *   // event.inputEvent
     *   // isTrusted
     * });
     */


    var __proto = EventManager.prototype;

    __proto.triggerHold = function (pos, option) {
      this.axes.trigger("hold", {
        pos: pos,
        input: option.input || null,
        inputEvent: option.event || null,
        isTrusted: true
      });
    };
    /**
     * Specifies the coordinates to move after the 'change' event. It works when the holding value of the change event is true.
     * @ko 'change' 이벤트 이후 이동할 좌표를 지정한다. change이벤트의 holding 값이 true일 경우에 동작한다
     * @name set
    * @function
     * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("change", function(event) {
     *   event.holding && event.set({x: 10});
     * });
     */

    /** Specifies the animation coordinates to move after the 'release' or 'animationStart' events.
     * @ko 'release' 또는 'animationStart' 이벤트 이후 이동할 좌표를 지정한다.
     * @name setTo
    * @function
     * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
     * @param {Number} [duration] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("animationStart", function(event) {
     *   event.setTo({x: 10}, 2000);
     * });
     */

    /**
     * This event is fired when a user release an element on the screen of the device.
     * @ko 사용자가 기기의 화면에서 손을 뗐을 때 발생하는 이벤트
     * @name eg.Axes#release
     * @event
     * @type {object} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Object.<string, number>} depaPos The coordinates when releasing an element<ko>손을 뗐을 때의 좌표 </ko>
     * @property {Object.<string, number>} destPos The coordinates to move to after releasing an element<ko>손을 뗀 뒤에 이동할 좌표</ko>
     * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
     * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
     * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
     * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("release", function(event) {
     *   // event.depaPos
     *   // event.destPos
     *   // event.delta
     *   // event.input
     *   // event.inputEvent
     *   // event.setTo
     *   // event.isTrusted
     *
     *   // if you want to change the animation coordinates to move after the 'release' event.
     *   event.setTo({x: 10}, 2000);
     * });
     */


    __proto.triggerRelease = function (param) {
      param.setTo = this.createUserControll(param.destPos, param.duration);
      this.axes.trigger("release", param);
    };
    /**
     * This event is fired when coordinate changes.
     * @ko 좌표가 변경됐을 때 발생하는 이벤트
     * @name eg.Axes#change
     * @event
     * @type {object} The object of data to be sent when the event is fired <ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Object.<string, number>} pos  The coordinate <ko>좌표</ko>
     * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
     * @property {Boolean} holding Indicates whether a user holds an element on the screen of the device.<ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
     * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
     * @property {Object} inputEvent The event object received from inputType. If the value is changed by animation, it returns 'null'.<ko>inputType으로 부터 받은 이벤트 객체. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
     * @property {set} set Specifies the coordinates to move after the event. It works when the holding value is true <ko>이벤트 이후 이동할 좌표를 지정한다. holding 값이 true일 경우에 동작한다.</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("change", function(event) {
     *   // event.pos
     *   // event.delta
     *   // event.input
     *   // event.inputEvent
     *   // event.holding
     *   // event.set
     *   // event.isTrusted
     *
     *   // if you want to change the coordinates to move after the 'change' event.
     *   // it works when the holding value of the change event is true.
     *   event.holding && event.set({x: 10});
     * });
     */


    __proto.triggerChange = function (pos, option, holding) {
      if (option === void 0) {
        option = null;
      }

      if (holding === void 0) {
        holding = false;
      }

      var eventInfo = this.am.getEventInfo();
      var moveTo = this.am.axm.moveTo(pos);
      var inputEvent = option && option.event || eventInfo && eventInfo.event || null;
      var param = {
        pos: moveTo.pos,
        delta: moveTo.delta,
        holding: holding,
        inputEvent: inputEvent,
        isTrusted: !!inputEvent,
        input: option && option.input || eventInfo && eventInfo.input || null,
        set: inputEvent ? this.createUserControll(moveTo.pos) : function () {}
      };
      this.axes.trigger("change", param);
      inputEvent && this.am.axm.set(param.set()["destPos"]);
    };
    /**
     * This event is fired when animation starts.
     * @ko 에니메이션이 시작할 때 발생한다.
     * @name eg.Axes#animationStart
     * @event
     * @type {object} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Object.<string, number>} depaPos The coordinates when animation starts<ko>애니메이션이 시작 되었을 때의 좌표 </ko>
     * @property {Object.<string, number>} destPos The coordinates to move to. If you change this value, you can run the animation<ko>이동할 좌표. 이값을 변경하여 애니메이션을 동작시킬수 있다</ko>
     * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
     * @property {Number} duration Duration of the animation (unit: ms). If you change this value, you can control the animation duration time.<ko>애니메이션 진행 시간(단위: ms). 이값을 변경하여 애니메이션의 이동시간을 조절할 수 있다.</ko>
     * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
     * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
     * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("release", function(event) {
     *   // event.depaPos
     *   // event.destPos
     *   // event.delta
     *   // event.input
     *   // event.inputEvent
     *   // event.setTo
     *   // event.isTrusted
     *
     *   // if you want to change the animation coordinates to move after the 'animationStart' event.
     *   event.setTo({x: 10}, 2000);
     * });
     */


    __proto.triggerAnimationStart = function (param) {
      param.setTo = this.createUserControll(param.destPos, param.duration);
      return this.axes.trigger("animationStart", param);
    };
    /**
     * This event is fired when animation ends.
     * @ko 에니메이션이 끝났을 때 발생한다.
     * @name eg.Axes#animationEnd
     * @event
     * @type {object} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("animationEnd", function(event) {
     *   // event.isTrusted
     * });
     */


    __proto.triggerAnimationEnd = function (isTrusted) {
      if (isTrusted === void 0) {
        isTrusted = false;
      }

      this.axes.trigger("animationEnd", {
        isTrusted: isTrusted
      });
    };
    /**
     * This event is fired when all actions have been completed.
     * @ko 에니메이션이 끝났을 때 발생한다.
     * @name eg.Axes#finish
     * @event
     * @type {object} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
     * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     *
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "zoom": {
     *      range: [50, 30]
     *   }
     * }).on("finish", function(event) {
     *   // event.isTrusted
     * });
     */


    __proto.triggerFinish = function (isTrusted) {
      if (isTrusted === void 0) {
        isTrusted = false;
      }

      this.axes.trigger("finish", {
        isTrusted: isTrusted
      });
    };

    __proto.createUserControll = function (pos, duration) {
      if (duration === void 0) {
        duration = 0;
      } // to controll


      var userControl = {
        destPos: __assign({}, pos),
        duration: duration
      };
      return function (toPos, userDuration) {
        toPos && (userControl.destPos = __assign({}, toPos));
        userDuration !== undefined && (userControl.duration = userDuration);
        return userControl;
      };
    };

    __proto.setAnimationManager = function (am) {
      this.am = am;
    };

    __proto.destroy = function () {
      this.axes.off();
    };

    return EventManager;
  }();

  var InterruptManager =
  /*#__PURE__*/
  function () {
    function InterruptManager(options) {
      this.options = options;
      this._prevented = false; //  check whether the animation event was prevented
    }

    var __proto = InterruptManager.prototype;

    __proto.isInterrupting = function () {
      // when interruptable is 'true', return value is always 'true'.
      return this.options.interruptable || this._prevented;
    };

    __proto.isInterrupted = function () {
      return !this.options.interruptable && this._prevented;
    };

    __proto.setInterrupt = function (prevented) {
      !this.options.interruptable && (this._prevented = prevented);
    };

    return InterruptManager;
  }();

  var InputObserver =
  /*#__PURE__*/
  function () {
    function InputObserver(_a) {
      var options = _a.options,
          itm = _a.itm,
          em = _a.em,
          axm = _a.axm,
          am = _a.am;
      this.isOutside = false;
      this.moveDistance = null;
      this.options = options;
      this.itm = itm;
      this.em = em;
      this.axm = axm;
      this.am = am;
    } // when move pointer is held in outside


    var __proto = InputObserver.prototype;

    __proto.atOutside = function (pos) {
      var _this = this;

      if (this.isOutside) {
        return this.axm.map(pos, function (v, k, opt) {
          var tn = opt.range[0] - opt.bounce[0];
          var tx = opt.range[1] + opt.bounce[1];
          return v > tx ? tx : v < tn ? tn : v;
        });
      } else {
        // when start pointer is held in inside
        // get a initialization slope value to prevent smooth animation.
        var initSlope_1 = this.am.easing(0.00001) / 0.00001;
        return this.axm.map(pos, function (v, k, opt) {
          var min = opt.range[0];
          var max = opt.range[1];
          var out = opt.bounce;

          if (v < min) {
            // left
            return min - _this.am.easing((min - v) / (out[0] * initSlope_1)) * out[0];
          } else if (v > max) {
            // right
            return max + _this.am.easing((v - max) / (out[1] * initSlope_1)) * out[1];
          }

          return v;
        });
      }
    };

    __proto.get = function (input) {
      return this.axm.get(input.axes);
    };

    __proto.hold = function (input, event) {
      if (this.itm.isInterrupted() || !input.axes.length) {
        return;
      }

      var changeOption = {
        input: input,
        event: event
      };
      this.itm.setInterrupt(true);
      this.am.grab(input.axes, changeOption);
      !this.moveDistance && this.em.triggerHold(this.axm.get(), changeOption);
      this.isOutside = this.axm.isOutside(input.axes);
      this.moveDistance = this.axm.get(input.axes);
    };

    __proto.change = function (input, event, offset) {
      if (!this.itm.isInterrupting() || this.axm.every(offset, function (v) {
        return v === 0;
      })) {
        return;
      }

      var depaPos = this.axm.get(input.axes);
      var destPos; // for outside logic

      destPos = this.axm.map(this.moveDistance || depaPos, function (v, k) {
        return v + (offset[k] || 0);
      });
      this.moveDistance && (this.moveDistance = destPos);
      destPos = this.axm.map(destPos, function (v, k, opt) {
        return getCirculatedPos(v, opt.range, opt.circular);
      }); // from outside to inside

      if (this.isOutside && this.axm.every(depaPos, function (v, k, opt) {
        return !isOutside(v, opt.range);
      })) {
        this.isOutside = false;
      }

      destPos = this.atOutside(destPos);
      this.em.triggerChange(destPos, {
        input: input,
        event: event
      }, true);
    };

    __proto.release = function (input, event, offset, inputDuration) {
      if (!this.itm.isInterrupting()) {
        return;
      }

      if (!this.moveDistance) {
        return;
      }

      var pos = this.axm.get(input.axes);
      var depaPos = this.axm.get();
      var destPos = this.axm.get(this.axm.map(offset, function (v, k, opt) {
        if (opt.circular && (opt.circular[0] || opt.circular[1])) {
          return pos[k] + v;
        } else {
          return getInsidePosition(pos[k] + v, opt.range, opt.circular, opt.bounce);
        }
      }));
      var duration = this.am.getDuration(destPos, pos, inputDuration);

      if (duration === 0) {
        destPos = __assign({}, depaPos);
      } // prepare params


      var param = {
        depaPos: depaPos,
        destPos: destPos,
        duration: duration,
        delta: this.axm.getDelta(depaPos, destPos),
        inputEvent: event,
        input: input,
        isTrusted: true
      };
      this.em.triggerRelease(param);
      this.moveDistance = null; // to contol

      var userWish = this.am.getUserControll(param);
      var isEqual = equal(userWish.destPos, depaPos);
      var changeOption = {
        input: input,
        event: event
      };

      if (isEqual || userWish.duration === 0) {
        !isEqual && this.em.triggerChange(userWish.destPos, changeOption, true);
        this.itm.setInterrupt(false);

        if (this.axm.isOutside()) {
          this.am.restore(changeOption);
        } else {
          this.em.triggerFinish(true);
        }
      } else {
        this.am.animateTo(userWish.destPos, userWish.duration, changeOption);
      }
    };

    return InputObserver;
  }(); // export const DIRECTION_NONE = 1;


  var TRANSFORM = function () {
    var bodyStyle = (document.head || document.getElementsByTagName("head")[0]).style;
    var target = ["transform", "webkitTransform", "msTransform", "mozTransform"];

    for (var i = 0, len = target.length; i < len; i++) {
      if (target[i] in bodyStyle) {
        return target[i];
      }
    }

    return "";
  }();
  /**
   * @typedef {Object} AxisOption The Axis information. The key of the axis specifies the name to use as the logical virtual coordinate system.
   * @ko 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.
   * @property {Number[]} [range] The coordinate of range <ko>좌표 범위</ko>
   * @property {Number} [range.0=0] The coordinate of the minimum <ko>최소 좌표</ko>
   * @property {Number} [range.1=0] The coordinate of the maximum <ko>최대 좌표</ko>
   * @property {Number[]} [bounce] The size of bouncing area. The coordinates can exceed the coordinate area as much as the bouncing area based on user action. If the coordinates does not exceed the bouncing area when an element is dragged, the coordinates where bouncing effects are applied are retuned back into the coordinate area<ko>바운스 영역의 크기. 사용자의 동작에 따라 좌표가 좌표 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 사용자가 끌어다 놓는 동작을 했을 때 좌표가 바운스 영역에 있으면, 바운스 효과가 적용된 좌표가 다시 좌표 영역 안으로 들어온다</ko>
   * @property {Number} [bounce.0=0] The size of coordinate of the minimum area <ko>최소 좌표 바운스 영역의 크기</ko>
   * @property {Number} [bounce.1=0] The size of coordinate of the maximum area <ko>최대 좌표 바운스 영역의 크기</ko>
   * @property {Boolean[]} [circular] Indicates whether a circular element is available. If it is set to "true" and an element is dragged outside the coordinate area, the element will appear on the other side.<ko>순환 여부. 'true'로 설정한 방향의 좌표 영역 밖으로 엘리먼트가 이동하면 반대 방향에서 엘리먼트가 나타난다</ko>
   * @property {Boolean} [circular.0=false] Indicates whether to circulate to the coordinate of the minimum <ko>최소 좌표 방향의 순환 여부</ko>
   * @property {Boolean} [circular.1=false] Indicates whether to circulate to the coordinate of the maximum <ko>최대 좌표 방향의 순환 여부</ko>
  **/

  /**
   * @typedef {Object} AxesOption The option object of the eg.Axes module
   * @ko eg.Axes 모듈의 옵션 객체
   * @property {Function} [easing=easing.easeOutCubic] The easing function to apply to an animation <ko>애니메이션에 적용할 easing 함수</ko>
   * @property {Number} [maximumDuration=Infinity] Maximum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최대 좌표 이동 시간</ko>
   * @property {Number} [minimumDuration=0] Minimum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최소 좌표 이동 시간</ko>
   * @property {Number} [deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time. <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
   * @property {Boolean} [interruptable=true] Indicates whether an animation is interruptible.<br>- true: It can be paused or stopped by user action or the API.<br>- false: It cannot be paused or stopped by user action or the API while it is running.<ko>진행 중인 애니메이션 중지 가능 여부.<br>- true: 사용자의 동작이나 API로 애니메이션을 중지할 수 있다.<br>- false: 애니메이션이 진행 중일 때는 사용자의 동작이나 API가 적용되지 않는다</ko>
  **/

  /**
   * @class eg.Axes
   * @classdesc A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates. You can easily create a UI that responds to user actions.
   * @ko 터치 입력 장치나 마우스와 같은 다양한 입력 장치를 통해 전달 받은 사용자의 동작을 논리적인 가상 좌표로 변경하는 모듈이다. 사용자 동작에 반응하는 UI를 손쉽게 만들수 있다.
   * @extends eg.Component
   *
   * @param {Object.<string, AxisOption>} axis Axis information managed by eg.Axes. The key of the axis specifies the name to use as the logical virtual coordinate system.  <ko>eg.Axes가 관리하는 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.</ko>
   * @param {AxesOption} [options] The option object of the eg.Axes module<ko>eg.Axes 모듈의 옵션 객체</ko>
   * @param {Object.<string, number>} [startPos] The coordinates to be moved when creating an instance. not triggering change event.<ko>인스턴스 생성시 이동할 좌표, change 이벤트는 발생하지 않음.</ko>
   *
   * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
   * @example
   *
   * // 1. Initialize eg.Axes
   * const axes = new eg.Axes({
   *	something1: {
   *		range: [0, 150],
   *		bounce: 50
   *	},
   *	something2: {
   *		range: [0, 200],
   *		bounce: 100
   *	},
   *	somethingN: {
   *		range: [1, 10],
   *	}
   * }, {
   *  deceleration : 0.0024
   * });
   *
   * // 2. attach event handler
   * axes.on({
   *	"hold" : function(evt) {
   *	},
   *	"release" : function(evt) {
   *	},
   *	"animationStart" : function(evt) {
   *	},
   *	"animationEnd" : function(evt) {
   *	},
   *	"change" : function(evt) {
   *	}
   * });
   *
   * // 3. Initialize inputTypes
   * const panInputArea = new eg.Axes.PanInput("#area", {
   *	scale: [0.5, 1]
   * });
   * const panInputHmove = new eg.Axes.PanInput("#hmove");
   * const panInputVmove = new eg.Axes.PanInput("#vmove");
   * const pinchInputArea = new eg.Axes.PinchInput("#area", {
   *	scale: 1.5
   * });
   *
   * // 4. Connect eg.Axes and InputTypes
   * // [PanInput] When the mouse or touchscreen is down and moved.
   * // Connect the 'something2' axis to the mouse or touchscreen x position and
   * // connect the 'somethingN' axis to the mouse or touchscreen y position.
   * axes.connect(["something2", "somethingN"], panInputArea); // or axes.connect("something2 somethingN", panInputArea);
   *
   * // Connect only one 'something1' axis to the mouse or touchscreen x position.
   * axes.connect(["something1"], panInputHmove); // or axes.connect("something1", panInputHmove);
   *
   * // Connect only one 'something2' axis to the mouse or touchscreen y position.
   * axes.connect(["", "something2"], panInputVmove); // or axes.connect(" something2", panInputVmove);
   *
   * // [PinchInput] Connect 'something2' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * axes.connect("something2", pinchInputArea);
   */


  var Axes =
  /*#__PURE__*/
  function (_super) {
    __extends(Axes, _super);

    function Axes(axis, options, startPos) {
      if (axis === void 0) {
        axis = {};
      }

      var _this = _super.call(this) || this;

      _this.axis = axis;
      _this._inputs = [];
      _this.options = __assign({
        easing: function easeOutCubic(x) {
          return 1 - Math.pow(1 - x, 3);
        },
        interruptable: true,
        maximumDuration: Infinity,
        minimumDuration: 0,
        deceleration: 0.0006
      }, options);
      _this.itm = new InterruptManager(_this.options);
      _this.axm = new AxisManager(_this.axis, _this.options);
      _this.em = new EventManager(_this);
      _this.am = new AnimationManager(_this);
      _this.io = new InputObserver(_this);

      _this.em.setAnimationManager(_this.am);

      startPos && _this.em.triggerChange(startPos);
      return _this;
    }
    /**
     * Connect the axis of eg.Axes to the inputType.
     * @ko eg.Axes의 축과 inputType을 연결한다
     * @method eg.Axes#connect
     * @param {(String[]|String)} axes The name of the axis to associate with inputType <ko>inputType과 연결할 축의 이름</ko>
     * @param {Object} inputType The inputType instance to associate with the axis of eg.Axes <ko>eg.Axes의 축과 연결할 inputType 인스턴스<ko>
     * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   }
     * });
     *
     * axes.connect("x", new eg.Axes.PanInput("#area1"))
     *    .connect("x xOther", new eg.Axes.PanInput("#area2"))
     *    .connect(" xOther", new eg.Axes.PanInput("#area3"))
     *    .connect(["x"], new eg.Axes.PanInput("#area4"))
     *    .connect(["xOther", "x"], new eg.Axes.PanInput("#area5"))
     *    .connect(["", "xOther"], new eg.Axes.PanInput("#area6"));
     */


    var __proto = Axes.prototype;

    __proto.connect = function (axes, inputType) {
      var mapped;

      if (typeof axes === "string") {
        mapped = axes.split(" ");
      } else {
        mapped = axes.concat();
      } // check same instance


      if (~this._inputs.indexOf(inputType)) {
        this.disconnect(inputType);
      } // check same element in hammer type for share


      if ("hammer" in inputType) {
        var targets = this._inputs.filter(function (v) {
          return v.hammer && v.element === inputType.element;
        });

        if (targets.length) {
          inputType.hammer = targets[0].hammer;
        }
      }

      inputType.mapAxes(mapped);
      inputType.connect(this.io);

      this._inputs.push(inputType);

      return this;
    };
    /**
     * Disconnect the axis of eg.Axes from the inputType.
     * @ko eg.Axes의 축과 inputType의 연결을 끊는다.
     * @method eg.Axes#disconnect
     * @param {Object} [inputType] An inputType instance associated with the axis of eg.Axes <ko>eg.Axes의 축과 연결한 inputType 인스턴스<ko>
     * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   }
     * });
     *
     * const input1 = new eg.Axes.PanInput("#area1");
     * const input2 = new eg.Axes.PanInput("#area2");
     * const input3 = new eg.Axes.PanInput("#area3");
     *
     * axes.connect("x", input1);
     *    .connect("x xOther", input2)
     *    .connect(["xOther", "x"], input3);
     *
     * axes.disconnect(input1); // disconnects input1
     * axes.disconnect(); // disconnects all of them
     */


    __proto.disconnect = function (inputType) {
      if (inputType) {
        var index = this._inputs.indexOf(inputType);

        if (index >= 0) {
          this._inputs[index].disconnect();

          this._inputs.splice(index, 1);
        }
      } else {
        this._inputs.forEach(function (v) {
          return v.disconnect();
        });

        this._inputs = [];
      }

      return this;
    };
    /**
     * Returns the current position of the coordinates.
     * @ko 좌표의 현재 위치를 반환한다
     * @method eg.Axes#get
     * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
     * @return {Object.<string, number>} Axis coordinate information <ko>축 좌표 정보</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   },
     * 	 "zoom": {
     *      range: [50, 30]
     *   }
     * });
     *
     * axes.get(); // {"x": 0, "xOther": -100, "zoom": 50}
     * axes.get(["x", "zoom"]); // {"x": 0, "zoom": 50}
     */


    __proto.get = function (axes) {
      return this.axm.get(axes);
    };
    /**
     * Moves an axis to specific coordinates.
     * @ko 좌표를 이동한다.
     * @method eg.Axes#setTo
     * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
     * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
     * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   },
     * 	 "zoom": {
     *      range: [50, 30]
     *   }
     * });
     *
     * axes.setTo({"x": 30, "zoom": 60});
     * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
     *
     * axes.setTo({"x": 100, "xOther": 60}, 1000); // animatation
     *
     * // after 1000 ms
     * axes.get(); // {"x": 100, "xOther": 60, "zoom": 60}
     */


    __proto.setTo = function (pos, duration) {
      if (duration === void 0) {
        duration = 0;
      }

      this.am.setTo(pos, duration);
      return this;
    };
    /**
     * Moves an axis from the current coordinates to specific coordinates.
     * @ko 현재 좌표를 기준으로 좌표를 이동한다.
     * @method eg.Axes#setBy
     * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
     * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
     * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   },
     * 	 "zoom": {
     *      range: [50, 30]
     *   }
     * });
     *
     * axes.setBy({"x": 30, "zoom": 10});
     * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
     *
     * axes.setBy({"x": 70, "xOther": 60}, 1000); // animatation
     *
     * // after 1000 ms
     * axes.get(); // {"x": 100, "xOther": -40, "zoom": 60}
     */


    __proto.setBy = function (pos, duration) {
      if (duration === void 0) {
        duration = 0;
      }

      this.am.setBy(pos, duration);
      return this;
    };
    /**
     * Returns whether there is a coordinate in the bounce area of ​​the target axis.
     * @ko 대상 축 중 bounce영역에 좌표가 존재하는지를 반환한다
     * @method eg.Axes#isBounceArea
     * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
     * @return {Boolen} Whether the bounce area exists. <ko>bounce 영역 존재 여부</ko>
     * @example
     * const axes = new eg.Axes({
     *   "x": {
     *      range: [0, 100]
     *   },
     *   "xOther": {
     *      range: [-100, 100]
     *   },
     * 	 "zoom": {
     *      range: [50, 30]
     *   }
     * });
     *
     * axes.isBounceArea(["x"]);
     * axes.isBounceArea(["x", "zoom"]);
     * axes.isBounceArea();
     */


    __proto.isBounceArea = function (axes) {
      return this.axm.isOutside(axes);
    };
    /**
    * Destroys properties, and events used in a module and disconnect all connections to inputTypes.
    * @ko 모듈에 사용한 속성, 이벤트를 해제한다. 모든 inputType과의 연결을 끊는다.
    * @method eg.Axes#destroy
    */


    __proto.destroy = function () {
      this.disconnect();
      this.em.destroy();
    };
    /**
     * Version info string
     * @ko 버전정보 문자열
     * @name VERSION
     * @static
     * @type {String}
     * @example
     * eg.Axes.VERSION;  // ex) 3.3.3
     * @memberof eg.Axes
     */


    Axes.VERSION = "2.5.7";
    /**
     * @name eg.Axes.TRANSFORM
     * @desc Returns the transform attribute with CSS vendor prefixes.
     * @ko CSS vendor prefixes를 붙인 transform 속성을 반환한다.
     *
     * @constant
     * @type {String}
     * @example
     * eg.Axes.TRANSFORM; // "transform" or "webkitTransform"
     */

    Axes.TRANSFORM = TRANSFORM;
    /**
     * @name eg.Axes.DIRECTION_NONE
     * @constant
     * @type {Number}
     */

    Axes.DIRECTION_NONE = DIRECTION_NONE;
    /**
     * @name eg.Axes.DIRECTION_LEFT
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_LEFT = DIRECTION_LEFT;
    /**
     * @name eg.Axes.DIRECTION_RIGHT
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_RIGHT = DIRECTION_RIGHT;
    /**
     * @name eg.Axes.DIRECTION_UP
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_UP = DIRECTION_UP;
    /**
     * @name eg.Axes.DIRECTION_DOWN
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_DOWN = DIRECTION_DOWN;
    /**
     * @name eg.Axes.DIRECTION_HORIZONTAL
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
    /**
     * @name eg.Axes.DIRECTION_VERTICAL
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
    /**
     * @name eg.Axes.DIRECTION_ALL
     * @constant
     * @type {Number}
    */

    Axes.DIRECTION_ALL = DIRECTION_ALL;
    return Axes;
  }(Component);

  var SUPPORT_POINTER_EVENTS$1 = "PointerEvent" in window || "MSPointerEvent" in window;
  var SUPPORT_TOUCH$1 = "ontouchstart" in window;
  var UNIQUEKEY = "_EGJS_AXES_INPUTTYPE_";

  function toAxis(source, offset) {
    return offset.reduce(function (acc, v, i) {
      if (source[i]) {
        acc[source[i]] = v;
      }

      return acc;
    }, {});
  }

  function createHammer(element, options) {
    try {
      // create Hammer
      return new Manager(element, __assign({}, options));
    } catch (e) {
      return null;
    }
  }

  function convertInputType(inputType) {
    if (inputType === void 0) {
      inputType = [];
    }

    var hasTouch = false;
    var hasMouse = false;
    var hasPointer = false;
    inputType.forEach(function (v) {
      switch (v) {
        case "mouse":
          hasMouse = true;
          break;

        case "touch":
          hasTouch = SUPPORT_TOUCH$1;
          break;

        case "pointer":
          hasPointer = SUPPORT_POINTER_EVENTS$1;
        // no default
      }
    });

    if (hasPointer) {
      return PointerEventInput;
    } else if (hasTouch && hasMouse) {
      return TouchMouseInput;
    } else if (hasTouch) {
      return TouchInput;
    } else if (hasMouse) {
      return MouseInput;
    }

    return null;
  }

  function getDirectionByAngle(angle, thresholdAngle) {
    if (thresholdAngle < 0 || thresholdAngle > 90) {
      return DIRECTION_NONE;
    }

    var toAngle = Math.abs(angle);
    return toAngle > thresholdAngle && toAngle < 180 - thresholdAngle ? DIRECTION_VERTICAL : DIRECTION_HORIZONTAL;
  }

  function getNextOffset(speeds, deceleration) {
    var normalSpeed = Math.sqrt(speeds[0] * speeds[0] + speeds[1] * speeds[1]);
    var duration = Math.abs(normalSpeed / -deceleration);
    return [speeds[0] / 2 * duration, speeds[1] / 2 * duration];
  }

  function useDirection(checkType, direction, userDirection) {
    if (userDirection) {
      return !!(direction === DIRECTION_ALL || direction & checkType && userDirection & checkType);
    } else {
      return !!(direction & checkType);
    }
  }
  /**
   * @typedef {Object} PanInputOption The option object of the eg.Axes.PanInput module.
   * @ko eg.Axes.PanInput 모듈의 옵션 객체
   * @property {String[]} [inputType=["touch","mouse", "pointer"]] Types of input devices.<br>- touch: Touch screen<br>- mouse: Mouse <ko>입력 장치 종류.<br>- touch: 터치 입력 장치<br>- mouse: 마우스</ko>
   * @property {Number[]} [scale] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
   * @property {Number} [scale.0=1] horizontal axis scale <ko>수평축 배율</ko>
   * @property {Number} [scale.1=1] vertical axis scale <ko>수직축 배율</ko>
   * @property {Number} [thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
   * @property {Number} [threshold=0] Minimal pan distance required before recognizing <ko>사용자의 Pan 동작을 인식하기 위해산 최소한의 거리</ko>
   * @property {Object} [hammerManagerOptions={cssProps: {userSelect: "none",touchSelect: "none",touchCallout: "none",userDrag: "none"}] Options of Hammer.Manager <ko>Hammer.Manager의 옵션</ko>
  **/

  /**
   * @class eg.Axes.PanInput
   * @classdesc A module that passes the amount of change to eg.Axes when the mouse or touchscreen is down and moved. use less than two axes.
   * @ko 마우스나 터치 스크린을 누르고 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
   *
   * @example
   * const pan = new eg.Axes.PanInput("#area", {
   * 		inputType: ["touch"],
   * 		scale: [1, 1.3],
   * });
   *
   * // Connect the 'something2' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
   * // Connect the 'somethingN' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
   * axes.connect(["something2", "somethingN"], pan); // or axes.connect("something2 somethingN", pan);
   *
   * // Connect only one 'something1' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
   * axes.connect(["something1"], pan); // or axes.connect("something1", pan);
   *
   * // Connect only one 'something2' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
   * axes.connect(["", "something2"], pan); // or axes.connect(" something2", pan);
   *
   * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.PanInput module <ko>eg.Axes.PanInput 모듈을 사용할 엘리먼트</ko>
   * @param {PanInputOption} [options] The option object of the eg.Axes.PanInput module<ko>eg.Axes.PanInput 모듈의 옵션 객체</ko>
   */


  var PanInput =
  /*#__PURE__*/
  function () {
    function PanInput(el, options) {
      this.axes = [];
      this.hammer = null;
      this.element = null;
      this.panRecognizer = null;
      /**
       * Hammer helps you add support for touch gestures to your page
       *
       * @external Hammer
       * @see {@link http://hammerjs.github.io|Hammer.JS}
       * @see {@link http://hammerjs.github.io/jsdoc/Hammer.html|Hammer.JS API documents}
       * @see Hammer.JS applies specific CSS properties by {@link http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html|default} when creating an instance. The eg.Axes module removes all default CSS properties provided by Hammer.JS
       */

      if (typeof Manager === "undefined") {
        throw new Error("The Hammerjs must be loaded before eg.Axes.PanInput.\nhttp://hammerjs.github.io/");
      }

      this.element = $(el);
      this.options = __assign({
        inputType: ["touch", "mouse", "pointer"],
        scale: [1, 1],
        thresholdAngle: 45,
        threshold: 0,
        hammerManagerOptions: {
          // css properties were removed due to usablility issue
          // http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            userDrag: "none"
          }
        }
      }, options);
      this.onHammerInput = this.onHammerInput.bind(this);
      this.onPanmove = this.onPanmove.bind(this);
      this.onPanend = this.onPanend.bind(this);
    }

    var __proto = PanInput.prototype;

    __proto.mapAxes = function (axes) {
      var useHorizontal = !!axes[0];
      var useVertical = !!axes[1];

      if (useHorizontal && useVertical) {
        this._direction = DIRECTION_ALL;
      } else if (useHorizontal) {
        this._direction = DIRECTION_HORIZONTAL;
      } else if (useVertical) {
        this._direction = DIRECTION_VERTICAL;
      } else {
        this._direction = DIRECTION_NONE;
      }

      this.axes = axes;
    };

    __proto.connect = function (observer) {
      var hammerOption = {
        direction: this._direction,
        threshold: this.options.threshold
      };

      if (this.hammer) {
        // for sharing hammer instance.
        // hammer remove previous PanRecognizer.
        this.removeRecognizer();
        this.dettachEvent();
      } else {
        var keyValue = this.element[UNIQUEKEY];

        if (!keyValue) {
          keyValue = String(Math.round(Math.random() * new Date().getTime()));
        }

        var inputClass = convertInputType(this.options.inputType);

        if (!inputClass) {
          throw new Error("Wrong inputType parameter!");
        }

        this.hammer = createHammer(this.element, __assign({
          inputClass: inputClass
        }, this.options.hammerManagerOptions));
        this.element[UNIQUEKEY] = keyValue;
      }

      this.panRecognizer = new PanRecognizer(hammerOption);
      this.hammer.add(this.panRecognizer);
      this.attachEvent(observer);
      return this;
    };

    __proto.disconnect = function () {
      this.removeRecognizer();

      if (this.hammer) {
        this.dettachEvent();
      }

      this._direction = DIRECTION_NONE;
      return this;
    };
    /**
    * Destroys elements, properties, and events used in a module.
    * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
    * @method eg.Axes.PanInput#destroy
    */


    __proto.destroy = function () {
      this.disconnect();

      if (this.hammer && this.hammer.recognizers.length === 0) {
        this.hammer.destroy();
      }

      delete this.element[UNIQUEKEY];
      this.element = null;
      this.hammer = null;
    };
    /**
     * Enables input devices
     * @ko 입력 장치를 사용할 수 있게 한다
     * @method eg.Axes.PanInput#enable
     * @return {eg.Axes.PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     */


    __proto.enable = function () {
      this.hammer && (this.hammer.get("pan").options.enable = true);
      return this;
    };
    /**
     * Disables input devices
     * @ko 입력 장치를 사용할 수 없게 한다.
     * @method eg.Axes.PanInput#disable
     * @return {eg.Axes.PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
     */


    __proto.disable = function () {
      this.hammer && (this.hammer.get("pan").options.enable = false);
      return this;
    };
    /**
     * Returns whether to use an input device
     * @ko 입력 장치를 사용 여부를 반환한다.
     * @method eg.Axes.PanInput#isEnable
     * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
     */


    __proto.isEnable = function () {
      return !!(this.hammer && this.hammer.get("pan").options.enable);
    };

    __proto.removeRecognizer = function () {
      if (this.hammer && this.panRecognizer) {
        this.hammer.remove(this.panRecognizer);
        this.panRecognizer = null;
      }
    };

    __proto.onHammerInput = function (event) {
      if (this.isEnable()) {
        if (event.isFirst) {
          this.observer.hold(this, event);
        } else if (event.isFinal) {
          this.onPanend(event);
        }
      }
    };

    __proto.onPanmove = function (event) {
      var userDirection = getDirectionByAngle(event.angle, this.options.thresholdAngle); // not support offset properties in Hammerjs - start

      var prevInput = this.hammer.session.prevInput;
      /* eslint-disable no-param-reassign */

      if (prevInput) {
        event.offsetX = event.deltaX - prevInput.deltaX;
        event.offsetY = event.deltaY - prevInput.deltaY;
      } else {
        event.offsetX = 0;
        event.offsetY = 0;
      }

      var offset = this.getOffset([event.offsetX, event.offsetY], [useDirection(DIRECTION_HORIZONTAL, this._direction, userDirection), useDirection(DIRECTION_VERTICAL, this._direction, userDirection)]);
      var prevent = offset.some(function (v) {
        return v !== 0;
      });

      if (prevent) {
        event.srcEvent.preventDefault();
        event.srcEvent.stopPropagation();
      }

      event.preventSystemEvent = prevent;
      prevent && this.observer.change(this, event, toAxis(this.axes, offset));
    };

    __proto.onPanend = function (event) {
      var offset = this.getOffset([Math.abs(event.velocityX) * (event.deltaX < 0 ? -1 : 1), Math.abs(event.velocityY) * (event.deltaY < 0 ? -1 : 1)], [useDirection(DIRECTION_HORIZONTAL, this._direction), useDirection(DIRECTION_VERTICAL, this._direction)]);
      offset = getNextOffset(offset, this.observer.options.deceleration);
      this.observer.release(this, event, toAxis(this.axes, offset));
    };

    __proto.attachEvent = function (observer) {
      this.observer = observer;
      this.hammer.on("hammer.input", this.onHammerInput).on("panstart panmove", this.onPanmove);
    };

    __proto.dettachEvent = function () {
      this.hammer.off("hammer.input", this.onHammerInput).off("panstart panmove", this.onPanmove);
      this.observer = null;
    };

    __proto.getOffset = function (properties, direction) {
      var offset = [0, 0];
      var scale = this.options.scale;

      if (direction[0]) {
        offset[0] = properties[0] * scale[0];
      }

      if (direction[1]) {
        offset[1] = properties[1] * scale[1];
      }

      return offset;
    };

    return PanInput;
  }();

  /**
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */

  /* eslint-disable no-new-func, no-nested-ternary */
  var win = typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && (self.Math === Math ? self : Function("return this")());
  /* eslint-enable no-new-func, no-nested-ternary */

  var document$1 = win.document;

  /**
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */
  var utils = {
    /**
     * Select or create element
     * @param {String|HTMLElement} param
     *  when string given is as HTML tag, then create element
     *  otherwise it returns selected elements
     * @returns {HTMLElement}
     */
    $: function $(param) {
      var el = null;

      if (typeof param === "string") {
        // check if string is HTML tag format
        var match = param.match(/^<([a-z]+)\s*([^>]*)>/); // creating element

        if (match) {
          el = document$1.createElement(match[1]); // attributes

          match.length === 3 && match[2].split(" ").forEach(function (v) {
            var attr = v.split("=");
            el.setAttribute(attr[0], attr[1].trim().replace(/(^["']|["']$)/g, ""));
          });
        } else {
          el = document$1.querySelectorAll(param);

          if (!el.length) {
            el = null;
          } else if (el.length === 1) {
            el = el[0];
          }
        }
      } else if (param.nodeName && param.nodeType === 1) {
        el = param;
      }

      return el;
    },

    /**
     * Converts to array
     * @param {HTMLCollection|HTMLElement} el
     * @returns {Array}
     */
    toArray: function toArray(el) {
      return [].slice.call(el);
    },

    /**
     * Check if is array
     * @param arr
     * @returns {Boolean}
     */
    isArray: function isArray(arr) {
      return arr && arr.constructor === Array;
    },

    /**
     * Check if is object
     * @param {Object} obj
     * @returns {Boolean}
     */
    isObject: function isObject(obj) {
      return obj && !obj.nodeType && typeof obj === "object" && !this.isArray(obj);
    },

    /**
     * Merge object returning new object
     * @param {Object} target
     * @param {Object} objectN
     * @returns {Object} merged target object
     * @example
     *  var target = { a: 1 };
     *  utils.extend(target, { b: 2, c: 3 });
     *  target;  // { a: 1, b: 2, c: 3 };
     */
    extend: function extend(target) {
      var _this = this;

      for (var _len = arguments.length, objectN = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        objectN[_key - 1] = arguments[_key];
      }

      if (!objectN.length || objectN.length === 1 && !objectN[0]) {
        return target;
      }

      var source = objectN.shift();

      if (this.isObject(target) && this.isObject(source)) {
        Object.keys(source).forEach(function (key) {
          var value = source[key];

          if (_this.isObject(value)) {
            !target[key] && (target[key] = {});
            target[key] = _this.extend(target[key], value);
          } else {
            target[key] = _this.isArray(value) ? value.concat() : value;
          }
        });
      }

      return this.extend.apply(this, [target].concat(objectN));
    },

    /**
     * Get or set the style value or apply
     * @param {HTMLElement|Array} el
     * @param {String|Object} style
     *  String: return style property value
     *  Object: set style value
     * @param {Boolean} getAsNumber Get the value as number
     * @returns {String|HTMLElement}
     */
    css: function css(el, style, getAsNumber) {
      if (typeof style === "string") {
        var value = el.style[style];

        if (!value || value === "auto" || /\d/.test(value) && !/\d(px)?$/.test(value)) {
          value = win.getComputedStyle(el)[style];
        }

        return getAsNumber ? this.getNumValue(value) : value;
      } else {
        var applyStyle = function applyStyle(target, source) {
          return Object.keys(source).forEach(function (v) {
            target[v] = source[v];
          });
        };

        this.isArray(el) ? el.forEach(function (v) {
          return applyStyle(v.style, style);
        }) : applyStyle(el.style, style);
      }

      return el;
    },

    /**
     * classList
     * @param {HTMLElement} el target DOM element
     * @param {String} className class name string to be handled
     * @param {Boolean} add Add or remove class - true: Add, false: Remove
     * @return {Boolean} if add param is missing, then return existence of class name
     */
    classList: function classList(el, className, add) {
      var isAddParam = typeof add === "boolean";
      var res;

      if (el.classList) {
        res = el.classList[isAddParam && (add ? "add" : "remove") || "contains"](className);
      } else {
        res = el.className;

        if (isAddParam) {
          if (add && res.indexOf(className) === -1) {
            res = el.className = (res + " " + className).replace(/\s{2,}/g, " ");
          } else if (!add) {
            res = el.className = res.replace(className, "");
          }
        } else {
          res = new RegExp("\\b" + className + "\\b").test(res);
        }
      }

      return res;
    },

    /**
     * Check and parse value to number
     * @param {Number|String} val
     * @param {Number} defVal
     * @return {Number}
     */
    getNumValue: function getNumValue(val, defVal) {
      var num = val;
      return isNaN(num = parseFloat(num)) ? defVal : num;
    },

    /**
     * Return unit formatted value
     * @param {Number|String} val
     * @return {String} val Value formatted with unit
     */
    getUnitValue: function getUnitValue(val) {
      var rx = /(?:[a-z]{2,}|%)$/;
      return (parseFloat(val) || 0) + (String(val).match(rx) || "px");
    },

    /**
     * Get element's outer value
     * @param {HTMLElement} el
     * @param {String} type - [outerWidth|outerHeight]
     * @returns {Number} outer's value
     */
    getOuter: function getOuter(el, type) {
      var _this2 = this;

      var paddingMargin = 0;
      (type === "outerWidth" ? ["Left", "Right"] : ["Top", "Bottom"]).forEach(function (dir) {
        ["padding", "margin"].forEach(function (v) {
          paddingMargin += _this2.css(el, "" + v + dir, true);
        });
      });
      return this.css(el, type.replace("outer", "").toLocaleLowerCase(), true) + paddingMargin;
    },

    /**
     * Get element's outerWidth value with margin
     * @param {HTMLElement} el
     * @returns {Number}
     */
    outerWidth: function outerWidth(el) {
      return this.getOuter(el, "outerWidth");
    },

    /**
     * Get element's outerHeight value with margin
     * @param {HTMLElement} el
     * @returns {Number}
     */
    outerHeight: function outerHeight(el) {
      return this.getOuter(el, "outerHeight");
    },

    /**
     * Returns the syntax of the translate style which is applied to CSS transition properties.
     *
     * @ko CSS 트랜지션 속성에 적용할 translate 스타일 구문을 반환한다
     * @method eg#translate
     * @param {String} x Distance to move along the X axis <ko>x축을 따라 이동할 거리</ko>
     * @param {String} y Distance to move along the Y axis <ko>y축을 따라 이동할 거리</ko>
     * @param {Boolean} [isHA] Force hardware acceleration <ko>하드웨어 가속 사용 여부</ko>
     * @return {String} Syntax of the translate style <ko>translate 스타일 구문</ko>
     */
    translate: function translate(x, y, isHA) {
      return isHA || false ? "translate3d(" + x + "," + y + ",0)" : "translate(" + x + "," + y + ")";
    },
    // 1. user press one position on screen.
    // 2. user moves to the other position on screen.
    // 3. when user releases fingers on screen, 'click' event is fired at previous position.
    hasClickBug: function hasClickBug() {
      var ua = win.navigator.userAgent;
      var result = /iPhone|iPad/.test(ua);

      this.hasClickBug = function () {
        return result;
      };

      return result;
    }
  };

  var MixinBuilder =
  /*#__PURE__*/
  function () {
    function MixinBuilder(superclass) {
      this.superclass = superclass ||
      /*#__PURE__*/
      function () {
        function _class() {}

        return _class;
      }();
    }

    var _proto = MixinBuilder.prototype;

    _proto["with"] = function _with() {
      for (var _len2 = arguments.length, mixins = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        mixins[_key2] = arguments[_key2];
      }

      return mixins.reduce(function (c, m) {
        return m(c);
      }, this.superclass);
    };

    return MixinBuilder;
  }();

  var Mixin = function Mixin(superclass) {
    return new MixinBuilder(superclass);
  };

  /**
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */

  var EVENTS = {
    beforeFlickStart: "beforeFlickStart",
    beforeRestore: "beforeRestore",
    flick: "flick",
    flickEnd: "flickEnd",
    restore: "restore"
  }; // check for the transform property

  var TRANSFORM$1 = {
    name: "transform"
  };

  TRANSFORM$1.support = function () {
    var style = document$1.documentElement.style;
    return TRANSFORM$1.name in style || (TRANSFORM$1.name = "webkitTransform") in style;
  }(); // check for will-change support


  var SUPPORT_WILLCHANGE = win.CSS && win.CSS.supports && win.CSS.supports("will-change", "transform"); // check for Android 2.x

  var IS_ANDROID2 = /Android 2\./.test(navigator.userAgent); // data-height attribute's name for adaptiveHeight option

  var DATA_HEIGHT = "data-height";

  /**
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */
  // internal config values
  var CONFIG = {
    panel: {
      $list: null,
      // panel list
      index: 0,
      // dom index used among process
      no: 0,
      // panel no used among process
      currIndex: 0,
      // current physical dom index
      currNo: 0,
      // current logical panel number
      size: 0,
      // panel size
      count: 0,
      // total physical panel count
      origCount: 0,
      // total count of given original panels
      changed: false,
      // if panel changed
      animating: false,
      // current animating status boolean
      minCount: 3 // minimum panel count

    },
    touch: {
      holdPos: 0,
      // hold x,y coordinate
      destPos: 0,
      // destination x,y coordinate
      distance: 0,
      // touch distance pixel of start to end touch
      direction: null,
      // touch direction
      lastPos: 0,
      // to determine move on holding
      holding: false,
      isTrusted: false // if event was instantiated by user's action explicitly

    },
    customEvent: {
      // for custom events value
      flick: true,
      restore: false,
      restoreCall: false
    },
    dirData: [],
    // direction constant value according horizontal or vertical
    indexToMove: 0,
    $dummyAnchor: null // For buggy link highlighting on Android 2.x

  }; // default options

  var OPTIONS = {
    hwAccelerable: true,
    // set for hw acceleration (see https://gist.github.com/netil/c1d1b67e1c1926364c0709f110a09b44 for old devices support)
    prefix: "eg-flick",
    // prefix value of class name
    deceleration: 0.0006,
    // deceleration value
    horizontal: true,
    // move direction (true == horizontal, false == vertical)
    circular: false,
    // circular mode. In this mode at least 3 panels are required.
    previewPadding: null,
    // preview padding value in left(up) to right(down) order. In this mode at least 5 panels are required.
    bounce: null,
    // bounce value in left(up) to right(down) order. Works only in non-circular mode.
    threshold: 40,
    // the distance pixel threshold value for change panel
    duration: 100,
    // duration ms for animation
    panelEffect: function panelEffect(x) {
      return 1 - Math.pow(1 - x, 3);
    },
    // easing function for panel change animation
    defaultIndex: 0,
    // initial panel index to be shown
    inputType: [// input type
    "touch", "mouse"],
    thresholdAngle: 45,
    // the threshold value that determines whether user action is horizontal or vertical (0~90)
    adaptiveHeight: false,
    // Set container's height be adaptive according panel's height
    zIndex: 2000,
    // z-index value for container element
    useTranslate: true // use of translate on panel moves

  };

  var eventHandler = (function (superclass) {
    return (
      /*#__PURE__*/
      function (_superclass) {
        _inheritsLoose(_class, _superclass);

        function _class() {
          return _superclass.apply(this, arguments) || this;
        }

        var _proto = _class.prototype;

        /**
         * 'hold' event handler
         * @private
         */
        _proto._holdHandler = function _holdHandler(e) {
          var conf = this._conf;
          var touch = conf.touch;
          var holdPos = e.pos.flick;
          touch.holdPos = holdPos;
          touch.holding = true;
          touch.isTrusted = true;
          conf.panel.changed = false;

          this._adjustContainerCss("start", holdPos);
        };
        /**
         * 'change' event handler
         * @private
         */


        _proto._changeHandler = function _changeHandler(e) {
          var conf = this._conf;
          var touch = conf.touch;
          var pos = e.pos.flick;
          var holdPos = touch.holdPos;
          var direction;
          var eventRes = null;
          var movedPx;

          this._setPointerEvents(e); // for "click" bug

          /**
           * An event that occurs whenever the panel's coordinate value changes. It occurs in the following cases.<br><br>1. When the user is inputing the move.<br>2. When moving to the destination panel after you have finished inputing the move in step 1.<br>3. When the current panel is moving to its original position after the movement is finished in step 1.<br>4. Moving to the destination panel by calling the `moveTo()`, `prev()`, `next()`  method. (Do not prevent the default behavior of the [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} event.)
           * @ko 패널의 좌표값이 변할 때마다 발생하는 이벤트. 아래의 경우에 발생한다.<br><br>1. 사용자가 이동(move) 액션 입력중일 때.<br>2. 1번에서 이동(move) 액션 입력이 끝나고 목적 패널로 이동중일 때.<br>3. 1번에서 이동(move) 액션 입력이 끝나고 현재 패널의 원래 위치로 이동중일 때.<br>4. `moveTo()`, `prev()`, `next()`, 메서드를 호출하여 목적 패널로 이동중일 때. ([beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart}이벤트의 기본동작을 막지 않아야 한다.)<br>5. `restore()` 메서드를 호출하여 현재 패널이 원래 위치로 이동중일 때. ([beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart}이벤트의 기본동작 방지 전제.)
           * @name eg.Flicking#flick
           * @event
           * @property {String} eventType The name of the event<ko>이벤트 명</ko>
           * @property {Boolean} isTrusted true when the event was generated by a user action(`"mouse"` or `"touch"`) otherwise false<ko>사용자 액션(`"mouse"` 또는 `"touch"`)에 의해 이벤트가 생성된 경우 `true`. 그 외는 `false`</ko>
           * @property {Number} no Index number of the current panel element. See the [getIndex()]{@link eg.Flicking#getIndex} method.<ko>현재 패널 요소의 인덱스 번호. [getIndex()]{@link eg.Flicking#getIndex}메서드 참조.</ko>
           * @property {Number} direction of the panel movement. If `horizontal=true` is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_RIGHT}. If `horizontal=false` is {@link eg.Flicking.DIRECTION_UP} or {@link eg.Flicking.DIRECTION_DOWN}.<ko>패널 이동 방향. `horizontal=true` 이면 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_RIGHT}. `horizontal=false` 이면 {@link eg.Flicking.DIRECTION_UP} 혹은 {@link eg.Flicking.DIRECTION_DOWN}.</ko>
           * @property {Number} pos current coordinate <ko>현재 좌표.</ko>
           * @property {Boolean} holding Whether the user is inputing through the input device. (Whether it is 'mousedown' for a mouse device or 'touchmove' for a touch device.)<ko>사용자가 입력 장치를 통해 입력중인지 여부. (마우스 장치라면 'mousedown' 여부, 터치 장치라면 'touchmove' 여부)</ko>
           * @property {Number} distance Distance value from the touch starting point. If the `direction` property value is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_UP}, it returns a positive number. {@link eg.Flicking.DIRECTION_RIGHT} or {@link eg.Flicking.DIRECTION_DOWN} returns a negative value.<ko>터치 시작점으로부터 이동한 거리 값. `direction`속성값이 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_UP}이면 양수를, {@link eg.Flicking.DIRECTION_RIGHT} 혹은 {@link eg.Flicking.DIRECTION_DOWN}이면 음수를 반환한다.</ko>
           * @see eg.Flicking#event:beforeRestore
           * @see eg.Flicking#restore
           * @see eg.Flicking#event:beforeFlickStart
           * @see eg.Flicking#event:flickEnd
           * @see eg.Flicking#moveTo
           * @see eg.Flicking#prev
           * @see eg.Flicking#next
           * @example
          	 * The order of event occurrence.
          	 * 이벤트 발생 순서
          	 * ```javascript
          	 * // When moving to the destination panel.
          	 * // 목적 패널로 이동할 때.
          	 * beforeFlickStart (once) > flick (many times) > flickEnd (once)
          	 *
          	 * // When the restore operation.
          	 * // 복원 동작일 때.
          	 * beforeRestore (once) > flick (many times) > restore (once)
          	 * ```
           */


          if (e.inputEvent) {
            direction = e.inputEvent.direction; // Adjust direction in case of diagonal touch move

            movedPx = e.inputEvent[this.options.horizontal ? "deltaX" : "deltaY"];

            if (!~conf.dirData.indexOf(direction)) {
              direction = conf.dirData[+(Math.abs(touch.lastPos) <= movedPx)];
            }

            touch.lastPos = movedPx;
          } else {
            touch.lastPos = null;
          }

          conf.customEvent.flick && (eventRes = this._triggerEvent(EVENTS.flick, {
            pos: pos,
            holding: e.holding,
            direction: direction || touch.direction,
            distance: touch.isTrusted ? pos - holdPos : null
          }));
          (eventRes || eventRes === null) && this._setTranslate([-pos, 0]);
        };
        /**
         * 'release' event handler
         * @private
         */


        _proto._releaseHandler = function _releaseHandler(e) {
          var conf = this._conf;
          var touch = conf.touch;
          var holdPos = touch.holdPos;
          var panelSize = conf.panel.size;
          var customEvent = conf.customEvent;
          var isPlusMove = touch.holdPos < e.depaPos.flick;
          touch.distance = e.depaPos.flick - holdPos;
          touch.direction = conf.dirData[+!isPlusMove];
          touch.destPos = holdPos + (isPlusMove ? panelSize : -panelSize);
          var distance = touch.distance;
          var duration = this.options.duration;
          var moveTo = holdPos;

          if (this._isMovable()) {
            !customEvent.restoreCall && (customEvent.restore = false);
            moveTo = touch.destPos;
          } else if (Math.abs(distance) > 0) {
            this._triggerBeforeRestore(e);
          } else {
            duration = 0;
          } // trigger animation


          e.setTo({
            flick: moveTo
          }, duration);
          distance === 0 && this._adjustContainerCss("end");
          touch.holding = false;

          this._setPointerEvents(); // for "click" bug

        };
        /**
         * 'animationStart' event handler
         * @private
         */


        _proto._animationStartHandler = function _animationStartHandler(e) {
          var conf = this._conf;
          var panel = conf.panel;
          var customEvent = conf.customEvent;
          var isFromInput = e.inputEvent || conf.touch.lastPos; // when animation was started by input action

          if (!customEvent.restoreCall && isFromInput && this._setPhaseValue("start", {
            depaPos: e.depaPos.flick,
            destPos: e.destPos.flick
          }) === false) {
            e.stop();
          }

          if (isFromInput) {
            e.duration = this.options.duration;
            e.destPos.flick = panel.size * (panel.index + conf.indexToMove);
          }

          panel.animating = true;
        };
        /**
         * 'animationEnd' event handler
         * @private
         */


        _proto._animationEndHandler = function _animationEndHandler() {
          var conf = this._conf;
          conf.panel.animating = false;

          this._setPhaseValue("end");

          this._triggerRestore(); // reset isTrusted


          conf.touch.isTrusted = false;
        };

        return _class;
      }(superclass)
    );
  });

  /**
   * Create an instance of the eg.Flicking class. Create a flicking UI that sweeps a side-by-side panel with mouse move or touch move input and moves to the next or previous panel.
   * @ko eg.Flicking 클래스의 인스턴스를 생성한다. 나란히 배치한 패널을 마우스 이동(move) 혹은 터치 이동(move) 입력을 받아 쓸어 넘겨 다음 패널이나 이전 패널로 이동하는 UI를 만든다.
   * @alias eg.Flicking
   * @extends eg.Component
   * @requires {@link https://github.com/naver/egjs-component|eg.Component}
   * @requires {@link https://github.com/naver/egjs-axes|eg.Axes}
   * @see Easing Functions Cheat Sheet {@link http://easings.net/} <ko>이징 함수 Cheat Sheet {@link http://easings.net/}</ko>
   * @see If you want to try a different easing function, use the jQuery easing plugin ({@link http://gsgd.co.uk/sandbox/jquery/easing}) or the jQuery UI easing library ({@link https://jqueryui.com/easing}). <ko>다른 easing 함수를 사용하려면 jQuery easing 플러그인({@link http://gsgd.co.uk/sandbox/jquery/easing})이나, jQuery UI easing 라이브러리({@link https://jqueryui.com/easing})를 사용한다</ko>
   * @throws {Error} An Error occur when given base element doesn't exist or it hasn't proper DOM structure to be initialized. <ko>주어진 기본 요소가 존재하지 않거나 초기화 할 적절한 DOM 구조가없는 경우 오류가 발생한다.</ko>
   * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest" , "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
   * @example
   * A common example.
   * 일반적인 예.
   * ```html
   * <div id="flick">
   * 	<div><p>panel 0</p></div>
   * 	<div><p>panel 1</p></div>
   * 	<div><p>panel 2</p></div>
   * </div>
   * ```
   * ```javascript
   * // Examples to omit and omit optional options.
   * // 생략가능한 옵션은 생략하고 생성하는 예.
   * new eg.Flicking("#flick");
   *
   * // An example of specifying and generating values for all optional parameters.
   * // 모든 옵션의 값을 지정하고 생성하는 예.
   * new eg.Flicking("#flick", {
   * 	hwAccelerable: true,
   * 	prefix: "eg-flick",
   * 	deceleration: 0.0006,
   * 	horizontal: true,
   * 	circular: false,
   * 	previewPadding: [10, "15%"], // also as "10px", 15 or "15%" can be applied.
   * 	bounce: [10, 10],
   * 	threshold: 40,
   * 	duration: 100,
   * 	panelEffect: x => 1 - Math.pow(1 - x, 3),
   * 	defaultIndex: 0,
   * 	inputType: ["touch", "mouse"],
   * 	thresholdAngle: 45,
   * 	adaptiveHeight: false
   * });
   * ```
   * @example
   * Example of constructor element parameter value specification.
   * 생성자 element 파라미터 값 지정 예.
   * ```javascript
   * // An example of assigning HTMLElement to an element parameter.
   * // element 파라미터에 HTMLElement를 지정하는 예.
   * new eg.Flicking(document.getElementById("flick"));
   *
   * // An example of assigning a jQuery object to an element parameter.
   * // element 파라미터에 jQuery객체를 지정하는 예.
   * new eg.Flicking($("#flick")[0]);
   *
   * // An example of assigning a css selector string to an element parameter.
   * // element 파라미터에 css 선택자 문자열을 지정하는 예.
   * new eg.Flicking("#flick");
   * ```
   * @example
   * Panel element definition location example.
   * 패널 요소 정의 위치 예.
   * ```html
   * <!--An example of defining a panel element as a child of a base element.-->
   * <!--패널 요소를 기준 요소의 자식으로 정의한 예.-->
   * <div id="flick">
   * 	<div><p>panel 0</p></div>
   * 	<div><p>panel 1</p></div>
   * 	<div><p>panel 2</p></div>
   * </div>
   *
   * <!--An example of defining a panel element as a child of a container element.-->
   * <!--패널 요소를 컨테이너 요소의 자식으로 정의한 예.-->
   * <div id="flick2">
   * 	<div class="eg-flick-container">
   * 		<div><p>panel 0</p></div>
   * 		<div><p>panel 1</p></div>
   * 		<div><p>panel 2</p></div>
   * 	<div>
   * </div>
   * ```
   * @example
   * An example where only one panel is defined and created with a circular.
   * 패널을 하나만 정의하고 순환으로 생성하는 예.
   * ```html
   * <div id="flick">
   * 	<div><p>panel 0</p></div>
   * </div>
   * ```
   * ```javascript
   * // If the number of defined panels is less than the minimum number required for the circulation operation, the necessary number of panel elements are generated.
   * // 정의된 패널의 수가 순환동작에 필요한 최소 개수보다 적으면 필요한 수만큼의 패널 요소가 생성된다.
   * new eg.Flicking("#flick", {
   * 	circular: true
   * })
   * ```
   * @example
   * For error occurrence example. There is no panel element.
   * 오류 발생 예. 패널 요소가 하나도 없는 경우.
   * ```html
   * <div id="flick"></div>
   * ```
   * ```javascript
   * try{
   * 	new eg.Flicking("#flick");
   * } catch(e) {
   * 	// An error occurs because there are no child elements in the reference element.
   *	// 기준 요소안에 자식 요소가 하나도 없으므로 에러가 발생한다.
   * }
   * ```
   */

  var Flicking =
  /*#__PURE__*/
  function () {
    var Flicking =
    /*#__PURE__*/
    function (_Mixin$with) {
      _inheritsLoose(Flicking, _Mixin$with);

      /**
       * Constructor
       * @param {HTMLElement|String} element A base element for the eg.Flicking module. When specifying a value as a `String` type, you must specify a css selector string to select the element.<ko>eg.Flicking 모듈을 사용할 기준 요소. `String`타입으로 값 지정시 요소를 선택하기 위한 css 선택자 문자열을 지정해야 한다.</ko>
       * @param {Object} [options] The option object of the eg.Flicking module<ko>eg.Flicking 모듈의 옵션 객체</ko>
       * @param {Boolean} [options.hwAccelerable=true] Force hardware compositing.<ko>하드웨어 가속 사용 여부.</ko>
       * @param {String} [options.prefix="eg-flick"] A prefix for class names of the panel elements.<ko>패널 요소의 클래스 이름 접두사.</ko>
       * @param {Number} [options.deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time.<ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다.</ko>
       * @param {Boolean} [options.horizontal=true] Direction of the panel movement. (true: horizontal, false: vertical)<ko>패널 이동 방향. (true 가로방향, false 세로방향)</ko>
       * @param {Boolean} [options.circular=false] Whether to let the first panel flick right to the end panel (let the left panel flick from the end panel to move to the first panel). (The term 'circulation')<ko>첫 패널에서 우 액션 입력하여 끝 패널로 이동하게 할지와 끝 패널에서 우 액션 입력하여 첫 패널로 이동할하게 할지 여부. (통칭 '순환')</ko>
       * @param {Number|String|Array} [options.previewPadding=[0,0]] The preview size value(if no unit is given, defaults to `px`) for the previous or next panel.<br>- If the direction is set to "horizontal", the preview section will be displayed on the left and right of the panel.<br>- If the direction is set to "vertical", it will be displayed on the top and bottom of the panel.<ko>이전 패널과 다음 패널을 미리 보는 영역의 크기 값(단위가 지정되지 않는 경우, `px`로 지정).<br>패널 이동 방향이 가로 방향이면 패널 좌우에, 세로 방향이면 패널 상하에 미리 보는 영역이 나타난다.</ko>
       * @param {Number|Array} [options.bounce=[10,10]] The size value(unit: pixel) of the bounce area. If `circular=false`, the panel can be moved by this value when inputting a right gesture in the first panel or inputting a left gesture in the end panel. When the input is completed while moving, it returns to its original position.<ko>바운스 영역의 크기값(단위: 픽셀). `circular=false`인 경우, 첫 패널에서 우 액션 입력시, 끝 패널에서 좌 액션 입력시 이 값 만큼만 패널이 이동할 수 있고 이동한 상태에서 입력을 마치면 원래 자리로 돌아온다.</ko>
       * @param {Number} [options.threshold=40] Movement threshold to destination panel(unit: pixel). A panel element must be dragged beyond the threshold to move to the destination panel.<ko>목적 패널로의 이동 임계값 (단위: 픽셀). 패널 요소를 임계값 이상으로 끌어다 놓아야만이 목적 패널로 이동한다.</ko>
       * @param {Number} [options.duration=100] Duration of the panel movement. (unit: ms)<ko>패널 이동 애니메이션 진행 시간.(단위: ms)</ko>
       * @param {Function} [options.panelEffect=x => 1 - Math.pow(1 - x, 3)] The easing function to apply to a panel moving animation. The default function is easeOutCubic.<ko>패널 이동 애니메이션에 적용할 `easing`함수. 기본값은 `easeOutCubic`이다.</ko>
       * @param {Number} [options.defaultIndex=0] The panel index number to specify when initializing the module. A zero-based integer.<ko>모듈 초기화시 지정할 패널 인덱스 번호. 0부터 시작하는 정수.</ko>
       * @param {Array} [options.inputType=["touch,"mouse"]] Types of input devices. ({@link https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.PanInput.html|eg.Axes.PanInput Reference})<br>- "touch": A touch input device.<br>- "mouse": A mouse.<ko>입력 장치 종류. ({@link https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.PanInput.html|eg.Axes.PanInput 참고})<br>- "touch": 터치 입력 장치.<br>- "mouse": 마우스.</ko>
       * @param {Number} [options.thresholdAngle=45] The threshold value that determines whether user input is horizontal or vertical. (0 ~ 90)<ko>사용자의 입력이 가로 방향인지 세로 방향인지 판단하는 기준 각도 (0 ~ 90)</ko>
       * @param {Boolean} [options.adaptiveHeight=false] Whether the height of the container element reflects the height value of the panel after completing the movement.<br>(Note: on Android 4.1.x stock browser, has rendering bug which not correctly render height value on panel with single node. To avoid just append another empty node at the end.)<ko>목적 패널로 이동한 후 그 패널의 높이값을 컨테이너 요소의 높이값에 반영할지 여부.<br>(참고: Android 4.1.x 스톡 브라우저에서 단일 노드로 구성된 패널의 높이값 변경이 제대로 렌더링 되지 않는 버그가 있음. 비어있는 노드를 추가하면 해결이 가능하다.)</ko>
       * @param {Number} [options.zIndex=2000] z-index value for container element<ko>컨테이너 요소의 z-index 값</ko>
       * @param {Boolean} [options.useTranslate=true] Use css translate method on panel moves. When set to 'false', it'll use top/left instead.<ko>패널 이동시 CSS translate 사용 여부. 'false'로 설정 시, top/left 속성을 사용</ko>
      */
      function Flicking(element, options, _prefix) {
        var _this;

        _this = _Mixin$with.call(this) || this;
        _this.$wrapper = utils.$(element);
        _this.plugins = [];
        var $children = _this.$wrapper && _this.$wrapper.children;

        if (!_this.$wrapper || !$children || !$children.length) {
          // eslint-disable validateLineBreaks, maximumLineLength
          throw new Error("Given base element doesn't exist or it hasn't proper DOM structure to be initialized."); // eslint-enable validateLineBreaks, maximumLineLength
        }

        _this._setOptions(options);

        _this._setConfig($children, _prefix);

        !utils.hasClickBug() && (_this._setPointerEvents = function () {});

        _this._build();

        _this._bindEvents(true);

        _this._applyPanelsCss();

        _this._arrangePanels();

        _this.options.hwAccelerable && SUPPORT_WILLCHANGE && _this._setHint();
        _this.options.adaptiveHeight && _this._setAdaptiveHeight();

        _this._adjustContainerCss("end");

        return _this;
      }
      /**
       * Set options values
       * @private
       * @param {Object} options
       */


      var _proto = Flicking.prototype;

      _proto._setOptions = function _setOptions(options) {
        // default value of previewPadding and bounce
        var arrVal = {
          previewPadding: [0, 0],
          bounce: [10, 10]
        };
        this.options = utils.extend(utils.extend({}, OPTIONS), arrVal, options);

        for (var key in arrVal) {
          var val = this.options[key];

          if (/(number|string)/.test(typeof val)) {
            val = [val, val];
          } else if (!utils.isArray(val)) {
            val = arrVal[key];
          }

          this.options[key] = val;
        } // block use of translate for Android2 environment


        if (IS_ANDROID2) {
          this.options.useTranslate = false;
        }
      };
      /**
       * Set config values
       * @private
       * @param {HTMLCollection} $children wrappers' children elements
       * @param {String} _prefix event prefix
       * @return {HTMLElement}
       */


      _proto._setConfig = function _setConfig($children, _prefix) {
        var options = this.options;
        var padding = options.previewPadding;
        var $nodes = $children;

        if (utils.classList($nodes[0], options.prefix + "-container")) {
          $nodes = $nodes[0];
          this.$container = $nodes;
          $nodes = $nodes.children;
        } // convert to array


        $nodes = utils.toArray($nodes); // config value

        var conf = this._conf = utils.extend(utils.extend({}, CONFIG), {
          panel: {
            $list: $nodes,
            minCount: padding[0] + padding[1] > 0 ? 5 : 3 // minimum panel count

          },
          // remember original class and inline style in case of restoration on destroy()
          origPanelStyle: {
            wrapper: {
              className: this.$wrapper.getAttribute("class") || null,
              style: this.$wrapper.getAttribute("style") || null
            },
            container: {
              className: this.$container && this.$container.getAttribute("class") || null,
              style: this.$container && this.$container.getAttribute("style") || null
            },
            list: $nodes.map(function (v) {
              return {
                className: v.getAttribute("class") || null,
                style: v.getAttribute("style") || null
              };
            })
          },
          useLayerHack: options.hwAccelerable && !SUPPORT_WILLCHANGE,
          eventPrefix: _prefix || ""
        });
        [["LEFT", "RIGHT"], ["UP", "DOWN"]][+!options.horizontal].forEach(function (v) {
          return conf.dirData.push(Axes["DIRECTION_" + v]);
        });
      };
      /**
       * Build and set panel nodes to make flicking structure
       * @private
       */


      _proto._build = function _build() {
        var panel = this._conf.panel;
        var options = this.options;
        var $children = panel.$list;
        var padding = options.previewPadding.concat();
        var prefix = options.prefix;
        var horizontal = options.horizontal;
        var panelCount = panel.count = panel.origCount = $children.length;
        var bounce = options.bounce;

        this._setPadding(padding, true);

        var sizeValue = this._getDataByDirection([panel.size, "100%"]); // container element style


        var cssValue = {
          position: "relative",
          zIndex: options.zIndex || 2000,
          width: "100%",
          height: "100%"
        };
        horizontal && (cssValue.top = "0px");

        if (this.$container) {
          utils.css(this.$container, cssValue);
        } else {
          var $parent = $children[0].parentNode;
          var $container = document$1.createElement("div");
          $container.className = prefix + "-container";
          utils.css($container, cssValue);
          $children.forEach(function (v) {
            return $container.appendChild(v);
          });
          $parent.appendChild($container);
          this.$container = $container;
        } // panels' css values


        $children.forEach(function (v) {
          utils.classList(v, prefix + "-panel", true);
          utils.css(v, {
            position: "absolute",
            width: utils.getUnitValue(sizeValue[0]),
            height: utils.getUnitValue(sizeValue[1]),
            boxSizing: "border-box",
            top: 0,
            left: 0
          });
        });

        if (this._addClonePanels()) {
          panelCount = panel.count = (panel.$list = utils.toArray(this.$container.children)).length;
        } // create Axes instance


        this._axesInst = new Axes({
          flick: {
            range: [0, panel.size * (panelCount - 1)],
            bounce: bounce
          }
        }, {
          easing: options.panelEffect,
          deceleration: options.deceleration,
          interruptable: false
        });

        this._setDefaultPanel(options.defaultIndex);
      };
      /**
       * Set preview padding value
       * @private
       * @param {Array} padding
       * @param {Boolean} build
       */


      _proto._setPadding = function _setPadding(padding, build) {
        var $wrapper = this.$wrapper;
        var horizontal = this.options.horizontal;
        var panel = this._conf.panel;
        var paddingSum = padding.reduce(function (a, c) {
          return parseFloat(a) + parseFloat(c);
        });
        var cssValue = {};

        if (paddingSum || !build) {
          horizontal && padding.reverse();
          cssValue.padding = "" + (horizontal ? "0 " : "") + // add 'px' unit if not present
          padding.map(function (v) {
            return isNaN(v) ? v : v + "px";
          }).join(" 0 ");
        }

        if (build) {
          cssValue.overflow = "hidden";
          cssValue.boxSizing = "border-box";
        }

        Object.keys(cssValue).length && utils.css($wrapper, cssValue);
        var paddingType = horizontal ? ["Left", "Right"] : ["Top", "Bottom"];
        var wrapperSize = Math.max($wrapper["offset" + (horizontal ? "Width" : "Height")], utils.css($wrapper, horizontal ? "width" : "height", true));
        panel.size = wrapperSize - (utils.css($wrapper, "padding" + paddingType[0], true) + utils.css($wrapper, "padding" + paddingType[1], true));
      };
      /**
       * To fulfill minimum panel count cloning original node when circular or previewPadding option are set
       * @private
       * @return {Boolean} true : added clone node, false : not added
       */


      _proto._addClonePanels = function _addClonePanels() {
        var _this2 = this;

        var panel = this._conf.panel;
        var panelCount = panel.origCount;
        var cloneCount = panel.minCount - panelCount;
        var list = panel.$list;
        var cloneNodes; // if panels are given less than required when circular option is set, then clone node to apply circular mode

        if (this.options.circular && panelCount < panel.minCount) {
          cloneNodes = list.map(function (v) {
            return v.cloneNode(true);
          });

          while (cloneNodes.length < cloneCount) {
            cloneNodes = cloneNodes.concat(list.map(function (v) {
              return v.cloneNode(true);
            }));
          }

          cloneNodes.forEach(function (v) {
            return _this2.$container.appendChild(v);
          });
          return !!cloneNodes.length;
        }

        return false;
      };
      /**
       * Move panel's position within array
       * @private
       * @param {Number} count element counts to move
       * @param {Boolean} append where the list to be appended(moved) (true: to the end, false: to the beginning)
       */


      _proto._movePanelPosition = function _movePanelPosition(count, append) {
        var panel = this._conf.panel;
        var list = panel.$list;
        var listToMove = list.splice(append ? 0 : panel.count - count, count);
        panel.$list = append ? list.concat(listToMove) : listToMove.concat(list);
      };
      /**
       * Set default panel to show
       * @private
       * @param {Number} index
       */


      _proto._setDefaultPanel = function _setDefaultPanel(index) {
        var panel = this._conf.panel;
        var lastIndex = panel.count - 1;
        var coords;
        var baseIndex;

        if (this.options.circular) {
          // if default index is given, then move correspond panel to the first position
          if (index > 0 && index <= lastIndex) {
            this._movePanelPosition(index, true);
          } // set first panel's position according physical node length


          baseIndex = this._getBasePositionIndex();

          this._movePanelPosition(baseIndex, false);

          this._setPanelNo({
            no: index,
            currNo: index
          }); // if defaultIndex option is given, then move to that index panel

        } else if (index > 0 && index <= lastIndex) {
          this._setPanelNo({
            index: index,
            no: index,
            currIndex: index,
            currNo: index
          });

          coords = [-(panel.size * index), 0];

          this._setTranslate(coords);

          this._setAxes("setTo", Math.abs(coords[0]), 0);
        }
      };
      /**
       * Arrange panels' position
       * @private
       * @param {Boolean} sort Need to sort panel's position
       * @param {Number} indexToMove Number to move from current position (negative: left, positive: right)
       */


      _proto._arrangePanels = function _arrangePanels(sort, indexToMove) {
        var conf = this._conf;
        var panel = conf.panel;
        var touch = conf.touch;
        var dirData = conf.dirData;
        var baseIndex;

        if (this.options.circular) {
          // when arranging panels, set flag to not trigger flick custom event
          conf.customEvent.flick = false; // move elements according direction

          if (sort) {
            indexToMove && (touch.direction = dirData[+!(indexToMove > 0)]);

            this._arrangePanelPosition(touch.direction, indexToMove);
          } // set index for base element's position


          baseIndex = this._getBasePositionIndex();

          this._setPanelNo({
            index: baseIndex,
            currIndex: baseIndex
          }); // arrange Axes' coord position


          conf.customEvent.flick = !!this._setAxes("setTo", panel.size * panel.index, 0);
        }

        this._applyPanelsPos();
      };
      /**
       * Set each panel's position in DOM
       * @private
       */


      _proto._applyPanelsPos = function _applyPanelsPos() {
        this._conf.panel.$list.forEach(this._applyPanelsCss.bind(this));
      };
      /**
       * Set CSS style values to move elements
       *
       * Initialize setting up checking if browser support transform css property.
       * If browser doesn't support transform, then use left/top properties instead.
       * @private
       * @param {HTMLElement} $el
       * @param {Array} coordsValue
       */


      _proto._setMoveStyle = function _setMoveStyle($el, coordsValue) {
        var transform = TRANSFORM$1;
        var useLayerHack = this._conf.useLayerHack;
        this._setMoveStyle = transform.support ? function ($element, coords) {
          var _utils$css;

          utils.css($element, (_utils$css = {}, _utils$css[transform.name] = utils.translate(coords[0], coords[1], useLayerHack), _utils$css));
        } : function ($element, coords) {
          utils.css($element, {
            left: coords[0],
            top: coords[1]
          });
        };

        this._setMoveStyle($el, coordsValue);
      };
      /**
       * Callback function for applying CSS values to each panels
       * Need to be initialized before use, to set up for Android 2.x browsers or others.
       * @private
       */


      _proto._applyPanelsCss = function _applyPanelsCss() {
        var conf = this._conf;
        var dummyAnchorClassName = "__dummy_anchor";
        var useTranslate = this.options.useTranslate;

        if (!useTranslate) {
          if (IS_ANDROID2) {
            conf.$dummyAnchor = utils.$("." + dummyAnchorClassName);
            !conf.$dummyAnchor && this.$wrapper.appendChild(conf.$dummyAnchor = utils.$("<a href=\"javascript:void(0)\" class=\"" + dummyAnchorClassName + "\" style=\"position:absolute;height:0px;width:0px\">"));
          }

          this._applyPanelsCss = function (v, i) {
            var coords = this._getDataByDirection([this._conf.panel.size * i + "px", 0]);

            utils.css(v, {
              left: coords[0],
              top: coords[1]
            });
          };
        } else {
          this._applyPanelsCss = function (v, i) {
            var coords = this._getDataByDirection([TRANSFORM$1.support ? 100 * i + "%" : this._conf.panel.size * i + "px", 0]);

            this._setMoveStyle(v, coords);
          };
        }
      };
      /**
       * Adjust container's css value to handle Android 2.x link highlighting bug
       * @private
       * @param {String} phase
       *    start - set left/top value to 0
       *    end - set translate value to 0
       * @param {Array} toValue coordinate value
       */


      _proto._adjustContainerCss = function _adjustContainerCss(phase, toValue) {
        var conf = this._conf;
        var panel = conf.panel;
        var options = this.options;
        var useTranslate = options.useTranslate;
        var horizontal = options.horizontal;
        var paddingTop = options.previewPadding[0];
        var container = this.$container;
        var to = toValue;
        var value;

        if (!useTranslate) {
          if (!to) {
            to = -panel.size * panel.index;
          }

          if (phase === "start") {
            container = container.style;
            value = parseFloat(container[horizontal ? "left" : "top"]);

            if (horizontal) {
              value && (container.left = "0px");
            } else {
              value !== paddingTop && (container.top = "0px");
            }

            this._setTranslate([-to, 0]);
          } else if (phase === "end") {
            var _utils$css2;

            to = this._getCoordsValue([to, 0]);
            utils.css(container, (_utils$css2 = {
              left: to.x,
              top: to.y
            }, _utils$css2[TRANSFORM$1.name] = utils.translate(0, 0, conf.useLayerHack), _utils$css2));
            conf.$dummyAnchor && conf.$dummyAnchor.focus();
          }
        }
      };
      /**
       * Set Axes coord value
       * @private
       * @param {String} method
       * @param {Number} flick destination value
       * @param {Number} duration
       * @return {eg.Axes} Axes instance
       */


      _proto._setAxes = function _setAxes(method, flick, duration) {
        return this._axesInst[method]({
          flick: flick
        }, duration);
      };
      /**
       * Set hint for browser to decide efficient way of doing transform changes(or animation)
       * https://dev.opera.com/articles/css-will-change-property/
       * @private
       */


      _proto._setHint = function _setHint() {
        var style = {
          willChange: "transform"
        };
        utils.css(this.$container, style);
        utils.css(this._conf.panel.$list, style);
      };
      /**
       * Get data according options.horizontal value
       * @private
       * @param {Array} value primary data to handle
       * @return {Array}
       */


      _proto._getDataByDirection = function _getDataByDirection(value) {
        var data = value.concat();
        !this.options.horizontal && data.reverse();
        return data;
      };
      /**
       * Move nodes
       * @private
       * @param {Boolean} direction
       * @param {Number} indexToMove
       */


      _proto._arrangePanelPosition = function _arrangePanelPosition(direction, indexToMove) {
        var next = direction === this._conf.dirData[0];

        this._movePanelPosition(Math.abs(indexToMove || 1), next);
      };
      /**
       * Get the base position index of the panel
       * @private
       */


      _proto._getBasePositionIndex = function _getBasePositionIndex() {
        return Math.floor(this._conf.panel.count / 2 - 0.1);
      };
      /**
       * Bind events
       * @private
       * @param {Boolean} bind
       */


      _proto._bindEvents = function _bindEvents(bind) {
        var options = this.options;
        var $wrapper = this.$wrapper;
        var axesInst = this._axesInst;

        if (bind) {
          this._panInput = new PanInput($wrapper, {
            inputType: options.inputType,
            thresholdAngle: options.thresholdAngle,
            scale: this._getDataByDirection([-1, 0])
          });
          axesInst.on({
            hold: this._holdHandler.bind(this),
            change: this._changeHandler.bind(this),
            release: this._releaseHandler.bind(this),
            animationStart: this._animationStartHandler.bind(this),
            animationEnd: this._animationEndHandler.bind(this)
          }).connect(this._getDataByDirection(["flick", ""]), this._panInput);
        } else {
          this.disableInput();
          axesInst.off();
        }
      };
      /**
       * Set container's height value according to children's height
       * @private
       * @param {Number} direction
       */


      _proto._setAdaptiveHeight = function _setAdaptiveHeight(direction) {
        var conf = this._conf;
        var indexToMove = conf.indexToMove;
        var $children;
        var height;
        var $panel = indexToMove === 0 ? // panel moved by 1
        this["get" + (direction === Axes.DIRECTION_LEFT && "Next" || direction === Axes.DIRECTION_RIGHT && "Prev" || "") + "Element"]() : // panel moved by .moveTo()
        conf.panel.$list[conf.panel.currIndex + indexToMove];
        var $first = $panel.querySelector(":first-child");

        if ($first) {
          height = $first.getAttribute(DATA_HEIGHT);

          if (!height) {
            $children = $panel.children;
            height = utils.outerHeight($children.length > 1 ? ($panel.style.height = "auto", $panel) : $first);
            height > 0 && $first.setAttribute(DATA_HEIGHT, height);
          }

          height > 0 && (this.$wrapper.style.height = height + "px");
        }
      };
      /**
       * Trigger beforeRestore event
       * @private
       * @param {Object} e event object
       */


      _proto._triggerBeforeRestore = function _triggerBeforeRestore(e) {
        var conf = this._conf;
        var touch = conf.touch; // reverse direction value when restore

        touch.direction = +conf.dirData.join("").replace(touch.direction, "");
        /**
         * This event occurs before the current panel starts to return to its original position. Followes [flick]{@link eg.Flicking#event:flick} and [restore]{@link eg.Flicking#event:restore} events. The conditions of occurrence are as follows.<br><br>1. The user has finished input but does not exceed the panel movement threshold.<br>2. Call the [restore()]{@link eg.Flicking#restore} method. (Prevent the default behavior of the [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} event.)
         * @ko 현재 패널이 원래 위치로 되돌아가기 시작전에 발생하는 이벤트이다. 뒤이어 [flick]{@link eg.Flicking#event:flick}과 [restore]{@link eg.Flicking#event:restore}이벤트가 발생한다. 발생조건은 아래와 같다.<br><br>1. 사용자 입력이 끝났는데 패널 이동 임계점을 넘지 않은 경우.<br>2. [restore()]{@link eg.Flicking#restore} 메서드 호출.([beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} 이벤트의 기본동작 방지 전제)
         * @name eg.Flicking#beforeRestore
         * @event
         * @property {String} eventType The name of the event <ko>이벤트 명</ko>
         * @property {Boolean} isTrusted `true` when the event was generated by a user action("mouse" or "touch") otherwise `false`.<ko>사용자 액션("mouse" 또는 "touch")에 의해 이벤트가 생성된 경우 `true`. 그 외는 `false`.</ko>
         * @property {Number} no Index number of the current panel element. See the [getIndex()]{@link eg.Flicking#getIndex} method.<ko>현재 패널 요소의 인덱스 번호. [getIndex()]{@link eg.Flicking#getIndex}메서드 참조.</ko>
         * @property {Number} direction of the panel movement. If `horizontal=true` is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_RIGHT}. If `horizontal=false` is {@link eg.Flicking.DIRECTION_UP} or {@link eg.Flicking.DIRECTION_DOWN}.<ko>패널 이동 방향. `horizontal=true` 이면 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_RIGHT}. `horizontal=false` 이면 {@link eg.Flicking.DIRECTION_UP} 혹은 {@link eg.Flicking.DIRECTION_DOWN}.</ko>
         * @property {Number} depaPos Starting coordinate. <ko>출발점 좌표.</ko>
         * @property {Number} destPos Destination coordinate. <ko>도착점 좌표.</ko>
         * @see eg.Flicking#event:flick
         * @see eg.Flicking#event:restore
         * @see eg.Flicking#restore
         * @example
         * // The order of event occurrence.
         * // 이벤트 발생 순서
         * beforeRestore (once) > flick (many times) > restore (once)
         */

        conf.customEvent.restore = this._triggerEvent(EVENTS.beforeRestore, {
          depaPos: e.depaPos.flick,
          destPos: e.destPos.flick
        });

        if (!conf.customEvent.restore) {
          "stop" in e && e.stop();
          conf.panel.animating = false;
        }
      };
      /**
       * Trigger restore event
       * @private
       */


      _proto._triggerRestore = function _triggerRestore() {
        var customEvent = this._conf.customEvent;
        /**
         * The event that occurs after completing the move by [restore()]{@link eg.Flicking#restore} method.
         * @ko [restore()]{@link eg.Flicking#restore} 메서드에 의해 패널이 원래 위치로 이동을 완료한 다음 발생하는 이벤트.
         * @name eg.Flicking#restore
         * @event
         * @property {String} eventType The name of the event <ko>이벤트 명</ko>
         * @property {Boolean} isTrusted `true` when the event was generated by a user action("mouse" or "touch") otherwise `false`.<ko>사용자 액션("mouse" 또는 "touch")에 의해 이벤트가 생성된 경우 `true`. 그 외는 `false`.</ko>
         * @property {Number} no Index number of the current panel element. See the [getIndex()]{@link eg.Flicking#getIndex} method.<ko>현재 패널 요소의 인덱스 번호. [getIndex()]{@link eg.Flicking#getIndex}메서드 참조.</ko>
         * @property {Number} direction of the panel movement. If `horizontal=true` is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_RIGHT}. If `horizontal=false` is {@link eg.Flicking.DIRECTION_UP} or {@link eg.Flicking.DIRECTION_DOWN}.<ko>패널 이동 방향. `horizontal=true` 이면 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_RIGHT}. `horizontal=false` 이면 {@link eg.Flicking.DIRECTION_UP} 혹은 {@link eg.Flicking.DIRECTION_DOWN}.</ko>
         * @see eg.Flicking#event:beforeRestore
         * @see eg.Flicking#event:flick
         * @see eg.Flicking#restore
         * @example
         * // The order of event occurrence.
         * // 이벤트 발생 순서
         * beforeRestore (once) > flick (many times) > restore (once)
         */

        customEvent.restore && this._triggerEvent(EVENTS.restore);
        customEvent.restore = customEvent.restoreCall = false;
      };
      /**
       * Set value when panel changes
       * @private
       * @param {String} phase - [start|end]
       * @param {Object} pos
       */


      _proto._setPhaseValue = function _setPhaseValue(phase, pos) {
        var conf = this._conf;
        var options = this.options;
        var panel = conf.panel;
        var useTranslate = options.useTranslate;

        if (phase === "start" && (panel.changed = this._isMovable())) {
          /**
           * An event that occurs before a user action or [moveTo()]{@link eg.Flicking#moveTo}, [prev()]{@link eg.Flicking#prev}, [next()]{@link eg.Flicking#next} method initiates a move to the destination panel. If you do not prevent the default behavior, then many [flick]{@link eg.Flicking#event:flick} events and one [flickEnd]{@link eg.Flicking#event:flickEnd} event will occur.
           * @ko 사용자 액션 혹은 [moveTo()]{@link eg.Flicking#moveTo}, [prev()]{@link eg.Flicking#prev}, [next()]{@link eg.Flicking#next} 메서드에 의해 목적 패널로의 이동 시작전 발생하는 이벤트. 기본동작을 막지 않는다면 뒤이어 다수의 [flick]{@link eg.Flicking#event:flick}이벤트와 그 뒤 한 번의 [flickEnd]{@link eg.Flicking#event:flickEnd}이벤트가 발생한다.
           * @name eg.Flicking#beforeFlickStart
           * @event
           * @property {String} eventType The name of the event <ko>이벤트 명</ko>
           * @property {Boolean} isTrusted `true` when the event was generated by a user action("mouse" or "touch") otherwise `false`.<ko>사용자 액션("mouse" 또는 "touch")에 의해 이벤트가 생성된 경우 `true`. 그 외는 `false`</ko>
           * @property {Number} no Index number of the current panel element. See the [getIndex()]{@link eg.Flicking#getIndex} method.<ko>현재 패널 요소의 인덱스 번호. [getIndex()]{@link eg.Flicking#getIndex}메서드 참조.</ko>
           * @property {Number} direction of the panel movement. If `horizontal=true` is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_RIGHT}. If `horizontal=false` is {@link eg.Flicking.DIRECTION_UP} or {@link eg.Flicking.DIRECTION_DOWN}.<ko>패널 이동 방향. `horizontal=true` 이면 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_RIGHT}. `horizontal=false` 이면 {@link eg.Flicking.DIRECTION_UP} 혹은 {@link eg.Flicking.DIRECTION_DOWN}.</ko>
           * @property {Number} depaPos Starting coordinate. <ko>출발점 좌표.</ko>
           * @property {Number} destPos Destination coordinate. <ko>도착점 좌표.</ko>
           * @property {Function} stop Cancels the default action. (Default action: Move to destination panel.) The panel element stays at the position of the call to `stop()`. To return to the original position, you must call the [restore()]{@link eg.Flicking#restore} method.<ko>기본동작을 취소한다. (기본동작: 목적 패널로의 이동.) 패널 요소가 `stop()`호출시점의 위치에 머물러 있는다. 원래 자리로 되돌리려면 [restore()]{@link eg.Flicking#restore} 메서드를 호출해야 한다.</ko>
           * @see eg.Flicking#event:flick
           * @see eg.Flicking#event:flickEnd
           * @see eg.Flicking#moveTo
           * @see eg.Flicking#prev
           * @see eg.Flicking#next
           * @example
           * // The order of event occurrence.
           * // 이벤트 발생 순서
           * beforeFlickStart (once) > flick (many times) > flickEnd (once)
           * @example
           * // An example to prevent the default behavior.
           * // 기본동작을 막는 예.
           * new eg.Flicking("#flick").on("beforeFlickStart", e => {
           * 	e.stop();
           * });
           */
          if (!this._triggerEvent(EVENTS.beforeFlickStart, pos)) {
            panel.changed = panel.animating = false;
            return false;
          } else {
            options.adaptiveHeight && this._setAdaptiveHeight(conf.touch.direction);
          }

          conf.indexToMove === 0 && this._setPanelNo();
        } else if (phase === "end") {
          if (options.circular && panel.changed) {
            this._arrangePanels(true, conf.indexToMove);
          }

          useTranslate && this._setTranslate([-panel.size * panel.index, 0]);
          conf.touch.distance = conf.indexToMove = 0;
          /**
           * The event that occurs after completing the move to the destination panel. It occurs in the following cases.<br><br>- After completing the movement to the destination panel by user's move input.<br>- `moveTo()`, `prev()`, `next()` method call. (It does not occur if you have disabled the default behavior of the [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} event.)
           * @ko 목적 패널로의 이동을 완료한 다음 발생하는 이벤트. 아래의 경우에 발생한다.<br><br>- 사용자의 이동(move) 액션 입력에 의한 목적 패널로의 이동완료 후.<br>- `moveTo()`, `prev()`, `next()` 메서드 호출.([beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart}이벤트의 기본동작을 막았다면 발생하지 않는다.)
           * @name eg.Flicking#flickEnd
           * @event
           * @property {String} eventType The name of the event.<ko>이벤트 명</ko>
           * @property {Boolean} isTrusted `true` when the event was generated by a user action("mouse" or "touch") otherwise `false`.<ko>사용자 액션("mouse" 또는 "touch")에 의해 이벤트가 생성된 경우 `true`. 그 외는 `false`.</ko>
           * @property {Number} no Index number of the current panel element. See the [getIndex()]{@link eg.Flicking#getIndex} method.<ko>현재 패널 요소의 인덱스 번호. [getIndex()]{@link eg.Flicking#getIndex}메서드 참조.</ko>
           * @property {Number} direction of the panel movement. If `horizontal=true` is {@link eg.Flicking.DIRECTION_LEFT} or {@link eg.Flicking.DIRECTION_RIGHT}. If `horizontal=false` is {@link eg.Flicking.DIRECTION_UP} or {@link eg.Flicking.DIRECTION_DOWN}.<ko>패널 이동 방향. `horizontal=true` 이면 {@link eg.Flicking.DIRECTION_LEFT} 혹은 {@link eg.Flicking.DIRECTION_RIGHT}. `horizontal=false` 이면 {@link eg.Flicking.DIRECTION_UP} 혹은 {@link eg.Flicking.DIRECTION_DOWN}.</ko>
           * @see eg.Flicking#event:beforeFlickStart
           * @see eg.Flicking#event:flick
           * @see eg.Flicking#moveTo
           * @see eg.Flicking#prev
           * @see eg.Flicking#next
           * @example
           * // The order of event occurrence.
           * // 이벤트 발생 순서
           * beforeFlickStart (once) > flick (many times) > flickEnd (once)
           */

          panel.changed && this._triggerEvent(EVENTS.flickEnd);
        }

        this._adjustContainerCss(phase);

        return true;
      };
      /**
       * Get positive or negative according direction
       * @private
       */


      _proto._getNumByDirection = function _getNumByDirection() {
        var conf = this._conf;
        return conf.touch.direction === conf.dirData[0] ? 1 : -1;
      };
      /**
       * Revert panel number
       * @private
       */


      _proto._revertPanelNo = function _revertPanelNo() {
        var panel = this._conf.panel;

        var num = this._getNumByDirection();

        var index = panel.currIndex >= 0 ? panel.currIndex : panel.index - num;
        var no = panel.currNo >= 0 ? panel.currNo : panel.no - num;

        this._setPanelNo({
          index: index,
          no: no
        });
      };
      /**
       * Set the panel number
       * @private
       * @param {Object} obj number object
       */


      _proto._setPanelNo = function _setPanelNo(obj) {
        var panel = this._conf.panel;
        var count = panel.origCount - 1;

        var num = this._getNumByDirection();

        if (utils.isObject(obj)) {
          for (var key in obj) {
            panel[key] = obj[key];
          }
        } else {
          // remember current value
          panel.currIndex = panel.index;
          panel.currNo = panel.no;
          panel.index += num;
          panel.no += num;
        }

        if (panel.no > count) {
          panel.no = 0;
        } else if (panel.no < 0) {
          panel.no = count;
        }
      };
      /**
       * Set pointerEvents css property on container element due to the iOS click bug
       * @private
       * @param {Event} e
       */


      _proto._setPointerEvents = function _setPointerEvents(e) {
        var $container = this.$container;
        var pointer = utils.css($container, "pointerEvents");
        var pointerEvents;

        if (e && e.holding && e.inputEvent && e.inputEvent.preventSystemEvent && pointer !== "none") {
          pointerEvents = "none";
        } else if (!e && pointer !== "auto") {
          pointerEvents = "auto";
        }

        pointerEvents && utils.css($container, {
          pointerEvents: pointerEvents
        });
      };
      /**
       * Get coordinate value with unit
       * @private
       * @param coordsValue {Array} x,y numeric value
       * @return {Object} x,y coordinate value with unit
       */


      _proto._getCoordsValue = function _getCoordsValue(coordsValue) {
        // the param comes as [ val, 0 ], whatever the direction. So reorder the value depend the direction.
        var coords = this._getDataByDirection(coordsValue);

        return {
          x: utils.getUnitValue(coords[0]),
          y: utils.getUnitValue(coords[1])
        };
      };
      /**
       * Set translate property value
       * @private
       * @param {Array} coordsValue coordinate x,y value
       */


      _proto._setTranslate = function _setTranslate(coordsValue) {
        var coords = this._getCoordsValue(coordsValue);

        this._setMoveStyle(this.$container, [coords.x, coords.y]);
      };
      /**
       * Check if panel passed through threshold pixel
       * @private
       */


      _proto._isMovable = function _isMovable() {
        var options = this.options;
        var axesInst = this._axesInst;
        var isMovable = Math.abs(this._conf.touch.distance) >= options.threshold;
        var max;
        var currPos;

        if (!options.circular && isMovable) {
          max = axesInst.axis.flick.range[1];
          currPos = axesInst.get().flick; // if current position out of range

          if (currPos < 0 || currPos > max) {
            return false;
          }
        }

        return isMovable;
      };
      /**
       * Trigger custom events
       * @private
       * @param {String} name - event name
       * @param {Object} param - additional event value
       * @return {Boolean}
       */


      _proto._triggerEvent = function _triggerEvent(name, param) {
        var conf = this._conf;
        var panel = conf.panel; // pass changed panel no only on 'flickEnd' event

        if (name === EVENTS.flickEnd) {
          panel.currNo = panel.no;
          panel.currIndex = panel.index;
        }

        return this.trigger(conf.eventPrefix + name, utils.extend({
          eventType: name,
          no: panel.currNo,
          direction: conf.touch.direction,
          isTrusted: conf.touch.isTrusted
        }, param));
      };
      /**
       * Get next/prev panel element/index.
       * @private
       * @param {Boolean} direction
       * @param {Boolean} element - true:to get element, false:to get index
       * @param {Number} physical - true : physical, false : logical (@deprecated since 2.2.0)
       * @return {HTMLElement|Number}
       */


      _proto._getElement = function _getElement(direction, element, physical) {
        var panel = this._conf.panel;
        var circular = this.options.circular;
        var pos = panel.currIndex;
        var next = direction === this._conf.dirData[0];
        var result = null;
        var total;
        var index;

        if (physical) {
          total = panel.count;
          index = pos;
        } else {
          total = panel.origCount;
          index = panel.currNo;
        }

        var currentIndex = index;

        if (next) {
          if (index < total - 1) {
            index++;
          } else if (circular) {
            index = 0;
          }
        } else {
          if (index > 0) {
            index--;
          } else if (circular) {
            index = total - 1;
          }
        }

        if (currentIndex !== index) {
          result = element ? panel.$list[next ? pos + 1 : pos - 1] : index;
        }

        return result;
      };
      /**
       * Set value to force move panels when duration is 0
       * @private
       * @param {Boolean} next
       */


      _proto._setValueToMove = function _setValueToMove(next) {
        var conf = this._conf;
        conf.touch.distance = this.options.threshold + 1;
        conf.touch.direction = conf.dirData[+!next];
      };
      /**
       * Returns the index number of the current panel element.
       * @ko 현재 패널 요소의 인덱스 번호를 반환한다.
       * @method eg.Flicking#getIndex
       * @param {Boolean} [physical=false] @deprecated since 2.2.0<br><br>Types of index numbers.<br>- true (Physical): Math.floor({Total number of panels} / 2 - 0.1) value. (Increase by 1 for every two panels.) If the circular option is false, it equals physical=false.<br>- false (Logical): The value of how the content(innerHTML) of the current panel element is in the defined order of the panel elements.<ko>@deprecated since 2.2.0<br><br>인덱스 번호의 종류.<br>- true (물리적): `Math.floor({패널 총 개수} / 2 - 0.1)` 값. (패널이 2개 늘어날 때마다 1씩 증가) `circular`옵션이 `false`이면 `physical=false`와 동일한 값.<br>- false (논리적): 현재 패널 요소의 컨텐트(innerHTML)가 '패널 요소들의 정의된 순서'에서 몇 번째인지에 대한 값.</ko>
       * @return {Number} Index number of the current panel element. A zero-based integer.<ko>현재 패널의 인덱스 번호. 0부터 시작하는 정수.</ko>
       * @see eg.Flicking#getPrevIndex
       * @see eg.Flicking#getNextIndex
       * @example
       * ```html
       * <div id="flick">
       * 	<div><p>panel 0</p></div>
       * 	<div><p>panel 1</p></div>
       * 	<div><p>panel 2</p></div>
       * 	<div><p>panel 3</p></div>
       * </div>
       * ```
       * ```javascript
       * // circular off and left flicking.
       * // 순환을 끄고 좌 플리킹.
       * new eg.Flicking("#flick").on("flickEnd", {currentTarget} => {
       * 	console.log(currentTarget.getIndex()); // 1 > 2 > 3
       * 	console.log(currentTarget.getIndex(true)); // 1 > 2 > 3
       * };
       *
       * // circular on and left flicking.
       * // 순환을 켜고 좌 플리킹.
       * new eg.Flicking("#flick", {circular: true}).on("flickEnd", {currentTarget} => {
       * 	console.log(currentTarget.getIndex()); // 1 > 2 > 3 > 0 > 1 > 2 > 3 > 0 ...
       * 	console.log(currentTarget.getIndex(true)); // 1 > 1 > 1 > 1 > 1 > 1 > 1 > 1 ...
       * };
       * ```
       * @example
       * ```html
       * <!--Define only two panels.-->
       * <!--패널을 두 개만 정의한다.-->
       * <div id="flick2">
       * 	<div><p>panel 0</p></div>
       * 	<div><p>panel 1</p></div>
       * </div>
       * ```
       * ```javascript
       * // (In the case of circulation) If the number of defined panel elements is less than the minimum number required, the number of panels is created.
       * // Therefore, it is described as 'the number of panel definitions of the contents of the panel.'
       * // (순환인 경우) 정의된 패널 요소의 개수가 필요 최소개수보다 적으면 그 수만큼의 패널을 생성한다.
       * // 그렇기 때문에 '패널이 담고 있는 컨텐트의 패널 정의 순성상의 번호'라고 설명한다.
       * const flick = new eg.Flicking("flick2", {
       * 	circular: true
       * });
       *
       * // The content of the current panel is the first in the panel definition order.
       * // 현재 패널이 담고 있는 컨텐트는 패널 정의 순서상 첫 번째이다.
       * flick.getIndex(); // 0
       *
       * // The content of the next panel is the second in the panel definition order.
       * // 다음 패널이 담고 있는 컨텐트는 패널 정의 순서상 두 번째이다.
       * flick.getNextIndex(); // 1
       *
       * // The content of the previous panel is the second in the panel definition order.
       * // 이전 패널이 담고 있는 컨텐트는 패널 정의 순서상 두 번째이다.
       * flick.getPrevIndex(); // 1
       * ```
       */


      _proto.getIndex = function getIndex(physical) {
        return this._conf.panel[physical ? "currIndex" : "currNo"];
      };
      /**
       * Returns the reference of the current panel element.
       * @ko 현재 패널 요소의 레퍼런스를 반환한다.
       * @method eg.Flicking#getElement
       * @return {HTMLElement} Current panel element.<ko>현재 패널 요소.</ko>
       * @see eg.Flicking#getPrevElement
       * @see eg.Flicking#getNextElement
       */


      _proto.getElement = function getElement() {
        var panel = this._conf.panel;
        return panel.$list[panel.currIndex];
      };
      /**
       * Returns the reference of the next panel element.
       * @ko 다음 패널 요소의 레퍼런스를 반환한다.
       * @method eg.Flicking#getNextElement
       * @return {HTMLElement|null} Next panel element or `null` if it does not exist.<ko>다음 패널 요소. 패널이 없으면 `null`을 반환한다.</ko>
       * @see eg.Flicking#getElement
       * @see eg.Flicking#getPrevElement
       */


      _proto.getNextElement = function getNextElement() {
        return this._getElement(this._conf.dirData[0], true);
      };
      /**
       * Returns the index number of the next panel element.
       * @ko 다음 패널 요소의 인덱스 번호를 반환한다.
       * @method eg.Flicking#getNextIndex
       * @param {Boolean} [physical=false] @deprecated since 2.2.0<br><br>Types of index numbers<br>- true (Physical): Plus one of [getIndex()]{@link eg.Flicking#getIndex} return value.<br>- false (Logical): The value of how the content(innerHTML) of the next panel element is in the defined order of the panel elements.<ko>@deprecated since 2.2.0<br><br>인덱스 번호의 종류.<br>- true (물리적): [getIndex()]{@link eg.Flicking#getIndex} 반환값에 1을 더한 값.<br>- false (논리적): 다음 패널 요소의 컨텐트(innerHTML)가 '패널 요소들의 정의된 순서'에서 몇 번째인지에 대한 값.</ko>
       * @return {Number|null} Index number of the next panel element or null if it does not exist. A zero-based integer.<ko>다음 패널 요소의 인덱스 번호. 0부터 시작하는 정수. 패널이 없으면 `null`을 반환한다.</ko>
       * @see eg.Flicking#getIndex
       * @see eg.Flicking#getPrevIndex
       */


      _proto.getNextIndex = function getNextIndex(physical) {
        return this._getElement(this._conf.dirData[0], false, physical);
      };
      /**
       * Returns a reference to all panel elements.
       * @ko 모든 패널 요소의 레퍼런스를 반환한다.
       * @method eg.Flicking#getAllElements
       * @return {HTMLElement[]} Whole panel elements.<ko>모든 패널 요소.</ko>
       */


      _proto.getAllElements = function getAllElements() {
        return this._conf.panel.$list;
      };
      /**
       * Returns the reference of the previous panel element.
       * @ko 이전 패널 요소의 레퍼런스를 반환한다.
       * @method eg.Flicking#getPrevElement
       * @return {HTMLElement|null} Previous panel element or `null` if it does not exist.<ko>이전 패널 요소. 패널이 없으면 `null`을 반환한다.</ko>
       * @see eg.Flicking#getElement
       * @see eg.Flicking#getNextElement
       */


      _proto.getPrevElement = function getPrevElement() {
        return this._getElement(this._conf.dirData[1], true);
      };
      /**
       * Returns the index number of the previous panel element.
       * @ko 이전 패널 요소의 인덱스 번호를 반환한다.
       * @method eg.Flicking#getPrevIndex
       * @param {Boolean} [physical=false] @deprecated since 2.2.0<br><br>Types of index numbers<br>- true (Physical): Minus one of [getIndex()]{@link eg.Flicking#getIndex} return value.<br>- false (Logical): The value of how the content(innerHTML) of the current panel element is in the defined order of the panel elements.<ko>@deprecated since 2.2.0<br><br>인덱스 번호의 종류<br>- true (물리적): [getIndex()]{@link eg.Flicking#getIndex} 반환값에 1을 뺀 값.<br>- false (논리적): 이전 패널 요소의 컨텐트(innerHTML)가 '패널 요소들의 정의된 순서'에서 몇 번째인지에 대한 값.</ko>
       * @return {Number|null} Previous element index value or null if no more element exist. A zero-based integer.<ko>이전 패널 요소의 인덱스 번호. 0부터 시작하는 정수. 패널이 없는 경우는 `null`.</ko>
       * @see eg.Flicking#getIndex
       * @see eg.Flicking#getNextIndex
       */


      _proto.getPrevIndex = function getPrevIndex(physical) {
        return this._getElement(this._conf.dirData[1], false, physical);
      };
      /**
       * Checks whether the animated panel is playing.
       * @ko 패널 이동 애니메이션이 진행 중인지 확인한다.
       * @method eg.Flicking#isPlaying
       * @return {Boolean} Indicates whether the animated panel is playing <ko>패널 이동 애니메이션 진행 중 여부</ko>
       */


      _proto.isPlaying = function isPlaying() {
        return this._conf.panel.animating;
      };
      /**
       * Move panel to the given direction
       * @private
       * @param {Boolean} next
       * @param {Number} duration
       */


      _proto._movePanel = function _movePanel(next, duration) {
        var conf = this._conf;
        var panel = conf.panel;
        var options = this.options;

        if (panel.animating || conf.touch.holding) {
          return undefined;
        }

        this._setValueToMove(next);

        if (options.circular || this["get" + (next ? "Next" : "Prev") + "Index"]() !== null) {
          this._movePanelByPhase("setBy", panel.size * (next ? 1 : -1), duration);
        }

        return this;
      };
      /**
       * Move panel applying start/end phase value
       * @private
       * @param {String} method Axes' method name
       * @param {Number} to destination value
       * @param {Number} durationValue duration value
       */


      _proto._movePanelByPhase = function _movePanelByPhase(method, to, durationValue) {
        var duration = utils.getNumValue(durationValue, this.options.duration);

        if (this._setPhaseValue("start") !== false) {
          this._setAxes(method, to, duration);

          !duration && this._setPhaseValue("end");
        }
      };
      /**
       * Moves an element to the next panel. If `horizontal=true`is right panel. If `horizontal=false`is lower panel.
       * @ko 다음 패널로 이동한다. `horizontal=true`이면 우측 패널. `horizontal=false`이면 하측 패널.
       * @method eg.Flicking#next
       * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @fires eg.Flicking#beforeFlickStart
       * @fires eg.Flicking#flick
       * @fires eg.Flicking#flickEnd
       * @see eg.Flicking#moveTo
       * @see eg.Flicking#prev
       */


      _proto.next = function next(duration) {
        return this._movePanel(true, duration);
      };
      /**
       * Moves an element to the previous panel. If `horizontal=true`is left panel. If `horizontal=false`is upper panel.
       * @ko 이전 패널로 이동한다. `horizontal=true`이면 좌측 패널. `horizontal=false`이면 상측 패널.
       * @method eg.Flicking#prev
       * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
       * @fires eg.Flicking#beforeFlickStart
       * @fires eg.Flicking#flick
       * @fires eg.Flicking#flickEnd
       * @see eg.Flicking#moveTo
       * @see eg.Flicking#next
       */


      _proto.prev = function prev(duration) {
        return this._movePanel(false, duration);
      };
      /**
       * Moves to the panel in the order specified in `noValue`. If noValue is equal to the current logical index numbering, no action is taken. [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart}, [flick]{@link eg.Flicking#event:flick}, [flickEnd]{@link eg.Flicking#event:flickEnd} events occur one after the other.
       * @ko `noValue`에 지정한 순서의 패널로 이동한다. `noValue`값이 현재의 논리적 인덱스 번호와 같다면 아무동작 하지 않는다. [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart}, [flick]{@link eg.Flicking#event:flick}, [flickEnd]{@link eg.Flicking#event:flickEnd} 이벤트가 차례로 발생한다.
       * @method eg.Flicking#moveTo
       * @param {Number} noValue The logical index number of the panel element to be moved. (Based on the defined order of the panel elements.)<ko>이동할 패널 요소의 논리적 인덱스 번호. ([getIndex()]{@link eg.Flicking#getIndex}메서드 참조.)</ko>
       * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
       * @fires eg.Flicking#beforeFlickStart
       * @fires eg.Flicking#flick
       * @fires eg.Flicking#flickEnd
       * @see eg.Flicking#prev
       * @see eg.Flicking#next
       */


      _proto.moveTo = function moveTo(noValue, duration) {
        var conf = this._conf;
        var panel = conf.panel;
        var circular = this.options.circular;
        var currentIndex = panel.index;
        var indexToMove;
        var isPositive;
        var no = noValue;
        no = utils.getNumValue(no, -1);

        if (no < 0 || no >= panel.origCount || no === panel.no || panel.animating || conf.touch.holding) {
          return this;
        }

        indexToMove = no - (circular ? panel.no : currentIndex);
        isPositive = indexToMove > 0; // check for real panel count which can be moved on each sides in circular mode

        if (circular && Math.abs(indexToMove) > (isPositive ? panel.count - (currentIndex + 1) : currentIndex)) {
          indexToMove += (isPositive ? -1 : 1) * panel.count;
          isPositive = indexToMove > 0;
        }

        this._setPanelNo(circular ? {
          no: no
        } : {
          no: no,
          index: no
        });

        this._conf.indexToMove = indexToMove;

        this._setValueToMove(isPositive);

        this._movePanelByPhase(circular ? "setBy" : "setTo", panel.size * (circular ? indexToMove : no), duration);

        return this;
      };
      /**
       * The horizontal or vertical length of the panel is updated according to the base element. If `horizontal=true` is horizontal. If `horizontal=false` is vertical.
       * @ko 패널의 가로 혹은 세로 길이를 기준요소에 맞춰 갱신한다. `horizontal=true`이면 가로, `horizontal=false`이면 세로.
       * @method eg.Flicking#resize
       * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
       * @example
       * const flick = new eg.Flicking("#flick", {
       * 	previewPadding: [10, 10]
       * });
       *
       * // When device orientaion changes.
       * // 단말기를 회전했을 때.
       * flick.resize();
       *
       * // Or when changes previewPadding option from its original value.
       * // 또는 previewPadding옵션값을 변경했을 때.
       * flick.options.previewPadding = [20, 30];
       * flick.resize();
       */


      _proto.resize = function resize() {
        var conf = this._conf;
        var options = this.options;
        var panel = conf.panel;
        var horizontal = options.horizontal;
        var useTranslate = options.useTranslate;
        var panelSize;

        if (!this.isPlaying()) {
          var _utils$css3;

          if (utils.isArray(options.previewPadding) && typeof +options.previewPadding.join("") === "number") {
            this._setPadding(options.previewPadding.concat());

            panelSize = panel.size;
          } else if (horizontal) {
            panelSize = panel.size = utils.css(this.$wrapper, "width", true);
          } // resize panel elements


          utils.css(panel.$list, (_utils$css3 = {}, _utils$css3[horizontal ? "width" : "height"] = utils.getUnitValue(panelSize), _utils$css3)); // remove data-height attribute and re-evaluate panel's height

          if (options.adaptiveHeight) {
            var $panel = this.$container.querySelectorAll("[" + DATA_HEIGHT + "]");

            if ($panel.length) {
              utils.toArray($panel).forEach(function (v) {
                return v.removeAttribute(DATA_HEIGHT);
              });

              this._setAdaptiveHeight();
            }
          }

          this._axesInst.axis.flick.range = [0, panelSize * (panel.count - 1)];

          this._setAxes("setTo", panelSize * panel.index, 0);

          if (!useTranslate) {
            this._applyPanelsPos();

            this._adjustContainerCss("end");
          }
        }

        return this;
      };
      /**
       * Return the panel to its original position. (It only works when the default behavior of the [beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} event is canceled.) [beforeRestore]{@link eg.Flicking#event:beforeRestore}, [flick]{@link eg.Flicking#event:flick}, [restore]{@link eg.Flicking#event:restore} events are occur in order.
       * @ko 패널의 위치를 원래 자리로 되돌린다. ([beforeFlickStart]{@link eg.Flicking#event:beforeFlickStart} 이벤트의 기본동작을 취소한 경우에만 동작함.) [beforeRestore]{@link eg.Flicking#event:beforeRestore}, [flick]{@link eg.Flicking#event:flick}, [restore]{@link eg.Flicking#event:restore} 이벤트가 차례로 발생한다.
       * @method eg.Flicking#restore
       * @param {Number} [durationValue=options.duration] Duration of the panel movement (unit: ms)<ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
       * @fires eg.Flicking#event:beforeRestore
       * @fires eg.Flicking#event:flick
       * @fires eg.Flicking#event:restore
       * @example
       * new eg.Flicking("#flick").on("beforeFlickStart", e => {
       * 	if (e.no === 2) {
       * 		// Cancels the default behavior of the 'beforeFlickStart' event.
       * 		// 'beforeFlickStart' 이벤트 기본동작 취소.
       * 		e.stop();
       *
       * 		// Return to original position.
       * 		// 원래 자리로 되돌림.
       * 		this.restore(100);
       * 	}
       * });
       */


      _proto.restore = function restore(durationValue) {
        var conf = this._conf;
        var panel = conf.panel;

        var currPos = this._axesInst.get().flick;

        var duration = durationValue;
        var destPos; // check if the panel isn't in right position

        if (currPos !== panel.currIndex * panel.size) {
          conf.customEvent.restoreCall = true;
          duration = utils.getNumValue(duration, this.options.duration);

          this._revertPanelNo();

          destPos = panel.size * panel.index;

          this._triggerBeforeRestore({
            depaPos: currPos,
            destPos: destPos
          });

          this._setAxes("setTo", destPos, duration);

          if (!duration) {
            this._adjustContainerCss("end");

            this._triggerRestore();
          } // to handle on api call

        } else if (panel.changed) {
          this._revertPanelNo();

          conf.touch.distance = conf.indexToMove = 0;
        }

        return this;
      };
      /**
       * The input from the input device is not blocked so that the panel can be moved by the input device.
       * @ko 막았던 입력 장치로부터의 입력을 푼다.
       * @method eg.Flicking#enableInput
       * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @see eg.Flicking#disableInput
       */


      _proto.enableInput = function enableInput() {
        this._panInput.enable();

        return this;
      };
      /**
       * The input from the input device is blocked so that the panel is not moved by the input device.
       * @ko 패널이 입력 장치에 의해 움직이지 않도록 입력 장치로부터의 입력을 막는다.
       * @method eg.Flicking#disableInput
       * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @see eg.Flicking#enableInput
       */


      _proto.disableInput = function disableInput() {
        this._panInput.disable();

        return this;
      };
      /**
       * Get current flicking status. If the returned value is specified as a [setStatus()]{@link eg.Flicking#setStatus} method argument, it can be returned to its value state.
       * @ko 현재 상태 값을 반환한다. 반환받은 값을 [setStatus()]{@link eg.Flicking#setStatus} 메서드 인자로 지정하면 그 값 상태로 되돌릴 수 있다.
       * @method eg.Flicking#getStatus
       * @param {Boolean} [stringify] Set true if want get stringified status value.<ko>true 지정시 json문자열 형태로 반환한다.</ko>
       * @return {Status|String} An object with current state value information.<ko>현재 상태값 정보를 가진 객체.</ko>
       * @see eg.Flicking#setStatus
       * @example
       * const flick = new eg.Flicking("#flick");
       * const status = flick.getStatus();
       * const jsonStaus = flick.getStatus(true);
       *
       * console.log(status); // {panel: {...}, $list: Array(7)}
       * console.log(jsonStatus); // "{\"panel\":{\"index\":3,\"no\":6,\"currIndex\":3,\"currNo\":6},\"$list\":[{\"style\":\"background-color: rgb(155, 49, 137); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 3&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(51, 172, 91); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 4&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(116, 38, 241); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 5&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(141, 139, 24); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 6&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(204, 102, 204); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 0&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(54, 53, 156); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 1&lt;/p&gt;\n\t\t\t\t\t\t\"},{\"style\":\"background-color: rgb(196, 218, 72); position: absolute;  height: 100%;\",\"className\":\"eg-flick-panel\",\"html\":\"\n\t\t\t\t\t\t\t\t&lt;p&gt;panel 2&lt;/p&gt;\n\t\t\t\t\t\t\"}]}"
       */

      /**
       * The return value specification of the getStatus () method.
       * @ko getStatus() 메서드의 반환값 명세.
       * @typedef {Object} Status
       * @property {Object} panel current panel position<ko>현재 패널 위치</ko>
       * @property {Number} panel.index Physical index number.<ko>물리적 인덱스 번호.</ko>
       * @property {Number} panel.currIndex Current physical index number.<ko>현재 물리적 인덱스 번호.</ko>
       * @property {Number} panel.no Logical index number.<ko>논리적 인덱스 번호.</ko>
       * @property {Number} panel.currNo Current logical index number.<ko>현재 논리적 인덱스 번호.</ko>
       * @property {Array.<{style: String, className: String, html: String}>} $list panel's html<ko>패널 정보</ko>
       * @property {Object} $list.obj For convenience, the element is denoted by obj.<ko>편의상 원소를 obj로 표기함</ko>
       * @property {String} $list.obj.style The value of the style attribute of the panel element. ('transform', 'left', 'top', 'will-change', 'box-sizing', 'width' style has been deleted.)<ko>패널 요소의 style 속성 값. ('transform', 'left', 'top', 'will-change', 'box-sizing', 'width' style은 삭제됨)</ko>
       * @property {String} $list.obj.className The class name of the panel element.<ko>패널 요소의 class 이름.</ko>
       * @property {String} $list.obj.html The innerHTML value of the panel element.<ko>패널 요소의 innerHTML 값.</ko>
       * @see eg.Flicking#getIndex
       */


      _proto.getStatus = function getStatus(stringify) {
        var panel = this._conf.panel;
        var rxStyle = /((?:-webkit-)?transform|left|top|will-change|box-sizing|width):[^;]*;/g;
        var status = {
          // current panel position
          panel: {
            index: panel.index,
            no: panel.no,
            currIndex: panel.currIndex,
            currNo: panel.currNo
          },
          // panel's html
          $list: panel.$list.map(function (v) {
            return {
              style: v.style.cssText.replace(rxStyle, "").trim(),
              className: v.className,
              html: v.innerHTML
            };
          })
        };
        return stringify ? JSON.stringify(status) : status;
      };
      /**
       * Restore to the state of the `statusValue`.
       * @ko `statusValue`의 상태로 복원한다.
       * @method eg.Flicking#setStatus
       * @param {Status|String} statusValue Status value to be restored. You can specify the return value of the [getStatus()]{@link eg.Flicking#getStatus} method.<ko>복원할 상태 값. [getStatus()]{@link eg.Flicking#getStatus}메서드 반환값을 지정하면 된다.</ko>
       * @see eg.Flicking#getStatus
       * @example
       * const flick = new eg.Flicking("#flick");
       * const status = flick.getStatus();
       *
       * // Move to arbitrary panel.
       * // 임의 패널로 이동
       * flick.moveTo(2);
       *
       * // Restore to status.
       * // status 상태로 복원
       * flick.setStatus(status);
       */


      _proto.setStatus = function setStatus(statusValue) {
        var panel = this._conf.panel;
        var isAdaptiveHeight = this.options.adaptiveHeight;
        var status = typeof statusValue === "string" ? JSON.parse(statusValue) : statusValue;

        if (status) {
          for (var x in status.panel) {
            x in panel && (panel[x] = status.panel[x]);
          }

          panel.$list.forEach(function (v, i) {
            var data = status.$list[i];
            var style = data.style;
            var className = data.className;
            var html = data.html;
            style && (v.style.cssText += style);
            className && (v.className = className);
            html && (v.innerHTML = html);
          });
          isAdaptiveHeight && this._setAdaptiveHeight();
        }
      };
      /**
       * Returns the reference element and its children to the state they were in before the instance was created. Remove all attached event handlers. Specify `null` for all attributes of the instance (including inherited attributes).<br>If plugin isn't empty, also reset all plugins registered.
       * @ko 기준 요소와 그 하위 요소를 인스턴스 생성전의 상태로 되돌린다. 부착된 모든 이벤트 핸들러를 탈거한다. 인스턴스의 모든 속성(상속받은 속성포함)에 `null`을 지정한다.<br>플러그인이 비어있지 않다면, 플러그인도 모두 리셋한다.
       * @method eg.Flicking#destroy
       * @example
       * const flick = new eg.Flicking("#flick");
       * flick.destroy();
       * console.log(flick.moveTo); // null
       */


      _proto.destroy = function destroy() {
        var _this3 = this;

        var conf = this._conf;
        var origPanelStyle = conf.origPanelStyle;
        var wrapper = origPanelStyle.wrapper;
        var container = origPanelStyle.container;
        var list = origPanelStyle.list; // unbind events

        this._bindEvents(false);

        this.off(); // destroy eg.Axes instance

        this._axesInst.destroy();

        this._panInput.destroy(); // unwrap container element and restore original inline style
        // restore wrapper style


        var $wrapper = this.$wrapper;
        $wrapper.setAttribute("class", wrapper.className);
        $wrapper[wrapper.style ? "setAttribute" : "removeAttribute"]("style", wrapper.style); // restore container style

        var $container = this.$container;
        var $children = [].slice.call($container.children);

        if (origPanelStyle.container.className) {
          $container.setAttribute("class", container.className);
          $container[container.style ? "setAttribute" : "removeAttribute"]("style", container.style);
        } else {
          $children.forEach(function (v) {
            return $wrapper.appendChild(v);
          });
          $container.parentNode.removeChild($container);
        }

        for (var i = 0, $el; $el = $children[i]; i++) {
          if (i > list.length - 1) {
            $el.parentNode.removeChild($el);
          } else {
            var className = list[i].className;
            var style = list[i].style;
            $el[className ? "setAttribute" : "removeAttribute"]("class", className);
            $el[style ? "setAttribute" : "removeAttribute"]("style", style);
          }
        } // release plugin resources


        this.plugins.forEach(function (v) {
          _this3.plugins[v].$componentWillUnmount();
        }); // release resources

        for (var x in this) {
          this[x] = null;
        }
      };
      /**
       * Register plugin to be used.
       * @ko 사용될 플러그인을 등록한다.
       * @method eg.Flicking#plugin
       * @example
       * new eg.Flicking("#flick").plugin([
       *     new eg.Flicking.plugin.OpacityEffect("span"),
       *     ...
       * ]);
       * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */


      _proto.plugin = function plugin(list) {
        var _this4 = this;

        list.forEach(function (p) {
          /**
           * A list of plugins used.
           * @ko 사용된 플러그인 목록
           * @property {Array} plugins An array of plugin instances <ko>플러그인 인스턴스 배열</ko>
           * @name plugins
           * @type {Array}
           * @instance
           * @example
           * const flick = new eg.Flicking( ... ).plugin([ ... ]);
           *
           * flick.plugins; // [ ... ] - array of plugins
           * @memberof eg.Flicking
           */
          if (_this4.plugins.filter(function (v) {
            return v.constructor === p.constructor;
          }).length === 0) {
            _this4.plugins.push(p.$componentWillMount(_this4));
          }
        });
        return this;
      };
      /**
       * Collection of utilities used internally
       * @ko 내부에서 사용되는 유틸리티 모음
       * @name utils
       * @memberof eg.Flicking
       * @static
       * @constant
       * @private
       * @type {Object}
       */


      return Flicking;
    }(Mixin(Component)["with"](eventHandler));

    Flicking.utils = utils;
    Flicking.VERSION = "2.4.1";
    Flicking.consts = {
      EVENTS: EVENTS,
      TRANSFORM: TRANSFORM$1,
      SUPPORT_WILLCHANGE: SUPPORT_WILLCHANGE,
      IS_ANDROID2: IS_ANDROID2
    };
    Flicking.DIRECTION_NONE = Axes.DIRECTION_NONE;
    Flicking.DIRECTION_LEFT = Axes.DIRECTION_LEFT;
    Flicking.DIRECTION_RIGHT = Axes.DIRECTION_RIGHT;
    Flicking.DIRECTION_UP = Axes.DIRECTION_UP;
    Flicking.DIRECTION_DOWN = Axes.DIRECTION_DOWN;
    Flicking.DIRECTION_HORIZONTAL = Axes.DIRECTION_HORIZONTAL;
    Flicking.DIRECTION_VERTICAL = Axes.DIRECTION_VERTICAL;
    Flicking.DIRECTION_ALL = Axes.DIRECTION_ALL;
    return Flicking;
  }();

  return Flicking;

})));
//# sourceMappingURL=flicking.pkgd.js.map
