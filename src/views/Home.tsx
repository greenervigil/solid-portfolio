import { Navigate, useNavigate } from "@solidjs/router";
import { Component } from "solid-js"
import Button from "../components/Button";

const Home: Component = () => {
    const navigate = useNavigate();
    const handleButtonclick = () => {
        navigate('/about', { replace: true });
    }
    return (
        <div class="bg-cyan-800 h-screen py-48">
            <div class="bg-yellow-600 absolute shadow-2xl -my-36 mx-96 rounded-full h-96 w-96"></div>
            <div class='bg-gray-500 px-10 xs:w-2 md:w-6/12 rounded-lg shadow-2xl backdrop-blur-3xl opacity-70 py-5'>
                <div class='blur-0'>
                    <div class='text-sm text-cyan-300'>Hi, my name is</div>
                    <div class='text-6xl text-zinc-300 p-3'>Daniel Greener-Vigil</div>
                    <div class='text-zinc-300 text-base p-3'>Software Engineer focused on developing full stack digital solutions for the web and more.</div>
                    <Button text="Learn More" handleClick={handleButtonclick} />
                </div>
            </div>
        </div>
    )
}

export default Home;