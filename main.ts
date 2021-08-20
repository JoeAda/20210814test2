radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    } else {
        motor.motorStopAll()
    }
})
input.onButtonPressed(Button.A, function () {
    if (Motor_A_Status) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        Motor_A_Status = 0
    } else {
        motor.motorStop(motor.Motors.M1)
        Motor_A_Status = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Motor_C_Status) {
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 100)
        Motor_C_Status = 0
    } else {
        motor.motorStop(motor.Motors.M1)
        Motor_C_Status = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Motor_B_Status) {
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
        Motor_B_Status = 0
    } else {
        motor.motorStop(motor.Motors.M2)
        Motor_B_Status = 1
    }
})
let Motor_C_Status = 0
let Motor_B_Status = 0
let Motor_A_Status = 0
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
radio.setGroup(255)
Motor_A_Status = 1
Motor_B_Status = 1
Motor_C_Status = 1
basic.forever(function () {
	
})
