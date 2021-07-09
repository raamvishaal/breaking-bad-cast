import React from 'react'
import Characteritem from './Characteritem'
import Spinner from '../ui/Spinner'
const charactergrid = ({items,isLoading}) => {
    return isLoading?<Spinner/>:
    (<section className="cards">{items.map((item)=>(
        <Characteritem key={item.char_id} item={item}></Characteritem>
    ))}</section>
    )
}

export default charactergrid
