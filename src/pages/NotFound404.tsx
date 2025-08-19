const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        User Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The user you are looking for doesn’t exist or may have been removed.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-md hover:bg-red-600 transition"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default NotFound404
