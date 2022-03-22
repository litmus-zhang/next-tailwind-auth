import Input from './Input'
// import SocialSignIn from './socialSignIn'

export default function SignUp({
  onChange, setUiState, signUp
}) {
  return (
    <div>
      <p className='text-3xl font-black '>
          Sign up for an account
      </p>
      <div className='mt-10'>
        <label className='text-sm'>Email</label>
        <Input onChange={ onChange} name='email'/>
      </div>
      <div className='mt-4'>
        <label className='text-sm'>Password
        </label>
        <Input onChange={ onChange} name='password' type='password' />
      </div >
      <button onClick={signUp} className='text-white w-full mt-6 bg-pink-600 p-3 rounded'> Sign Up</button>
      {/* <SocialSignIn/> */}
      {/* <SocialSignIn /> */}
      <p className='mt-12 text-sm font-light'>Have an account? 
         <span
          onClick={() => setUiState('signIn')}
          role='button'
          className='cursor-pointer text-pink-600'
        > Sign in
      </span>
      </p>
    </div>
  )
}

