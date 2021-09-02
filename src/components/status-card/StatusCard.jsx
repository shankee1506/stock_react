import React from 'react'
import './statuscard.css'

const StatusCard = props => {
    return (
        
        
        <div className='status-card'>
            
        <div className="status-card__info">
            <div>
            <h1>Sales details</h1>
            </div>   
           
            <div className="status-card__info">
            <div className="status-card__info">
                    <h3>CASH</h3>
                    <p>{props.cash}</p>
                </div>

                <div className="status-card__info">
                    <h3>CREDIT</h3>
                    <p>{props.credit}</p>
                </div>

                <div className="status-card__info">
                    <h3>CHECK</h3>
                    <p>{props.check}</p>
                </div>

                <div className="status-card__info">
                    <h3>TOTAL</h3>
                    <p>{props.total}</p>
                </div>
            </div>
            
            </div>
        </div>
       
    )
}

export default StatusCard