import React, { useState, useEffect } from 'react'
import Client from './Client'
import axios from 'axios'

function ClientsByPage() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/Clients')
            .then(res => {
                setClients(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="accordion-wrap clients">
            {
                clients.map(client =>
                    <Client
                        key={client.clientId}
                        client={client}
                    />)
            }
        </div>
    )
}

export default ClientsByPage