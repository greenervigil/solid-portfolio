import { Component } from "solid-js";

interface ButtonProps {
    text: string;
}

const Button: Component<ButtonProps> = (props) => {
    const { text } = props;
    return (
        <button 
            class='text-base h-10 w-1/5 m-5 rounded-3xl text-cyan-200 shadow-lg bg-yellow-600 hover:bg-cyan-900 hover:text-white hover:outline-dotted hover:outline-yellow-600 opacity-100'
        >
            {text}
        </button>
    )
}

export default Button;