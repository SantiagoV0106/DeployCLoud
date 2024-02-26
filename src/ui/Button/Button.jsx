import './button.css'

export function Button({className,type,name}) {
    return(
        <button className={className} type={type}>{name}</button>
    )
}