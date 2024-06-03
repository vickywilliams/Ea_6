function Box(w,h){
    this.h = h;
    this.w = w;
}

function Widget(w,h,c){
    Box.call(this,w,h)
    this.c = c;
}

let Widget  = new Widget(100,200,'red')
console.log(Widget)