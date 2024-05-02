// import React from "react";

const MainSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-gradient-to-b from-yellow-400 to-yellow-600 dark:from-gray-900 dark:to-gray-800 py-52 text-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1491185841098-9ce20f966624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxiYWNrZ3JvdW5kJTIwaW1hZ2UlMjBmb2UlMjBmb29kJTIwd2Vic2l0ZXxlbnwwfDB8MHx8fDA%3D")',
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white">Welcome to Geek Food</h1>
        <p className="mt-8 text-xl text-gray-800 dark:text-gray-200">
          Discover the most delicious geek-inspired dishes.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-8 hover:bg-blue-700">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default MainSection;
