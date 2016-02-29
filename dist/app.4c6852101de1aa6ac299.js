webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(638);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(159);
	
	var _history = __webpack_require__(216);
	
	var _routes = __webpack_require__(220);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _Root = __webpack_require__(364);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _configureStore = __webpack_require__(590);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var historyConfig = { basename: ("") };
	var history = (0, _reactRouter.useRouterHistory)(_history.createHistory)(historyConfig);
	
	var initialState = window.__INITIAL_STATE__;
	var store = (0, _configureStore2.default)({ initialState: initialState, history: history });
	
	var routes = (0, _routes2.default)(store);
	
	// Render the React application to the DOM
	_reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: history, routes: routes, store: store }), document.getElementById('root'));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);


/***/ },
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(159);
	
	var _CoreLayout = __webpack_require__(221);
	
	var _CoreLayout2 = _interopRequireDefault(_CoreLayout);
	
	var _ProjectBuilds = __webpack_require__(226);
	
	var _ProjectBuilds2 = _interopRequireDefault(_ProjectBuilds);
	
	var _NotFoundView = __webpack_require__(363);
	
	var _NotFoundView2 = _interopRequireDefault(_NotFoundView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (store) {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _CoreLayout2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _ProjectBuilds2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/404', component: _NotFoundView2.default }),
	    _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/404' })
	  );
	};
	
	// NOTE: here we're making use of the `resolve.root` configuration
	// option in webpack, which allows us to specify import paths as if
	// they were from the root of the ~/src directory. This makes it
	// very easy to navigate to files regardless of how deeply nested
	// your current file is.

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(222);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Note: Stateless/function components *will not* hot reload!
	// react-transform *only* works on component classes.
	//
	// Since layouts rarely change, they are a good place to
	// leverage React's new Stateless Functions:
	// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
	//
	// CoreLayout is a pure function of its props, so we can
	// define it with a plain javascript function...
	function CoreLayout(_ref) {
	  var children = _ref.children;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'page-container' },
	    children
	  );
	}
	
	CoreLayout.propTypes = {
	  children: _react.PropTypes.element
	};
	
	exports.default = CoreLayout;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(225)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(223, function() {
				var newContent = __webpack_require__(223);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(224)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}body,html{margin:0;padding:0;height:100%;background:#222;color:#eee;font-family:Oswald,sans-serif}*,:after,:before{box-sizing:inherit}.page-container{height:100%}", "", {"version":3,"sources":["/./src/src/styles/core.scss","/./src/src/styles/vendor/_normalize.scss"],"names":[],"mappings":"AAAA,KCSE,uBAAwB,0BACG,6BACI,CDXjC,KCmBE,QAAU,CDnBZ,2FC6CE,aAAe,CD7CjB,4BCyDE,qBAAsB,uBACG,CD1D3B,sBCmEE,aAAc,QACJ,CDpEZ,kBC8EE,YAAc,CD9EhB,ECyFE,4BAA8B,CDzFhC,iBCkGE,SAAW,CDlGb,YC6GE,wBAA0B,CD7G5B,SCsHE,eAAkB,CDtHpB,IC8HE,iBAAmB,CD9HrB,GCuIE,cAAe,cACE,CDxInB,KCgJE,gBAAiB,UACL,CDjJd,MCyJE,aAAe,CDzJjB,QCkKE,cAAe,cACA,kBACI,uBACM,CDrK3B,ICyKE,SAAY,CDzKd,IC6KE,aAAgB,CD7KlB,ICwLE,QAAU,CDxLZ,eCgME,eAAiB,CDhMnB,OC2ME,eAAiB,CD3MnB,GCoNE,uBAAwB,QACd,CDrNZ,IC6NE,aAAe,CD7NjB,kBCwOE,sBAAkC,aACnB,CDzOjB,sCCgQE,cAAe,aACD,QACJ,CDlQZ,OC0QE,gBAAkB,CD1QpB,cCsRE,mBAAqB,CDtRvB,oECqSE,0BAA2B,cACX,CDtSlB,sCC+SE,cAAgB,CD/SlB,iDCwTE,SAAU,SACC,CDzTb,MCkUE,kBAAoB,CDlUtB,uCC+UE,sBAAuB,SACZ,CDhVb,4FC2VE,WAAa,CD3Vf,mBCqWE,6BAA8B,sBAGN,CDxW1B,+FCmXE,uBAAyB,CDnX3B,SC2XE,wBAA0B,aACZ,0BACiB,CD7XjC,OCsYE,SAAU,SACC,CDvYb,SC+YE,aAAe,CD/YjB,SCwZE,eAAkB,CDxZpB,MCmaE,yBAA0B,gBACR,CDpapB,MCyaE,SAAW,CDzab,KAOI,qBAAuB,CAP3B,UAYI,SAAU,UACC,YACE,gBACI,WACL,6BACsB,CAjBtC,iBAuBI,kBAAoB,CAvBxB,gBA2BI,WAAa,CACd","file":"core.scss","sourcesContent":[":global {\n  @import 'base';\n  @import 'vendor/normalize';\n\n  // Some best-practice CSS that's useful for most apps\n  // Just remove them if they're not what you want\n  html {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background: #222;\n    color: #eee;\n    font-family: 'Oswald', sans-serif;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  .page-container {\n    height: 100%;\n  }\n}\n","/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 224 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProjectBuilds = undefined;
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(241);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(289);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(295);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(2);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(296);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _class, _temp;
	
	var _reactRedux = __webpack_require__(339);
	
	var _ProjectBuild = __webpack_require__(356);
	
	var _ProjectBuild2 = _interopRequireDefault(_ProjectBuild);
	
	var _ProjectBuilds = __webpack_require__(361);
	
	var _ProjectBuilds2 = _interopRequireDefault(_ProjectBuilds);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  ProjectBuilds: {
	    displayName: 'ProjectBuilds'
	  }
	};
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/ProjectBuilds/ProjectBuilds.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/ProjectBuilds/ProjectBuilds.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2(_UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var ProjectBuilds = exports.ProjectBuilds = _wrapComponent('ProjectBuilds')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(ProjectBuilds, _React$Component);
	
	  function ProjectBuilds() {
	    (0, _classCallCheck3.default)(this, ProjectBuilds);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProjectBuilds).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ProjectBuilds, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: _ProjectBuilds2.default['ProjectBuilds'] },
	        this.props.builds.map(function (build) {
	          return _react3.default.createElement(_ProjectBuild2.default, {
	            key: build.build_num,
	            outcome: build.outcome,
	            branch: build.branch,
	            author: build.committer_name,
	            coauthor: build.author_name
	          });
	        })
	      );
	    }
	  }]);
	  return ProjectBuilds;
	}(_react3.default.Component), _class.propTypes = {
	  builds: _react2.PropTypes.array
	}, _temp));
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return state;
	}, {})(ProjectBuilds);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module)))

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230);
	module.exports = __webpack_require__(236).Object.getPrototypeOf;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(231);
	
	__webpack_require__(233)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(232);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(234)
	  , core    = __webpack_require__(236)
	  , fails   = __webpack_require__(239);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(235)
	  , core      = __webpack_require__(236)
	  , ctx       = __webpack_require__(237)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 235 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 236 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(238);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(242);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(244);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 244 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(246);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(247);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(272);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(248), __esModule: true };

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(249);
	__webpack_require__(265);
	module.exports = __webpack_require__(262)('iterator');

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(250)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(252)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(251)
	  , defined   = __webpack_require__(232);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(253)
	  , $export        = __webpack_require__(234)
	  , redefine       = __webpack_require__(254)
	  , hide           = __webpack_require__(255)
	  , has            = __webpack_require__(258)
	  , Iterators      = __webpack_require__(259)
	  , $iterCreate    = __webpack_require__(260)
	  , setToStringTag = __webpack_require__(261)
	  , getProto       = __webpack_require__(244).getProto
	  , ITERATOR       = __webpack_require__(262)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255);

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(244)
	  , createDesc = __webpack_require__(256);
	module.exports = __webpack_require__(257) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(239)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 258 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(244)
	  , descriptor     = __webpack_require__(256)
	  , setToStringTag = __webpack_require__(261)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(255)(IteratorPrototype, __webpack_require__(262)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(244).setDesc
	  , has = __webpack_require__(258)
	  , TAG = __webpack_require__(262)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(263)('wks')
	  , uid    = __webpack_require__(264)
	  , Symbol = __webpack_require__(235).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(235)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(266);
	var Iterators = __webpack_require__(259);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(267)
	  , step             = __webpack_require__(268)
	  , Iterators        = __webpack_require__(259)
	  , toIObject        = __webpack_require__(269);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(252)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(270)
	  , defined = __webpack_require__(232);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(271);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(273), __esModule: true };

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(274);
	__webpack_require__(281);
	module.exports = __webpack_require__(236).Symbol;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(244)
	  , global         = __webpack_require__(235)
	  , has            = __webpack_require__(258)
	  , DESCRIPTORS    = __webpack_require__(257)
	  , $export        = __webpack_require__(234)
	  , redefine       = __webpack_require__(254)
	  , $fails         = __webpack_require__(239)
	  , shared         = __webpack_require__(263)
	  , setToStringTag = __webpack_require__(261)
	  , uid            = __webpack_require__(264)
	  , wks            = __webpack_require__(262)
	  , keyOf          = __webpack_require__(275)
	  , $names         = __webpack_require__(276)
	  , enumKeys       = __webpack_require__(277)
	  , isArray        = __webpack_require__(278)
	  , anObject       = __webpack_require__(279)
	  , toIObject      = __webpack_require__(269)
	  , createDesc     = __webpack_require__(256)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(253)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(244)
	  , toIObject = __webpack_require__(269);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(269)
	  , getNames  = __webpack_require__(244).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(244);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(271);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(280);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 281 */
/***/ function(module, exports) {



/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(283);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(287);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(246);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	module.exports = __webpack_require__(236).Object.setPrototypeOf;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(234);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(286).set});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(244).getDesc
	  , isObject = __webpack_require__(280)
	  , anObject = __webpack_require__(279);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(237)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(288), __esModule: true };

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(244);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(290);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(291);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(293);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _lib = __webpack_require__(294);
	
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var React = _react2['default'];
	var Component = _react.Component;
	var PropTypes = _react.PropTypes;
	
	__$Getters__['React'] = function () {
	  return React;
	};
	
	__$Setters__['React'] = function (value) {
	  React = value;
	};
	
	__$Resetters__['React'] = function () {
	  React = _react2['default'];
	};
	
	__$Getters__['Component'] = function () {
	  return Component;
	};
	
	__$Setters__['Component'] = function (value) {
	  Component = value;
	};
	
	__$Resetters__['Component'] = function () {
	  Component = _react.Component;
	};
	
	__$Getters__['PropTypes'] = function () {
	  return PropTypes;
	};
	
	__$Setters__['PropTypes'] = function (value) {
	  PropTypes = value;
	};
	
	__$Resetters__['PropTypes'] = function () {
	  PropTypes = _react.PropTypes;
	};
	
	var style = _styleJs2['default'];
	
	__$Getters__['style'] = function () {
	  return style;
	};
	
	__$Setters__['style'] = function (value) {
	  style = value;
	};
	
	__$Resetters__['style'] = function () {
	  style = _styleJs2['default'];
	};
	
	var ErrorStackParser = _errorStackParser2['default'];
	
	__$Getters__['ErrorStackParser'] = function () {
	  return ErrorStackParser;
	};
	
	__$Setters__['ErrorStackParser'] = function (value) {
	  ErrorStackParser = value;
	};
	
	__$Resetters__['ErrorStackParser'] = function () {
	  ErrorStackParser = _errorStackParser2['default'];
	};
	
	var assign = _objectAssign2['default'];
	
	__$Getters__['assign'] = function () {
	  return assign;
	};
	
	__$Setters__['assign'] = function (value) {
	  assign = value;
	};
	
	__$Resetters__['assign'] = function () {
	  assign = _objectAssign2['default'];
	};
	
	var isFilenameAbsolute = _lib.isFilenameAbsolute;
	var makeUrl = _lib.makeUrl;
	var makeLinkText = _lib.makeLinkText;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  isFilenameAbsolute = _lib.isFilenameAbsolute;
	};
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  makeUrl = _lib.makeUrl;
	};
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  makeLinkText = _lib.makeLinkText;
	};
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var _props = this.props;
	    var error = _props.error;
	    var filename = _props.filename;
	    var editorScheme = _props.editorScheme;
	    var useLines = _props.useLines;
	    var useColumns = _props.useColumns;
	
	    var _assign = assign({}, style, this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = ErrorStackParser.parse(error).map(function (f, index) {
	      var text = undefined;
	      var url = undefined;
	
	      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
	        url = makeUrl(filename, editorScheme);
	        text = makeLinkText(filename);
	      } else {
	        var lines = useLines ? f.lineNumber : null;
	        var columns = useColumns ? f.columnNumber : null;
	        url = makeUrl(f.fileName, editorScheme, lines, columns);
	        text = makeLinkText(f.fileName, lines, columns);
	      }
	
	      return React.createElement(
	        'div',
	        { style: frame, key: index },
	        React.createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        React.createElement(
	          'div',
	          { style: file },
	          React.createElement(
	            'a',
	            { href: url, style: linkToFile },
	            text
	          )
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { style: redbox },
	      React.createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      React.createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: PropTypes.instanceOf(Error).isRequired,
	      filename: PropTypes.string,
	      editorScheme: PropTypes.string,
	      useLines: PropTypes.bool,
	      useColumns: PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      useLines: true,
	      useColumns: true
	    },
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(Component);
	
	var _defaultExport = RedBox;
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var _defaultExport = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(292)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
	
	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }
	
	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = locationParts[0] === 'eval' ? undefined : locationParts[0];
	
	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }
	
	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.shift() || undefined;
	                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	                }
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this);
	
	            return _map(filtered, function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },
