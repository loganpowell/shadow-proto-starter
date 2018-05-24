(ns lib.core)

(defn hello [& cli-args]
  (prn "hello world"))
(prn "Hey from node!")

; (defn stop []
;   (prn "Stopping..."))
;
; (defn start []
;   (prn "Starting..."))
;
; (defn ^:export init []
;   (start))
