let borrowBookJson = {
  1: {
    bookId: 1,
    bookNum: "9788966154846",
    bookTitle: "이것이 자바다",
    bookImg: "/assets/images/이것이 자바다.jpg",
    author: "신용권, 임경균 저",
    publisher: "한빛미디어",
    remainBook: "2",
  },
};

let borrowedBookJson = {
  1: {
    bookId: 1,
    bookNum: "9788966154846",
    bookTitle: "이것이 자바다",
    author: "신용권, 임경균 저",
    returnDue: "2023-06-15",
  },
  2: {
    bookId: 2,
    bookNum: "9788966262586",
    bookTitle: "코드로 배우는 스프링부트 웹프로젝트",
    author: "구멍가게 코딩단 저",
    returnDue: "2023-06-15",
  },
  3: {
    bookId: 3,
    bookNum: "9788966262586",
    bookTitle: "업무에서 바로 쓰는 SQL튜닝",
    author: "양바른",
    returnDue: "2023-06-15",
  },
};

const borrowBookTable = document.querySelector(".bookListTable tbody");
document.addEventListener("DOMContentLoaded", getBorrowBookList);

function getBorrowBookList() {
  let borrowBookContent = "";
  for (let key in borrowBookJson) {
    borrowBookContent += `
      <tr>
        <td>${key}</td>
        <td>
          <img class="bookImg" src="${borrowBookJson[key].bookImg}" alt="" />
        </td>
        <td>${borrowBookJson[key].bookTitle}</td>
        <td>${borrowBookJson[key].author}</td>
        <td>${borrowBookJson[key].publisher}</td>
        <td>${borrowBookJson[key].remainBook}</td>
        <td>
          <a href="#">
            <img class="cancleImg" src="/assets/images/취소.png" />
          </a>
        </td>
      </tr>
    `;
  }

  borrowBookTable.innerHTML = borrowBookContent;
}

const borrowedBookTable = document.querySelector(".loanBookTable tbody");
document.addEventListener("DOMContentLoaded", getBorrowedBookList);

function getBorrowedBookList() {
  let borrowedBookContent = "";
  for (let key in borrowedBookJson) {
    borrowedBookContent += `
    <tr>
      <td>${borrowedBookJson[key].bookNum}</td>
      <td>${borrowedBookJson[key].bookTitle}</td>
      <td>${borrowedBookJson[key].author}</td>
      <td>${borrowedBookJson[key].returnDue}</td>
    </tr>
    `;
  }
  borrowedBookTable.innerHTML = borrowedBookContent;
}
