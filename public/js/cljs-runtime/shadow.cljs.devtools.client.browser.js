goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34261 = arguments.length;
var i__4500__auto___34262 = (0);
while(true){
if((i__4500__auto___34262 < len__4499__auto___34261)){
args__4502__auto__.push((arguments[i__4500__auto___34262]));

var G__34263 = (i__4500__auto___34262 + (1));
i__4500__auto___34262 = G__34263;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34259){
var G__34260 = cljs.core.first(seq34259);
var seq34259__$1 = cljs.core.next(seq34259);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34260,seq34259__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34264){
var map__34265 = p__34264;
var map__34265__$1 = ((((!((map__34265 == null)))?(((((map__34265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34265):map__34265);
var src = map__34265__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34265__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34265__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34267 = cljs.core.seq(sources);
var chunk__34268 = null;
var count__34269 = (0);
var i__34270 = (0);
while(true){
if((i__34270 < count__34269)){
var map__34271 = chunk__34268.cljs$core$IIndexed$_nth$arity$2(null,i__34270);
var map__34271__$1 = ((((!((map__34271 == null)))?(((((map__34271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34271):map__34271);
var src = map__34271__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__34275 = seq__34267;
var G__34276 = chunk__34268;
var G__34277 = count__34269;
var G__34278 = (i__34270 + (1));
seq__34267 = G__34275;
chunk__34268 = G__34276;
count__34269 = G__34277;
i__34270 = G__34278;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34267);
if(temp__5457__auto__){
var seq__34267__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34267__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34267__$1);
var G__34279 = cljs.core.chunk_rest(seq__34267__$1);
var G__34280 = c__4319__auto__;
var G__34281 = cljs.core.count(c__4319__auto__);
var G__34282 = (0);
seq__34267 = G__34279;
chunk__34268 = G__34280;
count__34269 = G__34281;
i__34270 = G__34282;
continue;
} else {
var map__34273 = cljs.core.first(seq__34267__$1);
var map__34273__$1 = ((((!((map__34273 == null)))?(((((map__34273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34273):map__34273);
var src = map__34273__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34273__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34273__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34273__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34273__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__34283 = cljs.core.next(seq__34267__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__34267 = G__34283;
chunk__34268 = G__34284;
count__34269 = G__34285;
i__34270 = G__34286;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34287 = cljs.core.seq(js_requires);
var chunk__34288 = null;
var count__34289 = (0);
var i__34290 = (0);
while(true){
if((i__34290 < count__34289)){
var js_ns = chunk__34288.cljs$core$IIndexed$_nth$arity$2(null,i__34290);
var require_str_34291 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34291);


var G__34292 = seq__34287;
var G__34293 = chunk__34288;
var G__34294 = count__34289;
var G__34295 = (i__34290 + (1));
seq__34287 = G__34292;
chunk__34288 = G__34293;
count__34289 = G__34294;
i__34290 = G__34295;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34287);
if(temp__5457__auto__){
var seq__34287__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34287__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34287__$1);
var G__34296 = cljs.core.chunk_rest(seq__34287__$1);
var G__34297 = c__4319__auto__;
var G__34298 = cljs.core.count(c__4319__auto__);
var G__34299 = (0);
seq__34287 = G__34296;
chunk__34288 = G__34297;
count__34289 = G__34298;
i__34290 = G__34299;
continue;
} else {
var js_ns = cljs.core.first(seq__34287__$1);
var require_str_34300 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34300);


var G__34301 = cljs.core.next(seq__34287__$1);
var G__34302 = null;
var G__34303 = (0);
var G__34304 = (0);
seq__34287 = G__34301;
chunk__34288 = G__34302;
count__34289 = G__34303;
i__34290 = G__34304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34305 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34305) : callback.call(null,G__34305));
} else {
var G__34306 = shadow.cljs.devtools.client.env.files_url();
var G__34307 = ((function (G__34306){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__34306))
;
var G__34308 = "POST";
var G__34309 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34310 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34306,G__34307,G__34308,G__34309,G__34310);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34312){
var map__34313 = p__34312;
var map__34313__$1 = ((((!((map__34313 == null)))?(((((map__34313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34313):map__34313);
var msg = map__34313__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34315 = info;
var map__34315__$1 = ((((!((map__34315 == null)))?(((((map__34315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34315):map__34315);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34315__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34315__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34317(s__34318){
return (new cljs.core.LazySeq(null,((function (map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info){
return (function (){
var s__34318__$1 = s__34318;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__34318__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__34323 = cljs.core.first(xs__6012__auto__);
var map__34323__$1 = ((((!((map__34323 == null)))?(((((map__34323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34323):map__34323);
var src = map__34323__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34323__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34323__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__34318__$1,map__34323,map__34323__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34317_$_iter__34319(s__34320){
return (new cljs.core.LazySeq(null,((function (s__34318__$1,map__34323,map__34323__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info){
return (function (){
var s__34320__$1 = s__34320;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__34320__$1);
if(temp__5457__auto____$1){
var s__34320__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34320__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__34320__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__34322 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__34321 = (0);
while(true){
if((i__34321 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__34321);
cljs.core.chunk_append(b__34322,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34342 = (i__34321 + (1));
i__34321 = G__34342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34317_$_iter__34319(cljs.core.chunk_rest(s__34320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),null);
}
} else {
var warning = cljs.core.first(s__34320__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34317_$_iter__34319(cljs.core.rest(s__34320__$2)));
}
} else {
return null;
}
break;
}
});})(s__34318__$1,map__34323,map__34323__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info))
,null,null));
});})(s__34318__$1,map__34323,map__34323__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34317(cljs.core.rest(s__34318__$1)));
} else {
var G__34343 = cljs.core.rest(s__34318__$1);
s__34318__$1 = G__34343;
continue;
}
} else {
var G__34344 = cljs.core.rest(s__34318__$1);
s__34318__$1 = G__34344;
continue;
}
} else {
return null;
}
break;
}
});})(map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info))
,null,null));
});})(map__34315,map__34315__$1,sources,compiled,map__34313,map__34313__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__34325_34345 = cljs.core.seq(warnings);
var chunk__34326_34346 = null;
var count__34327_34347 = (0);
var i__34328_34348 = (0);
while(true){
if((i__34328_34348 < count__34327_34347)){
var map__34329_34349 = chunk__34326_34346.cljs$core$IIndexed$_nth$arity$2(null,i__34328_34348);
var map__34329_34350__$1 = ((((!((map__34329_34349 == null)))?(((((map__34329_34349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34329_34349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34329_34349):map__34329_34349);
var w_34351 = map__34329_34350__$1;
var msg_34352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329_34350__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329_34350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329_34350__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329_34350__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34355)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34353),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34354),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34352__$1)].join(''));


var G__34356 = seq__34325_34345;
var G__34357 = chunk__34326_34346;
var G__34358 = count__34327_34347;
var G__34359 = (i__34328_34348 + (1));
seq__34325_34345 = G__34356;
chunk__34326_34346 = G__34357;
count__34327_34347 = G__34358;
i__34328_34348 = G__34359;
continue;
} else {
var temp__5457__auto___34360 = cljs.core.seq(seq__34325_34345);
if(temp__5457__auto___34360){
var seq__34325_34361__$1 = temp__5457__auto___34360;
if(cljs.core.chunked_seq_QMARK_(seq__34325_34361__$1)){
var c__4319__auto___34362 = cljs.core.chunk_first(seq__34325_34361__$1);
var G__34363 = cljs.core.chunk_rest(seq__34325_34361__$1);
var G__34364 = c__4319__auto___34362;
var G__34365 = cljs.core.count(c__4319__auto___34362);
var G__34366 = (0);
seq__34325_34345 = G__34363;
chunk__34326_34346 = G__34364;
count__34327_34347 = G__34365;
i__34328_34348 = G__34366;
continue;
} else {
var map__34331_34367 = cljs.core.first(seq__34325_34361__$1);
var map__34331_34368__$1 = ((((!((map__34331_34367 == null)))?(((((map__34331_34367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34331_34367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34331_34367):map__34331_34367);
var w_34369 = map__34331_34368__$1;
var msg_34370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34331_34368__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34331_34368__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34331_34368__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34331_34368__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34373)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34371),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34372),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34370__$1)].join(''));


var G__34374 = cljs.core.next(seq__34325_34361__$1);
var G__34375 = null;
var G__34376 = (0);
var G__34377 = (0);
seq__34325_34345 = G__34374;
chunk__34326_34346 = G__34375;
count__34327_34347 = G__34376;
i__34328_34348 = G__34377;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info){
return (function (p__34333){
var map__34334 = p__34333;
var map__34334__$1 = ((((!((map__34334 == null)))?(((((map__34334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34334):map__34334);
var src = map__34334__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34334__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34334__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info){
return (function (p__34336){
var map__34337 = p__34336;
var map__34337__$1 = ((((!((map__34337 == null)))?(((((map__34337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34337):map__34337);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info){
return (function (p__34339){
var map__34340 = p__34339;
var map__34340__$1 = ((((!((map__34340 == null)))?(((((map__34340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34340):map__34340);
var rc = map__34340__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info){
return (function (p1__34311_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34311_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__34315,map__34315__$1,sources,compiled,warnings,map__34313,map__34313__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34378){
var map__34379 = p__34378;
var map__34379__$1 = ((((!((map__34379 == null)))?(((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34379):map__34379);
var msg = map__34379__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34381 = cljs.core.seq(updates);
var chunk__34383 = null;
var count__34384 = (0);
var i__34385 = (0);
while(true){
if((i__34385 < count__34384)){
var path = chunk__34383.cljs$core$IIndexed$_nth$arity$2(null,i__34385);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___34389 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___34389)){
var node_34390 = temp__5457__auto___34389;
var new_link_34391 = (function (){var G__34387 = document.createElement("link");
G__34387.setAttribute("rel","stylesheet");

G__34387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34387;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_34391,node_34390);

goog.dom.removeNode(node_34390);
} else {
}


var G__34392 = seq__34381;
var G__34393 = chunk__34383;
var G__34394 = count__34384;
var G__34395 = (i__34385 + (1));
seq__34381 = G__34392;
chunk__34383 = G__34393;
count__34384 = G__34394;
i__34385 = G__34395;
continue;
} else {
var G__34396 = seq__34381;
var G__34397 = chunk__34383;
var G__34398 = count__34384;
var G__34399 = (i__34385 + (1));
seq__34381 = G__34396;
chunk__34383 = G__34397;
count__34384 = G__34398;
i__34385 = G__34399;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34381);
if(temp__5457__auto__){
var seq__34381__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34381__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34381__$1);
var G__34400 = cljs.core.chunk_rest(seq__34381__$1);
var G__34401 = c__4319__auto__;
var G__34402 = cljs.core.count(c__4319__auto__);
var G__34403 = (0);
seq__34381 = G__34400;
chunk__34383 = G__34401;
count__34384 = G__34402;
i__34385 = G__34403;
continue;
} else {
var path = cljs.core.first(seq__34381__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___34404__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___34404__$1)){
var node_34405 = temp__5457__auto___34404__$1;
var new_link_34406 = (function (){var G__34388 = document.createElement("link");
G__34388.setAttribute("rel","stylesheet");

G__34388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34388;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_34406,node_34405);

goog.dom.removeNode(node_34405);
} else {
}


var G__34407 = cljs.core.next(seq__34381__$1);
var G__34408 = null;
var G__34409 = (0);
var G__34410 = (0);
seq__34381 = G__34407;
chunk__34383 = G__34408;
count__34384 = G__34409;
i__34385 = G__34410;
continue;
} else {
var G__34411 = cljs.core.next(seq__34381__$1);
var G__34412 = null;
var G__34413 = (0);
var G__34414 = (0);
seq__34381 = G__34411;
chunk__34383 = G__34412;
count__34384 = G__34413;
i__34385 = G__34414;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34415){
var map__34416 = p__34415;
var map__34416__$1 = ((((!((map__34416 == null)))?(((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34416):map__34416);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34416__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34416__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__34416,map__34416__$1,id,js){
return (function (){
return eval(js);
});})(map__34416,map__34416__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34418){
var map__34419 = p__34418;
var map__34419__$1 = ((((!((map__34419 == null)))?(((((map__34419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34419):map__34419);
var msg = map__34419__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__34419,map__34419__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__34421){
var map__34422 = p__34421;
var map__34422__$1 = ((((!((map__34422 == null)))?(((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34422):map__34422);
var src = map__34422__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3911__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3911__auto__;
}
});})(map__34419,map__34419__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__34419,map__34419__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__34419,map__34419__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34424){
var map__34425 = p__34424;
var map__34425__$1 = ((((!((map__34425 == null)))?(((((map__34425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34425):map__34425);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__34425,map__34425__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__34425,map__34425__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34427){
var map__34428 = p__34427;
var map__34428__$1 = ((((!((map__34428 == null)))?(((((map__34428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34428):map__34428);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34428__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34430){
var map__34431 = p__34430;
var map__34431__$1 = ((((!((map__34431 == null)))?(((((map__34431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34431):map__34431);
var msg = map__34431__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__34433 = type;
var G__34433__$1 = (((G__34433 instanceof cljs.core.Keyword))?G__34433.fqn:null);
switch (G__34433__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__34435 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__34436 = ((function (G__34435){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__34435))
;
var G__34437 = "POST";
var G__34438 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34439 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34435,G__34436,G__34437,G__34438,G__34439);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3922__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___34440 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___34440)){
var s_34441 = temp__5457__auto___34440;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_34441.onclose = ((function (s_34441,temp__5457__auto___34440){
return (function (e){
return null;
});})(s_34441,temp__5457__auto___34440))
;

s_34441.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
