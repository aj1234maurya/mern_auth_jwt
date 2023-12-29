import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  console.log("Generated token:", token);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  // this is working but not the right way for production
  // res.cookie("jwt", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "development",
  //   sameSite: process.env.NODE_ENV === "development" ? "None" : "strict",
  //   maxAge: 1 * 24 * 60 * 60 * 1000,
  // });

  // first trial for settimg cookie and this is the right way but not working
  // res.cookie("jwt", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development",
  //   sameSite: "strict",
  //   maxAge: 1 * 24 * 60 * 60 * 1000,
  // });

  //second trial not working
  // res.cookie("jwt", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "development" ? false : true,
  //   sameSite: process.env.NODE_ENV === "development" ? "None" : "Lax",
  //   maxAge: 1 * 24 * 60 * 60 * 1000,
  // });
};

export default generateToken;
