// this is components/Header.js
export default function Content({ children }) {
    return (
        <>
            <div className="p-5 bg-white">
                {children}
            </div>
        </>
    );
}