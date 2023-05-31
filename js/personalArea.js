

let myUser = JSON.parse(window.sessionStorage.getItem("myUser"))

let insurance = JSON.parse(window.localStorage.getItem("insurance"))
debugger
console.log(insurance)
debugger

let garage = JSON.parse(window.localStorage.getItem("garage"))

// פתיחת טופס לקליטת שם משתמש וסיסמה
const myConect = () => {
    let myForm2 = document.getElementById('myB')
    myForm2.style.display = 'block'
}

// סגירת טופת לקליטת שם משתמש וסיסמה
const myNotConect = () => {
    let myForm2 = document.getElementById('myB')
    myForm2.style.display = 'none'
}

const mavo = () => {
    let tav = document.getElementById('tav')
    tav.innerText = myUser.firstName
    tav.classList.add("tav")
    let div1 = document.createElement('div')
    div1.classList.add("parallax")
    div1.classList.add("mask")
    let img = document.createElement('img')
    img.setAttribute("src", "/img/רקע4.jpg")
    img.classList.add("myImgCar")
    let div2 = document.createElement('div')
    div2.classList.add("mask")
    div2.classList.add("rgba-black-light")
    div2.classList.add("d-flex")
    div2.classList.add("justify-content-center")
    div2.classList.add("align-items-center")
    let div3 = document.createElement('div')
    div3.classList.add("text-center")
    div3.classList.add("white-text")
    div3.classList.add("mx-5")
    div3.classList.add("wow")
    div3.classList.add("fadeIn")
    div3.classList.add("d-flex")
    div3.style.top = "20%"
    div2.appendChild(div3)
    div1.appendChild(div2)
    div1.appendChild(img)
    document.getElementById('myMavo').appendChild(div1)
}
mavo()

// מערך של פעולות
let operations = [
    [1, "לשנות מסלול השקעה", "../img/signposts.gif"],
    [2, "לאתר ספקים", "../img/postman.gif"],
    [3, "לבדוק מצב תביעה", "../img/folder.gif"],
    [4, "להגיש תביעה", "../img/message.gif"],
    [5, "לעדכן אמצעי תשלום", "../img/credit.gif"],
    [6, "לצפות במסמכים", "../img/document.gif"],
    [7, "לעדכן פרטים אישים", "../img/padlock.gif"],
    [8, "להצטרף לביטוח", "../img/social-care.gif"]
]


// פונקציה לבנית כרטיסי פעולות
const createCard = () => {
    let sec = document.getElementsByTagName("section")[1]
    sec.classList.add("mySection")
    for (let i = 1; i < 3; i++) {
        let div = document.createElement("div")
        div.classList.add("row")
        div.classList.add("features-small")
        div.classList.add("mt-3")
        div.classList.add("wow")
        div.classList.add("fadeIn")
        div.classList.add("col-md-9")
        div.style.marginRight = "auto"
        operations.forEach(element => {
            if(element[0] <= i*4 && element[0] > (i-1)*4)
            {
                let div1 = document.createElement("div")
                div1.classList.add("col-xl-3")
                div1.classList.add("mb-4")
                div1.style.textAlign = "center"
                let div2 = document.createElement("div")
                div2.classList.add("border")
                div2.classList.add("flex-center")
                div2.classList.add("text-center")
                div2.style.backgroundColor = "white"
                div2.style.padding = "25px"
                let h4 = document.createElement("h4")
                h4.classList.add("font-weight-bold")
                h4.classList.add("grey-text")
                h4.classList.add("mb-1")
                h4.classList.add("font-bold")
                h4.classList.add("feature-title")
                h4.style.fontSize = "35px !important"
                let img = document.createElement("img")
                img.setAttribute("src", element[2])
                img.setAttribute("alt", `${element[2]}`)
                img.width = "50"
                h4.appendChild(img)
                let p2 = document.createElement("p")
                p2.style.fontSize = "20px"
                p2.innerText = element[1]
                h4.appendChild(p2)
                div2.appendChild(h4)
                div1.appendChild(div2)
                div.appendChild(div1)
            }
        });
        sec.appendChild(div)
    }
}
createCard()

