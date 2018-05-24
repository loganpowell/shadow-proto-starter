(ns app.core)

(js/console.log "Hey from proto-repl!")

(js/alert "foo")

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting..."))

(defn ^:export init []
  (start))
