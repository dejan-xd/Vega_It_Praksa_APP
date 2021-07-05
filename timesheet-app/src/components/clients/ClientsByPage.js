import React, { useState, useEffect } from 'react'
import Client from './Client'
import { getClients } from '../../services/ClientService'

function ClientsByPage() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        getClients()
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
