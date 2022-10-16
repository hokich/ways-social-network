import {useEffect} from "react"
import {connect} from "react-redux"

import {getUsers} from "../../redux/slices/usersSlice"
import PeoplesList from "./PeoplesList"
import Preloader from "../icons/Preloader"
import {RootState} from "../../redux/store"
import {UserType} from "../../types/user.type"

interface PeoplesListContainerProps {
  users: UserType[]
  isFetching: boolean
  totalCount: number
  getUsers: (currentPage: number, perPage: number) => void
}

const PeoplesListContainer = (
  {
    users,
    isFetching,
    totalCount,
    getUsers
  }: PeoplesListContainerProps) => {

  useEffect(() => {
    getUsers(1, 10)
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
  getUsers
})(PeoplesListContainer)