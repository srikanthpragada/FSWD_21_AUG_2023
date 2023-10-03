import React, { useState } from 'react'

export default function FetchGitUserInfo() {
    const [userId, setUserId] = useState("srikanthpragada")
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')

    function getInfo() {
        setMessage('')
        setData({})
        getUserInfo()
    }

    async function getUserInfo() {
        let response = await fetch(`https://api.github.com/users/${userId}`)
        if(response.ok) {
           let data = await response.json()
           setData(data)
        }
        else
          if(response.status === 404)
              setMessage("Sorry! Invalid userid")
          else
              setMessage("Sorry! Could not get details due to server error")
    }

    function updateUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" value={userId} onChange={updateUserId} />
            &nbsp;
            <span className="text-danger">{message}</span>
            <p></p>
            <button disabled={userId.length === 0} onClick={getInfo}>Get Info</button>

            <p></p>
            {
                data.name &&
                <div className="row">
                    <div className="col-sm-6">
                        {data.name}
                        <p></p>
                        {data.location}
                        <p></p>
                        {data.company}
                    </div>
                    <div className="col-sm-6">
                        <img style={{ width: '300px', height: '300px' }}
                            src={data.avatar_url} alt={data.name}
                            title={data.name}
                            className="image image-responsive" />
                    </div>
                </div>
            }

        </>
    )
}
