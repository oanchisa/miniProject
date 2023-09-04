(function(){
    var hourHand = document.querySelector('.hour-hand');
    var minuteHand = document.querySelector('.minute-hand');
    var secondHand = document.querySelector('.second-hand');
    
    function setTime(){
        var now = new Date();/*สร้างเวลา*/
    
        var hours = now.getHours();
        var hoursDegrees = Math.round(((hours/12)*360)+90); /* คำนวณองศาเข็ม ปัดเศษ*/
    
        var minutes = now.getMinutes();
        var minutesDegrees = Math.round(((minutes/60)*360)+90);
    
        var seconds = now.getSeconds();
        var secondsDegrees = Math.round(((seconds/60)*360)+90);
    
        hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
        minuteHand.style.transform=`rotate(${minutesDegrees}deg)`;
        secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    
        console.log(hours+":" + minutes + ":" + seconds);
    }
    
    var time = document.querySelector('#time');
    
    function setDate(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
    
        if(hours > 12){
            day_night = "PM";
            hours = hours - 12;
        }
        if(minutes < 1){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        time.textContent = hours +":" + minutes + ":" + seconds + " " + day_night;
    
    }
        setInterval(setDate,1000);/*เรียกใช้function setDate เพื่อตั้งค่าให้อัพเดทอัตโนมัติทุกๆ1sec*/ 
        setDate();
        setInterval(setTime,1000);/*เรียกใช้function setTime เพื่อตั้งค่าให้อัพเดทอัตโนมัติทุกๆ1sec*/
        setTime();
    }());
    