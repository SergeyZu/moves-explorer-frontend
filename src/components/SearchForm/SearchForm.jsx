import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__row'>
        <input className='search-form__input' type='text' placeholder='Фильм' />
        <button className='search-form__find-button' />
      </div>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm
