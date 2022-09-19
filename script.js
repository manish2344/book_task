const url = "https://anapioficeandfire.com/api/books";
const main = document.getElementById("main");

fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    // console.log(data);
    // console.log(data);
})

async function getdata() {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "content-type": 'application/json'
            },
        });
        const data = await res.json();
        // console.log(data)
        console.log(data)

        displaydata(data)
    } catch (error) {
        console.log(error);
    }

}

getdata()

function displaydata(mani) {
    mani.forEach(element => {
        console.log(element.name);
        console.log(element.characters[0]);
        main.innerHTML += `<div class="book" id="book-info">
        <h4 class="bookname">${element.name}</h4>
        <p>Authors : ${element.authors}</p>
        <p>Isbtn : ${element.isbn}</p>
        <p>Total page : ${element.numberOfPages}</p>
        <p>Publisher : ${element.publisher}</p>
        <p>Released : ${element.released}</p>
        <p class="charecter">
        ${element.characters[0]}
        ${element.characters[1]}
        ${element.characters[2]}
        ${element.characters[3]}
        ${element.characters[4]}     
       </p>
       </div > `
    });
}