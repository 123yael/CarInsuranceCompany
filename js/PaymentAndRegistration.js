
let flag = true

// משתנה שאומר איזה מספר טופס אנו נמצאים
let number = 1

// פונקציה שמיועדת ללחיצה על כפתור החזרה
const myPrevious = () => {
    debugger
    if (number != 1) {
        document.getElementById(number).style.display = 'none'
        number = number - 1
        document.getElementById(number).style.display = 'block'
    }
    else
        window.close()
}

let user = {
    firstName: "",
    lastName: "",
    tz: "",
    pone: "",
    email: "",
    startDate: "",
    car: { numOfCar: "", sign: "" },
    dateOfBirth: "",
    yearOfLicenseIssue: "",
    garage: "",
    insuranceNumber: "",
    card: { nameOfCard: "", numOfCard: "", lastDate: "", codeCvv: "" }
}

// תאריך נוכחי
let dateNow = new Date();

// מערך של שמות החודשים
const month = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]

// פונקציה לחיפוס שם החודש הבא
const myNextMonth = () => {
    let dateNow = new Date()
    let m = dateNow.getMonth()
    return month[m + 1]
}

// אוביקט של מכוניות
let cars = {
    1111: ["סיטרואן ברלינגו COMFORT PLUS, 2019"],
    2222: ["קיה פורטה LX, 2015"],
    3333: ["ב.מ.וו X3 XDRIVE20I EXECUTIVE, 2019"],
    4444: ["מיצובישי ספייס סטאר SUPREME, 2021"]
}

let garage = [
    { id: "1", city: "בית שמש", name: "פנצרית צומת המהפך", address: "צומת שמשון ד.נ. שמשון" },
    { id: "2", city: "בית שמש", name: "מרכז שירות למשאיות בית שמש בעמ", address: "א.ת. הר טוב רח' המלאכה" },
    { id: "3", city: "בית שמש", name: "כאדר אביבית-מוסך מוסמך כדר אמנון", address: "א התעשיה" },
    { id: "4", city: "בית שמש", name: "שטרית יעקב - שטרית מוסך למכונאות", address: "אזור תעשיה" },
    { id: "5", city: "בית שמש", name: "מוסך צמרת בית שמש (2004)בעמ", address: "א. תעשיה רח' המסגר 1" },
    { id: "6", city: "בית שמש", name: "המדביק בית שמש בעמ", address: "א. תעשיה רח' הבנאי 1" },
    { id: "7", city: "ירושלים", name: "עמליה שרון - מוסך רוממה ירושלים", address: "ג. שאול מרכז ספיר 6" },
    { id: "8", city: "ירושלים", name: "ניר גד חברה לרכב בעמ", address: "תלפיות רח' הרכב 50" },
    { id: "9", city: "ירושלים", name: "מוסך יחזקאל ובניו (2000) בעמ", address: "תלפיות מעשה חושב 2" },
    { id: "10", city: "ירושלים", name: "שאול יוניסי חשמלאות רכב בעמ", address: "תלפ'בעלי מלאכה 11" },
    { id: "11", city: "ירושלים", name: "האחים נחמיה י.ג.ע.א.ן.בעמ", address: "תלפיות רח' צרת 7" },
    { id: "12", city: "בני ברק", name: "מוסך די.אנד.וי.מוטורס 2013 בעמ", address: "הירקון 37 א.ת" },
    { id: "13", city: "בני ברק", name: "מוסך צבאג יצחק בן אברהם צבאג", address: "זבוטינסקי 63" },
    { id: "14", city: "בני ברק", name: "אבי זרח ובניו בעמ", address: "מבצע קדש 51" },
    { id: "15", city: "בני ברק", name: "א. עמוס מזגנים לרכב בעמ", address: "הקישון 33" },
    { id: "16", city: "בני ברק", name: "מוסך האצטדיון ניסים בעמ", address: "ברוך הירש 17" },
    { id: "17", city: "רחובות", name: "חי צורי בעמ", address: "היצירה 14 א.תעשיה" },
    { id: "18", city: "רחובות", name: "ארגמן אוטו מאסטר", address: "משה יתום 9 רחובות" },
    { id: "19", city: "רחובות", name: "מוסך יש סגנון בעמ", address: "דרך יבנה" },
    { id: "20", city: "רחובות", name: "מוסך פריצל דוד", address: "הרצל 138" },
    { id: "21", city: "רחובות", name: "חיים ודרור מוסך הדרום 2018", address: "אמוראים 1" },
    { id: "22", city: "רחובות", name: "עזר ענבי - מוסך ענבי", address: "אפרים זקס 40" },
    { id: "23", city: "אשדוד", name: "דני סיילס - חשמל רכב האחים", address: "העבודה 17/1 ת.ד. 12247" },
    { id: "24", city: "אשדוד", name: "מוסך צמרת - רנו אשדוד בעמ", address: "א התעשיה הצפוני ת.ד. 861" },
    { id: "25", city: "אשדוד", name: "א.ע.א. בע מ רכב אטמור", address: "ההדרים 43" },
    { id: "26", city: "אשדוד", name: "חברת נמל אשדוד בעמ", address: "הנמל ת.ד. 9001" },
    { id: "27", city: "אשדוד", name: "חשמל גלים אשדוד (1996) בעמ", address: "פז גלים ת.ד. 12614" }
]

