import React from 'react'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import LocalAirportRoundedIcon from '@mui/icons-material/LocalAirportRounded';

export  function NextTrip() {
    return (
        <div className='NextTripMaster'>

            
            <div className='Tripcon1'>
            Easy and fast
                <h1> Book Your Next Trip in 3 Easy Steps</h1>
                <div className='Tripchild '>

                    <div className='only' >
                        
                        <div> <EditLocationRoundedIcon/></div>
                        <div>
                        <h3>Choose Destination</h3>
                        <p>Lorem ipsum dolor sit amet , consectutr adapsing elit uma, tortor tempus</p>
                        </div>
                        
                    </div>
                    <div className='only'>

                    <div> <PaidRoundedIcon/></div>
                        <div>
                        <h3>Make Payment</h3>
                        <p>Lorem ipsum dolor sit amet , consectutr adapsing elit uma, tortor tempus</p>
                        </div>
                        
                    </div>
                    <div className='only'>

                    <div> <LocalAirportRoundedIcon/></div>
                        <div>
                        <h3>Reach Airport on Selected Date</h3>
                        <p>Lorem ipsum dolor sit amet , consectutr adapsing elit uma, tortor tempus</p>
                        </div>
                        
                    </div>

                </div>


            </div>
            <div className='Tripcon2'>
                <div className="tripbox" >

                    <img className="TopSellingposter" alt="poster" src=" https://media.timeout.com/images/105237852/750/562/image.jpg" />
                    <p> Trip to Greece</p>
                    <p> 🤍 24 people going </p>

                </div>
            </div>


        </div>
    )
}
