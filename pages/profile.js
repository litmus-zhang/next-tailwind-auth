import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import SignIn from '../components/signin'
import SignUp from '../components/SignUp'


const initialState = {
    email: '',
    password: '',
    authCode: ''
}

export default function Profile() {
    const [UiState, setUiState] = useState(null)
    const [FormState, setFormState] = useState(initialState)
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkUser()
        async function checkUser() {
            try {
               const user = await Auth.currentAuthenticatedUser()
                
                    console.log(user)
                    setUser(user)
                    setUiState('signedIn')

            } catch (error) {
                setUser(null)
                setUiState('signIn')
                
            }
        }
    }, [])
    const onChange = (e) => {
        setFormState({
            ...FormState,
            [e.target.name]: e.target.value,
        })
    }
    
  return (
      <div
      className='bg-gray-50 min-h'
      >
          <div
              className='flex flex-col items-center'>
              <div className='max-w-full sm-w-540 mt-14'>
                  <div className='bg-white py-14 px-16 shadow-form rounded'>
                  
                   {
                    UiState === 'signIn' && (
                        <SignIn
                            onChange={onChange}
                            setUiState={setUiState}
                        />
                    )
                      }
                      {
                          UiState === ' signUp' && (
                              <SignUp
                              onChange={onChange}
                              setUiState={setUiState}
                              />
                          )
                      }
                    
                {
                    UiState === 'signedIn' && (
                        <div>
                            <p
                            className='text-xl'
                            >😍Welcome, {user.attributes.email} </p>
                            <button
                                className='text-white w-full mt-10 bg-pink-600 p-3  rounded'
                                onClick={() => {
                                    Auth.signOut();
                                    setUiState('signIn')
                                    setUser(null)
                            }}
                            >
                                Sign Out
                            </button>
                        </div>
                    )
                }
                    </div>
                </div>
          </div>
    </div>
  )
}
