/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at http://www.mozillapopcorn.org/butter-license.txt */

( function( Butter, EditorHelper ) {
  document.addEventListener( "DOMContentLoaded", function() {
    Butter({
      config: "config.json",
      ready: function( butter ) {
        var script;
        EditorHelper( butter );
        script = document.createElement( "script" );
        script.src = "//www.mozilla.org/tabzilla/media/js/tabzilla.js";
        document.body.appendChild( script );
      }
    });
  }, false );
}( window.Butter, window.EditorHelper ) );
