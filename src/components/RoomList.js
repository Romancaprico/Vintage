import React from 'react';
import Room from './Room';

export default function RoomList({rooms}) {
    if (rooms.length ===0){
    return (
        <div className="empty-search">
        <h3>No room matched for the parameter</h3>
        </div>
    )
    }
    return(
        <section className="roomlist">
    <div className='roomlist-center'>
    {
        rooms.map(item=> {
            return <Room key ={item.id} room={item}/>
        
        })}
    </div>
    </section>
    );
}
