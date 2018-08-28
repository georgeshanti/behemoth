

function mec_animation() {
    var tl = new TimelineMax();
    tl.from("#mec_lines polyline, #mec_lines line", 4, {strokeDashoffset:800, ease:Power1.easeOut});
    return tl;
}

// Master animation control happens from here
var master = new TimelineMax();
master.add(mec_animation(), "+=1");




