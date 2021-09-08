/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/components/auth/AuthComponent-ui.html":
/*!******************************************************!*\
  !*** ./public/components/auth/AuthComponent-ui.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../public/assets/logo.png */ "./public/assets/logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "\t<div class=\"card\">\n\t\t<div class=\"card-image\">\n\t\t\t<figure class=\"image is-4by3\">\n\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\t\t\t</figure>\n\t\t</div>\n\t\t<div class=\"card-content\">\n\t\t\t<div class=\"content\">\n\t\t\t\t<h1 class=\"title\">Iniciar sesión</h1>\n\t\t\t\t<div class=\"field\">\n\t\t\t\t\t<label class=\"label\">Correo</label>\n\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t<input autofocus=true class=\"input\" name=\"email\" id=\"emailInput\" type=\"text\" placeholder=\"Ingrese su correo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field\">\n\t\t\t\t\t<label class=\"label\">Contraseña </label>\n\t\t\t\t\t<div  is-password=true class=\"control has-icons-right\"> \n\t\t\t\t\t\t<input class=\"input\" id=\"passwordInput\" name=\"password\" type=\"password\">\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<span class=\"icon is-small is-right is-clickable\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-eye-slash\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field is-grouped\">\n\t\t\t\t\t<div class=\"control\"> \n\t\t\t\t\t\t<button class=\"button is-link\" id=\"loginBtn\">Iniciar Sesión</button>\n\t\t\t\t\t\t<a href=\"/signin\" class=\"button is-success\">Registrarse</a>\t\t\t\t\t \t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/api/authRequests.js":
/*!************************************!*\
  !*** ./public/api/authRequests.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const path = "/auth";

	
function createFormLoginOptions(body){

	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
		method: 'POST',
		body: body,
		headers: headers
	};
	return options;
}

function login(body, callBack){

 	const options = createFormLoginOptions(body);
	fetch(`${path}/loginuser`,options)
	.then(response => callBack(response));
}

function sigIn(body, callBack){

	const options = createFormLoginOptions(body);

	fetch(`${path}/signup`,options)
	.then(response => callBack(response));
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({login, sigIn});

/***/ }),

/***/ "./public/assets/logo.png":
/*!********************************!*\
  !*** ./public/assets/logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "824f6f609a2530740b6b.png";

/***/ }),

/***/ "./public/components/auth/AuthComponent.js":
/*!*************************************************!*\
  !*** ./public/components/auth/AuthComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardActionsComponent)
/* harmony export */ });
/* harmony import */ var _api_authRequests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/authRequests.js */ "./public/api/authRequests.js");
/* harmony import */ var _AuthComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthComponent-ui.html */ "./public/components/auth/AuthComponent-ui.html");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");




class CardActionsComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__.default{

  constructor(container) {
  	super(container, _AuthComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);
    this.uiElements = {
    	loginBtn:{id:"#loginBtn"},
    	passwordInput: {id:"#passwordInput", isPasswordInput:true},
    	emailInput: {id:"#emailInput"},
    };
    super.addForm("formAction",this.uiElements.loginBtn);
    super.addForm("formInput",this.uiElements.emailInput);
    super.addForm("formInput",this.uiElements.passwordInput);
  }

  init(){
  	super.init();
  	let loginBtn = this.uiElements.loginBtn;
    
    loginBtn.el.addEventListener('click', ()=>{
        loginBtn.load(true);
        super.block("formInput");
        super.block("formAction",loginBtn);
      	let formObject = super.getValues("formInput");
        let body = JSON.stringify(formObject);
      	_api_authRequests_js__WEBPACK_IMPORTED_MODULE_0__.default.login(body, (res)=>{
      		if(res.ok){
				    window.location.replace("/");
            return;
      		}
          super.unblock("formAction",loginBtn);
          super.unblock("formInput");
		      loginBtn.load(false);
      	});
    });

  }
}

/***/ }),

