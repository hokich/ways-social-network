import styles from "./ProfileImage.module.scss"

import cn from "classnames"

import noAvatarImage from "../../../assets/no_avatar.png"
import {PhotosType} from "../../../types/photos.type"

interface ProfileImageProps {
  photo: PhotosType
  alt?: string
  size?: "small" | "large"
  round?: boolean
  className?: string
}

const ProfileImage = ({photo, size, alt = "", round = false, className}: ProfileImageProps) => {
  let imageUrl: string | null = null
  switch (size) {
    case "small":
      imageUrl = photo.small
      break
    case "large":
      imageUrl = photo.large
      break
  }

  const classes = cn(
    styles.root,
    round && styles.round,
    className
  )

  return (
    <div className={classes}>
      {imageUrl ? (
        <img src={imageUrl} alt={alt} className={styles.image}/>
      ) : (
        <img src={noAvatarImage} alt={alt} className={styles.image}/>
      )}
    </div>
  )
}

export default ProfileImage