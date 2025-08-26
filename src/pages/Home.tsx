import SearchHandle from "../components/handle/SearchHandle"
import Header from "../components/Header"
import { NavLink } from "react-router"

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-stone-300 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-800 mb-4">
          All your <span className="text-stone-600">links</span> in one place
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mb-8">
          Create your personalized page where you can share your social media and favorite projects.
          Choose which link to show first and generate your own shareable link in seconds.
        </p>

        <div className="w-full max-w-lg mb-10">
          <SearchHandle />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/auth/register"
            className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Get Started for Free  
          </NavLink>
          <NavLink
            to="/auth/login"
            className="px-6 py-3 bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
          >
            I already have an account
          </NavLink>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-stone-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Customize</h3>
            <p className="text-stone-600">Decide which social media appears first and organize your links the way you want.</p>
          </div>
          <div className="bg-stone-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Share</h3>
            <p className="text-stone-600">Get your unique link to share across all your platforms.</p>
          </div>
          <div className="bg-stone-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Grow</h3>
            <p className="text-stone-600">Make it easy for your followers to find your content in one single place.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
