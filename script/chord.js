//初始化
var scale = [0,0,0,0,0,0,0,0,0,0,0,0];
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
buttonChordDown(0);
buttonChordDown(1);
buttonChordDown(4);

//按钮回弹
function buttonChordUp(i){
    scale[i]=0;
    switch(i){
        case 0 : 
            $('.btn-chord.C').css({'background-color':'#ffe4e4'});
            $('.btn-chord.C span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break;
        case 1 : 
            $('.btn-chord.G').css({'background-color':'#ffe4e4'});
            $('.btn-chord.G span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break;            
        case 2 :
            $('.btn-chord.D').css({'background-color':'#ffe4e4'});
            $('.btn-chord.D span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break;     
        case 3 :
            $('.btn-chord.A').css({'background-color':'#ffe4e4'});
            $('.btn-chord.A span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break;     
        case 4 :
            $('.btn-chord.E').css({'background-color':'#ffe4e4'});
            $('.btn-chord.E span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 5 :
            $('.btn-chord.B').css({'background-color':'#ffe4e4'});
            $('.btn-chord.B span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 6 :
            $('.btn-chord.sF').css({'background-color':'#ffe4e4'});
            $('.btn-chord.sF span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 7 :
            $('.btn-chord.bD').css({'background-color':'#ffe4e4'});
            $('.btn-chord.bD span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 8 :
            $('.btn-chord.bA').css({'background-color':'#ffe4e4'});
            $('.btn-chord.bA span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 9 :
            $('.btn-chord.bE').css({'background-color':'#ffe4e4'});
            $('.btn-chord.bE span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
          break; 
        case 10 :
            $('.btn-chord.bB').css({'background-color':'#ffe4e4'});
            $('.btn-chord.bB span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
        case 11 :
            $('.btn-chord.F').css({'background-color':'#ffe4e4'});
            $('.btn-chord.F span').css({'background-color':'#ffe4e4','color':'#333','transform':'translateY(0px)'});
            break; 
    }
    draw();
}

//按钮按下
function buttonChordDown(i){
    scale[i]=1;
    switch(i){
        case 0 : 
            $('.btn-chord.C').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.C span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break;
        case 1 : 
            $('.btn-chord.G').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.G span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break;            
        case 2 :
            $('.btn-chord.D').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.D span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break;     
        case 3 :
            $('.btn-chord.A').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.A span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break;     
        case 4 :
            $('.btn-chord.E').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.E span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 5 :
            $('.btn-chord.B').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.B span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 6 :
            $('.btn-chord.sF').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.sF span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 7 :
            $('.btn-chord.bD').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.bD span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 8 :
            $('.btn-chord.bA').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.bA span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 9 :
            $('.btn-chord.bE').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.bE span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
          break; 
        case 10 :
            $('.btn-chord.bB').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.bB span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
        case 11 :
            $('.btn-chord.F').css({'background-color':'rgb(248, 204, 204)'});
            $('.btn-chord.F span').css({'background-color':'rgb(248, 204, 204)','color':'#fff','transform':'translateY(4px)'});
            break; 
    }
    draw();
}

/*
  I:(150,5)
  V:(220,15)
  II:(270,40)
  VI:(290,75)
  III:(270,110)
  VII:(220,135)
  IV#:(150,145)
  IIb:(75,135)
  VIb:(30,110)
  IIIb:(10,75)
  VIIb:(30,40)
  IV:(75,15)
*/
function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.beginPath();
      if(scale[0]===1)ctx.moveTo(150,5);
      if(scale[1]===1)ctx.lineTo(220,15);
      if(scale[2]===1)ctx.lineTo(270,40);
      if(scale[3]===1)ctx.lineTo(290,75);
      if(scale[4]===1)ctx.lineTo(270,110);
      if(scale[5]===1)ctx.lineTo(220,135);
      if(scale[6]===1)ctx.lineTo(150,145);
      if(scale[7]===1)ctx.lineTo(75,135);
      if(scale[8]===1)ctx.lineTo(30,110);
      if(scale[9]===1)ctx.lineTo(10,75);
      if(scale[10]===1)ctx.lineTo(30,40);
      if(scale[11]===1)ctx.lineTo(75,15);
      
      ctx.fillStyle="pink";
      ctx.fill();
  }

//触发事件
  $('.btn-chord.C').on('click',function(){
      if(scale[0]===1)buttonChordUp(0);
      else{
          buttonChordDown(0);
      }
  })

  $('.btn-chord.G').on('click',function(){
    if(scale[1]===1)buttonChordUp(1);
    else{
        buttonChordDown(1);
    }
})

$('.btn-chord.D').on('click',function(){
    if(scale[2]===1)buttonChordUp(2);
    else{
        buttonChordDown(2);
    }
})

$('.btn-chord.A').on('click',function(){
    if(scale[3]===1)buttonChordUp(3);
    else{
        buttonChordDown(3);
    }
})

$('.btn-chord.E').on('click',function(){
    if(scale[4]===1)buttonChordUp(4);
    else{
        buttonChordDown(4);
    }
})

$('.btn-chord.B').on('click',function(){
    if(scale[5]===1)buttonChordUp(5);
    else{
        buttonChordDown(5);
    }
})

$('.btn-chord.sF').on('click',function(){
    if(scale[6]===1)buttonChordUp(6);
    else{
        buttonChordDown(6);
    }
})

$('.btn-chord.bD').on('click',function(){
    if(scale[7]===1)buttonChordUp(7);
    else{
        buttonChordDown(7);
    }
})

$('.btn-chord.bA').on('click',function(){
    if(scale[8]===1)buttonChordUp(8);
    else{
        buttonChordDown(8);
    }
})

$('.btn-chord.bE').on('click',function(){
    if(scale[9]===1)buttonChordUp(9);
    else{
        buttonChordDown(9);
    }
})

$('.btn-chord.bB').on('click',function(){
    if(scale[10]===1)buttonChordUp(10);
    else{
        buttonChordDown(10);
    }
})

$('.btn-chord.F').on('click',function(){
    if(scale[11]===1)buttonChordUp(11);
    else{
        buttonChordDown(11);
    }
})