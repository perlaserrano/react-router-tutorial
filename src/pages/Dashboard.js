import {useNavigate} from 'react-router-dom'

export default function Dashboard() {
  const Navigate = useNavigate()
  const handleClick = () => {
    Navigate('/')

  }

  return (
    <div>
        
        <h1>Dasbhoard</h1>

        <button onClick={handleClick}>
          Logout
        </button>
        
     </div>
  )
}
