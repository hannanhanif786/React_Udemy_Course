

export default function Button({children, ...pr}){
    return(
        <button {...pr}>{children}</button>
    )
}