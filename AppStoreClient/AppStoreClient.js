var AppStoreClient;String.prototype.replaceAll=function(e,t){return this.split(e).join(t)},module.exports=AppStoreClient=function(){function e(){}var t,n,r,o,i,a,u,s;return e.name="AppStoreClient",n="http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?",t="http://play.google.com/store/search?q=tsuyoshi+hyuga",o=n,a=function(e){var t,n,r,o,i,a,u,s,l,m,c,p,g,f,y,T;t=[],s="";try{for(n=e.documentElement,i=n.getElementsByTagName("entry"),o=c=0,f=i.length;f>=0?f>c:c>f;o=f>=0?++c:--c){for(u={},r=i.item(o),u.trackName=r.getElementsByTagName("im:name").item(0).textContent,u.artistName=r.getElementsByTagName("im:artist").item(0).textContent,l=null,a=p=0,y=r.getElementsByTagName("im:image").length;y>=0?y>p:p>y;a=y>=0?++p:--p)l=r.getElementsByTagName("im:image").item(a).textContent;for(u.artworkUrl100=l,a=g=0,T=r.getElementsByTagName("link").length;T>=0?T>g:g>T;a=T>=0?++g:--g)m=r.getElementsByTagName("link").item(a).getAttribute("type"),"audio/x-m4a"===m&&(u.previewUrl=r.getElementsByTagName("link").item(a).getAttribute("href"));t.push(u)}return t}catch(C){return null}},u=function(e){var t,n,r,o,i;if(t=decodeURIComponent,i={},r=void 0,e===void 0)return i;for(e.indexOf("?",0)>-1&&(e=e.split("?")[1]),e=e.split("&"),n=0;e.length>n;)r=e[n].split("="),""!==r[0]&&(o=r[1]===void 0?!0:t(r[1])),i[r[0]]=o,n++;return i},s=function(e){var t,n,r,o;if(n=encodeURIComponent,o="",t="",!e)return"";for(r in e)o=o+t+r+"="+n(e[r]),t="&";return o},r=["GB","IT","FI","RU","AE","PK","BD","ID","PH","JP","AU","NC","NZ","TO","TO","US","US","US","US","US","CL","BR","BR","GL"],e.getTzOff=function(){var e;return""!==Ti.Locale.getCurrentCountry()?Ti.Locale.getCurrentCountry():(e=new Date,r[(e.getHours()-e.getUTCHours()+24)%24])},i=function(e){return{onerror:e,onreadystatechange:function(){},onsendstream:function(){},ondatastream:function(){},timeout:5e3}},e.getItunesRssData=function(e,t,n){var r,o,u,s,l;return u=null!=(l=null!=n?n.country:void 0)?l:require("AppStoreClient/AppStoreClient").getTzOff(),s="https://itunes.apple.com/"+u.toLowerCase()+"/rss/topsongs/limit=300/explicit=true/xml",o=i(t),o.onload=function(){return e(a(this.responseXML))},r=Ti.Network.createHTTPClient(o),r.open("GET",s),r.send()},e.getItunesData=function(e,t,r){var o,i,a,u,l;return a=require("AppStoreClient/AppStoreClient").getTzOff(),o=null==r?n+("term=tsuyoshi+hyuga&country="+a+"&media=software&entity=software"):(null!=(l=r.country)?l:r.country=a,n+s(r)),u=o,i=Ti.Network.createHTTPClient({onload:function(){var t,n;return n=JSON.parse(this.responseText),t=n.results,e(t,n.resultCount)},onerror:t,onreadystatechange:function(){},onsendstream:function(){},ondatastream:function(){},timeout:5e3}),i.open("GET",u),i.send()},e}();