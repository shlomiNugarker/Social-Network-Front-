import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faHomeLgAlt,
  faUserFriends,
  faSuitcase,
  faSearch,
  faComment,
  faBell,
  faSortDown,
  faTh,
  faPlus,
  faImage,
  faVideo,
  faCalendarDays,
  faNewspaper,
  faEllipsis,
  faThumbsUp,
  faShare,
  faPaperPlane,
  faFaceSmile,
  faCompass,
  faUserGroup,
  faX,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faHomeLgAlt,
  faUserFriends,
  faSuitcase,
  faSearch,
  faComment,
  faBell,
  faSortDown,
  faTh,
  faPlus,
  faImage,
  faVideo,
  faCalendarDays,
  faNewspaper,
  faEllipsis,
  faThumbsUp,
  faShare,
  faPaperPlane,
  faFaceSmile,
  faCompass,
  faUserGroup,
  faX
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()