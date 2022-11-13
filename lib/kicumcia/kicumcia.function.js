// Kicuncia Function Release#2022/11/13-17:13#
// WMProject1217 Studios 2022
var Kicumcia_Notify = {
    show: function(title, content, duration, style) {
        duration = duration || 5;
        let ne = $(`<div class="wmuinotify" style="animation:wmuinotify-show-hide ${(duration < 0 ? 5 : duration) / 2}s ease-in-out${duration < 0 ? ';' : ' 2;animation-direction:alternate;'}${style}">
                        <div class="wmuinotify-title">${title}</div>
                        <div class="wmuinotify-content">${content}</div>
                    </div>`)[0];
        $('.wmuinotify-container').append(ne);
        if (duration > 0) {
            setTimeout(function() {
                ne.remove()
            }, duration * 1000 - 50);
        }
    },
    success: function(title, content, duration) {
        this.show(title, content, duration, 'background: #13af17;');
    },
    warning: function(title, content, duration) {
        this.show(title, content, duration, 'background: #e28525;');
    },
    error: function(title, content, duration) {
        this.show(title, content, duration, 'background: #fa4a44;');
    }
}

function Kicumcia_NowTimeSC() {
    var time = new Date();
    var timesc, mssc, ssc, msc, hsc, dsc, mosc, ysc;
    timesc = (time.getFullYear() - 1616) * 365.25 + (time.getMonth() - 12) * (365.25 / 12) + (time.getDate() - 18);
    timesc = timesc * 24 * 60 * 60;
    timesc = timesc + (time.getHours() - 7) * 60 * 60 + (time.getMinutes() - 12) * 60 + time.getSeconds();
    timesc = timesc * 1000 + time.getMilliseconds();
    mssc = (timesc / 1024 - parseInt(timesc / 1024)) * 1024;
    timesc = parseInt(timesc / 1024);
    ssc = (timesc / 32 - parseInt(timesc / 32)) * 32;
    timesc = parseInt(timesc / 32) + 12;
    msc = (timesc / 256 - parseInt(timesc / 256)) * 256;
    timesc = parseInt(timesc / 256) + 7;
    hsc = (timesc / 64 - parseInt(timesc / 64)) * 64;
    timesc = parseInt(timesc / 64) + 17;
    dsc = (timesc / 128 - parseInt(timesc / 128)) * 128;
    timesc = parseInt(timesc / 128) + 12;
    mosc = (timesc / 64 - parseInt(timesc / 64)) * 64;
    timesc = parseInt(timesc / 64);
    ysc = timesc + 1616;
    timesc = ysc + "/" + mosc + "/" + dsc + "-" + hsc + ":" + msc + ":" + ssc + ":" + mssc;
    return timesc;
}

function Kicumcia_FormatizeSize(size) {
    var sizer = size;
    var sizedd = "B";
    if (sizer > 1024) {
        sizer = sizer / 1024;
        sizedd = "KB";
        if (sizer > 1024) {
            sizer = sizer / 1024;
            sizedd = "MB";
            if (sizer > 1024) {
                sizer = sizer / 1024;
                sizedd = "GB";
                if (sizer > 1024) {
                    sizer = sizer / 1024;
                    sizedd = "TB";
                    if (sizer > 1024) {
                        sizer = sizer / 1024;
                        sizedd = "PB";
                        if (sizer > 1024) {
                            sizer = sizer / 1024;
                            sizedd = "EB";
                        }
                    }
                }
            }
        }
    }
    return sizer.toFixed(2) + " " + sizedd;
}

function Kicumcia_Ajax_Load(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //if (this.readyState == 4 && this.status == 200) {
        if (this.readyState == 4) {
            //document.getElementById("demo").innerHTML = this.responseText;
            document.getElementById("kicumcia-inner").innerHTML = this.responseText;
        }
    }
    ;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function Kicumcia_HTTP_Post(URL, PARAMS) {
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp.appendChild(opt);
    }
    document.body.appendChild(temp);
    temp.submit();
    return temp;
}

