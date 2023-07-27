import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ handleChange, handleClick }) {
  return (
    <form className='search-form'>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          onChange={handleChange}
        />
        <button className='search-form__find-button' onClick={handleClick} />
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