window.localStorage.setItem("garage", JSON.stringify(garage))

let startDateB
// פונקציה לבחירת תאריך תחילת ביטוח
const saveStartDate = (id) => {
    if (id == 'today') {
        let dateNow = new Date()
        startDateB = dateNow.toLocaleDateString()
        document.getElementById('today').style.backgroundColor = "#831164"
        document.getElementById('nextMonth1').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
    }
    if (id == 'nextMonth1') {
        let m = 1, y = 0;
        if (dateNow.getMonth() == 12) {
            m = -11
            y = 1
        }
        startDateB = new Date(dateNow.getFullYear() + y, dateNow.getMonth() + m, 01).toLocaleDateString()
        document.getElementById('nextMonth1').style.backgroundColor = "#831164"
        document.getElementById('today').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
    }
}

let numChoose
// פונקציה לשמירת הביטוח שנבחר
const myChooseF = (e, choose) => {
    e.preventDefault();
    if (numChoose != undefined)
        document.getElementsByName(`name${numChoose}`)[0].style.backgroundColor = "#1C2331"
    insurance.forEach(element => {
        if (element.num == choose)
            document.getElementsByName(`name${choose}`)[0].style.backgroundColor = "#831164"
    });
    numChoose = choose
}

// פונקציה ליצירת ההצעות שמוצעות
const createS = () => {
    let myS = []
    let myDiv = document.getElementById('mySuggestions')
    let mySign = user.car.sign
    insurance.forEach(element => {
        if (element.sign.indexOf(mySign) != -1)
            myS.push(element.num)
    });
    myDiv.innerHTML = ""
    insurance.forEach(element => {
        if (myS.indexOf(element.num) != -1) {
            // דיב חיצוני
            let div = document.createElement('div')
            div.classList.add('mySF')
            div.classList.add('col-12')
            div.setAttribute("name", `name${element.num}`)
            // תמונה לדיב
            let img = document.createElement('img')
            img.setAttribute("src", `.${element.img}`)
            img.classList.add('myImg')
            div.appendChild(img)
            // שם הביטוח
            let h2 = document.createElement('h2')
            h2.innerText = element.name
            div.appendChild(h2)
            // הסבר על הביטוח
            let p = document.createElement('p')
            p.classList.add('myPrice')
            p.innerText = element.explanation
            // הוספת מחיר יש שינו לביטוח לפי קילומטרז
            if (element.num == 1) {
                p.innerText += "\nמחיר לקילומטר: " + element.price + ' ש"ח'
                div.appendChild(p)
                // הוראה להכניס כמות קילומטר
                let p1 = document.createElement('p')
                p1.innerText = "לחישוב הסכום\nהכנס מרחק קילומטרי ממוצע בחודש"
                p1.classList.add('p1')
                div.appendChild(p1)
                // יצירת שדה קלט לכמות
                let amount = document.createElement('input')
                amount.setAttribute("type", "number")
                amount.setAttribute("id", "amount")
                amount.classList.add('col-6')
                div.appendChild(amount)
                // יצירת כפתור שלחיצה עליו יחשב את הסכום השנתי
                let button1 = document.createElement('button')
                button1.setAttribute("id", "button1")
                button1.classList.add('col-6')
                button1.innerText = "לחישוב"
                button1.addEventListener("click", () => { account(window.event) })
                div.appendChild(button1)
                // יצרת אלמנט שיציג את התוצאה של החישוב
                let sum = document.createElement('h5')
                sum.setAttribute("id", "sum")
                div.appendChild(sum)
                sum.style.display = 'none'
            }
            else {
                p.innerText += "\nמחיר לשנה: " + element.price + ' ש"ח'
                div.appendChild(p)
            }
            // יצירת כפתור לבחירת הביטוח
            let button = document.createElement('button')
            button.classList.add('myChoose')
            button.addEventListener("click", () => { myChooseF(window.event, element.num) })
            button.innerText = "לבחירה"
            div.appendChild(button)
            myDiv.appendChild(div)
        }
    })
}

// פונקציה לחישוב מחיר לשנה לביטוח לפי קילומטרז
const account = (e) => {
    e.preventDefault();
    let amount = document.getElementById("amount")
    let sum = document.getElementById("sum")
    sum.innerText = "מחיר לשנה: " + (amount.value * 0.2) * 12 + ' ש"ח'
    sum.style.display = 'block'
}


