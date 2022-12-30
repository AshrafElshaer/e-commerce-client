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
          <div className='text-center mt-8 flex flex-col gap-4'>
            <span>Or</span>
            <Button className='w-full rounded-full' Icon={AiOutlineGoogle}>
              Login With Google
            </Button>
            <Button
              className='w-full rounded-full'
              buttonType='black'
              Icon={AiFillApple}>
              Login With Apple
            </Button>
            <Button
              className='w-full rounded-full'
              buttonType='blue'
              Icon={BsFacebook}>
              Login With Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
