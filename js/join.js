
// משתנה שאומר לי באיזה טופס מספר אנחנו נמצאים כך גם שמות ה id
let numOfForm = 1

// משתנה עזר
let flag = true

// בנית מערך של מבקרים באתר
let visitors = [
    {firstName:"a" , lastName:"b", tel:"c" , id:"d", DateOfBirth:"e", yearOfStartDate:"f"}
]

// גודל מערך של המבקרים באתר
let size = 0

// אוביקט של מכוניות
let cars = {
    1111:"סיטרואן ברלינגו COMFORT PLUS, 2019",
    2222:"קיה פורטה LX, 2015",
    3333:"ב.מ.וו X3 XDRIVE20I EXECUTIVE, 2019",
    4444:"מאזדה 3 ACTIVE, 2014"
}

// אוביקט של תמונות של מכוניות
let imgCars = {
    1111:"/img/סיטרואן ברלינגו.jpg",
    2222:"/img/קיה פורטה.jpg",
    3333:"/img/ב.מ.וו.jpg",
    4444:"/img/מאזדה 3.jpg"
}

// תאריך נוכחי
const myDate = new Date();

// שנה של תאריך לידה
let sy

// מערך של שמות החודשים
const month = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]

// פונקציה לחיפוס שם החודש הבא
const myNextMonth = () => {
    let m = myDate.getMonth()
    if(m == 1)
        m = -1
    return month[m+1]
}

// פונקציה שמופעלת ע"י לחיצה על הלאה בטופס
// פונקציה זו בודקת שהערכים שהוכנסו אכן מתאימים ואפשר להמשיך הלאה
const mySuggestin = (event) => {
    event.preventDefault()
    flag = true
    if(event.target.id == 1)
    {
        for (let i = 0; i < 4; i++) {
            temp = myEror(event.target[i], event.target[i].name)
            if(temp == false)
                flag = false
        }
        if(flag == false)
            return
        visitors.push({firstName:event.target[0].value, lastName:event.target[1].value, tel:event.target[2].value, id:event.target[3].value})
        size = size + 1
        let nameMonth = document.getElementById('nameMonth')
        nameMonth.value = "1 " + myNextMonth();
    }
    if(event.target.id == 2)
    {
        
        if(myEror(event.target[2], event.target[2].name) == false)
            return
    }
    if(event.target.id == 3)
    {
        
        if(myEror(event.target[0], event.target[0].name) == false)
            return
        debugger
        let mySelect = document.getElementById('select')
        let op = document.createElement('option')
        op.hidden = true
        mySelect.appendChild(op)
        for (let i = 1; i < 7; i++) {
            debugger
            let op = document.createElement('option')
            op.innerText = i + "שנים"
            mySelect.appendChild(op)
        }
    }
    if(event.target.id == 4)
    {
        for (let i = 0; i < 2; i++) {
            temp = myEror(event.target[i], event.target[i].name)
            if(temp == false)
                flag = false
        }
        if(flag == false)
            return
        visitors[size].DateOfBirth = event.target[0].value
        visitors[size].yearOfStartDate = event.target[1].value
    }
    if(event.target.id == 5)
    {
        if(myEror(event.target[0], event.target[0].name) == false)
            return
    }
    let myForm = document.getElementById(event.target.id).style.display = 'none'
    numOfForm = numOfForm + 1
    let nextForm = document.getElementById(numOfForm).style.display = 'block'
}

// פונקציה שמיועדת ללחיצה על כפתור החזרה
const myPrevious = () => {
    if(numOfForm != 1)
    {
        let myForm = document.getElementById(numOfForm)
        myForm.style.display = 'none'
        numOfForm = numOfForm - 1
        let myFormP = document.getElementById(numOfForm)
        myFormP.style.display = 'block'    
    }
    else
        window.close()
}

// פונקציה שמסמנת שהקלט לא טוב 
const myEror = (e, id) => {
    debugger
    let element = document.getElementById(id)

    // בדיקת תקינות ל: שם פרטי, שם משפחה
    if(e.type == "text")
    {
        if(e.value.length < 2)
        {
            element.style.display = "block"
            element.style.color = "red"
            return false
        }
        else
            element.style.display = "none" 
    }
    // בדיקת תקינות לטלפון
    else if(e.type == "tel")
    {
        if(e.value.length < 8)
        {
            element.style.display = "block"
            element.style.color = "red"
            return false
        }
        else
            element.style.display = "none" 
    }
    // בדיקת תקינות לתאריך 
    else if(e.type == "date" && e.name != 'date2')
    {
        if(e.value == "")
        {
            element.style.display = "block"
            element.style.color = "red"
            return false
        }
        else
            element.style.display = "none" 
    }
    // בדיקת תקינות לתאריך לידה
    else if(e.name == "date2")
    {
        sy = e.valueAsDate.getFullYear()
        if(sy > myDate.getFullYear() - 16)
        {
            element.style.display = "block"
            element.style.color = "red"
            return false
        }
        else
            element.style.display = "none" 
    }
    // בדיקת תקינות למספר רכב
    else if(e.type == "number" && id != 'year')
    {
        flag = false
        Object.keys(cars).forEach(element1 => {
            if(element1 == e.value)
                flag = true
        })
        element.style.display = "block"
        if(flag != true)
        {
            element.style.color = "red"
            element.innerText = "לא מצאנו את הרכב" 
            return false
        }
        else
        {
            element.style.color = "white"
            element.innerText = "על פי הנתונים שבידינו רכבך הוא: \n" + cars[e.value]
        }       
    }
    // בדיקת תקינות למספר שנה של תחילת רשיון
    else
    {
        if(e.value.length != 4 || e.value-16 < sy)
        {
            element.style.display = "block"
            element.style.color = "red"
            return false
        }
        else
            element.style.display = "none" 
    }
}

// פונקציה למילוי תאריך בשדה קלט
const fillDate = (n) => {
    debugger
    let myDate1 = document.getElementById('myStartDate')
    if(n == 0)
        myDate1.value = myDate
    else
    {
        let y = 0, m = 1;
        if(myDate.getMonth() == 12)
        {
            y = 1
            m = -11
        }
        myDate1.value = new Date(myDate.getFullYear() + y, myDate.getMonth() + m, 01).toLocaleDateString();
    }
}

