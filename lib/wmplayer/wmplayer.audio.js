// WMPlayer_AudioPlayer Release#2022/11/13-17:10#
// WMProject1217 Studios 2022
const WMPlayer_AudioPlayer = {
    LoadMusic: function(id, src, autoplay = 1, loop = 0) {
        eval("window.WMPlayer_Audio_" + id + " = " + "new Audio('" + src + "');");
        if (loop == 1) {
            eval("window.WMPlayer_Audio_" + id + ".loop = 1;");
        }
        if (autoplay == 1) {
            eval("window.WMPlayer_Audio_" + id + ".autoplay = 1;");
        }
        return 0;
    },
    PlayMusic: function(id) {
        eval("window.WMPlayer_Audio_" + id + ".play();");
        return 0;
    },
    PauseMusic: function(id) {
        eval("window.WMPlayer_Audio_" + id + ".pause();");
        return 0;
    },
    LoopMusic: function(id, loop = 1) {
        eval("window.WMPlayer_Audio_" + id + ".loop = " + loop + ";");
        return 0;
    },
    MuteMusic: function(id, mute = 1) {
        eval("window.WMPlayer_Audio_" + id + ".muted = " + mute + ";");
        return 0;
    },
    ChangeMusicVolume: function(id, volume = 1) {
        eval("window.WMPlayer_Audio_" + id + ".volume = " + volume + ";");
        return 0;
    },
    ChangeMusicSpeed: function(id, speed = 1) {
        eval("window.WMPlayer_Audio_" + id + ".playbackRate = " + speed + ";");
        return 0;
    },
    ChangeMusicCurrentTime: function(id, currenttime = 0) {
        eval("window.WMPlayer_Audio_" + id + ".currentTime = " + currenttime + ";");
        return 0;
    },
    GetMusicDuration: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".duration;");
    },
    GetMusicCurrentTime: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".currentTime;");
    },
    GetMusicSpeed: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".playbackRate;");
    },
    GetMusicMute: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".muted;");
    },
    GetMusicLoop: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".loop;");
    },
    GetMusicSrc: function(id) {
        return eval("window.WMPlayer_Audio_" + id + ".currentSrc;");
    }
}