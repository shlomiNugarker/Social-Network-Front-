import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Posts } from '../cmps/posts/Posts'
import { RightSideBar } from '../cmps/RightSideBar'
import { LeftSideBar } from '../cmps/LeftSideBar'
import { setCurrPage, setNextPage } from '../store/actions/postActions'

export const Feed = (props) => {
  const { loggedInUser } = useSelector((state) => state.userModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrPage('home'))
    dispatch(setNextPage(1))
  }, [])

  if (!loggedInUser)
    return (
      <section className="feed-load">
        <div className="loading">Loading...</div>
      </section>
    )
  // console.log('render Feed')
  return (
    <section className="feed-page">
      <LeftSideBar />
      <Posts />
      <RightSideBar />
    </section>
  )
}
