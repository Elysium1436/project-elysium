import Header from './containers/Header/Header'
import BackgroundDecoration from './containers/BackgroundDecoration/BackgroundDecoration'

function App() {

  return (
    <div className="bg-grid-lines bg-50px bg-background-main-color overflow-visible">
      <Header />
      <div className="tv-screen-filter"></div>
      <BackgroundDecoration linePosition="top" positionClasses="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <BackgroundDecoration linePosition="bottom" positionClasses="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
    </div>
  )
}

export default App
