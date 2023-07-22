import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {
    const data =
    [
      {
      id:1,
      img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tittle:"Long sleeve graphic T-shirt",
      isNew:true,
      oldPrice:19,
      price:122,
      },
      {
        id:2,
        img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        tittle:"Hat",
        isNew:true,
        oldPrice:19,
        price:1200,
        },
        {
          id:3,
          img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
          tittle:"Long sleeve graphic T-shirt",
          isNew:true,
          oldPrice:19,
          price:900,
          },
          {
            id:4,
            img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle:"Hat",
            isNew:true,
            oldPrice:19,
            price:1200,
            },

  ];
  return (
    <div className='list'>{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List;
