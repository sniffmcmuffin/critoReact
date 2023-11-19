import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../scss/api.scss'

const NewsDeets = () => {

    const [NewsDeets, setDeets] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getDeets()
    }, [])

    const getDeets = async () => {

        if (id !== '' | id !== 'undefined') {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            // if (result.status == 200)
            //     setDeets(await result.json())
            if (result.status === 200) {
                const data = await result.json()
                setDeets(Array.isArray(data) ? data : [data])
            }
        }
    }
    return (
        <section className="NewsDetails">
            <div className="container">
                {
                    NewsDeets.map(deets => (
                        <Link key={deets.id} to={`/news/${deets.id}`}>

                            <div className="form-column">
                                <h3>{deets.title}</h3>
                                <p>{deets.published}</p>
                                <p>{deets.category}</p>
                                <p>{deets.author}</p>

                                <img src={deets.imageUrl} style={{ width: '758px', height: '500px' }} alt="25 mars" />
                                <div className="image">
                                </div>
                                {/* <p>{deets.content}</p> */}
                            </div>
                        </Link>
                    ))
                }

                <div className="right-side">
                    <h1>Recent Posts</h1>
                    <p>How To Blow Through Capital At An Incredible Rate</p>
                    <p>Design Studios That Everyone Should Know About?</p>
                    <p>How did we get 1M+ visitors in 30 days without anything!</p>
                    <p>Figma On Figma: How We Built Our Website Design System</p>
                </div>
            </div>
        </section>
    )
}

export default NewsDeets