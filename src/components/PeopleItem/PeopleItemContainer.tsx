import {connect} from "react-redux"

import {RootState} from "../../redux/store"
import {unfollow, follow} from "../../redux/slices/usersSlice"
import PeopleItem from "./PeopleItem"
import {UserType} from "../../types/user.type"

interface PeopleItemProps {
  user: UserType
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const PeopleItemContainer = (
  {
    user,
    followingInProgress,
    follow,
    unfollow,
  }: PeopleItemProps) => {

  const followHandler = () => {
    follow(user.id)
  }

  const unfollowHandler = () => {
    unfollow(user.id)
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
})(PeopleItemContainer)