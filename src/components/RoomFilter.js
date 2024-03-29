import React from 'react';
import {useContext} from 'react';
import{RoomContext} from "../context";
import Title from '../components/Title';
//get all unique values
const getUnique =(item,value)=>{
    return[...new Set(item.map(item=>item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const{ 
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        Breakfast,
        pet
    }= context;
    //get unique types
    let types = getUnique(rooms,'type');
    //add all
    types=['all', ...types];
    //map to jsx
    types = types.map((item,index)=>{
        return(
         <option value={item} key={index}>{item}</option> 
    );
    });
    let people =getUnique (rooms,'capacity');
    people = people.map((item,index) =>{
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
        <section className='filter-container'>
        <Title title ='search rooms'/>
        <form className ="filter-form">
        {/*Select type*/}
        <div className="form-group">
        <label htmlfor="type">Room Type</label>
        <select
        name="type"
        id="type"
        value={type}
        className="form-control"
        onChange={handleChange}
        >
        {types}
        </select>
        </div>
        {/*end select type*/}

         {/*guests*/}
         <div className="form-group">
         <label htmlfor="capacity">Guest</label>
         <select
         name="capacity"
         id="capacity"
         value={capacity}
         className="form-control"
         onChange={handleChange}
         >
         {people}
         </select>
         </div>
         {/*end guests*/}
         {/*room price*/}
         <div className ='form-group'>
         <label htmlfor='price'>
         room price {price}</label>
         <input type='range' name='price' min={minPrice}
         max={maxPrice} id='price' value={price} 
         onchange={handleChange} className='form-control'/>
         </div>
         {/*end of room price*/}
         {/*size*/}
         <div className='form-group'>
         <label htmlFor='size'>Room size</label>
         <div className='size-input'>
         <input type="number" name="minSize" id="size" value={minSize}
         onChange={handleChange} className='size-input'/>
         
         <input type="number" name="maxSize" id="size" value={maxSize}
         onChange={handleChange} className='size-input'/>
         </div>
         </div>
         {/*end of size*/}
        </form>
        </section>
    );
}
  