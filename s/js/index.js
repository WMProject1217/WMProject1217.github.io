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

    if (document.getElementById("htdouga")) {
        lgtags();
        xinptitleth();
        document.getElementById("htdouga").innerHTML = document.getElementById("htdouga_data").innerHTML;
        $DE("online_1").innerHTML = (onlineInfo.c1 != undefined ? onlineInfo.c1 : 0);
        $DE("online_3").innerHTML = (onlineInfo.c3 != undefined ? onlineInfo.c3 : 0);
        $DE("online_4").innerHTML = (onlineInfo.c4 != undefined ? onlineInfo.c4 : 0);
        $DE("online_5").innerHTML = (onlineInfo.c5 != undefined ? onlineInfo.c5 : 0);
    }
    t = ['在线不明真相', '在线打酱油', '在线bilibili', '在线好人', '在线烧饼', '在线寂寞', '在线天然呆', '在线萌妹子', '在线围观'];

    var tag_a = document.getElementsByTagName("span");
    for (i in tag_a) {
        if (tag_a[i].className == "randOnline") {
            tag_a[i].innerHTML = t[Math.floor(Math.random() * t.length)];
        } else if (tag_a[i].className == "sub_addnew") {
            eval('dat = detailCountInfo.c' + tag_a[i].id.substr(7, 2));
            if (parseInt(dat))
                tag_a[i].innerHTML = "本日新投稿：" + dat;
        }
    }

    var tag_a = document.getElementsByTagName("div");
    for (i in tag_a) {
        if (tag_a[i].className == "title_addnew") {
            eval('dat = countInfo.c' + tag_a[i].id.substr(7, 2))
            tag_a[i].innerHTML = "+" + dat;
            if (parseInt(dat)) tag_a[i].style.display = "";
        }
    }


}
/*
     FILE ARCHIVED ON 13:46:01 Nov 19, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:10:34 Aug 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 116.39
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.083
  cdx.remote: 0.061
  esindex: 0.008
  LoadShardBlock: 62.925 (3)
  PetaboxLoader3.datanode: 68.677 (4)
  CDXLines.iter: 18.26 (3)
  load_resource: 105.197
  PetaboxLoader3.resolve: 42.637
*/