import { Component } from "solid-js"
import Button from "../components/Button";

const Home: Component = () => {
    return (
        <div class='bg-cyan-800 h-screen px-10 flex flex-col justify-center'>
            <div class='text-sm text-cyan-300'>Hi, my name is</div>
            <div class='text-6xl text-zinc-300 p-3'>Daniel Greener-Vigil</div>
            <div class='text-slate-400 text-base p-3'>I'm a Software Engineer focus on developing full stack digital solutions. </div>

            <Button text="View My Work" />
        </div>
    )
}

export default Home;