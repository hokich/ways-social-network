import styles from "./Profile.module.scss"

import ProfileStatus from "../../components/profile/ProfileStatus"
import {ProfileType} from "../../types/profile.type"

interface ProfileProps {
  profile: ProfileType
}

const Profile = ({profile}: ProfileProps) => (
  <div className={styles.root}>
    {profile.userId} {profile.fullName}
    <ProfileStatus status={"Hello my friend!!!"}/>
  </div>
)

export default Profile