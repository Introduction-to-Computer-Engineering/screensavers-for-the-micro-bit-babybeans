input.onButtonPressed(Button.B, function () { //event that starts awake mode
    basic.clearScreen() //erases display from screen
    ss.fromCountdown = 0; //stops  the countdown so the program doesn't time out 
    ss.bPressed = 1;//stops the display of screensavers
})

input.onButtonPressed(Button.A, function () { /*after button A is pressed  for 2 seconds and 
    button b is pressed, resets so screensavers can be run*/
    ss.reset(); //sets condition so that screensaver can run
})


function log() { //to help with debugging by printing to console
    console.log("bPress=" + ss.bPressed); //prints value of bPressed
    console.log("fromCountdown=" + ss.fromCountdown);  //prints value of fromCountdown
    console.log("shake=" + ss.shake);//prints value of shake
    console.log("tilt=" + ss.tilt);//prints value of  tilt
    console.log("ab=" + ss.ab);//prints value of ab
    console.log("logoUp=" + ss.logoup);//prints value of logoUp
    console.log("logoDown=" + ss.logodown); //prints value of logodown
}

let r : number = 0;
let y : number = 0;//sets y axis of gradient waves
let x : number = 0; //sets x-axis of gradient waves
class ScreenSaver {
    
    constructor() { }

 bPressed = 0; //value is 0 if not running, and 1 if correspodning event occured
 shake = 0;//value is 0 if not running, and 1 if correspodning event occured
 tilt = 0;//value is 0 if not running, and 1 if correspodning event occured
 ab = 0;//value is 0 if not running, and 1 if correspodning event occured
    logoDown = 0;//value is 0 if not running, and 1 if correspodning event occured
    logoUp = 0;//value is 0 if not running, and 1 if correspodning event occured
    timeout = 15;
    fromCountdown = 0;
   

    stop() {
        this.bPressed = 1;

        while (this.bPressed == 1) {

            basic.clearScreen();
            led.setBrightness(255);
            if (this.fromCountdown == 0) {
                basic.showString("  I'm not sleeping");
            }
            basic.pause(1000);
            //console.log("In the stop loop")
            //log();
            //pulse();
        }
        this.fromCountdown = 0;
    }

    reset() {
        this.bPressed = 0;
        this.fromCountdown = 0;
    }

    countDown() {
        control.inBackground(function () {
            let counter : number = 0;
            while (counter <= this.timeout) {
                if (ss.bPressed != 1) {
                    basic.pause(1000)
                }
                counter++;
                console.log("In counter loop")
            }
            this.fromCountdown = 1;
            ss.stop();
            this.bPressed = 0;
            this.fromCountdown = 0;
            return;

        });
    }