function Kicumcia_WelcomeMessage() {
    var text;
    var timescdata;
    var tempa;
    var tempb;
    if (location.pathname === "/") {
        timescdata = Kicumcia_NowTimeSC();
        tempa = timescdata.split("-");
        tempb = tempa[0].split("/");
        tempc = tempa[1].split(":");
        now = tempb[0];
        if (now > 7 && now <= 16)
            text = "早上好，今天也要继续努力喵~";
        else if (now > 16 && now <= 27)
            text = "上午好！工作顺利嘛？<br>不要久坐，多起来走动走动哦！";
        else if (now > 27 && now <= 36)
            text = "中午了，工作了一个上午，现在是午餐时间！";
        else if (now > 36 && now <= 47)
            text = "午后很容易犯困呢，今天的运动目标完成了吗？";
        else if (now > 47 && now <= 51)
            text = "傍晚了！<br>窗外夕阳的景色很美丽呢，最美不过夕阳红～";
        else if (now > 51 && now <= 57)
            text = "晚上好，今天过得怎么样？";
        else if (now > 57 && now <= 63)
            text = "晚安，各位前辈要好好休息哦。<br>不要背着吾辈偷偷熬夜啦~";
        else
            text = "晚安，各位前辈要好好休息哦。<br>不要背着吾辈偷偷熬夜啦~";
    } else if (document.referrer !== "") {
        const referrer = new URL(document.referrer)
          , domain = referrer.hostname.split(".")[1];
        if (location.hostname === referrer.hostname)
            text = `欢迎访问<span>「${document.title.split(" - ")[0]}」</span>`;
        else if (domain === "baidu")
            text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
        else if (domain === "so")
            text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
        else if (domain === "google")
            text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
        else
            text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
    } else {
        text = `欢迎来到 Wemakeli!`;
    }
    return text;
}

function selfile() {
    window.wmupload_LENGTH = 1024 * 1024 * 2;
    window.wmupload_file = document.getElementById('uploadfileex').files[0];
    window.wmupload_filename = document.getElementById('uploadfileex').files[0].name;
    window.wmupload_totalSize = window.wmupload_file.size;
    window.wmupload_start = 0;
    window.wmupload_end = window.wmupload_start + window.wmupload_LENGTH;
    window.wmupload_fd = null;
    window.wmupload_blob = null;
    window.wmupload_xhr = null;
    window.wmupload_processval = window.wmupload_totalSize / window.wmupload_LENGTH;
    window.wmupload_numnow = 0;
    window.wmupload_formatedsize = Kicumcia_FormatizeSize(window.wmupload_totalSize);
    setTimeout("sendfile();", 16);
}

function sendfile() {
    if (window.wmupload_start < window.wmupload_totalSize) {
        window.wmupload_fd = new FormData();
        window.wmupload_xhr = new XMLHttpRequest();
        window.wmupload_xhr.open('POST', './lib/kicumcia/upload.php', false);
        window.wmupload_blob = window.wmupload_file.slice(window.wmupload_start, window.wmupload_end);
        window.wmupload_fd.append('path', window.Kicumcia_Varible_RMTPath);
        window.wmupload_fd.append('uploadfileex', window.wmupload_blob);
        window.wmupload_fd.append('filename', window.wmupload_filename);
        window.wmupload_xhr.send(window.wmupload_fd);
        window.wmupload_start = window.wmupload_end;
        window.wmupload_end = window.wmupload_start + window.wmupload_LENGTH;
        window.wmupload_numnow = window.wmupload_numnow + 1;
        window.wmupload_nowsize = Kicumcia_FormatizeSize(window.wmupload_numnow * window.wmupload_LENGTH);
        document.getElementById("wmuibuttongroup").innerHTML = "<div>正在上传 " + ((window.wmupload_numnow / Math.ceil(window.wmupload_processval)) * 100).toFixed(2) + " % </div><div>" + window.wmupload_nowsize + " / " + window.wmupload_formatedsize + "</div>";
        setTimeout("sendfile();", 16);
    } else {
        document.getElementById("wmuibuttongroup").innerHTML = '<button class="wmuibutton" id="wmuiuploadbutton" onclick="selfile();">上传</button>';
    }
}

function usertogglestdsh() {
    if (document.getElementById("kicumcia_usertofflestd").style.bottom == "-82vh") {
        document.getElementById("kicumcia_usertofflestd").style.bottom = "41px";
    } else {
        document.getElementById("kicumcia_usertofflestd").style.bottom = "-82vh";
    }
}

function leftbarsh() {
    if (document.getElementById("kicumcia_leftbar").style.left == "-500px") {
        document.getElementById("kicumcia_leftbar").style.left = "0px";
    } else {
        document.getElementById("kicumcia_leftbar").style.left = "-500px";
    }
}

