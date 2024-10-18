'use client'

import Image from "next/image";
import { useState } from "react";

import textData from './textData.json'

import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Content from "@/components/Content";
import PageTitle from "@/components/PageTitle";
import Result from "@/components/Result";
import { Select, Option } from "@material-tailwind/react";
// https://www.material-tailwind.com/docs/react/select

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [value, setValue] = useState("null");
  const [step , setStep] = useState(1);
  const [data , setData] = useState([
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    },
    {
      option: "null",
    }
  ]);
  const notify = () => toast("Wow so easy!");
  const submitData = (value , step) => {
    // save data to db
    const index = step - 1;
    data[index].option = value;
    setData(data);    
  }
  const prevStep = () => {
    if(step >= 11) {
      setShowResult(false);
    }
    submitData(value , step);
    setValue("null");
    if (step === 1) {
      return;
    }
    setStep(step - 1);
    loading();
  }
  const nextStep = () => {
    if (step === 11) {
      loading();
      submitData(value , step);
      setShowResult(true);
      return;
    }
    if(value === "null") {
      toast("กรุณาเลือกคำตอบ");
      return
    }
    submitData(value , step);
    setValue("null");
    setStep(step + 1);
    loading();
  }
  const loading = () => {    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    console.log(data);
  }
  return (
    <>
      {!showResult &&
      <>
      <Header props={{ title: textData[step-1].title , subtitle: textData[step-1].subtitle , image: `img-page-${step}@4x.png` , step: step }} />
      <Content>
        <PageTitle props={{ text: textData[step-1].pageTitle }} />
        <div className="mt-5 selection-wrapper">
          <Select 
            size="lg" 
            value={value}
            onChange={(val) => setValue(val)}
            className="select-custom"
          >
            <Option value="null">เลือกคำตอบ</Option>
            <Option value="4">ตลอดเวลา</Option>
            <Option value="3">บ่อยมาก</Option>
            <Option value="2">บ่อย</Option>
            <Option value="1">บางเวลา</Option>
            <Option value="0">ไม่มีเลย</Option>
          </Select>
        </div>
      </Content>
      </>
      }
      {showResult &&
        <>
          <Result props={{ data: data }} />
        </>
      }
      <div className="w-full h-auto bg-neutral-600 absolute bottom-0 left-0 z-10 p-5">
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            className="font-SukhumvitSet text-[#243876] font-bold text-2xl inline-flex items-center gap-2"
          >
            <span className="text-white bg-[#bbbcbe] rounded-lg inline-block p-1.5">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
            </span>
            {!showResult &&
            <span>กลับ</span>
            }
            {showResult &&
            <span className="text-white">กลับ</span>
            }
          </button>
          {!showResult &&
          <button
            onClick={nextStep}
            className="font-SukhumvitSet text-[#243876] font-bold text-2xl inline-flex items-center gap-2"
          >
            ถัดไป
            <span className="text-white bg-[#243876] rounded-lg inline-block p-1.5">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
            </span>
          </button>
          }

        </div>
      </div>
      {isLoading && <Loading />}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
