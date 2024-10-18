import { useState , useEffect } from "react";
import Image from "next/image";
export default function Result({ props }) {
    const data = props.data;
    const [total , setTotal] = useState(0);
    const [level , setLevel] = useState(0);
    useEffect(() => {
        setTotal(calData(data))
        if (total <= 7)
        {
            setLevel(1)
        }
        else if (total > 7 && total <= 14)
        {
            setLevel(2)
        }
        else if (total > 14 && total <= 21)
        {
            setLevel(3)
        }
        else if (total > 21)
        {
            setLevel(4)
        }
    })
    const calData = (data) => {
        let total = 0;
        data.forEach((item) => {
            if(item.option !== "null")
            {
                total += parseInt(item.option);
            }
        });
        return total
    }
    return (
        <>
            <div className="bg-[#0b1f49] absolute top-0 left-0 w-full h-full p-5">
                <div>
                    <Image
                        src="/images/logo-abbvie.png"
                        alt="Logo abbvie"
                        width={400}
                        height={400}
                        className="h-4 w-auto ml-auto block"
                    />
                </div>
                <div className="mb-1 md:mb-8">
                <Image
                    src="/images/icon-drip.png"
                    alt="Icon Drip"
                    width={400}
                    height={400}
                    className="w-9 h-auto mx-auto block"
                />
                </div>

                <div className="mb-1 md:mb-8">
                    <h2 className="text-3xl font-SukhumvitSet font-bold text-center text-white">
                        การประเมินโรคตาแห้ง
                    </h2>
                </div>

                <div className="mb-1 md:mb-8">                    
                    <Image
                        src={`/images/Result-box-${level}@4x.png`}
                        alt="Result"
                        width={600}
                        height={600}
                        className="w-5/6 h-auto mx-auto block"
                    />
                </div>
                    
                <div className="mb-0 md:mb-4">
                    <p className="text-2xl font-SukhumvitSet font-bold text-center text-white">
                        ปรึกษาเภสัชกรเพิ่มเติม
                    </p>
                </div>

                <div className="mb-1 md:mb-8">                    
                    <Image
                        src="/images/Result-btn@4x.png"
                        alt="Result"
                        width={600}
                        height={600}
                        className="w-4/6 h-auto mx-auto block"
                    />
                </div>
            </div>
        </>
    );
}