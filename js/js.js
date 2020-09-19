function showinbox1(){
    document.getElementById('screen1').innerHTML = nokia.xemInbox();
}
function showtindagui1(){
    document.getElementById('screen1').innerHTML = nokia.xemTinDaGui();
}
function showinbox2(){
    document.getElementById('screen2').innerHTML = iphone.xemInbox();
}
function showtindagui2(){
    document.getElementById('screen2').innerHTML = iphone.xemTinDaGui();
}
function Mobile (pin,status){
    this.pin = pin;
    this.status = status;
    this.tinNhanDangViet = '';
    this.tinNhanInbox = [];
    this.tinNhanDaGui = [];

    this.getStatus = function (){
        return this.status;
    }
    this.onOff = function (){
        if(this.status){this.status = false}
        else{this.status = true}
    }
    this.chargePin = function (){
        if(this.pin < 100){this.pin++}
        else{alert('pin da day')}
    }
    this.soanTinNhan = function (message){
        if(this.status == false || this.pin < 1){
            alert('dienthoai dang tat hoac hetpin')
        }else {
            this.tinNhanDangViet = message;
            this.pin--;
        }
    }
    this.nhanTinNhan = function (message){
        if(this.status == false || this.pin < 1){
            alert('dienthoai dang tat hoac hetpin')
        }else {
            this.tinNhanInbox.push(message);
            this.pin--;
        }
    }
    this.guitinnhan = function (mobile,message){
        if(this.status == false || this.pin < 1){
            alert('dienthoai dang tat hoac hetpin')
        }else {
            this.soanTinNhan(message);
            this.tinNhanDeGuiDi = this.tinNhanDangViet;
            this.tinNhanDaGui.push(this.tinNhanDeGuiDi)
            mobile.nhanTinNhan(this.tinNhanDeGuiDi);
            this.pin--;
        }
    }
    this.xemInbox = function (){
        if(this.status == false || this.pin < 1){
            alert('dienthoai dang tat hoac hetpin')
        }else {
            return this.tinNhanInbox;
            this.pin--;
        }
    }
    this.xemTinDaGui = function (){
        if(this.status == false || this.pin < 1){
            alert('dienthoai dang tat hoac hetpin')
        }else {
            return this.tinNhanDaGui;
            this.pin--;
        }
    }
}
let nokia = new Mobile(100,true);
let iphone = new Mobile(100,true);
function check1() {
    if (nokia.getStatus()) {
        document.getElementById('nokia').innerText = 'nokia is ON'
    } else {
        document.getElementById('nokia').innerText = 'nokia is OFF'
    }
}
function check2() {
    if (iphone.getStatus()) {
        document.getElementById('iphone').innerText = 'iphone is ON'
    } else {
        document.getElementById('iphone').innerText = 'iphone is OFF'
    }
}
check1();
check2();