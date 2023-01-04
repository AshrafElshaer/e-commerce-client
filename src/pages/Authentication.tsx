import { useState } from "react";
import { Button, Login, SignUp } from "../Components";
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Authentication = () => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <section className='bg-gray'>
      <div className='container grid place-items-center py-16'>
        {/* <h1>Authentication</h1> */}
        <div className='w-96 '>
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
