/*jshint bitwise: false*/	



function pickrandom(){
	var obj = {key1: ["file:///C|/TemplateWebsite2/Items/SilverBall.JPG",10000,2000,350], key2: ["file:///C|/TemplateWebsite2/Items/Silverplate.JPG",2000,8000,60],key3: ["file:///C|/TemplateWebsite2/Items/shoehorn.JPG",1655,7650,2250],key4: ["file:///C|/TemplateWebsite2/Items/paperweight.JPG",1500,2450,3040]};

    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}

