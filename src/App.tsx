import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';

const App: Component = () => {
  return (
    <>
    <nav class='flex flex-row border-b-2 border-yellow-700 justify-between bg-cyan-800'>
      <a class='p-4' href='/'>
        <p class='text-cyan-300 text-2xl w-24 whitespace-nowrap overflow-hidden'>Daniel J Greener-Vigil</p>
      </a>
      <ul class='flex flex-row pt-4'>
        <li><A end href='/' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Home</A></li>
        <li><A href='/about' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>About</A></li>
        <li><A href='experience' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Experience</A></li>
        <li><A href='projects' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Projects</A></li>
        <li><A href='contact' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Contact</A></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experience" element={<div class='text-4xl text-green-700 text-center py-20'>Experience</div>} />
      <Route path="/projects" element={<div class='text-4xl text-green-700 text-center py-20'>Projects</div>} />
      <Route path="/contact" component={Contact} />
    </Routes>
    </>
  );
};

export default App;
