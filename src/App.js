import React, { useState } from 'react'
import { FaArrowRotateRight } from "react-icons/fa6";

export default function App() {
  const [totalTeam1, setTotalTeam1] = useState(0);
  const [totalTeam2, setTotalTeam2] = useState(0);
  const [currentTeam1, setCurrentTeam1] = useState(0);
  const [currentTeam2, setCurrentTeam2] = useState(0);
  const [isTherewinner, setIsThereWinner] = useState(false);
  const [winner, setWinner] = useState("")
  const [allTeam1, setAllTeam1] = useState([]);
  const [allTeam2, setAllTeam2] = useState([]);

  function handleCalc() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    if( (input1.value == 0 && input2.value ==0)) return;
    if((parseInt(input2.value))<0 || (parseInt(input1.value))<0) return;
    checkWinner()
    setTotalTeam1(totalTeam1 + parseInt(currentTeam1));
    setTotalTeam2(totalTeam2 + parseInt(currentTeam2));
    setAllTeam1(oldAllTeam1 => [...oldAllTeam1,parseInt(currentTeam1)] );
    setAllTeam2(oldAllTeam2 => [...oldAllTeam2,parseInt(currentTeam2)] );
    input1.value = 0;
    input2.value = 0;
    setCurrentTeam1(0)
    setCurrentTeam2(0)

    checkWinner()
  }
  function checkWinner() {
    if((totalTeam1 + parseInt(currentTeam1) >= 152) && (totalTeam1 + parseInt(currentTeam1) ==  =totalTeam2 + parseInt(currentTeam2))){
      if(parseInt(currentTeam1) > parseInt(currentTeam2)){
        setIsThereWinner(true)
        setWinner("لهم")
      }else{
        setIsThereWinner(true)
        setWinner("لنا")
      }
    }
    if (totalTeam1 + parseInt(currentTeam1) >= 152) {
      setIsThereWinner(true)
      setWinner("لهم")
    } else if (totalTeam2 + parseInt(currentTeam2) >= 152) {

      setIsThereWinner(true)
      setWinner("لنا")
    }
  }
  function handleWinner() {
    setIsThereWinner(false)
  }
  function retreat(){
    if (allTeam1.length > 0) {
      setTotalTeam1(totalTeam1 - allTeam1[allTeam1.length - 1])
      setAllTeam1(allTeam1.slice(0,-1))
    }
    if (allTeam2.length > 0) {
      setTotalTeam2(totalTeam2 - allTeam2[allTeam2.length - 1]);
        setAllTeam2(allTeam2.slice(0,-1))
    }
  }
  function restart(x){
    setIsThereWinner(false)
    setTotalTeam1(0)
    setTotalTeam2(0)
    setAllTeam1([])
    setAllTeam2([])
  }

  return (
    !isTherewinner ? (
      <div className="flex flex-col w-[400px] m-auto  items-center text-3xl p-6 gap-[50px] bg-slate-400 h-screen rounded-md">
        <div className="flex bg-white rounded-lg p-2 hover:cursor-pointer hover:bg-gray-300 items-end justify-end" onClick={restart}>
         <span> لعبة جديدة </span>
        </div>
        <div className="flex gap-[100px]">
          <span>
            لهم
          </span>
          <span>
            لنا
          </span>
        </div>
        <div className="flex gap-[100px]">
          <span>
            {totalTeam1}
          </span>
          <span>
            {totalTeam2}
          </span>
        </div>
        <div className="flex gap-[20px] justify-center items-center">
          <input className="basis-[42.5%] border border-black w-[50px] flex-1" type="number" onChange={e => setCurrentTeam1(e.target.value)} id="input1">
          </input>
          <FaArrowRotateRight className="basis-[50%] hover:cursor-pointer hover:opacity-35" onClick={retreat}/>
          <input className="basis-[42.5%] border border-black w-[50px] flex-1" type="number" onChange={e => setCurrentTeam2(e.target.value)} id="input2">
          </input>
        </div>
        <div>
          <button className="bg-white text-black p-2 rounded-md flex-1 hover:bg-gray-300" onClick={handleCalc} id="button1">
            أحسب
          </button>
        </div>
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col gap-4">
            {allTeam1.map((item , index)=>{
            return (
              <span key={index}>
                {item}
              </span>
            )
            })}
          </div>
          <div className="flex flex-col gap-4">
          {allTeam2.map((item , index)=>{
            return (
              <span key={index}>
                {item}
              </span>
            )
            })}
          
          </div>
        </div>
      </div>
    ) : <div className="flex flex-col w-[400px] m-auto justify-center items-center text-3xl p-6 gap-[50px] bg-slate-400 h-screen rounded-md">
      <span>
        مبروووووووووك {winner}
      </span>
      <button onClick={handleWinner} className="bg-white p-2 rounded-md">
        ارجع للحاسبة
      </button>
      <div className="flex bg-white rounded-lg p-2 hover:cursor-pointer hover:bg-gray-300 items-end justify-end" onClick={restart}>
         <span> لعبة جديدة </span>
        </div>
    </div>
  )
}
