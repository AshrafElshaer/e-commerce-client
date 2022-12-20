import { useState } from "react";
import { Login, SignUp } from "../components";

const Authentication = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <section className='bg-gray'>
      <div className='container grid place-items-center'>
        <h1>Authentication</h1>
        <div className='w-96'>
          {isNewUser ? <SignUp /> : <Login />}
          {isNewUser ? (
            <p className='block  text-center'>
              Already have an account ?
              <span
                className=' text-blue-600 cursor-pointer ml-2 font-bold'
                onClick={() => setIsNewUser((prev) => !prev)}>
                Log in{" "}
              </span>
            </p>
          ) : (
            <p className='block  text-center'>
              Dont't have an account yet ?
              <span
                className=' text-blue-600 cursor-pointer ml-2 font-bold'
                onClick={() => setIsNewUser((prev) => !prev)}>
                Sign Up{" "}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Authentication;
