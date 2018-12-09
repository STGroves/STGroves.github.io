/********************************************************************
 * openWYSIWYG popup functions Copyright (c) 2006 openWebWare.com
 * Contact us at devs@openwebware.com
 * This copyright notice MUST stay intact for use.
 *
 * $Id: wysiwyg-popup.js,v 1.2 2007/01/22 23:45:30 xhaggi Exp $
 ********************************************************************/
var WYSIWYG_Popup = {

	/**
	 * Return the value of an given URL parameter.
	 * 
	 * @param param Parameter
	 * @return Value of the given parameter
	 */
	getParam: function(param) {
	  var query = window.location.search.substring(1);
	  var parms = query.split('&');
	  for (var i=0; i<parms.length; i++) {
	    var pos = parms[i].indexOf('=');
	    if (pos > 0) {
	       var key = parms[i].substring(0,pos).toLowerCase();
	       var val = parms[i].substring(pos+1);
	       if(key == param.toLowerCase()) 
	       	return val;
	    }
	  }
	  return null;
	}
}

// close the popup if the opener does not hold the WYSIWYG object
if(!window.opener) window.close();

// bind objects on local vars
window.opener.postMessage({ "CMD": "PopulatePopup" }, "*");

var WYSIWYG = null;
var WYSIWYG_Core = null;
var WYSIWYG_Table = null;

window.addEventListener("message", function(event)
{
  if (event.data.length !== 2 || event.data[0]["CMD"] !== "PopulatePopup")
    return;

  WYSIWYG = event.data[1][0];
  WYSIWYG_Core = event.data[1][1];
  WYSIWYG_Table = event.data[1][2];
})