/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/Link";
import { useState, useEffect } from "react";
import { GrNext } from "react-icons/Gr";
import { FaUser } from "react-icons/Fa";
import { RiBillFill, RiH1 } from "react-icons/Ri";
import getData from "./users.json";
import Pagination from "./Pagination";

function Table() {
  //Get JSON
  const getUser = getData.data.users;
  // const waitPaymentUsers = getUser;
  // console.log(waitPaymentUsers);

  // Users Data
  const [users, setUsers] = useState(getUser);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(6);

  // Get current user
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = getUser.length;

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sum of number in array
  const [sumPayment, setSumPayment] = useState(sumArraysPayment(getUser));
  function sumArraysPayment() {
    let total = 0;

    for (let i = 0; i < getUser.length; i += 1) {
      total += getUser[i].payment;
    }
    return total;
  }

  // Tab
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Filter Data
  // const nameOfStatus = getUser.map(namestatus => namestatus.status['name_status'].indexOf('รอชำระเงิน'));
  // const waitPay = [];
  // for (let i = 0; i < nameOfStatus.length; i++) {
  //     if (nameOfStatus[i] === 0) {
  //       const waitpayUsers = getUser[i].map(wpusers => wpusers())
  //     }
  //   }

  // const [waitPaymentUsers, setWaitPaymentUsers] = useState(allWaitStatus(getUser))
  // function allWaitStatus() {
  //   const nameOfStatus = getUser.map(namestatus => namestatus.status['name_status'].indexOf('รอชำระเงิน'));
  //     for (let i = 0; i < nameOfStatus.length; i++) {
  //     if (nameOfStatus[i] === 0) {
  //        return getUser[i]
  //     }
  //   }
  //   return ;
  // }

  // Change Table Data
  // if (toggleState === 1){
  // }

  return (
    <div className="mb-5 ">
      <div id="tab" className="h-11 flex justify-around items-end">
        <div
          className={
            toggleState === 1 ? "statustab-div-active" : "statustab-div"
          }
          onClick={() => toggleTab(1)}
        >
          <h3
            className={
              toggleState === 1 ? "statustab-h3-active" : "statustab-h3"
            }
          >
            ทั้งหมด({totalUsers})
          </h3>
        </div>
        <Link href='/Invoice_waitpayment'>
          <div
            className={
              toggleState === 2 ? "statustab-div-active" : "statustab-div"
            }
            onClick={() => toggleTab(2)}
          >
            <h3
              className={
                toggleState === 2
                  ? "statustab-h3-active bg-green-400"
                  : "statustab-h3"
              }
            >
              รอชำระเงิน(6)
            </h3>
          </div>
        </Link>
        <div
          className={
            toggleState === 3 ? "statustab-div-active" : "statustab-div"
          }
          onClick={() => toggleTab(3)}
        >
          <h3
            className={
              toggleState === 3 ? "statustab-h3-active" : "statustab-h3"
            }
          >
            รอตรวจสอบ(6)
          </h3>
        </div>
        <div
          className={
            toggleState === 4 ? "statustab-div-active" : "statustab-div"
          }
          onClick={() => toggleTab(4)}
        >
          <h3
            className={
              toggleState === 4 ? "statustab-h3-active" : "statustab-h3"
            }
          >
            จ่ายแล้ว(6)
          </h3>
        </div>
        <div
          className={
            toggleState === 5 ? "statustab-div-active" : "statustab-div"
          }
          onClick={() => toggleTab(5)}
        >
          <h3
            className={
              toggleState === 5
                ? "statustab-h3-active bg-gray-400"
                : "statustab-h3"
            }
          >
            ไม่สำเร็จ(6)
          </h3>
        </div>
        <div
          className={
            toggleState === 6 ? "statustab-div-active" : "statustab-div"
          }
          onClick={() => toggleTab(6)}
        >
          <h3
            className={
              toggleState === 6
                ? "statustab-h3-active bg-red-500"
                : "statustab-h3"
            }
          >
            ยกเลิก(6)
          </h3>
        </div>
      </div>
      <div id="box" className="mb-10 bg-white rounded-t-lg">
        <div className="flex justify-between mb-2">
          <div id="left" className="flex items-end">
            <div className="pl-10 m-1 flex items-center font-semibold text-gray-500">
              <p>Show</p>
              <div id="selecter" className="">
                <select className="px-3 py-2 mx-3 bg-gray-200 rounded-md font-bold text-lg text-black">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6" selected="select">
                    6
                  </option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <p>Entries</p>
            </div>
          </div>
          <div id="right" className="">
            <div className="rounded-t-lg">
              <div className="flex px-5 py-5 mr-10 mt-5 text-red-600 bg-gray-200 rounded-lg ">
                <div className="flex justify-start">
                  <p className="text-xs font-semibold">ยอดชำระทั้งหมด</p>
                </div>
                <div className="px-5">
                  <h2 className=" right-2 text-2xl font-bold">
                    {sumPayment.toLocaleString("en-US")}
                  </h2>
                </div>
                <p className="flex items-center">บาท</p>
              </div>
            </div>
          </div>
        </div>
        <div id="table" className="">
          <table className="w-full">
            <thead className="text-sm bg-blue-400">
              <tr className=" bg-blue-200">
                <th className="">
                  <p>No.</p>
                  <p className="text-xs">ลำดับที่</p>
                </th>
                <th className="">
                  <p>Code</p>
                  <p className="text-xs">เลขที่บิล</p>
                </th>
                <th className="">
                  <p>Project</p>
                  <p className="text-xs">ชื่อโปรเจค</p>
                </th>
                <th className="">
                  <p>Date</p>
                  <p className="text-xs">วันที่ออกบิล</p>
                </th>
                <th className="">
                  <p>Customer Name</p>
                  <p className="text-xs">ชื่อลูกค้า</p>
                </th>
                <th className="">
                  <p>Payment Amount</p>
                  <p className="text-xs">ยอดชำระ</p>
                </th>
                <th className="">
                  <p>Slip</p>
                  <p className="text-xs">หลักฐานการโอน</p>
                </th>
                <th className="">
                  <p>Status</p>
                  <p className="text-xs">สถานะ</p>
                </th>
              </tr>
            </thead>
            <tbody id="total" className="">
              {currentUser.map((user) => (
                <tr>
                  <td key={user.id} className="pl-10">
                    {user.id}
                  </td>
                  <td key={user.code} className="pl-10">
                    {user.code}
                  </td>
                  <td key={user.project_name} className="pl-10">
                    {user.project_name}
                  </td>
                  <td key={user.data} className="pl-10">
                    {user.data.slice(0, 10)}
                  </td>
                  <td key={user.first_name} className="pl-10">
                    {user.first_name}
                  </td>
                  <td key={user.payment} className="pl-10">
                    {user.payment.toLocaleString("en-US")}
                  </td>
                  <td key={user.slip}>
                    <a href="#" className="flex justify-center">
                      <RiBillFill />
                    </a>
                  </td>
                  <td key={user.status} className="pl-10">
                    <h4>{user.status.name_status}</h4>
                    <div className="flex">
                      <p>โดย</p>
                      <FaUser />
                      <p>{user.status.id}</p>
                      <FaUser />
                      <p>{user.status.id}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody id="waitpayment" className="">
            <tr>
                  <td className="pl-10">
                    {getUser[0].id}
                  </td>
                  <td className="pl-10">
                    {getUser[0].code}
                  </td>
                  <td className="pl-10">
                    {getUser[0].project_name}
                  </td>
                  <td className="pl-10">
                    {getUser[0].data.slice(0, 10)}
                  </td>
                  <td className="pl-10">
                    {getUser[0].first_name}
                  </td>
                  <td className="pl-10">
                    {getUser[0].payment.toLocaleString("en-US")}
                  </td>
                  <td>
                    <a href="#" className="flex justify-center">
                      <RiBillFill />
                    </a>
                  </td>
                  <td className="pl-10">
                    <h4>{getUser[0].status.name_status}</h4>
                    <div className="flex">
                      <p>โดย</p>
                      <FaUser />
                      <p>{getUser[0].status.id}</p>
                      <FaUser />
                      <p>{getUser[0].status.id}</p>
                    </div>
                  </td>
                </tr>
            </tbody> */}
          </table>
        </div>
        <div id="pagnition">
          <div className="py-1">
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
