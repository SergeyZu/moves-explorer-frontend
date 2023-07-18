import { Link } from 'react-router-dom'
import './AccountButton.css'

function AccountButton() {
  return (
    <Link to='/profile'>
      <button className='account-button'>Аккаунт</button>
    </Link>
  )
}

export default AccountButton
