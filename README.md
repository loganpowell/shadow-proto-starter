<!-- ---
title: 'Clojurescript Development Environment for JavaScript Developers with Shadow-cljs and ProtoREPL in Atom'
created: '5-24-2018'
canonicalUrl: 'https://github.com/loganpowell/shadow-proto-starter'
tags: ['cljs', 'Atom', 'Clojurescript', 'shadow-cljs', 'protorepl']
license: 'public-domain'
--- -->


# Introduction

`shadow-cljs` is a clojurescript development environment that - unlike its predecessors - integrates seamlessly with the npm ecosystem to manage JavaScript dependencies. There are also many other conveniences that [the author](https://github.com/thheller) (and [contributors](https://github.com/thheller/shadow-cljs/graphs/contributors) - one of which [inspired me](https://medium.com/@jiyinyiyong/clojurians-please-share-your-knowledges-with-blogs-c674503f54a) to write this up) of shadow has provided the JavaScript-come-Clojurescript developer. Herein, we're going to run through how to get setup with shadow. This guide will focus on Atom, but there are [many other IDE/text editors](https://shadow-cljs.github.io/docs/UsersGuide.html#_editor_integration) you can use for this. I use Atom, so - ultimately - I'm doing this for myself. If anyone else gets anything from it, that's great. Like they say, if you want to understand something, teach it!

## Convenience REPL references

[source](https://github.com/thheller/shadow-cljs/wiki/REPL)

Waking up ProtoREPL to shadow once config'ed (you'll use this later):

For `:devtools`
```
(shadow.cljs.devtools.api/nrepl-select :<your build>)
```

# Prerequisites

## ProtoREPL in Atom

The author of ProtoREPL has put together a marvelous setup guide, which you can find [here](https://gist.github.com/jasongilman/d1f70507bed021b48625). While the author uses Leiningen, you can skip those steps if you'd like. However, I find that there's very little overhead and - perhaps more importantly - just following all the steps is probably the fastest/clearest path. As a bonus, you'll already be setup for Clojure AND Clojurescript development by just following the steps there and here.

## Java SDK:
Both Leiningen and Shadow require a modern version of Java SDK installed. The recommended version - as of the time of writing - is version 8, which you can find [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Don’t worry, you won’t have to touch Java for Clojurescript. It just needs the compiler.

## Install the Shadow CLI

```
npm install -g shadow-cljs
```

# Shadow-cljs Setup

## Local Files

In the root directory of your project, create a `shadow-cljs.edn` file. At the top of `shadow-cljs.edn` add line:
```clj
{:source-paths ["src"]}
```

Create a `src` folder in the root directory of your project. The `src` folder is where you'll create a `user.clj` file, wherein you include the short program:
```clj
 (ns user)
 (defn reset [])
 ```
As mentioned in [the shadow docs](https://shadow-cljs.github.io/docs/UsersGuide.html#_proto_repl_atom): "The file must define the user/reset fn since Proto REPL will call that when connecting. If user/reset is not found it will call tools.namespace which destroys the running shadow-cljs server. We don’t want that."

No, we don't want that.

Edit the `shadow-cljs.edn` file by adding `[proto-repl "0.3.1"]` to a `:dependencies` key and set the `:nrepl` port (using 3333 here, but you can use whatever you prefer). It should look like this:
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

## Atom Settings

Now that you have your base project setup, you can get the fun part: Using the REPL!!

In Atom use your Atom Command Pallet (mine is `ctrl+shift+p`) and find:

`Proto Repl: Remote Nrepl Connection`

In the dialog that pops up leave the setting for "host": `localhost` enter the `:nrepl` port you set in your `shadow-cljs.edn` file:

`3333` in this case

### Kicking the Tires

Now, just try out some Clojure(script) in the REPL that pops up. Something like:
```clj
(+ 1 2)
```

Hit `shift+enter` and you should see `3` in the REPL. If you got that, congrats! We're now ready for development!

# Project Deployment Targets

There are a number of `:target`s [you can set](https://shadow-cljs.github.io/docs/UsersGuide.html#_build_target) Shadow for.

Each build in shadow-cljs must define a `:target` which defines where you intend your code to be executed. There are default built-ins for the browser and node.js. They all share the basic concept of having :dev and :release modes. :dev mode provides all the usual development goodies like fast compilation, live code reloading and a REPL. :release mode will produce optimized output intended for production.

Targets are covered in separate chapters.

Here are some of them:

[:browser](https://shadow-cljs.github.io/docs/UsersGuide.html#target-browser)
Output code suitable for running in a web browser.

[:bootstrap](https://shadow-cljs.github.io/docs/UsersGuide.html#target-bootstrap)
Output code suitable for running in bootstrapped cljs environment.

[:browser-test](https://shadow-cljs.github.io/docs/UsersGuide.html#target-browser-test)
Scan for tests to determine required files, and output tests suitable for running in the browser.

[:karma](https://shadow-cljs.github.io/docs/UsersGuide.html#target-karma)
Scan for tests to determine required files, and output karma-runner compatible tests. See Karma.

[:node-library](https://shadow-cljs.github.io/docs/UsersGuide.html#target-node-library)
Output code suitable for use as a node library.

[:node-script](https://shadow-cljs.github.io/docs/UsersGuide.html#target-node-script)
Output code suitable for use as a node script.

[:npm-module](https://shadow-cljs.github.io/docs/UsersGuide.html#target-npm-module)
Output code suitable for use as an NPM module.

This means that you can - with Shadow - deploy an app, a node module or a simple node script without ever leaving Shadow. Also, perhaps in the not too distant future, you may see [React Native](https://github.com/shadow-cljs/expo-test) on the list!

We are going to cover two of these:

1) Web Application
2) Node Library

# 1) Setting up the Project for Building a Web Application

Let's setup a project for building a web app! If you'd like to see more configuration notes, please check out [this entry](https://github.com/thheller/shadow-cljs/wiki/Production-Builds) in the shadow github.

## Augmenting `shadow-cljs.edn`

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
; The :devtools section see Reference 2) in the References at the Bottom of this Section
   :devtools
; A symbol (with namespace) of a function to run just before refreshing files that have been recompiled.
   {:before-load app.core/stop
; A symbol (with namespace) of a function to run after hot code reload is complete.
    :after-load app.core/start
; The disk path from which to serve root filesystem requests. If not supplied, no disk files are served.
    :http-root "public"
; The port to serve from. See more in References
    :http-port 8020}}}}
```
### Notes:
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

Notice that the folder structure must mimic the `:entries` namespace. The convention being that the highest level namespace (`app`) is a folder right below the `src` path and first child namespaces (`core`) is directly under the highest level namespace (`app.core` = `app/core`).

2) You can find out more about these settings in [the documentation](https://shadow-cljs.github.io/docs/UsersGuide.html#target-browser)


## Create an `index.html` file inside your `public` directory

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

## Create a Starter File

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

## Fire It Up!

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

```clj
(shadow.cljs.devtools.api/nrepl-select :app) ;; :app = build id
```
(Here `:app` is the name in your `:builds` map)

You should see this printed in the REPL:

```
To quit, type: :cljs/quit
cljs.user=>
[:selected :app]
```

If you see that, you're ALL SET FOR CLOJURESCRIPT WEB APP DEVELOPMENT! WOOT!

Now play around with some of the [marvelous REPL goodness](https://gist.github.com/jasongilman/d1f70507bed021b48625#file-keymap-cson) available in Atom!

## References:
1. Proto REPL(Atom) [link](https://shadow-cljs.github.io/docs/UsersGuide.html#_proto_repl_atom)
2. `:devtools` in shadow
   1. [`:devtools` section](https://shadow-cljs.github.io/docs/UsersGuide.html#devtools)
   2. [additional `:devtools` config for `:target :browser`](https://shadow-cljs.github.io/docs/UsersGuide.html#_development_support)
3. [configuring lifecycle hooks like `:before-load`](https://shadow-cljs.github.io/docs/UsersGuide.html#_config)
4. [configuring HTTP](https://shadow-cljs.github.io/docs/UsersGuide.html#browser-http-server)

# 2) Setting up the Project for Building a Node-Library

## The First Node File

Let's create a new folder and file to seed our new Node library.

Under the `src` folder, create a new folder: `lib`

Then, within that folder we'll create another `core.cljs` and add this to the file:

```clj
(ns lib.core)

(defn hello [& cli-args]
  (prn "hello world"))
```

## `shadow-cljs.edn` Config

The target-specific options for a `:node-library` are:

`:target`
Use :node-library

`:output-to`
(required). The path and filename for the generated library.

`:exports`
(required) Either a single namespace-qualified symbol or a map from keywords to namespace-qualified symbols.

`:output-dir`
(optional). The path for supporting files in development mode. Defaults to a cache directory.

## `package.json` Config

We'll change our `package.json` `"scripts"` like so:

```
"scripts": {
  "dev": "shadow-cljs watch lib",
  "release": "shadow-cljs release lib"
}
```

## `shadow-cljs.edn` Config

Now we'll setup shadow to build our Clojurescript into a Node library, which we can then use from other JavaScript code!

```clj
{:source-paths ["src"]
 :dependencies [[proto-repl "0.3.1"]]
 :nrepl {:port 3333}
 :builds
; APP SETUP
 ; {:app  {:target     :browser
 ;         :output-dir "public/js"
 ;         :asset-path "js"
 ;         :modules {:main {:entries [app.core]}
 ;                   :devtools {:before-load app.core/stop
 ;                              :after-load app.core/start
 ;                              :http-root "public"
 ;                              :http-port 8020}}}}
; LIB SETUP
 {:lib {:target     :node-library
        :output-dir "public/lib"
        :output-to "public/lib/library.js"
        :exports {:hello lib.core/hello}}}}
```

## Add a Line to Your Super Basic cljs file

```clj
(ns lib.core)

(defn hello [& cli-args]
  (prn "hello world"))

(prn "Hey from proto-repl!") ;; test proto-repl
```

## Fire it up!

Now we should be able to restart our shadow in our terminal:

```
npm run dev
```

Execute the block of code using ProtoREPL (`ctrl+, b`/`ctrl+alt, b`):

```clj
(prn "Hey from proto-repl!")
```

And you should see: `"Hey from proto-repl!"` in ProtoREPL.

Now, in your terminal, you should be able to open the file (`library.js` in this case) in the `:output-to` directory (`public/lib` in this case).

## Testing in Node

Now, let's check to ensure everything's in order for access via Node...

Change your "super basic" `lib/core.cljs` file for testing in Node:

```clj
(ns lib.core)

(defn hello [& cli-args]
  (prn "hello world"))

(prn "Hey from node!") ; test out Node
```

### File Structure Review:

1) `:build` setup is structured like this:
```clj
 :builds
 {:lib {:target     :node-library
        :output-dir "public/lib"
        :output-to "public/lib/library.js"
        :exports {:hello lib.core/hello}}}}
```

Your file structure should look like this:
```
.
├── package.json
├── shadow-cljs.edn
└── src
    └── lib
        └── core.cljs
```

As with other build setups, the folder structure must mimic the namespace. In this case the `:exports` namespace (`lib`) is a folder right below the `src` path and first child namespaces (`core`) is directly under the highest level namespace (`lib.core` = `lib/core`). Also, note that `:hello` is the exported object from the namespace `lib.core/hello`. This is how you will `require` this library in your JavaScript projects. I.e.: `var x = require(')`

The :exports map maps CLJS vars to the name they should be exported to.

Now, in a new tab/window in your terminal, jump into your `public\lib` folder and just use the `node` command to start the runtime.

`.../public/`
```js
$ cd lib
$ node

> var x = require('./library.js');
"Hey from node!"
undefined
```
You should see `"Hey from node!"`, which we `prn`ted from within the namespace, but - also - we can use our compiled JavaScript from node!

`.../public/lib/`
```js
> var x = require('./library.js');
"Hey from node!"
undefined
> x.hello()
'hello world'
null
```

If you got this far, you're ready to rock on your new Node Library! WOOT! You can use the compiled code from any JavaScript program just like a regular `module.export` :)

### Using ProtoREPL

As with other builds, you can leverage the awesome REPL-driven-development style of clojurescript by waking up ProtoREPL:

1) In Atom, fire up your Remote ProtoREPL server (`ctrl, y`/`ctrl+al, y`) or search in your [Atom Command Pallet](https://flight-manual.atom.io/getting-started/sections/atom-basics/) for `ProtoREPL: Remote nRepl Connection` using `ctrl+shift+p`) and connect to your localhost at your port (3333 in this case).
2) When ProtoREPL pops up, eval: `(shadow.cljs.devtools.api/nrepl-select :lib)` and you're up and running your interactive Node environment!

If you still have your `node` session running (via `...require('./library')` in this case) in your terminal, when you eval a block of code in your project (`ctrl+b`), you should see the result both in ProtoREPL as well as in your terminal.

## JavaScript Exports Elaborated

[source](https://shadow-cljs.github.io/docs/UsersGuide.html#_exports)

# Next Steps:

If you’ve never touched clojure(script) before, get started right away with some [koans](http://clojurescriptkoans.com/)!

Or, play with your freshly minted learning environment by cloning some [practice examples](https://github.com/joakin/diving-into-clojurescript-exercises).
