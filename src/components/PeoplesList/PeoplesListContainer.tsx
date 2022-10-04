import {connect} from "react-redux"

import {useEffect} from "react"

import {setUsers, toggleIsFetching} from "../redux/slices/usersSlice"
import PeoplesList from "./PeoplesList"
import Preloader from "../icons/Preloader"
import {RootState} from "../redux/store"
import {UserType} from "../../types/user.type"
import {usersAPI} from "../../api/usersApi"

interface PeoplesListContainerProps {
  users: UserType[]
  isFetching: boolean
  totalCount: number
  setUsers: (value: UserType[]) => void
  toggleIsFetching: (value: boolean) => void
}

const PeoplesListContainer = (
  {
    users,
    isFetching,
    totalCount,
    setUsers,
    toggleIsFetching,
  }: PeoplesListContainerProps) => {

  useEffect(() => {
    toggleIsFetching(true)
    usersAPI.getUsers().then(data => {
      toggleIsFetching(false)
      setUsers(data.items)
    })

  }, [])

  return (
    <>
      {isFetching ? (
        <Preloader width={70} height={70}/>
      ) : (
        <PeoplesList peoples={users}/>
      )}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.items,
  isFetching: state.users.isFetching,
  totalCount: state.users.totalCount
})

export default connect(mapStateToProps, {
  setUsers,
  toggleIsFetching
})(PeoplesListContainer)