const WMConsoleLog = {
    show: function(context="[@]NULL", timeout=8000) {
        window.WMConsoleLog_RTValue = window.WMConsoleLog_RTValue + 1;
        WMConsoleLogBlock.innerHTML = WMConsoleLogBlock.innerHTML + "<div class='item' id='WMConsoleLog_Item" + window.WMConsoleLog_RTValue + "' style='display:none;'>" + context + "</div>";
        WMConsoleLog.initeffect(WMConsoleLog_RTValue, timeout);
        return 0;
    },
    log: function(context, timeout=8000) {
        window.WMConsoleLog_RTValue = window.WMConsoleLog_RTValue + 1;
        WMConsoleLogBlock.innerHTML = WMConsoleLogBlock.innerHTML + "<div class='item' id='WMConsoleLog_Item" + window.WMConsoleLog_RTValue + "' style='display:none;'>" + context + "</div>";
        WMConsoleLog.initeffect(WMConsoleLog_RTValue, timeout);
        return 0;
    },
    warn: function(context, timeout=8000) {
        window.WMConsoleLog_RTValue = window.WMConsoleLog_RTValue + 1;
        WMConsoleLogBlock.innerHTML = WMConsoleLogBlock.innerHTML + "<div class='itemwarn' id='WMConsoleLog_Item" + window.WMConsoleLog_RTValue + "' style='display:none;'>" + context + "</div>";
        WMConsoleLog.initeffect(WMConsoleLog_RTValue, timeout);
        return 0;
    },
    fail: function(context, timeout=8000) {
        window.WMConsoleLog_RTValue = window.WMConsoleLog_RTValue + 1;
        WMConsoleLogBlock.innerHTML = WMConsoleLogBlock.innerHTML + "<div class='itemfail' id='WMConsoleLog_Item" + window.WMConsoleLog_RTValue + "' style='display:none;'>" + context + "</div>";
        WMConsoleLog.initeffect(WMConsoleLog_RTValue, timeout);
        return 0;
    },
    initeffect: function(objectid, timeout) {
        setTimeout('WMConsoleLog_Item' + objectid + '.style.opacity = 0;', 1);
        setTimeout('WMConsoleLog_Item' + objectid + '.style.display = "block";', 1);
        setTimeout('window.WMConsoleLog_temp_' + objectid + ' = 0;', 1);
        setTimeout("WMConsoleLog.initeffect1(" + objectid + "," + timeout + ");", 2);
        return 0;
    },
    initeffect1: function(objectid, timeout) {
        setTimeout('window.WMConsoleLog_temp_' + objectid + ' = window.WMConsoleLog_temp_' + objectid + ' + 1;', 1);
        setTimeout('WMConsoleLog_Item' + objectid + '.style.opacity = (window.WMConsoleLog_temp_' + objectid + '/100);', 1);
        if (eval('window.WMConsoleLog_temp_' + objectid) >= 100) {
            setTimeout('WMConsoleLog.exiteffect(' + objectid + ');', timeout);
            return 0;
        }
        setTimeout("WMConsoleLog.initeffect1(" + objectid + "," + timeout + ");", 2);
    },
    exiteffect: function(objectid) {
        setTimeout('WMConsoleLog_Item' + objectid + '.style.opacity = 100;', 1);
        setTimeout('WMConsoleLog_Item' + objectid + '.style.display = "block";', 1);
        setTimeout('window.WMConsoleLog_temp_' + objectid + ' = 100;', 1);
        setTimeout("WMConsoleLog.exiteffect1(" + objectid + ");", 2);
        return 0;
    },
    exiteffect1: function(objectid) {
        setTimeout('window.WMConsoleLog_temp_' + objectid + ' = window.WMConsoleLog_temp_' + objectid + ' - 1;', 1);
        setTimeout('WMConsoleLog_Item' + objectid + '.style.opacity = (window.WMConsoleLog_temp_' + objectid + '/100);', 1);
        if (eval('window.WMConsoleLog_temp_' + objectid) <= 0) {
            setTimeout('WMConsoleLog_Item' + objectid + '.remove();', 1);
            return 0;
        }
        setTimeout("WMConsoleLog.exiteffect1(" + objectid + ");", 2);
    }
}

const WMConsoleOutput = {
    nowsctimestr: function() {
        timescdata = Kicumcia_NowTimeSC();
        tempa = timescdata.split("-");
        tempb = tempa[0].split("/");
        tempc = tempa[1].split(":");
        return "["+tempc[0]+":"+tempc[1]+":"+tempc[2]+"]";
    },
    info: function(str) {
        WMConsoleLog.log(WMConsoleOutput.nowsctimestr() + "[INFO]" + str);
        return 0;
    },
    warn: function(str) {
        WMConsoleLog.warn(WMConsoleOutput.nowsctimestr() + "[WARN]" + str);
        return 0;
    },
    fail: function(str) {
        WMConsoleLog.fail(WMConsoleOutput.nowsctimestr() + "[FAIL]" + str);
        return 0;
    }
}

