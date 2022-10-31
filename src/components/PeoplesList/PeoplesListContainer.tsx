import {useEffect} from "react"

import {
  useAppDispatch,
  useAppSelector
} from "../../redux/hooks"
import {
  getUsers,
  selectUsersIsFetching,
  selectUsersList
} from "../../redux/slices/usersSlice"
import PeoplesList from "./PeoplesList"
import Preloader from "../icons/Preloader"

const PeoplesListContainer = () => {
  const dispatch = useAppDispatch()

  const users = useAppSelector(selectUsersList)
  const isFetching = useAppSelector(selectUsersIsFetching)

  useEffect(() => {
    dispatch(getUsers(3, 26))
  }, [dispatch])

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

export default PeoplesListContainer