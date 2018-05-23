(ns app.core)

(defonce greeting "hello")
(def who "shadow!")

; let's play with the js interop functionality and the REPL!

(js/console.log "Hey from proto-repl!")

(js/alert "foo")

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting..."))

(defn ^:export init []
  (start))
