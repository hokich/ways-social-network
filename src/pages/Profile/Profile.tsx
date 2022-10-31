import styles from "./Profile.module.scss"

import {ChangeEvent} from "react"

import ProfileStatus from "../../components/profile/ProfileStatus"
import ProfileImage from "../../components/profile/ProfileImage"
import {ProfileType} from "../../types/profile.type"

interface ProfileProps {
  profile: ProfileType
  status: string | null
  isOwner: boolean
  updateStatus: (status: string | null) => void
  savePhoto: (photoFile: File) => void
}

const Profile = ({profile, status, isOwner, updateStatus, savePhoto}: ProfileProps) => {

  const onMainImageSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      savePhoto(event.target.files[0])
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <ProfileImage className={styles.image} photo={profile.photos} size={"large"}/>
        {isOwner && <input type={"file"} onChange={onMainImageSelected}/>}
      </div>
      <div className={styles.mainInfo}>
        <span className={styles.nameText}>{profile.fullName}</span>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
}

export default Profile