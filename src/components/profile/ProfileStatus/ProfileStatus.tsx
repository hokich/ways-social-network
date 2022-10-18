import styles from "./ProfileStatus.module.scss"

import {ChangeEvent, useState} from "react"

interface ProfileStatusProps {
  status: string | null
  updateStatus: (status: string | null) => void
}

const ProfileStatus = ({status, updateStatus}: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(status)

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    updateStatus(currentStatus)
    setEditMode(false)
  }

  const changeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(event.target.value)
  }

  return (
    <>
      {!editMode ? (
        <span onClick={activateEditMode}>{status || "Добавить статус"}</span>
      ) : (
        <input type="text" value={currentStatus ? currentStatus : ""} onChange={changeStatusHandler} onBlur={deactivateEditMode} autoFocus style={{background: "#FFFFFF"}}/>
      )}
    </>
  )
}

export default ProfileStatus