import React, { useState } from 'react'

export default function Skills() {
    const [skills, setSkills] = useState([])

    function addSkill() {
        const skill = document.getElementById("txtSkill").value
        if (skills.includes(skill))
        {
            alert("Skill is already present!");
            return;
        }

        //skills.push(skill)
        setSkills([...skills, skill])
        // setSkills(skills)
    }

    function deleteSkill(idxToRemove) {
        if(window.confirm("Do you want to delete skill?"))
             setSkills(skills.filter((v, index) => index !== idxToRemove))
    }

    return (
        <>
            <h1>Skills</h1>
            Enter your skill :  <input type="text" id="txtSkill" />
            <button onClick={addSkill}>Add</button>
            <p></p>
            {skills.length > 0 &&
                <div>
                    <h3>Your Skills</h3>
                    <ul>
                        {
                            skills.map((skill, idx) =>
                                <li key={idx}>
                                    {skill} &nbsp;
                                    <button onClick={
                                        () => deleteSkill(idx)}>Del</button>
                                </li>)
                        }
                    </ul>
                </div>
            }
        </>
    )
}
