import './SearchForm.css'
import FindButton from '../Buttons/FindButton/FindButton'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__row'>
        <input className='search-form__input' type='text' placeholder='Фильм' />
        <FindButton />
      </div>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm
