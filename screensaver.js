
class ScreenSaver {
    screenSaver: string;
    constructor(message: string) {
        this.screenSaver = message;



    }
    ss() {
        return "Run " + this.screenSaver;
    }
}

input.onButtonPressed(Button.B, function () {

    led.plotAll();
    basic.clearScreen();
    basic.showString("I'm not sleeping");

})


let x = 0;
let y = 0;
let b = 255;
let u = 2;
let l = 2;
let r = 0;
let w = -2;
let f = 200;


while (!(input.buttonIsPressed(Button.A))) {
    basic.pause(2000);
    if (input.buttonIsPressed(Button.A)) {

        input.onGesture(Gesture.Shake, function () {
            let program1 = new ScreenSaver("gradientwave");
            console.log(program1.ss());
            basic.clearScreen();

            //gradient wave
            function gradientwave() {


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
            }
            gradientwave();
        })

        //rotatinglines

        input.onButtonPressed(Button.AB, function () {
            let program2 = new ScreenSaver("rotatinglines");
            console.log(program2.ss());
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
                let timer = 0;
                while (timer != 5) {
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
                    timer++;

                }
                basic.clearScreen();

            }
            rotatinglines();
        })

        //randomdots
        input.onGesture(Gesture.LogoUp, function () {
            let program3 = new ScreenSaver("randomdots");
            console.log(program3.ss());
            basic.clearScreen()
            let timer = 0
            function randomdots() {
                while (timer != 20) {
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
                    timer++;
                }
            }
            randomdots();
        })
        //moving waves

        input.onGesture(Gesture.LogoDown, function () {
            let program4 = new ScreenSaver("movingwaves")
            console.log(program4.ss());
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
                bigstream();
                bigstream();
                bigstream();

            }
            movingwaves();

        })

        input.onGesture(Gesture.TiltLeft, function () {
            let program5 = new ScreenSaver("starburst");
            console.log(program5.ss());
            basic.clearScreen()
            function bigrun() {
                function run() {
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
                function runrun() {
                    run()
                    run()
                    run()
                    run()
                    run()
                    run()
                    run()
                    run()
                    run()
                }
                runrun();
            }

            bigrun();
        })

    }
}

