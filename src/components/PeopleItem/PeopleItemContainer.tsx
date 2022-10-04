import {connect} from "react-redux"

import {RootState} from "../../redux/store"
import {toggleFollowingProgress, unfollow, follow} from "../../redux/slices/usersSlice"
import {usersAPI} from "../../api/usersApi"
import PeopleItem from "./PeopleItem"
import {UserType} from "../../types/user.type"

interface PeopleItemProps {
  user: UserType
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  toggleFollowingProgress: ({userId, isFetching}: { userId: number, isFetching: boolean }) => void
}

const PeopleItemContainer = ({
                               user,
                               followingInProgress,
                               follow,
                               unfollow,
                               toggleFollowingProgress
                             }: PeopleItemProps) => {

  const followHandler = () => {
    toggleFollowingProgress({userId: user.id, isFetching: true})
    usersAPI.follow(user.id).then(data => {
      if (data.resultCode === 0) {
        follow(user.id)
      }
      toggleFollowingProgress({userId: user.id, isFetching: false})
    })
  }

  const unfollowHandler = () => {
    toggleFollowingProgress({userId: user.id, isFetching: true})
    usersAPI.unfollow(user.id).then(data => {
      if (data.resultCode === 0) {
        unfollow(user.id)
      }
      toggleFollowingProgress({userId: user.id, isFetching: false})
    })
  }

  return <PeopleItem
    id={user.id}
    name={user.name}
    status={user.status}
    followed={user.followed}
    photo={user.photos.small}
    isLoading={followingInProgress.some(id => id === user.id)}
    follow={followHandler}
    unfollow={unfollowHandler}
  />
}

const mapStateToProps = (state: RootState) => ({
  followingInProgress: state.users.followingInProgress
})

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress
})(PeopleItemContainer)