var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    function lrurl() {
        var htmlos = document.getElementById('bofqi').innerHTML;
        var stringoshtmls = htmlos.split('flashvars="');

        var dzurl = document.location.href;
        dzurl = dzurl.split('video/av');
        if (!dzurl[1] || stringoshtmls == undefined || stringoshtmls[1] == undefined) {
            document.getElementById("link1").value = "该视频无法引用!";
            document.getElementById("link2").value = "该视频无法引用!";
        } else {
            stringoshtmls = stringoshtmls[1].split('"');
            dzurl = dzurl[1].split('/');
            document.getElementById("link1").value = "https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/http://pl.bilibili.us/miniplayer.swf?" + stringoshtmls[0] + "&aid=" + dzurl[0] + "&autoplay=false&pl=player.swf";

            document.getElementById("link2").value = '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/http:/pl.bilibili.us/miniplayer.swf" flashvars="' + stringoshtmls[0] + '&aid=' + dzurl[0] + '&pl=player.swf' + '" pluginspage="https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
        }
    }

    function copy_clip(copy) {
        if (window.clipboardData) {
            window.clipboardData.setData("Text", copy);
        } else if (window.netscape) {
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if (!clip) return;
            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if (!trans) return;
            trans.addDataFlavor('text/unicode');
            var str = new Object();
            var len = new Object();
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            var copytext = copy;
            str.data = copytext;
            trans.setTransferData("text/unicode", str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip) return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
        document.getElementById("copyinfos").innerHTML = "复制成功了哦!";
        return false;
    }

    var i_loginMsg = null;

    function getLoginMsg() {
        if (typeof document.getElementById("isnewmsg") == "undefined") return;
        clearInterval(i_loginMsg);
        if (document.getElementById("isnewmsg").innerHTML == "FALSE") return;
        var _oriTitle = top.document.title;
        var _titleFlushId = 0;
        setInterval(function() {
            if (_titleFlushId++ % 2 == 0) {
                top.document.title = "【新消息】" + _oriTitle;
                document.getElementById("l_msg").style.color = "#ff0000";
            } else {
                top.document.title = "【　　　】" + _oriTitle;
                document.getElementById("l_msg").style.color = "";
            }
        }, 1000);
    }

    function _CheckLogin() {
        var taget_obj = document.getElementById('_userlogin');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/member/ajax_loginsta.php");
        DedeXHTTP = null;
        i_loginMsg = setInterval(getLoginMsg, 500);
    }

    function _UpdateLogin() {
        var taget_obj = document.getElementById('cacheupdate');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/dad.php");
        DedeXHTTP = null;

        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/member/ajax_loginsta.php");
        DedeXHTTP = null;
    }

    function _ajax_login() {
        var taget_obj = document.getElementById('_userlogin');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.AddKeyUtf8('fmdo', 'login');
        myajax.AddKeyUtf8('dopost', 'login');
        myajax.AddKeyUtf8('keeptime', '604800');
        myajax.AddKeyUtf8('userid', document.getElementById('ajax_userid').value);
        myajax.AddKeyUtf8('pwd', document.getElementById('ajax_pwd').value);
        myajax.AddKeyUtf8('vdcode', document.getElementById('ajax_vdcode').value);
        myajax.SendPost2("/member/index_do.php");
        myajax.ClearSet();
        myajax.SendGet2("/member/ajax_loginsta.php?r=" + Math.random());
    }

    function _ajax_logout() {
        var taget_obj = document.getElementById('_userlogin');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/member/index_do.php?fmdo=login&dopost=exit");
        myajax.SendGet2("/member/ajax_loginsta.php?r=" + Math.random());
    }

    function CheckLogin() {
        var taget_obj = document.getElementById('_ajax_feedback');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/member/ajax_feedback.php");
        DedeXHTTP = null;
    }

    function getDigg(aid) {
        var taget_obj = document.getElementById('newdigg');
        myajax = new DedeAjax(taget_obj, false, false, '', '', '');
        myajax.SendGet2("/plus/feedback.php?action=showDigg&aid=" + aid);
        DedeXHTTP = null;
    }

    function _onvdcodeBlur() {
        if (document.getElementById("_vdcodes").value == "") {
            document.getElementById("_vdcodes").value = "请输入验证码";
        }
        document.getElementById("_yzm").innerHTML = "";
    }

    function _onvdcodeFocus() {
        document.getElementById('_vdcodes').value = "";
        document.getElementById("_yzm").innerHTML = "<img src='/include/vdimgck.php?r=" + Math.random() + "' />";
    }

    function lgtags() {
        var tag_a = document.getElementsByTagName("span");
        for (i in tag_a) {
            var offset = 6;
            var num = 5;
            if (tag_a[i].className == "tag") {
                tag_a[i].onclick = function() {
                    $DE('search-keyword').value = this.innerHTML;
                    $DE('searchform').submit();
                };
                var rnd = Math.ceil((num + offset) * Math.random());
                if (rnd > offset) {
                    tag_a[i].className = "tag" + (rnd - offset);
                }
            }
        }
    }

    function xinptitleth() {
        try {
            var _span = document.getElementById("xinpbox").getElementsByTagName("span");
            for (i in _span) {
                if (_span[i].innerHTML.indexOf("【") != -1 && _span[i].innerHTML.indexOf("】") != -1) {
                    _span[i].innerHTML = _span[i].innerHTML.replace(_span[i].innerHTML.substring(_span[i].innerHTML.indexOf("【"), _span[i].innerHTML.indexOf("】") + 1), "");
                }
            }
        } catch (err) {}
    }

    function swlm() {
        var _lm = document.getElementById("inlanmu").getElementsByTagName("a");
        for (i in _lm) {
            _lm[i].onclick = function() {
                if ($DE('search-keyword').value.indexOf("@" + this.innerHTML) == -1) {
                    $DE('search-keyword').value = $DE('search-keyword').value + "@" + this.innerHTML;
                    $DE('searchform').submit();
                }

            }
        }
    }

    function kwtags() {
        if (kwlist == undefined) return;
        sh = "";
        for (i = 0; i < kwlist.length; i++) {
            sh += "<a href=\"#\" class=\"tag\" onclick=\"$DE('search-keyword').value=this.innerHTML;$DE('searchform').submit()\">" + kwlist[i] + "</a> ";
        }
        document.getElementById("tag_doc").innerHTML = sh;
        if (keywords_change) {
            $DE("newtag").innerHTML = '<a href="#" onclick="return addNewTag()">增加新TAG</a>';
        }
    }

    function addNewTag() {
        len = 0;
        for (i = 0; i < kwlist.length; i++) {
            len += kwlist[i].length;
        }
        if (len > 60) {
            alert("已超过最大允许Tag数!");
            return false;
        }
        $DE("newtag").innerHTML = "<form action=\"/plus/tagadd.php\" target=\"_blank\" method=\"post\"><input type=\"hidden\" name=\"aid\" value=\"" + aid + "\" /><input type=\"text\" value=\"\" name=\"newtag_in\" size=\"20\" /> <input type=\"submit\" value=\"新增\" /></form>";
        return false;
    }
    var nodedata = [];

    function ltitles() {
        tobj = document.getElementById('dedepagetitles');
        k = 0;
        if (tobj == undefined) return;
        for (i = 0; i < tobj.length; i++) {
            nodedata[k++] = [tobj.options[i].innerHTML, tobj.options[i].value];
        };
        al = document.getElementById("alist");
        al.innerHTML = "";

        if (pageno == '') pageno = 1;
        pageno = parseInt(pageno);
        sid = (k > 3 ? pageno - 2 : 0);
        for (i = sid; i < pageno + 2; i++) {
            if (nodedata[i] == undefined) continue;
            if (i == pageno - 1) {
                al.innerHTML += "<span class=\"curPage\">" + nodedata[i][0] + "</span>\n";
            } else {
                al.innerHTML += "<a href=\"" + nodedata[i][1] + "\">" + nodedata[i][0] + "</a>\n";
            }
        }
        if (k > 3) {
            al.innerHTML += "<a href=\"#\" onclick=\"viewallalist()\">...</a>";
        }
    }

    function viewallalist() {
        al = document.getElementById("alist");
        al.innerHTML = "";
        for (i = 0; i < nodedata.length; i++) {
            if (i == pageno - 1) {
                al.innerHTML += "<span class=\"curPage\">" + nodedata[i][0] + "</span>\n";
            } else {
                al.innerHTML += "<a href=\"" + nodedata[i][1] + "\">" + nodedata[i][0] + "</a>\n";
            }
        }
    }

    function callSpecPart(cpage) {
        if (cpage && totalpage && nodedata != undefined && cpage > 0 && cpage < totalpage && cpage <= nodedata.length) {
            window.location = nodedata[cpage - 1][1];
        }
    }

    function callNextPart() {
        callSpecPart(pageno + 1);
    }

    function onfirefox() {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        if (Sys.safari) return 0;
        if (Sys.ie) return 0;
        if (Sys.firefox) return 1;
        if (Sys.chrome) return 2;
        if (Sys.opera) {
            return 2;
        }
        return 0;
    }

    function loadhttpsplayer(qid) {
        document.getElementById("bofqi").innerHTML = '<embed height="482" width="950" pluginspage="https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" flashvars="vid=' + qid + '" src="https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/https:/dm.bilibili.us/httpsplayer.swf" type="application/x-shockwave-flash" allowfullscreen="true" quality="high"></embed>';
    }

    function loadQQplayer(qid) {
        document.getElementById("bofqi").innerHTML = '<iframe height="482" style="margin-top:10px;" width="950" src="https://a0.bucm.cf/extdomains/web.archive.org/web/20101119141407/https://bilibili.us/qq,' + qid + '" scrolling="no" border="0" frameborder="no" framespacing="0"></iframe>';
    }

    function GetCookie(cookieName) {
        var theCookie = "" + document.cookie;
        var ind = theCookie.indexOf(cookieName);
        if (ind == -1 || cookieName == "")
            return "";
        var ind1 = theCookie.indexOf(';', ind);
        if (ind1 == -1)
            ind1 = theCookie.length;
        return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
    }

    function flv_checkLogin() {
        if (GetCookie('DedeUserID') !== undefined && GetCookie('DedeUserID')) {
            return true;
        } else {
            return false;
        }
    }

}
/*
     FILE ARCHIVED ON 14:14:07 Nov 19, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:10:35 Aug 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 169.658
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.092
  cdx.remote: 0.07
  esindex: 0.009
  LoadShardBlock: 134.987 (3)
  PetaboxLoader3.datanode: 122.022 (4)
  CDXLines.iter: 20.609 (3)
  PetaboxLoader3.resolve: 65.303 (2)
  load_resource: 80.224
*/