const WMMessageBox = {
    show: function(context, type=0, caption="消息") {
        WMMessageBoxBlock.innerHTML = "<div class='mask'></div><div class='box'><div class='caption'>" + caption + "</div><div class='paroline'></div><div style='height:1vh;'></div><div id='context'>" + context + "</div><div style='height:calc(50px + 1vh);'></div><div style='position:absolute;left:0px;bottom:1vh;width:100%;'><button onclick='WMMessageBox.exiteffect();'>确定</button></div></div>";
        WMMessageBox.initeffect();
        return 0;
    },
    remove: function() {
        WMMessageBoxBlock.innerHTML = "";
        return 0;
    },
    initeffect: function() {
        WMMessageBoxBlock.style.opacity = 0;
        WMMessageBoxBlock.style.display = "block";
        window.WMMessageBoxBlock_temp = 0;
        setTimeout("WMMessageBox.initeffect1();",0);
        return 0;
    },
    initeffect1: function() {
        window.WMMessageBoxBlock_temp = window.WMMessageBoxBlock_temp + 2;
        WMMessageBoxBlock.style.opacity = (window.WMMessageBoxBlock_temp/100);
        if (eval(window.WMMessageBoxBlock_temp) >= 100) {
            return 0;
        }
        setTimeout("WMMessageBox.initeffect1();", 0);
    },
    exiteffect: function() {
        WMMessageBoxBlock.style.opacity = 100;
        WMMessageBoxBlock.style.display = "block";
        window.WMMessageBoxBlock_temp = 100;
        setTimeout("WMMessageBox.exiteffect1();", 0);
        return 0;
    },
    exiteffect1: function() {
        window.WMMessageBoxBlock_temp = window.WMMessageBoxBlock_temp - 2;
        WMMessageBoxBlock.style.opacity = (window.WMMessageBoxBlock_temp/100);
        if (eval(window.WMMessageBoxBlock_temp) <= 0) {
            setTimeout('WMMessageBox.remove();', 1);
            return 0;
        }
        setTimeout("WMMessageBox.exiteffect1();", 0);
    }
}

const WMNotifyIcon = {
    show: function(context, type=0, caption="消息", timeout=8000) {
        window.WMNotifyIcon_RTValue = window.WMNotifyIcon_RTValue + 1;
        WMNotifyIconBlock.innerHTML = WMNotifyIconBlock.innerHTML + "<div class='item' id='WMNotifyIcon_Item" + window.WMNotifyIcon_RTValue + "' style='display:none;'><div class='caption'>" + caption + "</div><div class='context'>" + context + "</div></div>";
        WMNotifyIcon.initeffect(WMNotifyIcon_RTValue, timeout);
        return 0;
    },
    initeffect: function(objectid, timeout) {
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.opacity = 0;', 1);
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.display = "block";', 1);
        setTimeout('window.WMNotifyIcon_temp_' + objectid + ' = 0;', 1);
        setTimeout("WMNotifyIcon.initeffect1(" + objectid + "," + timeout + ");", 2);
        return 0;
    },
    initeffect1: function(objectid, timeout) {
        setTimeout('window.WMNotifyIcon_temp_' + objectid + ' = window.WMNotifyIcon_temp_' + objectid + ' + 1;', 1);
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.opacity = (window.WMNotifyIcon_temp_' + objectid + '/100);', 1);
        if (eval('window.WMNotifyIcon_temp_' + objectid) >= 100) {
            setTimeout('WMNotifyIcon.exiteffect(' + objectid + ');', timeout);
            return 0;
        }
        setTimeout("WMNotifyIcon.initeffect1(" + objectid + "," + timeout + ");", 2);
    },
    exiteffect: function(objectid) {
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.opacity = 100;', 1);
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.display = "block";', 1);
        setTimeout('window.WMNotifyIcon_temp_' + objectid + ' = 100;', 1);
        setTimeout("WMNotifyIcon.exiteffect1(" + objectid + ");", 2);
        return 0;
    },
    exiteffect1: function(objectid) {
        setTimeout('window.WMNotifyIcon_temp_' + objectid + ' = window.WMNotifyIcon_temp_' + objectid + ' - 1;', 1);
        setTimeout('WMNotifyIcon_Item' + objectid + '.style.opacity = (window.WMNotifyIcon_temp_' + objectid + '/100);', 1);
        if (eval('window.WMNotifyIcon_temp_' + objectid) <= 0) {
            setTimeout('WMNotifyIcon_Item' + objectid + '.remove();', 1);
            return 0;
        }
        setTimeout("WMNotifyIcon.exiteffect1(" + objectid + ");", 2);
    }
}

