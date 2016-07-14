var SocialSupport;

module.exports = SocialSupport = function() {
    function SocialSupport() {}
    var _callLineText;
    SocialSupport.name = "SocialSupport";
    SocialSupport.LINE = 0;
    SocialSupport.TWITTER = 1;
    SocialSupport.FACEBOOK = 2;
    SocialSupport.SINAWEIBO = 3;
    _callLineText = function(linestr) {
        var openstr;
        linestr = encodeURIComponent(linestr);
        openstr = "line://msg/text/" + linestr;
        return null != Ti.UI.iOS ? Ti.Platform.canOpenURL(openstr) ? Ti.Platform.openURL(openstr) : Ti.Platform.openURL("http://line.naver.jp/R/msg/text/?" + linestr) : Ti.Platform.openURL(openstr);
    };
    SocialSupport.openShare = function(num, text, image) {
        var alertmessage, sns_obj, _Social;
        null == num && (num = 0);
        null == text && (text = "");
        if (null != Ti.UI.iOS) {
            _Social = require("dk.napp.social");
            sns_obj = {
                text: text
            };
            null != image && (sns_obj.image = image);
            alertmessage = L("serviceNotProvisioned", "Servic No Provisioned");
            switch (num) {
              case SocialSupport.TWITTER:
                return _Social.isTwitterSupported() ? _Social.twitter(sns_obj) : alert("Twitter:" + alertmessage);
            }
        }
    };
    SocialSupport.postDialogShow = function(text, url, image) {
        var FACEBOOK, LINE, OTHER, SINAWEIBO, TWITTER, cancelnum, dialog, options, sendstring, _Social;
        null == text && (text = "");
        if (null != Ti.UI.iOS) {
            _Social = require("dk.napp.social");
            LINE = 0;
            TWITTER = 1;
            FACEBOOK = 2;
            SINAWEIBO = 3;
            options = [];
            options[LINE] = "LINE";
            options[TWITTER] = "Twitter";
            options[FACEBOOK] = "Facebook";
            options[SINAWEIBO] = L("SinaWeibo", "SinaWeibo");
            options.push(L("cancel", "cancel"));
            cancelnum = options.length - 1;
            dialog = Ti.UI.createOptionDialog({
                cancel: cancelnum,
                options: options,
                title: L("choose_account_label", "choose account label"),
                message: L("choose_account_label", "choose account label")
            });
            dialog.addEventListener("click", function(e) {
                var alertmessage, e_index, sns_obj;
                e_index = e.index;
                if (e_index === cancelnum) return;
                sns_obj = {
                    text: text
                };
                null != url && (sns_obj.url = url);
                null != image && (sns_obj.image = image);
                alertmessage = L("serviceNotProvisioned", "Servic No Provisioned");
                switch (e_index) {
                  case LINE:
                    return _callLineText(text);

                  case TWITTER:
                    return _Social.isTwitterSupported() ? _Social.twitter(sns_obj) : alert("Twitter:" + alertmessage);

                  case FACEBOOK:
                    return _Social.isFacebookSupported() ? _Social.facebook(sns_obj) : alert("Facebook:" + alertmessage);

                  case SINAWEIBO:
                    return _Social.isSinaWeiboSupported() ? _Social.sinaweibo(sns_obj) : alert("" + options[SINAWEIBO] + ":" + alertmessage);
                }
            });
            return dialog.show();
        }
        if (null != Ti.Android) {
            LINE = 0;
            OTHER = 1;
            sendstring = "" + text + " " + url;
            dialog = Ti.UI.createOptionDialog({
                options: [ "LINE", L("more_item_label", "other"), L("cancel") ],
                cancel: 1,
                title: L("choose_account_label", "account")
            });
            dialog.addEventListener("click", function(e) {
                var e_index, intent;
                e_index = e.index;
                switch (e_index) {
                  case LINE:
                    return _callLineText(sendstring);

                  case OTHER:
                    intent = Ti.Android.createIntent({
                        action: Ti.Android.ACTION_SEND,
                        type: "text/plain"
                    });
                    intent.putExtra(Ti.Android.EXTRA_TEXT, sendstring);
                    return Ti.Android.currentActivity.startActivity(Ti.Android.createIntentChooser(intent, L("whichApplication", "which application")));
                }
            });
            return dialog.show();
        }
    };
    return SocialSupport;
}.call(this);