import {setProfile, setStatus} from "./profileSlice"
import {store} from "../store"
import {ProfileType} from "../../types/profile.type"

const profile: ProfileType = {
  userId: 1,
  aboutMe: "test",
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: null,
  fullName: "Test",
  photos: {
    small: null,
    large: null,
  }
}

test("profile status should by set", () => {
  store.dispatch(setStatus("test"))

  const state = store.getState().profile

  expect(state.status).toBe("test")
})

test("profile data should by set", () => {

  store.dispatch(setProfile(profile))

  const state = store.getState().profile

  expect(state.profile).toEqual(profile)
})