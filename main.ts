function 刷新顯示 () {
    if (當前數字 == 0) {
        _0()
    } else if (當前數字 == 1) {
        _1()
    } else if (當前數字 == 2) {
        _2()
    } else if (當前數字 == 3) {
        _3()
    } else if (當前數字 == 4) {
        _4()
    } else if (當前數字 == 5) {
        _5()
    } else if (當前數字 == 6) {
        _6()
    } else if (當前數字 == 7) {
        _7()
    } else if (當前數字 == 8) {
        _8()
    } else {
        _9()
    }
}
function E () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 0)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 75)
    nexusbit.servoTo(6, 0)
    nexusbit.servoTo(7, 75)
}
function _7 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 0)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 0)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 0)
}
function _2 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 0)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 75)
    nexusbit.servoTo(6, 0)
    nexusbit.servoTo(7, 75)
}
function _6 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 0)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 75)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 75)
}
input.onButtonPressed(Button.A, function () {
    當前數字 = (當前數字 + 1) % 10
    刷新顯示()
})
function _9 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 0)
}
function _5 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 0)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 75)
}
function _3 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 0)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 75)
}
function _8 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 75)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 75)
}
input.onButtonPressed(Button.B, function () {
    if (步驟 == 1) {
        if (當前數字 != 3) {
            答對旗標 = 0
        }
        步驟 = 2
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    } else if (步驟 == 2) {
        if (當前數字 != 7) {
            答對旗標 = 0
        }
        步驟 = 3
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    } else if (步驟 == 3) {
        if (當前數字 != 1) {
            答對旗標 = 0
        }
        if (答對旗標 == 1) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.play()
            for (let index = 0; index < 2; index++) {
                _8()
                basic.pause(300)
                nexusbit.servoTo(1, 0)
                nexusbit.servoTo(2, 0)
                nexusbit.servoTo(3, 0)
                nexusbit.servoTo(4, 0)
                nexusbit.servoTo(5, 0)
                nexusbit.servoTo(6, 0)
                nexusbit.servoTo(7, 0)
                basic.pause(300)
            }
        } else {
            basic.showIcon(IconNames.No)
            E()
            music.playTone(131, music.beat(BeatFraction.Whole))
            basic.pause(1500)
        }
        步驟 = 1
        答對旗標 = 1
        當前數字 = 0
        basic.showIcon(IconNames.Happy)
        刷新顯示()
    }
})
function _0 () {
    nexusbit.servoTo(1, 75)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 0)
    nexusbit.servoTo(5, 75)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 75)
}
function _4 () {
    nexusbit.servoTo(1, 0)
    nexusbit.servoTo(2, 75)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 75)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 0)
}
function _1 () {
    nexusbit.servoTo(1, 0)
    nexusbit.servoTo(2, 0)
    nexusbit.servoTo(3, 75)
    nexusbit.servoTo(4, 0)
    nexusbit.servoTo(5, 0)
    nexusbit.servoTo(6, 75)
    nexusbit.servoTo(7, 0)
}
let 當前數字 = 0
let 答對旗標 = 0
let 步驟 = 0
步驟 = 1
答對旗標 = 1
// 初始啟動
當前數字 = 0
basic.showIcon(IconNames.Happy)
_0()
