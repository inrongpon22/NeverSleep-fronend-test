/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'
import Sidebar from './Components/Sidebar'
import { useState, useEffect } from "react";
import { GrNext } from "react-icons/Gr";
import { FaUser } from "react-icons/Fa";
import { RiBillFill, RiH1 } from "react-icons/Ri";
import getData from "./Components/users.json";
import Pagination from "./Components/Pagination";
import Link from 'next/Link';
import ProImage from "../public/gongyoo.jpg";



function Invoice_cancel() {
  //Get JSON
  const getUser = getData.data.users;
  const payCancel = [];
    // Filter WaitpaymentusersData
    function allWaitStatus() {
      const nameOfStatus = getUser.map(namestatus => namestatus.status['name_status'].indexOf('ยกเลิก'));
        for (let i = 0; i < nameOfStatus.length; i++) {
        if (nameOfStatus[i] === 0) {
          payCancel.push(getUser[i])
        }
      }
    }
    allWaitStatus()

  // Users Data
  const [users, setUsers] = useState(payCancel);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(6);

  // Get current user
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = users.length;

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sum of number in array
  const [sumPayment, setSumPayment] = useState(sumArraysPayment(users));
  function sumArraysPayment() {
    let total = 0;

    for (let i = 0; i < users.length; i += 1) {
      total += users[i].payment;
    }
    return total;
  }

  // Tab
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div>
      <div className='flex w-screen h-screen bg-blue-50'>
        <Sidebar />
        <div className='w-screen'>
        <div className="w-full rounded-lg ">
      <div className=" mx-10">
        <div id="header" className="flex mt-10 mb-5">
          <div id="left" className="w-9/12 mr-10">
            <div id="search">
              <form className="">
                <label className=" mb-2 text-sm font-medium sr-only dark:text-gray-300">
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                    <svg
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="shadow-md block p-3 pl-10 w-full text-sm text-white bg-white rounded-lg border border-gray-300"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
            <div>
              <div className="flex items-center text-blue-400 my-3">
                <span className="hover:text-blue-600 cursor-pointer">
                  Project management
                </span>
                <p className="mx-4"> &gt; </p>
                <span className="hover:text-blue-600 cursor-pointer">
                  Invoice
                </span>
              </div>
            </div>
            <div>
              <div className=" flex items-center">
                <h1 className="font-bold text-2xl mr-3">Invoice</h1>
                <p className=" text-blue-300">(ใบแจ้งหนี้)</p>
              </div>
            </div>
          </div>
          <div id="right" className="w-3/12">
            <div className="h-16 bg-white flex shadow-lg items-center rounded-lg pl-5">
              <div className="w-12 h-12 rounded-lg border-2 border-gray-400/75">
                <Image
                  src={ProImage}
                  alt="profpic"
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="pl-3">
                <h2 className="text-gray-400 text-xs">Accounting Manager</h2>
                <h3 className="font-bold">Gong Yoo</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="table-box">
          <div className="mb-5 drop-shadow-xl">
            <div id="tab" className="h-11 flex justify-around items-end">
              <Link href="/">
                <div
                  className="statustab-div"
                  onClick={() => toggleTab(1)}
                >
                  <h3
                    className="statustab-h3"
                  >
                    ทั้งหมด(30)
                  </h3>
                </div>
              </Link>
              <Link href="/Invoice_waitpayment">
                <div
                  className="statustab-div"
                  onClick={() => toggleTab(2)}
                >
                  <h3
                    className="statustab-h3"
                  >
                    รอชำระเงิน(10)
                  </h3>
                </div>
              </Link>
              <Link href='/Invoice_pending'>
                <div
                  className="statustab-div"
                  onClick={() => toggleTab(3)}
                >
                  <h3
                    className="statustab-h3"
                  >
                    รอตรวจสอบ(6)
                  </h3>
                </div>
              </Link>
              <Link href='/Invoice_paid'>
                <div
                  className="statustab-div"
                  onClick={() => toggleTab(4)}
                >
                  <h3
                    className="statustab-h3"
                  >
                    จ่ายแล้ว(7)
                  </h3>
                </div>
              </Link>
              <Link href='/Invoice_payfail'>
                <div
                  className="statustab-div"
                  onClick={() => toggleTab(5)}
                >
                  <h3
                    className="statustab-h3"
                  >
                    ไม่สำเร็จ(3)
                  </h3>
                </div>
              </Link>
              <Link href='/Invoice_cancel'>
                <div
                  className="statustab-div-active"
                  onClick={() => toggleTab(6)}
                >
                  <h3
                    className="statustab-h3-active bg-red-500"
                  >
                    ยกเลิก({totalUsers})
                  </h3>
                </div>
              </Link>
            </div>
            <div id="box" className="mb-10 bg-white rounded-t-lg rounded-bl-lg rounded-br-lg">
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
                    <div className="flex px-5 py-5 mr-10 mt-5 text-red-600 bg-gray-100 rounded-lg ">
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
              <div id="table" className="h-72">
                <table className="w-full">
                  <thead className="text-sm bg-blue-400">
                    <tr className=" bg-blue-200">
                      <th className="pl-12 pt-2 pb-2 rounded-tl-lg">
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
                      <th className="rounded-tr-lg">
                        <p>Status</p>
                        <p className="text-xs">สถานะ</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="total" className="">
                    {currentUser.map((cancelusers) => (
                      <tr>
                        <td key={cancelusers.id} className="pl-12">
                          {cancelusers.id}
                        </td>
                        <td key={cancelusers.code} className="text-blue-400">
                          {cancelusers.code}
                        </td>
                        <td key={cancelusers.project_name} className="text-blue-500">
                          {cancelusers.project_name}
                        </td>
                        <td key={cancelusers.data} className="">
                          {cancelusers.data.slice(0, 10)}
                        </td>
                        <td key={cancelusers.first_name} className="">
                          {cancelusers.first_name}
                        </td>
                        <td key={cancelusers.payment} className="text-red-500 text-lg font-semibold">
                          {cancelusers.payment.toLocaleString("en-US")}
                        </td>
                        <td key={cancelusers.slip}>
                          <a href="#" className="">
                            <RiBillFill className='text-blue-500 text-2xl' />
                          </a>
                        </td>
                        <td key={cancelusers.status} className="text-center">
                          <h4 className='bg-red-500 rounded-lg w-5/6'>
                            {cancelusers.status.name_status}
                            </h4>
                          <div className="flex">
                            <p>โดย</p>
                            <FaUser className='text-gray-600' />
                            <p>{cancelusers.status.id}</p>
                            <FaUser className='text-gray-600' />
                            <p>{cancelusers.status.id}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
        </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

export default Invoice_cancel