/* 293 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var filenameWithoutLoaders = function filenameWithoutLoaders() {
	  var filename = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	  var index = filename.lastIndexOf('!');
	
	  return index < 0 ? filename : filename.substr(index + 1);
	};
	
	var _filenameWithoutLoaders = filenameWithoutLoaders;
	
	__$Getters__['filenameWithoutLoaders'] = function () {
	  return filenameWithoutLoaders;
	};
	
	__$Setters__['filenameWithoutLoaders'] = function (value) {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
	};
	
	__$Resetters__['filenameWithoutLoaders'] = function () {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
	};
	
	exports.filenameWithoutLoaders = _filenameWithoutLoaders;
	var filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  return actualFilename !== filename;
	};
	
	var _filenameHasLoaders = filenameHasLoaders;
	
	__$Getters__['filenameHasLoaders'] = function () {
	  return filenameHasLoaders;
	};
	
	__$Setters__['filenameHasLoaders'] = function (value) {
	  exports.filenameHasLoaders = filenameHasLoaders = value;
	};
	
	__$Resetters__['filenameHasLoaders'] = function () {
	  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
	};
	
	exports.filenameHasLoaders = _filenameHasLoaders;
	var filenameHasSchema = function filenameHasSchema(filename) {
	  return (/^[\w]+\:/.test(filename)
	  );
	};
	
	var _filenameHasSchema = filenameHasSchema;
	
	__$Getters__['filenameHasSchema'] = function () {
	  return filenameHasSchema;
	};
	
	__$Setters__['filenameHasSchema'] = function (value) {
	  exports.filenameHasSchema = filenameHasSchema = value;
	};
	
	__$Resetters__['filenameHasSchema'] = function () {
	  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
	};
	
	exports.filenameHasSchema = _filenameHasSchema;
	var isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }
	
	  return false;
	};
	
	var _isFilenameAbsolute = isFilenameAbsolute;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  exports.isFilenameAbsolute = isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
	};
	
	exports.isFilenameAbsolute = _isFilenameAbsolute;
	var makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (filenameHasSchema(filename)) {
	    return actualFilename;
	  }
	
	  var url = 'file://' + actualFilename;
	
	  if (scheme) {
	    url = scheme + '://open?url=' + url;
	
	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;
	
	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }
	
	  return url;
	};
	
	var _makeUrl = makeUrl;
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  exports.makeUrl = makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  exports.makeUrl = makeUrl = _makeUrl;
	};
	
	exports.makeUrl = _makeUrl;
	var makeLinkText = function makeLinkText(filename, line, column) {
	  var text = filenameWithoutLoaders(filename);
	
	  if (line && text === filename) {
	    text = text + ':' + line;
	
	    if (column) {
	      text = text + ':' + column;
	    }
	  }
	
	  return text;
	};
	var _makeLinkText = makeLinkText;
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  exports.makeLinkText = makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  exports.makeLinkText = makeLinkText = _makeLinkText;
	};
	
	exports.makeLinkText = _makeLinkText;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	exports['default'] = __RewireAPI__;

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = catchErrors;
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 3);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	  var reporterOptions = _imports[2];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        setTimeout(function () {
	          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
	            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
	            // We're in React Native. Don't throw.
	            // Stop react-native from triggering its own error handler
	            console.reportErrorsAsExceptions = false;
	            // Log an error
	            console.error(err);
	            // Reactivate it so other errors are still handled
	            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
	          } else {
	            throw err;
	          }
	        });
	
	        return React.createElement(ErrorReporter, _extends({
	          error: err,
	          filename: filename
	        }, reporterOptions));
	      }
	    };
	
	    return ReactClass;
	  };
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = proxyReactComponents;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactProxy = __webpack_require__(297);
	
	var _globalWindow = __webpack_require__(338);
	
	var _globalWindow2 = _interopRequireDefault(_globalWindow);
	
	var componentProxies = undefined;
	if (_globalWindow2['default'].__reactComponentProxies) {
	  componentProxies = _globalWindow2['default'].__reactComponentProxies;
	} else {
	  componentProxies = {};
	  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
	    configurable: true,
	    enumerable: false,
	    writable: false,
	    value: componentProxies
	  });
	}
	
	function proxyReactComponents(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	  var locals = _ref.locals;
	
	  var _imports = _slicedToArray(imports, 1);
	
	  var React = _imports[0];
	
	  var _locals = _slicedToArray(locals, 1);
	
	  var hot = _locals[0].hot;
	
	  if (!React.Component) {
	    throw new Error('imports[0] for react-transform-hmr does not look like React.');
	  }
	
	  if (!hot || typeof hot.accept !== 'function') {
	    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
	  }
	
	  if (Object.keys(components).some(function (key) {
	    return !components[key].isInFunction;
	  })) {
	    hot.accept(function (err) {
	      if (err) {
	        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
	        console.error(err);
	      }
	    });
	  }
	
	  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);
	
	  return function wrapWithProxy(ReactClass, uniqueId) {
	    var _components$uniqueId = components[uniqueId];
	    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
	    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
	    var _components$uniqueId$displayName = _components$uniqueId.displayName;
	    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;
	
	    if (isInFunction) {
	      return ReactClass;
	    }
	
	    var globalUniqueId = filename + '$' + uniqueId;
	    if (componentProxies[globalUniqueId]) {
	      (function () {
	        console.info('[React Transform HMR] Patching ' + displayName);
	        var instances = componentProxies[globalUniqueId].update(ReactClass);
	        setTimeout(function () {
	          return instances.forEach(forceUpdate);
	        });
	      })();
	    } else {
	      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
	    }
	
	    return componentProxies[globalUniqueId].get();
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getForceUpdate = exports.createProxy = undefined;
	
	var _supportsProtoAssignment = __webpack_require__(298);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	var _createClassProxy = __webpack_require__(299);
	
	var _createClassProxy2 = _interopRequireDefault(_createClassProxy);
	
	var _reactDeepForceUpdate = __webpack_require__(337);
	
	var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!(0, _supportsProtoAssignment2.default)()) {
	  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
	}
	
	exports.createProxy = _createClassProxy2.default;
	exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ },
/* 298 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportsProtoAssignment;
	var x = {};
	var y = { supports: true };
	try {
	  x.__proto__ = y;
	} catch (err) {}
	
	function supportsProtoAssignment() {
	  return x.supports || false;
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = proxyClass;
	exports.default = createClassProxy;
	
	var _createPrototypeProxy = __webpack_require__(300);
	
	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);
	
	var _bindAutoBindMethods = __webpack_require__(335);
	
	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);
	
	var _deleteUnknownAutoBindMethods = __webpack_require__(336);
	
	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);
	
	var _supportsProtoAssignment = __webpack_require__(298);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];
	
	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function proxyClass(InitialClass) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  if (Object.prototype.hasOwnProperty.call(InitialClass, '__reactPatchProxy')) {
	    return InitialClass.__reactPatchProxy;
	  }
	
	  var prototypeProxy = (0, _createPrototypeProxy2.default)();
	  var CurrentClass = undefined;
	
	  var staticDescriptors = {};
	  function wasStaticModifiedByUser(key) {
	    // Compare the descriptor with the one we previously set ourselves.
	    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
	  }
	
	  var ProxyClass = undefined;
	  try {
	    // Create a proxy constructor with matching name
	    ProxyClass = new Function('getCurrentClass', 'return function ' + (InitialClass.name || 'ProxyClass') + '() {\n        return getCurrentClass().apply(this, arguments);\n      }')(function () {
	      return CurrentClass;
	    });
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyClass = function () {
	      return CurrentClass.apply(this, arguments);
	    };
	  }
	
	  // Point proxy constructor to the proxy prototype
	  ProxyClass.prototype = prototypeProxy.get();
	
	  // Proxy toString() to the current constructor
	  ProxyClass.toString = function toString() {
	    return CurrentClass.toString();
	  };
	
	  function update(NextClass) {
	    if (typeof NextClass !== 'function') {
	      throw new Error('Expected a constructor.');
	    }
	
	    // Prevent proxy cycles
	    if (Object.prototype.hasOwnProperty.call(NextClass, '__reactPatchProxy')) {
	      return update(NextClass.__reactPatchProxy.__getCurrent());
	    }
	
	    // Save the next constructor so we call it
	    CurrentClass = NextClass;
	
	    // Update the prototype proxy with new methods
	    var mountedInstances = prototypeProxy.update(NextClass.prototype);
	
	    // Set up the constructor property so accessing the statics work
	    ProxyClass.prototype.constructor = ProxyClass;
	
	    // Set up the same prototype for inherited statics
	    ProxyClass.__proto__ = NextClass.__proto__;
	
	    // Copy static methods and properties
	    Object.getOwnPropertyNames(NextClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextClass, key), {
	        configurable: true
	      });
	
	      // Copy static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        Object.defineProperty(ProxyClass, key, staticDescriptor);
	        staticDescriptors[key] = staticDescriptor;
	      }
	    });
	
	    // Remove old static methods and properties
	    Object.getOwnPropertyNames(ProxyClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      // Skip statics that exist on the next class
	      if (NextClass.hasOwnProperty(key)) {
	        return;
	      }
	
	      // Skip non-configurable statics
	      var descriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	      if (descriptor && !descriptor.configurable) {
	        return;
	      }
	
	      // Delete static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        delete ProxyClass[key];
	        delete staticDescriptors[key];
	      }
	    });
	
	    // Try to infer displayName
	    ProxyClass.displayName = NextClass.displayName || NextClass.name;
	
	    // We might have added new methods that need to be auto-bound
	    mountedInstances.forEach(_bindAutoBindMethods2.default);
	    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
	
	    // Let the user take care of redrawing
	    return mountedInstances;
	  };
	
	  function get() {
	    return ProxyClass;
	  }
	
	  function getCurrent() {
	    return CurrentClass;
	  }
	
	  update(InitialClass);
	
	  var proxy = { get: get, update: update };
	
	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });
	
	  Object.defineProperty(ProxyClass, '__reactPatchProxy', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxy
	  });
	
	  return proxy;
	}
	
	function createFallback(Component) {
	  var CurrentComponent = Component;
	
	  return {
	    get: function get() {
	      return CurrentComponent;
	    },
	    update: function update(NextComponent) {
	      CurrentComponent = NextComponent;
	    }
	  };
	}
	
	function createClassProxy(Component) {
	  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrototypeProxy;
	
	var _assign = __webpack_require__(301);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _difference = __webpack_require__(325);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];
	
	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }
	
	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };
	
	    // Copy properties of the original function, if any
	    (0, _assign2.default)(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);
	
	    return proxiedMethod;
	  }
	
	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');
	
	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');
	
	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }
	
	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};
	
	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;
	
	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }
	
	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }
	
	    var __reactAutoBindMap = {};
	    for (var name in current.__reactAutoBindMap) {
	      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
	        __reactAutoBindMap[name] = proxy[name];
	      }
	    }
	
	    return __reactAutoBindMap;
	  }
	
	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;
	
	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var removedNames = (0, _difference2.default)(previousName, currentNames);
	
	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });
	
	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });
	
	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
	    defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
	
	    // Set up the prototype chain
	    proxy.__proto__ = next;
	
	    return mountedInstances;
	  }
	
	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }
	
	  return {
	    update: update,
	    get: get
	  };
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(302),
	    baseAssign = __webpack_require__(318),
	    createAssigner = __webpack_require__(320);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(303);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(304),
	    isArrayLike = __webpack_require__(309),
	    isObject = __webpack_require__(307),
	    shimKeys = __webpack_require__(313);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(305);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(306),
	    isObjectLike = __webpack_require__(308);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(307);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 307 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 308 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(310),
	    isLength = __webpack_require__(312);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(311);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 311 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 312 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(314),
	    isArray = __webpack_require__(315),
	    isIndex = __webpack_require__(316),
	    isLength = __webpack_require__(312),
	    keysIn = __webpack_require__(317);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(309),
	    isObjectLike = __webpack_require__(308);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(304),
	    isLength = __webpack_require__(312),
	    isObjectLike = __webpack_require__(308);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 316 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(314),
	    isArray = __webpack_require__(315),
	    isIndex = __webpack_require__(316),
	    isLength = __webpack_require__(312),
	    isObject = __webpack_require__(307);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(319),
	    keys = __webpack_require__(303);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 319 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(321),
	    isIterateeCall = __webpack_require__(323),
	    restParam = __webpack_require__(324);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(322);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 322 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(309),
	    isIndex = __webpack_require__(316),
	    isObject = __webpack_require__(307);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 324 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(326),
	    baseFlatten = __webpack_require__(333),
	    isArrayLike = __webpack_require__(309),
	    isObjectLike = __webpack_require__(308),
	    restParam = __webpack_require__(324);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(327),
	    cacheIndexOf = __webpack_require__(329),
	    createCache = __webpack_require__(330);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(328);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 328 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(307);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(331),
	    getNative = __webpack_require__(304);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(332),
	    getNative = __webpack_require__(304);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(307);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(334),
	    isArguments = __webpack_require__(314),
	    isArray = __webpack_require__(315),
	    isArrayLike = __webpack_require__(309),
	    isObjectLike = __webpack_require__(308);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 334 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 335 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bindAutoBindMethods;
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */
	
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	
	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;
	
	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;
	
	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }
	
	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;
	
	    return reboundMethod;
	  };
	
	  return boundMethod;
	}
	
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }
	
	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }
	
	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },
