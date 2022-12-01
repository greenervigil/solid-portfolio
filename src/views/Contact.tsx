import { Component } from "solid-js";
import Button from "../components/Button";

const Contact: Component = () => {
    return (
        <div class='bg-teal-700 h-screen pt-8 flex justify-center'>
            <div class='bg-slate-50 rounded-3xl p-8 w-2/4'>
                <h1 class='text-center text-teal-800 text-3xl'>Contact Me</h1>
                <form class='flex flex-col justify-center'>
                    <label for='name'>Name</label>
                    <input class='border rounded-md h-10 p-2' type='text' id='name' placeholder='Full Name' required />
                    <label for='email'>Email</label>
                    <input class='border rounded-md h-10 p2' type='email' required />
                    <label for='description'>Brief Description</label>
                    <textarea class='border rounded-md' cols={10} rows={10} />
                    <div class='flex flex-row justify-center'>
                        <Button text="Submit" handleClick={() => {}}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;