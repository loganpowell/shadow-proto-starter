goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32586 = coll;
var G__32587 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32586,G__32587) : shadow.dom.lazy_native_coll_seq.call(null,G__32586,G__32587));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32642 = arguments.length;
switch (G__32642) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32645 = arguments.length;
switch (G__32645) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32648 = arguments.length;
switch (G__32648) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32651 = arguments.length;
switch (G__32651) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32652 = document;
var G__32653 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32652,G__32653);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32654 = shadow.dom.dom_node(parent);
var G__32655 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32654,G__32655);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32657 = shadow.dom.dom_node(el);
var G__32658 = cls;
return goog.dom.classlist.add(G__32657,G__32658);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32659 = shadow.dom.dom_node(el);
var G__32660 = cls;
return goog.dom.classlist.remove(G__32659,G__32660);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32662 = arguments.length;
switch (G__32662) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32663 = shadow.dom.dom_node(el);
var G__32664 = cls;
return goog.dom.classlist.toggle(G__32663,G__32664);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32666){if((e32666 instanceof Object)){
var e = e32666;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32666;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32667 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32668 = null;
var count__32669 = (0);
var i__32670 = (0);
while(true){
if((i__32670 < count__32669)){
var el = chunk__32668.cljs$core$IIndexed$_nth$arity$2(null,i__32670);
var handler_32677__$1 = ((function (seq__32667,chunk__32668,count__32669,i__32670,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32667,chunk__32668,count__32669,i__32670,el))
;
var G__32671_32678 = el;
var G__32672_32679 = cljs.core.name(ev);
var G__32673_32680 = handler_32677__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32671_32678,G__32672_32679,G__32673_32680) : shadow.dom.dom_listen.call(null,G__32671_32678,G__32672_32679,G__32673_32680));


var G__32681 = seq__32667;
var G__32682 = chunk__32668;
var G__32683 = count__32669;
var G__32684 = (i__32670 + (1));
seq__32667 = G__32681;
chunk__32668 = G__32682;
count__32669 = G__32683;
i__32670 = G__32684;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32667);
if(temp__5457__auto__){
var seq__32667__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32667__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32667__$1);
var G__32685 = cljs.core.chunk_rest(seq__32667__$1);
var G__32686 = c__4319__auto__;
var G__32687 = cljs.core.count(c__4319__auto__);
var G__32688 = (0);
seq__32667 = G__32685;
chunk__32668 = G__32686;
count__32669 = G__32687;
i__32670 = G__32688;
continue;
} else {
var el = cljs.core.first(seq__32667__$1);
var handler_32689__$1 = ((function (seq__32667,chunk__32668,count__32669,i__32670,el,seq__32667__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32667,chunk__32668,count__32669,i__32670,el,seq__32667__$1,temp__5457__auto__))
;
var G__32674_32690 = el;
var G__32675_32691 = cljs.core.name(ev);
var G__32676_32692 = handler_32689__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32674_32690,G__32675_32691,G__32676_32692) : shadow.dom.dom_listen.call(null,G__32674_32690,G__32675_32691,G__32676_32692));


var G__32693 = cljs.core.next(seq__32667__$1);
var G__32694 = null;
var G__32695 = (0);
var G__32696 = (0);
seq__32667 = G__32693;
chunk__32668 = G__32694;
count__32669 = G__32695;
i__32670 = G__32696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32698 = arguments.length;
switch (G__32698) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32699 = shadow.dom.dom_node(el);
var G__32700 = cljs.core.name(ev);
var G__32701 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32699,G__32700,G__32701) : shadow.dom.dom_listen.call(null,G__32699,G__32700,G__32701));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32703 = shadow.dom.dom_node(el);
var G__32704 = cljs.core.name(ev);
var G__32705 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32703,G__32704,G__32705) : shadow.dom.dom_listen_remove.call(null,G__32703,G__32704,G__32705));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32706 = cljs.core.seq(events);
var chunk__32707 = null;
var count__32708 = (0);
var i__32709 = (0);
while(true){
if((i__32709 < count__32708)){
var vec__32710 = chunk__32707.cljs$core$IIndexed$_nth$arity$2(null,i__32709);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32716 = seq__32706;
var G__32717 = chunk__32707;
var G__32718 = count__32708;
var G__32719 = (i__32709 + (1));
seq__32706 = G__32716;
chunk__32707 = G__32717;
count__32708 = G__32718;
i__32709 = G__32719;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32706);
if(temp__5457__auto__){
var seq__32706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32706__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32706__$1);
var G__32720 = cljs.core.chunk_rest(seq__32706__$1);
var G__32721 = c__4319__auto__;
var G__32722 = cljs.core.count(c__4319__auto__);
var G__32723 = (0);
seq__32706 = G__32720;
chunk__32707 = G__32721;
count__32708 = G__32722;
i__32709 = G__32723;
continue;
} else {
var vec__32713 = cljs.core.first(seq__32706__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32724 = cljs.core.next(seq__32706__$1);
var G__32725 = null;
var G__32726 = (0);
var G__32727 = (0);
seq__32706 = G__32724;
chunk__32707 = G__32725;
count__32708 = G__32726;
i__32709 = G__32727;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32728 = cljs.core.seq(styles);
var chunk__32729 = null;
var count__32730 = (0);
var i__32731 = (0);
while(true){
if((i__32731 < count__32730)){
var vec__32732 = chunk__32729.cljs$core$IIndexed$_nth$arity$2(null,i__32731);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32732,(1),null);
var G__32735_32744 = dom;
var G__32736_32745 = cljs.core.name(k);
var G__32737_32746 = (((v == null))?"":v);
goog.style.setStyle(G__32735_32744,G__32736_32745,G__32737_32746);


var G__32749 = seq__32728;
var G__32750 = chunk__32729;
var G__32751 = count__32730;
var G__32752 = (i__32731 + (1));
seq__32728 = G__32749;
chunk__32729 = G__32750;
count__32730 = G__32751;
i__32731 = G__32752;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32728);
if(temp__5457__auto__){
var seq__32728__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32728__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32728__$1);
var G__32756 = cljs.core.chunk_rest(seq__32728__$1);
var G__32757 = c__4319__auto__;
var G__32758 = cljs.core.count(c__4319__auto__);
var G__32759 = (0);
seq__32728 = G__32756;
chunk__32729 = G__32757;
count__32730 = G__32758;
i__32731 = G__32759;
continue;
} else {
var vec__32738 = cljs.core.first(seq__32728__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32738,(1),null);
var G__32741_32761 = dom;
var G__32742_32762 = cljs.core.name(k);
var G__32743_32763 = (((v == null))?"":v);
goog.style.setStyle(G__32741_32761,G__32742_32762,G__32743_32763);


var G__32764 = cljs.core.next(seq__32728__$1);
var G__32765 = null;
var G__32766 = (0);
var G__32767 = (0);
seq__32728 = G__32764;
chunk__32729 = G__32765;
count__32730 = G__32766;
i__32731 = G__32767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32773_32795 = key;
var G__32773_32796__$1 = (((G__32773_32795 instanceof cljs.core.Keyword))?G__32773_32795.fqn:null);
switch (G__32773_32796__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32809 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_32809,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_32809,"aria-");
}
})())){
el.setAttribute(ks_32809,value);
} else {
(el[ks_32809] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32823 = shadow.dom.dom_node(el);
var G__32824 = cls;
return goog.dom.classlist.contains(G__32823,G__32824);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32836){
var map__32837 = p__32836;
var map__32837__$1 = ((((!((map__32837 == null)))?(((((map__32837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32837):map__32837);
var props = map__32837__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32848 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32851 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32851,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32851;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32856 = arguments.length;
switch (G__32856) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32862){
var vec__32863 = p__32862;
var seq__32864 = cljs.core.seq(vec__32863);
var first__32865 = cljs.core.first(seq__32864);
var seq__32864__$1 = cljs.core.next(seq__32864);
var nn = first__32865;
var first__32865__$1 = cljs.core.first(seq__32864__$1);
var seq__32864__$2 = cljs.core.next(seq__32864__$1);
var np = first__32865__$1;
var nc = seq__32864__$2;
var node = vec__32863;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32866 = nn;
var G__32867 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32866,G__32867) : create_fn.call(null,G__32866,G__32867));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32868 = nn;
var G__32869 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32868,G__32869) : create_fn.call(null,G__32868,G__32869));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32870 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32870,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32870,(1),null);
var seq__32873_32905 = cljs.core.seq(node_children);
var chunk__32874_32906 = null;
var count__32875_32907 = (0);
var i__32876_32908 = (0);
while(true){
if((i__32876_32908 < count__32875_32907)){
var child_struct_32910 = chunk__32874_32906.cljs$core$IIndexed$_nth$arity$2(null,i__32876_32908);
var children_32914 = shadow.dom.dom_node(child_struct_32910);
if(cljs.core.seq_QMARK_(children_32914)){
var seq__32877_32915 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32914));
var chunk__32879_32916 = null;
var count__32880_32917 = (0);
var i__32881_32918 = (0);
while(true){
if((i__32881_32918 < count__32880_32917)){
var child_32923 = chunk__32879_32916.cljs$core$IIndexed$_nth$arity$2(null,i__32881_32918);
if(cljs.core.truth_(child_32923)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32923);


var G__32924 = seq__32877_32915;
var G__32926 = chunk__32879_32916;
var G__32927 = count__32880_32917;
var G__32928 = (i__32881_32918 + (1));
seq__32877_32915 = G__32924;
chunk__32879_32916 = G__32926;
count__32880_32917 = G__32927;
i__32881_32918 = G__32928;
continue;
} else {
var G__32929 = seq__32877_32915;
var G__32930 = chunk__32879_32916;
var G__32931 = count__32880_32917;
var G__32932 = (i__32881_32918 + (1));
seq__32877_32915 = G__32929;
chunk__32879_32916 = G__32930;
count__32880_32917 = G__32931;
i__32881_32918 = G__32932;
continue;
}
} else {
var temp__5457__auto___32936 = cljs.core.seq(seq__32877_32915);
if(temp__5457__auto___32936){
var seq__32877_32937__$1 = temp__5457__auto___32936;
if(cljs.core.chunked_seq_QMARK_(seq__32877_32937__$1)){
var c__4319__auto___32939 = cljs.core.chunk_first(seq__32877_32937__$1);
var G__32940 = cljs.core.chunk_rest(seq__32877_32937__$1);
var G__32941 = c__4319__auto___32939;
var G__32942 = cljs.core.count(c__4319__auto___32939);
var G__32943 = (0);
seq__32877_32915 = G__32940;
chunk__32879_32916 = G__32941;
count__32880_32917 = G__32942;
i__32881_32918 = G__32943;
continue;
} else {
var child_32945 = cljs.core.first(seq__32877_32937__$1);
if(cljs.core.truth_(child_32945)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32945);


var G__32946 = cljs.core.next(seq__32877_32937__$1);
var G__32947 = null;
var G__32948 = (0);
var G__32949 = (0);
seq__32877_32915 = G__32946;
chunk__32879_32916 = G__32947;
count__32880_32917 = G__32948;
i__32881_32918 = G__32949;
continue;
} else {
var G__32950 = cljs.core.next(seq__32877_32937__$1);
var G__32951 = null;
var G__32952 = (0);
var G__32953 = (0);
seq__32877_32915 = G__32950;
chunk__32879_32916 = G__32951;
count__32880_32917 = G__32952;
i__32881_32918 = G__32953;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32914);
}


var G__32955 = seq__32873_32905;
var G__32956 = chunk__32874_32906;
var G__32957 = count__32875_32907;
var G__32958 = (i__32876_32908 + (1));
seq__32873_32905 = G__32955;
chunk__32874_32906 = G__32956;
count__32875_32907 = G__32957;
i__32876_32908 = G__32958;
continue;
} else {
var temp__5457__auto___32962 = cljs.core.seq(seq__32873_32905);
if(temp__5457__auto___32962){
var seq__32873_32963__$1 = temp__5457__auto___32962;
if(cljs.core.chunked_seq_QMARK_(seq__32873_32963__$1)){
var c__4319__auto___32964 = cljs.core.chunk_first(seq__32873_32963__$1);
var G__32965 = cljs.core.chunk_rest(seq__32873_32963__$1);
var G__32966 = c__4319__auto___32964;
var G__32967 = cljs.core.count(c__4319__auto___32964);
var G__32968 = (0);
seq__32873_32905 = G__32965;
chunk__32874_32906 = G__32966;
count__32875_32907 = G__32967;
i__32876_32908 = G__32968;
continue;
} else {
var child_struct_32972 = cljs.core.first(seq__32873_32963__$1);
var children_32973 = shadow.dom.dom_node(child_struct_32972);
if(cljs.core.seq_QMARK_(children_32973)){
var seq__32887_32977 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32973));
var chunk__32889_32978 = null;
var count__32890_32979 = (0);
var i__32891_32980 = (0);
while(true){
if((i__32891_32980 < count__32890_32979)){
var child_32984 = chunk__32889_32978.cljs$core$IIndexed$_nth$arity$2(null,i__32891_32980);
if(cljs.core.truth_(child_32984)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32984);


var G__32988 = seq__32887_32977;
var G__32989 = chunk__32889_32978;
var G__32990 = count__32890_32979;
var G__32991 = (i__32891_32980 + (1));
seq__32887_32977 = G__32988;
chunk__32889_32978 = G__32989;
count__32890_32979 = G__32990;
i__32891_32980 = G__32991;
continue;
} else {
var G__32992 = seq__32887_32977;
var G__32993 = chunk__32889_32978;
var G__32994 = count__32890_32979;
var G__32995 = (i__32891_32980 + (1));
seq__32887_32977 = G__32992;
chunk__32889_32978 = G__32993;
count__32890_32979 = G__32994;
i__32891_32980 = G__32995;
continue;
}
} else {
var temp__5457__auto___32996__$1 = cljs.core.seq(seq__32887_32977);
if(temp__5457__auto___32996__$1){
var seq__32887_32997__$1 = temp__5457__auto___32996__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32887_32997__$1)){
var c__4319__auto___33001 = cljs.core.chunk_first(seq__32887_32997__$1);
var G__33002 = cljs.core.chunk_rest(seq__32887_32997__$1);
var G__33003 = c__4319__auto___33001;
var G__33004 = cljs.core.count(c__4319__auto___33001);
var G__33005 = (0);
seq__32887_32977 = G__33002;
chunk__32889_32978 = G__33003;
count__32890_32979 = G__33004;
i__32891_32980 = G__33005;
continue;
} else {
var child_33006 = cljs.core.first(seq__32887_32997__$1);
if(cljs.core.truth_(child_33006)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33006);


var G__33010 = cljs.core.next(seq__32887_32997__$1);
var G__33011 = null;
var G__33012 = (0);
var G__33013 = (0);
seq__32887_32977 = G__33010;
chunk__32889_32978 = G__33011;
count__32890_32979 = G__33012;
i__32891_32980 = G__33013;
continue;
} else {
var G__33014 = cljs.core.next(seq__32887_32997__$1);
var G__33015 = null;
var G__33016 = (0);
var G__33017 = (0);
seq__32887_32977 = G__33014;
chunk__32889_32978 = G__33015;
count__32890_32979 = G__33016;
i__32891_32980 = G__33017;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32973);
}


var G__33018 = cljs.core.next(seq__32873_32963__$1);
var G__33019 = null;
var G__33020 = (0);
var G__33021 = (0);
seq__32873_32905 = G__33018;
chunk__32874_32906 = G__33019;
count__32875_32907 = G__33020;
i__32876_32908 = G__33021;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33049 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33049);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33060 = cljs.core.seq(node);
var chunk__33061 = null;
var count__33062 = (0);
var i__33063 = (0);
while(true){
if((i__33063 < count__33062)){
var n = chunk__33061.cljs$core$IIndexed$_nth$arity$2(null,i__33063);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33074 = seq__33060;
var G__33075 = chunk__33061;
var G__33076 = count__33062;
var G__33077 = (i__33063 + (1));
seq__33060 = G__33074;
chunk__33061 = G__33075;
count__33062 = G__33076;
i__33063 = G__33077;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33060);
if(temp__5457__auto__){
var seq__33060__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33060__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__33060__$1);
var G__33078 = cljs.core.chunk_rest(seq__33060__$1);
var G__33079 = c__4319__auto__;
var G__33080 = cljs.core.count(c__4319__auto__);
var G__33081 = (0);
seq__33060 = G__33078;
chunk__33061 = G__33079;
count__33062 = G__33080;
i__33063 = G__33081;
continue;
} else {
var n = cljs.core.first(seq__33060__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33082 = cljs.core.next(seq__33060__$1);
var G__33083 = null;
var G__33084 = (0);
var G__33085 = (0);
seq__33060 = G__33082;
chunk__33061 = G__33083;
count__33062 = G__33084;
i__33063 = G__33085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33086 = shadow.dom.dom_node(new$);
var G__33087 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33086,G__33087);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33092 = arguments.length;
switch (G__33092) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33095 = arguments.length;
switch (G__33095) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33102 = arguments.length;
var i__4500__auto___33103 = (0);
while(true){
if((i__4500__auto___33103 < len__4499__auto___33102)){
args__4502__auto__.push((arguments[i__4500__auto___33103]));

var G__33104 = (i__4500__auto___33103 + (1));
i__4500__auto___33103 = G__33104;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33098_33105 = cljs.core.seq(nodes);
var chunk__33099_33106 = null;
var count__33100_33107 = (0);
var i__33101_33108 = (0);
while(true){
if((i__33101_33108 < count__33100_33107)){
var node_33109 = chunk__33099_33106.cljs$core$IIndexed$_nth$arity$2(null,i__33101_33108);
fragment.appendChild(shadow.dom._to_dom(node_33109));


var G__33110 = seq__33098_33105;
var G__33111 = chunk__33099_33106;
var G__33112 = count__33100_33107;
var G__33113 = (i__33101_33108 + (1));
seq__33098_33105 = G__33110;
chunk__33099_33106 = G__33111;
count__33100_33107 = G__33112;
i__33101_33108 = G__33113;
continue;
} else {
var temp__5457__auto___33114 = cljs.core.seq(seq__33098_33105);
if(temp__5457__auto___33114){
var seq__33098_33115__$1 = temp__5457__auto___33114;
if(cljs.core.chunked_seq_QMARK_(seq__33098_33115__$1)){
var c__4319__auto___33116 = cljs.core.chunk_first(seq__33098_33115__$1);
var G__33117 = cljs.core.chunk_rest(seq__33098_33115__$1);
var G__33118 = c__4319__auto___33116;
var G__33119 = cljs.core.count(c__4319__auto___33116);
var G__33120 = (0);
seq__33098_33105 = G__33117;
chunk__33099_33106 = G__33118;
count__33100_33107 = G__33119;
i__33101_33108 = G__33120;
continue;
} else {
var node_33121 = cljs.core.first(seq__33098_33115__$1);
fragment.appendChild(shadow.dom._to_dom(node_33121));


var G__33122 = cljs.core.next(seq__33098_33115__$1);
var G__33123 = null;
var G__33124 = (0);
var G__33125 = (0);
seq__33098_33105 = G__33122;
chunk__33099_33106 = G__33123;
count__33100_33107 = G__33124;
i__33101_33108 = G__33125;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33097){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33097));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33126_33140 = cljs.core.seq(scripts);
var chunk__33127_33141 = null;
var count__33128_33142 = (0);
var i__33129_33143 = (0);
while(true){
if((i__33129_33143 < count__33128_33142)){
var vec__33130_33144 = chunk__33127_33141.cljs$core$IIndexed$_nth$arity$2(null,i__33129_33143);
var script_tag_33145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33144,(0),null);
var script_body_33146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33144,(1),null);
eval(script_body_33146);


var G__33147 = seq__33126_33140;
var G__33148 = chunk__33127_33141;
var G__33149 = count__33128_33142;
var G__33150 = (i__33129_33143 + (1));
seq__33126_33140 = G__33147;
chunk__33127_33141 = G__33148;
count__33128_33142 = G__33149;
i__33129_33143 = G__33150;
continue;
} else {
var temp__5457__auto___33151 = cljs.core.seq(seq__33126_33140);
if(temp__5457__auto___33151){
var seq__33126_33152__$1 = temp__5457__auto___33151;
if(cljs.core.chunked_seq_QMARK_(seq__33126_33152__$1)){
var c__4319__auto___33153 = cljs.core.chunk_first(seq__33126_33152__$1);
var G__33154 = cljs.core.chunk_rest(seq__33126_33152__$1);
var G__33155 = c__4319__auto___33153;
var G__33156 = cljs.core.count(c__4319__auto___33153);
var G__33157 = (0);
seq__33126_33140 = G__33154;
chunk__33127_33141 = G__33155;
count__33128_33142 = G__33156;
i__33129_33143 = G__33157;
continue;
} else {
var vec__33133_33158 = cljs.core.first(seq__33126_33152__$1);
var script_tag_33159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33158,(0),null);
var script_body_33160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33158,(1),null);
eval(script_body_33160);


var G__33161 = cljs.core.next(seq__33126_33152__$1);
var G__33162 = null;
var G__33163 = (0);
var G__33164 = (0);
seq__33126_33140 = G__33161;
chunk__33127_33141 = G__33162;
count__33128_33142 = G__33163;
i__33129_33143 = G__33164;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33136){
var vec__33137 = p__33136;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33165 = shadow.dom.dom_node(el);
var G__33166 = cls;
return goog.dom.getAncestorByClass(G__33165,G__33166);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33168 = arguments.length;
switch (G__33168) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33169 = shadow.dom.dom_node(el);
var G__33170 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33169,G__33170);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33171 = shadow.dom.dom_node(el);
var G__33172 = cljs.core.name(tag);
var G__33173 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33171,G__33172,G__33173);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33175 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33175);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33176 = shadow.dom.dom_node(dom);
var G__33177 = value;
return goog.dom.forms.setValue(G__33176,G__33177);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33178 = cljs.core.seq(style_keys);
var chunk__33179 = null;
var count__33180 = (0);
var i__33181 = (0);
while(true){
if((i__33181 < count__33180)){
var it = chunk__33179.cljs$core$IIndexed$_nth$arity$2(null,i__33181);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33182 = seq__33178;
var G__33183 = chunk__33179;
var G__33184 = count__33180;
var G__33185 = (i__33181 + (1));
seq__33178 = G__33182;
chunk__33179 = G__33183;
count__33180 = G__33184;
i__33181 = G__33185;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33178);
if(temp__5457__auto__){
var seq__33178__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33178__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__33178__$1);
var G__33186 = cljs.core.chunk_rest(seq__33178__$1);
var G__33187 = c__4319__auto__;
var G__33188 = cljs.core.count(c__4319__auto__);
var G__33189 = (0);
seq__33178 = G__33186;
chunk__33179 = G__33187;
count__33180 = G__33188;
i__33181 = G__33189;
continue;
} else {
var it = cljs.core.first(seq__33178__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33190 = cljs.core.next(seq__33178__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__33178 = G__33190;
chunk__33179 = G__33191;
count__33180 = G__33192;
i__33181 = G__33193;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12151__auto__,k__12152__auto__){
var self__ = this;
var this__12151__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12151__auto____$1,k__12152__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12153__auto__,k33195,else__12154__auto__){
var self__ = this;
var this__12153__auto____$1 = this;
var G__33199 = k33195;
var G__33199__$1 = (((G__33199 instanceof cljs.core.Keyword))?G__33199.fqn:null);
switch (G__33199__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33195,else__12154__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12165__auto__,writer__12166__auto__,opts__12167__auto__){
var self__ = this;
var this__12165__auto____$1 = this;
var pr_pair__12168__auto__ = ((function (this__12165__auto____$1){
return (function (keyval__12169__auto__){
return cljs.core.pr_sequential_writer(writer__12166__auto__,cljs.core.pr_writer,""," ","",opts__12167__auto__,keyval__12169__auto__);
});})(this__12165__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12166__auto__,pr_pair__12168__auto__,"#shadow.dom.Coordinate{",", ","}",opts__12167__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33194){
var self__ = this;
var G__33194__$1 = this;
return (new cljs.core.RecordIter((0),G__33194__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12149__auto__){
var self__ = this;
var this__12149__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12146__auto__){
var self__ = this;
var this__12146__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12147__auto__){
var self__ = this;
var this__12147__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__33200 = ((function (h__4030__auto__,this__12147__auto____$1){
return (function (coll__12148__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__12148__auto__));
});})(h__4030__auto__,this__12147__auto____$1))
;
return fexpr__33200(this__12147__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33196,other33197){
var self__ = this;
var this33196__$1 = this;
return ((!((other33197 == null))) && ((this33196__$1.constructor === other33197.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33196__$1.x,other33197.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33196__$1.y,other33197.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33196__$1.__extmap,other33197.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12160__auto__,k__12161__auto__){
var self__ = this;
var this__12160__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__12161__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12160__auto____$1),self__.__meta),k__12161__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12161__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12158__auto__,k__12159__auto__,G__33194){
var self__ = this;
var this__12158__auto____$1 = this;
var pred__33201 = cljs.core.keyword_identical_QMARK_;
var expr__33202 = k__12159__auto__;
if(cljs.core.truth_((function (){var G__33204 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33205 = expr__33202;
return (pred__33201.cljs$core$IFn$_invoke$arity$2 ? pred__33201.cljs$core$IFn$_invoke$arity$2(G__33204,G__33205) : pred__33201.call(null,G__33204,G__33205));
})())){
return (new shadow.dom.Coordinate(G__33194,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33206 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33207 = expr__33202;
return (pred__33201.cljs$core$IFn$_invoke$arity$2 ? pred__33201.cljs$core$IFn$_invoke$arity$2(G__33206,G__33207) : pred__33201.call(null,G__33206,G__33207));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33194,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12159__auto__,G__33194),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12150__auto__,G__33194){
var self__ = this;
var this__12150__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33194,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12156__auto__,entry__12157__auto__){
var self__ = this;
var this__12156__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12157__auto__)){
return cljs.core._assoc(this__12156__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12157__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12157__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12156__auto____$1,entry__12157__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33198){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33198),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33198),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33198,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33209 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33209);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33210 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33210);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33211 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33211);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12151__auto__,k__12152__auto__){
var self__ = this;
var this__12151__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12151__auto____$1,k__12152__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12153__auto__,k33213,else__12154__auto__){
var self__ = this;
var this__12153__auto____$1 = this;
var G__33217 = k33213;
var G__33217__$1 = (((G__33217 instanceof cljs.core.Keyword))?G__33217.fqn:null);
switch (G__33217__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33213,else__12154__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12165__auto__,writer__12166__auto__,opts__12167__auto__){
var self__ = this;
var this__12165__auto____$1 = this;
var pr_pair__12168__auto__ = ((function (this__12165__auto____$1){
return (function (keyval__12169__auto__){
return cljs.core.pr_sequential_writer(writer__12166__auto__,cljs.core.pr_writer,""," ","",opts__12167__auto__,keyval__12169__auto__);
});})(this__12165__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12166__auto__,pr_pair__12168__auto__,"#shadow.dom.Size{",", ","}",opts__12167__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33212){
var self__ = this;
var G__33212__$1 = this;
return (new cljs.core.RecordIter((0),G__33212__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12149__auto__){
var self__ = this;
var this__12149__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12146__auto__){
var self__ = this;
var this__12146__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12147__auto__){
var self__ = this;
var this__12147__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__33218 = ((function (h__4030__auto__,this__12147__auto____$1){
return (function (coll__12148__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__12148__auto__));
});})(h__4030__auto__,this__12147__auto____$1))
;
return fexpr__33218(this__12147__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33214,other33215){
var self__ = this;
var this33214__$1 = this;
return ((!((other33215 == null))) && ((this33214__$1.constructor === other33215.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33214__$1.w,other33215.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33214__$1.h,other33215.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33214__$1.__extmap,other33215.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12160__auto__,k__12161__auto__){
var self__ = this;
var this__12160__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__12161__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12160__auto____$1),self__.__meta),k__12161__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12161__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12158__auto__,k__12159__auto__,G__33212){
var self__ = this;
var this__12158__auto____$1 = this;
var pred__33219 = cljs.core.keyword_identical_QMARK_;
var expr__33220 = k__12159__auto__;
if(cljs.core.truth_((function (){var G__33222 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33223 = expr__33220;
return (pred__33219.cljs$core$IFn$_invoke$arity$2 ? pred__33219.cljs$core$IFn$_invoke$arity$2(G__33222,G__33223) : pred__33219.call(null,G__33222,G__33223));
})())){
return (new shadow.dom.Size(G__33212,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33224 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33225 = expr__33220;
return (pred__33219.cljs$core$IFn$_invoke$arity$2 ? pred__33219.cljs$core$IFn$_invoke$arity$2(G__33224,G__33225) : pred__33219.call(null,G__33224,G__33225));
})())){
return (new shadow.dom.Size(self__.w,G__33212,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12159__auto__,G__33212),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12150__auto__,G__33212){
var self__ = this;
var this__12150__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33212,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12156__auto__,entry__12157__auto__){
var self__ = this;
var this__12156__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12157__auto__)){
return cljs.core._assoc(this__12156__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12157__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12157__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12156__auto____$1,entry__12157__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33216){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33216),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33216),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33216,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33227 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33227);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__33228 = (i + (1));
var G__33229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33228;
ret = G__33229;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33230){
var vec__33231 = p__33230;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33235 = arguments.length;
switch (G__33235) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33237_33239 = new_node;
var G__33238_33240 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33237_33239,G__33238_33240);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33241_33243 = new_node;
var G__33242_33244 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33241_33243,G__33242_33244);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33245 = ps;
var G__33246 = (i + (1));
el__$1 = G__33245;
i = G__33246;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33247 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33247);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33248 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33248);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33249 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33249);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33250 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33253_33263 = cljs.core.seq(props);
var chunk__33254_33264 = null;
var count__33255_33265 = (0);
var i__33256_33266 = (0);
while(true){
if((i__33256_33266 < count__33255_33265)){
var vec__33257_33267 = chunk__33254_33264.cljs$core$IIndexed$_nth$arity$2(null,i__33256_33266);
var k_33268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257_33267,(0),null);
var v_33269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257_33267,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_33268);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33268),v_33269);


var G__33270 = seq__33253_33263;
var G__33271 = chunk__33254_33264;
var G__33272 = count__33255_33265;
var G__33273 = (i__33256_33266 + (1));
seq__33253_33263 = G__33270;
chunk__33254_33264 = G__33271;
count__33255_33265 = G__33272;
i__33256_33266 = G__33273;
continue;
} else {
var temp__5457__auto___33274 = cljs.core.seq(seq__33253_33263);
if(temp__5457__auto___33274){
var seq__33253_33275__$1 = temp__5457__auto___33274;
if(cljs.core.chunked_seq_QMARK_(seq__33253_33275__$1)){
var c__4319__auto___33276 = cljs.core.chunk_first(seq__33253_33275__$1);
var G__33277 = cljs.core.chunk_rest(seq__33253_33275__$1);
var G__33278 = c__4319__auto___33276;
var G__33279 = cljs.core.count(c__4319__auto___33276);
var G__33280 = (0);
seq__33253_33263 = G__33277;
chunk__33254_33264 = G__33278;
count__33255_33265 = G__33279;
i__33256_33266 = G__33280;
continue;
} else {
var vec__33260_33281 = cljs.core.first(seq__33253_33275__$1);
var k_33282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260_33281,(0),null);
var v_33283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260_33281,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_33282);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33282),v_33283);


var G__33284 = cljs.core.next(seq__33253_33275__$1);
var G__33285 = null;
var G__33286 = (0);
var G__33287 = (0);
seq__33253_33263 = G__33284;
chunk__33254_33264 = G__33285;
count__33255_33265 = G__33286;
i__33256_33266 = G__33287;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33289 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33289,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33289,(1),null);
var seq__33292_33310 = cljs.core.seq(node_children);
var chunk__33294_33311 = null;
var count__33295_33312 = (0);
var i__33296_33313 = (0);
while(true){
if((i__33296_33313 < count__33295_33312)){
var child_struct_33314 = chunk__33294_33311.cljs$core$IIndexed$_nth$arity$2(null,i__33296_33313);
if(!((child_struct_33314 == null))){
if(typeof child_struct_33314 === 'string'){
var text_33315 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33315),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_33314)].join(''));
} else {
var children_33316 = shadow.dom.svg_node(child_struct_33314);
if(cljs.core.seq_QMARK_(children_33316)){
var seq__33298_33317 = cljs.core.seq(children_33316);
var chunk__33300_33318 = null;
var count__33301_33319 = (0);
var i__33302_33320 = (0);
while(true){
if((i__33302_33320 < count__33301_33319)){
var child_33321 = chunk__33300_33318.cljs$core$IIndexed$_nth$arity$2(null,i__33302_33320);
if(cljs.core.truth_(child_33321)){
node.appendChild(child_33321);


var G__33322 = seq__33298_33317;
var G__33323 = chunk__33300_33318;
var G__33324 = count__33301_33319;
var G__33325 = (i__33302_33320 + (1));
seq__33298_33317 = G__33322;
chunk__33300_33318 = G__33323;
count__33301_33319 = G__33324;
i__33302_33320 = G__33325;
continue;
} else {
var G__33326 = seq__33298_33317;
var G__33327 = chunk__33300_33318;
var G__33328 = count__33301_33319;
var G__33329 = (i__33302_33320 + (1));
seq__33298_33317 = G__33326;
chunk__33300_33318 = G__33327;
count__33301_33319 = G__33328;
i__33302_33320 = G__33329;
continue;
}
} else {
var temp__5457__auto___33330 = cljs.core.seq(seq__33298_33317);
if(temp__5457__auto___33330){
var seq__33298_33331__$1 = temp__5457__auto___33330;
if(cljs.core.chunked_seq_QMARK_(seq__33298_33331__$1)){
var c__4319__auto___33332 = cljs.core.chunk_first(seq__33298_33331__$1);
var G__33333 = cljs.core.chunk_rest(seq__33298_33331__$1);
var G__33334 = c__4319__auto___33332;
var G__33335 = cljs.core.count(c__4319__auto___33332);
var G__33336 = (0);
seq__33298_33317 = G__33333;
chunk__33300_33318 = G__33334;
count__33301_33319 = G__33335;
i__33302_33320 = G__33336;
continue;
} else {
var child_33337 = cljs.core.first(seq__33298_33331__$1);
if(cljs.core.truth_(child_33337)){
node.appendChild(child_33337);


var G__33338 = cljs.core.next(seq__33298_33331__$1);
var G__33339 = null;
var G__33340 = (0);
var G__33341 = (0);
seq__33298_33317 = G__33338;
chunk__33300_33318 = G__33339;
count__33301_33319 = G__33340;
i__33302_33320 = G__33341;
continue;
} else {
var G__33342 = cljs.core.next(seq__33298_33331__$1);
var G__33343 = null;
var G__33344 = (0);
var G__33345 = (0);
seq__33298_33317 = G__33342;
chunk__33300_33318 = G__33343;
count__33301_33319 = G__33344;
i__33302_33320 = G__33345;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33316);
}
}


var G__33346 = seq__33292_33310;
var G__33347 = chunk__33294_33311;
var G__33348 = count__33295_33312;
var G__33349 = (i__33296_33313 + (1));
seq__33292_33310 = G__33346;
chunk__33294_33311 = G__33347;
count__33295_33312 = G__33348;
i__33296_33313 = G__33349;
continue;
} else {
var G__33350 = seq__33292_33310;
var G__33351 = chunk__33294_33311;
var G__33352 = count__33295_33312;
var G__33353 = (i__33296_33313 + (1));
seq__33292_33310 = G__33350;
chunk__33294_33311 = G__33351;
count__33295_33312 = G__33352;
i__33296_33313 = G__33353;
continue;
}
} else {
var temp__5457__auto___33354 = cljs.core.seq(seq__33292_33310);
if(temp__5457__auto___33354){
var seq__33292_33355__$1 = temp__5457__auto___33354;
if(cljs.core.chunked_seq_QMARK_(seq__33292_33355__$1)){
var c__4319__auto___33356 = cljs.core.chunk_first(seq__33292_33355__$1);
var G__33357 = cljs.core.chunk_rest(seq__33292_33355__$1);
var G__33358 = c__4319__auto___33356;
var G__33359 = cljs.core.count(c__4319__auto___33356);
var G__33360 = (0);
seq__33292_33310 = G__33357;
chunk__33294_33311 = G__33358;
count__33295_33312 = G__33359;
i__33296_33313 = G__33360;
continue;
} else {
var child_struct_33361 = cljs.core.first(seq__33292_33355__$1);
if(!((child_struct_33361 == null))){
if(typeof child_struct_33361 === 'string'){
var text_33362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33362),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_33361)].join(''));
} else {
var children_33363 = shadow.dom.svg_node(child_struct_33361);
if(cljs.core.seq_QMARK_(children_33363)){
var seq__33304_33364 = cljs.core.seq(children_33363);
var chunk__33306_33365 = null;
var count__33307_33366 = (0);
var i__33308_33367 = (0);
while(true){
if((i__33308_33367 < count__33307_33366)){
var child_33368 = chunk__33306_33365.cljs$core$IIndexed$_nth$arity$2(null,i__33308_33367);
if(cljs.core.truth_(child_33368)){
node.appendChild(child_33368);


var G__33369 = seq__33304_33364;
var G__33370 = chunk__33306_33365;
var G__33371 = count__33307_33366;
var G__33372 = (i__33308_33367 + (1));
seq__33304_33364 = G__33369;
chunk__33306_33365 = G__33370;
count__33307_33366 = G__33371;
i__33308_33367 = G__33372;
continue;
} else {
var G__33373 = seq__33304_33364;
var G__33374 = chunk__33306_33365;
var G__33375 = count__33307_33366;
var G__33376 = (i__33308_33367 + (1));
seq__33304_33364 = G__33373;
chunk__33306_33365 = G__33374;
count__33307_33366 = G__33375;
i__33308_33367 = G__33376;
continue;
}
} else {
var temp__5457__auto___33377__$1 = cljs.core.seq(seq__33304_33364);
if(temp__5457__auto___33377__$1){
var seq__33304_33378__$1 = temp__5457__auto___33377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33304_33378__$1)){
var c__4319__auto___33379 = cljs.core.chunk_first(seq__33304_33378__$1);
var G__33380 = cljs.core.chunk_rest(seq__33304_33378__$1);
var G__33381 = c__4319__auto___33379;
var G__33382 = cljs.core.count(c__4319__auto___33379);
var G__33383 = (0);
seq__33304_33364 = G__33380;
chunk__33306_33365 = G__33381;
count__33307_33366 = G__33382;
i__33308_33367 = G__33383;
continue;
} else {
var child_33384 = cljs.core.first(seq__33304_33378__$1);
if(cljs.core.truth_(child_33384)){
node.appendChild(child_33384);


var G__33385 = cljs.core.next(seq__33304_33378__$1);
var G__33386 = null;
var G__33387 = (0);
var G__33388 = (0);
seq__33304_33364 = G__33385;
chunk__33306_33365 = G__33386;
count__33307_33366 = G__33387;
i__33308_33367 = G__33388;
continue;
} else {
var G__33389 = cljs.core.next(seq__33304_33378__$1);
var G__33390 = null;
var G__33391 = (0);
var G__33392 = (0);
seq__33304_33364 = G__33389;
chunk__33306_33365 = G__33390;
count__33307_33366 = G__33391;
i__33308_33367 = G__33392;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33363);
}
}


var G__33393 = cljs.core.next(seq__33292_33355__$1);
var G__33394 = null;
var G__33395 = (0);
var G__33396 = (0);
seq__33292_33310 = G__33393;
chunk__33294_33311 = G__33394;
count__33295_33312 = G__33395;
i__33296_33313 = G__33396;
continue;
} else {
var G__33397 = cljs.core.next(seq__33292_33355__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__33292_33310 = G__33397;
chunk__33294_33311 = G__33398;
count__33295_33312 = G__33399;
i__33296_33313 = G__33400;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33401_33407 = shadow.dom._to_svg;
var G__33402_33408 = "string";
var G__33403_33409 = ((function (G__33401_33407,G__33402_33408){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33401_33407,G__33402_33408))
;
goog.object.set(G__33401_33407,G__33402_33408,G__33403_33409);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33404_33410 = shadow.dom._to_svg;
var G__33405_33411 = "null";
var G__33406_33412 = ((function (G__33404_33410,G__33405_33411){
return (function (_){
return null;
});})(G__33404_33410,G__33405_33411))
;
goog.object.set(G__33404_33410,G__33405_33411,G__33406_33412);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33415 = arguments.length;
var i__4500__auto___33416 = (0);
while(true){
if((i__4500__auto___33416 < len__4499__auto___33415)){
args__4502__auto__.push((arguments[i__4500__auto___33416]));

var G__33417 = (i__4500__auto___33416 + (1));
i__4500__auto___33416 = G__33417;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33413){
var G__33414 = cljs.core.first(seq33413);
var seq33413__$1 = cljs.core.next(seq33413);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33414,seq33413__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33419 = arguments.length;
switch (G__33419) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33420_33435 = shadow.dom.dom_node(el);
var G__33421_33436 = cljs.core.name(event);
var G__33422_33437 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33420_33435,G__33421_33436,G__33422_33437) : shadow.dom.dom_listen.call(null,G__33420_33435,G__33421_33436,G__33422_33437));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__30034__auto___33438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___33438,buf,chan,event_fn){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___33438,buf,chan,event_fn){
return (function (state_33427){
var state_val_33428 = (state_33427[(1)]);
if((state_val_33428 === (1))){
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33427__$1,(2),once_or_cleanup);
} else {
if((state_val_33428 === (2))){
var inst_33424 = (state_33427[(2)]);
var inst_33425 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33427__$1 = (function (){var statearr_33429 = state_33427;
(statearr_33429[(7)] = inst_33424);

return statearr_33429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33427__$1,inst_33425);
} else {
return null;
}
}
});})(c__30034__auto___33438,buf,chan,event_fn))
;
return ((function (switch__29774__auto__,c__30034__auto___33438,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__29775__auto__ = null;
var shadow$dom$state_machine__29775__auto____0 = (function (){
var statearr_33430 = [null,null,null,null,null,null,null,null];
(statearr_33430[(0)] = shadow$dom$state_machine__29775__auto__);

(statearr_33430[(1)] = (1));

return statearr_33430;
});
var shadow$dom$state_machine__29775__auto____1 = (function (state_33427){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_33427);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e33431){if((e33431 instanceof Object)){
var ex__29778__auto__ = e33431;
var statearr_33432_33439 = state_33427;
(statearr_33432_33439[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_33427;
state_33427 = G__33440;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
shadow$dom$state_machine__29775__auto__ = function(state_33427){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29775__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29775__auto____1.call(this,state_33427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29775__auto____0;
shadow$dom$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29775__auto____1;
return shadow$dom$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___33438,buf,chan,event_fn))
})();
var state__30036__auto__ = (function (){var statearr_33433 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_33433[(6)] = c__30034__auto___33438);

return statearr_33433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___33438,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
