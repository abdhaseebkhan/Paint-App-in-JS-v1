const HandlePaint = (MainCanvas, Mode) => {
    const ctx = MainCanvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let Clicked = false;
    const DotRadius = 5;
    let PreviousX = null;
    let PreviousY = null;
    ctx.fillStyle = "#00000090";
    ctx.lineWidth = 10;
    //

    MainCanvas.addEventListener("mousedown",e=>{
        Clicked = true;
    })

    MainCanvas.addEventListener("touchstart",e=>{
        Clicked = true;
        console.log(1)
    })

    MainCanvas.addEventListener("touchend",e=>{
        Clicked = false;;
        console.log(2)
    })

    MainCanvas.addEventListener("mouseleave",e=>{
        Clicked = false;
    })

    MainCanvas.addEventListener("mouseup",e=>{
        Clicked = false;
    })

    const Draw = e => {
        if(Mode == 0){
            ctx.beginPath();
            ctx.arc
            (
                e.clientX - (DotRadius*2),
                e.clientY - (DotRadius*2),
                DotRadius,
                0, Math.PI * 2
            );
            ctx.fill();
            ctx.closePath();
        }else if(CurrentMode == 1){
            if(PreviousX==null){
                PreviousX = e.clientX;
                PreviousY = e.clientY;
            }
            ctx.beginPath();
            ctx.moveTo(PreviousX, PreviousY);
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            PreviousX = e.clientX;
            PreviousY = e.clientY;
        }
    }

    MainCanvas.addEventListener("mousemove",e=>{
        Clicked?Draw(e):undefined;
    })

    MainCanvas.addEventListener("touchmove",e=>{
        Clicked?Draw(e):undefined;
        console.log(e)
    })
}
