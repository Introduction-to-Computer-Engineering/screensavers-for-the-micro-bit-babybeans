
class ScreenSaver {
    screenSaver: string;
    constructor(message: string) {
        this.screenSaver = message;
    }

    bPressed = 0;
    timeout = 15;

    message() {
        return "Run " + this.screenSaver;
    }

    stop() {
        this.bPressed = 1;
        while (this.bPressed == 1) {
            basic.clearScreen();
            led.setBrightness(255);
            basic.showString("  I'm not sleeping");
        }
    }

    reset() {
        this.bPressed = 0;
    }

    countDown() {
        control.inBackground(function () {
            let counter = 0;
            while (counter <= this.timeout) {
                basic.pause(1000)
                counter++;
            }
            control.reset();
            //this.reset();
        });
    }

}


let ss = new ScreenSaver("Stop it");


input.onButtonPressed(Button.B, function () {
    led.plotAll()
    basic.clearScreen()
    ss.stop();
})

let x = 0;
let y = 0;
let b = 255;
let u = 2;
let l = 2;
let r = 0;
let w = -2;
let f = 200;

input.onButtonPressed(Button.A, function () {
    ss.reset();
})
while (!(input.buttonIsPressed(Button.A))) {

    basic.pause(2000);
    if (input.buttonIsPressed(Button.A)) {


        input.onGesture(Gesture.Shake, function () {
            let program1 = new ScreenSaver("gradientwave");
            ss.countDown();
            console.log(program1.message());
            basic.clearScreen();

            //gradient wave
            function gradientwave() {

                function lightWaveBase() {

                    let d = 50
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
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
                while (ss.bPressed != 1) {
                    lightWave();
                }
            }
            //led.setBrightness(255)
            gradientwave();
        })

        //rotatinglines

        input.onButtonPressed(Button.AB, function () {
            let program2 = new ScreenSaver("rotatinglines");
            ss.countDown();
            console.log(program2.message());
            basic.clearScreen()
            function rotatinglines() {
                function flatline() {
                    basic.clearScreen();
                    led.setBrightness(r);
                    led.plot(u, l);
                    led.plot(u - 1, l)
                    led.plot(u - 2, l)
                    led.plot(u - 3, l)
                    led.plot(u - 4, l)
                    led.plot(u - 5, l)


                    led.plot(u + 1, l)
                    led.plot(u + 2, l)
                    led.plot(u + 3, l)
                    led.plot(u + 4, l)
                    led.plot(u + 5, l)
                    basic.pause(500);

                }
                function vertline() {
                    basic.clearScreen();
                    led.setBrightness(r);
                    led.plot(u, l);
                    led.plot(u, l - 1)
                    led.plot(u, l - 2)
                    led.plot(u, l - 3)
                    led.plot(u, l - 4)
                    led.plot(u, l - 5)

                    led.plot(u, l + 1)
                    led.plot(u, l + 2)
                    led.plot(u, l + 3)
                    led.plot(u, l + 4)
                    led.plot(u, l + 5)
                    basic.pause(500);

                }

                function horizline1() {
                    basic.clearScreen();
                    led.plot(u, l)
                    led.plot(u + 1, l + 1)
                    led.plot(u + 2, l + 2);
                    led.plot(u + 3, l + 3);
                    led.plot(u + 4, l + 4);

                    led.plot(u - 1, l - 1)
                    led.plot(u - 2, l - 2)
                    led.plot(u - 3, l - 3)
                    led.plot(u - 4, l - 4);
                    basic.pause(500)
                }

                function horizline2() {
                    basic.clearScreen();
                    led.plot(u, l)
                    led.plot(u + 1, l - 1);
                    led.plot(u + 2, l - 2);
                    led.plot(u + 3, l - 3);
                    led.plot(u + 4, l - 4)

                    led.plot(u - 1, l + 1)
                    led.plot(u - 2, l + 2)
                    led.plot(u - 3, l + 3)
                    led.plot(u - 4, l + 4)
                    basic.pause(500);

                }
                while (ss.bPressed != 1) {
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
                    u = Math.randomRange(0, 4)
                    l = Math.randomRange(0, 4);
                    r = 255;
                    flatline()
                    horizline1()
                    vertline()
                    horizline2()
                    flatline()
                    horizline1()
                    vertline()

                }
                basic.clearScreen();
            }
            rotatinglines();
        })

        //randomdots
        input.onGesture(Gesture.LogoUp, function () {
            let program3 = new ScreenSaver("randomdots");
            ss.countDown();
            console.log(program3.message());
            basic.clearScreen()
            function randomdots() {
                while (ss.bPressed != 1) {
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
                    let y = Math.randomRange(0, 4);
                    let x = Math.randomRange(0, 4);
                    for (let k = 0; k <= 255; k += 25.5) {
                        led.plotBrightness(x, y, k)
                        basic.pause(100)
                    }

                    for (let k = 255; k >= 0; k -= 25.5) {
                        led.plotBrightness(x, y, k);
                        basic.pause(100);
                    }
                }
            }
            randomdots();
        })
        //moving waves

        input.onGesture(Gesture.LogoDown, function () {
            let program4 = new ScreenSaver("movingwaves")
            ss.countDown();
            console.log(program4.message());
            basic.clearScreen()

            function movingwaves() {
                function ledstream1() {
                    basic.clearScreen();
                    led.plot(w + 2, 0);
                    led.plot(w + 1, 1);
                    led.plot(w + 2, 2);
                    led.plot(w + 3, 3);
                    led.plot(w + 2, 4);
                    basic.pause(f)

                }
                function ledstream2() {
                    basic.clearScreen()
                    led.plot(w + 2, 0)
                    led.plot(w + 2, 1)
                    led.plot(w + 2, 2)
                    led.plot(w + 2, 3)
                    led.plot(w + 2, 4)
                    basic.pause(f);
                }

                function ledstream3() {
                    basic.clearScreen();
                    led.plot(w + 2, 0);
                    led.plot(w + 3, 1);
                    led.plot(w + 2, 2);
                    led.plot(w + 1, 3);
                    led.plot(w + 2, 4);
                    basic.pause(f);
                }

                function bigstream() {
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    ledstream1()
                    ledstream2()
                    w++;
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w++
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w++
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w++
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w--
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w--
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w--
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    w--
                    ledstream1()
                    ledstream2()
                    ledstream3()
                    ledstream2()
                    basic.clearScreen();

                }
                while (ss.bPressed != 1) {
                    bigstream();
                }
            }
            movingwaves();

        })

        input.onGesture(Gesture.TiltLeft, function () {
            let program5 = new ScreenSaver("starburst");
            ss.countDown();
            console.log(program5.message());
            basic.clearScreen()
            function bigrun() {
                function run() {
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
                    basic.clearScreen()
                    led.plot(2, 2);
                    basic.pause(300);
                    led.plot(1, 1);
                    led.plot(3, 1);
                    led.plot(1, 3);
                    led.plot(3, 3);
                    basic.pause(300);
                    basic.clearScreen();
                    led.plot(2, 2);
                    led.plot(0, 0);
                    led.plot(0, 4);
                    led.plot(4, 0);
                    led.plot(4, 4);
                    basic.pause(300)
                    basic.clearScreen()

                    led.plot(2, 2);
                    led.plot(2, 1);
                    led.plot(2, 3);
                    led.plot(1, 2);
                    led.plot(3, 2);

                    basic.pause(300)
                    basic.clearScreen()
                    led.plot(2, 2);
                    led.plot(2, 0);
                    led.plot(4, 2);
                    led.plot(2, 4);
                    led.plot(0, 2);
                    basic.pause(300)
                    basic.clearScreen()
                }
                while (ss.bPressed != 1) {
                    run()

                }
            }
            bigrun();
        })
    }
}