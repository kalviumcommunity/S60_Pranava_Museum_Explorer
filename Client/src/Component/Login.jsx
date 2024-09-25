export default function Login() {
    return (
      <div>
        <div className="h-96 flex items-center justify-center mt-[10%]">
          <div className="relative">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-200 via-pink-300 to-red-500 shadow-lg animate-pulse"></div>
            <div
              id="form-container"
              className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
            >
              <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">
                Login
              </h2>
              <form className="space-y-5">
                <input
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="text"
                />
                <input
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                />
                <button
                  className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign in
                </button>
                <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  