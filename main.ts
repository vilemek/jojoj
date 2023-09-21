input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("D - E - F E G A ", tempo), music.PlaybackMode.LoopingInBackground)
    basic.pause(500)
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 49, 45, 1460, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
let tempo = 0
led.plot(2, 4)
music.setBuiltInSpeakerEnabled(true)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
basic.pause(100)
led.plot(2, 3)
tempo = 120
basic.pause(100)
led.plot(2, 2)
music.setVolume(127)
basic.pause(100)
led.plot(2, 1)
loops.everyInterval(100, function () {
    if (8 >= randint(0, 10)) {
        led.plot(4, 0)
        basic.pause(100)
        if (8 >= randint(0, 10)) {
            led.unplot(4, 0)
        }
    }
})
