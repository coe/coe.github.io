var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Remove File"]=function(e){var t=WindowManager.createWindow({backgroundColor:"white"}),i=Ti.UI.createButton({title:"Are you sure?",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});t.add(i);var r=Ti.UI.createLabel({text:"",textAlign:"center",left:20+Utils.u,right:20+Utils.u});return t.add(r),i.addEventListener("click",function(){i.hide(),r.text="Removing, please wait...",Cloud.Files.remove({file_id:e.id},function(e){e.success?r.text="Removed!":r.text=""+(e.error&&e.message)||e})}),t};