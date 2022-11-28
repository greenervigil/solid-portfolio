import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
    <nav>
      <ul class="flex flex-row justify-end px-6">
        <li class='p-6'>Home</li>
        <li class="p-6">About</li>
      </ul>
    </nav>

    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>

    </>
  );
};

export default App;
