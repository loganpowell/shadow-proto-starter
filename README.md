## Steps to setup
1) Setup ProtoREPL in atom
2) Provision `shadow-cljs.edn` file

## Prerequisites

### ProtoREPL in Atom

The author of ProtoREPL has put together a marvelous setup guide, which you can find [here](https://gist.github.com/jasongilman/d1f70507bed021b48625). While the author uses Leiningen, you can skip those steps if you'd like. However, I find that there's very little overhead and - perhaps more importantly - just following all the steps is probably the fastest/clearest path. As a bonus, you'll already be setup for Clojure AND Clojurescript development by just following the steps.

### Java SDK:
Both Leiningen and Shadow require a modern version of Java SDK installed. The recommended version - as of the time of writing - is version 8, which you can find [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

## Shadow-cljs Setup

### Local Files

At the top of `shadow-cljs.edn` add line:
```clj
{:source-paths ["src"]}
```

Create a `src` folder in the root directory of your project. The `src` folder is where you'll create a `user.clj` file, wherein you include the short program:
```clj
 (ns user)
 (defn reset [])
 ```

In the `shadow-cljs.edn` file add `[proto-repl "0.3.1"]` to the `:dependencies` and set the `:nrepl` port (using 3333 here, but you can use whatever you prefer). It should look like this:
```clj
{:source-paths ["src"]
 :dependencies [[proto-repl "0.3.1"]]
 :nrepl {:port 3333}}
```

Add the following scripts to your `package.json` file and install the necessary dependencies:

```js
"scripts": {
  "dev": "shadow-cljs watch app",
  "release": "shadow-cljs release app"
},
"devDependencies": {
  "shadow-cljs": "<version>"
}
```

Once that's set up, in your terminal, run: `shadow-cljs server`

You *should* now have the most basic shadow server up and running. In your terminal you should see:

```
...
shadow-cljs - starting ...
shadow-cljs - Using IP "10.0.75.1" from Interface "Hyper-V Virtual Ethernet Adapter #2"
shadow-cljs - server version: 2.3.23
shadow-cljs - server running at http://0.0.0.0:9630
shadow-cljs - socket repl running at localhost:52249
shadow-cljs - nREPL server started on port 3333
```

upon running the first time, you will have a new folder in your project: `.shadow-cljs`

### Atom Settings

Now that you have your base project setup, you can get the fun part: Using the REPL!!

In Atom use your Atom Command Prompt (mine is `ctrl+shift+p`) and find:

`Proto Repl: Remote Nrepl Connection`

In the dialog that pops up leave the setting for "host": `localhost` enter the `:nrepl` port you set in your `shadow-cljs.edn` file:

`3333` in this case

#### Kicking the Tires

Now, just try out some Clojure(script) in the REPL that pops up. Something like:
```clj
(+ 1 2)
```

Hit `shift+enter` and you should see `3` in the REPL. If you got that, congrats! We're now ready for development!

## Project Deployment Targets

There are - count'em - **THREE** `:target`s you can set Shadow for:

1) The `:browser` Target ([Documentation](https://shadow-cljs.github.io/docs/UsersGuide.html#target-browser))
2) The `:npm-module` Target ([Documentation](https://shadow-cljs.github.io/docs/UsersGuide.html#target-npm-module))
3) The `:node-script` Target ([Documentation](https://shadow-cljs.github.io/docs/UsersGuide.html#target-node-script))

This means that you can - with Shadow - deploy an app, a node module or a simple node script without ever leaving Shadow. Also, perhaps in the not too distant future, you may see [React Native](https://github.com/shadow-cljs/expo-test) on the list!

### Setting up the Project for Building a Web Application

Let's setup a project for building a web app! If you'd like to see more configuration notes, please check out [this entry](https://github.com/thheller/shadow-cljs/wiki/Production-Builds) in the shadow github.

#### Augmenting `shadow-cljs.edn`

If you'll recall in our `package.json` file:
```js
"scripts": {
  "dev": "shadow-cljs watch app",
  "release": "shadow-cljs release app"
}
```
We have `app` set in our scripts. This is the name of the build that we'll make our web app with. We can change this to anything we wish, but we'll stick with it for now.

We are going to add some config to our `shadow-cljs.edn` file:

```clj
{:source-paths ["src"]
 :dependencies [[proto-repl "0.3.1"]]
 :nrepl {:port 3333}
 ;; NEW STUFF BELOW ;;
 :builds
 {:app
  {:target     :browser
   :output-dir "public/js"
   :asset-path "js"
   :modules
   {:main
    {:entries [starter.core]}}
   :devtools
   {:before-load starter.core/stop
    :after-load starter.core/start
    :http-root "public"
    :http-port 8020}}}}
```

Let's break this down one line at a time:

```clj
; This key tells shadow what builds we have for our app
 :builds                            
; This is the name we'll give our first build
 {:app
; We're targeting the browser
  {:target     :browser
; In our ["src"] where all our build files will go
   :output-dir "public/js"
; The destination - relative to the :output-dir - of the compiled Clojurescript
   :asset-path "js"
; The :modules section of the config is always a map keyed by module ID.
   :modules
; The module ID is also used to generate the Javascript filename. Module :main will generate main.js in :output-dir.
   {:main
; The entry file's namespace. See Note 1) below
    {:entries [app.core]}}
; The :devtools section see Reference 2) in the References Section at the bottom
   :devtools
   {:before-load app.core/stop
    :after-load app.core/start
    :http-root "public"
    :http-port 8020}}}}
```
#### Notes:
1) `:build` setup is structured like this:
```clj
 :builds
 {:app {:target :browser
        :output-dir "public/js"
        :asset-path "/js"
        :modules {:main {:entries [app.core]}}}}}
```
whose file structure should look like this:
```
.
├── package.json
├── shadow-cljs.edn
└── src
    └── app
        └── core.cljs
```

2) You can find out more about these settings in [the documentation](https://shadow-cljs.github.io/docs/UsersGuide.html#target-browser)


#### Create an `index.html` file inside your `public` directory

Create an html file that looks something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Starter project</title>
  </head>
  <body>
    <div id="app"></div> <!-- your build -->
    <script src="/js/main.js"></script> <!-- main.js from your :output-dir -->
    <script>app.core.init();</script><!-- an init script. See why in "Create a Starter File" -->
  </body>
</html>
```

#### Create a Starter File

In your `core.cljs` file (if you're following along), create a simple starter file like this:

```clj
(ns app.core)

(js/console.log "Hey from proto-repl!")

(js/alert "foo")

(defn stop [] ; :devtools {:before-load script
  (js/console.log "Stopping..."))

(defn start [] ; :devtools {:after-load script
  (js/console.log "Starting..."))

(defn ^:export init [] ; this is the `app.core.init()` that's triggered in the html
  (start))
```

#### Fire It Up!

Once you've changed your `shadow-cljs.edn` file, you'll have to restart the shadow dev environment to pick up the new configuration. Don't worry, that's the only time you'll really have to restart it. However instead of running: `shadow-cljs server` in your terminal, you'll run:
```
npm run dev
```
So that shadow can pick up the build settings in `package.json`

Now that you've config'ed your shadow-cljs.edn for web development, once you save the file, shadow will reload and offer you the http port you specified to open in a browser. When your browser loads the above code, it should show an alert:

`foo`

And you should see in your console:
```
Hey from proto-repl!                core.cljs:8
shadow-cljs: WebSocket connected!   browser.cljs:27
shadow-cljs: REPL init successful   browser.cljs:27
Starting...                         core.cljs:16
```

Once you've connected to the browser input into ProtoREPL in Atom:

```
(shadow.cljs.devtools.api/nrepl-select :app)
```
(Here `:app` is the name of your `:build`)

You should see this printed in the REPL:

```
To quit, type: :cljs/quit
cljs.user=>
[:selected :app]
```

If you see that, you're ALL SET FOR CLOJURESCRIPT WEB APP DEVELOPMENT! WOOT!

Now play around with some of the [marvelous REPL goodness](https://gist.github.com/jasongilman/d1f70507bed021b48625#file-keymap-cson) available in Atom!


## References:
1) Proto REPL(Atom) [link](https://shadow-cljs.github.io/docs/UsersGuide.html#_proto_repl_atom)
2) :devtools in shadow
  a. [`:devtools` section](https://shadow-cljs.github.io/docs/UsersGuide.html#devtools)
  b. [additional `:devtools` config for `:target :browser`](https://shadow-cljs.github.io/docs/UsersGuide.html#_development_support)
