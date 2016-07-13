var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud"),PushManager=require("windows/pushNotifications/pushManager");WindowManager.include("/windows/pushNotifications/query","/windows/pushNotifications/notify","/windows/pushNotifications/settings","/windows/pushNotifications/subscribe","/windows/pushNotifications/unsubscribe","/windows/pushNotifications/notifyTokens","/windows/pushNotifications/subscribeToken","/windows/pushNotifications/unsubscribeToken","/windows/pushNotifications/updateSubscription","/windows/pushNotifications/showChannels","/windows/pushNotifications/queryChannels","/windows/pushNotifications/setBadge","/windows/pushNotifications/resetBadge"),exports["Push Notifications"]=function(){var e=WindowManager.createWindow({backgroundColor:"white"}),t=["Notify","Notify Tokens","Query Subscriptions","Show Channels","Query Channels","Set Badge","Reset Badge"];("iPhone OS"===Ti.Platform.name||"android"===Ti.Platform.name)&&(t.push("Settings for This Device"),t.push("Subscribe"),t.push("Unsubscribe"),t.push("Subscribe Token"),t.push("Unsubscribe Token"),t.push("Update Subscription"));var i=Ti.UI.createTableView({backgroundColor:"#fff",top:0,data:Utils.createRows(t)});return i.addEventListener("click",WindowManager.handleOpenWindow),e.add(i),e},PushManager.checkPushNotifications();