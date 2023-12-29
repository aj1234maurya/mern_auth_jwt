import React from "react";
import Hero from "../components/Hero";

function HomeScreen() {
  return (
    <>
      <Hero />
    </>
  );
}

export default HomeScreen;

// import React from "react";
// import Hero from "../components/Hero";

// import { useDispatch } from "react-redux";
// import { clearAuthState } from "../slices/authSlice";

// function HomeScreen() {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(clearAuthState());
//   };

//   return (
//     <>
//       <Hero />
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );
// }

// export default HomeScreen;
