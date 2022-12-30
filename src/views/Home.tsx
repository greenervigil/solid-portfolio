import { Navigate, useNavigate } from "@solidjs/router";
import { Component } from "solid-js"
import Button from "../components/Button";

const Home: Component = () => {
    const navigate = useNavigate();
    const handleLearnClick = () => {
        navigate('/about', { replace: true });
    }

    const handleContactClick = () => {
        navigate('/contact', { replace: true });
    }

    return (
        <div class="bg-cyan-800 md:h-screen py-16">
            <div class="bg-yellow-600 absolute shadow-2xl -my-14 md:mx-96 rounded-full h-96 w-96"></div>
            <div class='bg-gray-500 m-4 px-10 py-5 sm:w-11/12 md:w-6/12 rounded-lg shadow-2xl backdrop-blur-3xl opacity-70'>
                <div class='blur-0'>
                    <div class='text-sm text-cyan-50'>Hi, my name is</div>
                    <div class='text-6xl text-zinc-50 p-3'>Daniel Greener-Vigil</div>
                    <div class='text-zinc-50 text-base p-3'>Software Engineer focused on developing full stack digital solutions for the web and more. Devoted to learning new technologies to ensure the best approach is always made.</div>
                    <Button text="Learn More" handleClick={handleLearnClick} />
                    <Button text="Contact Me" handleClick={handleContactClick}/>
                </div>
            </div>
        </div>
    )
}

export default Home;