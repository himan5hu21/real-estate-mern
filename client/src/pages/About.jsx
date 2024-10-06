function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 h-32"></div>

        <div className="relative -mt-16 px-6 py-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>

          <div className="text-center mt-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Himanshu Devaiya
            </h2>
            <p className="text-gray-600">Aspiring MERN Stack Developer</p>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-700">
              Passionate about building modern web applications and learning new
              technologies. Always excited about solving complex problems.
            </p>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.38c.6.11.82-.26.82-.57v-2.17c-3.34.73-4.03-1.44-4.03-1.44-.54-1.36-1.32-1.72-1.32-1.72-1.08-.73.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.3 3.47.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.12-3.2 0 0 1.01-.32 3.3 1.23A11.52 11.52 0 0112 6.84c1.04.01 2.09.14 3.06.42 2.3-1.55 3.31-1.23 3.31-1.23.66 1.67.25 2.9.12 3.2.78.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.5 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0H5C2.25 0 0 2.25 0 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5zM8 19H5v-9h3v9zM6.5 8.5C5.12 8.5 4 7.38 4 6s1.12-2.5 2.5-2.5S9 4.62 9 6 7.88 8.5 6.5 8.5zM20 19h-3v-5c0-2.5-3-2.25-3 0v5h-3v-9h3v1.25C15.54 10 19 9.75 19 13.75V19z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M23.95 4.57c-.88.39-1.83.65-2.83.77a4.92 4.92 0 002.16-2.71 9.87 9.87 0 01-3.1 1.2 4.93 4.93 0 00-8.39 4.49A13.99 13.99 0 011.67 3.15a4.91 4.91 0 001.52 6.57 4.87 4.87 0 01-2.23-.61v.06a4.93 4.93 0 003.95 4.83 4.97 4.97 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.88 9.88 0 01-6.13 2.11c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64A9.93 9.93 0 0024 4.56c-.88.39-1.83.65-2.83.77a4.92 4.92 0 002.16-2.71z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
