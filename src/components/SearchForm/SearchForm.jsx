import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onChange, onFormSubmit, isFilterOn }) {
  return (
    <form className='search-form' onSubmit={onFormSubmit}>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          onChange={onChange}
        />
        <button className='search-form__find-button' />
      </div>
      <FilterCheckbox isFilterOn={isFilterOn} />
    </form>
  )
}

export default SearchForm
