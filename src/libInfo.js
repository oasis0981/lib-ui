function setMainData(libInfo) {
  const elem = `
    <h2>도서관 정보</h2>
        <p>대출한 총 권수: <span id="total-loans">${libInfo.totalBorrowedBooks}권</span></p>
        <p>대출 이용 회원 수: <span id="total-users">${libInfo.borrowUsers}명</span></p>
        <p>미반납 총 권수: <span id="total-overdue">${libInfo.overdueBooks}권</span></p>
        <p>반납 총 권수: <span id="total-returns">${libInfo.returnBooks}권</span></p>
    `;

  document.getElementById("libInfoData").innerHTML = elem;
}
