goog.provide('lib.core');
goog.require('cljs.core');
lib.core.hello = (function lib$core$hello(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23853 = arguments.length;
var i__4500__auto___23854 = (0);
while(true){
if((i__4500__auto___23854 < len__4499__auto___23853)){
args__4502__auto__.push((arguments[i__4500__auto___23854]));

var G__23855 = (i__4500__auto___23854 + (1));
i__4500__auto___23854 = G__23855;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return lib.core.hello.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

lib.core.hello.cljs$core$IFn$_invoke$arity$variadic = (function (cli_args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello world"], 0));
});

lib.core.hello.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib.core.hello.cljs$lang$applyTo = (function (seq23852){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23852));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hey from node!"], 0));

//# sourceMappingURL=lib.core.js.map
