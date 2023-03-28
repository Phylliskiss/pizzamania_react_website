import React from 'react'
import Card from './Card'

const PizzaTypes = () => {
  return (
    <div className="container-fluid pizzatypes">
            <div className="text-center">
                <h3> Pizza Types</h3>
            </div>
        
        <div class="row">
            <Card imgSrc="images/carissa-gan-_0JpjeqtSyg-unsplash.jpg" title="Olives Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur cumque minima, alias ratione recusandae, dolorum, dolor asperiores atque velit praesentium totam tempore ab perspiciatis facere corrupti. Deleniti, ipsam dolorem."/> 
            <Card imgSrc="images/thomas-tucker-MNtag_eXMKw-unsplash.jpg" title="Okinawa Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur cumque minima, alias ratione recusandae, dolorum, dolor asperiores atque velit praesentium totam tempore ab perspiciatis facere corrupti. Deleniti, ipsam dolorem."/>
            <Card imgSrc="images/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg" title="Brazil Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur cumque minima, alias ratione recusandae, dolorum, dolor asperiores atque velit praesentium totam tempore ab perspiciatis facere corrupti. Deleniti, ipsam dolorem."/>
            <Card imgSrc="images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" title="Pepperoni Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur cumque minima, alias ratione recusandae, dolorum, dolor asperiores atque velit praesentium totam tempore ab perspiciatis facere corrupti. Deleniti, ipsam dolorem."/>
           
           
        </div>
    </div>
    


  )
}

export default PizzaTypes
