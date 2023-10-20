
// קליטת האירוע של גלגול הדף
window.onscroll = () => {scrollFunction()};

// פונקציה שמגלה ומסתירה את הכפתור לקפיצה למעלה, לפי הצורך
const scrollFunction = () => {
    let myTop = document.getElementById("myTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        myTop.style.display = "block"
    else
        myTop.style.display = "none"
}

// פונקציה שעולה לגליון למעלה היא מופעלת על ידי לחצן החץ למעלה
const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

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


// פונקציה לכניסת משתמש קיים למערכת
const myEnter = (event) => {
    let myUsers = JSON.parse(window.localStorage.getItem("users"))
    let myUser
    myUsers.forEach(element => {
        if(element.email == event.target[0].value && element.tz == event.target[1].value)
            myUser = element
    });
    if(myUser != undefined)
    {
        window.sessionStorage.setItem("myUser", JSON.stringify(myUser))
        window.open("./html/personalArea.html","_blank","")
    }
    else
    {
        myNotConect() 
        alert("אנו מצטערים אך אינך רשום אצלינו במערכת")
    }
}

// פונקציה לבנית הכרטיסי ביטוח
const createCard = () => {
    let sec = document.getElementsByTagName("section")
    for (let i = 1; i < 3; i++) {
        let div = document.createElement("div")
        div.classList.add("row")
        div.classList.add("features-small")
        div.classList.add("mt-5")
        div.classList.add("wow")
        div.classList.add("fadeIn")
        insurance.forEach(element => {
            if(element.num <= i*4 && element.num > (i-1)*4)
            {
                let div1 = document.createElement("div")
                div1.classList.add("col-xl-3")
                div1.classList.add("mb-5")
                div1.style.textAlign = "center"
                let div2 = document.createElement("div")
                div2.classList.add("border")
                div2.classList.add("flex-center")
                div2.classList.add("text-center")
                div2.style.backgroundColor = "white"
                let div3 = document.createElement("div")
                div3.classList.add("flex-center")
                div3.classList.add("pb-4")
                div3.classList.add("pt-4")
                div3.classList.add("row")
                div3.classList.add("col-10")
                let h4 = document.createElement("h4")
                h4.classList.add("font-weight-bold")
                h4.classList.add("grey-text")
                h4.style.textShadow = "1px 1px 1px black"
                h4.classList.add("mb-1")
                h4.classList.add("font-bold")
                h4.classList.add("feature-title")
                let img = document.createElement("img")
                img.setAttribute("src", element.img)
                img.setAttribute("alt", `${element.img}`)
                img.width = "200"
                h4.appendChild(img)
                let br1 = document.createElement("hr")
                h4.appendChild(br1)
                let p1 = document.createElement("p")
                p1.style.fontSize = "23px"
                p1.innerText = element.name
                h4.appendChild(p1)
                let p2 = document.createElement("p")
                p2.style.fontSize = "15px"
                p2.innerText = element.explanation
                h4.appendChild(p2)
                let br2 = document.createElement("hr")
                h4.appendChild(br2)
                let button = document.createElement("button")
                button.innerText = `פרוט נוסף`
                button.style.fontSize = "17px"
                button.classList.add("btn")
                button.classList.add("btn-dark")
                button.style.backgroundColor = "red"
                button.classList.add("btn-rounded")
                button.addEventListener("click",()=>{showExplanation(element.num)})
                h4.appendChild(button)
                div3.appendChild(h4)
                div2.appendChild(div3)
                div1.appendChild(div2)
                div.appendChild(div1)
            }
        });
        sec[2].appendChild(div)
    }
}

// הפעלת פונקציה לבנית כרטיסי הביטוח
createCard()

// פונקציה שמופעלת בעת לחיצה על כפתור של פרוט נוסף בביטוח מסוים
const showExplanation = (num) => {
    let br = document.createElement("br")
    let div1 = document.createElement("div")
    div1.setAttribute("id", "myModal")
    div1.classList.add("modal")
    let div2 = document.createElement("div")
    div2.classList.add("modal-content")
    let span = document.createElement("span")
    span.classList.add("close")
    span.innerHTML = "&times;"
    div2.appendChild(span)
    insurance.forEach(element => {
        if(element.num == num)
        {
            let img = document.createElement("img")
            img.setAttribute("src", element.img)
            img.setAttribute("alt", `${element.img}`)
            img.classList.add("myBigImg")
            img.width = "400"
            div2.appendChild(img)
        }
    })
    insuranceMore.forEach(element => {
        if(element.num == num)
        {
            for (let i = 0; i < element.explanation.length; i++) {
                let div = document.createElement("div")
                div.style.fontSize = "30px"
                div.classList.add("myDivModel")
                div.innerText += "✍\n" +  element.explanation[i]
                div.appendChild(br)  
                div2.appendChild(div) 
            }
        }
    })
    div1.appendChild(div2)
    document.body.appendChild(div1)  
    div1.style.display = "block";
    span.onclick = () => {
        div1.style.display = "none";
    } 
}

// פונקציה להצגת הודאה על הנחה
const myS1 = () => {
    debugger
    let div = document.createElement('div')
    div.classList.add("myTimeOutDiv")
    let button = document.createElement('button')
    button.addEventListener("click", myS2)
    button.classList.add("myTimeOutButton")
    button.innerText = "✖"
    div.appendChild(button)
    let p = document.createElement('p')
    p.classList.add("myTimeOutP")
    p.innerText = "מבקר יקר לרגל החופשה הנחות מיוחדות"
    div.appendChild(p)
    let a = document.createElement('a')
    a.href  = "./html/PaymentAndRegistration.html"
    a.innerText = "לקבלת הצעה לביטוח"
    a.classList.add("btn-rounded")
    a.classList.add("btn")
    a.classList.add("myTimeOutA")
    a.target = "_blank"
    div.appendChild(a)
    document.body.appendChild(div)
}

// פונקציה לסגירת הודאה
const myS2 = () => {
    let m = document.getElementsByClassName('myTimeOutDiv')
    // בידיקה אולי כבר לחצו על איקס ואז תיווצר שגיאה
    if(m.length != 0)
        document.body.removeChild(m[0])
}

// שליחה לפונקציה שמציגה הודעה לאחר 20 שניות 
window.setTimeout(myS1, 20000)

// שליחה לפונקציה שמסתירה הודעה לאחר 30 שניות 
window.setTimeout(myS2, 30000)



