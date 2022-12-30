import { Component } from "solid-js";

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {
    const { text, handleClick } = props;
    return (
        <button 
            class='text-base text-center h-10 w-fit px-5 mx-2 my-5 rounded-3xl text-cyan-200 shadow-lg bg-yellow-600 hover:bg-cyan-900 hover:text-white hover:outline-dotted hover:outline-yellow-600 opacity-100'
            onclick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button;