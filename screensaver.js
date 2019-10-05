
input.onButtonPressed(Button.B, function(){
     basic.showString("I'm not asleep.");
})




input.onButtonPressed(Button.A, function(){
//gradient wave
let x = 0;
let y = 0;
let b = 255;
function gradientwaves() {
function lightWaveBase() {
    let d = 50
    for (let k = 0; k <= 255; k += 25.5) {
        b = k

        led.setBrightness(b);
        led.plotBrightness(x, y + 1, b - d);
        led.plotBrightness(x + 1, y + 1, b - d);
        led.plotBrightness(x + 2, y + 1, b - d);
        led.plotBrightness(x + 3, y + 1, b - d);
        led.plotBrightness(x + 4, y + 1, b - d);
        led.plotBrightness(x + 5, y + 1, b - d);
        led.plotBrightness(x - 1, y + 1, b - d);
        led.plotBrightness(x - 2, y + 1, b - d);
        led.plotBrightness(x - 3, y + 1, b - d);
        led.plotBrightness(x - 4, y + 1, b - d);
        led.plotBrightness(x - 5, y + 1, b - d);

        led.plotBrightness(x, y, b);
        led.plotBrightness(x + 1, y, b);
        led.plotBrightness(x + 2, y, b);
        led.plotBrightness(x + 3, y, b);
        led.plotBrightness(x + 4, y, b);
        led.plotBrightness(x - 1, y, b);
        led.plotBrightness(x - 2, y, b);
        led.plotBrightness(x - 3, y, b);
        led.plotBrightness(x - 4, y, b);

        led.plotBrightness(x, y - 1, b - d);
        led.plotBrightness(x + 1, y - 1, b - d);
        led.plotBrightness(x + 2, y - 1, b - d);
        led.plotBrightness(x - 1, y - 1, b - d);
        led.plotBrightness(x - 2, y - 1, b - d);
        //led.plotBrightness(x, y - 1, b - d);

        basic.pause(100)


    }
    for (let l = 255; l >= 0; l -= 25.5) {
        b = l;
        led.plotBrightness(x, y, b);
        led.plotBrightness(x + 1, y, b);
        led.plotBrightness(x + 2, y, b);
        led.plotBrightness(x + 3, y, b);
        led.plotBrightness(x + 4, y, b);
        led.plotBrightness(x - 1, y, b);
        led.plotBrightness(x - 2, y, b);
        led.plotBrightness(x - 3, y, b);
        led.plotBrightness(x - 4, y, b);
        basic.pause(100);

        led.plotBrightness(x, y + 1, b + d);
        led.plotBrightness(x - 1, y + 1, b + d);
        led.plotBrightness(x - 2, y + 1, b + d);
        led.plotBrightness(x + 1, y + 1, b + d);
        led.plotBrightness(x + 2, y + 1, b + d);
        led.plotBrightness(x + 3, y + 1, b + d);
        led.plotBrightness(x + 4, y + 1, b + d);
        led.plotBrightness(x + 5, y + 1, b + d);

        led.plotBrightness(x, y - 1, b - d);
        led.plotBrightness(x + 1, y - 1, b - d);
        led.plotBrightness(x + 2, y - 1, b - d);
        led.plotBrightness(x - 1, y - 1, b - d);
        led.plotBrightness(x - 2, y - 1, b - d);
    }
}

function lightWave() {
    for (let i = 0; i <= 4; i++) {
        x = 2;
        y = i;
        lightWaveBase();
    }
}
lightWave();
lightWave();
lightWave();
lightWave();
lightWave();
}

input.onGesture(Gesture.Shake, function(){
    gradientwaves()
})






//rotating line

let x = 2;
let y = 2;
let b = 0;

function rotatinglines() {
function flatline() {
    basic.clearScreen();
    led.setBrightness(b)
    led.plot(x, y);
    led.plot(x - 1, y);
    led.plot(x - 2, y);
    led.plot(x - 3, y);
    led.plot(x - 4, y);
    led.plot(x - 5, y);

    led.plot(x + 1, y);
    led.plot(x + 2, y);
    led.plot(x + 3, y);
    led.plot(x + 4, y);
    led.plot(x + 5, y)
    basic.pause(500)
}

function vertline() {
    basic.clearScreen();
    led.setBrightness(255)
    led.plot(x, y);
    led.plot(x, y - 1);
    led.plot(x, y - 2)
    led.plot(x, y - 3);
    led.plot(x, y - 4);
    led.plot(x, y - 5);

    led.plot(x, y + 1);
    led.plot(x, y + 2);
    led.plot(x, y + 3);
    led.plot(x, y + 4);
    led.plot(x, y + 5);
    basic.pause(500)

}
function horizLine1() {
    basic.clearScreen();
    led.plot(x, y);
    led.plot(x + 1, y + 1);
    led.plot(x + 2, y + 2);
    led.plot(x + 3, y + 3);
    led.plot(x + 4, y + 4);

    led.plot(x - 1, y - 1);
    led.plot(x - 2, y - 2);
    led.plot(x - 3, y - 3);
    led.plot(x - 4, y - 4);


    basic.pause(500)
}

function horizLine2() {
    basic.clearScreen()
    led.plot(x, y);
    led.plot(x + 1, y - 1);
    led.plot(x + 2, y - 2);
    led.plot(x + 3, y - 3);
    led.plot(x + 4, y - 4);

    led.plot(x - 1, y + 1);
    led.plot(x - 2, y + 2);
    led.plot(x - 3, y + 3);
    led.plot(x - 4, y + 4);
    basic.pause(500)
}
let timer = 0;
while(timer != 5){
x = Math.randomRange(0, 4);
y = Math.randomRange(0, 4);
b = 255;
flatline();
horizLine1()
vertline();
horizLine2();
flatline();
horizLine1();
vertline();
timer++;
}
basic.clearScreen();
}

input.onButtonPressed(Button.AB, function(){
rotatinglines();
})

//random dots

let timer = 0
function randomDots() {
    while(timer != 20){
    let y = Math.randomRange(0, 4)
    let x = Math.randomRange(0, 4)
    for (let k = 0; k <= 255; k += 25.5) {
        led.plotBrightness(x, y, k)
        basic.pause(100);
    }
    for (let j = 255; j >= 0; j -= 25.5) {
        led.plotBrightness(x, y, j);
        basic.pause(100);
    }
    timer++;
    }
}
input.onGesture(Gesture.LogoUp, function(){

randomDots();
})

//moving waves

let x = -2
let f = 200
function movingwaves() {
function ledstream1() {
    basic.clearScreen()
    led.plot(x + 2, 0)
    led.plot(x + 1, 1)
    led.plot(x + 2, 2);
    led.plot(x + 3, 3);
    led.plot(x + 2, 4)
    basic.pause(f)

}

function ledstream2() {
    basic.clearScreen()
    led.plot(x + 2, 0)
    led.plot(x + 2, 1)
    led.plot(x + 2, 2)
    led.plot(x + 2, 3)
    led.plot(x + 2, 4)

    basic.pause(f)
}
function ledstream3() {
    basic.clearScreen()
    led.plot(x + 2, 0)
    led.plot(x + 3, 1)
    led.plot(x + 2, 2)
    led.plot(x + 1, 3)
    led.plot(x + 2, 4)

    basic.pause(f)
}

function bigstream() {
    ledstream1();
    ledstream2();
    ledstream3();
    ledstream2()
    ledstream1();
    ledstream2();
    x++;
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x++;
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x++
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x++
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x--
    ledstream1();
    ledstream2();
    ledstream3();
    ledstream2()
    ledstream1();
    ledstream2();
    x--;
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x--;
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x--
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
    x--
    ledstream1()
    ledstream2()
    ledstream3()
    ledstream2()
}


bigstream()
basic.clearScreen();
}
input.onGesture(Gesture.LogoDown, function(){
movingwaves();
})

//lastSS
function lastss() {
    function threes() {
        for (let j = 0; j <= 4; j++) {
            for (let h = 0; h <= 4; h++) {
                for (let u = 25.5; u <= 255; u += 25.5) {
                    led.plotBrightness(j, h, u);
                    basic.pause(100);
                }
            }
        }
        led.plotAll()
        let counter = 0
        while (counter != 5) {
            led.unplot(counter, counter);
            basic.pause(100)
            led.unplot(counter, 4 - counter);
            basic.pause(100)
            counter++
        }

    }

    function run() {
        basic.clearScreen()
        led.plot(2, 2);
        basic.pause(300)
        led.plot(1, 1)
        led.plot(3, 1);
        led.plot(1, 3);
        led.plot(3, 3);
        basic.pause(300)
        basic.clearScreen();
        led.plot(2, 2);
        led.plot(0, 0);
        led.plot(4, 4);
        led.plot(0, 4);
        led.plot(4, 0);
        basic.pause(300)
        basic.clearScreen();
    }
    threes()
    run()
    run()
    run()
}
input.onGesture(Gesture.TiltLeft, function(){

lastss()
})
})
