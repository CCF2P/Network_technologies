"use strict"

    let canvCtx;

    let W1, W2; // множители у частот
    let centerX, centerY, AmplX, AmplY, Phase;
    
    function reDraw(){
        function setPixel(x,y){
            canvCtx.fillRect(x,y,1,1);    
        }

        canvCtx.beginPath();

        canvCtx.fillStyle="rgb(255,255,255)";
        canvCtx.fillRect(0,0,canvCtx.canvas.clientWidth,canvCtx.canvas.clientHeight);
        canvCtx.fillStyle="rgb(0,0,0)";

        
        let phaseAgain = W1*W2*2.0*Math.PI;

        for(let phase = 0 ; phase <phaseAgain ; phase += Math.PI/1800){
            setPixel(centerX+Math.cos(W1*phase)*AmplX,centerY+Math.cos(W2*phase+Phase)*AmplY);
        }
          
        canvCtx.closePath();
        canvCtx.stroke();
    }


    function btnW1W2_onClick(){
        let str = prompt("введите соотношение частот через : , например 3:5 ");
        if(str==null){ return ; }

        let strArr;
        strArr = str.split(":");

        if(strArr.length!=2){ return; }

        let w1,w2;

        w1 = parseInt(strArr[0],10);   
        if(w1==NaN){ return ; }

        w2 = parseInt(strArr[1],10);   
        if(w2==NaN){ return ; }

        W1 = w1;
        W2 = w2;

        reDraw();
    }

    function btnPhase_onClick(){
        let str = prompt("введите сдвиг фазы в градусах, например 45 ");
        if(str === null || str.length === 0) {
            return;
        }
        
        let phase = parseInt(str,10);   
        if(phase === NaN) {
            return;
        }

        Phase = phase * Math.PI / 180;

        reDraw();
    }


    function main() {
        // инициализация
        let width = 500;
        let height = 500;
        let svg = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);
        
        AmplX = width * 0.9;
        AmplY = height * 0.9;
        W1 = 6;
        W2 = 3;
        Phase = 45;
        reDraw();
    }

    main();