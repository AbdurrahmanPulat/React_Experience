import React from 'react'

const Tab = ({ children,activeTab, setActiveTab}) => {
    

   
    return (
        <div>
            <nav>
                {children.map((tab, index) =>(
                    <button
                    onClick={()=>setActiveTab(index)}
                    className= {activeTab === index ? 'bg-red-100': 'bg-blue-100'}
                    key={index}>
                    
                    {tab.props.title}
                    </button>
                ))}

            </nav>
            {children[activeTab]}
        </div>
    )
}

Tab.Panel = function ({ children }) {

    return (
        <div>{children}</div>
    )
}

export default Tab
