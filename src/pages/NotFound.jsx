import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[calc(72vh-210px)] bg-white container mx-auto rounded-lg w-full md:h-[calc(100vh-210px)] m-2 md:0">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        Let's get you back{" "}
        <button onClick={() => navigate("/")} className="text-blue-500">
          Go Home Page
        </button>
        .
      </p>
    </div>
  );
};
export default NotFound;
