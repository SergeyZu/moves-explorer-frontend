import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onChange, onSubmit, isFilterOn, setIsFilterOn }) {
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
      <FilterCheckbox isFilterOn={isFilterOn} setIsFilterOn={setIsFilterOn} />
    </form>
  )
}

export default SearchForm
