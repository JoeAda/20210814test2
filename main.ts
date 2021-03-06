radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 0) {
        motor.motorStopAll()
        basic.showLeds(`
            . # # # #
            # . . # .
            . # . # .
            . . # # .
            # # . # .
            `)
    } else if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, MaxSpeed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, MaxSpeed)
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, MaxSpeed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, MaxSpeed)
        basic.showArrow(ArrowNames.South)
    } else if (receivedNumber == 3) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, MaxSpeed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, MaxSpeed)
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 4) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, MaxSpeed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, MaxSpeed)
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 10) {
        if (Motor_C_Status) {
            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, MaxSpeed)
            Motor_C_Status = 0
        } else {
            motor.motorStop(motor.Motors.M3)
            Motor_C_Status = 1
        }
    } else {
        motor.motorStopAll()
    }
})
input.onButtonPressed(Button.A, function () {
    if (Motor_A_Status) {
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, MaxSpeed)
        Motor_A_Status = 0
    } else {
        motor.motorStop(motor.Motors.M2)
        Motor_A_Status = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Motor_C_Status) {
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 70)
        Motor_C_Status = 0
    } else {
        motor.motorStop(motor.Motors.M3)
        Motor_C_Status = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Motor_B_Status) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, MaxSpeed)
        Motor_B_Status = 0
    } else {
        motor.motorStop(motor.Motors.M1)
        Motor_B_Status = 1
    }
})
let MaxSpeed = 0
let Motor_C_Status = 0
let Motor_B_Status = 0
let Motor_A_Status = 0
basic.showString("MT")
radio.setGroup(255)
Motor_A_Status = 1
Motor_B_Status = 1
Motor_C_Status = 1
MaxSpeed = 255
basic.forever(function () {
	
})
