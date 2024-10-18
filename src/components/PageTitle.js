// this is components/Header.js
export default function PageTitle({ props }) {
    return (
        <>
            {props?.text ? <h2 className="text-center text-2xl md:text-3xl font-SukhumvitSet font-medium text-[#231f20] mt-10">{props.text}</h2> : null}   
        </>
    );
}