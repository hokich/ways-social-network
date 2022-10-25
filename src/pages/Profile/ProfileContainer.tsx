import {useEffect} from "react"
import {useParams} from "react-router-dom"

import {withAuthRedirect} from "../../components/hoc/withAuthRedirect"
import {
  getProfile,
  getStatus,
  selectIsFetching,
  selectProfile,
  selectStatus,
  updateStatus
} from "../../redux/slices/profileSlice"
import Profile from "./Profile"
import Preloader from "../../components/icons/Preloader"
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import {selectMeUserId} from "../../redux/slices/authSlice"

const ProfileContainer = () => {
  const dispatch = useAppDispatch()

  const profile = useAppSelector(selectProfile)
  const status = useAppSelector(selectStatus)
  const isFetching = useAppSelector(selectIsFetching)
  const meUserId = useAppSelector(selectMeUserId)

  const updateStatusHandler = (status: string | null) => dispatch(updateStatus(status))

  let {userId} = useParams<{ userId?: string }>()

  useEffect(() => {
    if (!userId && meUserId) {
      dispatch(getProfile(meUserId))
      dispatch(getStatus(meUserId))
    } else {
      dispatch(getProfile(Number(userId)))
      dispatch(getStatus(Number(userId)))
    }
  }, [])

  return (
    <>
      {(isFetching || !profile) ? (
        <Preloader width={70} height={70}/>
      ) : (
        <Profile profile={profile} status={status} updateStatus={updateStatusHandler}/>
      )}
    </>
  )
}

export default withAuthRedirect(ProfileContainer)