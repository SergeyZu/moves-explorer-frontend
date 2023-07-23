import './SavedCardList.css'
import SavedCard from '../SavedCard/SavedCard'

function SavedCardList() {
  return (
    <section className='saved-card-list'>
      <ul className='saved-card-list__list'>
        <SavedCard />
        <SavedCard />
        <SavedCard />
      </ul>
    </section>
  )
}

export default SavedCardList
