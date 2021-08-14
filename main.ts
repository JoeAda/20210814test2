radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    } else {
        motor.motorStopAll()
    }
})
input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.motorStopAll()
})
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
radio.setGroup(255)
basic.forever(function () {
	
})
