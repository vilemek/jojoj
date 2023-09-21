def on_gesture_shake():
    basic.show_arrow(ArrowNames.NORTH)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
