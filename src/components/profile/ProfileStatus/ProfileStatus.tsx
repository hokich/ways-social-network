import styles from "./ProfileStatus.module.scss"
import {useState} from "react";

interface ProfileStatusProps {
  status: string | null
}

const ProfileStatus = ({status}: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => setEditMode(false)

  return (
    <>
      {!editMode ? (
        <span onClick={activateEditMode}>{status}</span>
      ) : (
        <input type="text" value={status ? status : ""} onBlur={deactivateEditMode} autoFocus/>
      )}
    </>
  )
}

export default ProfileStatus