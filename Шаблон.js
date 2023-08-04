const [isCheckboxActive, setIsCheckboxActive] = useState(false)

function handleCheckboxClick(value) {
  setIsCheckboxActive(value)
}

;<SearchForm
  // handleSearch={setSearchRequest}
  handleCheckboxClick={handleCheckboxClick}
  // searchRequest={searchRequest}
  checkbox={isCheckboxActive}
/>
