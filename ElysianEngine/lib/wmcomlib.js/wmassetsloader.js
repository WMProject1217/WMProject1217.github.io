/*
* Copyright(c) A.K.A wmcomlib.js Universal JavaScript Standard Function Library
* WMProject1217 Studios 2024
* FileName: wmassetsloader.js
* FileVersion: 0.1.3
* Author: WMProject1217
* LatestCommit: 2024-9-26
*/

window.WMAssetsManager = {
    version: "0.1.3",
    errorHandler: function(str, e = "") { console.error(str, e); },
    filelist: [],
    fetchLocal: function(url) {
        // This function only works on requesting 'file' protocol in Android WebView which allows file access to local files
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                //resolve(new Response(xhr.response, {status: xhr.status}));
                resolve(xhr.response);
            }
            xhr.onerror = function() {
                reject(new TypeError('Local request failed'));
            }
            xhr.responseType = 'blob';
            xhr.open('GET', url);
            xhr.send();
        });
    },
    file: class {
        constructor(url, name = undefined) {
            this.url = url;
            if (name == undefined) {
                this.name = url;
            } else {
                this.name = name;
            }
            this.data = undefined;
            this.readystatus = 0; //0 not loaded, 1 loading, 2 loaded, 3 fail, 4 unloaded
        }
    },
    loadFile: function(url, name = undefined) {
        // Load file to list, this function can cover the same name file.
        if (name != undefined) {
            for (var i = 0; i < this.filelist.length; i++) {
                if (this.filelist[i].name == name) {
                    this.filelist[i].url = url;
                    this.filelist[i].readystatus = 0;
                    this.filelist[i].data = undefined;
                    return i;
                }
            }
        }
        this.temp_id = this.filelist.length;
        this.filelist[this.temp_id] = new this.file(url, name);
        return this.temp_id;
    },
    loadIt: async function(id) {
        if (id != parseInt(id)) { return; }
        if (id < 0) { return; }
        if (id >= this.filelist.length) { return; }
        this.temp_protocol = window.location.protocol;
        if (this.temp_protocol == "http:" || this.temp_protocol == "https:" || this.temp_protocol == "wmtp:" || this.temp_protocol == "chrome:" || this.temp_protocol == "chrome-extension:") {
            // Typically we wrap await in an async function
            // But most modern browsers and Node.js support use await directly
            try {
                this.temp_xhr = await fetch(this.filelist[id].url); 
                this.filelist[id].data = await this.temp_xhr.blob();
                this.filelist[id].readystatus = 2;
                delete this.temp_xhr;
            } catch(e) {
                this.errorHandler(e.message + e.stack, e);
            }
        } else if (this.temp_protocol == "file:") {
            // This only works in Android WebView which allows file access to local files
            try {
                this.filelist[id].data = await this.fetchLocal(this.filelist[id].url);
                this.filelist[id].readystatus = 2;
            } catch(e) {
                this.errorHandler(e.message + e.stack, e);
            }
        } else {
            this.errorHandler("Unknown protocol.")
        }
        return;
    },
    loadAll: async function() {
        for (var i = 0; i < this.filelist.length; i++) {
            if (this.filelist[i].readystatus == 0) {
                await this.loadIt(i);
            }
        }
        return;
    },
    require: function(name, filetype = "text/plain") {
        for (var i = 0; i < this.filelist.length; i++) {
            if (this.filelist[i].name == name) {
                var blob = new Blob([this.filelist[i].data], { type: filetype });
                var file = new File([blob], this.filelist[i].url, { type: blob.type });
                return window.URL.createObjectURL(file);
            }
        }
        return undefined;
    },
    requireData: function(name) {
        for (var i = 0; i < this.filelist.length; i++) {
            if (this.filelist[i].name == name) {
                return this.filelist[i].data;
            }
        }
        return undefined;
    }
}