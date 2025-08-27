import React, { useState } from "react";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  // Hàm lấy giá trị trong input
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      // Cập nhật state để hiển thị lỗi
      setIsShowError(true);
    } else {
      // Cập nhật state để ẩn lỗi
      setIsShowError(false);
    }

    setInputValue(value);
  };
  return (
    <>
      <form className="d-flex mb-1">
        <input
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
          className="form-control me-2"
          placeholder="Nhập công việc..."
        />
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
      {isShowError && (
        <p className="text-danger error-text mb-3 text-sm fs-6">
          Vui lòng nhập tên công việc!
        </p>
      )}
    </>
  );
}
