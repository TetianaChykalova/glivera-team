let headerBurger = document.querySelector("#header-burger");
let contentBurger = document.querySelector("#content-burger");
let body = document.body;

headerBurger.addEventListener("click", function() {
    contentBurger.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
})



let sms = [
    {
        userName: "Александр Антонов",
        mainText: "здравствуйте, как долго придётся ждать?",
        smsData: "13/04/2018",
        smsTime: "14:02",
    },
    {
        userName: "Gun Machine",
        mainText: "а почему на ноже нет ни одной царапины",
        smsData: "01/12/2018",
        smsTime: "00:14",
    },
    {
        userName: "Диана Павлова",
        mainText: "нет, мне не нужно, если и вам тоже пофиг...",
        smsData: "13/04/2018",
        smsTime: "14:02",
    },
    {
        userName: "Otto Zweig",
        mainText: "thank you! that's great!",
        smsData: "01/12/2018",
        smsTime: "00:14",
    },
    {
        userName: "Александр Антонов",
        mainText: "здравствуйте, как долго придётся ждать?",
        smsData: "13/04/2018",
        smsTime: "14:02",
    },
    {
        userName: "Gun Machine",
        mainText: "а почему на ноже нет ни одной царапины",
        smsData: "01/12/2018",
        smsTime: "00:14",
    },
    {
        userName: "Диана Павлова",
        mainText: "нет, мне не нужно, если и вам тоже пофиг...",
        smsData: "13/04/2018",
        smsTime: "14:02",
    },
    {
        userName: "Otto Zweig",
        mainText: "thank you! that's great!",
        smsData: "01/12/2018",
        smsTime: "00:14",
    },
];

let templateSms = document.querySelector("#sms__item").innerHTML;
let ulSms = document.querySelector(".sms__list");

function addSms() {
    for (let i = 0; i < sms.length; i++) {
        const smsItem = sms[i];
        let html = Mustache.render(templateSms, smsItem);
        ulSms.insertAdjacentHTML("beforeend", html);
    }
}
addSms();
