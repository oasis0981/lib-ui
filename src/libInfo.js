function setMainData(libInfo) {
  const elem = `
    <h2>오늘의 도서관 현황</h2>
        <p>대출한 총 권수: <span>${libInfo.totalBorrowedBooks}권</span></p>
        <p>대출 이용 회원 수: <span>${libInfo.borrowUsers}명</span></p>
        <p>미반납 총 권수: <span>${libInfo.overdueBooks}권</span></p>
        <p>반납 총 권수: <span>${libInfo.returnBooks}권</span></p>
    `;

  document.getElementById("libInfoData").innerHTML = elem;
}
