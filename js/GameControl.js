/*jshint bitwise: false*/	


var obj = {key1: "file:///C|/TemplateWebsite2/Items/SilverBall.JPG", key2: "file:///C|/TemplateWebsite2/Items/Silverplate.JPG",key3: "file:///C|/TemplateWebsite2/Items/shoehorn.JPG",key4: "file:///C|/TemplateWebsite2/Items/paperweight.JPG"};

var r19 = pickrandom(obj);

console.log(r19);

function pickrandom(obj){
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}

