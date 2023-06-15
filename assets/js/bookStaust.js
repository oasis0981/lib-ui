let bookList = {
    "1" : {
            "bookNo" : "1234",
            "image" : "/assets/images/이것이 자바다.jpg",
            "title" : "이것이 자바다",
            "writer" : "신용권",
            "period" : "2023-06-01 ~ 2023-06-08"
    },
    "2" : {
        "bookNo" : "4532",
        "image" : "/assets/images/코드로 배우는 스프링부트 웹프로젝트.jpg",
        "title" : "코드로 배우는 스프링부트 웹프로젝트",
        "writer" : "구멍가게 코딩단",
        "period" : "2023-06-05 ~ 2023-06-12"
    },
    "3" : {
        "bookNo" : "1782",
        "image" : "/assets/images/sql튜닝.jpg",
        "title" : "업무에서 바로 쓰는 SQL튜닝",
        "writer" : "양바른",
        "period" : "2023-06-05 ~ 2023-06-12"
    }
}


let tbody = document.querySelector('.loans_list_table tbody');

document.addEventListener("DOMContentLoaded", insertTableData());

function insertTableData() {
    console.log("insertFunction");

    for(key in bookList){
        
    let row_2 = document.createElement('tr');
    let loanNo1 = document.createElement('td');
    loanNo1.innerHTML =  key;
    let bookNo1 = document.createElement('td');
    bookNo1.innerHTML = bookList[key].bookNo;
    let image1 = document.createElement('td');
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", bookList[key].image);
    image1.appendChild(imgTag);
    image1.classList.add("bookImage");
    let bookTitle1 = document.createElement('td');
    bookTitle1.innerHTML = bookList[key].title;
    let writer1 = document.createElement('td');
    writer1.innerHTML = bookList[key].writer;
    let period1 = document.createElement('td');
    period1.innerHTML = bookList[key].period;

    row_2.appendChild(loanNo1);
    row_2.appendChild(bookNo1);
    row_2.appendChild(image1);
    row_2.appendChild(bookTitle1);
    row_2.appendChild(writer1);
    row_2.appendChild(period1);
    tbody.appendChild(row_2);
    }
}