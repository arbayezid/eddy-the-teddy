import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Eddy Teddy | ${title}`
    }, [title])
}

export default useTitle;