// פונקציה שמיועדת ללחיצה על כפתור הלאה
// כאן אנו בודקים שכל הערכים שהוזנו תקינים
const myCheck = (event) => {
    event.preventDefault();
    flag = true
    // מערך של כל ההארות בטופס
    let inValid = document.getElementsByClassName('invalidFeedback')
    if (event.target.id == 1) {
        if (event.target[0].value.length < 2) {
            inValid[0].style.display = 'block';
            flag = false
        }
        else
            inValid[0].style.display = 'none';
        if (event.target[1].value.length < 2) {
            inValid[1].style.display = 'block';
            flag = false
        }
        else
            inValid[1].style.display = 'none';
        if (event.target[2].value.length < 8) {
            inValid[2].style.display = 'block';
            flag = false
        }
        else
            inValid[2].style.display = 'none';
        if (event.target[3].value.length < 9) {
            inValid[3].style.display = 'block';
            flag = false
        }
        else
            inValid[3].style.display = 'none';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target[4].value)) {
            inValid[4].style.display = 'block';
            flag = false
        }
        else
            inValid[4].style.display = 'none';
        if (flag == true) {
            user.firstName = event.target[0].value
            user.lastName = event.target[1].value
            user.tz = event.target[2].value
            user.pone = event.target[3].value
            user.email = event.target[4].value
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
            document.getElementById('nextMonth1').value = "1 " + myNextMonth();
        }
    }
    else if (event.target.id == 2) {
        if (startDateB != undefined) {
            user.startDate = startDateB
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
        }
        else
            inValid[5].style.display = 'block';
    }
    else if (event.target.id == 3) {
        let e
        Object.keys(cars).forEach(element => {
            debugger
            if (element == event.target[0].value)
                e = element

        })
        if (e == undefined) {
            inValid[6].style.display = 'block'
            flag = false
        }
        else {
            inValid[6].style.display = 'none'
            document.getElementById('car').innerText = "על פי הנתונים שבידנו זה הרכב שלך: \n" + cars[e][0]
        }

        if (event.target.sign.value == "") {
            inValid[7].style.display = 'block'
            flag = false
        }
        else {
            inValid[7].style.display = 'none'
        }
        if (flag == true) {
            user.car.numOfCar = event.target[0].value
            user.car.sign = event.target.sign.value
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
        }
    }
    else if (event.target.id == 4) {
        if (event.target[0].value == "") {
            inValid[8].style.display = 'block';
            flag = false
        }
        else
            inValid[8].style.display = 'none';
        if (event.target[1].value == "") {
            inValid[9].style.display = 'block';
            flag = false
        }
        else
            inValid[9].style.display = 'none';
        if (flag && event.target[1].value - new Date(event.target[0].value).getFullYear() < 17) {
            inValid[10].style.display = 'block';
            flag = false
        }
        if (flag == true) {
            user.dateOfBirth = event.target[0].value
            user.yearOfLicenseIssue = event.target[1].value
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
            createS();
        }

    }
    else if (event.target.id == 5) {
        if (Gid != undefined) {
            debugger
            user.garage = Gid
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
        }
        else
            alert("בחר מוסך והמשך")
    }
    else if (event.target.id == 6) {
        if (numChoose != undefined) {
            debugger
            user.insuranceNumber = numChoose
            document.getElementById(event.target.id).style.display = 'none'
            number = number + 1
            document.getElementById(number).style.display = 'block'
        }
        else
            alert("בחר ביטוח והמשך")
    }
    else if (event.target.id == 7) {
        user.card.nameOfCard = event.target[0].value
        user.card.numOfCard = event.target[1].value
        user.card.lastDate = event.target[2].value
        user.card.codeCvv = event.target[3].value
        let users = JSON.parse(window.localStorage.getItem("users"))
        users.push(user)
        window.localStorage.setItem("users", JSON.stringify(users))
        alert("נרשמת בהצלחה בלחיצה על אישור הינך מועבר ישירות לדף הבית ומשם תוכל להיכנס למערכת")
        window.close()
    }
}

if (window.localStorage.getItem("users") == undefined)
    window.localStorage.setItem("users", "[]")


// פונקציה ליצירת המוסכים ומיונם
const mygarage = (e) => {
    e.preventDefault()
    let fromDomGarage = document.getElementById('garage')
    let city = document.getElementById('myCity').value
    let myGarageByCity = []
    garage.forEach(element => {
        if (element.city == city)
            myGarageByCity.push(element)
    });
    let sortMyGarageByCity = myGarageByCity.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    if (fromDomGarage.innerText == "") {
        sortMyGarageByCity.forEach(element => {
            let button = document.createElement('button')
            button.addEventListener("click", () => {
                myChooseGarage(window.event, element.id)
            })
            button.classList.add("myBG")
            let h4 = document.createElement('h4')
            h4.innerText = element.name + ""
            button.appendChild(h4)
            let h5 = document.createElement('h5')
            h5.innerText = element.city + " " + element.address
            button.appendChild(h5)
            fromDomGarage.appendChild(button)
        })
    }
}

// שמירת הלחיצה הקודמת
let myGaragePrev;
let Gid
const myChooseGarage = (event, name) => {
    event.preventDefault()
    if (myGaragePrev != undefined)
        myGaragePrev.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
    if (event instanceof PointerEvent)
    {
        myGaragePrev = event.currentTarget;
        Gid = name
    }
    else
    {
        myGaragePrev = event
        Gid = name
    }
    myGaragePrev.style.backgroundColor = "#831164"
}