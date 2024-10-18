// this is components/Header.js
import Image from "next/image";
export default function Header({ props }) {
    return (
        <>
            <div className="bg-gradient-to-b from-[#0e1b43] to-[#25416f] text-white pt-5 px-5 overflow-hidden">
                <div>
                    <Image
                        src="/images/logo-abbvie.png"
                        alt="Logo abbvie"
                        width={400}
                        height={400}
                        className="h-4 w-auto ml-auto block"
                    />
                </div>
                <div className="mb-8">
                <Image
                    src="/images/icon-drip.png"
                    alt="Icon Drip"
                    width={400}
                    height={400}
                    className="w-9 h-auto mx-auto block"
                />
                </div>
                <div>
                    {props.step <= 5 && <h2 className="text-2xl font-SukhumvitSet font-bold text-center text-[#00d798]">{props.title}</h2>}
                    {props.step >= 6 && props.step < 9 && <h2 className="text-2xl font-SukhumvitSet font-bold text-center text-[#15b0e5]">{props.title}</h2>}
                    {props.step >= 9  && <h2 className="text-2xl font-SukhumvitSet font-bold text-center text-[#fff252]">{props.title}</h2>}
                    {props?.subtitle ? <h3 className="text-base font-SukhumvitSet font-normal text-center text-white">{props.subtitle}</h3> : null}   
                    <p  className="text-xl font-SukhumvitSet font-normal text-center text-white">
                        ในช่วง 7 วันที่ผ่านมา
                    </p>
                </div>
                <div className="mt-10">
                    <Image
                        src={`/images/${props?.image}`}
                        alt="Page Image"
                        width={400}
                        height={400}
                        className="w-auto h-[160px] mx-auto block"
                    />
                </div>
            </div>
        </>
    );
}