/***/ "./public/components/base_component/BaseComponent.js":
/*!***********************************************************!*\
  !*** ./public/components/base_component/BaseComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cssUtils.js */ "./public/utils/cssUtils.js");
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _decorators_InputIntegerDecorator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorators/InputIntegerDecorator.js */ "./public/decorators/InputIntegerDecorator.js");
/* harmony import */ var _decorators_WriteEditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators/WriteEditor.js */ "./public/decorators/WriteEditor.js");
/* harmony import */ var _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/DynamicClass.js */ "./public/utils/DynamicClass.js");
/* harmony import */ var _shared_ObjectUtils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ObjectUtils.mjs */ "./shared/ObjectUtils.mjs");







class BaseComponent{

  constructor(container, html, modelEditors ) {
    let content = html? html: this.baseHTML();
    this.container = container;
    container.innerHTML = content;
    this.htmlDecorators = [];
    this.htmlDecorators.push(new _decorators_InputIntegerDecorator_js__WEBPACK_IMPORTED_MODULE_2__.default());
    this.modelEditors = modelEditors;
    if(modelEditors){
      this.editors = [];
      this.writeEditor = new _decorators_WriteEditor_js__WEBPACK_IMPORTED_MODULE_3__.default();
    }
  }

  configureModelEditors(){

    for(let key in this.modelEditors){
      let modelName = this.modelEditors[key].name;
      let uiElements  = this.container.querySelectorAll(`[model*="${modelName}"]`);
      this.editors.push({model:modelName, uiElements: uiElements});
    }
  }


  setModel(modelName, model){
      let editor = this.editors.find(el=> el.model == modelName);
      editor.uiElements.forEach(el=>{
        let path = el.getAttribute("model");
        let value  = (0,_shared_ObjectUtils_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(path, model);
        this.writeEditor.write(el, value);
      })
  }

  /**
   * [getUIElements description]
   * @return {[type]} [description]
   */
   getUIElements(){
    return this.uiElements;
    }

    addForm(formName, element){
       if(!element){
        return;
      }
      if(!this[formName]){
        this[formName] = {formName:formName, uiElements:[]}
      }
      if(this[formName].uiElements.indexOf(element)<0){
        this[formName].uiElements.push(element);
      }
    }

 getValues(formName){
     if(!formName){
      return;
    }
    if(!this[formName]){
      return;
    }
    let formObject = {};
    for (let key in this[formName].uiElements) {
      let element = this[formName].uiElements[key].el;
      formObject[element.name] = element.value;
    }
    return formObject;
  }

  getFormElements(formName){
     if(!formName){
      return;
    }
    if(!this[formName]){
      return;
    }

    return this[formName].uiElements;
  }




  affectOthers(formName, component, callBack){
    if(this[formName]){
     for (let key in this[formName].uiElements) {
      if(this[formName].uiElements[key] != component){
       callBack(this[formName].uiElements[key]);
     }
   }
  }
}


invalidate(errors){
  for (let error in errors) {
    for (let key in this.uiElements) {
      let  inputName =this.uiElements[key].el.name;
      if( inputName==errors[error].typeOfError){
        this.uiElements[key].invalidate(true);
        this.uiElements[key].errorMessage(errors[error].errorMessage);
      }
    }
  }
}

  block(formName, component){
   const disable = (key)=>
   {
    key.el.disabled=true
  };
  this.affectOthers(formName, component, disable);
  }



  unblock(formName, element){
    const disable = (key)=>
    {
     key.el.disabled=false
   };
   this.affectOthers(formName, element, disable);
  }

  clearContent(formName,element){
    const callBack = (key)=>
    {
      key.clearHelper();
      key.invalidate(false);
      key.el.value = null;
    };
    this.affectOthers(formName, element, callBack);
  }

  clearAll(formName,element){
    const callBack = (key)=>
    {
      key.clearHelper();
      key.invalidate(false);
    };
    this.affectOthers(formName, element, callBack);
  }

  init(){
  	for (let key in this.uiElements) {

     this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);


     let el =    this.uiElements[key].el;
     this.htmlDecorators.forEach(decorator=>{
      if(decorator.predicate(el)){
        decorator.decorate(el);
      }
    });

     if(this.uiElements[key].decorator){
       let decoratorHolder = this.uiElements[key].decorator;

       let decorator =  
       new _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_4__.default(
        decoratorHolder.class,
        decoratorHolder.action);

       decorator.decorate(el);
     }


     let id=this.uiElements[key].id.substring(1);
     let query = `[for=${id}]`;
     let fieldContainer = this.container.querySelector(query);
     this.uiElements[key].fieldContainer = fieldContainer;


     let component =this.uiElements[key];

     if(component.listener){
      let listener  = component.listener;
      component.el.addEventListener(listener.event, listener.fallBack);
     }
     if(component.isFileInput){

      let fileLabelComponent =  fieldContainer.querySelector(".file-label");

      component.fileName = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.createFileNameLabel("...");

      fileLabelComponent.appendChild(component.fileName);
      component.el.addEventListener('change',(e=>{
        (0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(fieldContainer,true,"is-success");
        component.fileName.innerHTML = e.srcElement.files[0]?.name;
      }));
    }

    if(component.isPasswordInput){
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.configurePasswordInput( component.el,this.container);
    }

    component.helper = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.createP(`help ${_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.danger}`);


    component.invalidate =  function(flag){(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(component.el,flag,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.danger)};

    component.errorMessage = (message)=> {
      if(!component.fieldContainer){
        return;
      }
      component.helper.innerHTML = message;
      component.fieldContainer.hasHelper=true;
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleElement(component.helper,true, component.fieldContainer);
    };
    component.clearHelper = ()=> {

      if(!component.fieldContainer || !component.fieldContainer.hasHelper){
        return;
      }
      component.fieldContainer.hasHelper=false;
      component.helper.innerHTML = null;
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleElement(component.helper,false, component.fieldContainer);
      component.invalidate(false);
    };
    component.load = (flag)=>{(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(component.el,flag,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.loading)};
  }

  this.configureModelEditors();
}

baseHTML(){
  return `
  <section class="section">
  <div class="container">
  <div class="columns">
  <div class="column"></div>
  <div class="column is-four-fifths">
  <div class="hero">
  <div class="container" id="mainComponent">

  </div>
  </div>
  </div>
  <div class="column"></div>
  </div>
  </div>
  </section>
  `;
}
}


/***/ }),

/***/ "./public/decorators/BaseDecorator.js":
/*!********************************************!*\
  !*** ./public/decorators/BaseDecorator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseDecorator)
/* harmony export */ });

