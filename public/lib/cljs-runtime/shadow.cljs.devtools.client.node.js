goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if(typeof shadow.cljs.devtools.client.node.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if(typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__28964){
var map__28965 = p__28964;
var map__28965__$1 = ((((!((map__28965 == null)))?(((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28965):map__28965);
var msg = map__28965__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28965__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28965__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__28967){
var map__28968 = p__28967;
var map__28968__$1 = ((((!((map__28968 == null)))?(((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28968):map__28968);
var msg = map__28968__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28968__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__28970 = repl_state;
var map__28970__$1 = ((((!((map__28970 == null)))?(((((map__28970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28970):map__28970);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28970__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__28972_28982 = cljs.core.seq(repl_sources);
var chunk__28974_28983 = null;
var count__28975_28984 = (0);
var i__28976_28985 = (0);
while(true){
if((i__28976_28985 < count__28975_28984)){
var map__28978_28986 = chunk__28974_28983.cljs$core$IIndexed$_nth$arity$2(null,i__28976_28985);
var map__28978_28987__$1 = ((((!((map__28978_28986 == null)))?(((((map__28978_28986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978_28986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28978_28986):map__28978_28986);
var src_28988 = map__28978_28987__$1;
var output_name_28989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28978_28987__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_28989))){
shadow.cljs.devtools.client.node.closure_import(output_name_28989);


var G__28990 = seq__28972_28982;
var G__28991 = chunk__28974_28983;
var G__28992 = count__28975_28984;
var G__28993 = (i__28976_28985 + (1));
seq__28972_28982 = G__28990;
chunk__28974_28983 = G__28991;
count__28975_28984 = G__28992;
i__28976_28985 = G__28993;
continue;
} else {
var G__28994 = seq__28972_28982;
var G__28995 = chunk__28974_28983;
var G__28996 = count__28975_28984;
var G__28997 = (i__28976_28985 + (1));
seq__28972_28982 = G__28994;
chunk__28974_28983 = G__28995;
count__28975_28984 = G__28996;
i__28976_28985 = G__28997;
continue;
}
} else {
var temp__5457__auto___28998 = cljs.core.seq(seq__28972_28982);
if(temp__5457__auto___28998){
var seq__28972_28999__$1 = temp__5457__auto___28998;
if(cljs.core.chunked_seq_QMARK_(seq__28972_28999__$1)){
var c__4319__auto___29000 = cljs.core.chunk_first(seq__28972_28999__$1);
var G__29001 = cljs.core.chunk_rest(seq__28972_28999__$1);
var G__29002 = c__4319__auto___29000;
var G__29003 = cljs.core.count(c__4319__auto___29000);
var G__29004 = (0);
seq__28972_28982 = G__29001;
chunk__28974_28983 = G__29002;
count__28975_28984 = G__29003;
i__28976_28985 = G__29004;
continue;
} else {
var map__28980_29005 = cljs.core.first(seq__28972_28999__$1);
var map__28980_29006__$1 = ((((!((map__28980_29005 == null)))?(((((map__28980_29005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28980_29005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28980_29005):map__28980_29005);
var src_29007 = map__28980_29006__$1;
var output_name_29008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28980_29006__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29008))){
shadow.cljs.devtools.client.node.closure_import(output_name_29008);


var G__29009 = cljs.core.next(seq__28972_28999__$1);
var G__29010 = null;
var G__29011 = (0);
var G__29012 = (0);
seq__28972_28982 = G__29009;
chunk__28974_28983 = G__29010;
count__28975_28984 = G__29011;
i__28976_28985 = G__29012;
continue;
} else {
var G__29013 = cljs.core.next(seq__28972_28999__$1);
var G__29014 = null;
var G__29015 = (0);
var G__29016 = (0);
seq__28972_28982 = G__29013;
chunk__28974_28983 = G__29014;
count__28975_28984 = G__29015;
i__28976_28985 = G__29016;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29017){
var map__29018 = p__29017;
var map__29018__$1 = ((((!((map__29018 == null)))?(((((map__29018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29018):map__29018);
var msg = map__29018__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29018,map__29018__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29018,map__29018__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29020){
var map__29021 = p__29020;
var map__29021__$1 = ((((!((map__29021 == null)))?(((((map__29021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29021):map__29021);
var msg = map__29021__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29023){
var map__29024 = p__29023;
var map__29024__$1 = ((((!((map__29024 == null)))?(((((map__29024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29024):map__29024);
var msg = map__29024__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29024__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29024__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29027_29035 = cljs.core.seq(sources);
var chunk__29028_29036 = null;
var count__29029_29037 = (0);
var i__29030_29038 = (0);
while(true){
if((i__29030_29038 < count__29029_29037)){
var map__29031_29039 = chunk__29028_29036.cljs$core$IIndexed$_nth$arity$2(null,i__29030_29038);
var map__29031_29040__$1 = ((((!((map__29031_29039 == null)))?(((((map__29031_29039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29031_29039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29031_29039):map__29031_29039);
var src_29041 = map__29031_29040__$1;
var provides_29042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031_29040__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031_29040__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29043));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29042);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29043);
} else {
}


var G__29044 = seq__29027_29035;
var G__29045 = chunk__29028_29036;
var G__29046 = count__29029_29037;
var G__29047 = (i__29030_29038 + (1));
seq__29027_29035 = G__29044;
chunk__29028_29036 = G__29045;
count__29029_29037 = G__29046;
i__29030_29038 = G__29047;
continue;
} else {
var temp__5457__auto___29048 = cljs.core.seq(seq__29027_29035);
if(temp__5457__auto___29048){
var seq__29027_29049__$1 = temp__5457__auto___29048;
if(cljs.core.chunked_seq_QMARK_(seq__29027_29049__$1)){
var c__4319__auto___29050 = cljs.core.chunk_first(seq__29027_29049__$1);
var G__29051 = cljs.core.chunk_rest(seq__29027_29049__$1);
var G__29052 = c__4319__auto___29050;
var G__29053 = cljs.core.count(c__4319__auto___29050);
var G__29054 = (0);
seq__29027_29035 = G__29051;
chunk__29028_29036 = G__29052;
count__29029_29037 = G__29053;
i__29030_29038 = G__29054;
continue;
} else {
var map__29033_29055 = cljs.core.first(seq__29027_29049__$1);
var map__29033_29056__$1 = ((((!((map__29033_29055 == null)))?(((((map__29033_29055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033_29055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29033_29055):map__29033_29055);
var src_29057 = map__29033_29056__$1;
var provides_29058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29033_29056__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29033_29056__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29059));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29058);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29059);
} else {
}


var G__29060 = cljs.core.next(seq__29027_29049__$1);
var G__29061 = null;
var G__29062 = (0);
var G__29063 = (0);
seq__29027_29035 = G__29060;
chunk__29028_29036 = G__29061;
count__29029_29037 = G__29062;
i__29030_29038 = G__29063;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29026){var e = e29026;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29064){
var map__29065 = p__29064;
var map__29065__$1 = ((((!((map__29065 == null)))?(((((map__29065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29065):map__29065);
var msg = map__29065__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29065__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29065__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29067 = info;
var map__29067__$1 = ((((!((map__29067 == null)))?(((((map__29067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29067):map__29067);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29069(s__29070){
return (new cljs.core.LazySeq(null,((function (map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info){
return (function (){
var s__29070__$1 = s__29070;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29070__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__29075 = cljs.core.first(xs__6012__auto__);
var map__29075__$1 = ((((!((map__29075 == null)))?(((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29075):map__29075);
var src = map__29075__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__29070__$1,map__29075,map__29075__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29069_$_iter__29071(s__29072){
return (new cljs.core.LazySeq(null,((function (s__29070__$1,map__29075,map__29075__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info){
return (function (){
var s__29072__$1 = s__29072;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29072__$1);
if(temp__5457__auto____$1){
var s__29072__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29072__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29072__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29074 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29073 = (0);
while(true){
if((i__29073 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29073);
cljs.core.chunk_append(b__29074,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29089 = (i__29073 + (1));
i__29073 = G__29089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29074),shadow$cljs$devtools$client$node$build_complete_$_iter__29069_$_iter__29071(cljs.core.chunk_rest(s__29072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29074),null);
}
} else {
var warning = cljs.core.first(s__29072__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29069_$_iter__29071(cljs.core.rest(s__29072__$2)));
}
} else {
return null;
}
break;
}
});})(s__29070__$1,map__29075,map__29075__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info))
,null,null));
});})(s__29070__$1,map__29075,map__29075__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29069(cljs.core.rest(s__29070__$1)));
} else {
var G__29090 = cljs.core.rest(s__29070__$1);
s__29070__$1 = G__29090;
continue;
}
} else {
var G__29091 = cljs.core.rest(s__29070__$1);
s__29070__$1 = G__29091;
continue;
}
} else {
return null;
}
break;
}
});})(map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info))
,null,null));
});})(map__29067,map__29067__$1,sources,compiled,map__29065,map__29065__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29077 = info;
var map__29077__$1 = ((((!((map__29077 == null)))?(((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29077):map__29077);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29077__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29077__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29077,map__29077__$1,sources__$1,compiled__$1,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info){
return (function (p__29079){
var map__29080 = p__29079;
var map__29080__$1 = ((((!((map__29080 == null)))?(((((map__29080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29080):map__29080);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29077,map__29077__$1,sources__$1,compiled__$1,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29077,map__29077__$1,sources__$1,compiled__$1,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info){
return (function (p__29082){
var map__29083 = p__29082;
var map__29083__$1 = ((((!((map__29083 == null)))?(((((map__29083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29083):map__29083);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29077,map__29077__$1,sources__$1,compiled__$1,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29077,map__29077__$1,sources__$1,compiled__$1,files_to_require,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info){
return (function (){
var seq__29085 = cljs.core.seq(files_to_require);
var chunk__29086 = null;
var count__29087 = (0);
var i__29088 = (0);
while(true){
if((i__29088 < count__29087)){
var src = chunk__29086.cljs$core$IIndexed$_nth$arity$2(null,i__29088);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29092 = seq__29085;
var G__29093 = chunk__29086;
var G__29094 = count__29087;
var G__29095 = (i__29088 + (1));
seq__29085 = G__29092;
chunk__29086 = G__29093;
count__29087 = G__29094;
i__29088 = G__29095;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29085);
if(temp__5457__auto__){
var seq__29085__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29085__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29085__$1);
var G__29096 = cljs.core.chunk_rest(seq__29085__$1);
var G__29097 = c__4319__auto__;
var G__29098 = cljs.core.count(c__4319__auto__);
var G__29099 = (0);
seq__29085 = G__29096;
chunk__29086 = G__29097;
count__29087 = G__29098;
i__29088 = G__29099;
continue;
} else {
var src = cljs.core.first(seq__29085__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29100 = cljs.core.next(seq__29085__$1);
var G__29101 = null;
var G__29102 = (0);
var G__29103 = (0);
seq__29085 = G__29100;
chunk__29086 = G__29101;
count__29087 = G__29102;
i__29088 = G__29103;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29077,map__29077__$1,sources__$1,compiled__$1,files_to_require,map__29067,map__29067__$1,sources,compiled,warnings,map__29065,map__29065__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29104){
var map__29105 = p__29104;
var map__29105__$1 = ((((!((map__29105 == null)))?(((((map__29105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29105):map__29105);
var msg = map__29105__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29107 = type;
var G__29107__$1 = (((G__29107 instanceof cljs.core.Keyword))?G__29107.fqn:null);
switch (G__29107__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e29109){var e = e29109;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
