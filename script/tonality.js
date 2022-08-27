//初始化
var flag=[1,0,0,0,0,0,0,0,0,0,0,0];
var condition = 0;
$('.btn-tonality.C').css({'background-color':'rgb(255, 205, 233)'});
$('.btn-tonality.C span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});

function buttonTonalityUp(i){
    switch(i){
        case 0 : 
            $('.btn-tonality.C').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.C span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break;
        case 1 : 
            $('.btn-tonality.G').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.G span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break;            
        case 2 :
            $('.btn-tonality.D').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.D span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break;     
        case 3 :
            $('.btn-tonality.A').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.A span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break;     
        case 4 :
            $('.btn-tonality.E').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.E span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 5 :
            $('.btn-tonality.B').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.B span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 6 :
            $('.btn-tonality.sF').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.sF span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 7 :
            $('.btn-tonality.bD').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.bD span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 8 :
            $('.btn-tonality.bA').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.bA span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 9 :
            $('.btn-tonality.bE').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.bE span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
          break; 
        case 10 :
            $('.btn-tonality.bB').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.bB span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
        case 11 :
            $('.btn-tonality.F').css({'background-color':'#ffe6f2'});
            $('.btn-tonality.F span').css({'background-color':'#ffe6f2','color':'#333','transform':'translateY(0px)'});
            break; 
    }
    flag[i]=0;
}


function change(x){
    for(i=0;i<=11;i++)if(flag[i]===1)buttonTonalityUp(i);
    flag[x]=1;
    $('#circle-1').css({'transform':'rotate('+ -x*30 + 'deg)'});
    condition = x;
}


$('.btn-tonality.C').on('click',function(){
  if(flag[0]===0){
    $('.btn-tonality.C').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.C span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(0);
  }
})

$('.btn-tonality.G').on('click',function(){
  if(flag[1]===0){
    $('.btn-tonality.G').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.G span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(1);
  }
})

$('.btn-tonality.D').on('click',function(){
  if(flag[2]===0){
    $('.btn-tonality.D').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.D span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(2);
  }
})

$('.btn-tonality.A').on('click',function(){
  if(flag[3]===0){
    $('.btn-tonality.A').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.A span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(3);
  }
})

$('.btn-tonality.E').on('click',function(){
  if(flag[4]===0){
    $('.btn-tonality.E').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.E span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(4);
  }
})

$('.btn-tonality.B').on('click',function(){
  if(flag[5]===0){
    $('.btn-tonality.B').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.B span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(5);
  }
})

$('.btn-tonality.sF').on('click',function(){
  if(flag[6]===0){
    $('.btn-tonality.sF').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.sF span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(6);
  }
})

$('.btn-tonality.bD').on('click',function(){
  if(flag[7]===0){
    $('.btn-tonality.bD').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.bD span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(7);
  }
})

$('.btn-tonality.bA').on('click',function(){
  if(flag[8]===0){
    $('.btn-tonality.bA').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.bA span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(8);
  }
})

$('.btn-tonality.bE').on('click',function(){
  if(flag[9]===0){
    $('.btn-tonality.bE').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.bE span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(9);
  }
})

$('.btn-tonality.bB').on('click',function(){
  if(flag[10]===0){
    $('.btn-tonality.bB').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.bB span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(10);
  }
})

$('.btn-tonality.F').on('click',function(){
  if(flag[11]===0){
    $('.btn-tonality.F').css({'background-color':'rgb(255, 205, 233)'});
    $('.btn-tonality.F span').css({'background-color':'rgb(255, 205, 233)','color':'#fff','transform':'translateY(4px)'});
    change(11);
  }
})