    setScreenSaver(name: string) { //allows screensavers to interrupt each other

        ss.shake = 0;
        ss.logodown = 0;
        ss.logoup = 0;
        ss.tilt = 0;
        ss.ab = 0;

        if (name == "shake") { //checks if event shake has happened
            ss.shake = 1;
        }
        if (name == "logoDown") { //checks if event logodown has happened
            ss.logodown = 1;
        }
        if (name == "logoUp") {//checks if event logoup has happened
            ss.logoup = 1;
        }
        if (name == "tilt") {//checks if event tilt happened
            ss.tilt = 1;
        }
        if (name == "ab") {//checks if  event ab has happened
            ss.ab = 1;
        }
        ss.bPressed = 0; //resets so that wake mode does not start
        log(); //prints to console to help debug
    }

}
let ss = new ScreenSaver(); //initialises ss
let b : number = 255 // brightness variable
let u : number = 2 //sets x-axis for rotating lines
let l : number = 2  //sets y axis for rotating lines
let w : number = -2 //sets x-axis for moving waves
let f : number = 200 //sets pause length for moving waves
while (!(input.buttonIsPressed(Button.A))) {//checks if a is pressed
    basic.pause(2000) //waits for 2 seconds
    if (input.buttonIsPressed(Button.A)) {//checks again if a is pressed

        input.onGesture(Gesture.Shake, function () {
            console.log("Shake Event: running gradientwave");//prints to console
            ss.setScreenSaver("shake");//stops programs that might be running
            ss.fromCountdown = 0;//resets countdown
            ss.countDown();//starts timer out 


            basic.clearScreen();

            //gradient wave
            function gradientwave() {

                function lightWaveBase() {

                    let d : number = 50
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }
                    //if (ss.shake != 1) { basic.clearScreen(); return }

                    for (let k = 0; k <= 255; k += 25.5) {//runs one line that fades in and out
                        b = k

                        led.setBrightness(b); //sets brightness to a uniform amount
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
                    for (let m = 255; m >= 0; m -= 25.5) {
                        b = m;
                        led.plotBrightness(x, y, b);//runs one line that fades in and out
                        led.plotBrightness(x + 1, y, b);
                        led.plotBrightness(x + 2, y, b);
                        led.plotBrightness(x + 3, y, b);
                        led.plotBrightness(x + 4, y, b);
                        led.plotBrightness(x - 1, y, b);
                        led.plotBrightness(x - 2, y, b);
                        led.plotBrightness(x - 3, y, b);
                        led.plotBrightness(x - 4, y, b);
                        basic.pause(100);

                        led.plotBrightness(x, y + 1, b + d);//moves another line down one and fades it in and out
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


                function lightWave() { //loop that changes the lines

                    for (let i = 0; i <= 4; i++) {
                        x = 2;
                        y = i;
                        lightWaveBase();
                    }
                }
                while (ss.bPressed != 1) {//sets timer
                    if (ss.shake == 0) { basic.clearScreen(); return; }/*makes sure that no  other 
                    event has happened after this one*/
                    lightWave();
                }
            }
            gradientwave();
        })
        // rotatinglines
        input.onButtonPressed(Button.AB, function () {
            console.log("Button AB Event: running rotatinglines");//prints to console
            ss.setScreenSaver("ab")//tells program that this screensaver is running
            ss.fromCountdown = 0//resets counter
            ss.countDown();//starts counter running


            basic.clearScreen()
            function rotatinglines() {
                function flatline() { //plots a flatline based around whatever coordinates are entered.
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
                function vertline() { /*plots a vertical line that is centered around whatever coordinates are entered*/
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

                function horizline1() {/*plots a horizontal 
                    line (top left to bottom right) centered around the given coordinates*/
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

                function horizline2() {/*plots a horizontal line 
                    (top right to bottom left) that is centered around given coordinates*/
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
                while (ss.bPressed != 1) {//checks if button b was pressed.
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }//resets program if button b is pressed
                    if (ss.ab == 0) { basic.clearScreen(); return; }//checks if another screensaver has started
                    u = Math.randomRange(0, 4)//sets random x coordinate
                    l = Math.randomRange(0, 4);//sets random y coordinate
                    r = 255; //sets brightness at full
                    flatline()
                    horizline1()
                    vertline()
                    horizline2()
                    flatline()
                    horizline1()
                    vertline()

                }
                basic.clearScreen();//clears screen
            }
            rotatinglines();
        })
        // randomdots
        input.onGesture(Gesture.LogoUp, function () {
            console.log("LogoUp Event: running randomdots");//prints message to console
            ss.fromCountdown = 0;//sets countdown = 0
            ss.countDown();//calls countdown
            ss.setScreenSaver("logoUp")//prints name of screensaver to console

            basic.clearScreen()
            function randomdots() {
                while (ss.bPressed != 1) {//checks if button b was pressed
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }//resets program if button b was pressed
                    if (ss.logoUp != 1) { basic.clearScreen(); return; }// checks if another program has started
                    let z : number = Math.randomRange(0, 4);//sets random x coordinate
                    let a : number = Math.randomRange(0, 4);//sets random y coordinate
                    for (let n = 0; n <= 255; n += 25.5) {//slowly show a random dot
                        led.plotBrightness(a, z, n)
                        basic.pause(100)
                    }

                    for (let o = 255; o >= 0; o -= 25.5) {//slowly fades random dot out
                        led.plotBrightness(a, z, o);
                        basic.pause(100);
                    }
                }
            }
            randomdots();
        })
        // moving waves
        input.onGesture(Gesture.LogoDown, function () {
            console.log("LogoDown Event: running movingwaves");//prints message to console
            ss.setScreenSaver("logoDown")//prints name of screensaver to console
            ss.fromCountdown = 0;//resets counter
            ss.countDown();//calls timer function

            basic.clearScreen()

            function movingwaves() {
                function ledstream1() {//plots one vertical line with varying x axis point
                    basic.clearScreen();
                    led.plot(w + 2, 0);
                    led.plot(w + 1, 1);
                    led.plot(w + 2, 2);
                    led.plot(w + 3, 3);
                    led.plot(w + 2, 4);
                    basic.pause(f)

                }
                function ledstream2() {//plots one straight vertical line 
                    basic.clearScreen()
                    led.plot(w + 2, 0)
                    led.plot(w + 2, 1)
                    led.plot(w + 2, 2)
                    led.plot(w + 2, 3)
                    led.plot(w + 2, 4)
                    basic.pause(f);
                }

                function ledstream3() {//plots one vertical line with opposing xaxis point from ledstream1
                    basic.clearScreen();
                    led.plot(w + 2, 0);
                    led.plot(w + 3, 1);
                    led.plot(w + 2, 2);
                    led.plot(w + 1, 3);
                    led.plot(w + 2, 4);
                    basic.pause(f);
                }

                function bigstream() {//moves the waving line slowly from left side of display to right
                    if (ss.bPressed == 1) { basic.clearScreen(); return; }//makes sure button b wasnt pressed
                    if (ss.logoDown != 1) { basic.clearScreen(); return; }//makes sure that no other screensaver has been pressed
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
                while (ss.bPressed != 1) {//checks to make sure button b was not pressed.
                    if (ss.logoDown == 0) { basic.clearScreen(); return; }//checks to see if other events have happened
                    bigstream();
                }
            }
            movingwaves();

        })
        input.onGesture(Gesture.TiltLeft, function () {
            console.log("TiltLeft Event: running starburst");//prints to console
            ss.setScreenSaver("tilt")//prints to console
            ss.fromCountdown = 0;//resets counter
            ss.countDown();//calls timer function


            basic.clearScreen()
            function bigrun() {
                function run() {
                    if (ss.bPressed == 1) { basic.clearScreen(); return; } //makes sure that button b is not pressed.
                    basic.clearScreen()//plots starburst screensaver
                    led.plot(2, 2);     //plots inside dot
                    basic.pause(300);
                    led.plot(1, 1); //plots first inner ring of starburst
                    led.plot(3, 1);
                    led.plot(1, 3);
                    led.plot(3, 3);
                    basic.pause(300);
                    basic.clearScreen();
                    led.plot(2, 2); //plots outer ring of starburst
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

                    basic.pause(300) //plots second inner ring of starburst
                    basic.clearScreen()
                    led.plot(2, 2);
                    led.plot(2, 0);
                    led.plot(4, 2);
                    led.plot(2, 4);
                    led.plot(0, 2);
                    basic.pause(300)
                    basic.clearScreen()
                }
                while (ss.bPressed != 1) { //checks to make sure button b wasnt pressed.
                    if (ss.tilt == 0) { basic.clearScreen(); return; }//resets if b was pressed
                    run()

                }
            }
            bigrun();
        })
    }
}
