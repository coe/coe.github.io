var Utils=require("/helper/Utils");exports.navigationWindow=null,exports.handleOpenWindow=function(e){var t=e.row&&e.row.title||e.target;if(exports[t]){var r=exports[t](e);r.title=t,null!=exports.navigationWindow?Utils.blackberry?exports.navigationWindow.open(r):exports.navigationWindow.openWindow(r):r.open()}},exports.include=function(){for(var e=arguments||[],t=0,r=e.length;r>t;t++){var i=require(e[t]);for(var n in i)exports[n]=i[n]}},exports.createInitialWindow=function(e,t){var r=Ti.UI.createWindow({title:e,exitOnClose:!0});return r.add(t),Utils.iOS?(exports.navigationWindow=Ti.UI.iOS.createNavigationWindow({window:r}),exports.navigationWindow):Utils.blackberry?(exports.navigationWindow=Ti.UI.BlackBerry.createNavigationWindow({window:r}),exports.navigationWindow):r},exports.createWindow=function(e){return e=e||{},Utils.android&&(e.fullscreen=!1),Ti.UI.createWindow(e)};