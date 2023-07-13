import './MainSubtitle.css'

function MainSubtitle({ subtitle }) {
  return (
    <div className='main-subtitle'>
      <h2 className='main-subtitle__text'>{subtitle}</h2>
      <div className='main-subtitle__underline'></div>
    </div>
  )
}

export default MainSubtitle
