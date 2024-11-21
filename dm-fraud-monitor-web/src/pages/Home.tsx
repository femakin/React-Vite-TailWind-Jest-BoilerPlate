import { useAuth } from "../contexts/AuthContext"
import ToggleBtn from "../components/ToggleBtn"

// import Navbar from '@/components/Navbar'
const Home = () => {

  const {login, user} = useAuth()

  const LoginUser = ()=>{

 /*     useAuth().login({'user': })  */
    login({user: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    }, token: 'token1234567'})

  }

  return (
    <div>
      {/* <Navbar/> */}
      <h1>
        Home
      </h1>
      <ToggleBtn />

      <div>
        <h1 onClick={()=> {LoginUser()}} >Login</h1>
        <p>{user.email}</p>
      </div>

    </div>
  )
}

export default Home
