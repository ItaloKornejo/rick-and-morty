import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const CardResident = ({ url }) => {

    const [resident, setResident] = useState()
    useEffect(() => {
        
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])

    const renderStatus = (status) =>{
        switch(status){
            case 'Alive': return <i id='i__status' className='bx bx-shield-plus' style={{'color': 'green' }}></i>
            case 'Dead': return <i id='i__status' className='bx bxs-skull' style={{'color': 'red' }}></i>
            case 'unknown': return <i id='i__status' className='bx bx-question-mark' style={{'color': 'yellow' }}></i>
        }
    }
    
    return (
        <article className='content-card'>
            {
                resident ? <> 
                <div className='img-card'>
                <img src={resident?.image} alt="" />
                <div className='status-resident'>
                    {renderStatus(resident?.status)}
                    <span>{resident?.status}</span>
                </div>
            </div>
            <section className='info-resident'>
                <h3>{resident?.name}</h3>
                <hr />
                <ul>
                    <li><span>Specie </span>{resident?.name}</li>
                    <li><span>Origin </span>{resident?.origin.name}</li>
                    <li>
                        <span>Episodes </span>{resident?.episode.length}

                    </li>
                </ul>
            </section>
            {/* <a>
                <i className='bx bx-right-arrow-alt'></i>
            </a> */}
                
                </> : <Loader/>
            }

            

        </article>
    )
}

export default CardResident