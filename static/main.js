require.config({
  "paths"   : {
    "jquery"     : "bower_components/jquery/dist/jquery",
    "underscore" : "bower_components/underscore/underscore",
    "backbone"   : "bower_components/backbone/backbone",
    "react"      : "bower_components/react/react",
    "JSXTransformer": "bower_components/react/jsxtransformer",
    "jsx"        : "bower_components/jsx-requirejs-plugin/js/jsx",
    "text"        : "bower_components/jsx-requirejs-plugin/js/text"
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    }
  },
  "jsx": {
    "fileExtension": '.jsx'
  }
});

require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start();
});
