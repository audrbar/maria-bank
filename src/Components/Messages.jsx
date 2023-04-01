import { useContext } from "react";
import { Global } from "./GlobalContext";

function Messages() {

    const { messages } = useContext(Global);

    return (
        <div>
            {
                messages.map(m => (
                    <div key={m.id} className="fixed inset-0 bg-gray-500 bg-opacity-75">
                        <div className="fixed flex items-center justify-center inset-1/4 bg-white bg-opacity-75 text-center text-gray-500 text-xl rounded-lg shadow-xl p-6 md:inset-1/3" role="alert">{m.text}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Messages;