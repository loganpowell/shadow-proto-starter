goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27685){
var map__27686 = p__27685;
var map__27686__$1 = ((((!((map__27686 == null)))?(((((map__27686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27686):map__27686);
var m = map__27686__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27686__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27686__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27690_27729 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27691_27730 = null;
var count__27692_27731 = (0);
var i__27693_27732 = (0);
while(true){
if((i__27693_27732 < count__27692_27731)){
var f_27733 = chunk__27691_27730.cljs$core$IIndexed$_nth$arity$2(null,i__27693_27732);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27733], 0));


var G__27734 = seq__27690_27729;
var G__27735 = chunk__27691_27730;
var G__27736 = count__27692_27731;
var G__27737 = (i__27693_27732 + (1));
seq__27690_27729 = G__27734;
chunk__27691_27730 = G__27735;
count__27692_27731 = G__27736;
i__27693_27732 = G__27737;
continue;
} else {
var temp__5457__auto___27738 = cljs.core.seq(seq__27690_27729);
if(temp__5457__auto___27738){
var seq__27690_27739__$1 = temp__5457__auto___27738;
if(cljs.core.chunked_seq_QMARK_(seq__27690_27739__$1)){
var c__4319__auto___27740 = cljs.core.chunk_first(seq__27690_27739__$1);
var G__27741 = cljs.core.chunk_rest(seq__27690_27739__$1);
var G__27742 = c__4319__auto___27740;
var G__27743 = cljs.core.count(c__4319__auto___27740);
var G__27744 = (0);
seq__27690_27729 = G__27741;
chunk__27691_27730 = G__27742;
count__27692_27731 = G__27743;
i__27693_27732 = G__27744;
continue;
} else {
var f_27746 = cljs.core.first(seq__27690_27739__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27746], 0));


var G__27748 = cljs.core.next(seq__27690_27739__$1);
var G__27749 = null;
var G__27750 = (0);
var G__27751 = (0);
seq__27690_27729 = G__27748;
chunk__27691_27730 = G__27749;
count__27692_27731 = G__27750;
i__27693_27732 = G__27751;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27752 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27752], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27752)))?cljs.core.second(arglists_27752):arglists_27752)], 0));
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
var seq__27709_27757 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27710_27758 = null;
var count__27711_27759 = (0);
var i__27712_27760 = (0);
while(true){
if((i__27712_27760 < count__27711_27759)){
var vec__27715_27761 = chunk__27710_27758.cljs$core$IIndexed$_nth$arity$2(null,i__27712_27760);
var name_27762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715_27761,(0),null);
var map__27718_27763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715_27761,(1),null);
var map__27718_27764__$1 = ((((!((map__27718_27763 == null)))?(((((map__27718_27763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27718_27763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27718_27763):map__27718_27763);
var doc_27765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27718_27764__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27718_27764__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27762], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27766], 0));

if(cljs.core.truth_(doc_27765)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27765], 0));
} else {
}


var G__27767 = seq__27709_27757;
var G__27768 = chunk__27710_27758;
var G__27769 = count__27711_27759;
var G__27770 = (i__27712_27760 + (1));
seq__27709_27757 = G__27767;
chunk__27710_27758 = G__27768;
count__27711_27759 = G__27769;
i__27712_27760 = G__27770;
continue;
} else {
var temp__5457__auto___27771 = cljs.core.seq(seq__27709_27757);
if(temp__5457__auto___27771){
var seq__27709_27772__$1 = temp__5457__auto___27771;
if(cljs.core.chunked_seq_QMARK_(seq__27709_27772__$1)){
var c__4319__auto___27773 = cljs.core.chunk_first(seq__27709_27772__$1);
var G__27774 = cljs.core.chunk_rest(seq__27709_27772__$1);
var G__27775 = c__4319__auto___27773;
var G__27776 = cljs.core.count(c__4319__auto___27773);
var G__27777 = (0);
seq__27709_27757 = G__27774;
chunk__27710_27758 = G__27775;
count__27711_27759 = G__27776;
i__27712_27760 = G__27777;
continue;
} else {
var vec__27720_27778 = cljs.core.first(seq__27709_27772__$1);
var name_27779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720_27778,(0),null);
var map__27723_27780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720_27778,(1),null);
var map__27723_27781__$1 = ((((!((map__27723_27780 == null)))?(((((map__27723_27780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27723_27780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27723_27780):map__27723_27780);
var doc_27782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723_27781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723_27781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27779], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27783], 0));

if(cljs.core.truth_(doc_27782)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27782], 0));
} else {
}


var G__27787 = cljs.core.next(seq__27709_27772__$1);
var G__27788 = null;
var G__27789 = (0);
var G__27790 = (0);
seq__27709_27757 = G__27787;
chunk__27710_27758 = G__27788;
count__27711_27759 = G__27789;
i__27712_27760 = G__27790;
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

var seq__27725 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27726 = null;
var count__27727 = (0);
var i__27728 = (0);
while(true){
if((i__27728 < count__27727)){
var role = chunk__27726.cljs$core$IIndexed$_nth$arity$2(null,i__27728);
var temp__5457__auto___27799__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27799__$1)){
var spec_27800 = temp__5457__auto___27799__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27800)], 0));
} else {
}


var G__27801 = seq__27725;
var G__27802 = chunk__27726;
var G__27803 = count__27727;
var G__27804 = (i__27728 + (1));
seq__27725 = G__27801;
chunk__27726 = G__27802;
count__27727 = G__27803;
i__27728 = G__27804;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27725);
if(temp__5457__auto____$1){
var seq__27725__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27725__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27725__$1);
var G__27807 = cljs.core.chunk_rest(seq__27725__$1);
var G__27808 = c__4319__auto__;
var G__27809 = cljs.core.count(c__4319__auto__);
var G__27810 = (0);
seq__27725 = G__27807;
chunk__27726 = G__27808;
count__27727 = G__27809;
i__27728 = G__27810;
continue;
} else {
var role = cljs.core.first(seq__27725__$1);
var temp__5457__auto___27811__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27811__$2)){
var spec_27812 = temp__5457__auto___27811__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27812)], 0));
} else {
}


var G__27813 = cljs.core.next(seq__27725__$1);
var G__27814 = null;
var G__27815 = (0);
var G__27816 = (0);
seq__27725 = G__27813;
chunk__27726 = G__27814;
count__27727 = G__27815;
i__27728 = G__27816;
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
