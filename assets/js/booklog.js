let dataset = [];

async function readJsonFile () {
    await fetch("../assets/js/booklog.json")
    .then(response => response.json())
    .then(data => {
        for(let key in data){
            dataset.push(data[key]);
        }

        getBookLog(data);
    })
}


const bookLogTableBody = document.querySelector(".loans_list_table tbody");

function getBookLog(bookList){

    let bookLogContent = "";
    for(key in bookList){

        bookLogContent += `
            <tr class="active_row">
                <td>${key}</td>
                <td>${bookList[key].bookNo}</td>
                <td class="loans_book_info">
                    <img
                        src=${bookList[key].image}
                        alt=""
                        class="loans_book_img"
                    />
                    <p>${bookList[key].bookTitle}</p>
                </td>
                <td>${bookList[key].author}</td>
                <td>${bookList[key].createAt}</td>
                <td>${bookList[key].endedAt}</td>
            </tr>
        `
    }

    bookLogTableBody.innerHTML = bookLogContent;
}




// json file 경로를 명확하게 명시해야 동작함.
// $.getJSON("../assets/js/test.json", function(data){
//     console.log(data);
// }).fail(function(e){
//     console.error(e);
//     console.log("An error has occurred.");
// });

// let dataset = {};

// async function testFunction() {
//     await fetch("../assets/js/test.json")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             dataset = data;
//             console.log(dataset);
//         })
//         .catch(e => console.error(e));

// }

// testFunction();


document.addEventListener("DOMContentLoaded", ()  => {
    readJsonFile();
    // getBookLog();
    // testFunction();
    console.log(dataset);
})


// 상대 경로로 잡아야 되나?
// const jsonFilePath = "Users/gwanii/Documents/douzone/lib-ui/assets/js";


// fetch(jsonFilePath)
//     .then(response => response.json())
//     .then(data => console.log(data));
