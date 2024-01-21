import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Results = () => {
  const location = useLocation();
  const { formData } = location.state;
  let salary = formData.salary;
  let salaryOfYear = salary * 12;
  let taxRate = salaryOfYear * (10 / 100);
  let income = salaryOfYear - taxRate;
  return (
    <div>
      <h1>Result</h1>
      <p>
        <strong>ชื่อ: {formData.name} </strong>
      </p>
      <p>
        <strong>งาน: {formData.job} </strong>
      </p>
      <p>
        <strong>
          เงินเดือน: {salary} {formData.salary} บาท
        </strong>
      </p>
      <p>
        <strong>เงินได้ทั้งปี: {salaryOfYear} บาท</strong>
      </p>
      <p>
        <strong>หักภาษี ณ ที่จ่าย 10%: {taxRate} บาท</strong>
      </p>
      <p>
        <strong>เงินได้สุทธิ: {income} บาท</strong>
      </p>
    </div>
  );
};
export default Results;
