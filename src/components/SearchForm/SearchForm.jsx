import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

// function SearchForm({ placeholder, handleChange, handleClick }) {
function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__row'>
        <input
          className='search-form__input'
          type='text'
          // placeholder={placeholder}
          // onChange={handleChange}
        />
        <button className='search-form__find-button' />

        {/* <button className='search-form__find-button' onClick={handleClick} /> */}
      </div>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm
