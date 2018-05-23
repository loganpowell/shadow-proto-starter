goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27784){
var map__27785 = p__27784;
var map__27785__$1 = ((((!((map__27785 == null)))?(((((map__27785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27785):map__27785);
var m = map__27785__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27794_27841 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27795_27842 = null;
var count__27796_27843 = (0);
var i__27797_27844 = (0);
while(true){
if((i__27797_27844 < count__27796_27843)){
var f_27845 = chunk__27795_27842.cljs$core$IIndexed$_nth$arity$2(null,i__27797_27844);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27845], 0));


var G__27846 = seq__27794_27841;
var G__27847 = chunk__27795_27842;
var G__27848 = count__27796_27843;
var G__27849 = (i__27797_27844 + (1));
seq__27794_27841 = G__27846;
chunk__27795_27842 = G__27847;
count__27796_27843 = G__27848;
i__27797_27844 = G__27849;
continue;
} else {
var temp__5457__auto___27852 = cljs.core.seq(seq__27794_27841);
if(temp__5457__auto___27852){
var seq__27794_27854__$1 = temp__5457__auto___27852;
if(cljs.core.chunked_seq_QMARK_(seq__27794_27854__$1)){
var c__4319__auto___27856 = cljs.core.chunk_first(seq__27794_27854__$1);
var G__27857 = cljs.core.chunk_rest(seq__27794_27854__$1);
var G__27858 = c__4319__auto___27856;
var G__27859 = cljs.core.count(c__4319__auto___27856);
var G__27860 = (0);
seq__27794_27841 = G__27857;
chunk__27795_27842 = G__27858;
count__27796_27843 = G__27859;
i__27797_27844 = G__27860;
continue;
} else {
var f_27861 = cljs.core.first(seq__27794_27854__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27861], 0));


var G__27862 = cljs.core.next(seq__27794_27854__$1);
var G__27863 = null;
var G__27864 = (0);
var G__27865 = (0);
seq__27794_27841 = G__27862;
chunk__27795_27842 = G__27863;
count__27796_27843 = G__27864;
i__27797_27844 = G__27865;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27866], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27866)))?cljs.core.second(arglists_27866):arglists_27866)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27807_27873 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27808_27874 = null;
var count__27809_27875 = (0);
var i__27810_27876 = (0);
while(true){
if((i__27810_27876 < count__27809_27875)){
var vec__27811_27879 = chunk__27808_27874.cljs$core$IIndexed$_nth$arity$2(null,i__27810_27876);
var name_27880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811_27879,(0),null);
var map__27814_27881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811_27879,(1),null);
var map__27814_27882__$1 = ((((!((map__27814_27881 == null)))?(((((map__27814_27881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814_27881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27814_27881):map__27814_27881);
var doc_27883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27814_27882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27814_27882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27880], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27884], 0));

if(cljs.core.truth_(doc_27883)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27883], 0));
} else {
}


var G__27887 = seq__27807_27873;
var G__27888 = chunk__27808_27874;
var G__27889 = count__27809_27875;
var G__27890 = (i__27810_27876 + (1));
seq__27807_27873 = G__27887;
chunk__27808_27874 = G__27888;
count__27809_27875 = G__27889;
i__27810_27876 = G__27890;
continue;
} else {
var temp__5457__auto___27895 = cljs.core.seq(seq__27807_27873);
if(temp__5457__auto___27895){
var seq__27807_27896__$1 = temp__5457__auto___27895;
if(cljs.core.chunked_seq_QMARK_(seq__27807_27896__$1)){
var c__4319__auto___27898 = cljs.core.chunk_first(seq__27807_27896__$1);
var G__27899 = cljs.core.chunk_rest(seq__27807_27896__$1);
var G__27900 = c__4319__auto___27898;
var G__27901 = cljs.core.count(c__4319__auto___27898);
var G__27902 = (0);
seq__27807_27873 = G__27899;
chunk__27808_27874 = G__27900;
count__27809_27875 = G__27901;
i__27810_27876 = G__27902;
continue;
} else {
var vec__27822_27903 = cljs.core.first(seq__27807_27896__$1);
var name_27904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822_27903,(0),null);
var map__27825_27905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822_27903,(1),null);
var map__27825_27906__$1 = ((((!((map__27825_27905 == null)))?(((((map__27825_27905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27825_27905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27825_27905):map__27825_27905);
var doc_27907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27825_27906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27825_27906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27904], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27908], 0));

if(cljs.core.truth_(doc_27907)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27907], 0));
} else {
}


var G__27910 = cljs.core.next(seq__27807_27896__$1);
var G__27911 = null;
var G__27912 = (0);
var G__27913 = (0);
seq__27807_27873 = G__27910;
chunk__27808_27874 = G__27911;
count__27809_27875 = G__27912;
i__27810_27876 = G__27913;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27829 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27830 = null;
var count__27832 = (0);
var i__27833 = (0);
while(true){
if((i__27833 < count__27832)){
var role = chunk__27830.cljs$core$IIndexed$_nth$arity$2(null,i__27833);
var temp__5457__auto___27926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27926__$1)){
var spec_27927 = temp__5457__auto___27926__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27927)], 0));
} else {
}


var G__27928 = seq__27829;
var G__27929 = chunk__27830;
var G__27930 = count__27832;
var G__27931 = (i__27833 + (1));
seq__27829 = G__27928;
chunk__27830 = G__27929;
count__27832 = G__27930;
i__27833 = G__27931;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27829);
if(temp__5457__auto____$1){
var seq__27829__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27829__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27829__$1);
var G__27933 = cljs.core.chunk_rest(seq__27829__$1);
var G__27934 = c__4319__auto__;
var G__27935 = cljs.core.count(c__4319__auto__);
var G__27936 = (0);
seq__27829 = G__27933;
chunk__27830 = G__27934;
count__27832 = G__27935;
i__27833 = G__27936;
continue;
} else {
var role = cljs.core.first(seq__27829__$1);
var temp__5457__auto___27937__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27937__$2)){
var spec_27938 = temp__5457__auto___27937__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27938)], 0));
} else {
}


var G__27941 = cljs.core.next(seq__27829__$1);
var G__27942 = null;
var G__27943 = (0);
var G__27944 = (0);
seq__27829 = G__27941;
chunk__27830 = G__27942;
count__27832 = G__27943;
i__27833 = G__27944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
