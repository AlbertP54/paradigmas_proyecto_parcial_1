const mesaBillar = (id, start, end, tot) =>{
    if(id.src.match("billarOff")) {
        end.innerHTML = "";
        tot.innerHTML = "";
        
        var d = new Date();
        var h = agregarCero(d.getHours());
        var m = agregarCero(d.getMinutes());
        
        start.innerHTML = h + ":" + m;
        id.src = "images/billarOn.png"
    } else {
        var d = new Date();
        var h = agregarCero(d.getHours());
        var m = agregarCero(d.getMinutes());
        
        end.innerHTML = h + ":" + m;
        tot.innerHTML = precio(start, h, m);
        id.src= "images/billarOff.png"
        
    }
} 

const precio = (start , endh, endm) => {
    var pricermin = 0;
    var hour = start.innerHTML.toString().substring(0, 2);
    var mins = start.innerHTML.toString().substring(3, 5);
    var priceh = (endh - hour) * 50;
    
    if(endm > mins) {
        pricermin = endm-mins;
    }
    if(endm < mins) {
        if((endh - hour) == 1){
            priceh = 0;
        }

        var left4hour = 60 - endm;
        
        pricermin = parseInt(left4hour) + parseInt(mins); 
    }

    var pricemin = (50/60) * pricermin;
    var totalprice = parseFloat(pricemin) + parseFloat(priceh);
    
    totalprice = (totalprice.toFixed(2));
    
    return "$" + totalprice;
}

const agregarCero =(t) => {
    if(t < 10){
        t = "0"+ t;
    }
    return t;
}
