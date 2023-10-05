input.onButtonPressed(Button.A, function () {
    if (h == 0) {
        h = 1
        music.play(music.stringPlayable("D - E - F E G A ", tempo), music.PlaybackMode.LoopingInBackground)
        basic.pause(500)
    } else {
        h = 0
        music.stopAllSounds()
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (hlas == 128) {
        hlas = 256
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 49, 255, 1460, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
})
let h = 0
let tempo = 0
let hlas = 0
hlas = 128
led.plot(2, 4)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(32)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
basic.pause(100)
led.plot(2, 3)
tempo = 170
basic.pause(100)
led.plot(2, 2)
music.setVolume(128)
basic.pause(100)
led.plot(2, 1)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
loops.everyInterval(randint(100, 750), function () {
    if (9 >= randint(0, 10)) {
        led.plot(2, 0)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        led.unplot(2, 0)
    }
})
loops.everyInterval(randint(75, 150), function () {
    if (8 >= randint(0, 10)) {
        led.plot(4, 0)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(75)
        led.unplot(4, 0)
    }
})
loops.everyInterval(100, function () {
    if (1 >= randint(0, 10)) {
        led.plot(3, 0)
        basic.pause(100)
        led.unplot(3, 0)
        music.setVolume(hlas + 2)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.setVolume(hlas)
    }
})
