import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onChange, onSubmit }) {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          onChange={onChange}
        />
        <button className='search-form__find-button' />
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
