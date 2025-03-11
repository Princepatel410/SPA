const title = document.getElementById("title");
const body = document.getElementById("body");
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        let Data = jsonData;
        title.innerHTML = Data.setup;
        body.innerHTML = Data.punchline;
    })
    .catch((err) => {
        console.log("Something want wrong" + "  " + err);
    });