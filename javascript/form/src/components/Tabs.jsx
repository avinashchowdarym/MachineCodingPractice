import React, { Component, useState } from 'react'
import Profile from './Profile'
import Activity from './Activity'
import Settings from './Settings'

const TABDATA = [
    {
        name: 'Profile',
        Component: Profile
    },
    {
        name: 'Activity',
        Component: Activity
    },
    {
        name: 'Settings',
        Component: Settings
    }
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [errors,setErrors] = useState({});
    const [data,setData] = useState({});
    const handleTab = (index) => {
        setActiveTab(index);
    }
    const ActiveBodyComponent = TABDATA[activeTab].Component;
    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='flex justify-center p-5 m-2 gap-4'>

                {
                    TABDATA.map((tab, index) => {
                        return (
                            <div key={index} className={`cursor-pointer border-1 p-3 w-30  ${index === activeTab ? 'bg-gray-100' : ''}`} onClick={() => handleTab(index)} >
                                {tab.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-center border-1 bg-blue-200 h-100 w-100'>
                <ActiveBodyComponent data={data} setData={setData} errors={errors} setErrors={setErrors}/>
            </div>
        </div>

    )
}

export default Tabs