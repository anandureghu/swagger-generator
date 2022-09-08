const HomePage = () => {
  return (
    <div className='h-screen bg-slate-100 flex justify-center items-center px-20'>
      <div className="text-center px-10 py-24 min-w-fit bg-slate-50 drop-shadow-2xl rounded-2xl">
        <p className="text-4xl font-bold mb-3">Welcome</p>
        <p className="text-3xl font-thin">Vite.js + React + Typescript + React Router Dom + Tailwind css</p>
        <p className="mt-5">Welcome to using this template with all the technologies. This template is made for easy initialization of projects.</p>
        <p>We wish you a happy coding</p>
        <p className="font-thin mt-5">Note: First of all delete this file src/app/pages/HomePage.tsx</p>
      </div>
    </div>
  )
}

export default HomePage