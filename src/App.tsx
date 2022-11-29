import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './views/Home';

const App: Component = () => {
  return (
    <>
    <nav class='flex flex-row border-b-2 border-yellow-700 justify-between bg-cyan-800'>
      <a class='p-6' href='/'>
        <p class='text-cyan-300 text-2xl'>Daniel J Greener-Vigil</p>
      </a>
      <ul class='flex flex-row'>
        <A end href='/' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Home</A>
        <A href='/about' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>About</A>
        <A href='experience' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Experience</A>
        <A href='projects' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Projects</A>
        <A href='contact' class='text-cyan-300 p-6 hover:bg-cyan-900 hover:text-white'>Contact</A>
      </ul>
    </nav>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" element={<div class='text-4xl text-green-700 text-center py-20'>About</div>} />
      <Route path="/experience" element={<div class='text-4xl text-green-700 text-center py-20'>Experience</div>} />
      <Route path="/projects" element={<div class='text-4xl text-green-700 text-center py-20'>Projects</div>} />
      <Route path="/contact" element={<div class='text-4xl text-green-700 text-center py-20'>Contact</div>} />
    </Routes>
    </>
  );
};

export default App;
