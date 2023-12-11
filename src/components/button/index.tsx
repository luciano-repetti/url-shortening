import React from "react";

type Props = {
    title: string,
    styles?: React.CSSProperties,
    className?: string
    action?: () => void,
  };
  
const Button: React.FC<Props> = ({styles, className, title, action}) => {

    const classes = `w-fit rounded-2xl px-4 py-1 text-neutral-50 bg-primary-cyan-400 select-none hover:bg-primary-cyan-300 active:bg-primary-cyan-500 drop-shadow-md ${className}`;

    return(
        <button onClick={action} type="button" className={classes} style={styles}>
            {title}
        </button>
    )
}

export default Button;