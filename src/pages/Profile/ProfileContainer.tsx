import {useEffect} from "react"
import {connect, ConnectedProps} from "react-redux"
import {useParams} from "react-router-dom"

import {RootState} from "../../redux/store"
import {withAuthRedirect} from "../../components/hoc/withAuthRedirect"
import {getProfile} from "../../redux/slices/profilePageSlice"
import Profile from "./Profile"
import Preloader from "../../components/icons/Preloader"
import {compose} from "@reduxjs/toolkit";

const ProfileContainer = ({profile, isFetching, getProfile}: ProfileContainerProps) => {
  const {userId} = useParams<{ userId?: string }>()

  useEffect(() => {
    if (userId) {
      getProfile(userId)
    }
  }, [])

  return (
    <>
      {(isFetching || !profile) ? (
        <Preloader width={70} height={70}/>
      ) : (
        <Profile profile={profile} />
      )}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
})

const connector = connect(mapStateToProps, {getProfile})

type ProfileContainerProps = ConnectedProps<typeof connector>

export default compose(
  connector,
  withAuthRedirect
)(ProfileContainer) as React.ComponentType