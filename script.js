const d = new Date();
//Date
const months = ["Jan.", "Feb.", "Mart.", "April.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
const days = ["Sun.", "Mon.", "Thu.", "Wed.", "Tue.", "Fri.", "Sat"];

const day = days[d.getDay()]
const dayNum = d.getDate()
const month = months[d.getMonth()]
const year = d.getFullYear()
const date = `${day} ${month} ${dayNum}`

// Time
const hour = d.getHours();
const min = d.getMinutes();
const elm = document.querySelector("#Date")
const time = `${hour<10 ? "0"+hour : hour}:${min<10 ? "0"+min : min}`

elm.innerText= `${time} • ${date}`