class BaseDecorator{

	constructor(events=[])
	{
		this.events =events;
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	let isHTML =  obj instanceof HTMLElement;
	 	return isHTML;
	 }

	/**
	 * [decorate description]
	 * @param  {[type]} element [description]
	 * @return {[type]}             [description]
	 */
	 decorate(element){

	 	for (let key in this.events) {
	 		let event = this.events[key];
	 		element.addEventListener(event.name,event.listener, false);	
	 	}

	 	console.log(`Decorating element; ${element}`);
	 }

	}


/***/ }),

/***/ "./public/decorators/InputDecorator.js":
/*!*********************************************!*\
  !*** ./public/decorators/InputDecorator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputDecorator)
/* harmony export */ });
/* harmony import */ var _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDecorator.js */ "./public/decorators/BaseDecorator.js");


class InputDecorator extends _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor(events)
	{
		super(events);
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	var tagName = obj.tagName.toLowerCase();
	 	let isInput	=  tagName == "input";
	 	return super.predicate(obj) && isInput;
	 }
	}


/***/ }),

/***/ "./public/decorators/InputIntegerDecorator.js":
/*!****************************************************!*\
  !*** ./public/decorators/InputIntegerDecorator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputIntegerDecorator)
/* harmony export */ });
/* harmony import */ var _InputDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputDecorator.js */ "./public/decorators/InputDecorator.js");



