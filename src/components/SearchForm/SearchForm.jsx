import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({
  searchRequest,
  onChange,
  onSubmit,
  isFilterOn,
  // setIsFilterOn,
  onChangeShortFilmToggle,
}) {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          value={searchRequest}
          onChange={onChange}
        />
        <button className='search-form__find-button' />
      </div>
      {/* <FilterCheckbox isFilterOn={isFilterOn} setIsFilterOn={setIsFilterOn} /> */}
      <FilterCheckbox
        isFilterOn={isFilterOn}
        onChangeShortFilmToggle={onChangeShortFilmToggle}
      />
    </form>
  )
}

export default SearchForm
