var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Query Events"]=function(e){function t(){Cloud.Events.query(function(e){if(e.success)if(0==e.events.length)r.setData([{title:"No events"}]);else{for(var t=[],i=0,n=e.events.length;n>i;i++){var o=e.events[i],a=Ti.UI.createTableViewRow({title:o.name,id:o.id});t.push(a)}r.setData(t)}else r.setData([{title:e.error&&e.message||e}]),Utils.error(e)})}var i=WindowManager.createWindow({backgroundColor:"white"}),r=Ti.UI.createTableView({backgroundColor:"#fff",top:0,bottom:0,data:[{title:"Loading, please wait..."}]});return r.addEventListener("click",function(e){e.row.id&&WindowManager.handleOpenWindow({target:"Show Event",id:e.row.id})}),i.add(r),i.addEventListener("open",t),i};