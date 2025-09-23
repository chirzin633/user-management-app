import { NavLink } from "react-router";

export default function Home() {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold sm:text-5xl leading-tight text-gray-800">
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent animate-gradient">Aplikasi Manajemen User</span> Kelola Pengguna dengan Mudah
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 md:mb-7">Aplikasi sederhana untuk menampilkan, mencari, dan menambahkan pengguna. Terintegrasi dengan API backend, dibangun dengan React, Express, Axios, TailwindCSS, DaisyUI dan MySQL.</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <NavLink
              to="/users"
              className="btn border-none px-8 py-6 rounded-md text-lg font-semibold bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500
               bg-[length:200%_200%] animate-gradient-move
               text-gray-50 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get started
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="../../assets/hero.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
}
