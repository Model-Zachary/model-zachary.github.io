var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();
$(function(){
    $loveHeart = $("#loveHeart");
    var a = $loveHeart.width() / 2;
    var b = $loveHeart.height() / 2 - 55;
    $garden = $("#garden");
    gardenCanvas = $garden[0];
    gardenCanvas.width = $("#loveHeart").width();
    gardenCanvas.height = $("#loveHeart").height();
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
    $("#content").css("width", $loveHeart.width() + $("#code").width());
    $("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
    $("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
    $("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
    setInterval(function(){
        garden.render()
    }, Garden.options.growSpeed)
});
$(window).resize(function(){
    var b = $(window).width();
    var a = $(window).height();
    if (b != clientWidth && a != clientHeight) {
        location.replace(location)
    }
});
function getHeartPoint(c){
    var b = c / Math.PI;
    var a = 19.5 * (16 * Math.pow(Math.sin(b), 3));
    var d = -20 * (13 * Math.cos(b) - 5 * Math.cos(2 * b) - 2 * Math.cos(3 * b) - Math.cos(4 * b));
    return new Array(offsetX + a, offsetY + d)
}

function startHeartAnimation(){
    var c = 50;
    var d = 10;
    var b = new Array();
    var a = setInterval(function(){
        var h = getHeartPoint(d);
        var e = true;
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
            if (j < Garden.options.bloomRadius.max * 1.3) {
                e = false;
                break
            }
        }
        if (e) {
            b.push(h);
            garden.createRandomBloom(h[0], h[1])
        }
        if (d >= 30) {
            clearInterval(a);
            showMessages()
        }
        else {
            d += 0.2
        }
    }, c)
}

(function(a){
    a.fn.typewriter = function(){
        this.each(function(){
            var d = a(this), c = d.html(), b = 0;
            d.html("");
            var e = setInterval(function(){
                var f = c.substr(b, 1);
                if (f == "<") {
                    b = c.indexOf(">", b) + 1;
                }
                else {
                    b++;
                }
                d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
                if (b >= c.length) {
                    clearInterval(e);
                }
            }, 250);
        });
        return this;
    }
})(jQuery);
function timeElapse(c){   
}
$(function(){
    var displayMode = 1;
        var together = new Date();
        together.setFullYear(2016, 9, 9);
        together.setHours(23); 
        together.setMinutes(59);
        together.setSeconds(59);
        together.setMilliseconds(999);

    setTimeout(function () {
        startHeartAnimation();
    }, 7000);

    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 1000);
function timeElapse(date, mode) {
    var current = new Date();
    var years = NaN;
    var months = NaN;
    var days = NaN;
    var hours = NaN;
    var minutes = NaN;
    var seconds = NaN;
    seconds = current.getSeconds() - date.getSeconds();
    if (seconds < 0) {
        seconds += 60;
        current.setMinutes(current.getMinutes() - 1);
    }
    minutes = current.getMinutes() - date.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        current.setHours(current.getHours() - 1);
    }
    hours = current.getHours() - date.getHours();
    if (hours < 0) {
        hours += 24;
        current.setDate(current.getDate() - 1);
    }
    if (mode == 1) {
        days = current.getDate() - date.getDate();
        if (days < 0) {
            days += getDaysInMonth(current.getMonth());
            current.setDate(current.getDate() - 1);
        }
        months = current.getMonth() - date.getMonth();
        if (months < 0) {
            months += 12;
            current.setYear(current.getFullYear() - 1);
        }
        years = current.getFullYear() - date.getFullYear();
    } else {
        days = Math.floor((current.getTime() - date.getTime()) / (1000 * 3600 * 24));
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = (years > 0 ? "<span class=\"digit\">" + years + "</span> 年 ":"")
    result += (months >= 0 ? "<span class=\"digit\">" + months + "</span> 月 ":"");
    result += "<span class=\"digit\">" + days + "</span> 日 ";
    result += "<span class=\"digit\">" + hours + "</span> 时 "
    result += "<span class=\"digit\">" + minutes + "</span> 分 "
    result += "<span class=\"digit\">" + seconds + "</span> 秒";
     $("#elapseClock").html(result);   
}        
})

function showMessages(){
    adjustWordsPosition();
    $("#messages").fadeIn(5000, function(){
        showLoveU()
    })
}

function adjustWordsPosition(){
    $("#words").css("position", "absolute");
    $("#words").css("top", $("#garden").position().top + 195);
    $("#words").css("left", $("#garden").position().left + 70)
}

function adjustCodePosition(){
    $("#code").css("margin-top", ($("#garden").height() - $("#code").height()) / 2)
}

function showLoveU(){
    $("#loveu").fadeIn(3000)

};
  