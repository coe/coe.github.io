var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Query Chat Groups"]=function(e){var t=WindowManager.createWindow({backgroundColor:"white"}),i=Ti.UI.createTableView({backgroundColor:"#fff",top:0,bottom:0,data:[{title:"Loading, please wait..."}]});return i.addEventListener("click",function(e){e.row.id&&WindowManager.handleOpenWindow({target:"Show Chat Group",id:e.row.id})}),t.add(i),t.addEventListener("open",function(){Cloud.Chats.queryChatGroups(function(e){if(e.success)if(0==e.chat_groups.length)i.setData([{title:"No Results!"}]);else{for(var t=[],r=0,n=e.chat_groups.length;n>r;r++){for(var o=e.chat_groups[r],s="",a=0;a<o.participate_users.length;a++)s+=", "+o.participate_users[a].first_name+" "+o.participate_users[a].last_name;t.push(Ti.UI.createTableViewRow({title:s.substr(2),id:o.id}))}i.setData(t)}else Utils.error(e)})}),t};