class InputIntegerDecorator extends _InputDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor()
	{
		
		let events = [];
		const onkeyListener = (event)=>{
			let srcElement = event.srcElement;
			if(srcElement.getAttribute("max")){
				let max = srcElement.getAttribute("max");
				let result = srcElement.value+""+event.key;
				if(Number(result)>max){
					event.preventDefault();
				}

			}
			if(event.key=="."){
				event.preventDefault();
			}
			return;
		}
		const onPaste = (event)=>{
			let paste = (event.clipboardData || window.clipboardData).getData('text');
			let srcElement = event.srcElement;
			if(srcElement.getAttribute("max")){
				let max = srcElement.getAttribute("max");
				let currentValue = srcElement.value;
				if(Number(paste+currentValue)>max){
					event.preventDefault();
				}
			}

			if(paste.includes(".")){
				event.preventDefault();	
			}
			return;
		}
		

		events.push({name:"keydown" ,listener:onkeyListener});
		events.push({name:"paste" ,listener:onPaste});
		super(events);
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	
	 	let isNumber  =  obj.type == "number";
	 	return super.predicate(obj) && isNumber;
	 }

	}


/***/ }),

/***/ "./public/decorators/WriteEditor.js":
/*!******************************************!*\
  !*** ./public/decorators/WriteEditor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WriteEditor)
/* harmony export */ });
/* harmony import */ var _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDecorator.js */ "./public/decorators/BaseDecorator.js");
/* harmony import */ var _InputDecorator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputDecorator.js */ "./public/decorators/InputDecorator.js");



class WriteEditor{
	constructor(){
		let base =  new _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default();
		let input =  new _InputDecorator_js__WEBPACK_IMPORTED_MODULE_1__.default();
		let normalHTML = (el, model)=>{
			el.innerHTML = model;
		};
		let inputHTML = (el, model)=>{
			el.value = model;
		};
		let chain = 
		[{predicate:base.predicate, action:normalHTML},
		{predicate:input.predicate, action:inputHTML}];

		this.chain = chain;
	}

	write(el, model){
		let last = null;
		
		for (var i = 0;  i < this.chain.length; i++) {
			let decorator = this.chain[i];
			if(decorator.predicate(el)){
				last = decorator.action;
			}
		}

		last(el,model);
	}
}


/***/ }),

/***/ "./public/utils/DomUtils.js":
/*!**********************************!*\
  !*** ./public/utils/DomUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_Curryng_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/Curryng.mjs */ "./shared/Curryng.mjs");


//ui-form utils

/**
 * [configurePasswordInput description]
 * @param  {HTMLElement} component [inputElement]
 * @param  {HTMLElement} container [parent element]
 */
