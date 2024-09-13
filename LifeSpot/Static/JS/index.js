function createSessionData()
{
    let userData = new Map();
    let ageCheck = false;
    const ageCap = 18;
    const currentDate = new Date().toLocaleString();
    const greetMessage = "Приветствуем на LifeSpot!";

    userData.set("UserAgent", window.navigator.userAgent);
    userData.set("UserAge", prompt("Сколько вам лет?"));

    if (userData.get("UserAge") <= 18) {
        alert("Сайт предназначен для лиц старше 18 лет!");
        window.location.href = "https://www.google.com";
    }

    else {
        alert(`${greetMessage} ${currentDate}`);
        userData.set("SessionStart", currentDate)
    }

    return userData;
}

let sessionLog = function (session)
{
    for (let data of session)
    {
        console.log(data);
    }
}
    
