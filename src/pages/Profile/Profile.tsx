import styles from "./Profile.module.scss"

import ProfileStatus from "../../components/profile/ProfileStatus"
import {ProfileType} from "../../types/profile.type"

interface ProfileProps {
  profile: ProfileType
  status: string | null
  updateStatus: (status: string | null) => void
}

const Profile = ({profile, status, updateStatus}: ProfileProps) => (
  <div className={styles.root}>
    {profile.userId} {profile.fullName}
    <ProfileStatus status={status} updateStatus={updateStatus}/>
  </div>
)

export default Profile