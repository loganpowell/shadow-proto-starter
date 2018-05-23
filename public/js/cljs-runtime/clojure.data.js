goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__32825){
var vec__32826 = p__32825;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32826,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__32830 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32830,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32830,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32830,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__32853 = arguments.length;
switch (G__32853) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__32893_32959 = clojure.data.equality_partition;
var G__32894_32960 = "null";
var G__32895_32961 = ((function (G__32893_32959,G__32894_32960){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32893_32959,G__32894_32960))
;
goog.object.set(G__32893_32959,G__32894_32960,G__32895_32961);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__32896_32969 = clojure.data.equality_partition;
var G__32897_32970 = "string";
var G__32898_32971 = ((function (G__32896_32969,G__32897_32970){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32896_32969,G__32897_32970))
;
goog.object.set(G__32896_32969,G__32897_32970,G__32898_32971);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__32899_32974 = clojure.data.equality_partition;
var G__32900_32975 = "number";
var G__32901_32976 = ((function (G__32899_32974,G__32900_32975){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32899_32974,G__32900_32975))
;
goog.object.set(G__32899_32974,G__32900_32975,G__32901_32976);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__32902_32981 = clojure.data.equality_partition;
var G__32903_32982 = "array";
var G__32904_32983 = ((function (G__32902_32981,G__32903_32982){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__32902_32981,G__32903_32982))
;
goog.object.set(G__32902_32981,G__32903_32982,G__32904_32983);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__32911_32985 = clojure.data.equality_partition;
var G__32912_32986 = "function";
var G__32913_32987 = ((function (G__32911_32985,G__32912_32986){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32911_32985,G__32912_32986))
;
goog.object.set(G__32911_32985,G__32912_32986,G__32913_32987);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__32919_32998 = clojure.data.equality_partition;
var G__32920_32999 = "boolean";
var G__32921_33000 = ((function (G__32919_32998,G__32920_32999){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32919_32998,G__32920_32999))
;
goog.object.set(G__32919_32998,G__32920_32999,G__32921_33000);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__32933_33007 = clojure.data.equality_partition;
var G__32934_33008 = "_";
var G__32935_33009 = ((function (G__32933_33007,G__32934_33008){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__32933_33007,G__32934_33008))
;
goog.object.set(G__32933_33007,G__32934_33008,G__32935_33009);
goog.object.set(clojure.data.Diff,"null",true);

var G__33022_33046 = clojure.data.diff_similar;
var G__33023_33047 = "null";
var G__33024_33048 = ((function (G__33022_33046,G__33023_33047){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33022_33046,G__33023_33047))
;
goog.object.set(G__33022_33046,G__33023_33047,G__33024_33048);

goog.object.set(clojure.data.Diff,"string",true);

var G__33025_33050 = clojure.data.diff_similar;
var G__33026_33051 = "string";
var G__33027_33052 = ((function (G__33025_33050,G__33026_33051){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33025_33050,G__33026_33051))
;
goog.object.set(G__33025_33050,G__33026_33051,G__33027_33052);

goog.object.set(clojure.data.Diff,"number",true);

var G__33028_33053 = clojure.data.diff_similar;
var G__33029_33054 = "number";
var G__33030_33055 = ((function (G__33028_33053,G__33029_33054){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33028_33053,G__33029_33054))
;
goog.object.set(G__33028_33053,G__33029_33054,G__33030_33055);

goog.object.set(clojure.data.Diff,"array",true);

var G__33031_33057 = clojure.data.diff_similar;
var G__33032_33058 = "array";
var G__33033_33059 = ((function (G__33031_33057,G__33032_33058){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__33031_33057,G__33032_33058))
;
goog.object.set(G__33031_33057,G__33032_33058,G__33033_33059);

goog.object.set(clojure.data.Diff,"function",true);

var G__33034_33064 = clojure.data.diff_similar;
var G__33035_33065 = "function";
var G__33036_33066 = ((function (G__33034_33064,G__33035_33065){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33034_33064,G__33035_33065))
;
goog.object.set(G__33034_33064,G__33035_33065,G__33036_33066);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__33037_33067 = clojure.data.diff_similar;
var G__33038_33068 = "boolean";
var G__33039_33069 = ((function (G__33037_33067,G__33038_33068){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33037_33067,G__33038_33068))
;
goog.object.set(G__33037_33067,G__33038_33068,G__33039_33069);

goog.object.set(clojure.data.Diff,"_",true);

var G__33040_33070 = clojure.data.diff_similar;
var G__33041_33071 = "_";
var G__33042_33072 = ((function (G__33040_33070,G__33041_33071){
return (function (a,b){
var fexpr__33044 = (function (){var G__33045 = clojure.data.equality_partition(a);
var G__33045__$1 = (((G__33045 instanceof cljs.core.Keyword))?G__33045.fqn:null);
switch (G__33045__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33045__$1)].join('')));

}
})();
return (fexpr__33044.cljs$core$IFn$_invoke$arity$2 ? fexpr__33044.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__33044.call(null,a,b));
});})(G__33040_33070,G__33041_33071))
;
goog.object.set(G__33040_33070,G__33041_33071,G__33042_33072);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