const WMTitleCaptn = {
    show: function(title, subtitle="", timeout=8000) {
        WMTitleCaptnBlock.innerHTML = WMTitleCaptnBlock.innerHTML + "<div class='item' id='WMTitleCaptn_Item'><div class='titlert'>" + title + "</div><div class='subtitlert'>" + subtitle + "</div></div>";
        WMTitleCaptn.initeffect(timeout);
        return 0;
    },
    remove: function() {
        WMTitleCaptnBlock.innerHTML = "";
        return 0;
    },
    initeffect: function(timeout) {
        WMTitleCaptnBlock.style.opacity = 0;
        WMTitleCaptnBlock.style.display = "block";
        window.WMTitleCaptnBlock_temp = 0;
        setTimeout("WMTitleCaptn.initeffect1(" + timeout + ");",0);
        return 0;
    },
    initeffect1: function(timeout) {
        window.WMTitleCaptnBlock_temp = window.WMTitleCaptnBlock_temp + 2;
        WMTitleCaptnBlock.style.opacity = (window.WMTitleCaptnBlock_temp/100);
        if (eval(window.WMTitleCaptnBlock_temp) >= 100) {
            setTimeout("WMTitleCaptn.exiteffect();", timeout);
            return 0;
        }
        setTimeout("WMTitleCaptn.initeffect1(" + timeout + ");", 0);
    },
    exiteffect: function() {
        WMTitleCaptnBlock.style.opacity = 100;
        WMTitleCaptnBlock.style.display = "block";
        window.WMTitleCaptnBlock_temp = 100;
        setTimeout("WMTitleCaptn.exiteffect1();", 0);
        return 0;
    },
    exiteffect1: function() {
        window.WMTitleCaptnBlock_temp = window.WMTitleCaptnBlock_temp - 2;
        WMTitleCaptnBlock.style.opacity = (window.WMTitleCaptnBlock_temp/100);
        if (eval(window.WMTitleCaptnBlock_temp) <= 0) {
            setTimeout('WMTitleCaptn.remove();', 1);
            return 0;
        }
        setTimeout("WMTitleCaptn.exiteffect1();", 0);
    }
}

function FinalInitialize() {
    window.WMConsoleLog_RTValue = -1;
    window.WMNotifyIcon_RTValue = -1;
    WMUI_Page_Title = document.title;
    var hidden, state, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    }
    document.addEventListener(visibilityChange, function() {
        if (document[state]=='hidden') {
            document.title = "|･ω･｀) 盯~";
        } else {
            document.title = "被发现了诶...";
            setTimeout(function () {
                document.title = WMUI_Page_Title;
            }, 1024);
        }
    }, false);
    console.original_debug = console.debug;
    console.original_error = console.error;
    console.original_info = console.info;
    console.original_log = console.log;
    console.original_warn = console.warn;
    console.debug = function(str) {
        console.original_debug(str);
        WMConsoleOutput.info(str);
    }
    console.error = function(str) {
        console.original_error(str);
        WMConsoleOutput.fail(str);
    }
    console.info = function(str) {
        console.original_info(str);
        WMConsoleOutput.info(str);
    }
    console.log = function(str) {
        console.original_log(str);
        WMConsoleOutput.info(str);
    }
    console.warn = function(str) {
        console.original_warn(str);
        WMConsoleOutput.warn(str);
    }
    console.log("Kicumcia-UI Standalone Edition Release#2022/11/13-17:24#");
    console.log('WMProject1217 Studios 2022');
    console.log('<br><pre> 　　         　▃▆█▇▄▖\n　　     　▟◤▖   　　◥█▎\n　　　◢◤　   ▐　　　　▐▉\n　▗◤　　　▂　▗▖　　▕█▎\n　◤　▗▅▖◥▄　▀◣　　█▊\n▐　▕▎◥▖◣◤　　　　◢██\n█◣　◥▅█▀　　　　▐██◤\n▐█▙▂　　       　◢██◤\n　◥██◣　　　　◢▄◤\n　　　▀██▅▇▀</pre>');
    return 0;
}