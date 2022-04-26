import { useEffect, useState } from "react";

const useSingleService = serviceId => {
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `https://stark-beach-29284.herokuapp.com/service/${serviceId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return [service]
}

export default useSingleService; 