function configurePasswordInput(component, container) {
    let divContainers =  [...container.querySelectorAll(`[is-password=true]`)];
    const parentContainer = divContainers.filter((el)=>{
    	console.log(el);
    	for(let i = 0; i < el.childNodes.length; i++){
    		let children = el.childNodes[i];
    		if( children === component){
    			return true;
    		}
    	}
    })[0];

    
    let iconBtn =  parentContainer.querySelectorAll("a")[0];
    let icon =  iconBtn.querySelectorAll("i")[0];
    let iconStore = true;
    iconBtn.addEventListener("click",()=>{
    	if(iconStore){
	    	icon.className = "fas fa-eye";
	    	component.type="text";	
    	}else{
    		icon.className = "fas fa-eye-slash";
    		component.type="password";
    	}
    	iconStore^=true;
    })

}
/**
 * [Remove all children from node]
 * @param  {[type]} parent [description]
 * @return {[type]}        [description]
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const _createAppend = (0,_shared_Curryng_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(createAppend);

function createRows(rows){
	let htmlRows = [];
	for(var i = 0; i< rows.length; i++){
		let row = createAppend("tr",null);
		for (let key in rows[i]) {
			let col = createAppend("th",null,create("abbr",null, rows[i][key]));
			row.appendChild(col);
		}
		
		htmlRows.push(row);
	}
	return htmlRows;
}

function createTable(columns){
	
	
	const _tEl =(el)=>{
		let _t = _createAppend(el,null);
		let theadResult = null;
		for(var i = 0; i< columns.length; i++){
		    if(!theadResult){
		      theadResult = _t(createAppend("th",null,create("abbr",null, columns[i])));
		    }else{
		      theadResult = theadResult(createAppend("th",null,create("abbr",null, columns[i])))
		    }  
		}
		return theadResult;
	}

	let _tBody = createAppend("tbody",null);
	let result = _createAppend("table","table is-hoverable")(_tEl("thead")())(_tBody)();
	result._tBody = _tBody;
	return result;
}



function createAppend(tagName, className,...args){
  let el  =  document.createElement(tagName);
  if(className&&className!=null){
  	el.className= className;	
  }
  args.forEach((i)=>el.appendChild(i));
  return   el;
}


function create(tagName, className, content){
	let div  =  document.createElement("div");
	className=className&&className!=null?`class="${className}"`:"";
	div.innerHTML = `<${tagName} ${className} ">${content}</${tagName}>`;
	return  div.firstChild;
}


function createP(className, content){
	return  create("p",className,content);
}


function fileNameLabel( content){
	return  create("p","file-name",content);
}

function toggleElement (p, flag, el){
	  	if(flag){
	  		el.appendChild(p);
	  	}else{
			el.removeChild(p);
	  	}
}

const DomUtils = {};

DomUtils.removeAllChildNodes = removeAllChildNodes;
DomUtils.create = create;
DomUtils.createP = createP;
DomUtils.toggleElement = toggleElement;
DomUtils.createFileNameLabel = fileNameLabel;
DomUtils.createTable = createTable;
DomUtils.createRows = createRows;
DomUtils.createAppend = createAppend;
DomUtils._createAppend = _createAppend;
DomUtils.configurePasswordInput = configurePasswordInput;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomUtils);

/***/ }),

/***/ "./public/utils/DynamicClass.js":
/*!**************************************!*\
  !*** ./public/utils/DynamicClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicClass)
/* harmony export */ });
class DynamicClass {
  constructor (klass, ...opts) {
    return new klass(...opts);
  }
}

/***/ }),

/***/ "./public/utils/cssUtils.js":
/*!**********************************!*\
  !*** ./public/utils/cssUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "danger": () => (/* binding */ danger),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "consoleStyle": () => (/* binding */ consoleStyle)
/* harmony export */ });
const loading = "is-loading";
const danger = "is-danger";
const consoleStyle =
 {
 	default:"color:#2c7800;font-family:system-ui;font-size:1rem;"
 }
function toggleClass (el, flag, newClass){
	let className = el.className;
	  	if(flag){
	  		el.className = className.concat(" "+newClass);
	  	}else{
			el.className = className.replace(newClass,"");
	  	}
}


/***/ }),

/***/ "./shared/Curryng.mjs":
/*!****************************!*\
  !*** ./shared/Curryng.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn, ...values) {
    return (...next) => (next.length) ? curry(fn, ...values, ...next) : fn(...values);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);

/***/ }),

/***/ "./shared/ObjectUtils.mjs":
/*!********************************!*\
  !*** ./shared/ObjectUtils.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getProperty(path, model){
	let paths  = path.split(".");
	return getNestedProperty(0, paths, model);

}
function getNestedProperty(index, paths, model){
	if(!model){
		return;
	}
	if(index>=paths.length){
		return model;
	}

	let property  = model[paths[index]];
	index++;
	return getNestedProperty(index, paths, property);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProperty);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"auth_app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./public/auth_app_src.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_auth_AuthComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/AuthComponent.js */ "./public/components/auth/AuthComponent.js");
// import handleError from "./utils/errorHandler.js"



function app(){
		configureComponents();
}


function configureComponents(){
	let authComponentContainer = document.querySelector("#mainModule-ui");	
	let componentsArray = [];
	componentsArray.push(new _components_auth_AuthComponent_js__WEBPACK_IMPORTED_MODULE_0__.default(authComponentContainer));
	 componentsArray.forEach(el=>{
	    console.log(el);
	    el.init();
	  });
} 

document.addEventListener('DOMContentLoaded', function() {
		app();
	
 } , false);
   
})();

/******/ })()
;
//# sourceMappingURL=auth_app.js.map