/* 336 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }
	
	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }
	
	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}
	
	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;
	
	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);
	
	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }
	
	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }
	
	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}
	
	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }
	
	  if (component.__reactAutoBindMap) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}
	
	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);
	
	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}

/***/ },
/* 337 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    React.Component.prototype.forceUpdate.call(publicInstance);
	  }
	}
	
	function getForceUpdate(React) {
	  return function (instance) {
	    var internalInstance = instance._reactInternalInstance;
	    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 338 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProjectBuild = undefined;
	
	var _defineProperty2 = __webpack_require__(357);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(241);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(289);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(295);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(2);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(296);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _class, _temp;
	
	var _reactRedux = __webpack_require__(339);
	
	var _classnames = __webpack_require__(358);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ProjectBuild = __webpack_require__(359);
	
	var _ProjectBuild2 = _interopRequireDefault(_ProjectBuild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  ProjectBuild: {
	    displayName: 'ProjectBuild'
	  }
	};
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/ProjectBuild/ProjectBuild.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/ProjectBuild/ProjectBuild.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2(_UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var ProjectBuild = exports.ProjectBuild = _wrapComponent('ProjectBuild')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(ProjectBuild, _React$Component);
	
	  function ProjectBuild() {
	    (0, _classCallCheck3.default)(this, ProjectBuild);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProjectBuild).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ProjectBuild, [{
	    key: 'render',
	    value: function render() {
	      var _projectBuildClasses;
	
	      var projectBuildClasses = (_projectBuildClasses = {}, (0, _defineProperty3.default)(_projectBuildClasses, _ProjectBuild2.default['ProjectBuild'], true), (0, _defineProperty3.default)(_projectBuildClasses, _ProjectBuild2.default['ProjectBuild--success'], this.props.outcome === 'success'), _projectBuildClasses);
	
	      return _react3.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(projectBuildClasses) },
	        _react3.default.createElement(
	          'div',
	          { className: _ProjectBuild2.default['ProjectBuild__branch'] },
	          this.props.branch
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: _ProjectBuild2.default['ProjectBuild__author'] },
	          this.authorString_(this.props.author, this.props.coauthor)
	        )
	      );
	    }
	  }, {
	    key: 'authorString_',
	    value: function authorString_(author, coauthor) {
	      if (author === coauthor) {
	        return author;
	      } else {
	        return author + ' and ' + coauthor;
	      }
	    }
	  }]);
	  return ProjectBuild;
	}(_react3.default.Component), _class.propTypes = {
	  outcome: _react3.default.PropTypes.string,
	  branch: _react3.default.PropTypes.string,
	  author: _react3.default.PropTypes.string,
	  coauthor: _react3.default.PropTypes.string
	}, _temp));
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return state;
	}, {})(ProjectBuild);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module)))

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(242);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(360);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(225)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(360, function() {
				var newContent = __webpack_require__(360);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(224)();
	// imports
	
	
	// module
	exports.push([module.id, ".ProjectBuild__ProjectBuild___1INCL{background:#ff6138;padding:1rem;margin-bottom:1rem;width:100%}.ProjectBuild__ProjectBuild--success___1VPJb{background:#00a388}.ProjectBuild__ProjectBuild__branch___3Kmi0{font-size:3rem}.ProjectBuild__ProjectBuild__author___1sKGf{font-size:2rem}", "", {"version":3,"sources":["/./src/views/ProjectBuild/ProjectBuild.css"],"names":[],"mappings":"AAAA,oCACE,mBAAoB,aACN,mBACM,UACR,CACb,6CAGC,kBAAoB,CACrB,4CAGC,cAAgB,CACjB,4CAGC,cAAgB,CACjB","file":"ProjectBuild.css","sourcesContent":[".ProjectBuild {\n  background: #FF6138;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.ProjectBuild--success {\n  background: #00A388;\n}\n\n.ProjectBuild__branch {\n  font-size: 3rem;\n}\n\n.ProjectBuild__author {\n  font-size: 2rem;\n}\n\n.ProjectBuild__stoptime {\n\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"ProjectBuild": "ProjectBuild__ProjectBuild___1INCL",
		"ProjectBuild--success": "ProjectBuild__ProjectBuild--success___1VPJb",
		"ProjectBuild__branch": "ProjectBuild__ProjectBuild__branch___3Kmi0",
		"ProjectBuild__author": "ProjectBuild__ProjectBuild__author___1sKGf"
	};

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(362);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(225)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(362, function() {
				var newContent = __webpack_require__(362);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(224)();
	// imports
	
	
	// module
	exports.push([module.id, ".ProjectBuilds__ProjectBuilds___ldpPW{margin:1rem}", "", {"version":3,"sources":["/./src/views/ProjectBuilds/ProjectBuilds.css"],"names":[],"mappings":"AAAA,sCACE,WAAa,CACd","file":"ProjectBuilds.css","sourcesContent":[".ProjectBuilds {\n  margin: 1rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"ProjectBuilds": "ProjectBuilds__ProjectBuilds___ldpPW"
	};

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotFoundView = undefined;
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(241);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(289);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(295);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(2);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(296);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactRouter = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  NotFoundView: {
	    displayName: 'NotFoundView'
	  }
	};
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/NotFoundView/NotFoundView.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/views/NotFoundView/NotFoundView.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2(_UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var NotFoundView = exports.NotFoundView = _wrapComponent('NotFoundView')(function (_React$Component) {
	  (0, _inherits3.default)(NotFoundView, _React$Component);
	
	  function NotFoundView() {
	    (0, _classCallCheck3.default)(this, NotFoundView);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NotFoundView).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(NotFoundView, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'container text-center' },
	        _react3.default.createElement(
	          'h1',
	          null,
	          'This is a demo 404 page!'
	        ),
	        _react3.default.createElement('hr', null),
	        _react3.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          'Back To Home View'
	        )
	      );
	    }
	  }]);
	  return NotFoundView;
	}(_react3.default.Component));
	
	exports.default = NotFoundView;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module)))

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(241);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(289);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(295);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(2);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(296);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _class, _temp;
	
	var _reactRedux = __webpack_require__(339);
	
	var _reactRouter = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Root: {
	    displayName: 'Root'
	  }
	};
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/containers/Root.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/pivotal/Desktop/buildmaster/src/containers/Root.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersPivotalDesktopBuildmasterNode_modulesReactTransformHmrLibIndexJs2(_UsersPivotalDesktopBuildmasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Root = _wrapComponent('Root')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Root, _React$Component);
	
	  function Root() {
	    (0, _classCallCheck3.default)(this, Root);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Root).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: this.props.store },
	        _react3.default.createElement(
	          'div',
	          { style: { height: '100%' } },
	          this.content
	        )
	      );
	    }
	  }, {
	    key: 'content',
	    get: function get() {
	      return _react3.default.createElement(
	        _reactRouter.Router,
	        { history: this.props.history },
	        this.props.routes
	      );
	    }
	  }, {
	    key: 'devTools',
	    get: function get() {
	      if (true) {
	        if (false) {
	          if (!window.devToolsExtension) {
	            require('../redux/utils/createDevToolsWindow').default(this.props.store);
	          } else {
	            window.devToolsExtension.open();
	          }
	        } else if (!window.devToolsExtension) {
	          var DevTools = __webpack_require__(365).default;
	          return _react3.default.createElement(DevTools, null);
	        }
	      }
	    }
	  }]);
	  return Root;
	}(_react3.default.Component), _class.propTypes = {
	  history: _react2.PropTypes.object.isRequired,
	  routes: _react2.PropTypes.element.isRequired,
	  store: _react2.PropTypes.object.isRequired
	}, _temp));

	exports.default = Root;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module)))

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(366);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(476);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(561);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  {
	    toggleVisibilityKey: 'ctrl-h',
	    changePositionKey: 'ctrl-q' },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _instrument = __webpack_require__(367);
	
	Object.defineProperty(exports, 'instrument', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.default;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionCreators;
	  }
	});
	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionTypes;
	  }
	});
	
	var _persistState = __webpack_require__(418);
	
	Object.defineProperty(exports, 'persistState', {
	  enumerable: true,
	  get: function get() {
	    return _persistState.default;
	  }
	});
	
	var _createDevTools = __webpack_require__(475);
	
	Object.defineProperty(exports, 'createDevTools', {
	  enumerable: true,
	  get: function get() {
	    return _createDevTools.default;
	  }
	});

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports.ActionCreators = exports.ActionTypes = undefined;
	exports.default = instrument;
	
	var _difference = __webpack_require__(368);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  IMPORT_STATE: 'IMPORT_STATE'
	};
	
	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  importState: function importState(nextLiftedState) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	  }
	};
	
	var INIT_ACTION = { type: '@@INIT' };
	
	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }
	
	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.chrome !== 'undefined') {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err);
	    }
	  }
	
	  return {
	    state: nextState,
	    error: nextError
	  };
	}
	
	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }
	
	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;
	
	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;
	
	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);
	
	    nextComputedStates.push(entry);
	  }
	
	  return nextComputedStates;
	}
	
	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}
	
	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: []
	  };
	
	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function () {
	    var liftedState = arguments.length <= 0 || arguments[0] === undefined ? initialLiftedState : arguments[0];
	    var liftedAction = arguments[1];
	    var monitorState = liftedState.monitorState;
	    var actionsById = liftedState.actionsById;
	    var nextActionId = liftedState.nextActionId;
	    var stagedActionIds = liftedState.stagedActionIds;
	    var skippedActionIds = liftedState.skippedActionIds;
	    var committedState = liftedState.committedState;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var computedStates = liftedState.computedStates;
	
	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.
	
	    var minInvalidatedStateIndex = 0;
	
	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;
	
	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          }();
	
	          if (_ret === 'break') break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.PERFORM_ACTION:
	        {
	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          var _liftedAction$nextLif = liftedAction.nextLiftedState;
	          // Completely replace everything.
	
	          monitorState = _liftedAction$nextLif.monitorState;
	          actionsById = _liftedAction$nextLif.actionsById;
	          nextActionId = _liftedAction$nextLif.nextActionId;
	          stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	          skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	          committedState = _liftedAction$nextLif.committedState;
	          currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	          computedStates = _liftedAction$nextLif.computedStates;
	
	          break;
	        }
	      case '@@redux/INIT':
	        {
	          // Always recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;
	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }
	
	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates
	    };
	  };
	}
	
	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;
	
	  return state;
	}
	
	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var lastDefinedState = undefined;
	
	  return _extends({}, liftedStore, {
	
	    liftedStore: liftedStore,
	
	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}
	
	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	
	      function liftReducer(r) {
	        if (typeof r !== 'function') {
	          if (r && typeof r.default === 'function') {
	            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
	          }
	          throw new Error('Expected the reducer to be a function.');
	        }
	        return liftReducerWith(r, initialState, monitorReducer);
	      }
	
	      var liftedStore = createStore(liftReducer(reducer), enhancer);
	      if (liftedStore.liftedStore) {
	        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
	      }
	
	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(369),
	    baseFlatten = __webpack_require__(405),
	    isArrayLikeObject = __webpack_require__(408),
	    rest = __webpack_require__(414);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([3, 2, 1], [4, 2]);
	 * // => [3, 1]
	 */
	var difference = rest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(370),
	    arrayIncludes = __webpack_require__(398),
	    arrayIncludesWith = __webpack_require__(401),
	    arrayMap = __webpack_require__(402),
	    baseUnary = __webpack_require__(403),
	    cacheHas = __webpack_require__(404);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of methods like `_.difference` without support for
	 * excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(371),
	    cachePush = __webpack_require__(397);
	
	/**
	 *
	 * Creates a set cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.push(values[index]);
	  }
	}
	
	// Add functions to the `SetCache`.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(372),
	    mapDelete = __webpack_require__(382),
	    mapGet = __webpack_require__(389),
	    mapHas = __webpack_require__(392),
	    mapSet = __webpack_require__(394);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add functions to the `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;
	
	module.exports = MapCache;


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(373),
	    Map = __webpack_require__(379);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}
	
	module.exports = mapClear;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(374);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Creates an hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}
	
	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
	
	module.exports = Hash;


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(375);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(376);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(377),
	    isHostObject = __webpack_require__(348),
	    isObjectLike = __webpack_require__(349);
	
	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(378);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 378 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(375),
	    root = __webpack_require__(380);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(381);
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module), (function() { return this; }())))

/***/ },
/* 381 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	module.exports = checkGlobal;


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(379),
	    assocDelete = __webpack_require__(383),
	    hashDelete = __webpack_require__(386),
	    isKeyable = __webpack_require__(388);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}
	
	module.exports = mapDelete;


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(384);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}
	
	module.exports = assocDelete;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(385);
	
	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 385 */
