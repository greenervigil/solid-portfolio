import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
    <nav class='flex flex-row justify-between'>
      <A class='p-6' href='/'>
        <p class='text-gray-800 text-2xl'>Daniel J Greener-Vigil</p>
      </A>
      <ul class='flex flex-row'>
        <A href='/' class='p-6'>Home</A>
        <A href='/about' class='p-6'>About</A>
        <A href='experience' class='p-6'>Experience</A>
        <A href='projects' class='p-6'>Projects</A>
        <A href='contact' class='p-6'>Contact</A>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<div class='text-4xl text-green-700 text-center py-20'>Home</div>} />
      <Route path="/about" element={<div class='text-4xl text-green-700 text-center py-20'>About</div>} />
      <Route path="/experience" element={<div class='text-4xl text-green-700 text-center py-20'>Experience</div>} />
      <Route path="/projects" element={<div class='text-4xl text-green-700 text-center py-20'>Projects</div>} />
      <Route path="/contact" element={<div class='text-4xl text-green-700 text-center py-20'>Contact</div>} />
    </Routes>
    </>
  );
};

export default App;
