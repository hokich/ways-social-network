import styles from "./ProfileStatus.module.scss"

import {ChangeEvent, useEffect, useState} from "react"

interface ProfileStatusProps {
  status: string | null
  updateStatus: (status: string | null) => void
}

const ProfileStatus = ({status, updateStatus}: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(status)

  useEffect(() => {
    setCurrentStatus(status)
  }, [status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(currentStatus)
  }

  const changeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(event.target.value)
  }

  return (
    <>
      {!editMode ? (
        <span onClick={activateEditMode}>{status || "Добавить статус"}</span>
      ) : (
        <input
          type="text"
          value={currentStatus ? currentStatus : ""}
          onChange={changeStatusHandler}
          onBlur={deactivateEditMode}
          style={{background: "#FFFFFF"}}
          autoFocus
        />
      )}
    </>
  )
}

export default ProfileStatus