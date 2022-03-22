import { Auth } from "aws-amplify"
import {FaGoogle, FaFacebook} from 'react-icons/fa'
export default function SignIn() {
    return (
      <div className="flex flex-col">
        
            <button
                className="mt-10 focus-outline-none"
                onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                <div className="flex border border-gray-300  p-2 rounded-full items-center justify-center">
                    <FaGoogle size='24'  className='text-red-600' />
                <p className="ml-3">Sign in with Google</p>
                </div>
            </button>
            <button
                className="mt-4 focus-outline-none"
                onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}>
            <div className="flex border border-gray-300  p-2 rounded-full items-center justify-center">
                    <FaFacebook size='24'  className='text-blue-600' />
                <p className="ml-3">Sign in with Facebook</p>
                </div>
                
            </button>
            {/* <button onClick={() => Auth.signOut()}>
                Sign Out
            </button> */}
      </div>
    )
  }