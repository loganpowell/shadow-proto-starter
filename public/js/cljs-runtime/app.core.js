goog.provide('app.core');
goog.require('cljs.core');
if(typeof app.core.greeting !== 'undefined'){
} else {
app.core.greeting = "hello";
}
app.core.who = "shadow!";
console.log("Hey from proto-repl!");
alert("foo");
app.core.stop = (function app$core$stop(){
return console.log("Stopping...");
});
app.core.start = (function app$core$start(){
return console.log("Starting...");
});
app.core.init = (function app$core$init(){
return app.core.start();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
