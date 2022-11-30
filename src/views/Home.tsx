import { Component } from "solid-js"
import Button from "../components/Button";

const Home: Component = () => {
    return (
        <div class="bg-cyan-800 h-screen py-48">
            <div class="bg-yellow-600 absolute -my-36 mx-96 rounded-full h-96 w-96"></div>
            <div class='bg-gray-500 px-10 w-3/5 rounded-lg shadow-2xl opacity-50 py-5 z-10'>
                <div class='text-sm text-cyan-300 opacity-100'>Hi, my name is</div>
                <div class='text-6xl text-zinc-300 p-3 opacity-100'>Daniel Greener-Vigil</div>
                <div class='text-zinc-300 text-base p-3 opacity-100'>I'm a Software Engineer focus on developing full stack digital solutions. </div>

                <Button text="View My Work" />
            </div>
        </div>
    )
}

export default Home;