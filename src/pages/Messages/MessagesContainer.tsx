import {withAuthRedirect} from "../../components/hoc/withAuthRedirect"
import Messages from "./Messages"

const MessagesContainer = () => {
  return <Messages/>
}

export default withAuthRedirect(MessagesContainer)