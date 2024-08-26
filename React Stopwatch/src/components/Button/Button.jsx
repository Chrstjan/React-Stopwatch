import style from "./Button.module.scss"

export const Button = ({action, text, theme}) => {
    return (
        <>
            <button onClick={action} className={`${style.buttonStyling} ${style[theme]}`}>{text}</button>
        </>
    )
}