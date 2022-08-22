import { useState } from 'react'
import { useEffect } from 'react'
import { userService } from '../../services/user/userService'
import TimeAgo from 'react-timeago'

export function ThreadMsgPreview({ msg }) {
  const [userMsg, setUserMsg] = useState(null)

  const loadUserMsg = async (id) => {
    if (!msg) return
    const user = await userService.getById(id)
    setUserMsg(() => user)
  }

  useEffect(() => {
    loadUserMsg(msg.userId)
  }, [])

  return (
    <section className="thread-msg-preview">
      <div className="container-msg">
        <div className="img-container">
          <img src={userMsg?.imgUrl || ''} alt="" className="img" />
        </div>

        <div className="name-time-container">
          <div className="fullname">
            <h3>{userMsg?.fullname}</h3>
          </div>
          <div className="time">
            <span>
              <TimeAgo date={msg.createdAt} />
            </span>
          </div>
        </div>
      </div>
      <div className="the-msg">
        <p>{msg.txt}</p>
      </div>
    </section>
  )
}
