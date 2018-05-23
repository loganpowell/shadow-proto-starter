goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30104 = arguments.length;
switch (G__30104) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30117 = (function (f,blockable,meta30118){
this.f = f;
this.blockable = blockable;
this.meta30118 = meta30118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30119,meta30118__$1){
var self__ = this;
var _30119__$1 = this;
return (new cljs.core.async.t_cljs$core$async30117(self__.f,self__.blockable,meta30118__$1));
});

cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30119){
var self__ = this;
var _30119__$1 = this;
return self__.meta30118;
});

cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30118","meta30118",597482900,null)], null);
});

cljs.core.async.t_cljs$core$async30117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30117";

cljs.core.async.t_cljs$core$async30117.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30117.
 */
cljs.core.async.__GT_t_cljs$core$async30117 = (function cljs$core$async$__GT_t_cljs$core$async30117(f__$1,blockable__$1,meta30118){
return (new cljs.core.async.t_cljs$core$async30117(f__$1,blockable__$1,meta30118));
});

}

return (new cljs.core.async.t_cljs$core$async30117(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30134 = arguments.length;
switch (G__30134) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30140 = arguments.length;
switch (G__30140) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30149 = arguments.length;
switch (G__30149) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30151 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30151) : fn1.call(null,val_30151));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30151,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30151) : fn1.call(null,val_30151));
});})(val_30151,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30153 = arguments.length;
switch (G__30153) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___30158 = n;
var x_30159 = (0);
while(true){
if((x_30159 < n__4376__auto___30158)){
(a[x_30159] = (0));

var G__30160 = (x_30159 + (1));
x_30159 = G__30160;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__30164 = (i + (1));
i = G__30164;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async30166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30166 = (function (flag,meta30167){
this.flag = flag;
this.meta30167 = meta30167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30168,meta30167__$1){
var self__ = this;
var _30168__$1 = this;
return (new cljs.core.async.t_cljs$core$async30166(self__.flag,meta30167__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30168){
var self__ = this;
var _30168__$1 = this;
return self__.meta30167;
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30167","meta30167",-1886528742,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30166";

cljs.core.async.t_cljs$core$async30166.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30166");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30166.
 */
cljs.core.async.__GT_t_cljs$core$async30166 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30166(flag__$1,meta30167){
return (new cljs.core.async.t_cljs$core$async30166(flag__$1,meta30167));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30166(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30169 = (function (flag,cb,meta30170){
this.flag = flag;
this.cb = cb;
this.meta30170 = meta30170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30171,meta30170__$1){
var self__ = this;
var _30171__$1 = this;
return (new cljs.core.async.t_cljs$core$async30169(self__.flag,self__.cb,meta30170__$1));
});

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30171){
var self__ = this;
var _30171__$1 = this;
return self__.meta30170;
});

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30170","meta30170",-471289741,null)], null);
});

cljs.core.async.t_cljs$core$async30169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30169";

cljs.core.async.t_cljs$core$async30169.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30169");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30169.
 */
cljs.core.async.__GT_t_cljs$core$async30169 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30169(flag__$1,cb__$1,meta30170){
return (new cljs.core.async.t_cljs$core$async30169(flag__$1,cb__$1,meta30170));
});

}

return (new cljs.core.async.t_cljs$core$async30169(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30178_SHARP_){
var G__30180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30178_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30180) : fret.call(null,G__30180));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30179_SHARP_){
var G__30181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30179_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30181) : fret.call(null,G__30181));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30183 = (i + (1));
i = G__30183;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30190 = arguments.length;
var i__4500__auto___30191 = (0);
while(true){
if((i__4500__auto___30191 < len__4499__auto___30190)){
args__4502__auto__.push((arguments[i__4500__auto___30191]));

var G__30192 = (i__4500__auto___30191 + (1));
i__4500__auto___30191 = G__30192;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30187){
var map__30188 = p__30187;
var map__30188__$1 = ((((!((map__30188 == null)))?(((((map__30188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30188):map__30188);
var opts = map__30188__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30185){
var G__30186 = cljs.core.first(seq30185);
var seq30185__$1 = cljs.core.next(seq30185);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30186,seq30185__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30203 = arguments.length;
switch (G__30203) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30034__auto___30301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___30301){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___30301){
return (function (state_30234){
var state_val_30238 = (state_30234[(1)]);
if((state_val_30238 === (7))){
var inst_30230 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30275_30302 = state_30234__$1;
(statearr_30275_30302[(2)] = inst_30230);

(statearr_30275_30302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (1))){
var state_30234__$1 = state_30234;
var statearr_30279_30303 = state_30234__$1;
(statearr_30279_30303[(2)] = null);

(statearr_30279_30303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (4))){
var inst_30213 = (state_30234[(7)]);
var inst_30213__$1 = (state_30234[(2)]);
var inst_30214 = (inst_30213__$1 == null);
var state_30234__$1 = (function (){var statearr_30280 = state_30234;
(statearr_30280[(7)] = inst_30213__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30214)){
var statearr_30281_30304 = state_30234__$1;
(statearr_30281_30304[(1)] = (5));

} else {
var statearr_30282_30305 = state_30234__$1;
(statearr_30282_30305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (13))){
var state_30234__$1 = state_30234;
var statearr_30283_30306 = state_30234__$1;
(statearr_30283_30306[(2)] = null);

(statearr_30283_30306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (6))){
var inst_30213 = (state_30234[(7)]);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30234__$1,(11),to,inst_30213);
} else {
if((state_val_30238 === (3))){
var inst_30232 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30234__$1,inst_30232);
} else {
if((state_val_30238 === (12))){
var state_30234__$1 = state_30234;
var statearr_30284_30307 = state_30234__$1;
(statearr_30284_30307[(2)] = null);

(statearr_30284_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (2))){
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30234__$1,(4),from);
} else {
if((state_val_30238 === (11))){
var inst_30223 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
if(cljs.core.truth_(inst_30223)){
var statearr_30285_30308 = state_30234__$1;
(statearr_30285_30308[(1)] = (12));

} else {
var statearr_30286_30309 = state_30234__$1;
(statearr_30286_30309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (9))){
var state_30234__$1 = state_30234;
var statearr_30287_30310 = state_30234__$1;
(statearr_30287_30310[(2)] = null);

(statearr_30287_30310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (5))){
var state_30234__$1 = state_30234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30288_30311 = state_30234__$1;
(statearr_30288_30311[(1)] = (8));

} else {
var statearr_30289_30312 = state_30234__$1;
(statearr_30289_30312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (14))){
var inst_30228 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30290_30313 = state_30234__$1;
(statearr_30290_30313[(2)] = inst_30228);

(statearr_30290_30313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (10))){
var inst_30220 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30291_30314 = state_30234__$1;
(statearr_30291_30314[(2)] = inst_30220);

(statearr_30291_30314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (8))){
var inst_30217 = cljs.core.async.close_BANG_(to);
var state_30234__$1 = state_30234;
var statearr_30292_30315 = state_30234__$1;
(statearr_30292_30315[(2)] = inst_30217);

(statearr_30292_30315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___30301))
;
return ((function (switch__29774__auto__,c__30034__auto___30301){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_30293 = [null,null,null,null,null,null,null,null];
(statearr_30293[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_30293[(1)] = (1));

return statearr_30293;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_30234){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30234);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30294){if((e30294 instanceof Object)){
var ex__29778__auto__ = e30294;
var statearr_30295_30316 = state_30234;
(statearr_30295_30316[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30317 = state_30234;
state_30234 = G__30317;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_30234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_30234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___30301))
})();
var state__30036__auto__ = (function (){var statearr_30299 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30299[(6)] = c__30034__auto___30301);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___30301))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30321){
var vec__30322 = p__30321;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(1),null);
var job = vec__30322;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30034__auto___30515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results){
return (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (1))){
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30335__$1,(2),res,v);
} else {
if((state_val_30336 === (2))){
var inst_30332 = (state_30335[(2)]);
var inst_30333 = cljs.core.async.close_BANG_(res);
var state_30335__$1 = (function (){var statearr_30337 = state_30335;
(statearr_30337[(7)] = inst_30332);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30335__$1,inst_30333);
} else {
return null;
}
}
});})(c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results))
;
return ((function (switch__29774__auto__,c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_30338 = [null,null,null,null,null,null,null,null];
(statearr_30338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__);

(statearr_30338[(1)] = (1));

return statearr_30338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1 = (function (state_30335){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30335);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30339){if((e30339 instanceof Object)){
var ex__29778__auto__ = e30339;
var statearr_30340_30516 = state_30335;
(statearr_30340_30516[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30517 = state_30335;
state_30335 = G__30517;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results))
})();
var state__30036__auto__ = (function (){var statearr_30341 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30341[(6)] = c__30034__auto___30515);

return statearr_30341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___30515,res,vec__30322,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30342){
var vec__30343 = p__30342;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30343,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30343,(1),null);
var job = vec__30343;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___30518 = n;
var __30519 = (0);
while(true){
if((__30519 < n__4376__auto___30518)){
var G__30346_30520 = type;
var G__30346_30521__$1 = (((G__30346_30520 instanceof cljs.core.Keyword))?G__30346_30520.fqn:null);
switch (G__30346_30521__$1) {
case "compute":
var c__30034__auto___30523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30519,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (__30519,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function (state_30359){
var state_val_30360 = (state_30359[(1)]);
if((state_val_30360 === (1))){
var state_30359__$1 = state_30359;
var statearr_30361_30524 = state_30359__$1;
(statearr_30361_30524[(2)] = null);

(statearr_30361_30524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (2))){
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30359__$1,(4),jobs);
} else {
if((state_val_30360 === (3))){
var inst_30357 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30359__$1,inst_30357);
} else {
if((state_val_30360 === (4))){
var inst_30349 = (state_30359[(2)]);
var inst_30350 = process(inst_30349);
var state_30359__$1 = state_30359;
if(cljs.core.truth_(inst_30350)){
var statearr_30362_30525 = state_30359__$1;
(statearr_30362_30525[(1)] = (5));

} else {
var statearr_30363_30526 = state_30359__$1;
(statearr_30363_30526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (5))){
var state_30359__$1 = state_30359;
var statearr_30364_30527 = state_30359__$1;
(statearr_30364_30527[(2)] = null);

(statearr_30364_30527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (6))){
var state_30359__$1 = state_30359;
var statearr_30365_30532 = state_30359__$1;
(statearr_30365_30532[(2)] = null);

(statearr_30365_30532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (7))){
var inst_30355 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30366_30533 = state_30359__$1;
(statearr_30366_30533[(2)] = inst_30355);

(statearr_30366_30533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30519,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
;
return ((function (__30519,switch__29774__auto__,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_30373 = [null,null,null,null,null,null,null];
(statearr_30373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__);

(statearr_30373[(1)] = (1));

return statearr_30373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1 = (function (state_30359){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30359);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30374){if((e30374 instanceof Object)){
var ex__29778__auto__ = e30374;
var statearr_30375_30534 = state_30359;
(statearr_30375_30534[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30535 = state_30359;
state_30359 = G__30535;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = function(state_30359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1.call(this,state_30359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__;
})()
;})(__30519,switch__29774__auto__,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
})();
var state__30036__auto__ = (function (){var statearr_30376 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30376[(6)] = c__30034__auto___30523);

return statearr_30376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(__30519,c__30034__auto___30523,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
);


break;
case "async":
var c__30034__auto___30536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30519,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (__30519,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (1))){
var state_30389__$1 = state_30389;
var statearr_30391_30537 = state_30389__$1;
(statearr_30391_30537[(2)] = null);

(statearr_30391_30537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (2))){
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30389__$1,(4),jobs);
} else {
if((state_val_30390 === (3))){
var inst_30387 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (4))){
var inst_30379 = (state_30389[(2)]);
var inst_30380 = async(inst_30379);
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30380)){
var statearr_30392_30538 = state_30389__$1;
(statearr_30392_30538[(1)] = (5));

} else {
var statearr_30393_30539 = state_30389__$1;
(statearr_30393_30539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (5))){
var state_30389__$1 = state_30389;
var statearr_30394_30540 = state_30389__$1;
(statearr_30394_30540[(2)] = null);

(statearr_30394_30540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (6))){
var state_30389__$1 = state_30389;
var statearr_30395_30541 = state_30389__$1;
(statearr_30395_30541[(2)] = null);

(statearr_30395_30541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (7))){
var inst_30385 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30396_30542 = state_30389__$1;
(statearr_30396_30542[(2)] = inst_30385);

(statearr_30396_30542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30519,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
;
return ((function (__30519,switch__29774__auto__,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null];
(statearr_30397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1 = (function (state_30389){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30389);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__29778__auto__ = e30398;
var statearr_30399_30547 = state_30389;
(statearr_30399_30547[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30548 = state_30389;
state_30389 = G__30548;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__;
})()
;})(__30519,switch__29774__auto__,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
})();
var state__30036__auto__ = (function (){var statearr_30400 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30400[(6)] = c__30034__auto___30536);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(__30519,c__30034__auto___30536,G__30346_30520,G__30346_30521__$1,n__4376__auto___30518,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30346_30521__$1)].join('')));

}

var G__30549 = (__30519 + (1));
__30519 = G__30549;
continue;
} else {
}
break;
}

var c__30034__auto___30550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___30550,jobs,results,process,async){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___30550,jobs,results,process,async){
return (function (state_30422){
var state_val_30423 = (state_30422[(1)]);
if((state_val_30423 === (1))){
var state_30422__$1 = state_30422;
var statearr_30424_30551 = state_30422__$1;
(statearr_30424_30551[(2)] = null);

(statearr_30424_30551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (2))){
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30422__$1,(4),from);
} else {
if((state_val_30423 === (3))){
var inst_30420 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30422__$1,inst_30420);
} else {
if((state_val_30423 === (4))){
var inst_30403 = (state_30422[(7)]);
var inst_30403__$1 = (state_30422[(2)]);
var inst_30404 = (inst_30403__$1 == null);
var state_30422__$1 = (function (){var statearr_30425 = state_30422;
(statearr_30425[(7)] = inst_30403__$1);

return statearr_30425;
})();
if(cljs.core.truth_(inst_30404)){
var statearr_30426_30556 = state_30422__$1;
(statearr_30426_30556[(1)] = (5));

} else {
var statearr_30427_30557 = state_30422__$1;
(statearr_30427_30557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (5))){
var inst_30406 = cljs.core.async.close_BANG_(jobs);
var state_30422__$1 = state_30422;
var statearr_30428_30558 = state_30422__$1;
(statearr_30428_30558[(2)] = inst_30406);

(statearr_30428_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (6))){
var inst_30403 = (state_30422[(7)]);
var inst_30408 = (state_30422[(8)]);
var inst_30408__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30410 = [inst_30403,inst_30408__$1];
var inst_30411 = (new cljs.core.PersistentVector(null,2,(5),inst_30409,inst_30410,null));
var state_30422__$1 = (function (){var statearr_30429 = state_30422;
(statearr_30429[(8)] = inst_30408__$1);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30422__$1,(8),jobs,inst_30411);
} else {
if((state_val_30423 === (7))){
var inst_30418 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30430_30559 = state_30422__$1;
(statearr_30430_30559[(2)] = inst_30418);

(statearr_30430_30559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (8))){
var inst_30408 = (state_30422[(8)]);
var inst_30413 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30431 = state_30422;
(statearr_30431[(9)] = inst_30413);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30422__$1,(9),results,inst_30408);
} else {
if((state_val_30423 === (9))){
var inst_30415 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30432 = state_30422;
(statearr_30432[(10)] = inst_30415);

return statearr_30432;
})();
var statearr_30433_30560 = state_30422__$1;
(statearr_30433_30560[(2)] = null);

(statearr_30433_30560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___30550,jobs,results,process,async))
;
return ((function (switch__29774__auto__,c__30034__auto___30550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_30434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__);

(statearr_30434[(1)] = (1));

return statearr_30434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1 = (function (state_30422){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30422);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30435){if((e30435 instanceof Object)){
var ex__29778__auto__ = e30435;
var statearr_30436_30561 = state_30422;
(statearr_30436_30561[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30562 = state_30422;
state_30422 = G__30562;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = function(state_30422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1.call(this,state_30422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___30550,jobs,results,process,async))
})();
var state__30036__auto__ = (function (){var statearr_30440 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30440[(6)] = c__30034__auto___30550);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___30550,jobs,results,process,async))
);


var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__,jobs,results,process,async){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__,jobs,results,process,async){
return (function (state_30485){
var state_val_30486 = (state_30485[(1)]);
if((state_val_30486 === (7))){
var inst_30480 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30487_30563 = state_30485__$1;
(statearr_30487_30563[(2)] = inst_30480);

(statearr_30487_30563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (20))){
var state_30485__$1 = state_30485;
var statearr_30488_30564 = state_30485__$1;
(statearr_30488_30564[(2)] = null);

(statearr_30488_30564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (1))){
var state_30485__$1 = state_30485;
var statearr_30489_30565 = state_30485__$1;
(statearr_30489_30565[(2)] = null);

(statearr_30489_30565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (4))){
var inst_30443 = (state_30485[(7)]);
var inst_30443__$1 = (state_30485[(2)]);
var inst_30445 = (inst_30443__$1 == null);
var state_30485__$1 = (function (){var statearr_30490 = state_30485;
(statearr_30490[(7)] = inst_30443__$1);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30445)){
var statearr_30491_30566 = state_30485__$1;
(statearr_30491_30566[(1)] = (5));

} else {
var statearr_30492_30567 = state_30485__$1;
(statearr_30492_30567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (15))){
var inst_30460 = (state_30485[(8)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30485__$1,(18),to,inst_30460);
} else {
if((state_val_30486 === (21))){
var inst_30475 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30493_30569 = state_30485__$1;
(statearr_30493_30569[(2)] = inst_30475);

(statearr_30493_30569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (13))){
var inst_30477 = (state_30485[(2)]);
var state_30485__$1 = (function (){var statearr_30494 = state_30485;
(statearr_30494[(9)] = inst_30477);

return statearr_30494;
})();
var statearr_30495_30574 = state_30485__$1;
(statearr_30495_30574[(2)] = null);

(statearr_30495_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (6))){
var inst_30443 = (state_30485[(7)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30485__$1,(11),inst_30443);
} else {
if((state_val_30486 === (17))){
var inst_30470 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
if(cljs.core.truth_(inst_30470)){
var statearr_30496_30575 = state_30485__$1;
(statearr_30496_30575[(1)] = (19));

} else {
var statearr_30497_30576 = state_30485__$1;
(statearr_30497_30576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (3))){
var inst_30482 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30485__$1,inst_30482);
} else {
if((state_val_30486 === (12))){
var inst_30457 = (state_30485[(10)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30485__$1,(14),inst_30457);
} else {
if((state_val_30486 === (2))){
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30485__$1,(4),results);
} else {
if((state_val_30486 === (19))){
var state_30485__$1 = state_30485;
var statearr_30498_30581 = state_30485__$1;
(statearr_30498_30581[(2)] = null);

(statearr_30498_30581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (11))){
var inst_30457 = (state_30485[(2)]);
var state_30485__$1 = (function (){var statearr_30499 = state_30485;
(statearr_30499[(10)] = inst_30457);

return statearr_30499;
})();
var statearr_30500_30582 = state_30485__$1;
(statearr_30500_30582[(2)] = null);

(statearr_30500_30582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (9))){
var state_30485__$1 = state_30485;
var statearr_30501_30583 = state_30485__$1;
(statearr_30501_30583[(2)] = null);

(statearr_30501_30583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (5))){
var state_30485__$1 = state_30485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30502_30590 = state_30485__$1;
(statearr_30502_30590[(1)] = (8));

} else {
var statearr_30503_30591 = state_30485__$1;
(statearr_30503_30591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (14))){
var inst_30460 = (state_30485[(8)]);
var inst_30463 = (state_30485[(11)]);
var inst_30460__$1 = (state_30485[(2)]);
var inst_30462 = (inst_30460__$1 == null);
var inst_30463__$1 = cljs.core.not(inst_30462);
var state_30485__$1 = (function (){var statearr_30504 = state_30485;
(statearr_30504[(8)] = inst_30460__$1);

(statearr_30504[(11)] = inst_30463__$1);

return statearr_30504;
})();
if(inst_30463__$1){
var statearr_30505_30598 = state_30485__$1;
(statearr_30505_30598[(1)] = (15));

} else {
var statearr_30506_30599 = state_30485__$1;
(statearr_30506_30599[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (16))){
var inst_30463 = (state_30485[(11)]);
var state_30485__$1 = state_30485;
var statearr_30507_30600 = state_30485__$1;
(statearr_30507_30600[(2)] = inst_30463);

(statearr_30507_30600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (10))){
var inst_30453 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30508_30601 = state_30485__$1;
(statearr_30508_30601[(2)] = inst_30453);

(statearr_30508_30601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (18))){
var inst_30466 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30509_30602 = state_30485__$1;
(statearr_30509_30602[(2)] = inst_30466);

(statearr_30509_30602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (8))){
var inst_30449 = cljs.core.async.close_BANG_(to);
var state_30485__$1 = state_30485;
var statearr_30510_30603 = state_30485__$1;
(statearr_30510_30603[(2)] = inst_30449);

(statearr_30510_30603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto__,jobs,results,process,async))
;
return ((function (switch__29774__auto__,c__30034__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_30511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__);

(statearr_30511[(1)] = (1));

return statearr_30511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1 = (function (state_30485){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30485);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30512){if((e30512 instanceof Object)){
var ex__29778__auto__ = e30512;
var statearr_30513_30604 = state_30485;
(statearr_30513_30604[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30605 = state_30485;
state_30485 = G__30605;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__ = function(state_30485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1.call(this,state_30485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__,jobs,results,process,async))
})();
var state__30036__auto__ = (function (){var statearr_30514 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30514[(6)] = c__30034__auto__);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__,jobs,results,process,async))
);

return c__30034__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30607 = arguments.length;
switch (G__30607) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30623 = arguments.length;
switch (G__30623) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30034__auto___30682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___30682,tc,fc){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___30682,tc,fc){
return (function (state_30653){
var state_val_30654 = (state_30653[(1)]);
if((state_val_30654 === (7))){
var inst_30649 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30655_30683 = state_30653__$1;
(statearr_30655_30683[(2)] = inst_30649);

(statearr_30655_30683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (1))){
var state_30653__$1 = state_30653;
var statearr_30656_30688 = state_30653__$1;
(statearr_30656_30688[(2)] = null);

(statearr_30656_30688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (4))){
var inst_30630 = (state_30653[(7)]);
var inst_30630__$1 = (state_30653[(2)]);
var inst_30631 = (inst_30630__$1 == null);
var state_30653__$1 = (function (){var statearr_30657 = state_30653;
(statearr_30657[(7)] = inst_30630__$1);

return statearr_30657;
})();
if(cljs.core.truth_(inst_30631)){
var statearr_30658_30695 = state_30653__$1;
(statearr_30658_30695[(1)] = (5));

} else {
var statearr_30659_30696 = state_30653__$1;
(statearr_30659_30696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (13))){
var state_30653__$1 = state_30653;
var statearr_30660_30697 = state_30653__$1;
(statearr_30660_30697[(2)] = null);

(statearr_30660_30697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (6))){
var inst_30630 = (state_30653[(7)]);
var inst_30636 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30630) : p.call(null,inst_30630));
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30636)){
var statearr_30661_30698 = state_30653__$1;
(statearr_30661_30698[(1)] = (9));

} else {
var statearr_30662_30699 = state_30653__$1;
(statearr_30662_30699[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (3))){
var inst_30651 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30653__$1,inst_30651);
} else {
if((state_val_30654 === (12))){
var state_30653__$1 = state_30653;
var statearr_30663_30700 = state_30653__$1;
(statearr_30663_30700[(2)] = null);

(statearr_30663_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (2))){
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30653__$1,(4),ch);
} else {
if((state_val_30654 === (11))){
var inst_30630 = (state_30653[(7)]);
var inst_30640 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30653__$1,(8),inst_30640,inst_30630);
} else {
if((state_val_30654 === (9))){
var state_30653__$1 = state_30653;
var statearr_30670_30701 = state_30653__$1;
(statearr_30670_30701[(2)] = tc);

(statearr_30670_30701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (5))){
var inst_30633 = cljs.core.async.close_BANG_(tc);
var inst_30634 = cljs.core.async.close_BANG_(fc);
var state_30653__$1 = (function (){var statearr_30671 = state_30653;
(statearr_30671[(8)] = inst_30633);

return statearr_30671;
})();
var statearr_30672_30702 = state_30653__$1;
(statearr_30672_30702[(2)] = inst_30634);

(statearr_30672_30702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (14))){
var inst_30647 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30673_30703 = state_30653__$1;
(statearr_30673_30703[(2)] = inst_30647);

(statearr_30673_30703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (10))){
var state_30653__$1 = state_30653;
var statearr_30674_30704 = state_30653__$1;
(statearr_30674_30704[(2)] = fc);

(statearr_30674_30704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (8))){
var inst_30642 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30642)){
var statearr_30675_30705 = state_30653__$1;
(statearr_30675_30705[(1)] = (12));

} else {
var statearr_30676_30706 = state_30653__$1;
(statearr_30676_30706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___30682,tc,fc))
;
return ((function (switch__29774__auto__,c__30034__auto___30682,tc,fc){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_30653){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30653);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__29778__auto__ = e30678;
var statearr_30679_30707 = state_30653;
(statearr_30679_30707[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30708 = state_30653;
state_30653 = G__30708;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___30682,tc,fc))
})();
var state__30036__auto__ = (function (){var statearr_30680 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30680[(6)] = c__30034__auto___30682);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___30682,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__){
return (function (state_30729){
var state_val_30730 = (state_30729[(1)]);
if((state_val_30730 === (7))){
var inst_30725 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30732_30756 = state_30729__$1;
(statearr_30732_30756[(2)] = inst_30725);

(statearr_30732_30756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (1))){
var inst_30709 = init;
var state_30729__$1 = (function (){var statearr_30733 = state_30729;
(statearr_30733[(7)] = inst_30709);

return statearr_30733;
})();
var statearr_30735_30758 = state_30729__$1;
(statearr_30735_30758[(2)] = null);

(statearr_30735_30758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (4))){
var inst_30712 = (state_30729[(8)]);
var inst_30712__$1 = (state_30729[(2)]);
var inst_30713 = (inst_30712__$1 == null);
var state_30729__$1 = (function (){var statearr_30739 = state_30729;
(statearr_30739[(8)] = inst_30712__$1);

return statearr_30739;
})();
if(cljs.core.truth_(inst_30713)){
var statearr_30740_30759 = state_30729__$1;
(statearr_30740_30759[(1)] = (5));

} else {
var statearr_30741_30760 = state_30729__$1;
(statearr_30741_30760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (6))){
var inst_30709 = (state_30729[(7)]);
var inst_30712 = (state_30729[(8)]);
var inst_30716 = (state_30729[(9)]);
var inst_30716__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30709,inst_30712) : f.call(null,inst_30709,inst_30712));
var inst_30717 = cljs.core.reduced_QMARK_(inst_30716__$1);
var state_30729__$1 = (function (){var statearr_30742 = state_30729;
(statearr_30742[(9)] = inst_30716__$1);

return statearr_30742;
})();
if(inst_30717){
var statearr_30743_30762 = state_30729__$1;
(statearr_30743_30762[(1)] = (8));

} else {
var statearr_30744_30763 = state_30729__$1;
(statearr_30744_30763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (3))){
var inst_30727 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30729__$1,inst_30727);
} else {
if((state_val_30730 === (2))){
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30729__$1,(4),ch);
} else {
if((state_val_30730 === (9))){
var inst_30716 = (state_30729[(9)]);
var inst_30709 = inst_30716;
var state_30729__$1 = (function (){var statearr_30745 = state_30729;
(statearr_30745[(7)] = inst_30709);

return statearr_30745;
})();
var statearr_30746_30764 = state_30729__$1;
(statearr_30746_30764[(2)] = null);

(statearr_30746_30764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (5))){
var inst_30709 = (state_30729[(7)]);
var state_30729__$1 = state_30729;
var statearr_30747_30765 = state_30729__$1;
(statearr_30747_30765[(2)] = inst_30709);

(statearr_30747_30765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (10))){
var inst_30723 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30748_30772 = state_30729__$1;
(statearr_30748_30772[(2)] = inst_30723);

(statearr_30748_30772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (8))){
var inst_30716 = (state_30729[(9)]);
var inst_30719 = cljs.core.deref(inst_30716);
var state_30729__$1 = state_30729;
var statearr_30749_30773 = state_30729__$1;
(statearr_30749_30773[(2)] = inst_30719);

(statearr_30749_30773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto__))
;
return ((function (switch__29774__auto__,c__30034__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29775__auto____0 = (function (){
var statearr_30750 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30750[(0)] = cljs$core$async$reduce_$_state_machine__29775__auto__);

(statearr_30750[(1)] = (1));

return statearr_30750;
});
var cljs$core$async$reduce_$_state_machine__29775__auto____1 = (function (state_30729){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30729);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30751){if((e30751 instanceof Object)){
var ex__29778__auto__ = e30751;
var statearr_30752_30775 = state_30729;
(statearr_30752_30775[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30776 = state_30729;
state_30729 = G__30776;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29775__auto__ = function(state_30729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29775__auto____1.call(this,state_30729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29775__auto____0;
cljs$core$async$reduce_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29775__auto____1;
return cljs$core$async$reduce_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__))
})();
var state__30036__auto__ = (function (){var statearr_30754 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30754[(6)] = c__30034__auto__);

return statearr_30754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__))
);

return c__30034__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__,f__$1){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__,f__$1){
return (function (state_30782){
var state_val_30783 = (state_30782[(1)]);
if((state_val_30783 === (1))){
var inst_30777 = cljs.core.async.reduce(f__$1,init,ch);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30782__$1,(2),inst_30777);
} else {
if((state_val_30783 === (2))){
var inst_30779 = (state_30782[(2)]);
var inst_30780 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30779) : f__$1.call(null,inst_30779));
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30782__$1,inst_30780);
} else {
return null;
}
}
});})(c__30034__auto__,f__$1))
;
return ((function (switch__29774__auto__,c__30034__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29775__auto____0 = (function (){
var statearr_30784 = [null,null,null,null,null,null,null];
(statearr_30784[(0)] = cljs$core$async$transduce_$_state_machine__29775__auto__);

(statearr_30784[(1)] = (1));

return statearr_30784;
});
var cljs$core$async$transduce_$_state_machine__29775__auto____1 = (function (state_30782){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30782);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30785){if((e30785 instanceof Object)){
var ex__29778__auto__ = e30785;
var statearr_30786_30789 = state_30782;
(statearr_30786_30789[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30790 = state_30782;
state_30782 = G__30790;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29775__auto__ = function(state_30782){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29775__auto____1.call(this,state_30782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29775__auto____0;
cljs$core$async$transduce_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29775__auto____1;
return cljs$core$async$transduce_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__,f__$1))
})();
var state__30036__auto__ = (function (){var statearr_30787 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30787[(6)] = c__30034__auto__);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__,f__$1))
);

return c__30034__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30794 = arguments.length;
switch (G__30794) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__){
return (function (state_30822){
var state_val_30823 = (state_30822[(1)]);
if((state_val_30823 === (7))){
var inst_30802 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30828_30861 = state_30822__$1;
(statearr_30828_30861[(2)] = inst_30802);

(statearr_30828_30861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (1))){
var inst_30796 = cljs.core.seq(coll);
var inst_30797 = inst_30796;
var state_30822__$1 = (function (){var statearr_30829 = state_30822;
(statearr_30829[(7)] = inst_30797);

return statearr_30829;
})();
var statearr_30830_30862 = state_30822__$1;
(statearr_30830_30862[(2)] = null);

(statearr_30830_30862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (4))){
var inst_30797 = (state_30822[(7)]);
var inst_30800 = cljs.core.first(inst_30797);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30822__$1,(7),ch,inst_30800);
} else {
if((state_val_30823 === (13))){
var inst_30816 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30831_30866 = state_30822__$1;
(statearr_30831_30866[(2)] = inst_30816);

(statearr_30831_30866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (6))){
var inst_30805 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
if(cljs.core.truth_(inst_30805)){
var statearr_30832_30867 = state_30822__$1;
(statearr_30832_30867[(1)] = (8));

} else {
var statearr_30833_30869 = state_30822__$1;
(statearr_30833_30869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (3))){
var inst_30820 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30822__$1,inst_30820);
} else {
if((state_val_30823 === (12))){
var state_30822__$1 = state_30822;
var statearr_30836_30870 = state_30822__$1;
(statearr_30836_30870[(2)] = null);

(statearr_30836_30870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (2))){
var inst_30797 = (state_30822[(7)]);
var state_30822__$1 = state_30822;
if(cljs.core.truth_(inst_30797)){
var statearr_30837_30871 = state_30822__$1;
(statearr_30837_30871[(1)] = (4));

} else {
var statearr_30839_30872 = state_30822__$1;
(statearr_30839_30872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (11))){
var inst_30813 = cljs.core.async.close_BANG_(ch);
var state_30822__$1 = state_30822;
var statearr_30840_30875 = state_30822__$1;
(statearr_30840_30875[(2)] = inst_30813);

(statearr_30840_30875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (9))){
var state_30822__$1 = state_30822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30841_30876 = state_30822__$1;
(statearr_30841_30876[(1)] = (11));

} else {
var statearr_30842_30877 = state_30822__$1;
(statearr_30842_30877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (5))){
var inst_30797 = (state_30822[(7)]);
var state_30822__$1 = state_30822;
var statearr_30845_30879 = state_30822__$1;
(statearr_30845_30879[(2)] = inst_30797);

(statearr_30845_30879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (10))){
var inst_30818 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30848_30880 = state_30822__$1;
(statearr_30848_30880[(2)] = inst_30818);

(statearr_30848_30880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (8))){
var inst_30797 = (state_30822[(7)]);
var inst_30809 = cljs.core.next(inst_30797);
var inst_30797__$1 = inst_30809;
var state_30822__$1 = (function (){var statearr_30849 = state_30822;
(statearr_30849[(7)] = inst_30797__$1);

return statearr_30849;
})();
var statearr_30852_30883 = state_30822__$1;
(statearr_30852_30883[(2)] = null);

(statearr_30852_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto__))
;
return ((function (switch__29774__auto__,c__30034__auto__){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_30822){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_30822);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__29778__auto__ = e30854;
var statearr_30855_30884 = state_30822;
(statearr_30855_30884[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30885 = state_30822;
state_30822 = G__30885;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_30822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_30822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__))
})();
var state__30036__auto__ = (function (){var statearr_30856 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_30856[(6)] = c__30034__auto__);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__))
);

return c__30034__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30903 = (function (ch,cs,meta30904){
this.ch = ch;
this.cs = cs;
this.meta30904 = meta30904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30905,meta30904__$1){
var self__ = this;
var _30905__$1 = this;
return (new cljs.core.async.t_cljs$core$async30903(self__.ch,self__.cs,meta30904__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30905){
var self__ = this;
var _30905__$1 = this;
return self__.meta30904;
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30904","meta30904",-406672184,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30903";

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30903");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30903.
 */
cljs.core.async.__GT_t_cljs$core$async30903 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30903(ch__$1,cs__$1,meta30904){
return (new cljs.core.async.t_cljs$core$async30903(ch__$1,cs__$1,meta30904));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30903(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30034__auto___31208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___31208,cs,m,dchan,dctr,done){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___31208,cs,m,dchan,dctr,done){
return (function (state_31044){
var state_val_31045 = (state_31044[(1)]);
if((state_val_31045 === (7))){
var inst_31040 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31046_31209 = state_31044__$1;
(statearr_31046_31209[(2)] = inst_31040);

(statearr_31046_31209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (20))){
var inst_30943 = (state_31044[(7)]);
var inst_30955 = cljs.core.first(inst_30943);
var inst_30956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30955,(0),null);
var inst_30957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30955,(1),null);
var state_31044__$1 = (function (){var statearr_31047 = state_31044;
(statearr_31047[(8)] = inst_30956);

return statearr_31047;
})();
if(cljs.core.truth_(inst_30957)){
var statearr_31048_31210 = state_31044__$1;
(statearr_31048_31210[(1)] = (22));

} else {
var statearr_31049_31211 = state_31044__$1;
(statearr_31049_31211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (27))){
var inst_30992 = (state_31044[(9)]);
var inst_30912 = (state_31044[(10)]);
var inst_30985 = (state_31044[(11)]);
var inst_30987 = (state_31044[(12)]);
var inst_30992__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30985,inst_30987);
var inst_30993 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30992__$1,inst_30912,done);
var state_31044__$1 = (function (){var statearr_31050 = state_31044;
(statearr_31050[(9)] = inst_30992__$1);

return statearr_31050;
})();
if(cljs.core.truth_(inst_30993)){
var statearr_31057_31212 = state_31044__$1;
(statearr_31057_31212[(1)] = (30));

} else {
var statearr_31058_31213 = state_31044__$1;
(statearr_31058_31213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (1))){
var state_31044__$1 = state_31044;
var statearr_31061_31216 = state_31044__$1;
(statearr_31061_31216[(2)] = null);

(statearr_31061_31216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (24))){
var inst_30943 = (state_31044[(7)]);
var inst_30962 = (state_31044[(2)]);
var inst_30963 = cljs.core.next(inst_30943);
var inst_30921 = inst_30963;
var inst_30922 = null;
var inst_30923 = (0);
var inst_30924 = (0);
var state_31044__$1 = (function (){var statearr_31062 = state_31044;
(statearr_31062[(13)] = inst_30921);

(statearr_31062[(14)] = inst_30922);

(statearr_31062[(15)] = inst_30962);

(statearr_31062[(16)] = inst_30924);

(statearr_31062[(17)] = inst_30923);

return statearr_31062;
})();
var statearr_31063_31219 = state_31044__$1;
(statearr_31063_31219[(2)] = null);

(statearr_31063_31219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (39))){
var state_31044__$1 = state_31044;
var statearr_31068_31221 = state_31044__$1;
(statearr_31068_31221[(2)] = null);

(statearr_31068_31221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (4))){
var inst_30912 = (state_31044[(10)]);
var inst_30912__$1 = (state_31044[(2)]);
var inst_30913 = (inst_30912__$1 == null);
var state_31044__$1 = (function (){var statearr_31069 = state_31044;
(statearr_31069[(10)] = inst_30912__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30913)){
var statearr_31071_31224 = state_31044__$1;
(statearr_31071_31224[(1)] = (5));

} else {
var statearr_31072_31225 = state_31044__$1;
(statearr_31072_31225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (15))){
var inst_30921 = (state_31044[(13)]);
var inst_30922 = (state_31044[(14)]);
var inst_30924 = (state_31044[(16)]);
var inst_30923 = (state_31044[(17)]);
var inst_30939 = (state_31044[(2)]);
var inst_30940 = (inst_30924 + (1));
var tmp31065 = inst_30921;
var tmp31066 = inst_30922;
var tmp31067 = inst_30923;
var inst_30921__$1 = tmp31065;
var inst_30922__$1 = tmp31066;
var inst_30923__$1 = tmp31067;
var inst_30924__$1 = inst_30940;
var state_31044__$1 = (function (){var statearr_31076 = state_31044;
(statearr_31076[(13)] = inst_30921__$1);

(statearr_31076[(14)] = inst_30922__$1);

(statearr_31076[(16)] = inst_30924__$1);

(statearr_31076[(18)] = inst_30939);

(statearr_31076[(17)] = inst_30923__$1);

return statearr_31076;
})();
var statearr_31077_31229 = state_31044__$1;
(statearr_31077_31229[(2)] = null);

(statearr_31077_31229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (21))){
var inst_30966 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31083_31233 = state_31044__$1;
(statearr_31083_31233[(2)] = inst_30966);

(statearr_31083_31233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (31))){
var inst_30992 = (state_31044[(9)]);
var inst_30996 = done(null);
var inst_30997 = cljs.core.async.untap_STAR_(m,inst_30992);
var state_31044__$1 = (function (){var statearr_31084 = state_31044;
(statearr_31084[(19)] = inst_30996);

return statearr_31084;
})();
var statearr_31088_31236 = state_31044__$1;
(statearr_31088_31236[(2)] = inst_30997);

(statearr_31088_31236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (32))){
var inst_30986 = (state_31044[(20)]);
var inst_30985 = (state_31044[(11)]);
var inst_30987 = (state_31044[(12)]);
var inst_30984 = (state_31044[(21)]);
var inst_30999 = (state_31044[(2)]);
var inst_31000 = (inst_30987 + (1));
var tmp31080 = inst_30986;
var tmp31081 = inst_30985;
var tmp31082 = inst_30984;
var inst_30984__$1 = tmp31082;
var inst_30985__$1 = tmp31081;
var inst_30986__$1 = tmp31080;
var inst_30987__$1 = inst_31000;
var state_31044__$1 = (function (){var statearr_31090 = state_31044;
(statearr_31090[(20)] = inst_30986__$1);

(statearr_31090[(11)] = inst_30985__$1);

(statearr_31090[(12)] = inst_30987__$1);

(statearr_31090[(21)] = inst_30984__$1);

(statearr_31090[(22)] = inst_30999);

return statearr_31090;
})();
var statearr_31091_31242 = state_31044__$1;
(statearr_31091_31242[(2)] = null);

(statearr_31091_31242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (40))){
var inst_31012 = (state_31044[(23)]);
var inst_31016 = done(null);
var inst_31017 = cljs.core.async.untap_STAR_(m,inst_31012);
var state_31044__$1 = (function (){var statearr_31092 = state_31044;
(statearr_31092[(24)] = inst_31016);

return statearr_31092;
})();
var statearr_31094_31243 = state_31044__$1;
(statearr_31094_31243[(2)] = inst_31017);

(statearr_31094_31243[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (33))){
var inst_31003 = (state_31044[(25)]);
var inst_31005 = cljs.core.chunked_seq_QMARK_(inst_31003);
var state_31044__$1 = state_31044;
if(inst_31005){
var statearr_31095_31244 = state_31044__$1;
(statearr_31095_31244[(1)] = (36));

} else {
var statearr_31096_31246 = state_31044__$1;
(statearr_31096_31246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (13))){
var inst_30933 = (state_31044[(26)]);
var inst_30936 = cljs.core.async.close_BANG_(inst_30933);
var state_31044__$1 = state_31044;
var statearr_31097_31249 = state_31044__$1;
(statearr_31097_31249[(2)] = inst_30936);

(statearr_31097_31249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (22))){
var inst_30956 = (state_31044[(8)]);
var inst_30959 = cljs.core.async.close_BANG_(inst_30956);
var state_31044__$1 = state_31044;
var statearr_31098_31250 = state_31044__$1;
(statearr_31098_31250[(2)] = inst_30959);

(statearr_31098_31250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (36))){
var inst_31003 = (state_31044[(25)]);
var inst_31007 = cljs.core.chunk_first(inst_31003);
var inst_31008 = cljs.core.chunk_rest(inst_31003);
var inst_31009 = cljs.core.count(inst_31007);
var inst_30984 = inst_31008;
var inst_30985 = inst_31007;
var inst_30986 = inst_31009;
var inst_30987 = (0);
var state_31044__$1 = (function (){var statearr_31099 = state_31044;
(statearr_31099[(20)] = inst_30986);

(statearr_31099[(11)] = inst_30985);

(statearr_31099[(12)] = inst_30987);

(statearr_31099[(21)] = inst_30984);

return statearr_31099;
})();
var statearr_31100_31251 = state_31044__$1;
(statearr_31100_31251[(2)] = null);

(statearr_31100_31251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (41))){
var inst_31003 = (state_31044[(25)]);
var inst_31019 = (state_31044[(2)]);
var inst_31020 = cljs.core.next(inst_31003);
var inst_30984 = inst_31020;
var inst_30985 = null;
var inst_30986 = (0);
var inst_30987 = (0);
var state_31044__$1 = (function (){var statearr_31101 = state_31044;
(statearr_31101[(20)] = inst_30986);

(statearr_31101[(11)] = inst_30985);

(statearr_31101[(12)] = inst_30987);

(statearr_31101[(21)] = inst_30984);

(statearr_31101[(27)] = inst_31019);

return statearr_31101;
})();
var statearr_31103_31253 = state_31044__$1;
(statearr_31103_31253[(2)] = null);

(statearr_31103_31253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (43))){
var state_31044__$1 = state_31044;
var statearr_31105_31254 = state_31044__$1;
(statearr_31105_31254[(2)] = null);

(statearr_31105_31254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (29))){
var inst_31028 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31106_31256 = state_31044__$1;
(statearr_31106_31256[(2)] = inst_31028);

(statearr_31106_31256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (44))){
var inst_31037 = (state_31044[(2)]);
var state_31044__$1 = (function (){var statearr_31107 = state_31044;
(statearr_31107[(28)] = inst_31037);

return statearr_31107;
})();
var statearr_31108_31257 = state_31044__$1;
(statearr_31108_31257[(2)] = null);

(statearr_31108_31257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (6))){
var inst_30976 = (state_31044[(29)]);
var inst_30975 = cljs.core.deref(cs);
var inst_30976__$1 = cljs.core.keys(inst_30975);
var inst_30977 = cljs.core.count(inst_30976__$1);
var inst_30978 = cljs.core.reset_BANG_(dctr,inst_30977);
var inst_30983 = cljs.core.seq(inst_30976__$1);
var inst_30984 = inst_30983;
var inst_30985 = null;
var inst_30986 = (0);
var inst_30987 = (0);
var state_31044__$1 = (function (){var statearr_31112 = state_31044;
(statearr_31112[(30)] = inst_30978);

(statearr_31112[(29)] = inst_30976__$1);

(statearr_31112[(20)] = inst_30986);

(statearr_31112[(11)] = inst_30985);

(statearr_31112[(12)] = inst_30987);

(statearr_31112[(21)] = inst_30984);

return statearr_31112;
})();
var statearr_31114_31259 = state_31044__$1;
(statearr_31114_31259[(2)] = null);

(statearr_31114_31259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (28))){
var inst_30984 = (state_31044[(21)]);
var inst_31003 = (state_31044[(25)]);
var inst_31003__$1 = cljs.core.seq(inst_30984);
var state_31044__$1 = (function (){var statearr_31117 = state_31044;
(statearr_31117[(25)] = inst_31003__$1);

return statearr_31117;
})();
if(inst_31003__$1){
var statearr_31118_31260 = state_31044__$1;
(statearr_31118_31260[(1)] = (33));

} else {
var statearr_31120_31261 = state_31044__$1;
(statearr_31120_31261[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (25))){
var inst_30986 = (state_31044[(20)]);
var inst_30987 = (state_31044[(12)]);
var inst_30989 = (inst_30987 < inst_30986);
var inst_30990 = inst_30989;
var state_31044__$1 = state_31044;
if(cljs.core.truth_(inst_30990)){
var statearr_31122_31262 = state_31044__$1;
(statearr_31122_31262[(1)] = (27));

} else {
var statearr_31123_31263 = state_31044__$1;
(statearr_31123_31263[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (34))){
var state_31044__$1 = state_31044;
var statearr_31128_31265 = state_31044__$1;
(statearr_31128_31265[(2)] = null);

(statearr_31128_31265[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (17))){
var state_31044__$1 = state_31044;
var statearr_31132_31267 = state_31044__$1;
(statearr_31132_31267[(2)] = null);

(statearr_31132_31267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (3))){
var inst_31042 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31044__$1,inst_31042);
} else {
if((state_val_31045 === (12))){
var inst_30971 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31135_31272 = state_31044__$1;
(statearr_31135_31272[(2)] = inst_30971);

(statearr_31135_31272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (2))){
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31044__$1,(4),ch);
} else {
if((state_val_31045 === (23))){
var state_31044__$1 = state_31044;
var statearr_31140_31278 = state_31044__$1;
(statearr_31140_31278[(2)] = null);

(statearr_31140_31278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (35))){
var inst_31026 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31142_31279 = state_31044__$1;
(statearr_31142_31279[(2)] = inst_31026);

(statearr_31142_31279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (19))){
var inst_30943 = (state_31044[(7)]);
var inst_30947 = cljs.core.chunk_first(inst_30943);
var inst_30948 = cljs.core.chunk_rest(inst_30943);
var inst_30949 = cljs.core.count(inst_30947);
var inst_30921 = inst_30948;
var inst_30922 = inst_30947;
var inst_30923 = inst_30949;
var inst_30924 = (0);
var state_31044__$1 = (function (){var statearr_31143 = state_31044;
(statearr_31143[(13)] = inst_30921);

(statearr_31143[(14)] = inst_30922);

(statearr_31143[(16)] = inst_30924);

(statearr_31143[(17)] = inst_30923);

return statearr_31143;
})();
var statearr_31145_31281 = state_31044__$1;
(statearr_31145_31281[(2)] = null);

(statearr_31145_31281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (11))){
var inst_30943 = (state_31044[(7)]);
var inst_30921 = (state_31044[(13)]);
var inst_30943__$1 = cljs.core.seq(inst_30921);
var state_31044__$1 = (function (){var statearr_31148 = state_31044;
(statearr_31148[(7)] = inst_30943__$1);

return statearr_31148;
})();
if(inst_30943__$1){
var statearr_31149_31282 = state_31044__$1;
(statearr_31149_31282[(1)] = (16));

} else {
var statearr_31151_31283 = state_31044__$1;
(statearr_31151_31283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (9))){
var inst_30973 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31152_31284 = state_31044__$1;
(statearr_31152_31284[(2)] = inst_30973);

(statearr_31152_31284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (5))){
var inst_30919 = cljs.core.deref(cs);
var inst_30920 = cljs.core.seq(inst_30919);
var inst_30921 = inst_30920;
var inst_30922 = null;
var inst_30923 = (0);
var inst_30924 = (0);
var state_31044__$1 = (function (){var statearr_31154 = state_31044;
(statearr_31154[(13)] = inst_30921);

(statearr_31154[(14)] = inst_30922);

(statearr_31154[(16)] = inst_30924);

(statearr_31154[(17)] = inst_30923);

return statearr_31154;
})();
var statearr_31156_31288 = state_31044__$1;
(statearr_31156_31288[(2)] = null);

(statearr_31156_31288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (14))){
var state_31044__$1 = state_31044;
var statearr_31158_31289 = state_31044__$1;
(statearr_31158_31289[(2)] = null);

(statearr_31158_31289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (45))){
var inst_31034 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31159_31290 = state_31044__$1;
(statearr_31159_31290[(2)] = inst_31034);

(statearr_31159_31290[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (26))){
var inst_30976 = (state_31044[(29)]);
var inst_31030 = (state_31044[(2)]);
var inst_31031 = cljs.core.seq(inst_30976);
var state_31044__$1 = (function (){var statearr_31163 = state_31044;
(statearr_31163[(31)] = inst_31030);

return statearr_31163;
})();
if(inst_31031){
var statearr_31164_31300 = state_31044__$1;
(statearr_31164_31300[(1)] = (42));

} else {
var statearr_31166_31301 = state_31044__$1;
(statearr_31166_31301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (16))){
var inst_30943 = (state_31044[(7)]);
var inst_30945 = cljs.core.chunked_seq_QMARK_(inst_30943);
var state_31044__$1 = state_31044;
if(inst_30945){
var statearr_31167_31302 = state_31044__$1;
(statearr_31167_31302[(1)] = (19));

} else {
var statearr_31168_31303 = state_31044__$1;
(statearr_31168_31303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (38))){
var inst_31023 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31169_31304 = state_31044__$1;
(statearr_31169_31304[(2)] = inst_31023);

(statearr_31169_31304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (30))){
var state_31044__$1 = state_31044;
var statearr_31171_31305 = state_31044__$1;
(statearr_31171_31305[(2)] = null);

(statearr_31171_31305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (10))){
var inst_30922 = (state_31044[(14)]);
var inst_30924 = (state_31044[(16)]);
var inst_30932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30922,inst_30924);
var inst_30933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30932,(0),null);
var inst_30934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30932,(1),null);
var state_31044__$1 = (function (){var statearr_31173 = state_31044;
(statearr_31173[(26)] = inst_30933);

return statearr_31173;
})();
if(cljs.core.truth_(inst_30934)){
var statearr_31175_31309 = state_31044__$1;
(statearr_31175_31309[(1)] = (13));

} else {
var statearr_31177_31310 = state_31044__$1;
(statearr_31177_31310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (18))){
var inst_30969 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31179_31311 = state_31044__$1;
(statearr_31179_31311[(2)] = inst_30969);

(statearr_31179_31311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (42))){
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31044__$1,(45),dchan);
} else {
if((state_val_31045 === (37))){
var inst_30912 = (state_31044[(10)]);
var inst_31012 = (state_31044[(23)]);
var inst_31003 = (state_31044[(25)]);
var inst_31012__$1 = cljs.core.first(inst_31003);
var inst_31013 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31012__$1,inst_30912,done);
var state_31044__$1 = (function (){var statearr_31183 = state_31044;
(statearr_31183[(23)] = inst_31012__$1);

return statearr_31183;
})();
if(cljs.core.truth_(inst_31013)){
var statearr_31184_31312 = state_31044__$1;
(statearr_31184_31312[(1)] = (39));

} else {
var statearr_31185_31313 = state_31044__$1;
(statearr_31185_31313[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (8))){
var inst_30924 = (state_31044[(16)]);
var inst_30923 = (state_31044[(17)]);
var inst_30926 = (inst_30924 < inst_30923);
var inst_30927 = inst_30926;
var state_31044__$1 = state_31044;
if(cljs.core.truth_(inst_30927)){
var statearr_31186_31314 = state_31044__$1;
(statearr_31186_31314[(1)] = (10));

} else {
var statearr_31187_31315 = state_31044__$1;
(statearr_31187_31315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___31208,cs,m,dchan,dctr,done))
;
return ((function (switch__29774__auto__,c__30034__auto___31208,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29775__auto__ = null;
var cljs$core$async$mult_$_state_machine__29775__auto____0 = (function (){
var statearr_31188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31188[(0)] = cljs$core$async$mult_$_state_machine__29775__auto__);

(statearr_31188[(1)] = (1));

return statearr_31188;
});
var cljs$core$async$mult_$_state_machine__29775__auto____1 = (function (state_31044){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_31044);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e31198){if((e31198 instanceof Object)){
var ex__29778__auto__ = e31198;
var statearr_31199_31317 = state_31044;
(statearr_31199_31317[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31319 = state_31044;
state_31044 = G__31319;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29775__auto__ = function(state_31044){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29775__auto____1.call(this,state_31044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29775__auto____0;
cljs$core$async$mult_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29775__auto____1;
return cljs$core$async$mult_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___31208,cs,m,dchan,dctr,done))
})();
var state__30036__auto__ = (function (){var statearr_31202 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_31202[(6)] = c__30034__auto___31208);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___31208,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31321 = arguments.length;
switch (G__31321) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31376 = arguments.length;
var i__4500__auto___31377 = (0);
while(true){
if((i__4500__auto___31377 < len__4499__auto___31376)){
args__4502__auto__.push((arguments[i__4500__auto___31377]));

var G__31378 = (i__4500__auto___31377 + (1));
i__4500__auto___31377 = G__31378;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31361){
var map__31362 = p__31361;
var map__31362__$1 = ((((!((map__31362 == null)))?(((((map__31362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31362):map__31362);
var opts = map__31362__$1;
var statearr_31365_31379 = state;
(statearr_31365_31379[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__31362,map__31362__$1,opts){
return (function (val){
var statearr_31367_31381 = state;
(statearr_31367_31381[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31362,map__31362__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31370_31383 = state;
(statearr_31370_31383[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31355){
var G__31356 = cljs.core.first(seq31355);
var seq31355__$1 = cljs.core.next(seq31355);
var G__31357 = cljs.core.first(seq31355__$1);
var seq31355__$2 = cljs.core.next(seq31355__$1);
var G__31358 = cljs.core.first(seq31355__$2);
var seq31355__$3 = cljs.core.next(seq31355__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31356,G__31357,G__31358,seq31355__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31390 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31391){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31391 = meta31391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31392,meta31391__$1){
var self__ = this;
var _31392__$1 = this;
return (new cljs.core.async.t_cljs$core$async31390(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31391__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31392){
var self__ = this;
var _31392__$1 = this;
return self__.meta31391;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31391","meta31391",-2059744173,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31390";

cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async31390");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31390.
 */
cljs.core.async.__GT_t_cljs$core$async31390 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31390(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31391){
return (new cljs.core.async.t_cljs$core$async31390(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31391));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31390(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30034__auto___31604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31518){
var state_val_31519 = (state_31518[(1)]);
if((state_val_31519 === (7))){
var inst_31422 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31520_31605 = state_31518__$1;
(statearr_31520_31605[(2)] = inst_31422);

(statearr_31520_31605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (20))){
var inst_31434 = (state_31518[(7)]);
var state_31518__$1 = state_31518;
var statearr_31523_31606 = state_31518__$1;
(statearr_31523_31606[(2)] = inst_31434);

(statearr_31523_31606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (27))){
var state_31518__$1 = state_31518;
var statearr_31524_31607 = state_31518__$1;
(statearr_31524_31607[(2)] = null);

(statearr_31524_31607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (1))){
var inst_31407 = (state_31518[(8)]);
var inst_31407__$1 = calc_state();
var inst_31411 = (inst_31407__$1 == null);
var inst_31412 = cljs.core.not(inst_31411);
var state_31518__$1 = (function (){var statearr_31526 = state_31518;
(statearr_31526[(8)] = inst_31407__$1);

return statearr_31526;
})();
if(inst_31412){
var statearr_31527_31608 = state_31518__$1;
(statearr_31527_31608[(1)] = (2));

} else {
var statearr_31528_31609 = state_31518__$1;
(statearr_31528_31609[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (24))){
var inst_31474 = (state_31518[(9)]);
var inst_31490 = (state_31518[(10)]);
var inst_31463 = (state_31518[(11)]);
var inst_31490__$1 = (inst_31463.cljs$core$IFn$_invoke$arity$1 ? inst_31463.cljs$core$IFn$_invoke$arity$1(inst_31474) : inst_31463.call(null,inst_31474));
var state_31518__$1 = (function (){var statearr_31529 = state_31518;
(statearr_31529[(10)] = inst_31490__$1);

return statearr_31529;
})();
if(cljs.core.truth_(inst_31490__$1)){
var statearr_31530_31610 = state_31518__$1;
(statearr_31530_31610[(1)] = (29));

} else {
var statearr_31531_31611 = state_31518__$1;
(statearr_31531_31611[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (4))){
var inst_31425 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31425)){
var statearr_31533_31612 = state_31518__$1;
(statearr_31533_31612[(1)] = (8));

} else {
var statearr_31534_31613 = state_31518__$1;
(statearr_31534_31613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (15))){
var inst_31456 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31456)){
var statearr_31535_31615 = state_31518__$1;
(statearr_31535_31615[(1)] = (19));

} else {
var statearr_31536_31618 = state_31518__$1;
(statearr_31536_31618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (21))){
var inst_31461 = (state_31518[(12)]);
var inst_31461__$1 = (state_31518[(2)]);
var inst_31463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31461__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31461__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31461__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31518__$1 = (function (){var statearr_31537 = state_31518;
(statearr_31537[(12)] = inst_31461__$1);

(statearr_31537[(13)] = inst_31464);

(statearr_31537[(11)] = inst_31463);

return statearr_31537;
})();
return cljs.core.async.ioc_alts_BANG_(state_31518__$1,(22),inst_31465);
} else {
if((state_val_31519 === (31))){
var inst_31498 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31498)){
var statearr_31538_31621 = state_31518__$1;
(statearr_31538_31621[(1)] = (32));

} else {
var statearr_31539_31623 = state_31518__$1;
(statearr_31539_31623[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (32))){
var inst_31473 = (state_31518[(14)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31518__$1,(35),out,inst_31473);
} else {
if((state_val_31519 === (33))){
var inst_31461 = (state_31518[(12)]);
var inst_31434 = inst_31461;
var state_31518__$1 = (function (){var statearr_31543 = state_31518;
(statearr_31543[(7)] = inst_31434);

return statearr_31543;
})();
var statearr_31544_31624 = state_31518__$1;
(statearr_31544_31624[(2)] = null);

(statearr_31544_31624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (13))){
var inst_31434 = (state_31518[(7)]);
var inst_31444 = inst_31434.cljs$lang$protocol_mask$partition0$;
var inst_31445 = (inst_31444 & (64));
var inst_31446 = inst_31434.cljs$core$ISeq$;
var inst_31447 = (cljs.core.PROTOCOL_SENTINEL === inst_31446);
var inst_31448 = ((inst_31445) || (inst_31447));
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31448)){
var statearr_31545_31629 = state_31518__$1;
(statearr_31545_31629[(1)] = (16));

} else {
var statearr_31546_31630 = state_31518__$1;
(statearr_31546_31630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (22))){
var inst_31474 = (state_31518[(9)]);
var inst_31473 = (state_31518[(14)]);
var inst_31472 = (state_31518[(2)]);
var inst_31473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31472,(0),null);
var inst_31474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31472,(1),null);
var inst_31475 = (inst_31473__$1 == null);
var inst_31476 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31474__$1,change);
var inst_31477 = ((inst_31475) || (inst_31476));
var state_31518__$1 = (function (){var statearr_31547 = state_31518;
(statearr_31547[(9)] = inst_31474__$1);

(statearr_31547[(14)] = inst_31473__$1);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31477)){
var statearr_31550_31637 = state_31518__$1;
(statearr_31550_31637[(1)] = (23));

} else {
var statearr_31551_31638 = state_31518__$1;
(statearr_31551_31638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (36))){
var inst_31461 = (state_31518[(12)]);
var inst_31434 = inst_31461;
var state_31518__$1 = (function (){var statearr_31553 = state_31518;
(statearr_31553[(7)] = inst_31434);

return statearr_31553;
})();
var statearr_31554_31643 = state_31518__$1;
(statearr_31554_31643[(2)] = null);

(statearr_31554_31643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (29))){
var inst_31490 = (state_31518[(10)]);
var state_31518__$1 = state_31518;
var statearr_31555_31644 = state_31518__$1;
(statearr_31555_31644[(2)] = inst_31490);

(statearr_31555_31644[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (6))){
var state_31518__$1 = state_31518;
var statearr_31558_31645 = state_31518__$1;
(statearr_31558_31645[(2)] = false);

(statearr_31558_31645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (28))){
var inst_31486 = (state_31518[(2)]);
var inst_31487 = calc_state();
var inst_31434 = inst_31487;
var state_31518__$1 = (function (){var statearr_31561 = state_31518;
(statearr_31561[(15)] = inst_31486);

(statearr_31561[(7)] = inst_31434);

return statearr_31561;
})();
var statearr_31562_31646 = state_31518__$1;
(statearr_31562_31646[(2)] = null);

(statearr_31562_31646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (25))){
var inst_31512 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31565_31648 = state_31518__$1;
(statearr_31565_31648[(2)] = inst_31512);

(statearr_31565_31648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (34))){
var inst_31510 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31566_31649 = state_31518__$1;
(statearr_31566_31649[(2)] = inst_31510);

(statearr_31566_31649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (17))){
var state_31518__$1 = state_31518;
var statearr_31567_31650 = state_31518__$1;
(statearr_31567_31650[(2)] = false);

(statearr_31567_31650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (3))){
var state_31518__$1 = state_31518;
var statearr_31572_31651 = state_31518__$1;
(statearr_31572_31651[(2)] = false);

(statearr_31572_31651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (12))){
var inst_31514 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31518__$1,inst_31514);
} else {
if((state_val_31519 === (2))){
var inst_31407 = (state_31518[(8)]);
var inst_31414 = inst_31407.cljs$lang$protocol_mask$partition0$;
var inst_31415 = (inst_31414 & (64));
var inst_31416 = inst_31407.cljs$core$ISeq$;
var inst_31417 = (cljs.core.PROTOCOL_SENTINEL === inst_31416);
var inst_31418 = ((inst_31415) || (inst_31417));
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31418)){
var statearr_31573_31652 = state_31518__$1;
(statearr_31573_31652[(1)] = (5));

} else {
var statearr_31574_31653 = state_31518__$1;
(statearr_31574_31653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (23))){
var inst_31473 = (state_31518[(14)]);
var inst_31481 = (inst_31473 == null);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31481)){
var statearr_31575_31654 = state_31518__$1;
(statearr_31575_31654[(1)] = (26));

} else {
var statearr_31576_31655 = state_31518__$1;
(statearr_31576_31655[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (35))){
var inst_31501 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31501)){
var statearr_31577_31656 = state_31518__$1;
(statearr_31577_31656[(1)] = (36));

} else {
var statearr_31578_31658 = state_31518__$1;
(statearr_31578_31658[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (19))){
var inst_31434 = (state_31518[(7)]);
var inst_31458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31434);
var state_31518__$1 = state_31518;
var statearr_31579_31659 = state_31518__$1;
(statearr_31579_31659[(2)] = inst_31458);

(statearr_31579_31659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (11))){
var inst_31434 = (state_31518[(7)]);
var inst_31438 = (inst_31434 == null);
var inst_31439 = cljs.core.not(inst_31438);
var state_31518__$1 = state_31518;
if(inst_31439){
var statearr_31580_31660 = state_31518__$1;
(statearr_31580_31660[(1)] = (13));

} else {
var statearr_31581_31661 = state_31518__$1;
(statearr_31581_31661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (9))){
var inst_31407 = (state_31518[(8)]);
var state_31518__$1 = state_31518;
var statearr_31583_31662 = state_31518__$1;
(statearr_31583_31662[(2)] = inst_31407);

(statearr_31583_31662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (5))){
var state_31518__$1 = state_31518;
var statearr_31584_31663 = state_31518__$1;
(statearr_31584_31663[(2)] = true);

(statearr_31584_31663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (14))){
var state_31518__$1 = state_31518;
var statearr_31585_31664 = state_31518__$1;
(statearr_31585_31664[(2)] = false);

(statearr_31585_31664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (26))){
var inst_31474 = (state_31518[(9)]);
var inst_31483 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31474);
var state_31518__$1 = state_31518;
var statearr_31586_31669 = state_31518__$1;
(statearr_31586_31669[(2)] = inst_31483);

(statearr_31586_31669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (16))){
var state_31518__$1 = state_31518;
var statearr_31588_31674 = state_31518__$1;
(statearr_31588_31674[(2)] = true);

(statearr_31588_31674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (38))){
var inst_31506 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31592_31675 = state_31518__$1;
(statearr_31592_31675[(2)] = inst_31506);

(statearr_31592_31675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (30))){
var inst_31464 = (state_31518[(13)]);
var inst_31474 = (state_31518[(9)]);
var inst_31463 = (state_31518[(11)]);
var inst_31493 = cljs.core.empty_QMARK_(inst_31463);
var inst_31494 = (inst_31464.cljs$core$IFn$_invoke$arity$1 ? inst_31464.cljs$core$IFn$_invoke$arity$1(inst_31474) : inst_31464.call(null,inst_31474));
var inst_31495 = cljs.core.not(inst_31494);
var inst_31496 = ((inst_31493) && (inst_31495));
var state_31518__$1 = state_31518;
var statearr_31593_31680 = state_31518__$1;
(statearr_31593_31680[(2)] = inst_31496);

(statearr_31593_31680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (10))){
var inst_31407 = (state_31518[(8)]);
var inst_31430 = (state_31518[(2)]);
var inst_31431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31430,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31430,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31430,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31434 = inst_31407;
var state_31518__$1 = (function (){var statearr_31594 = state_31518;
(statearr_31594[(7)] = inst_31434);

(statearr_31594[(16)] = inst_31433);

(statearr_31594[(17)] = inst_31431);

(statearr_31594[(18)] = inst_31432);

return statearr_31594;
})();
var statearr_31595_31681 = state_31518__$1;
(statearr_31595_31681[(2)] = null);

(statearr_31595_31681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (18))){
var inst_31453 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31596_31682 = state_31518__$1;
(statearr_31596_31682[(2)] = inst_31453);

(statearr_31596_31682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (37))){
var state_31518__$1 = state_31518;
var statearr_31597_31683 = state_31518__$1;
(statearr_31597_31683[(2)] = null);

(statearr_31597_31683[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (8))){
var inst_31407 = (state_31518[(8)]);
var inst_31427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31407);
var state_31518__$1 = state_31518;
var statearr_31598_31684 = state_31518__$1;
(statearr_31598_31684[(2)] = inst_31427);

(statearr_31598_31684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29774__auto__,c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29775__auto__ = null;
var cljs$core$async$mix_$_state_machine__29775__auto____0 = (function (){
var statearr_31599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31599[(0)] = cljs$core$async$mix_$_state_machine__29775__auto__);

(statearr_31599[(1)] = (1));

return statearr_31599;
});
var cljs$core$async$mix_$_state_machine__29775__auto____1 = (function (state_31518){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_31518);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e31600){if((e31600 instanceof Object)){
var ex__29778__auto__ = e31600;
var statearr_31601_31685 = state_31518;
(statearr_31601_31685[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31686 = state_31518;
state_31518 = G__31686;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29775__auto__ = function(state_31518){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29775__auto____1.call(this,state_31518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29775__auto____0;
cljs$core$async$mix_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29775__auto____1;
return cljs$core$async$mix_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30036__auto__ = (function (){var statearr_31602 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_31602[(6)] = c__30034__auto___31604);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___31604,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31688 = arguments.length;
switch (G__31688) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31692 = arguments.length;
switch (G__31692) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__31690_SHARP_){
if(cljs.core.truth_((p1__31690_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31690_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31690_SHARP_.call(null,topic)))){
return p1__31690_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31690_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31693 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31694){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31694 = meta31694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31695,meta31694__$1){
var self__ = this;
var _31695__$1 = this;
return (new cljs.core.async.t_cljs$core$async31693(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31694__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31695){
var self__ = this;
var _31695__$1 = this;
return self__.meta31694;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31694","meta31694",-205700375,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31693";

cljs.core.async.t_cljs$core$async31693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async31693");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31693.
 */
cljs.core.async.__GT_t_cljs$core$async31693 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31694){
return (new cljs.core.async.t_cljs$core$async31693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31694));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31693(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30034__auto___31813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___31813,mults,ensure_mult,p){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___31813,mults,ensure_mult,p){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (7))){
var inst_31763 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31769_31814 = state_31767__$1;
(statearr_31769_31814[(2)] = inst_31763);

(statearr_31769_31814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (20))){
var state_31767__$1 = state_31767;
var statearr_31770_31815 = state_31767__$1;
(statearr_31770_31815[(2)] = null);

(statearr_31770_31815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (1))){
var state_31767__$1 = state_31767;
var statearr_31771_31816 = state_31767__$1;
(statearr_31771_31816[(2)] = null);

(statearr_31771_31816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (24))){
var inst_31746 = (state_31767[(7)]);
var inst_31755 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31746);
var state_31767__$1 = state_31767;
var statearr_31772_31817 = state_31767__$1;
(statearr_31772_31817[(2)] = inst_31755);

(statearr_31772_31817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (4))){
var inst_31698 = (state_31767[(8)]);
var inst_31698__$1 = (state_31767[(2)]);
var inst_31699 = (inst_31698__$1 == null);
var state_31767__$1 = (function (){var statearr_31773 = state_31767;
(statearr_31773[(8)] = inst_31698__$1);

return statearr_31773;
})();
if(cljs.core.truth_(inst_31699)){
var statearr_31774_31818 = state_31767__$1;
(statearr_31774_31818[(1)] = (5));

} else {
var statearr_31775_31819 = state_31767__$1;
(statearr_31775_31819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (15))){
var inst_31740 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31776_31820 = state_31767__$1;
(statearr_31776_31820[(2)] = inst_31740);

(statearr_31776_31820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (21))){
var inst_31760 = (state_31767[(2)]);
var state_31767__$1 = (function (){var statearr_31777 = state_31767;
(statearr_31777[(9)] = inst_31760);

return statearr_31777;
})();
var statearr_31778_31821 = state_31767__$1;
(statearr_31778_31821[(2)] = null);

(statearr_31778_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (13))){
var inst_31722 = (state_31767[(10)]);
var inst_31724 = cljs.core.chunked_seq_QMARK_(inst_31722);
var state_31767__$1 = state_31767;
if(inst_31724){
var statearr_31779_31822 = state_31767__$1;
(statearr_31779_31822[(1)] = (16));

} else {
var statearr_31780_31823 = state_31767__$1;
(statearr_31780_31823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (22))){
var inst_31752 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31752)){
var statearr_31781_31824 = state_31767__$1;
(statearr_31781_31824[(1)] = (23));

} else {
var statearr_31782_31825 = state_31767__$1;
(statearr_31782_31825[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (6))){
var inst_31698 = (state_31767[(8)]);
var inst_31748 = (state_31767[(11)]);
var inst_31746 = (state_31767[(7)]);
var inst_31746__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31698) : topic_fn.call(null,inst_31698));
var inst_31747 = cljs.core.deref(mults);
var inst_31748__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31747,inst_31746__$1);
var state_31767__$1 = (function (){var statearr_31783 = state_31767;
(statearr_31783[(11)] = inst_31748__$1);

(statearr_31783[(7)] = inst_31746__$1);

return statearr_31783;
})();
if(cljs.core.truth_(inst_31748__$1)){
var statearr_31784_31826 = state_31767__$1;
(statearr_31784_31826[(1)] = (19));

} else {
var statearr_31785_31827 = state_31767__$1;
(statearr_31785_31827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (25))){
var inst_31757 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31786_31828 = state_31767__$1;
(statearr_31786_31828[(2)] = inst_31757);

(statearr_31786_31828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (17))){
var inst_31722 = (state_31767[(10)]);
var inst_31731 = cljs.core.first(inst_31722);
var inst_31732 = cljs.core.async.muxch_STAR_(inst_31731);
var inst_31733 = cljs.core.async.close_BANG_(inst_31732);
var inst_31734 = cljs.core.next(inst_31722);
var inst_31708 = inst_31734;
var inst_31709 = null;
var inst_31710 = (0);
var inst_31711 = (0);
var state_31767__$1 = (function (){var statearr_31787 = state_31767;
(statearr_31787[(12)] = inst_31733);

(statearr_31787[(13)] = inst_31708);

(statearr_31787[(14)] = inst_31710);

(statearr_31787[(15)] = inst_31709);

(statearr_31787[(16)] = inst_31711);

return statearr_31787;
})();
var statearr_31788_31829 = state_31767__$1;
(statearr_31788_31829[(2)] = null);

(statearr_31788_31829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (3))){
var inst_31765 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31767__$1,inst_31765);
} else {
if((state_val_31768 === (12))){
var inst_31742 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31789_31830 = state_31767__$1;
(statearr_31789_31830[(2)] = inst_31742);

(statearr_31789_31830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (2))){
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31767__$1,(4),ch);
} else {
if((state_val_31768 === (23))){
var state_31767__$1 = state_31767;
var statearr_31790_31831 = state_31767__$1;
(statearr_31790_31831[(2)] = null);

(statearr_31790_31831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (19))){
var inst_31698 = (state_31767[(8)]);
var inst_31748 = (state_31767[(11)]);
var inst_31750 = cljs.core.async.muxch_STAR_(inst_31748);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31767__$1,(22),inst_31750,inst_31698);
} else {
if((state_val_31768 === (11))){
var inst_31708 = (state_31767[(13)]);
var inst_31722 = (state_31767[(10)]);
var inst_31722__$1 = cljs.core.seq(inst_31708);
var state_31767__$1 = (function (){var statearr_31791 = state_31767;
(statearr_31791[(10)] = inst_31722__$1);

return statearr_31791;
})();
if(inst_31722__$1){
var statearr_31792_31832 = state_31767__$1;
(statearr_31792_31832[(1)] = (13));

} else {
var statearr_31793_31833 = state_31767__$1;
(statearr_31793_31833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (9))){
var inst_31744 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31794_31834 = state_31767__$1;
(statearr_31794_31834[(2)] = inst_31744);

(statearr_31794_31834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (5))){
var inst_31705 = cljs.core.deref(mults);
var inst_31706 = cljs.core.vals(inst_31705);
var inst_31707 = cljs.core.seq(inst_31706);
var inst_31708 = inst_31707;
var inst_31709 = null;
var inst_31710 = (0);
var inst_31711 = (0);
var state_31767__$1 = (function (){var statearr_31795 = state_31767;
(statearr_31795[(13)] = inst_31708);

(statearr_31795[(14)] = inst_31710);

(statearr_31795[(15)] = inst_31709);

(statearr_31795[(16)] = inst_31711);

return statearr_31795;
})();
var statearr_31796_31835 = state_31767__$1;
(statearr_31796_31835[(2)] = null);

(statearr_31796_31835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (14))){
var state_31767__$1 = state_31767;
var statearr_31800_31836 = state_31767__$1;
(statearr_31800_31836[(2)] = null);

(statearr_31800_31836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (16))){
var inst_31722 = (state_31767[(10)]);
var inst_31726 = cljs.core.chunk_first(inst_31722);
var inst_31727 = cljs.core.chunk_rest(inst_31722);
var inst_31728 = cljs.core.count(inst_31726);
var inst_31708 = inst_31727;
var inst_31709 = inst_31726;
var inst_31710 = inst_31728;
var inst_31711 = (0);
var state_31767__$1 = (function (){var statearr_31801 = state_31767;
(statearr_31801[(13)] = inst_31708);

(statearr_31801[(14)] = inst_31710);

(statearr_31801[(15)] = inst_31709);

(statearr_31801[(16)] = inst_31711);

return statearr_31801;
})();
var statearr_31802_31837 = state_31767__$1;
(statearr_31802_31837[(2)] = null);

(statearr_31802_31837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (10))){
var inst_31708 = (state_31767[(13)]);
var inst_31710 = (state_31767[(14)]);
var inst_31709 = (state_31767[(15)]);
var inst_31711 = (state_31767[(16)]);
var inst_31716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31709,inst_31711);
var inst_31717 = cljs.core.async.muxch_STAR_(inst_31716);
var inst_31718 = cljs.core.async.close_BANG_(inst_31717);
var inst_31719 = (inst_31711 + (1));
var tmp31797 = inst_31708;
var tmp31798 = inst_31710;
var tmp31799 = inst_31709;
var inst_31708__$1 = tmp31797;
var inst_31709__$1 = tmp31799;
var inst_31710__$1 = tmp31798;
var inst_31711__$1 = inst_31719;
var state_31767__$1 = (function (){var statearr_31803 = state_31767;
(statearr_31803[(13)] = inst_31708__$1);

(statearr_31803[(14)] = inst_31710__$1);

(statearr_31803[(15)] = inst_31709__$1);

(statearr_31803[(17)] = inst_31718);

(statearr_31803[(16)] = inst_31711__$1);

return statearr_31803;
})();
var statearr_31804_31838 = state_31767__$1;
(statearr_31804_31838[(2)] = null);

(statearr_31804_31838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (18))){
var inst_31737 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31805_31839 = state_31767__$1;
(statearr_31805_31839[(2)] = inst_31737);

(statearr_31805_31839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (8))){
var inst_31710 = (state_31767[(14)]);
var inst_31711 = (state_31767[(16)]);
var inst_31713 = (inst_31711 < inst_31710);
var inst_31714 = inst_31713;
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31714)){
var statearr_31806_31840 = state_31767__$1;
(statearr_31806_31840[(1)] = (10));

} else {
var statearr_31807_31841 = state_31767__$1;
(statearr_31807_31841[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___31813,mults,ensure_mult,p))
;
return ((function (switch__29774__auto__,c__30034__auto___31813,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_31767){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_31767);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e31809){if((e31809 instanceof Object)){
var ex__29778__auto__ = e31809;
var statearr_31810_31842 = state_31767;
(statearr_31810_31842[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31843 = state_31767;
state_31767 = G__31843;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___31813,mults,ensure_mult,p))
})();
var state__30036__auto__ = (function (){var statearr_31811 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_31811[(6)] = c__30034__auto___31813);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___31813,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31845 = arguments.length;
switch (G__31845) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31848 = arguments.length;
switch (G__31848) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31851 = arguments.length;
switch (G__31851) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30034__auto___31918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31890){
var state_val_31891 = (state_31890[(1)]);
if((state_val_31891 === (7))){
var state_31890__$1 = state_31890;
var statearr_31892_31919 = state_31890__$1;
(statearr_31892_31919[(2)] = null);

(statearr_31892_31919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (1))){
var state_31890__$1 = state_31890;
var statearr_31893_31920 = state_31890__$1;
(statearr_31893_31920[(2)] = null);

(statearr_31893_31920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (4))){
var inst_31854 = (state_31890[(7)]);
var inst_31856 = (inst_31854 < cnt);
var state_31890__$1 = state_31890;
if(cljs.core.truth_(inst_31856)){
var statearr_31894_31921 = state_31890__$1;
(statearr_31894_31921[(1)] = (6));

} else {
var statearr_31895_31922 = state_31890__$1;
(statearr_31895_31922[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (15))){
var inst_31886 = (state_31890[(2)]);
var state_31890__$1 = state_31890;
var statearr_31896_31923 = state_31890__$1;
(statearr_31896_31923[(2)] = inst_31886);

(statearr_31896_31923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (13))){
var inst_31879 = cljs.core.async.close_BANG_(out);
var state_31890__$1 = state_31890;
var statearr_31897_31924 = state_31890__$1;
(statearr_31897_31924[(2)] = inst_31879);

(statearr_31897_31924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (6))){
var state_31890__$1 = state_31890;
var statearr_31898_31925 = state_31890__$1;
(statearr_31898_31925[(2)] = null);

(statearr_31898_31925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (3))){
var inst_31888 = (state_31890[(2)]);
var state_31890__$1 = state_31890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31890__$1,inst_31888);
} else {
if((state_val_31891 === (12))){
var inst_31876 = (state_31890[(8)]);
var inst_31876__$1 = (state_31890[(2)]);
var inst_31877 = cljs.core.some(cljs.core.nil_QMARK_,inst_31876__$1);
var state_31890__$1 = (function (){var statearr_31899 = state_31890;
(statearr_31899[(8)] = inst_31876__$1);

return statearr_31899;
})();
if(cljs.core.truth_(inst_31877)){
var statearr_31900_31926 = state_31890__$1;
(statearr_31900_31926[(1)] = (13));

} else {
var statearr_31901_31927 = state_31890__$1;
(statearr_31901_31927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (2))){
var inst_31853 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31854 = (0);
var state_31890__$1 = (function (){var statearr_31902 = state_31890;
(statearr_31902[(9)] = inst_31853);

(statearr_31902[(7)] = inst_31854);

return statearr_31902;
})();
var statearr_31903_31928 = state_31890__$1;
(statearr_31903_31928[(2)] = null);

(statearr_31903_31928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (11))){
var inst_31854 = (state_31890[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31890,(10),Object,null,(9));
var inst_31863 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31854) : chs__$1.call(null,inst_31854));
var inst_31864 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31854) : done.call(null,inst_31854));
var inst_31865 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31863,inst_31864);
var state_31890__$1 = state_31890;
var statearr_31904_31929 = state_31890__$1;
(statearr_31904_31929[(2)] = inst_31865);


cljs.core.async.impl.ioc_helpers.process_exception(state_31890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (9))){
var inst_31854 = (state_31890[(7)]);
var inst_31867 = (state_31890[(2)]);
var inst_31868 = (inst_31854 + (1));
var inst_31854__$1 = inst_31868;
var state_31890__$1 = (function (){var statearr_31905 = state_31890;
(statearr_31905[(10)] = inst_31867);

(statearr_31905[(7)] = inst_31854__$1);

return statearr_31905;
})();
var statearr_31906_31930 = state_31890__$1;
(statearr_31906_31930[(2)] = null);

(statearr_31906_31930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (5))){
var inst_31874 = (state_31890[(2)]);
var state_31890__$1 = (function (){var statearr_31907 = state_31890;
(statearr_31907[(11)] = inst_31874);

return statearr_31907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31890__$1,(12),dchan);
} else {
if((state_val_31891 === (14))){
var inst_31876 = (state_31890[(8)]);
var inst_31881 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31876);
var state_31890__$1 = state_31890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31890__$1,(16),out,inst_31881);
} else {
if((state_val_31891 === (16))){
var inst_31883 = (state_31890[(2)]);
var state_31890__$1 = (function (){var statearr_31908 = state_31890;
(statearr_31908[(12)] = inst_31883);

return statearr_31908;
})();
var statearr_31909_31931 = state_31890__$1;
(statearr_31909_31931[(2)] = null);

(statearr_31909_31931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (10))){
var inst_31858 = (state_31890[(2)]);
var inst_31859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31890__$1 = (function (){var statearr_31910 = state_31890;
(statearr_31910[(13)] = inst_31858);

return statearr_31910;
})();
var statearr_31911_31932 = state_31890__$1;
(statearr_31911_31932[(2)] = inst_31859);


cljs.core.async.impl.ioc_helpers.process_exception(state_31890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31891 === (8))){
var inst_31872 = (state_31890[(2)]);
var state_31890__$1 = state_31890;
var statearr_31912_31933 = state_31890__$1;
(statearr_31912_31933[(2)] = inst_31872);

(statearr_31912_31933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29774__auto__,c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_31913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31913[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_31913[(1)] = (1));

return statearr_31913;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_31890){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_31890);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e31914){if((e31914 instanceof Object)){
var ex__29778__auto__ = e31914;
var statearr_31915_31934 = state_31890;
(statearr_31915_31934[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31935 = state_31890;
state_31890 = G__31935;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_31890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_31890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30036__auto__ = (function (){var statearr_31916 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_31916[(6)] = c__30034__auto___31918);

return statearr_31916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___31918,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31938 = arguments.length;
switch (G__31938) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___31992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___31992,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___31992,out){
return (function (state_31970){
var state_val_31971 = (state_31970[(1)]);
if((state_val_31971 === (7))){
var inst_31950 = (state_31970[(7)]);
var inst_31949 = (state_31970[(8)]);
var inst_31949__$1 = (state_31970[(2)]);
var inst_31950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31949__$1,(0),null);
var inst_31951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31949__$1,(1),null);
var inst_31952 = (inst_31950__$1 == null);
var state_31970__$1 = (function (){var statearr_31972 = state_31970;
(statearr_31972[(7)] = inst_31950__$1);

(statearr_31972[(8)] = inst_31949__$1);

(statearr_31972[(9)] = inst_31951);

return statearr_31972;
})();
if(cljs.core.truth_(inst_31952)){
var statearr_31973_31993 = state_31970__$1;
(statearr_31973_31993[(1)] = (8));

} else {
var statearr_31974_31994 = state_31970__$1;
(statearr_31974_31994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (1))){
var inst_31939 = cljs.core.vec(chs);
var inst_31940 = inst_31939;
var state_31970__$1 = (function (){var statearr_31975 = state_31970;
(statearr_31975[(10)] = inst_31940);

return statearr_31975;
})();
var statearr_31976_31995 = state_31970__$1;
(statearr_31976_31995[(2)] = null);

(statearr_31976_31995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (4))){
var inst_31940 = (state_31970[(10)]);
var state_31970__$1 = state_31970;
return cljs.core.async.ioc_alts_BANG_(state_31970__$1,(7),inst_31940);
} else {
if((state_val_31971 === (6))){
var inst_31966 = (state_31970[(2)]);
var state_31970__$1 = state_31970;
var statearr_31977_31996 = state_31970__$1;
(statearr_31977_31996[(2)] = inst_31966);

(statearr_31977_31996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (3))){
var inst_31968 = (state_31970[(2)]);
var state_31970__$1 = state_31970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31970__$1,inst_31968);
} else {
if((state_val_31971 === (2))){
var inst_31940 = (state_31970[(10)]);
var inst_31942 = cljs.core.count(inst_31940);
var inst_31943 = (inst_31942 > (0));
var state_31970__$1 = state_31970;
if(cljs.core.truth_(inst_31943)){
var statearr_31979_31997 = state_31970__$1;
(statearr_31979_31997[(1)] = (4));

} else {
var statearr_31980_31998 = state_31970__$1;
(statearr_31980_31998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (11))){
var inst_31940 = (state_31970[(10)]);
var inst_31959 = (state_31970[(2)]);
var tmp31978 = inst_31940;
var inst_31940__$1 = tmp31978;
var state_31970__$1 = (function (){var statearr_31981 = state_31970;
(statearr_31981[(10)] = inst_31940__$1);

(statearr_31981[(11)] = inst_31959);

return statearr_31981;
})();
var statearr_31982_31999 = state_31970__$1;
(statearr_31982_31999[(2)] = null);

(statearr_31982_31999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (9))){
var inst_31950 = (state_31970[(7)]);
var state_31970__$1 = state_31970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31970__$1,(11),out,inst_31950);
} else {
if((state_val_31971 === (5))){
var inst_31964 = cljs.core.async.close_BANG_(out);
var state_31970__$1 = state_31970;
var statearr_31983_32000 = state_31970__$1;
(statearr_31983_32000[(2)] = inst_31964);

(statearr_31983_32000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (10))){
var inst_31962 = (state_31970[(2)]);
var state_31970__$1 = state_31970;
var statearr_31984_32001 = state_31970__$1;
(statearr_31984_32001[(2)] = inst_31962);

(statearr_31984_32001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (8))){
var inst_31940 = (state_31970[(10)]);
var inst_31950 = (state_31970[(7)]);
var inst_31949 = (state_31970[(8)]);
var inst_31951 = (state_31970[(9)]);
var inst_31954 = (function (){var cs = inst_31940;
var vec__31945 = inst_31949;
var v = inst_31950;
var c = inst_31951;
return ((function (cs,vec__31945,v,c,inst_31940,inst_31950,inst_31949,inst_31951,state_val_31971,c__30034__auto___31992,out){
return (function (p1__31936_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31936_SHARP_);
});
;})(cs,vec__31945,v,c,inst_31940,inst_31950,inst_31949,inst_31951,state_val_31971,c__30034__auto___31992,out))
})();
var inst_31955 = cljs.core.filterv(inst_31954,inst_31940);
var inst_31940__$1 = inst_31955;
var state_31970__$1 = (function (){var statearr_31985 = state_31970;
(statearr_31985[(10)] = inst_31940__$1);

return statearr_31985;
})();
var statearr_31986_32002 = state_31970__$1;
(statearr_31986_32002[(2)] = null);

(statearr_31986_32002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___31992,out))
;
return ((function (switch__29774__auto__,c__30034__auto___31992,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_31987 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31987[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_31987[(1)] = (1));

return statearr_31987;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_31970){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_31970);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e31988){if((e31988 instanceof Object)){
var ex__29778__auto__ = e31988;
var statearr_31989_32003 = state_31970;
(statearr_31989_32003[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32004 = state_31970;
state_31970 = G__32004;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_31970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_31970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___31992,out))
})();
var state__30036__auto__ = (function (){var statearr_31990 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_31990[(6)] = c__30034__auto___31992);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___31992,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32006 = arguments.length;
switch (G__32006) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___32051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___32051,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___32051,out){
return (function (state_32030){
var state_val_32031 = (state_32030[(1)]);
if((state_val_32031 === (7))){
var inst_32012 = (state_32030[(7)]);
var inst_32012__$1 = (state_32030[(2)]);
var inst_32013 = (inst_32012__$1 == null);
var inst_32014 = cljs.core.not(inst_32013);
var state_32030__$1 = (function (){var statearr_32032 = state_32030;
(statearr_32032[(7)] = inst_32012__$1);

return statearr_32032;
})();
if(inst_32014){
var statearr_32033_32052 = state_32030__$1;
(statearr_32033_32052[(1)] = (8));

} else {
var statearr_32034_32053 = state_32030__$1;
(statearr_32034_32053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (1))){
var inst_32007 = (0);
var state_32030__$1 = (function (){var statearr_32035 = state_32030;
(statearr_32035[(8)] = inst_32007);

return statearr_32035;
})();
var statearr_32036_32054 = state_32030__$1;
(statearr_32036_32054[(2)] = null);

(statearr_32036_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (4))){
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32030__$1,(7),ch);
} else {
if((state_val_32031 === (6))){
var inst_32025 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32037_32055 = state_32030__$1;
(statearr_32037_32055[(2)] = inst_32025);

(statearr_32037_32055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (3))){
var inst_32027 = (state_32030[(2)]);
var inst_32028 = cljs.core.async.close_BANG_(out);
var state_32030__$1 = (function (){var statearr_32038 = state_32030;
(statearr_32038[(9)] = inst_32027);

return statearr_32038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32030__$1,inst_32028);
} else {
if((state_val_32031 === (2))){
var inst_32007 = (state_32030[(8)]);
var inst_32009 = (inst_32007 < n);
var state_32030__$1 = state_32030;
if(cljs.core.truth_(inst_32009)){
var statearr_32039_32056 = state_32030__$1;
(statearr_32039_32056[(1)] = (4));

} else {
var statearr_32040_32057 = state_32030__$1;
(statearr_32040_32057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (11))){
var inst_32007 = (state_32030[(8)]);
var inst_32017 = (state_32030[(2)]);
var inst_32018 = (inst_32007 + (1));
var inst_32007__$1 = inst_32018;
var state_32030__$1 = (function (){var statearr_32041 = state_32030;
(statearr_32041[(10)] = inst_32017);

(statearr_32041[(8)] = inst_32007__$1);

return statearr_32041;
})();
var statearr_32042_32058 = state_32030__$1;
(statearr_32042_32058[(2)] = null);

(statearr_32042_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (9))){
var state_32030__$1 = state_32030;
var statearr_32043_32059 = state_32030__$1;
(statearr_32043_32059[(2)] = null);

(statearr_32043_32059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (5))){
var state_32030__$1 = state_32030;
var statearr_32044_32060 = state_32030__$1;
(statearr_32044_32060[(2)] = null);

(statearr_32044_32060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (10))){
var inst_32022 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32045_32061 = state_32030__$1;
(statearr_32045_32061[(2)] = inst_32022);

(statearr_32045_32061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (8))){
var inst_32012 = (state_32030[(7)]);
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32030__$1,(11),out,inst_32012);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___32051,out))
;
return ((function (switch__29774__auto__,c__30034__auto___32051,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_32046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32046[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_32046[(1)] = (1));

return statearr_32046;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_32030){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32030);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32047){if((e32047 instanceof Object)){
var ex__29778__auto__ = e32047;
var statearr_32048_32062 = state_32030;
(statearr_32048_32062[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32063 = state_32030;
state_32030 = G__32063;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_32030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_32030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___32051,out))
})();
var state__30036__auto__ = (function (){var statearr_32049 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32049[(6)] = c__30034__auto___32051);

return statearr_32049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___32051,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32065 = (function (f,ch,meta32066){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32067,meta32066__$1){
var self__ = this;
var _32067__$1 = this;
return (new cljs.core.async.t_cljs$core$async32065(self__.f,self__.ch,meta32066__$1));
});

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32067){
var self__ = this;
var _32067__$1 = this;
return self__.meta32066;
});

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32068 = (function (f,ch,meta32066,_,fn1,meta32069){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this._ = _;
this.fn1 = fn1;
this.meta32069 = meta32069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32070,meta32069__$1){
var self__ = this;
var _32070__$1 = this;
return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,self__._,self__.fn1,meta32069__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32070){
var self__ = this;
var _32070__$1 = this;
return self__.meta32069;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32064_SHARP_){
var G__32071 = (((p1__32064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32064_SHARP_) : self__.f.call(null,p1__32064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32071) : f1.call(null,G__32071));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32065","cljs.core.async/t_cljs$core$async32065",-1628997228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32069","meta32069",763657709,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32068";

cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32068");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32068.
 */
cljs.core.async.__GT_t_cljs$core$async32068 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069){
return (new cljs.core.async.t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32072) : self__.f.call(null,G__32072));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null)], null);
});

cljs.core.async.t_cljs$core$async32065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32065";

cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32065");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32065.
 */
cljs.core.async.__GT_t_cljs$core$async32065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32065(f__$1,ch__$1,meta32066){
return (new cljs.core.async.t_cljs$core$async32065(f__$1,ch__$1,meta32066));
});

}

return (new cljs.core.async.t_cljs$core$async32065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32073 = (function (f,ch,meta32074){
this.f = f;
this.ch = ch;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new cljs.core.async.t_cljs$core$async32073(self__.f,self__.ch,meta32074__$1));
});

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
});

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32074","meta32074",1175675589,null)], null);
});

cljs.core.async.t_cljs$core$async32073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32073";

cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32073");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32073.
 */
cljs.core.async.__GT_t_cljs$core$async32073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32073(f__$1,ch__$1,meta32074){
return (new cljs.core.async.t_cljs$core$async32073(f__$1,ch__$1,meta32074));
});

}

return (new cljs.core.async.t_cljs$core$async32073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32076 = (function (p,ch,meta32077){
this.p = p;
this.ch = ch;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new cljs.core.async.t_cljs$core$async32076(self__.p,self__.ch,meta32077__$1));
});

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
});

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null)], null);
});

cljs.core.async.t_cljs$core$async32076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32076";

cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32076");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32076.
 */
cljs.core.async.__GT_t_cljs$core$async32076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32076(p__$1,ch__$1,meta32077){
return (new cljs.core.async.t_cljs$core$async32076(p__$1,ch__$1,meta32077));
});

}

return (new cljs.core.async.t_cljs$core$async32076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32080 = arguments.length;
switch (G__32080) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___32120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___32120,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___32120,out){
return (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_32121 = state_32101__$1;
(statearr_32103_32121[(2)] = inst_32097);

(statearr_32103_32121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32104_32122 = state_32101__$1;
(statearr_32104_32122[(2)] = null);

(statearr_32104_32122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_32083 = (state_32101[(7)]);
var inst_32083__$1 = (state_32101[(2)]);
var inst_32084 = (inst_32083__$1 == null);
var state_32101__$1 = (function (){var statearr_32105 = state_32101;
(statearr_32105[(7)] = inst_32083__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_32084)){
var statearr_32106_32123 = state_32101__$1;
(statearr_32106_32123[(1)] = (5));

} else {
var statearr_32107_32124 = state_32101__$1;
(statearr_32107_32124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32083 = (state_32101[(7)]);
var inst_32088 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32083) : p.call(null,inst_32083));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32088)){
var statearr_32108_32125 = state_32101__$1;
(statearr_32108_32125[(1)] = (8));

} else {
var statearr_32109_32126 = state_32101__$1;
(statearr_32109_32126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (11))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_32127 = state_32101__$1;
(statearr_32110_32127[(2)] = inst_32091);

(statearr_32110_32127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var state_32101__$1 = state_32101;
var statearr_32111_32128 = state_32101__$1;
(statearr_32111_32128[(2)] = null);

(statearr_32111_32128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_32086 = cljs.core.async.close_BANG_(out);
var state_32101__$1 = state_32101;
var statearr_32112_32129 = state_32101__$1;
(statearr_32112_32129[(2)] = inst_32086);

(statearr_32112_32129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32113 = state_32101;
(statearr_32113[(8)] = inst_32094);

return statearr_32113;
})();
var statearr_32114_32130 = state_32101__$1;
(statearr_32114_32130[(2)] = null);

(statearr_32114_32130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_32083 = (state_32101[(7)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(11),out,inst_32083);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___32120,out))
;
return ((function (switch__29774__auto__,c__30034__auto___32120,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_32101){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__29778__auto__ = e32116;
var statearr_32117_32131 = state_32101;
(statearr_32117_32131[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32132 = state_32101;
state_32101 = G__32132;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___32120,out))
})();
var state__30036__auto__ = (function (){var statearr_32118 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32118[(6)] = c__30034__auto___32120);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___32120,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32134 = arguments.length;
switch (G__32134) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__){
return (function (state_32197){
var state_val_32198 = (state_32197[(1)]);
if((state_val_32198 === (7))){
var inst_32193 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32199_32237 = state_32197__$1;
(statearr_32199_32237[(2)] = inst_32193);

(statearr_32199_32237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (20))){
var inst_32163 = (state_32197[(7)]);
var inst_32174 = (state_32197[(2)]);
var inst_32175 = cljs.core.next(inst_32163);
var inst_32149 = inst_32175;
var inst_32150 = null;
var inst_32151 = (0);
var inst_32152 = (0);
var state_32197__$1 = (function (){var statearr_32200 = state_32197;
(statearr_32200[(8)] = inst_32149);

(statearr_32200[(9)] = inst_32152);

(statearr_32200[(10)] = inst_32151);

(statearr_32200[(11)] = inst_32150);

(statearr_32200[(12)] = inst_32174);

return statearr_32200;
})();
var statearr_32201_32238 = state_32197__$1;
(statearr_32201_32238[(2)] = null);

(statearr_32201_32238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (1))){
var state_32197__$1 = state_32197;
var statearr_32202_32239 = state_32197__$1;
(statearr_32202_32239[(2)] = null);

(statearr_32202_32239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (4))){
var inst_32138 = (state_32197[(13)]);
var inst_32138__$1 = (state_32197[(2)]);
var inst_32139 = (inst_32138__$1 == null);
var state_32197__$1 = (function (){var statearr_32203 = state_32197;
(statearr_32203[(13)] = inst_32138__$1);

return statearr_32203;
})();
if(cljs.core.truth_(inst_32139)){
var statearr_32204_32240 = state_32197__$1;
(statearr_32204_32240[(1)] = (5));

} else {
var statearr_32205_32241 = state_32197__$1;
(statearr_32205_32241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (15))){
var state_32197__$1 = state_32197;
var statearr_32209_32242 = state_32197__$1;
(statearr_32209_32242[(2)] = null);

(statearr_32209_32242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (21))){
var state_32197__$1 = state_32197;
var statearr_32210_32243 = state_32197__$1;
(statearr_32210_32243[(2)] = null);

(statearr_32210_32243[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (13))){
var inst_32149 = (state_32197[(8)]);
var inst_32152 = (state_32197[(9)]);
var inst_32151 = (state_32197[(10)]);
var inst_32150 = (state_32197[(11)]);
var inst_32159 = (state_32197[(2)]);
var inst_32160 = (inst_32152 + (1));
var tmp32206 = inst_32149;
var tmp32207 = inst_32151;
var tmp32208 = inst_32150;
var inst_32149__$1 = tmp32206;
var inst_32150__$1 = tmp32208;
var inst_32151__$1 = tmp32207;
var inst_32152__$1 = inst_32160;
var state_32197__$1 = (function (){var statearr_32211 = state_32197;
(statearr_32211[(8)] = inst_32149__$1);

(statearr_32211[(9)] = inst_32152__$1);

(statearr_32211[(14)] = inst_32159);

(statearr_32211[(10)] = inst_32151__$1);

(statearr_32211[(11)] = inst_32150__$1);

return statearr_32211;
})();
var statearr_32212_32244 = state_32197__$1;
(statearr_32212_32244[(2)] = null);

(statearr_32212_32244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (22))){
var state_32197__$1 = state_32197;
var statearr_32213_32245 = state_32197__$1;
(statearr_32213_32245[(2)] = null);

(statearr_32213_32245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (6))){
var inst_32138 = (state_32197[(13)]);
var inst_32147 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32138) : f.call(null,inst_32138));
var inst_32148 = cljs.core.seq(inst_32147);
var inst_32149 = inst_32148;
var inst_32150 = null;
var inst_32151 = (0);
var inst_32152 = (0);
var state_32197__$1 = (function (){var statearr_32214 = state_32197;
(statearr_32214[(8)] = inst_32149);

(statearr_32214[(9)] = inst_32152);

(statearr_32214[(10)] = inst_32151);

(statearr_32214[(11)] = inst_32150);

return statearr_32214;
})();
var statearr_32215_32246 = state_32197__$1;
(statearr_32215_32246[(2)] = null);

(statearr_32215_32246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (17))){
var inst_32163 = (state_32197[(7)]);
var inst_32167 = cljs.core.chunk_first(inst_32163);
var inst_32168 = cljs.core.chunk_rest(inst_32163);
var inst_32169 = cljs.core.count(inst_32167);
var inst_32149 = inst_32168;
var inst_32150 = inst_32167;
var inst_32151 = inst_32169;
var inst_32152 = (0);
var state_32197__$1 = (function (){var statearr_32216 = state_32197;
(statearr_32216[(8)] = inst_32149);

(statearr_32216[(9)] = inst_32152);

(statearr_32216[(10)] = inst_32151);

(statearr_32216[(11)] = inst_32150);

return statearr_32216;
})();
var statearr_32217_32247 = state_32197__$1;
(statearr_32217_32247[(2)] = null);

(statearr_32217_32247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (3))){
var inst_32195 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32197__$1,inst_32195);
} else {
if((state_val_32198 === (12))){
var inst_32183 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32218_32248 = state_32197__$1;
(statearr_32218_32248[(2)] = inst_32183);

(statearr_32218_32248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (2))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(4),in$);
} else {
if((state_val_32198 === (23))){
var inst_32191 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32219_32249 = state_32197__$1;
(statearr_32219_32249[(2)] = inst_32191);

(statearr_32219_32249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (19))){
var inst_32178 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32220_32250 = state_32197__$1;
(statearr_32220_32250[(2)] = inst_32178);

(statearr_32220_32250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (11))){
var inst_32149 = (state_32197[(8)]);
var inst_32163 = (state_32197[(7)]);
var inst_32163__$1 = cljs.core.seq(inst_32149);
var state_32197__$1 = (function (){var statearr_32221 = state_32197;
(statearr_32221[(7)] = inst_32163__$1);

return statearr_32221;
})();
if(inst_32163__$1){
var statearr_32222_32251 = state_32197__$1;
(statearr_32222_32251[(1)] = (14));

} else {
var statearr_32223_32252 = state_32197__$1;
(statearr_32223_32252[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (9))){
var inst_32185 = (state_32197[(2)]);
var inst_32186 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32197__$1 = (function (){var statearr_32224 = state_32197;
(statearr_32224[(15)] = inst_32185);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32186)){
var statearr_32225_32253 = state_32197__$1;
(statearr_32225_32253[(1)] = (21));

} else {
var statearr_32226_32254 = state_32197__$1;
(statearr_32226_32254[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (5))){
var inst_32141 = cljs.core.async.close_BANG_(out);
var state_32197__$1 = state_32197;
var statearr_32227_32255 = state_32197__$1;
(statearr_32227_32255[(2)] = inst_32141);

(statearr_32227_32255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (14))){
var inst_32163 = (state_32197[(7)]);
var inst_32165 = cljs.core.chunked_seq_QMARK_(inst_32163);
var state_32197__$1 = state_32197;
if(inst_32165){
var statearr_32228_32256 = state_32197__$1;
(statearr_32228_32256[(1)] = (17));

} else {
var statearr_32229_32257 = state_32197__$1;
(statearr_32229_32257[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (16))){
var inst_32181 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32230_32258 = state_32197__$1;
(statearr_32230_32258[(2)] = inst_32181);

(statearr_32230_32258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (10))){
var inst_32152 = (state_32197[(9)]);
var inst_32150 = (state_32197[(11)]);
var inst_32157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32150,inst_32152);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32197__$1,(13),out,inst_32157);
} else {
if((state_val_32198 === (18))){
var inst_32163 = (state_32197[(7)]);
var inst_32172 = cljs.core.first(inst_32163);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32197__$1,(20),out,inst_32172);
} else {
if((state_val_32198 === (8))){
var inst_32152 = (state_32197[(9)]);
var inst_32151 = (state_32197[(10)]);
var inst_32154 = (inst_32152 < inst_32151);
var inst_32155 = inst_32154;
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32155)){
var statearr_32231_32259 = state_32197__$1;
(statearr_32231_32259[(1)] = (10));

} else {
var statearr_32232_32260 = state_32197__$1;
(statearr_32232_32260[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto__))
;
return ((function (switch__29774__auto__,c__30034__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____0 = (function (){
var statearr_32233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32233[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__);

(statearr_32233[(1)] = (1));

return statearr_32233;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____1 = (function (state_32197){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32197);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32234){if((e32234 instanceof Object)){
var ex__29778__auto__ = e32234;
var statearr_32235_32261 = state_32197;
(statearr_32235_32261[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32262 = state_32197;
state_32197 = G__32262;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__ = function(state_32197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____1.call(this,state_32197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__))
})();
var state__30036__auto__ = (function (){var statearr_32236 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32236[(6)] = c__30034__auto__);

return statearr_32236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__))
);

return c__30034__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32264 = arguments.length;
switch (G__32264) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32267 = arguments.length;
switch (G__32267) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32270 = arguments.length;
switch (G__32270) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___32317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___32317,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___32317,out){
return (function (state_32294){
var state_val_32295 = (state_32294[(1)]);
if((state_val_32295 === (7))){
var inst_32289 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32296_32318 = state_32294__$1;
(statearr_32296_32318[(2)] = inst_32289);

(statearr_32296_32318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (1))){
var inst_32271 = null;
var state_32294__$1 = (function (){var statearr_32297 = state_32294;
(statearr_32297[(7)] = inst_32271);

return statearr_32297;
})();
var statearr_32298_32319 = state_32294__$1;
(statearr_32298_32319[(2)] = null);

(statearr_32298_32319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (4))){
var inst_32274 = (state_32294[(8)]);
var inst_32274__$1 = (state_32294[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var inst_32276 = cljs.core.not(inst_32275);
var state_32294__$1 = (function (){var statearr_32299 = state_32294;
(statearr_32299[(8)] = inst_32274__$1);

return statearr_32299;
})();
if(inst_32276){
var statearr_32300_32320 = state_32294__$1;
(statearr_32300_32320[(1)] = (5));

} else {
var statearr_32301_32321 = state_32294__$1;
(statearr_32301_32321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (6))){
var state_32294__$1 = state_32294;
var statearr_32302_32322 = state_32294__$1;
(statearr_32302_32322[(2)] = null);

(statearr_32302_32322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (3))){
var inst_32291 = (state_32294[(2)]);
var inst_32292 = cljs.core.async.close_BANG_(out);
var state_32294__$1 = (function (){var statearr_32303 = state_32294;
(statearr_32303[(9)] = inst_32291);

return statearr_32303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32294__$1,inst_32292);
} else {
if((state_val_32295 === (2))){
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32294__$1,(4),ch);
} else {
if((state_val_32295 === (11))){
var inst_32274 = (state_32294[(8)]);
var inst_32283 = (state_32294[(2)]);
var inst_32271 = inst_32274;
var state_32294__$1 = (function (){var statearr_32304 = state_32294;
(statearr_32304[(10)] = inst_32283);

(statearr_32304[(7)] = inst_32271);

return statearr_32304;
})();
var statearr_32305_32323 = state_32294__$1;
(statearr_32305_32323[(2)] = null);

(statearr_32305_32323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (9))){
var inst_32274 = (state_32294[(8)]);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32294__$1,(11),out,inst_32274);
} else {
if((state_val_32295 === (5))){
var inst_32274 = (state_32294[(8)]);
var inst_32271 = (state_32294[(7)]);
var inst_32278 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32274,inst_32271);
var state_32294__$1 = state_32294;
if(inst_32278){
var statearr_32307_32324 = state_32294__$1;
(statearr_32307_32324[(1)] = (8));

} else {
var statearr_32308_32325 = state_32294__$1;
(statearr_32308_32325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (10))){
var inst_32286 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32309_32326 = state_32294__$1;
(statearr_32309_32326[(2)] = inst_32286);

(statearr_32309_32326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (8))){
var inst_32271 = (state_32294[(7)]);
var tmp32306 = inst_32271;
var inst_32271__$1 = tmp32306;
var state_32294__$1 = (function (){var statearr_32310 = state_32294;
(statearr_32310[(7)] = inst_32271__$1);

return statearr_32310;
})();
var statearr_32311_32327 = state_32294__$1;
(statearr_32311_32327[(2)] = null);

(statearr_32311_32327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___32317,out))
;
return ((function (switch__29774__auto__,c__30034__auto___32317,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_32312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32312[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_32312[(1)] = (1));

return statearr_32312;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_32294){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32294);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32313){if((e32313 instanceof Object)){
var ex__29778__auto__ = e32313;
var statearr_32314_32328 = state_32294;
(statearr_32314_32328[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32329 = state_32294;
state_32294 = G__32329;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___32317,out))
})();
var state__30036__auto__ = (function (){var statearr_32315 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32315[(6)] = c__30034__auto___32317);

return statearr_32315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___32317,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32331 = arguments.length;
switch (G__32331) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___32397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___32397,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___32397,out){
return (function (state_32369){
var state_val_32370 = (state_32369[(1)]);
if((state_val_32370 === (7))){
var inst_32365 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32371_32398 = state_32369__$1;
(statearr_32371_32398[(2)] = inst_32365);

(statearr_32371_32398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (1))){
var inst_32332 = (new Array(n));
var inst_32333 = inst_32332;
var inst_32334 = (0);
var state_32369__$1 = (function (){var statearr_32372 = state_32369;
(statearr_32372[(7)] = inst_32333);

(statearr_32372[(8)] = inst_32334);

return statearr_32372;
})();
var statearr_32373_32399 = state_32369__$1;
(statearr_32373_32399[(2)] = null);

(statearr_32373_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (4))){
var inst_32337 = (state_32369[(9)]);
var inst_32337__$1 = (state_32369[(2)]);
var inst_32338 = (inst_32337__$1 == null);
var inst_32339 = cljs.core.not(inst_32338);
var state_32369__$1 = (function (){var statearr_32374 = state_32369;
(statearr_32374[(9)] = inst_32337__$1);

return statearr_32374;
})();
if(inst_32339){
var statearr_32375_32400 = state_32369__$1;
(statearr_32375_32400[(1)] = (5));

} else {
var statearr_32376_32401 = state_32369__$1;
(statearr_32376_32401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (15))){
var inst_32359 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32377_32402 = state_32369__$1;
(statearr_32377_32402[(2)] = inst_32359);

(statearr_32377_32402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (13))){
var state_32369__$1 = state_32369;
var statearr_32378_32403 = state_32369__$1;
(statearr_32378_32403[(2)] = null);

(statearr_32378_32403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (6))){
var inst_32334 = (state_32369[(8)]);
var inst_32355 = (inst_32334 > (0));
var state_32369__$1 = state_32369;
if(cljs.core.truth_(inst_32355)){
var statearr_32379_32404 = state_32369__$1;
(statearr_32379_32404[(1)] = (12));

} else {
var statearr_32380_32405 = state_32369__$1;
(statearr_32380_32405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (3))){
var inst_32367 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32369__$1,inst_32367);
} else {
if((state_val_32370 === (12))){
var inst_32333 = (state_32369[(7)]);
var inst_32357 = cljs.core.vec(inst_32333);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(15),out,inst_32357);
} else {
if((state_val_32370 === (2))){
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32369__$1,(4),ch);
} else {
if((state_val_32370 === (11))){
var inst_32349 = (state_32369[(2)]);
var inst_32350 = (new Array(n));
var inst_32333 = inst_32350;
var inst_32334 = (0);
var state_32369__$1 = (function (){var statearr_32381 = state_32369;
(statearr_32381[(7)] = inst_32333);

(statearr_32381[(10)] = inst_32349);

(statearr_32381[(8)] = inst_32334);

return statearr_32381;
})();
var statearr_32382_32406 = state_32369__$1;
(statearr_32382_32406[(2)] = null);

(statearr_32382_32406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (9))){
var inst_32333 = (state_32369[(7)]);
var inst_32347 = cljs.core.vec(inst_32333);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(11),out,inst_32347);
} else {
if((state_val_32370 === (5))){
var inst_32337 = (state_32369[(9)]);
var inst_32333 = (state_32369[(7)]);
var inst_32334 = (state_32369[(8)]);
var inst_32342 = (state_32369[(11)]);
var inst_32341 = (inst_32333[inst_32334] = inst_32337);
var inst_32342__$1 = (inst_32334 + (1));
var inst_32343 = (inst_32342__$1 < n);
var state_32369__$1 = (function (){var statearr_32383 = state_32369;
(statearr_32383[(12)] = inst_32341);

(statearr_32383[(11)] = inst_32342__$1);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32343)){
var statearr_32384_32407 = state_32369__$1;
(statearr_32384_32407[(1)] = (8));

} else {
var statearr_32385_32408 = state_32369__$1;
(statearr_32385_32408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (14))){
var inst_32362 = (state_32369[(2)]);
var inst_32363 = cljs.core.async.close_BANG_(out);
var state_32369__$1 = (function (){var statearr_32387 = state_32369;
(statearr_32387[(13)] = inst_32362);

return statearr_32387;
})();
var statearr_32388_32409 = state_32369__$1;
(statearr_32388_32409[(2)] = inst_32363);

(statearr_32388_32409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (10))){
var inst_32353 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32389_32410 = state_32369__$1;
(statearr_32389_32410[(2)] = inst_32353);

(statearr_32389_32410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (8))){
var inst_32333 = (state_32369[(7)]);
var inst_32342 = (state_32369[(11)]);
var tmp32386 = inst_32333;
var inst_32333__$1 = tmp32386;
var inst_32334 = inst_32342;
var state_32369__$1 = (function (){var statearr_32390 = state_32369;
(statearr_32390[(7)] = inst_32333__$1);

(statearr_32390[(8)] = inst_32334);

return statearr_32390;
})();
var statearr_32391_32411 = state_32369__$1;
(statearr_32391_32411[(2)] = null);

(statearr_32391_32411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___32397,out))
;
return ((function (switch__29774__auto__,c__30034__auto___32397,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_32392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32392[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_32392[(1)] = (1));

return statearr_32392;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_32369){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32369);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32393){if((e32393 instanceof Object)){
var ex__29778__auto__ = e32393;
var statearr_32394_32412 = state_32369;
(statearr_32394_32412[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32413 = state_32369;
state_32369 = G__32413;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_32369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_32369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___32397,out))
})();
var state__30036__auto__ = (function (){var statearr_32395 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32395[(6)] = c__30034__auto___32397);

return statearr_32395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___32397,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32415 = arguments.length;
switch (G__32415) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30034__auto___32485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto___32485,out){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto___32485,out){
return (function (state_32457){
var state_val_32458 = (state_32457[(1)]);
if((state_val_32458 === (7))){
var inst_32453 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
var statearr_32459_32486 = state_32457__$1;
(statearr_32459_32486[(2)] = inst_32453);

(statearr_32459_32486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (1))){
var inst_32416 = [];
var inst_32417 = inst_32416;
var inst_32418 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32457__$1 = (function (){var statearr_32460 = state_32457;
(statearr_32460[(7)] = inst_32417);

(statearr_32460[(8)] = inst_32418);

return statearr_32460;
})();
var statearr_32461_32487 = state_32457__$1;
(statearr_32461_32487[(2)] = null);

(statearr_32461_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (4))){
var inst_32421 = (state_32457[(9)]);
var inst_32421__$1 = (state_32457[(2)]);
var inst_32422 = (inst_32421__$1 == null);
var inst_32423 = cljs.core.not(inst_32422);
var state_32457__$1 = (function (){var statearr_32462 = state_32457;
(statearr_32462[(9)] = inst_32421__$1);

return statearr_32462;
})();
if(inst_32423){
var statearr_32463_32488 = state_32457__$1;
(statearr_32463_32488[(1)] = (5));

} else {
var statearr_32464_32489 = state_32457__$1;
(statearr_32464_32489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (15))){
var inst_32447 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
var statearr_32465_32490 = state_32457__$1;
(statearr_32465_32490[(2)] = inst_32447);

(statearr_32465_32490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (13))){
var state_32457__$1 = state_32457;
var statearr_32466_32491 = state_32457__$1;
(statearr_32466_32491[(2)] = null);

(statearr_32466_32491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (6))){
var inst_32417 = (state_32457[(7)]);
var inst_32442 = inst_32417.length;
var inst_32443 = (inst_32442 > (0));
var state_32457__$1 = state_32457;
if(cljs.core.truth_(inst_32443)){
var statearr_32467_32492 = state_32457__$1;
(statearr_32467_32492[(1)] = (12));

} else {
var statearr_32468_32493 = state_32457__$1;
(statearr_32468_32493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (3))){
var inst_32455 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32457__$1,inst_32455);
} else {
if((state_val_32458 === (12))){
var inst_32417 = (state_32457[(7)]);
var inst_32445 = cljs.core.vec(inst_32417);
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32457__$1,(15),out,inst_32445);
} else {
if((state_val_32458 === (2))){
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32457__$1,(4),ch);
} else {
if((state_val_32458 === (11))){
var inst_32421 = (state_32457[(9)]);
var inst_32425 = (state_32457[(10)]);
var inst_32435 = (state_32457[(2)]);
var inst_32436 = [];
var inst_32437 = inst_32436.push(inst_32421);
var inst_32417 = inst_32436;
var inst_32418 = inst_32425;
var state_32457__$1 = (function (){var statearr_32469 = state_32457;
(statearr_32469[(7)] = inst_32417);

(statearr_32469[(11)] = inst_32437);

(statearr_32469[(8)] = inst_32418);

(statearr_32469[(12)] = inst_32435);

return statearr_32469;
})();
var statearr_32470_32494 = state_32457__$1;
(statearr_32470_32494[(2)] = null);

(statearr_32470_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (9))){
var inst_32417 = (state_32457[(7)]);
var inst_32433 = cljs.core.vec(inst_32417);
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32457__$1,(11),out,inst_32433);
} else {
if((state_val_32458 === (5))){
var inst_32421 = (state_32457[(9)]);
var inst_32418 = (state_32457[(8)]);
var inst_32425 = (state_32457[(10)]);
var inst_32425__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32421) : f.call(null,inst_32421));
var inst_32426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32425__$1,inst_32418);
var inst_32427 = cljs.core.keyword_identical_QMARK_(inst_32418,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32428 = ((inst_32426) || (inst_32427));
var state_32457__$1 = (function (){var statearr_32471 = state_32457;
(statearr_32471[(10)] = inst_32425__$1);

return statearr_32471;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32472_32495 = state_32457__$1;
(statearr_32472_32495[(1)] = (8));

} else {
var statearr_32473_32496 = state_32457__$1;
(statearr_32473_32496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (14))){
var inst_32450 = (state_32457[(2)]);
var inst_32451 = cljs.core.async.close_BANG_(out);
var state_32457__$1 = (function (){var statearr_32475 = state_32457;
(statearr_32475[(13)] = inst_32450);

return statearr_32475;
})();
var statearr_32476_32497 = state_32457__$1;
(statearr_32476_32497[(2)] = inst_32451);

(statearr_32476_32497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (10))){
var inst_32440 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
var statearr_32477_32498 = state_32457__$1;
(statearr_32477_32498[(2)] = inst_32440);

(statearr_32477_32498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (8))){
var inst_32421 = (state_32457[(9)]);
var inst_32417 = (state_32457[(7)]);
var inst_32425 = (state_32457[(10)]);
var inst_32430 = inst_32417.push(inst_32421);
var tmp32474 = inst_32417;
var inst_32417__$1 = tmp32474;
var inst_32418 = inst_32425;
var state_32457__$1 = (function (){var statearr_32478 = state_32457;
(statearr_32478[(7)] = inst_32417__$1);

(statearr_32478[(14)] = inst_32430);

(statearr_32478[(8)] = inst_32418);

return statearr_32478;
})();
var statearr_32479_32499 = state_32457__$1;
(statearr_32479_32499[(2)] = null);

(statearr_32479_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30034__auto___32485,out))
;
return ((function (switch__29774__auto__,c__30034__auto___32485,out){
return (function() {
var cljs$core$async$state_machine__29775__auto__ = null;
var cljs$core$async$state_machine__29775__auto____0 = (function (){
var statearr_32480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32480[(0)] = cljs$core$async$state_machine__29775__auto__);

(statearr_32480[(1)] = (1));

return statearr_32480;
});
var cljs$core$async$state_machine__29775__auto____1 = (function (state_32457){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_32457);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object)){
var ex__29778__auto__ = e32481;
var statearr_32482_32500 = state_32457;
(statearr_32482_32500[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32457;
state_32457 = G__32501;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
cljs$core$async$state_machine__29775__auto__ = function(state_32457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29775__auto____1.call(this,state_32457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29775__auto____0;
cljs$core$async$state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29775__auto____1;
return cljs$core$async$state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto___32485,out))
})();
var state__30036__auto__ = (function (){var statearr_32483 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_32483[(6)] = c__30034__auto___32485);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto___32485,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