/***/ function(module, exports) {

	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(387);
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(374);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 388 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}
	
	module.exports = isKeyable;


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(379),
	    assocGet = __webpack_require__(390),
	    hashGet = __webpack_require__(391),
	    isKeyable = __webpack_require__(388);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}
	
	module.exports = mapGet;


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(384);
	
	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}
	
	module.exports = assocGet;


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(374);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(379),
	    assocHas = __webpack_require__(393),
	    hashHas = __webpack_require__(387),
	    isKeyable = __webpack_require__(388);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}
	
	module.exports = mapHas;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(384);
	
	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}
	
	module.exports = assocHas;


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(379),
	    assocSet = __webpack_require__(395),
	    hashSet = __webpack_require__(396),
	    isKeyable = __webpack_require__(388);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache object.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}
	
	module.exports = mapSet;


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(384);
	
	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}
	
	module.exports = assocSet;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(374);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}
	
	module.exports = hashSet;


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(388);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the set cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var map = this.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;
	
	    hash[value] = HASH_UNDEFINED;
	  }
	  else {
	    map.set(value, HASH_UNDEFINED);
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(399);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(400);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 400 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 401 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.includesWith` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 402 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 403 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(388);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Checks if `value` is in `cache`.
	 *
	 * @private
	 * @param {Object} cache The set cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function cacheHas(cache, value) {
	  var map = cache.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;
	
	    return hash[value] === HASH_UNDEFINED;
	  }
	  return map.has(value);
	}
	
	module.exports = cacheHas;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(406),
	    isArguments = __webpack_require__(407),
	    isArray = __webpack_require__(413),
	    isArrayLikeObject = __webpack_require__(408);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && isArrayLikeObject(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 406 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(408);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(409),
	    isObjectLike = __webpack_require__(349);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(410),
	    isFunction = __webpack_require__(377),
	    isLength = __webpack_require__(412);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(411);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 411 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 412 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 413 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(415),
	    toInteger = __webpack_require__(416);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = rest;


/***/ },
/* 415 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(417);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(377),
	    isObject = __webpack_require__(378);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = persistState;
	
	var _mapValues = __webpack_require__(419);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _identity = __webpack_require__(472);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function persistState(sessionId) {
	  var deserializeState = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var deserializeAction = arguments.length <= 2 || arguments[2] === undefined ? _identity2.default : arguments[2];
	
	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }
	
	  function deserialize(state) {
	    return _extends({}, state, {
	      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
	        return _extends({}, liftedAction, {
	          action: deserializeAction(liftedAction.action)
	        });
	      }),
	      committedState: deserializeState(state.committedState),
	      computedStates: state.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: deserializeState(computedState.state)
	        });
	      })
	    });
	  }
	
	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var key = 'redux-dev-session-' + sessionId;
	
	      var finalInitialState = undefined;
	      try {
	        var json = localStorage.getItem(key);
	        if (json) {
	          finalInitialState = deserialize(JSON.parse(json)) || initialState;
	          next(reducer, initialState);
	        }
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }
	
	      var store = next(reducer, finalInitialState, enhancer);
	
	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);
	
	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }
	
	          return action;
	        }
	      });
	    };
	  };
	}

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(420),
	    baseIteratee = __webpack_require__(431);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee is invoked with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    result[key] = iteratee(value, key, object);
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(421),
	    keys = __webpack_require__(423);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(422);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 422 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(424),
	    baseKeys = __webpack_require__(425),
	    indexKeys = __webpack_require__(426),
	    isArrayLike = __webpack_require__(409),
	    isIndex = __webpack_require__(429),
	    isPrototype = __webpack_require__(430);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 424 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}
	
	module.exports = baseHas;


/***/ },
/* 425 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	module.exports = baseKeys;


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(427),
	    isArguments = __webpack_require__(407),
	    isArray = __webpack_require__(413),
	    isLength = __webpack_require__(412),
	    isString = __webpack_require__(428);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;


/***/ },
/* 427 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(413),
	    isObjectLike = __webpack_require__(349);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 429 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(377);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(432),
	    baseMatchesProperty = __webpack_require__(458),
	    identity = __webpack_require__(472),
	    isArray = __webpack_require__(413),
	    property = __webpack_require__(473);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  var type = typeof value;
	  if (type == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(433),
	    getMatchData = __webpack_require__(454);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value &&
	        (value !== undefined || (key in Object(object)));
	    };
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(434),
	    baseIsEqual = __webpack_require__(440);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack,
	          result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;
	
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(435),
	    stackDelete = __webpack_require__(436),
	    stackGet = __webpack_require__(437),
	    stackHas = __webpack_require__(438),
	    stackSet = __webpack_require__(439);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add functions to the `Stack` cache.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 435 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}
	
	module.exports = stackClear;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(383);
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}
	
	module.exports = stackDelete;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(390);
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocGet(array, key) : data.map.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(393);
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocHas(array, key) : data.map.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(371),
	    assocSet = __webpack_require__(395);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache object.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;
	
	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(441),
	    isObject = __webpack_require__(378),
	    isObjectLike = __webpack_require__(349);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(434),
	    equalArrays = __webpack_require__(442),
	    equalByTag = __webpack_require__(444),
	    equalObjects = __webpack_require__(449),
	    getTag = __webpack_require__(450),
	    isArray = __webpack_require__(413),
	    isHostObject = __webpack_require__(348),
	    isTypedArray = __webpack_require__(453);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
	  }
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	  if (!isPartial) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(443);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 443 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(445),
	    Uint8Array = __webpack_require__(446),
	    mapToArray = __webpack_require__(447),
	    setToArray = __webpack_require__(448);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
	  switch (tag) {
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      // Recursively compare objects (susceptible to call stack limits).
	      return (isPartial || object.size == other.size) &&
	        equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);
	
	    case symbolTag:
	      return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(380);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(380);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 447 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 448 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(424),
	    keys = __webpack_require__(423);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(379),
	    Set = __webpack_require__(451),
	    WeakMap = __webpack_require__(452);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '',
	    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
	if ((Map && getTag(new Map) != mapTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case mapCtorString: return mapTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(375),
	    root = __webpack_require__(380);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(375),
	    root = __webpack_require__(380);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(412),
	    isObjectLike = __webpack_require__(349);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(455),
	    toPairs = __webpack_require__(456);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(378);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(457),
	    keys = __webpack_require__(423);
	
	/**
	 * Creates an array of own enumerable key-value pairs for `object` which
	 * can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}
	
	module.exports = toPairs;


/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(402);
	
	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}
	
	module.exports = baseToPairs;


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(440),
	    get = __webpack_require__(459),
	    hasIn = __webpack_require__(466);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(460);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(461),
	    isKey = __webpack_require__(465);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path + ''] : baseCastPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(413),
	    stringToPath = __webpack_require__(462);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function baseCastPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = baseCastPath;


/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(463);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	function stringToPath(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = stringToPath;


/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(445),
	    isSymbol = __webpack_require__(464);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = Symbol ? symbolProto.toString : undefined;
	
	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return Symbol ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toString;


/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(349);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(413);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (typeof value == 'number') {
	    return true;
	  }
	  return !isArray(value) &&
	    (reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}
	
	module.exports = isKey;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(467),
	    hasPath = __webpack_require__(468);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b.c');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b', 'c']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 467 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(461),
	    isArguments = __webpack_require__(407),
	    isArray = __webpack_require__(413),
	    isIndex = __webpack_require__(429),
	    isKey = __webpack_require__(465),
	    isLength = __webpack_require__(412),
	    isString = __webpack_require__(428),
	    last = __webpack_require__(469),
	    parent = __webpack_require__(470);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  if (object == null) {
	    return false;
	  }
	  var result = hasFunc(object, path);
	  if (!result && !isKey(path)) {
	    path = baseCastPath(path);
	    object = parent(object, path);
	    if (object != null) {
	      path = last(path);
	      result = hasFunc(object, path);
	    }
	  }
	  var length = object ? object.length : undefined;
	  return result || (
	    !!length && isLength(length) && isIndex(path, length) &&
	    (isArray(object) || isString(object) || isArguments(object))
	  );
	}
	
	module.exports = hasPath;


/***/ },
/* 469 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(471),
	    get = __webpack_require__(459);
	
	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
	}
	
	module.exports = parent;


/***/ },
/* 471 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 472 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(411),
	    basePropertyDeep = __webpack_require__(474),
	    isKey = __webpack_require__(465);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(460);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = createDevTools;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(339);
	
	var _instrument = __webpack_require__(367);
	
	var _instrument2 = _interopRequireDefault(_instrument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function createDevTools(children) {
	  var _class, _temp;
	
	  var monitorElement = _react.Children.only(children);
	  var monitorProps = monitorElement.props;
	  var Monitor = monitorElement.type;
	  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
	    return state;
	  })(Monitor);
	  var enhancer = (0, _instrument2.default)(function (state, action) {
	    return Monitor.update(monitorProps, state, action);
	  });
	
	  return _temp = _class = function (_Component) {
	    _inherits(DevTools, _Component);
	
	    function DevTools(props, context) {
	      _classCallCheck(this, DevTools);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      if (!props.store && !context.store) {
	        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
	        return _possibleConstructorReturn(_this);
	      }
	
	      if (context.store) {
	        _this.liftedStore = context.store.liftedStore;
	      } else {
	        _this.liftedStore = props.store.liftedStore;
	      }
	
	      if (!_this.liftedStore) {
	        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
	      }
	      return _this;
	    }
	
	    DevTools.prototype.render = function render() {
	      if (!this.liftedStore) {
	        return null;
	      }
	
	      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
	        store: this.liftedStore }));
	    };
	
	    return DevTools;
	  }(_react.Component), _class.contextTypes = {
	    store: _react.PropTypes.object
	  }, _class.propTypes = {
	    store: _react.PropTypes.object
	  }, _class.instrument = function () {
	    return enhancer;
	  }, _temp;
	}

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _LogMonitor = __webpack_require__(477);
	
	var _LogMonitor2 = _interopRequireDefault(_LogMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _LogMonitor2.default;

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LogMonitorEntry = __webpack_require__(478);
	
	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);
	
	var _LogMonitorButton = __webpack_require__(517);
	
	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);
	
	var _function = __webpack_require__(515);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _reduxDevtoolsThemes = __webpack_require__(519);
	
	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);
	
	var _reduxDevtools = __webpack_require__(366);
	
	var _actions = __webpack_require__(559);
	
	var _reducers = __webpack_require__(560);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reset = _reduxDevtools.ActionCreators.reset;
	var rollback = _reduxDevtools.ActionCreators.rollback;
	var commit = _reduxDevtools.ActionCreators.commit;
	var sweep = _reduxDevtools.ActionCreators.sweep;
	var toggleAction = _reduxDevtools.ActionCreators.toggleAction;
	
	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300,
	    direction: 'ltr'
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};
	
	var LogMonitor = (function (_Component) {
	  _inherits(LogMonitor, _Component);
	
	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
	    _this.handleReset = _this.handleReset.bind(_this);
	    _this.handleRollback = _this.handleRollback.bind(_this);
	    _this.handleSweep = _this.handleSweep.bind(_this);
	    _this.handleCommit = _this.handleCommit.bind(_this);
	    return _this;
	  }
	
	  LogMonitor.prototype.scroll = function scroll() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidMount = function componentDidMount() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	
	    if (this.props.preserveScrollTop) {
	      node.scrollTop = this.props.monitorState.initialScrollTop;
	      this.interval = setInterval(this.updateScrollTop.bind(this), 1000);
	    } else {
	      this.scrollDown = true;
	      this.scroll();
	    }
	  };
	
	  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.interval) {
	      clearInterval(this.interval);
	    }
	  };
	
	  LogMonitor.prototype.updateScrollTop = function updateScrollTop() {
	    var node = this.refs.container;
	    this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
	  };
	
	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = this.refs.container;
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.scroll();
	  };
	
	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.dispatch(rollback());
	  };
	
	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.dispatch(sweep());
	  };
	
	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.dispatch(commit());
	  };
	
	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
	    this.props.dispatch(toggleAction(id));
	  };
	
	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.dispatch(reset());
	  };
	
	  LogMonitor.prototype.getTheme = function getTheme() {
	    var theme = this.props.theme;
	
	    if (typeof theme !== 'string') {
	      return theme;
	    }
	
	    if (typeof themes[theme] !== 'undefined') {
	      return themes[theme];
	    }
	
	    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
	    return themes.nicinabox;
	  };
	
	  LogMonitor.prototype.render = function render() {
	    var elements = [];
	    var theme = this.getTheme();
	    var _props = this.props;
	    var actionsById = _props.actionsById;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var computedStates = _props.computedStates;
	    var select = _props.select;
	
	    for (var i = 0; i < stagedActionIds.length; i++) {
	      var actionId = stagedActionIds[i];
	      var action = actionsById[actionId].action;
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;
	
	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
	        theme: theme,
	        select: select,
	        action: action,
	        actionId: actionId,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActionIds.indexOf(actionId) > -1,
	        error: error,
	        expandActionRoot: this.props.expandActionRoot,
	        expandStateRoot: this.props.expandStateRoot,
	        onActionClick: this.handleToggleAction }));
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2.default.createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleReset,
	            enabled: true },
	          'Reset'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleRollback,
	            enabled: computedStates.length > 1 },
	          'Revert'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleSweep,
	            enabled: skippedActionIds.length > 0 },
	          'Sweep'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleCommit,
	            enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.elements, ref: 'container' },
	        elements
	      )
	    );
	  };
	
	  return LogMonitor;
	})(_react.Component);
	
	LogMonitor.update = _reducers2.default;
	LogMonitor.propTypes = {
	  dispatch: _react.PropTypes.func,
	  computedStates: _react.PropTypes.array,
	  actionsById: _react.PropTypes.object,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  monitorState: _react.PropTypes.shape({
	    initialScrollTop: _react.PropTypes.number
	  }),
	
	  preserveScrollTop: _react.PropTypes.bool,
	  select: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	LogMonitor.defaultProps = {
	  select: function select(state) {
	    return state;
	  },
	  theme: 'nicinabox',
	  preserveScrollTop: true,
	  expandActionRoot: true,
	  expandStateRoot: true
	};
	exports.default = LogMonitor;

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(479);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var _LogMonitorEntryAction = __webpack_require__(514);
	
	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);
	
	var _function = __webpack_require__(515);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};
	
	var LogMonitorEntry = (function (_Component) {
	  _inherits(LogMonitorEntry, _Component);
	
	  function LogMonitorEntry(props) {
	    _classCallCheck(this, LogMonitorEntry);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleActionClick = _this.handleActionClick.bind(_this);
	    return _this;
	  }
	
	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2.default.createElement(_reactJsonTree2.default, {
	          theme: this.props.theme,
	          keyName: 'state',
	          data: this.props.select(state),
	          previousData: typeof this.props.previousState !== 'undefined' ? this.props.select(this.props.previousState) : undefined,
	          expandRoot: this.props.expandStateRoot,
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };
	
	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var actionId = _props.actionId;
	    var onActionClick = _props.onActionClick;
	
	    if (actionId > 0) {
	      onActionClick(actionId);
	    }
	  };
	
	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var actionId = _props2.actionId;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;
	
	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: actionId > 0 ? 'pointer' : 'default'
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          textDecoration: collapsed ? 'line-through' : 'none',
	          color: this.props.theme.base06
	        } },
	      _react2.default.createElement(_LogMonitorEntryAction2.default, {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        expandActionRoot: this.props.expandActionRoot,
	        onClick: this.handleActionClick,
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2.default.createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };
	
	  return LogMonitorEntry;
	})(_react.Component);
	
	LogMonitorEntry.propTypes = {
	  state: _react.PropTypes.object.isRequired,
	  action: _react.PropTypes.object.isRequired,
	  actionId: _react.PropTypes.number.isRequired,
	  select: _react.PropTypes.func.isRequired,
	  error: _react.PropTypes.string,
	  onActionClick: _react.PropTypes.func.isRequired,
	  collapsed: _react.PropTypes.bool,
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntry;

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _class, _temp; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _grabNode = __webpack_require__(485);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var _solarized = __webpack_require__(513);
	
	var _solarized2 = _interopRequireDefault(_solarized);
	
	var _JSONObjectNode = __webpack_require__(487);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};
	
	var getEmptyStyle = function getEmptyStyle() {
	  return {};
	};
	var identity = function identity(value) {
	  return value;
	};
	
	var JSONTree = (_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(JSONTree, _React$Component);
	
	  function JSONTree(props) {
	    (0, _classCallCheck3.default)(this, JSONTree);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	  }
	
	  JSONTree.prototype.render = function render() {
	    var getStyles = {
	      getArrowStyle: this.props.getArrowStyle,
	      getListStyle: this.props.getListStyle,
	      getItemStringStyle: this.props.getItemStringStyle,
	      getLabelStyle: this.props.getLabelStyle,
	      getValueStyle: this.props.getValueStyle
	    };
	
	    var _props = this.props;
	    var value = _props.data;
	    var initialExpanded = _props.expandRoot;
	    var allExpanded = _props.expandAll;
	    var getItemString = _props.getItemString;
	    var labelRenderer = _props.labelRenderer;
	    var valueRenderer = _props.valueRenderer;
	    var keyPath = _props.keyPath;
	    var previousData = _props.previousData;
	    var theme = _props.theme;
	
	    var nodeToRender = undefined;
	
	    if (!this.props.hideRoot) {
	      nodeToRender = (0, _grabNode2.default)({
	        getItemString: getItemString,
	        initialExpanded: initialExpanded,
	        allExpanded: allExpanded,
	        keyPath: keyPath,
	        previousData: previousData,
	        styles: getStyles,
	        theme: theme,
	        labelRenderer: labelRenderer,
	        value: value,
	        valueRenderer: valueRenderer
	      });
	    } else {
	      nodeToRender = (0, _JSONObjectNode.getChildNodes)({
	        data: value,
	        getItemString: getItemString,
	        labelRenderer: labelRenderer,
	        previousData: previousData,
	        styles: getStyles,
	        theme: theme,
	        valueRenderer: valueRenderer,
	        allExpanded: allExpanded,
	        keyPath: []
	      });
	    }
	
	    return _react2.default.createElement(
	      'ul',
	      { style: (0, _extends3.default)({}, styles.tree, this.props.style) },
	      nodeToRender
	    );
	  };
	
	  return JSONTree;
	}(_react2.default.Component), _class.propTypes = {
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]).isRequired,
	  hideRoot: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	  expandRoot: true,
	  expandAll: false,
	  hideRoot: false,
	  keyPath: ['root'],
	  theme: _solarized2.default,
	  getArrowStyle: getEmptyStyle,
	  getListStyle: getEmptyStyle,
	  getItemStringStyle: getEmptyStyle,
	  getLabelStyle: getEmptyStyle,
	  getValueStyle: getEmptyStyle,
	  getItemString: function getItemString(type, data, itemType, itemString) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      itemType,
	      ' ',
	      itemString
	    );
	  },
	  labelRenderer: identity,
	  valueRenderer: identity
	}, _temp);
	exports.default = JSONTree;

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(481);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
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

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(482), __esModule: true };

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(483);
	module.exports = __webpack_require__(236).Object.assign;

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(234);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(484)});

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(244)
	  , toObject = __webpack_require__(231)
	  , IObject  = __webpack_require__(270);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(239)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (_ref) {
	  var getItemString = _ref.getItemString;
	  var _ref$initialExpanded = _ref.initialExpanded;
	  var initialExpanded = _ref$initialExpanded === undefined ? false : _ref$initialExpanded;
	  var allExpanded = _ref.allExpanded;
	  var keyPath = _ref.keyPath;
	  var labelRenderer = _ref.labelRenderer;
	  var previousData = _ref.previousData;
	  var styles = _ref.styles;
	  var theme = _ref.theme;
	  var value = _ref.value;
	  var valueRenderer = _ref.valueRenderer;
	
	  var nodeType = (0, _objType2.default)(value);
	
	  var simpleNodeProps = {
	    getItemString: getItemString,
	    initialExpanded: initialExpanded,
	    key: keyPath[0],
	    keyPath: keyPath,
	    labelRenderer: labelRenderer,
	    nodeType: nodeType,
	    previousData: previousData,
	    styles: styles,
	    theme: theme,
	    value: value,
	    valueRenderer: valueRenderer
	  };
	
	  var nestedNodeProps = (0, _extends3.default)({}, simpleNodeProps, {
	    data: value,
	    initialExpanded: initialExpanded,
	    allExpanded: allExpanded,
	    keyPath: keyPath
	  });
	
	  switch (nodeType) {
	    case 'Object':
	      return _react2.default.createElement(_JSONObjectNode2.default, nestedNodeProps);
	    case 'Array':
	      return _react2.default.createElement(_JSONArrayNode2.default, nestedNodeProps);
	    case 'Iterable':
	      return _react2.default.createElement(_JSONIterableNode2.default, nestedNodeProps);
	    case 'String':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return '"' + raw + '"';
	        } }));
	    case 'Number':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base09 }));
	    case 'Boolean':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base09, valueGetter: function valueGetter(raw) {
	          return raw ? 'true' : 'false';
	        } }));
	    case 'Date':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return raw.toISOString();
	        } }));
	    case 'Null':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'null';
	        } }));
	    case 'Undefined':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'undefined';
	        } }));
	    case 'Function':
	      return _react2.default.createElement(_JSONValueNode2.default, (0, _extends3.default)({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter(raw) {
	          return raw.toString();
	        } }));
	    default:
	      return false;
	  }
	};
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objType = __webpack_require__(486);
	
	var _objType2 = _interopRequireDefault(_objType);
	
	var _JSONObjectNode = __webpack_require__(487);
	
	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);
	
	var _JSONArrayNode = __webpack_require__(500);
	
	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);
	
	var _JSONIterableNode = __webpack_require__(501);
	
	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);
	
	var _JSONValueNode = __webpack_require__(511);
	
	var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (obj) {
	  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && !Array.isArray(obj) && typeof obj[_iterator2.default] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};
	
	var _iterator = __webpack_require__(247);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _typeof2 = __webpack_require__(246);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getChildNodes = getChildNodes;
	
	exports.default = function (_ref3) {
	  var props = (0, _objectWithoutProperties3.default)(_ref3, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, (0, _extends3.default)({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Object',
	    nodeTypeIndicator: '{}',
	    renderItemString: renderItemString
	  }));
	};
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(488);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _keys = __webpack_require__(489);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(492);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(485);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    var len = (0, _keys2.default)(data).length;
	    itemString = len + ' key' + (len !== 1 ? 's' : '');
	  }
	  return getItemString('Object', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref2) {
	  var data = _ref2.data;
	  var getItemString = _ref2.getItemString;
	  var labelRenderer = _ref2.labelRenderer;
	  var previousData = _ref2.previousData;
	  var styles = _ref2.styles;
	  var theme = _ref2.theme;
	  var valueRenderer = _ref2.valueRenderer;
	  var allExpanded = _ref2.allExpanded;
	  var keyPath = _ref2.keyPath;
	
	  var childNodes = [];
	  for (var key in data) {
	    if ((0, _getPrototypeOf2.default)(data) === null || data.hasOwnProperty(key)) {
	      var previousDataValue = undefined;
	      if (typeof previousData !== 'undefined' && previousData !== null) {
	        previousDataValue = previousData[key];
	      }
	
	      var node = (0, _grabNode2.default)({
	        getItemString: getItemString,
	        keyPath: [key].concat(keyPath),
	        labelRenderer: labelRenderer,
	        previousData: previousDataValue,
	        renderItemString: renderItemString,
	        styles: styles,
	        theme: theme,
	        value: data[key],
	        valueRenderer: valueRenderer,
	        allExpanded: allExpanded
	      });
	
	      if (node !== false) {
	        childNodes.push(node);
	      }
	    }
	  }
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an Object

/***/ },
/* 488 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(490), __esModule: true };

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(491);
	module.exports = __webpack_require__(236).Object.keys;

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(231);
	
	__webpack_require__(233)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dec, _class;
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(493);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(496);
	
	var _JSONArrow = __webpack_require__(499);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Renders nested values (eg. objects, arrays, lists, etc.)
	 */
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONNestedNode = (_dec = _reactMixin2.default.decorate(_mixins.ExpandedStateHandlerMixin), _dec(_class = function (_React$Component) {
	  (0, _inherits3.default)(JSONNestedNode, _React$Component);
	
	  // flag to see if we still need to render our child nodes
	
	  function JSONNestedNode(props) {
	    (0, _classCallCheck3.default)(this, JSONNestedNode);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
	    _this.defaultProps = {
	      data: [],
	      initialExpanded: false,
	      allExpanded: false
	    };
	    _this.itemString = false;
	    _this.needsChildNodes = true;
	    _this.renderedChildren = [];
	
	    _this.state = {
	      expanded: _this.props.initialExpanded || _this.props.allExpanded,
	      createdChildNodes: false
	    };
	    return _this;
	  }
	
	  // cache store for our child nodes
	
	  // cache store for the number of items string we display
	
	  JSONNestedNode.prototype.render = function render() {
	    var _props;
	
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = (0, _extends3.default)({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = (0, _extends3.default)({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = (0, _extends3.default)({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	
	    if (this.state.expanded && this.needsChildNodes) {
	      this.needsChildNodes = false;
	      this.renderedChildren = this.props.getChildNodes((0, _extends3.default)({}, this.props));
	    }
	
	    var itemType = _react2.default.createElement(
	      'span',
	      { style: styles.spanType },
	      this.props.nodeTypeIndicator
	    );
	    var renderedItemString = this.props.renderItemString({
	      data: this.props.data,
	      getItemString: this.props.getItemString,
	      itemString: this.itemString,
	      itemType: itemType
	    });
	
	    return _react2.default.createElement(
	      'li',
	      { style: containerStyle },
	      _react2.default.createElement(_JSONArrow2.default, { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2.default.createElement(
	        'label',
	        { style: (0, _extends3.default)({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle(this.props.nodeType, this.state.expanded)), onClick: this.handleClick.bind(this) },
	        (_props = this.props).labelRenderer.apply(_props, this.props.keyPath),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: (0, _extends3.default)({}, spanStyle, this.props.styles.getItemStringStyle(this.props.nodeType, this.state.expanded)), onClick: this.handleClick.bind(this) },
	        renderedItemString
	      ),
	      _react2.default.createElement(
	        'ul',
	        { style: (0, _extends3.default)({}, childListStyle, this.props.styles.getListStyle(this.props.nodeType, this.state.expanded)) },
	        this.renderedChildren
	      )
	    );
	  };
	
	  return JSONNestedNode;
	}(_react2.default.Component)) || _class);
	exports.default = JSONNestedNode;

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(494);
	var assign = __webpack_require__(495);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 494 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };
	
	var thrower = function(error){
	    throw error;
	};
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }
	
	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };
	
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	
	}
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	
	    var fn = left || right;
	
	    return function(args){
	        return fn.apply(this, args);
	    };
	};
	
	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	
	    return left || right;
	}
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};
	


/***/ },
/* 495 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _squashClickEvent = __webpack_require__(497);
	
	Object.defineProperty(exports, 'SquashClickEventMixin', {
	  enumerable: true,
	  get: function get() {
	    return _squashClickEvent.default;
	  }
	});
	
	var _expandedStateHandler = __webpack_require__(498);
	
	Object.defineProperty(exports, 'ExpandedStateHandlerMixin', {
	  enumerable: true,
	  get: function get() {
	    return _expandedStateHandler.default;
	  }
	});

/***/ },
/* 497 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};

/***/ },
/* 498 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};
	
	var JSONArrow = function (_React$Component) {
	  (0, _inherits3.default)(JSONArrow, _React$Component);
	
	  function JSONArrow() {
	    (0, _classCallCheck3.default)(this, JSONArrow);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  JSONArrow.prototype.render = function render() {
	    var style = (0, _extends3.default)({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = (0, _extends3.default)({}, style, styles.open);
	    }
	    style = (0, _extends3.default)({}, style, this.props.style);
	    return _react2.default.createElement('div', { style: style, onClick: this.props.onClick });
	  };
	
	  return JSONArrow;
	}(_react2.default.Component);
	
	exports.default = JSONArrow;

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = JSONArrayNode;
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(488);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(492);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(485);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    itemString = data.length + ' item' + (data.length !== 1 ? 's' : '');
	  }
	  return getItemString('Array', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref2) {
	  var data = _ref2.data;
	  var getItemString = _ref2.getItemString;
	  var labelRenderer = _ref2.labelRenderer;
	  var previousData = _ref2.previousData;
	  var styles = _ref2.styles;
	  var theme = _ref2.theme;
	  var valueRenderer = _ref2.valueRenderer;
	  var allExpanded = _ref2.allExpanded;
	  var keyPath = _ref2.keyPath;
	
	  var childNodes = [];
	  data.forEach(function (value, key) {
	    var previousDataValue = undefined;
	    if (typeof previousData !== 'undefined' && previousData !== null) {
	      previousDataValue = previousData[key];
	    }
	
	    var node = (0, _grabNode2.default)({
	      getItemString: getItemString,
	      keyPath: [key].concat(keyPath),
	      labelRenderer: labelRenderer,
	      previousData: previousDataValue,
	      renderItemString: renderItemString,
	      styles: styles,
	      theme: theme,
	      value: value,
	      valueRenderer: valueRenderer,
	      allExpanded: allExpanded
	    });
	
	    if (node !== false) {
	      childNodes.push(node);
	    }
	  });
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an Array
	function JSONArrayNode(_ref3) {
	  var props = (0, _objectWithoutProperties3.default)(_ref3, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, (0, _extends3.default)({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Array',
	    nodeTypeIndicator: '[]',
	    renderItemString: renderItemString
	  }));
	}

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (_ref5) {
	  var props = (0, _objectWithoutProperties3.default)(_ref5, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, (0, _extends3.default)({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Iterable',
	    nodeTypeIndicator: '()',
	    renderItemString: renderItemString
	  }));
	};
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(488);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getIterator2 = __webpack_require__(502);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _isSafeInteger = __webpack_require__(507);
	
	var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(492);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(485);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    var count = 0;
	    if ((0, _isSafeInteger2.default)(data.size)) {
	      count = data.size;
	    } else {
	      for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref2;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref2 = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref2 = _i.value;
	        }
	
	        var entry = _ref2;
	        // eslint-disable-line no-unused-vars
	        count += 1;
	      }
	    }
	    itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	  }
	  return getItemString('Iterable', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref3) {
	  var data = _ref3.data;
	  var getItemString = _ref3.getItemString;
	  var labelRenderer = _ref3.labelRenderer;
	  var previousData = _ref3.previousData;
	  var styles = _ref3.styles;
	  var theme = _ref3.theme;
	  var valueRenderer = _ref3.valueRenderer;
	  var allExpanded = _ref3.allExpanded;
	  var keyPath = _ref3.keyPath;
	
	  var childNodes = [];
	  for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref4;
	
	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref4 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref4 = _i2.value;
	    }
	
	    var entry = _ref4;
	
	    var key = null;
	    var value = null;
	    if (Array.isArray(entry)) {
	      key = entry[0];
	      value = entry[1];
	    } else {
	      key = childNodes.length;
	      value = entry;
	    }
	
	    var previousDataValue = undefined;
	    if (typeof previousData !== 'undefined' && previousData !== null) {
	      previousDataValue = previousData[key];
	    }
	
	    var node = (0, _grabNode2.default)({
	      getItemString: getItemString,
	      keyPath: [key].concat(keyPath),
	      labelRenderer: labelRenderer,
	      previousData: previousDataValue,
	      styles: styles,
	      theme: theme,
	      value: value,
	      valueRenderer: valueRenderer,
	      allExpanded: allExpanded
	    });
	
	    if (node !== false) {
	      childNodes.push(node);
	    }
	  }
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an iterable

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(503), __esModule: true };

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(265);
	__webpack_require__(249);
	module.exports = __webpack_require__(504);

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(279)
	  , get      = __webpack_require__(505);
	module.exports = __webpack_require__(236).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(506)
	  , ITERATOR  = __webpack_require__(262)('iterator')
	  , Iterators = __webpack_require__(259);
	module.exports = __webpack_require__(236).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(271)
	  , TAG = __webpack_require__(262)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(508), __esModule: true };

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(509);
	module.exports = __webpack_require__(236).Number.isSafeInteger;

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(234)
	  , isInteger = __webpack_require__(510)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(280)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dec, _class, _class2, _temp;
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _extends2 = __webpack_require__(480);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(245);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(282);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(493);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(496);
	
	var _hexToRgb = __webpack_require__(512);
	
	var _hexToRgb2 = _interopRequireDefault(_hexToRgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Renders simple values (eg. strings, numbers, booleans, etc)
	 */
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONValueNode = (_dec = _reactMixin2.default.decorate(_mixins.SquashClickEventMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(JSONValueNode, _React$Component);
	
	  function JSONValueNode() {
	    (0, _classCallCheck3.default)(this, JSONValueNode);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  JSONValueNode.prototype.render = function render() {
	    var _props;
	
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = (0, _hexToRgb2.default)(this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	
	    return _react2.default.createElement(
	      'li',
	      { style: (0, _extends3.default)({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2.default.createElement(
	        'label',
	        { style: (0, _extends3.default)({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle(this.props.nodeType, true)) },
	        (_props = this.props).labelRenderer.apply(_props, this.props.keyPath),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: (0, _extends3.default)({
	            color: this.props.valueColor
	          }, this.props.styles.getValueStyle(this.props.nodeType, true)) },
	        this.props.valueRenderer(this.props.valueGetter(this.props.value))
	      )
	    );
	  };
	
	  return JSONValueNode;
	}(_react2.default.Component), _class2.defaultProps = {
	  valueGetter: function valueGetter(value) {
	    return value;
	  }
	}, _temp)) || _class);
	exports.default = JSONValueNode;

/***/ },
/* 512 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

/***/ },
/* 513 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(479);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};
	
	var LogMonitorAction = (function (_Component) {
	  _inherits(LogMonitorAction, _Component);
	
	  function LogMonitorAction() {
	    _classCallCheck(this, LogMonitorAction);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme,
	        keyName: 'action',
	        data: payload,
	        expandRoot: this.props.expandActionRoot }) : ''
	    );
	  };
	
	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;
	
	    var payload = _objectWithoutProperties(_props$action, ['type']);
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2.default.createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };
	
	  return LogMonitorAction;
	})(_react.Component);
	
	exports.default = LogMonitorAction;

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _shallowEqual = __webpack_require__(516);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}
	
	module.exports = exports['default'];

/***/ },
/* 516 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _brighten = __webpack_require__(518);
	
	var _brighten2 = _interopRequireDefault(_brighten);
	
	var _function = __webpack_require__(515);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};
	
	var LogMonitorButton = (function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);
	
	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	
	    _this.state = {
	      hovered: false,
	      active: false
	    };
	    return _this;
	  }
	
	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };
	
	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };
	
	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };
	
	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2.default.createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onClick: this.onClick,
	        style: style },
	      this.props.children
	    );
	  };
	
	  return LogMonitorButton;
	})(_react2.default.Component);
	
	exports.default = LogMonitorButton;

/***/ },
/* 518 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;
	
	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _base16 = __webpack_require__(520);
	
	_defaults(exports, _interopExportWildcard(_base16, _defaults));
	
	var _nicinabox = __webpack_require__(558);
	
	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _threezerotwofour = __webpack_require__(521);
	
	exports.threezerotwofour = _interopRequire(_threezerotwofour);
	
	var _apathy = __webpack_require__(522);
	
	exports.apathy = _interopRequire(_apathy);
	
	var _ashes = __webpack_require__(523);
	
	exports.ashes = _interopRequire(_ashes);
	
	var _atelierDune = __webpack_require__(524);
	
	exports.atelierDune = _interopRequire(_atelierDune);
	
	var _atelierForest = __webpack_require__(525);
	
	exports.atelierForest = _interopRequire(_atelierForest);
	
	var _atelierHeath = __webpack_require__(526);
	
	exports.atelierHeath = _interopRequire(_atelierHeath);
	
	var _atelierLakeside = __webpack_require__(527);
	
	exports.atelierLakeside = _interopRequire(_atelierLakeside);
	
	var _atelierSeaside = __webpack_require__(528);
	
	exports.atelierSeaside = _interopRequire(_atelierSeaside);
	
	var _bespin = __webpack_require__(529);
	
	exports.bespin = _interopRequire(_bespin);
	
	var _brewer = __webpack_require__(530);
	
	exports.brewer = _interopRequire(_brewer);
	
	var _bright = __webpack_require__(531);
	
	exports.bright = _interopRequire(_bright);
	
	var _chalk = __webpack_require__(532);
	
	exports.chalk = _interopRequire(_chalk);
	
	var _codeschool = __webpack_require__(533);
	
	exports.codeschool = _interopRequire(_codeschool);
	
	var _colors = __webpack_require__(534);
	
	exports.colors = _interopRequire(_colors);
	
	var _default = __webpack_require__(535);
	
	exports['default'] = _interopRequire(_default);
	
	var _eighties = __webpack_require__(536);
	
	exports.eighties = _interopRequire(_eighties);
	
	var _embers = __webpack_require__(537);
	
	exports.embers = _interopRequire(_embers);
	
	var _flat = __webpack_require__(538);
	
	exports.flat = _interopRequire(_flat);
	
	var _google = __webpack_require__(539);
	
	exports.google = _interopRequire(_google);
	
	var _grayscale = __webpack_require__(540);
	
	exports.grayscale = _interopRequire(_grayscale);
	
	var _greenscreen = __webpack_require__(541);
	
	exports.greenscreen = _interopRequire(_greenscreen);
	
	var _harmonic = __webpack_require__(542);
	
	exports.harmonic = _interopRequire(_harmonic);
	
	var _hopscotch = __webpack_require__(543);
	
	exports.hopscotch = _interopRequire(_hopscotch);
	
	var _isotope = __webpack_require__(544);
	
	exports.isotope = _interopRequire(_isotope);
	
	var _marrakesh = __webpack_require__(545);
	
	exports.marrakesh = _interopRequire(_marrakesh);
	
	var _mocha = __webpack_require__(546);
	
	exports.mocha = _interopRequire(_mocha);
	
	var _monokai = __webpack_require__(547);
	
	exports.monokai = _interopRequire(_monokai);
	
	var _ocean = __webpack_require__(548);
	
	exports.ocean = _interopRequire(_ocean);
	
	var _paraiso = __webpack_require__(549);
	
	exports.paraiso = _interopRequire(_paraiso);
	
	var _pop = __webpack_require__(550);
	
	exports.pop = _interopRequire(_pop);
	
	var _railscasts = __webpack_require__(551);
	
	exports.railscasts = _interopRequire(_railscasts);
	
	var _shapeshifter = __webpack_require__(552);
	
	exports.shapeshifter = _interopRequire(_shapeshifter);
	
	var _solarized = __webpack_require__(553);
	
	exports.solarized = _interopRequire(_solarized);
	
	var _summerfruit = __webpack_require__(554);
	
	exports.summerfruit = _interopRequire(_summerfruit);
	
	var _tomorrow = __webpack_require__(555);
	
	exports.tomorrow = _interopRequire(_tomorrow);
	
	var _tube = __webpack_require__(556);
	
	exports.tube = _interopRequire(_tube);
	
	var _twilight = __webpack_require__(557);
	
	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 521 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 522 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 523 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 524 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 525 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 526 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 527 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 528 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 529 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 530 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 531 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 532 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 533 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 534 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 535 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 536 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 537 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 538 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 539 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 540 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 541 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 542 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 543 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 544 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 545 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 546 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 547 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 548 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 549 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 550 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 551 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 552 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 553 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 554 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 555 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 556 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 557 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 558 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 559 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.updateScrollTop = updateScrollTop;
	var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
	function updateScrollTop(scrollTop) {
	  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
	}

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(559);
	
	function initialScrollTop(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];
	
	  if (!props.preserveScrollTop) {
	    return 0;
	  }
	
	  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
	}
	
	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];
	
	  return {
	    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action)
	  };
	}

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _DockMonitor = __webpack_require__(562);
	
	var _DockMonitor2 = _interopRequireDefault(_DockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _DockMonitor2.default;

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDock = __webpack_require__(563);
	
	var _reactDock2 = _interopRequireDefault(_reactDock);
	
	var _constants = __webpack_require__(585);
	
	var _actions = __webpack_require__(586);
	
	var _reducers = __webpack_require__(587);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _parseKey = __webpack_require__(588);
	
	var _parseKey2 = _interopRequireDefault(_parseKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DockMonitor = (function (_Component) {
	  _inherits(DockMonitor, _Component);
	
	  function DockMonitor(props) {
	    _classCallCheck(this, DockMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleSizeChange = _this.handleSizeChange.bind(_this);
	
	    var childrenCount = _react.Children.count(props.children);
	    if (childrenCount === 0) {
	      console.error('<DockMonitor> requires at least one monitor inside. ' + 'Why don’t you try <LogMonitor>? You can get it at ' + 'https://github.com/gaearon/redux-devtools-log-monitor.');
	    } else if (childrenCount > 1 && !props.changeMonitorKey) {
	      console.error('You specified multiple monitors inside <DockMonitor> ' + 'but did not provide `changeMonitorKey` prop to change them. ' + 'Try specifying <DockMonitor changeMonitorKey="ctrl-m" /> ' + 'and then press Ctrl-M.');
	    }
	    return _this;
	  }
	
	  DockMonitor.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
	    if (!key) {
	      return false;
	    }
	
	    var charCode = event.keyCode || event.which;
	    var char = String.fromCharCode(charCode);
	    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
	  };
	
	  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
	    // Ignore regular keys when focused on a field
	    // and no modifiers are active.
	    if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
	      return;
	    }
	
	    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
	    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);
	
	    var monitorKey = undefined;
	    if (this.props.changeMonitorKey) {
	      monitorKey = (0, _parseKey2.default)(this.props.changeMonitorKey);
	    }
	
	    if (this.matchesKey(visibilityKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.toggleVisibility)());
	    } else if (this.matchesKey(positionKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changePosition)());
	    } else if (this.matchesKey(monitorKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changeMonitor)());
	    }
	  };
	
	  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
	    this.props.dispatch((0, _actions.changeSize)(requestedSize));
	  };
	
	  DockMonitor.prototype.renderChild = function renderChild(child, index, otherProps) {
	    var monitorState = this.props.monitorState;
	    var childMonitorIndex = monitorState.childMonitorIndex;
	    var childMonitorStates = monitorState.childMonitorStates;
	
	    if (index !== childMonitorIndex) {
	      return null;
	    }
	
	    return (0, _react.cloneElement)(child, _extends({
	      monitorState: childMonitorStates[index]
	    }, otherProps));
	  };
	
	  DockMonitor.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var children = _props.children;
	    var fluid = _props.fluid;
	
	    var rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);
	
	    var position = monitorState.position;
	    var isVisible = monitorState.isVisible;
	    var size = monitorState.size;
	
	    return _react2.default.createElement(
	      _reactDock2.default,
	      { position: position,
	        isVisible: isVisible,
	        size: size,
	        fluid: fluid,
	        onSizeChange: this.handleSizeChange,
	        dimMode: 'none' },
	      _react.Children.map(children, function (child, index) {
	        return _this2.renderChild(child, index, rest);
	      })
	    );
	  };
	
	  return DockMonitor;
	})(_react.Component);
	
	DockMonitor.update = _reducers2.default;
	DockMonitor.propTypes = {
	  defaultPosition: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	  defaultIsVisible: _react.PropTypes.bool.isRequired,
	  defaultSize: _react.PropTypes.number.isRequired,
	  toggleVisibilityKey: _react.PropTypes.string.isRequired,
	  changePositionKey: _react.PropTypes.string.isRequired,
	  changeMonitorKey: _react.PropTypes.string,
	  fluid: _react.PropTypes.bool,
	
	  dispatch: _react.PropTypes.func,
	  monitorState: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	    size: _react.PropTypes.number.isRequired,
	    isVisible: _react.PropTypes.bool.isRequired,
	    childMonitorState: _react.PropTypes.any
	  })
	};
	DockMonitor.defaultProps = {
	  defaultIsVisible: true,
	  defaultPosition: 'right',
	  defaultSize: 0.3,
	  fluid: true
	};
	exports.default = DockMonitor;

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(564)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Dock = __webpack_require__(566);
	
	var _Dock2 = _interopRequireDefault(_Dock);
	
	exports['default'] = _Dock2['default'];
	module.exports = exports['default'];

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(565);

/***/ },
/* 565 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(567)['default'];
	
	var _inherits = __webpack_require__(282)['default'];
	
	var _createClass = __webpack_require__(571)['default'];
	
	var _classCallCheck = __webpack_require__(572)['default'];
	
	var _extends = __webpack_require__(480)['default'];
	
	var _toConsumableArray = __webpack_require__(573)['default'];
	
	var _Object$keys = __webpack_require__(489)['default'];
	
	var _interopRequireDefault = __webpack_require__(564)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashDebounce = __webpack_require__(582);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	var _objectAssign = __webpack_require__(293);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _autoprefix = __webpack_require__(584);
	
	var _autoprefix2 = _interopRequireDefault(_autoprefix);
	
	function autoprefixes(styles) {
	  return _Object$keys(styles).reduce(function (obj, key) {
	    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
	  }, {});
	}
	
	var styles = autoprefixes({
	  wrapper: {
	    position: 'fixed',
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0
	  },
	
	  dim: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    zIndex: 0,
	    background: 'rgba(0, 0, 0, 0.2)',
	    opacity: 1
	  },
	
	  dimAppear: {
	    opacity: 0
	  },
	
	  dimTransparent: {
	    pointerEvents: 'none'
	  },
	
	  dimHidden: {
	    opacity: 0
	  },
	
	  dock: {
	    position: 'fixed',
	    zIndex: 1,
	    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
	    background: 'white',
	    left: 0,
	    top: 0,
	    width: '100%',
	    height: '100%'
	  },
	
	  dockHidden: {
	    opacity: 0
	  },
	
	  dockResizing: {
	    transition: 'none'
	  },
	
	  dockContent: {
	    width: '100%',
	    height: '100%',
	    overflow: 'auto'
	  },
	
	  resizer: {
	    position: 'absolute',
	    zIndex: 2,
	    opacity: 0
	  }
	});
	
	function getTransitions(duration) {
	  return ['left', 'top', 'width', 'height'].map(function (p) {
	    return p + ' ' + duration / 1000 + 's ease-out';
	  });
	}
	
	function getDockStyles(_ref, _ref2) {
	  var fluid = _ref.fluid;
	  var dockStyle = _ref.dockStyle;
	  var dockHiddenStyle = _ref.dockHiddenStyle;
	  var duration = _ref.duration;
	  var position = _ref.position;
	  var isVisible = _ref.isVisible;
	  var size = _ref2.size;
	  var isResizing = _ref2.isResizing;
	  var fullWidth = _ref2.fullWidth;
	  var fullHeight = _ref2.fullHeight;
	
	  var posStyle = undefined;
	  var absSize = fluid ? size * 100 + '%' : size + 'px';
	
	  function getRestSize(fullSize) {
	    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
	  }
	
	  switch (position) {
	    case 'left':
	      posStyle = {
	        width: absSize,
	        left: isVisible ? 0 : '-' + absSize
	      };
	      break;
	    case 'right':
	      posStyle = {
	        left: isVisible ? getRestSize(fullWidth) : fullWidth,
	        width: absSize
	      };
	      break;
	    case 'top':
	      posStyle = {
	        top: isVisible ? 0 : '-' + absSize,
	        height: absSize
	      };
	      break;
	    case 'bottom':
	      posStyle = {
	        top: isVisible ? getRestSize(fullHeight) : fullHeight,
	        height: absSize
	      };
	      break;
	  }
	
	  var transitions = getTransitions(duration);
	
	  return [styles.dock, (0, _autoprefix2['default'])({
	    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
	      return t;
	    }).join(',')
	  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
	}
	
	function getDimStyles(_ref3, _ref4) {
	  var dimMode = _ref3.dimMode;
	  var dimStyle = _ref3.dimStyle;
	  var duration = _ref3.duration;
	  var isVisible = _ref3.isVisible;
	  var isTransitionStarted = _ref4.isTransitionStarted;
	
	  return [styles.dim, (0, _autoprefix2['default'])({
	    transition: 'opacity ' + duration / 1000 + 's ease-out'
	  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
	}
	
	function getResizerStyles(position) {
	  var resizerStyle = undefined;
	  var size = 10;
	
	  switch (position) {
	    case 'left':
	      resizerStyle = {
	        right: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'right':
	      resizerStyle = {
	        left: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'top':
	      resizerStyle = {
	        bottom: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	    case 'bottom':
	      resizerStyle = {
	        top: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	  }
	
	  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
	}
	
	function getFullSize(position, fullWidth, fullHeight) {
	  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
	}
	
	var Dock = (function (_Component) {
	  _inherits(Dock, _Component);
	
	  function Dock(props) {
	    var _this = this;
	
	    _classCallCheck(this, Dock);
	
	    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);
	
	    this.transitionEnd = function () {
	      _this.setState({ isTransitionStarted: false });
	    };
	
	    this.hideDim = function () {
	      if (!_this.props.isVisible) {
	        _this.setState({ isDimHidden: true });
	      }
	    };
	
	    this.handleDimClick = function () {
	      if (_this.props.dimMode === 'opaque') {
	        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
	      }
	    };
	
	    this.handleResize = function () {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
	      } else {
	        _this.updateWindowSize(true);
	      }
	    };
	
	    this.updateWindowSize = function (windowResize) {
	      var sizeState = {
	        fullWidth: window.innerWidth,
	        fullHeight: window.innerHeight
	      };
	
	      if (windowResize) {
	        _this.setState(_extends({}, sizeState, {
	          isResizing: true,
	          isWindowResizing: windowResize
	        }));
	
	        _this.debouncedUpdateWindowSizeEnd();
	      } else {
	        _this.setState(sizeState);
	      }
	    };
	
	    this.updateWindowSizeEnd = function () {
	      _this.setState({
	        isResizing: false,
	        isWindowResizing: false
	      });
	    };
	
	    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);
	
	    this.handleWrapperLeave = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseDown = function () {
	      _this.setState({ isResizing: true });
	    };
	
	    this.handleMouseUp = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseMove = function (e) {
	      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
	      e.preventDefault();
	
	      var _props = _this.props;
	      var position = _props.position;
	      var fluid = _props.fluid;
	      var _state = _this.state;
	      var fullWidth = _state.fullWidth;
	      var fullHeight = _state.fullHeight;
	      var isControlled = _state.isControlled;
	      var x = e.clientX;
	      var y = e.clientY;
	
	      var size = undefined;
	
	      switch (position) {
	        case 'left':
	          size = fluid ? x / fullWidth : x;
	          break;
	        case 'right':
	          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
	          break;
	        case 'top':
	          size = fluid ? y / fullHeight : y;
	          break;
	        case 'bottom':
	          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
	          break;
	      }
	
	      _this.props.onSizeChange && _this.props.onSizeChange(size);
	
	      if (!isControlled) {
	        _this.setState({ size: size });
	      }
	    };
	
	    this.state = {
	      isControlled: typeof props.size !== 'undefined',
	      size: props.size || props.defaultSize,
	      isDimHidden: !props.isVisible,
	      fullWidth: typeof window !== 'undefined' && window.innerWidth,
	      fullHeight: typeof window !== 'undefined' && window.innerHeight,
	      isTransitionStarted: false,
	      isWindowResizing: false
	    };
	  }
	
	  _createClass(Dock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('mouseup', this.handleMouseUp);
	      window.addEventListener('mousemove', this.handleMouseMove);
	      window.addEventListener('resize', this.handleResize);
	
	      if (!window.fullWidth) {
	        this.updateWindowSize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('mouseup', this.handleMouseUp);
	      window.removeEventListener('mousemove', this.handleMouseMove);
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isControlled = typeof nextProps.size !== 'undefined';
	
	      this.setState({ isControlled: isControlled });
	
	      if (isControlled && this.props.size !== nextProps.size) {
	        this.setState({ size: nextProps.size });
	      } else if (this.props.fluid !== nextProps.fluid) {
	        this.updateSize(nextProps);
	      }
	
	      if (this.props.isVisible !== nextProps.isVisible) {
	        this.setState({
	          isTransitionStarted: true
	        });
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(props) {
	      var _state2 = this.state;
	      var fullWidth = _state2.fullWidth;
	      var fullHeight = _state2.fullHeight;
	
	      this.setState({
	        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;
	
	      if (this.props.isVisible !== prevProps.isVisible) {
	        if (!this.props.isVisible) {
	          window.setTimeout(function () {
	            return _this2.hideDim();
	          }, this.props.duration);
	        } else {
	          this.setState({ isDimHidden: false });
	        }
	
	        window.setTimeout(function () {
	          return _this2.setState({ isTransitionStarted: false });
	        }, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var zIndex = _props2.zIndex;
	      var dimMode = _props2.dimMode;
	      var position = _props2.position;
	      var isVisible = _props2.isVisible;
	      var _state3 = this.state;
	      var isResizing = _state3.isResizing;
	      var size = _state3.size;
	      var isDimHidden = _state3.isDimHidden;
	
	      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
	      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
	      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));
	
	      return _react2['default'].createElement(
	        'div',
	        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
	        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
	        _react2['default'].createElement(
	          'div',
	          { style: dockStyles },
	          _react2['default'].createElement('div', { style: resizerStyles,
	            onMouseDown: this.handleMouseDown }),
	          _react2['default'].createElement(
	            'div',
	            { style: styles.dockContent },
	            typeof children === 'function' ? children({
	              position: position,
	              isResizing: isResizing,
	              size: size,
	              isVisible: isVisible
	            }) : children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	      zIndex: _react.PropTypes.number,
	      fluid: _react.PropTypes.bool,
	      size: _react.PropTypes.number,
	      defaultSize: _react.PropTypes.number,
	      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
	      isVisible: _react.PropTypes.bool,
	      onVisibleChange: _react.PropTypes.func,
	      onSizeChange: _react.PropTypes.func,
	      dimStyle: _react.PropTypes.object,
	      dockStyle: _react.PropTypes.object,
	      duration: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: 'left',
	      zIndex: 99999999,
	      fluid: true,
	      defaultSize: 0.3,
	      dimMode: 'opaque',
	      duration: 200
	    },
	    enumerable: true
	  }]);
	
	  return Dock;
	})(_react.Component);
	
	exports['default'] = Dock;
	module.exports = exports['default'];

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(228);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(568);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(569), __esModule: true };

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(244);
	__webpack_require__(570);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(269);
	
	__webpack_require__(233)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(241);

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(240);

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(574);

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(575);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(576), __esModule: true };

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(249);
	__webpack_require__(577);
	module.exports = __webpack_require__(236).Array.from;

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(237)
	  , $export     = __webpack_require__(234)
	  , toObject    = __webpack_require__(231)
	  , call        = __webpack_require__(578)
	  , isArrayIter = __webpack_require__(579)
	  , toLength    = __webpack_require__(580)
	  , getIterFn   = __webpack_require__(505);
	$export($export.S + $export.F * !__webpack_require__(581)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(279);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(259)
	  , ITERATOR   = __webpack_require__(262)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(251)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(262)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(583);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = debounce;


/***/ },
/* 583 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
	// but dumber
	
	'use strict';
	
	var _extends = __webpack_require__(480)['default'];
	
	var _Object$keys = __webpack_require__(489)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoprefix;
	var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];
	
	var prefixes = ['Moz', 'Webkit', 'ms', 'O'];
	
	function prefixProp(key, value) {
	  return prefixes.reduce(function (obj, pre) {
	    return (obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj);
	  }, {});
	}
	
	function autoprefix(style) {
	  return _Object$keys(style).reduce(function (obj, key) {
	    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
	  }, style);
	}
	
	module.exports = exports['default'];

/***/ },
/* 585 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ },
/* 586 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.toggleVisibility = toggleVisibility;
	exports.changePosition = changePosition;
	exports.changeSize = changeSize;
	exports.changeMonitor = changeMonitor;
	var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	function toggleVisibility() {
	  return { type: TOGGLE_VISIBILITY };
	}
	
	var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	function changePosition() {
	  return { type: CHANGE_POSITION };
	}
	
	var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	function changeSize(size) {
	  return { type: CHANGE_SIZE, size: size };
	}
	
	var CHANGE_MONITOR = exports.CHANGE_MONITOR = '@@redux-devtools-log-monitor/CHANGE_MONITOR';
	function changeMonitor() {
	  return { type: CHANGE_MONITOR };
	}

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(586);
	
	var _constants = __webpack_require__(585);
	
	var _react = __webpack_require__(2);
	
	function position(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
	}
	
	function size(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_SIZE ? action.size : state;
	}
	
	function isVisible(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
	}
	
	function childMonitorStates(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var action = arguments[2];
	
	  return _react.Children.map(props.children, function (child, index) {
	    return child.type.update(child.props, state[index], action);
	  });
	}
	
	function childMonitorIndex(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];
	
	  switch (action.type) {
	    case _actions.CHANGE_MONITOR:
	      return (state + 1) % _react.Children.count(props.children);
	    default:
	      return state;
	  }
	}
	
	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];
	
	  if (!state.childMonitorStates) {
	    _react.Children.forEach(props.children, function (child, index) {
	      if (typeof child.type.update !== 'function') {
	        console.error('Child of <DockMonitor> with the index ' + index + ' ' + ('(' + (child.type.displayName || child.type.name || child.type) + ') ') + 'does not appear to be a valid Redux DevTools monitor.');
	      }
	    });
	  }
	
	  return {
	    position: position(props, state.position, action),
	    isVisible: isVisible(props, state.isVisible, action),
	    size: size(props, state.size, action),
	    childMonitorIndex: childMonitorIndex(props, state.childMonitorIndex, action),
	    childMonitorStates: childMonitorStates(props, state.childMonitorStates, action)
	  };
	}

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keycodes = __webpack_require__(589);
	
	function assertKeyString(s) {
	  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
	    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	}
	
	module.exports = function parse(s) {
	  var keyString = s.trim().toLowerCase();
	
	  assertKeyString(keyString);
	
	  var key = {
	      name     :  undefined
	    , ctrl     :  false
	    , meta     :  false
	    , shift    :  false
	    , alt      :  false
	    , sequence :  undefined
	  }
	  , parts = keyString.split('-')
	  , c;
	
	  key.name = parts.pop();
	  while((c = parts.pop())) key[c] = true;
	  key.sequence = key.ctrl 
	    ? keycodes.ctrl[key.name] || key.name
	    : keycodes.nomod[key.name] || key.name;
	
	  // uppercase sequence for single chars when shift was pressed
	  if (key.shift && key.sequence && key.sequence.length === 1)
	    key.sequence = key.sequence.toUpperCase();
	
	  return key;
	};


/***/ },
/* 589 */
/***/ function(module, exports) {

	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	module.exports = {
	  nomod: {
	      escape: '\u001b'
	    , space: ' ' // actually '\u0020'
	    }
	  , ctrl: {
	        ' ': '\u0000'
	      , 'a': '\u0001'
	      , 'b': '\u0002'
	      , 'c': '\u0003'
	      , 'd': '\u0004'
	      , 'e': '\u0005'
	      , 'f': '\u0006'
	      , 'g': '\u0007'
	      , 'h': '\u0008'
	      , 'i': '\u0009'
	      , 'j': '\u000a'
	      , 'k': '\u000b'
	      , 'm': '\u000c'
	      , 'n': '\u000d'
	      , 'l': '\u000e'
	      , 'o': '\u000f'
	      , 'p': '\u0010'
	      , 'q': '\u0011'
	      , 'r': '\u0012'
	      , 's': '\u0013'
	      , 't': '\u0014'
	      , 'u': '\u0015'
	      , 'v': '\u0016'
	      , 'w': '\u0017'
	      , 'x': '\u0018'
	      , 'y': '\u0019'
	      , 'z': '\u001a'
	      , '[': '\u001b'
	      , '\\':'\u001c'
	      , ']': '\u001d'
	      , '^': '\u001e'
	      , '_': '\u001f'
	
	      , 'space': '\u0000'
	    }
	};


/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(481);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.default = configureStore;
	
	var _redux = __webpack_require__(345);
	
	var _reduxSocket = __webpack_require__(591);
	
	var _reduxSocket2 = _interopRequireDefault(_reduxSocket);
	
	var _socket = __webpack_require__(592);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// export default function configureStore ({ initialState = {}, history }) {
	//   // Sync with router via history instance (main.js)
	//   const routerMiddleware = syncHistory(history)
	
	//   // Compose final middleware and use devtools in debug environment
	//   let middleware = applyMiddleware(thunk, routerMiddleware)
	//   if (__DEBUG__) {
	//     const devTools = window.devToolsExtension
	//       ? window.devToolsExtension()
	//       : require('containers/DevTools').default.instrument()
	//     middleware = compose(middleware, devTools)
	//   }
	
	//   // Create final store and subscribe router in debug env ie. for devtools
	//   const store = middleware(createStore)(rootReducer, initialState)
	//   if (__DEBUG__) routerMiddleware.listenForReplays(store, ({ router }) => router.location)
	
	//   if (module.hot) {
	//     module.hot.accept('./rootReducer', () => {
	//       const nextRootReducer = require('./rootReducer').default
	
	//       store.replaceReducer(nextRootReducer)
	//     })
	//   }
	//   return store
	// }
	
	// import { syncHistory } from 'react-router-redux'
	// import thunk from 'redux-thunk'
	// import rootReducer from './rootReducer'
	var socket = (0, _socket2.default)('http://buildmaster.cfapps.io');
	var socketIOMiddleware = (0, _reduxSocket2.default)(socket, 'server/');
	
	function configureStore() {
	  function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case 'message':
	        return (0, _assign2.default)({}, { builds: state.builds.concat(action.data.payload) });
	      default:
	        return state;
	    }
	  }
	
	  var initialState = { builds: [] };
	
	  return (0, _redux.applyMiddleware)(socketIOMiddleware)(_redux.createStore)(reducer, initialState);
	}

/***/ },
/* 591 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSocketIoMiddleware;
	
	/**
	* Allows you to register actions that when dispatched, send the action to the
	* server via a socket.io socket.
	* `option` may be an array of action types, a test function, or a string prefix.
	*/
	function createSocketIoMiddleware(socket) {
	  var option = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var _ref$eventName = _ref.eventName;
	  var eventName = _ref$eventName === undefined ? 'action' : _ref$eventName;
	
	  return function (_ref2) {
	    var dispatch = _ref2.dispatch;
	
	    // Wire socket.io to dispatch actions sent by the server.
	    socket.on(eventName, dispatch);
	
	    return function (next) {
	      return function (action) {
	        var type = action.type;
	
	
	        if (type) {
	          var emit = false;
	
	          if (typeof option === 'string') {
	            // String prefix
	            emit = type.indexOf(option) === 0;
	          } else if (typeof option === 'function') {
	            // Test function
	            emit = option(type);
	          } else if (Array.isArray(option)) {
	            // Array of types
	            emit = option.indexOf(type) !== -1;
	          }
	
	          if (emit) {
	            socket.emit(eventName, action);
	          }
	        }
	
	        return next(action);
	      };
	    };
	  };
	}

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(593);
	var parser = __webpack_require__(598);
	var Manager = __webpack_require__(605);
	var debug = __webpack_require__(595)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	
	  return io.socket(parsed.path);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(605);
	exports.Socket = __webpack_require__(631);


/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(594);
	var debug = __webpack_require__(595)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url(uri, loc){
	  var obj = uri;
	
	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 594 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};


/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(596);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(597);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 597 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(595)('socket.io-parser');
	var json = __webpack_require__(599);
	var isArray = __webpack_require__(601);
	var Emitter = __webpack_require__(602);
	var binary = __webpack_require__(603);
	var isBuf = __webpack_require__(604);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;
	
	  // first is type
	  str += obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var p = {};
	  var i = 0;
	
	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(600);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module), (function() { return this; }())))

/***/ },
/* 600 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 601 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 602 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(601);
	var isBuf = __webpack_require__(604);
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;
	
	  function _deconstructPacket(data) {
	    if (!data) return data;
	
	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }
	
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;
	
	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }
	
	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 604 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(606);
	var Socket = __webpack_require__(631);
	var Emitter = __webpack_require__(632);
	var parser = __webpack_require__(598);
	var on = __webpack_require__(634);
	var bind = __webpack_require__(635);
	var debug = __webpack_require__(595)('socket.io-client:manager');
	var indexOf = __webpack_require__(629);
	var Backoff = __webpack_require__(637);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function(){
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function(){
	  this.lastPing = new Date;
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function(){
	  this.emitAll('pong', new Date - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function(){
	  debug('cleanup');
	
	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' == this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function(reason){
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(607);


/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(608);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(615);


/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(609);
	var Emitter = __webpack_require__(602);
	var debug = __webpack_require__(595)('engine.io-client:socket');
	var index = __webpack_require__(629);
	var parser = __webpack_require__(615);
	var parseuri = __webpack_require__(594);
	var parsejson = __webpack_require__(630);
	var parseqs = __webpack_require__(623);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Noop function.
	 *
	 * @api private
	 */
	
	function noop(){}
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(614);
	Socket.transports = __webpack_require__(609);
	Socket.parser = __webpack_require__(615);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport() {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose(){
	    onerror("transport closed");
	  }
	
	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }
	
	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(610);
	var XHR = __webpack_require__(612);
	var JSONP = __webpack_require__(626);
	var websocket = __webpack_require__(627);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(611);
	
	module.exports = function(opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }
	
	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 611 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(610);
	var Polling = __webpack_require__(613);
	var Emitter = __webpack_require__(602);
	var inherit = __webpack_require__(624);
	var debug = __webpack_require__(595)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty(){}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR(opts){
	  Polling.call(this, opts);
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }
	
	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }
	
	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(614);
	var parseqs = __webpack_require__(623);
	var parser = __webpack_require__(615);
	var inherit = __webpack_require__(624);
	var yeast = __webpack_require__(625);
	var debug = __webpack_require__(595)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(610);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function(){
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function(){
	  var self = this;
	
	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(615);
	var Emitter = __webpack_require__(602);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(616);
	var hasBinary = __webpack_require__(617);
	var sliceBuffer = __webpack_require__(618);
	var base64encoder = __webpack_require__(619);
	var after = __webpack_require__(620);
	var utf8 = __webpack_require__(621);
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = navigator.userAgent.match(/Android/i);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(622);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = ''
	    , n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      msg = data.substr(i + 1, n);
	
	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);
	
	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }
	
	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }
	
	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }
	
	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;
	
	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    if(numberTooLong) return callback(err, 0, 1);
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 616 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(601);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 618 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 619 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 620 */
/***/ function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)(module), (function() { return this; }())))

/***/ },
/* 622 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 623 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 624 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 625 */
/***/ function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(613);
	var inherit = __webpack_require__(624);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Callbacks count.
	 */
	
	var index = 0;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch(e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(614);
	var parser = __webpack_require__(615);
	var parseqs = __webpack_require__(623);
	var inherit = __webpack_require__(624);
	var yeast = __webpack_require__(625);
	var debug = __webpack_require__(595)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(628);
	  } catch (e) { }
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	
	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function(){
	  var self = this;
	
	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */
	
	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done(){
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 628 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 629 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 630 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(598);
	var Emitter = __webpack_require__(632);
	var toArray = __webpack_require__(633);
	var on = __webpack_require__(634);
	var bind = __webpack_require__(635);
	var debug = __webpack_require__(595)('socket.io-client:socket');
	var hasBin = __webpack_require__(636);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function() {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function(packet){
	  var ack = this.acks[packet.id];
	  if ('function' == typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function(compress){
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 632 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 633 */
/***/ function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ },
/* 634 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 635 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(601);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 637 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
	/*global __resourceQuery*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (true) {
	  var querystring = __webpack_require__(639);
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	}
	
	if (typeof window === 'undefined') {
	  // do nothing
	} else if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect(window.EventSource);
	}
	
	function connect(EventSource) {
	  var source = new EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(function() { connect(EventSource); }, options.timeout);
	  }
	
	}
	
	var strip = __webpack_require__(642);
	
	var overlay;
	if (typeof document !== 'undefined' && options.overlay) {
	  overlay = __webpack_require__(644);
	}
	
	function problems(type, obj) {
	  if (options.warn) console.warn("[HMR] bundle has " + type + ":");
	  var list = [];
	  obj[type].forEach(function(msg) {
	    var clean = strip(msg);
	    if (options.warn) console.warn("[HMR] " + clean);
	    list.push(clean);
	  });
	  if (overlay && type !== 'warnings') overlay.showProblems(list);
	}
	
	function success() {
	  if (overlay) overlay.clear();
	}
	
	var processUpdate = __webpack_require__(645);
	
	var customHandler;
	function processMessage(obj) {
	  if (obj.action == "building") {
	    if (options.log) console.log("[HMR] bundle rebuilding");
	  } else if (obj.action == "built") {
	    if (options.log) console.log("[HMR] bundle " + (obj.name ? obj.name + " " : "") + "rebuilt in " + obj.time + "ms");
	    if (obj.errors.length > 0) {
	      problems('errors', obj);
	    } else {
	      if (obj.warnings.length > 0) problems('warnings', obj);
	      success();
	
	      processUpdate(obj.hash, obj.modules, options);
	    }
	  } else if (customHandler) {
	    customHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?path=http://localhost:3000/__webpack_hmr", __webpack_require__(227)(module)))

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(640);
	exports.encode = exports.stringify = __webpack_require__(641);


/***/ },
/* 640 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 641 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(643)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 643 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
	};


/***/ },
/* 644 */
/***/ function(module, exports) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	clientOverlay.style.display = 'none';
	clientOverlay.style.background = '#fdd';
	clientOverlay.style.color = '#000';
	clientOverlay.style.whiteSpace = 'pre';
	clientOverlay.style.fontFamily = 'monospace';
	clientOverlay.style.position = 'fixed';
	clientOverlay.style.zIndex = 9999;
	clientOverlay.style.padding = '10px';
	clientOverlay.style.left = 0;
	clientOverlay.style.right = 0;
	clientOverlay.style.top = 0;
	clientOverlay.style.bottom = 0;
	clientOverlay.style.overflow = 'auto';
	
	if (document.body) {
	  document.body.appendChild(clientOverlay);
	}
	
	exports.showProblems =
	function showProblems(lines) {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'block';
	  lines.forEach(function(msg) {
	    var div = document.createElement('div');
	    div.textContent = msg;
	    clientOverlay.appendChild(div);
	  });
	};
	
	exports.clear =
	function clear() {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'none';
	};
	


/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var hmrDocsUrl = "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"; // eslint-disable-line max-len
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    module.hot.check(function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      module.hot.apply(applyOptions, function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      });
	    });
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)\n" +
	          "This is usually because the modules which have changed " +
	          "(and their parents) do not know how to hot reload themselves. " +
	          "See " + hmrDocsUrl + " for more details."
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ }
]);
//# sourceMappingURL=app.4c6852101de1aa6ac299.js.map