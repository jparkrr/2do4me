require.config({
  "paths"   : {
    "jquery"     : "bower_components/jquery/dist/jquery",
    "underscore" : "bower_components/underscore/underscore",
    "backbone"   : "bower_components/backbone/backbone",
    "react"      : "bower_components/react/react"
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
  }
});

require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start();
});
