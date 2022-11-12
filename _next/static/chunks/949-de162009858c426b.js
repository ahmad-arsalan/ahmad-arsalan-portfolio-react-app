(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{5235:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDomainLocale=function(path,locale,locales,domainLocales){return!1},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},7913:function(module,exports,__webpack_require__){"use strict";var _slicedToArray=__webpack_require__(5696);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _interop_require_default=__webpack_require__(2648).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_default(__webpack_require__(7294)),_router=__webpack_require__(2199),_formatUrl=__webpack_require__(7389),_addLocale=__webpack_require__(1630),_routerContext=__webpack_require__(9541),_appRouterContext=__webpack_require__(6163),_useIntersection=__webpack_require__(7215),_getDomainLocale=__webpack_require__(5235),_addBasePath=__webpack_require__(729),prefetched=new Set;function prefetch(router,href,as,options){if(_router.isLocalURL(href)){if(!options.bypassPrefetchedCheck){var prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}Promise.resolve(router.prefetch(href,as,options)).catch(function(err){})}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:_formatUrl.formatUrl(urlObjOrString)}var Link=_react.default.forwardRef(function(props,forwardedRef){var children,child,hrefProp=props.href,asProp=props.as,childrenProp=props.children,prefetchProp=props.prefetch,passHref=props.passHref,replace=props.replace,shallow=props.shallow,scroll=props.scroll,locale=props.locale,_onClick=props.onClick,onMouseEnterProp=props.onMouseEnter,onTouchStartProp=props.onTouchStart,_props$legacyBehavior=props.legacyBehavior,legacyBehavior=void 0===_props$legacyBehavior?!0!==Boolean(!0):_props$legacyBehavior,restProps=_object_without_properties_loose(props,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);children=childrenProp,legacyBehavior&&("string"==typeof children||"number"==typeof children)&&(children=_react.default.createElement("a",null,children));var prefetchEnabled=!1!==prefetchProp,pagesRouter=_react.default.useContext(_routerContext.RouterContext),appRouter=_react.default.useContext(_appRouterContext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter,_react$default$useMem=_react.default.useMemo(function(){if(!pagesRouter){var _resolvedHref=formatStringOrUrl(hrefProp);return{href:_resolvedHref,as:asProp?formatStringOrUrl(asProp):_resolvedHref}}var _resolveHref2=_slicedToArray(_router.resolveHref(pagesRouter,hrefProp,!0),2),resolvedHref=_resolveHref2[0],resolvedAs=_resolveHref2[1];return{href:resolvedHref,as:asProp?_router.resolveHref(pagesRouter,asProp):resolvedAs||resolvedHref}},[pagesRouter,hrefProp,asProp]),href=_react$default$useMem.href,as=_react$default$useMem.as,previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);legacyBehavior&&(child=_react.default.Children.only(children));var childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,_useIntersection3=_slicedToArray(_useIntersection.useIntersection({rootMargin:"200px"}),3),setIntersectionRef=_useIntersection3[0],isVisible=_useIntersection3[1],resetVisible=_useIntersection3[2],setRef=_react.default.useCallback(function(el){(previousAs.current!==as||previousHref.current!==href)&&(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))},[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect(function(){router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale:locale})},[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router]);var childProps={ref:setRef,onClick:function(e){legacyBehavior||"function"!=typeof _onClick||_onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&!e.defaultPrevented&&function(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(target=(event=e).currentTarget.target)||"_self"===target)&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey&&(!event.nativeEvent||2!==event.nativeEvent.which)&&_router.isLocalURL(href)){e.preventDefault();var event,target,navigate=function(){"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow:shallow,locale:locale,scroll:scroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled})};isAppRouter?_react.default.startTransition(navigate):navigate()}}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled)},onMouseEnter:function(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale:locale,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale:locale,priority:!0,bypassPrefetchedCheck:!0})}};if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){var curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&_getDomainLocale.getDomainLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||_addBasePath.addBasePath(_addLocale.addLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",Object.assign({},restProps,childProps),children)});exports.default=Link,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},7215:function(module,exports,__webpack_require__){"use strict";var _slicedToArray=__webpack_require__(5696);Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIntersection=function(_ref){var rootRef=_ref.rootRef,rootMargin=_ref.rootMargin,isDisabled=_ref.disabled||!hasIntersectionObserver,_useState2=_slicedToArray(_react.useState(!1),2),visible=_useState2[0],setVisible=_useState2[1],_useState4=_slicedToArray(_react.useState(null),2),element=_useState4[0],setElement=_useState4[1];return _react.useEffect(function(){if(hasIntersectionObserver){if(!isDisabled&&!visible&&element&&element.tagName){var _createObserver,id,observer,elements;return id=(_createObserver=function(options){var instance,id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find(function(obj){return obj.root===id.root&&obj.margin===id.margin});if(existing&&(instance=observers.get(existing)))return instance;var elements=new Map;return instance={id:id,observer:new IntersectionObserver(function(entries){entries.forEach(function(entry){var callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)})},options),elements:elements},idList.push(id),observers.set(id,instance),instance}({root:null==rootRef?void 0:rootRef.current,rootMargin:rootMargin})).id,observer=_createObserver.observer,(elements=_createObserver.elements).set(element,function(isVisible){return isVisible&&setVisible(isVisible)}),observer.observe(element),function(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);var index=idList.findIndex(function(obj){return obj.root===id.root&&obj.margin===id.margin});index>-1&&idList.splice(index,1)}}}}else if(!visible){var idleCallback=_requestIdleCallback.requestIdleCallback(function(){return setVisible(!0)});return function(){return _requestIdleCallback.cancelIdleCallback(idleCallback)}}},[element,isDisabled,rootMargin,rootRef,visible]),[setElement,visible,_react.useCallback(function(){setVisible(!1)},[])]};var _react=__webpack_require__(7294),_requestIdleCallback=__webpack_require__(8065),hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},1664:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7913)},8357:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{w_:function(){return GenIcon}});var react=__webpack_require__(7294),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t};function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),function Tree2Element(tree){return tree&&tree.map(function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))})}(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,function(conf){return elem(conf)}):elem(DefaultContext)}}}]);