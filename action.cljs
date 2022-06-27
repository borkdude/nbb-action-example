(ns action
  (:require ["@actions/core" :as actionsCore]
            ["@actions/github" :as actionsGithub]))

(try
  (let [name-to-greet (.getInput actionsCore "who-to-greet")
        _ (.log js/console (str "Hello " name-to-greet "!"))
        time (.toTimeString (js/Date.))
        _ (.setOutput actionsCore "time" time)
        payload (.. actionsGithub -context -payload)
        payload (js/JSON.stringify payload nil 2)
        _ (.log js/console (str "The event payload: " payload))])
  (catch :default e
    (.setFailed actionsCore (.-message e))))
