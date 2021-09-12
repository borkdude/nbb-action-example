(ns action
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]))

(try
  (let [name-to-greet (.getInput core "who-to-greet")
        _ (.log js/console (str "Hello " name-to-greet "!"))
        time (.toTimeString (js/Date.))
        _ (.setOutput core "time" time)
        payload (.. github -context -payload)
        payload (js/JSON.stringify payload nil 2)
        _ (.log js/console (str "The event payload: " payload))])
  (catch :default e
    (.setFailed core (.-message e))))
