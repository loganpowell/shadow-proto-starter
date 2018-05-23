goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__,req){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__,req){
return (function (state_34135){
var state_val_34136 = (state_34135[(1)]);
if((state_val_34136 === (7))){
var state_34135__$1 = state_34135;
var statearr_34137_34163 = state_34135__$1;
(statearr_34137_34163[(2)] = false);

(statearr_34137_34163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (1))){
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34135__$1,(2),req);
} else {
if((state_val_34136 === (4))){
var inst_34099 = (state_34135[(7)]);
var inst_34105 = (inst_34099 == null);
var inst_34106 = cljs.core.not(inst_34105);
var state_34135__$1 = state_34135;
if(inst_34106){
var statearr_34138_34164 = state_34135__$1;
(statearr_34138_34164[(1)] = (6));

} else {
var statearr_34139_34165 = state_34135__$1;
(statearr_34139_34165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (15))){
var state_34135__$1 = state_34135;
var statearr_34140_34166 = state_34135__$1;
(statearr_34140_34166[(2)] = null);

(statearr_34140_34166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (13))){
var inst_34099 = (state_34135[(7)]);
var state_34135__$1 = state_34135;
var statearr_34141_34167 = state_34135__$1;
(statearr_34141_34167[(2)] = inst_34099);

(statearr_34141_34167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (6))){
var inst_34099 = (state_34135[(7)]);
var inst_34108 = inst_34099.cljs$lang$protocol_mask$partition0$;
var inst_34109 = (inst_34108 & (64));
var inst_34110 = inst_34099.cljs$core$ISeq$;
var inst_34111 = (cljs.core.PROTOCOL_SENTINEL === inst_34110);
var inst_34112 = ((inst_34109) || (inst_34111));
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34112)){
var statearr_34142_34168 = state_34135__$1;
(statearr_34142_34168[(1)] = (9));

} else {
var statearr_34143_34169 = state_34135__$1;
(statearr_34143_34169[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (17))){
var inst_34131 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34144_34170 = state_34135__$1;
(statearr_34144_34170[(2)] = inst_34131);

(statearr_34144_34170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (3))){
var state_34135__$1 = state_34135;
var statearr_34145_34171 = state_34135__$1;
(statearr_34145_34171[(2)] = null);

(statearr_34145_34171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (12))){
var inst_34099 = (state_34135[(7)]);
var inst_34121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34099);
var state_34135__$1 = state_34135;
var statearr_34146_34172 = state_34135__$1;
(statearr_34146_34172[(2)] = inst_34121);

(statearr_34146_34172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (2))){
var inst_34099 = (state_34135[(7)]);
var inst_34099__$1 = (state_34135[(2)]);
var inst_34100 = (inst_34099__$1 == null);
var state_34135__$1 = (function (){var statearr_34147 = state_34135;
(statearr_34147[(7)] = inst_34099__$1);

return statearr_34147;
})();
if(cljs.core.truth_(inst_34100)){
var statearr_34148_34173 = state_34135__$1;
(statearr_34148_34173[(1)] = (3));

} else {
var statearr_34149_34174 = state_34135__$1;
(statearr_34149_34174[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (11))){
var inst_34116 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34150_34175 = state_34135__$1;
(statearr_34150_34175[(2)] = inst_34116);

(statearr_34150_34175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (9))){
var state_34135__$1 = state_34135;
var statearr_34151_34176 = state_34135__$1;
(statearr_34151_34176[(2)] = true);

(statearr_34151_34176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (5))){
var inst_34133 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34135__$1,inst_34133);
} else {
if((state_val_34136 === (14))){
var inst_34124 = (state_34135[(8)]);
var inst_34124__$1 = (state_34135[(2)]);
var inst_34125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34124__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_34126 = (inst_34125 === (0));
var state_34135__$1 = (function (){var statearr_34152 = state_34135;
(statearr_34152[(8)] = inst_34124__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34126)){
var statearr_34153_34177 = state_34135__$1;
(statearr_34153_34177[(1)] = (15));

} else {
var statearr_34154_34178 = state_34135__$1;
(statearr_34154_34178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (16))){
var inst_34124 = (state_34135[(8)]);
var inst_34129 = console.warn("file open failed",inst_34124);
var state_34135__$1 = state_34135;
var statearr_34155_34179 = state_34135__$1;
(statearr_34155_34179[(2)] = inst_34129);

(statearr_34155_34179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (10))){
var state_34135__$1 = state_34135;
var statearr_34156_34180 = state_34135__$1;
(statearr_34156_34180[(2)] = false);

(statearr_34156_34180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (8))){
var inst_34119 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34119)){
var statearr_34157_34181 = state_34135__$1;
(statearr_34157_34181[(1)] = (12));

} else {
var statearr_34158_34182 = state_34135__$1;
(statearr_34158_34182[(1)] = (13));

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
});})(c__30034__auto__,req))
;
return ((function (switch__29774__auto__,c__30034__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____0 = (function (){
var statearr_34159 = [null,null,null,null,null,null,null,null,null];
(statearr_34159[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__);

(statearr_34159[(1)] = (1));

return statearr_34159;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____1 = (function (state_34135){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_34135);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e34160){if((e34160 instanceof Object)){
var ex__29778__auto__ = e34160;
var statearr_34161_34183 = state_34135;
(statearr_34161_34183[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34184 = state_34135;
state_34135 = G__34184;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__ = function(state_34135){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____1.call(this,state_34135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__,req))
})();
var state__30036__auto__ = (function (){var statearr_34162 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_34162[(6)] = c__30034__auto__);

return statearr_34162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__,req))
);

return c__30034__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__34186 = arguments.length;
switch (G__34186) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___34188 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___34188 == null)){
} else {
var x_34189 = temp__5461__auto___34188;
shadow.dom.remove(x_34189);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__30034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30034__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__30035__auto__ = (function (){var switch__29774__auto__ = ((function (c__30034__auto__,el,container_el,temp__5461__auto__){
return (function (state_34202){
var state_val_34203 = (state_34202[(1)]);
if((state_val_34203 === (1))){
var inst_34190 = cljs.core.async.timeout((250));
var state_34202__$1 = state_34202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34202__$1,(2),inst_34190);
} else {
if((state_val_34203 === (2))){
var inst_34192 = (state_34202[(2)]);
var inst_34193 = [el];
var inst_34194 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_34195 = [inst_34194];
var inst_34196 = cljs.core.PersistentHashMap.fromArrays(inst_34193,inst_34195);
var inst_34197 = shadow.animate.start((250),inst_34196);
var state_34202__$1 = (function (){var statearr_34204 = state_34202;
(statearr_34204[(7)] = inst_34192);

return statearr_34204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34202__$1,(3),inst_34197);
} else {
if((state_val_34203 === (3))){
var inst_34199 = (state_34202[(2)]);
var inst_34200 = shadow.dom.remove(container_el);
var state_34202__$1 = (function (){var statearr_34205 = state_34202;
(statearr_34205[(8)] = inst_34199);

return statearr_34205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34202__$1,inst_34200);
} else {
return null;
}
}
}
});})(c__30034__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__29774__auto__,c__30034__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____1 = (function (state_34202){
while(true){
var ret_value__29776__auto__ = (function (){try{while(true){
var result__29777__auto__ = switch__29774__auto__(state_34202);
if(cljs.core.keyword_identical_QMARK_(result__29777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29777__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__29778__auto__ = e34207;
var statearr_34208_34210 = state_34202;
(statearr_34208_34210[(5)] = ex__29778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34211 = state_34202;
state_34202 = G__34211;
continue;
} else {
return ret_value__29776__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__ = function(state_34202){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____1.call(this,state_34202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__29775__auto__;
})()
;})(switch__29774__auto__,c__30034__auto__,el,container_el,temp__5461__auto__))
})();
var state__30036__auto__ = (function (){var statearr_34209 = (f__30035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30035__auto__.cljs$core$IFn$_invoke$arity$0() : f__30035__auto__.call(null));
(statearr_34209[(6)] = c__30034__auto__);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30036__auto__);
});})(c__30034__auto__,el,container_el,temp__5461__auto__))
);

return c__30034__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4292__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__34212(s__34213){
return (new cljs.core.LazySeq(null,(function (){
var s__34213__$1 = s__34213;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__34213__$1);
if(temp__5457__auto__){
var s__34213__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34213__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__34213__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__34215 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__34214 = (0);
while(true){
if((i__34214 < size__4291__auto__)){
var vec__34216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__34214);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34216,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34216,(1),null);
cljs.core.chunk_append(b__34215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__34219 = "%4d | %s";
var G__34220 = (((1) + idx) + start_idx);
var G__34221 = text;
return goog.string.format(G__34219,G__34220,G__34221);
})()], null));

var G__34228 = (i__34214 + (1));
i__34214 = G__34228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34215),shadow$cljs$devtools$client$hud$source_line_html_$_iter__34212(cljs.core.chunk_rest(s__34213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34215),null);
}
} else {
var vec__34222 = cljs.core.first(s__34213__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__34225 = "%4d | %s";
var G__34226 = (((1) + idx) + start_idx);
var G__34227 = text;
return goog.string.format(G__34225,G__34226,G__34227);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__34212(cljs.core.rest(s__34213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__34230 = arguments.length;
switch (G__34230) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__34232){
var map__34233 = p__34232;
var map__34233__$1 = ((((!((map__34233 == null)))?(((((map__34233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34233):map__34233);
var warning = map__34233__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34233__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__34233,map__34233__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__34233,map__34233__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__34235){
var map__34236 = p__34235;
var map__34236__$1 = ((((!((map__34236 == null)))?(((((map__34236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34236):map__34236);
var warning = map__34236__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__34238 = source_excerpt;
var map__34238__$1 = ((((!((map__34238 == null)))?(((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34238):map__34238);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3922__auto__ = column;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__34241){
var map__34242 = p__34241;
var map__34242__$1 = ((((!((map__34242 == null)))?(((((map__34242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34242):map__34242);
var msg = map__34242__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__34244 = info;
var map__34244__$1 = ((((!((map__34244 == null)))?(((((map__34244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34244):map__34244);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__34244,map__34244__$1,sources,map__34242,map__34242__$1,msg,type,info){
return (function (p1__34240_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__34240_SHARP_));
});})(map__34244,map__34244__$1,sources,map__34242,map__34242__$1,msg,type,info))
,sources));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","auto","10000","10px 10px 0 10px","0px","absolute","monospace","0px"])], null),(function (){var iter__4292__auto__ = ((function (map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__34246(s__34247){
return (new cljs.core.LazySeq(null,((function (map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info){
return (function (){
var s__34247__$1 = s__34247;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__34247__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__34252 = cljs.core.first(xs__6012__auto__);
var map__34252__$1 = ((((!((map__34252 == null)))?(((((map__34252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34252):map__34252);
var src = map__34252__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34252__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4288__auto__ = ((function (s__34247__$1,map__34252,map__34252__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__34246_$_iter__34248(s__34249){
return (new cljs.core.LazySeq(null,((function (s__34247__$1,map__34252,map__34252__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info){
return (function (){
var s__34249__$1 = s__34249;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__34249__$1);
if(temp__5457__auto____$1){
var s__34249__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34249__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__34249__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__34251 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__34250 = (0);
while(true){
if((i__34250 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__34250);
cljs.core.chunk_append(b__34251,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__34254 = (i__34250 + (1));
i__34250 = G__34254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34251),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__34246_$_iter__34248(cljs.core.chunk_rest(s__34249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34251),null);
}
} else {
var warning = cljs.core.first(s__34249__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__34246_$_iter__34248(cljs.core.rest(s__34249__$2)));
}
} else {
return null;
}
break;
}
});})(s__34247__$1,map__34252,map__34252__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info))
,null,null));
});})(s__34247__$1,map__34252,map__34252__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__34246(cljs.core.rest(s__34247__$1)));
} else {
var G__34255 = cljs.core.rest(s__34247__$1);
s__34247__$1 = G__34255;
continue;
}
} else {
return null;
}
break;
}
});})(map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info))
,null,null));
});})(map__34244,map__34244__$1,sources,sources_with_warnings,map__34242,map__34242__$1,msg,type,info))
;
return iter__4292__auto__(sources_with_warnings);
})()], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__34256){
var map__34257 = p__34256;
var map__34257__$1 = ((((!((map__34257 == null)))?(((((map__34257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34257):map__34257);
var msg = map__34257__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","absolute","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
