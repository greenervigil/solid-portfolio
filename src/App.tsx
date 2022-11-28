import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
    <nav class="flex flex-row justify-between">
      <a class="p-6" href="/">
        <p class="text-gray-800 text-2xl">Daniel J Greener-Vigil</p>
      </a>
      <ul class="flex flex-row">
        <li class='p-6'>Home</li>
        <li class="p-6">About</li>
        <li class="p-6">Experience</li>
        <li class="p-6">Projects</li>
        <li class="p-6">Contact</li>
      </ul>
    </nav>

    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>

    </>
  );
};

export default App;
