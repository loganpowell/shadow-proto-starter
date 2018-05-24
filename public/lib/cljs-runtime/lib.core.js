goog.provide('lib.core');
goog.require('cljs.core');
lib.core.hello = (function lib$core$hello(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24895 = arguments.length;
var i__4500__auto___24896 = (0);
while(true){
if((i__4500__auto___24896 < len__4499__auto___24895)){
args__4502__auto__.push((arguments[i__4500__auto___24896]));

var G__24897 = (i__4500__auto___24896 + (1));
i__4500__auto___24896 = G__24897;
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
lib.core.hello.cljs$lang$applyTo = (function (seq24894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24894));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hey from proto-repl!"], 0));

//# sourceMappingURL=lib.core.js.map
