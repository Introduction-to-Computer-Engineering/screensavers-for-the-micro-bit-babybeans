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
let x = 0;
let y = 0;
let b = 255;

function lightWave() {
    for (let i = 0; i <= 4; i++) {
        x = 2;
        y = i;
        lightWaveBase();
    }
}
lightWave();
