import { useEffect, useState } from "react"

//4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5 refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 loading
    const [loading, setLoading] = useState(false)

    //8 tratando erros
    const [error, setError] = useState(null)

    //desafio delete
    const [itemID, setItemID] = useState(null)
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setMethod(method)
            setItemID(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6 loading
            setLoading(true)

            try {
                const res = await fetch(url)

            const json = await res.json()

            setData(json)
            } catch (error) {
                console.log(error.message)

                setError("Houve um erro ao carregar os dados")
            }
            
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    // 5 refatorando post

    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method === "POST") {

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions);

                json = await res.json();
                

            }else if(method === "DELETE"){

                const deleteUrl = `${url}/${itemID}`

                const res = await fetch(deleteUrl, config);

                json = await res.json();
            }
            setCallFetch(json)
        }
        httpRequest()
    }, [config, method, url]);

    return { data, httpConfig, loading, error }
}