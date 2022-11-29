import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './views/Home';

const App: Component = () => {
  return (
    <>
    <nav class='flex flex-row justify-between rounded-lg shadow-2xl'>
      <a class='p-6' href='/'>
        <p class='text-gray-800 text-2xl'>Daniel J Greener-Vigil</p>
      </a>
      <ul class='flex flex-row'>
        <A end href='/' class='p-6 hover:bg-cyan-900 hover:text-white'>Home</A>
        <A href='/about' class='p-6 hover:bg-cyan-900 hover:text-white'>About</A>
        <A href='experience' class='p-6 hover:bg-cyan-900 hover:text-white'>Experience</A>
        <A href='projects' class='p-6 hover:bg-cyan-900 hover:text-white'>Projects</A>
        <A href='contact' class='p-6 hover:bg-cyan-900 hover:text-white'>Contact</A>
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
