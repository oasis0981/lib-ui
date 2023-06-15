function renderTable() {
  let tbodyData = [];

  $.ajax({
    url: "lateBooks.json", // JSON 파일의 경로 또는 URL
    dataType: "json",
    success: function (data) {
      // 요청이 성공하면 실행되는 콜백 함수
      // data 변수에 JSON 데이터가 저장됩니다.
      console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
      for (const iterator of data) {
        tbodyData.push(`
                    <tr>
                        <td>${iterator.bookId}</td>
                        <td>${iterator.isbn}</td>
                        <td> <img src = "${iterator.bookImg}" style="width: 8vw; min-width: 10px"> </td>
                        <td>${iterator.bookTitle}</td>
                        <td>${iterator.due}</td>
                        <td style="font-weight: bold;">${iterator.overdue}일</td>
                        <td>${iterator.userNum}</td>
                    </tr>
                `);
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
