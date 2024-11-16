"use client";

import Card from "./components/card";

export default function Home() {

  return (
    <main className="flex flex-col bg-cyan-500 text-black" >
      <div className="flex flex-col gap-5 items-center justify-between py-6 "></div>
      <div className="max-w-7xl  flex flex-col items-center justify-center mx-auto -mt-[20px]">
        <h1 className="font-[poppins] text-[3.34rem] font-extrabold text-red-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-yellow-400">
            Props Data
          </span>
          <br/>
          <br/>
        </h1>
        <Card name={"Mariam"} Id={188224} day={"Monday 2pm - 5pm"} />
        <br/>
        <Card name={"Nimra"} Id={166548} day={"Monday 2pm - 5pm"} />
        <br/>
        <Card name={"Yusra"} Id={166548} day={"Monday 2pm - 5pm"} />
        <br/>
        <Card name={"Huzaifa"} Id={166548} day={"Monday 2pm - 5pm"} />
        <br/>
      </div>
    </main>
  );
}