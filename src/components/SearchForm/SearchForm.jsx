import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onInputChange, onFormSubmit }) {
  return (
    <form className='search-form' onSubmit={onFormSubmit}>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          onChange={onInputChange}
        />
        <button className='search-form__find-button' />
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
