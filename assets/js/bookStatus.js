function pushtable() {
    let tbodyData = [];


    $.ajax({
        url: "bookStatus.json", // JSON 파일의 경로 또는 URL
        dataType: "json",
        success: function (data) {
          // 요청이 성공하면 실행되는 콜백 함수
          // data 변수에 JSON 데이터가 저장됩니다.
          console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
          for (const iterator of data) {
            
            if(iterator.late){
                tbodyData.push(`
                        <tr class="bookLateRow">
                            <td>${iterator.borrowNo}</td>
                            <td>${iterator.bookNo}</td>
                            <td> <img src = "${iterator.image}" style="width: 8vw; min-width: 10px"> </td>
                            <td>${iterator.title}</td>
                            <td>${iterator.writer}</td>
                            <td style="font-weight: bold;">${iterator.period}</td>
                        </tr>
                    `);
            } else {
                tbodyData.push(`
                    <tr>
                        <td>${iterator.borrowNo}</td>
                        <td>${iterator.bookNo}</td>
                        <td> <img src = "${iterator.image}" style="width: 8vw; min-width: 10px"> </td>
                        <td>${iterator.title}</td>
                        <td>${iterator.writer}</td>
                        <td style="font-weight: bold;">${iterator.period}</td>
                    </tr>
                `);
            }


            
          }
          document.querySelector(".loans_list_table> tbody").innerHTML =
            tbodyData.join("");
        },
        error: function () {
          // 요청이 실패하면 실행되는 콜백 함수
          console.log("데이터를 불러올 수 없습니다.");
        },
      });
    }

document.addEventListener("DOMContentLoaded", () => {
    pushtable();
});


// let tbody = document.querySelector('.loans_list_table tbody');

// document.addEventListener("DOMContentLoaded", insertTableData());

// function insertTableData() {
//     console.log("insertFunction");

//     for(key in bookList){
        
//     let row_2 = document.createElement('tr');
//     let loanNo1 = document.createElement('td');
//     loanNo1.innerHTML =  key;
//     let bookNo1 = document.createElement('td');
//     bookNo1.innerHTML = bookList[key].bookNo;
//     let image1 = document.createElement('td');
//     let imgTag = document.createElement("img");
//     imgTag.setAttribute("src", bookList[key].image);
//     image1.appendChild(imgTag);
//     image1.classList.add("bookImage");
//     let bookTitle1 = document.createElement('td');
//     bookTitle1.innerHTML = bookList[key].title;
//     let writer1 = document.createElement('td');
//     writer1.innerHTML = bookList[key].writer;
//     let period1 = document.createElement('td');
//     period1.innerHTML = bookList[key].period;

//     row_2.appendChild(loanNo1);
//     row_2.appendChild(bookNo1);
//     row_2.appendChild(image1);
//     row_2.appendChild(bookTitle1);
//     row_2.appendChild(writer1);
//     row_2.appendChild(period1);
//     tbody.appendChild(row_2);
//     }
// }