// פונקציה לבנית footer
const myFooter = () => {
    let footer = document.getElementsByTagName('footer')[0]
    footer.classList.add("page-footer")
    footer.classList.add("text-center")
    footer.classList.add("font-small")
    footer.classList.add("mt-4")
    footer.classList.add("wow")
    footer.classList.add("fadeIn")  
    footer.classList.add("myFooter")
    let div = document.createElement('div')
    div.classList.add("footer-copyright")
    div.classList.add("py-4")
    div.style.verticalAlign = "middle"
    div.innerText = "כל הזכויות שמורות © yael malkin"
    footer.appendChild(div)
}
myFooter()

// פונקציה ליציאת משתמש מהמערכת
const myExit = (event) => {
    let myUsers = JSON.parse(window.localStorage.getItem("users"))
    for (let i = 0; i < myUsers.length; i++) {
        if(myUsers[i].pone == event.target.pone.value && myUsers[i].car.numOfCar == event.target.numOfCar.value)
            myUsers.splice(i, 1)
    }
    window.localStorage.setItem("users", JSON.stringify(myUsers))
}

// פונקציה להצגת סרגל הכפתורים של הפרטים של המשתמש
const myPratim = () => {
    let sec = document.getElementsByTagName("section")[0]
    let div = document.createElement('div')
    div.classList.add("col-md-3")
    div.classList.add("myPratim")
    div.innerText = "שם הביטוח שלך: " + insurance[+myUser.insuranceNumber-1].name
    div.innerText += "\n" +  "כתובת המוסך אליו אתה שייך: " + garage[+myUser.garage - 1].city + " " + garage[+myUser.garage - 1].address
    div.style.fontSize = "20px"
    
    let hr1 = document.createElement('hr')
    hr1.style.border = "1px solid white"
    div.appendChild(hr1)

    let button1 = document.createElement('button')
    button1.innerText = "פרטים אישיים 👇🏻"
    button1.classList.add("myPrat")
    div.appendChild(button1)
    button1.addEventListener("click", () => {mySee("div1")})

    let div1 = document.createElement('div')
    div1.setAttribute("id", "div1")
    div.appendChild(div1)

    let hr2 = document.createElement('hr')
    hr2.style.border = "1px solid white"
    div.appendChild(hr2)

    let button2 = document.createElement('button')
    button2.innerText = "פרטי רכב 👇🏻"
    button2.classList.add("myPrat")
    button2.addEventListener("click", () => {mySee("div2")})
    div.appendChild(button2)

    let div2 = document.createElement('div')
    div2.setAttribute("id", "div2")
    div.appendChild(div2)

    let hr3 = document.createElement('hr')
    hr3.style.border = "1px solid white"
    div.appendChild(hr3)

    let button3 = document.createElement('button')
    button3.innerText = "פרטי תשלום 👇🏻"
    button3.classList.add("myPrat")
    button3.addEventListener("click", () => {mySee("div3")})
    div.appendChild(button3)

    let div3 = document.createElement('div')
    div3.setAttribute("id", "div3")
    div.appendChild(div3)

    sec.appendChild(div)
}
myPratim()

// פונקציה להצגת פרטי המשתמש
const mySee = (id) => {
    debugger
    let text
    let inner 
    if(id == "div1")
    {
        text = ["שם: ", "מספר זהות: ", "מספר טלפון: ", "תאריך תחילת ביטוח: "]
        inner = [myUser.firstName + " " + myUser.lastName, myUser.tz, myUser.pone, myUser.startDate]
    }

    if(id == "div2")
    {    
        text = ["מספר רכב: ", "סוג רכב: "]
        inner = [myUser.car.numOfCar, myUser.car.sign]
    }

    if(id == "div3")
    {  
        text = ["שם בעל הכרטיס: ", "מספר אשראי: ", "תוקף כרטיס: ", "CVV: "]
        inner = [myUser.card.nameOfCard, myUser.card.numOfCard, myUser.card.lastDate, myUser.card.codeCvv]
    }

    let myNext = document.getElementById(id)

    if(myNext.innerHTML == "")
    {
        for (let i = 0; i < text.length; i++) {
            let h3 = document.createElement('h3')
            h3.innerText = text[i] + inner[i]
            h3.classList.add("myNext")
            myNext.appendChild(h3)
        }
    }
    else
        myNext.innerHTML = ""

}

