import React, { useState } from 'react'

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

    setCurrentTeam1(0)
    setCurrentTeam1(0)
    input1.value = "";
    input2.value = "";
    checkWinner()
  }
  function checkWinner() {
    if (totalTeam1 + parseInt(currentTeam1) >= 152) {
      setTotalTeam1(0)
      setTotalTeam2(0)
      setAllTeam1([])
      setAllTeam2([])
      setIsThereWinner(true)
      setWinner("لنا")
    } else if (totalTeam2 + parseInt(currentTeam2) >= 152) {
      setTotalTeam2(0)
      setTotalTeam1(0)
      setAllTeam1([])
      setAllTeam2([])
      setIsThereWinner(true)
      setWinner("لهم")
    }
  }
  function handleWinner() {
    setIsThereWinner(false)
  }

  return (
    !isTherewinner ? (
      <div className="flex flex-col w-[400px] m-auto  items-center text-3xl p-6 gap-[50px] bg-slate-400 h-screen rounded-md">
        <div className="flex gap-[100px]">
          <span>
            لنا
          </span>
          <span>
            لهم
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
        <div className="flex gap-[100px]">
          <input className="border border-black w-[50px]" type="number" onChange={e => setCurrentTeam1(e.target.value)} id="input1">
          </input>
          <input className="border border-black w-[50px]" type="number" onChange={e => setCurrentTeam2(e.target.value)} id="input2">
          </input>
        </div>
        <div>
          <button className="bg-white text-black p-2 rounded-md" onClick={handleCalc} id="button1">
            أحسب
          </button>
        </div>
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col gap-4">
            {allTeam1.map((item)=>{
            return (
              <span>
                {item}
              </span>
            )
            })}
          </div>
          <div className="flex flex-col gap-4">
          {allTeam2.map((item)=>{
            return (
              <span>
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
    </div>
  )
}
