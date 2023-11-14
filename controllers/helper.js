// ----------------------
//! Render for each obj
let renderUserObj = (value) => {
  if (value == "all") {
    let content = "";
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "student") {
    let content = "";
    content += `
      <div class="row inputStudent">
        <div class="col-4 pe-1">
          <div class="text-center py-2">Điểm toán</div>
          <div class="input-group">
            <input id="toan" type="text" class="form-control" onchange="check('toan')" />
          </div>
        </div>
        <div class="col-4 px-1">
          <div class="text-center py-2">Điểm lý</div>
          <div class="input-group">
            <input id="ly" type="text" class="form-control" onchange="check('ly')"/>
          </div>
        </div>
        <div class="col-4 ps-1">
          <div class="text-center py-2">Điểm hóa</div>
          <div class="input-group mb-3">
            <input id="hoa" type="text" class="form-control" onchange="check('hoa')"/>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "employee") {
    let content = `
      <div class="row inputEmployee">
        <div class="col-6 pe-1">
          <div class="py-2">Số ngày làm việc:</div>
          <div class="input-group mb-3">
            <input id="soNgayLamViec" type="text" class="form-control" onchange="check('soNgayLamViec')"/>
          </div>
        </div>
        <div class="col-6 ps-1">
          <div class="py-2">Lương một ngày:</div>
          <div class="input-group mb-3">
            <input id="luongMotNgay" type="text" class="form-control" onchange="check('luongMotNgay')"/>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "customer") {
    let content = `
      <div class="row inputCustomer">
        <div class="col-8 pe-1">
          <div class="py-2">Tên công ty:</div>
          <div class="input-group">
            <input id="tenCTY" type="text" class="form-control" onchange="check('tenCTY')"/>
          </div>
        </div>
        <div class="col-4 px-1">
          <div class="py-2">Trị giá hóa đơn:</div>
          <div class="input-group">
            <input id="triGiaHoaDon" type="text" class="form-control" onchange="check('triGiaHoaDon')"/>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="py-2" for="moTa">Đánh giá</label>
        <textarea class="form-control" id="danhGia" onchange="check('danhGia')"></textarea>
      </div>
    `;
    document.getElementById("renderPerson").innerHTML = content;
  }
};
export default renderUserObj;
//! Render for each obj
document.getElementById("type").onchange = function () {
  let valueSelect = document.getElementById("type").value;
  // renderUserObj(document.getElementById("type").value);
  if (valueSelect == "") {
    document.getElementById("errObj").style.display = "block";
    document.getElementById("type").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("errObj").style.display = "none";
    document.getElementById("type").classList.remove("is-invalid");
    renderUserObj(valueSelect);
  }
};
//RemoveVietnameseTones
export function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
