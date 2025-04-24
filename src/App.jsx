import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    
      <h1 class="underline">test</h1>
      <input class="border border-green-500"/>

         {/* space and container  */}
         {/* 4 =1rem =16px */}
         <div  class="m-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
          iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
         </div>
         {/* mx  est horizontal right and left  
         my est vertical bottom and top */}
         <div  class="my-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
          iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
         </div>
         <div  class="mx-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
          iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
         </div>
          {/* si tu veux juste une seul margin mt,mb,mr,ml de meme pour le padding  pt,pl,pr,pb */}
         <div  class="mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
          iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
         </div>
         <div  class=" bg-green-700 my-10 py-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
          iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
         </div>

         {/* space betwen    flex nous permet de positionner cote a cote les div space-x-2 nous permet de separer les differents div */}
         
         <div className="flex space-x-2 mt-20">
            <div  className="bg-pink-300">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
                   iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
            </div>
            <div  className="bg-yellow-300">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
                   iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
            </div>
            <div  className="bg-black ">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur labore minus iste dolore nam, 
                   iure, suscipit voluptate officia dolorem quae molestias ullam deleniti itaque, architecto alias voluptates molestiae expedita quas?
            </div>
            {/* typographie  */}
           

         </div>

         {/* sm: small md:meduim lg: large  base ;oyen*/}
         <p className="text-sm bg-yellow-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime cum minima repudiandae quasi, ipsum doloremque rem optio distinctio sint? Facilis natus at, consectetur eius accusamus placeat vitae quas reprehenderit.</p>
           <p className="text-base bg-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime cum minima repudiandae quasi, ipsum doloremque rem optio distinctio sint? Facilis natus at, consectetur eius accusamus placeat vitae quas reprehenderit.</p>
           <p className="text-md bg-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime cum minima repudiandae quasi, ipsum doloremque rem optio distinctio sint? Facilis natus at, consectetur eius accusamus placeat vitae quas reprehenderit.</p>
           <p className="text-6xl bg-pink-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime cum minima repudiandae quasi, ipsum doloremque rem optio distinctio sint? Facilis natus at, consectetur eius accusamus placeat vitae quas reprehenderit.</p>
           <p className="text-sm bg-indigo-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime cum minima repudiandae quasi, ipsum doloremque rem optio distinctio sint? Facilis natus at, consectetur eius accusamus placeat vitae quas reprehenderit.</p>
     <div className="mt-10">
       {/* a revoir les fonts */}
      <p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia earum consequatur tenetur voluptates vero, doloribus necessitatibus, rem impedit voluptate, quam sed! Aliquam porro ducimus temporibus aliquid adipisci magni tempore.</p>
      <p className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia earum consequatur tenetur voluptates vero, doloribus necessitatibus, rem impedit voluptate, quam sed! Aliquam porro ducimus temporibus aliquid adipisci magni tempore.</p>
      <p className="myfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia earum consequatur tenetur voluptates vero, doloribus necessitatibus, rem impedit voluptate, quam sed! Aliquam porro ducimus temporibus aliquid adipisci magni tempore.</p>
     {/* alignement */}
     </div>
     <div class="my-12">
     <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     </div>
     <div class="my-12">
     <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="font-extrabold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p className="font-meduim">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     </div>

     {/* width  */}
     <div className="my-12"></div>
     <div className="w-4 bg-red-100"> width in tailwindcss</div>
     <div className="w-[200px] bg-indigo-300"> width in tailwindcss</div>
     <div className="my-12"></div>

      {/* pourecentage */}
     <div className="bg-green-300 w-1/2">percentage in css</div>
     <div className="bg-green-300 w-1/3">percentage in css</div>
     <div className="bg-green-300 w-1/4">percentage in css</div>
      {/* viewport */}
     <div className="bg-blue-500 h-screen w-screen">percentage in css</div>
     <div className="my-12"></div>
     <div className=" h-96 w-80" style={{
    backgroundImage: "url('https://images.pexels.com/photos/14771993/pexels-photo-14771993.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: 'cover',
      backgroundPosition: 'center',}}></div>
    
    {/* ajouter 2 couleur pour avoir un beau couleur */}
  
  <div className="my-12">
    <div class="h-24 bg-gradient-to-l from-purple-400 to-red-400 text-center">hhhhhhh</div>
  </div>
  <div className="my-12">
    <div class=" m-5 p-6 flex justify-between h-24 bg-gradient-to-l from-yellow-500 to-red-700 ">
      <a href='/'>Mylogo</a>
      <ul className='flex space-x-6 ' >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
    </div>
    <div class="my-10 h-screen bg-green-400  flex justify-center items-center font-bold">
     hello
    </div>

    {/* grid il prend par defaut le colonne alors que flex prend par defaut ligne    gap-4 : espace entre les grilles*/}
    <div className="grid h-90 gap-4 border border-green-500 grid-cols-3">
      <div className="bg-indigo-300 border border-red-400 col-span-2"></div>
      <div className="bg-purple-300 border border-red-400  col-span-3"></div>
      <div className="bg-indigo-300 border border-red-400"></div>
      <div className="bg-indigo-300 border border-red-400"></div>
      <div className="bg-pink-300 border border-red-400"></div>
      <div className="bg-yellow-300 border border-red-400"></div>
    </div>
  </div>
    </>

  )
}

export default App
