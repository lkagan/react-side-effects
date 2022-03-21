import classes from "./Input.module.css";
import {useEffect, useRef} from "react";

const Input = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label
                htmlFor="props.id"
            >
            {props.label}
            </label>
            <input
                ref={inputRef}
                id={props.id}
                type={props.type || "text"}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}

export default Input;