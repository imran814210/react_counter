export default function Button({children,type,handler}){
    const style=type==='danger'?
    "bg-red-500 text-white px-2 py-2 m-1 rounded shadow"
    :"bg-blue-500 text-white px-2 py-2 m-1 rounded shadow";
    return(
        <>
            <button className={style} onClick={handler}>{children}</button>
        </>
    )
}