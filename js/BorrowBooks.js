function getBorrowBookList() {
  let tbodyData = [];

  $.ajax({
    url: "borrowBook.json", // JSON 파일의 경로 또는 URL
    dataType: "json",
    success: function (data) {
      // 요청이 성공하면 실행되는 콜백 함수
      // data 변수에 JSON 데이터가 저장됩니다.
      console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
      for (const iterator of data) {
        tbodyData.push(`
          <tr>
            <td>${iterator.bookId}</td>
            <td>
              <img class="bookImg" src="${iterator.bookImg}" alt="" />
            </td>
            <td>${iterator.bookTitle}</td>
            <td>${iterator.author}</td>
            <td>${iterator.publisher}</td>
            <td>${iterator.remainBook}</td>
            <td>
              <a href="#">
                <img class="cancleImg" src="/assets/images/취소.png" />
              </a>
            </td>
          </tr>
                `);
      }
      document.querySelector(".bookListTable tbody").innerHTML =
        tbodyData.join("");
    },
    error: function () {
      // 요청이 실패하면 실행되는 콜백 함수
      console.log("데이터를 불러올 수 없습니다.");
    },
  });
}

function getBorrowedBookList() {
  // 왼쪽 표에 빈 문자열 넣어주기
  document.querySelector(".bookListTable tbody").innerHTML = null;

  let tbodyData = [];
  $.ajax({
    url: "borrowedBook.json", // JSON 파일의 경로 또는 URL
    dataType: "json",
    success: function (data) {
      // 요청이 성공하면 실행되는 콜백 함수
      // data 변수에 JSON 데이터가 저장됩니다.
      console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
      for (const iterator of data) {
        tbodyData.push(`
          <tr>
            <td>${iterator.bookNum}</td>
            <td>${iterator.bookTitle}</td>
            <td>${iterator.author}</td>
            <td>${iterator.returnDue}</td>
        </tr>
                `);
      }
      document.querySelector(".loanBookTable tbody").innerHTML =
        tbodyData.join("");
    },
    error: function () {
      // 요청이 실패하면 실행되는 콜백 함수
      console.log("데이터를 불러올 수 없습니다.");
    },
  });
}
