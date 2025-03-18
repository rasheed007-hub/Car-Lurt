import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit perspiciatis voluptatibus tempore consectetur, voluptates, nobis doloremque iusto dolores iure tenetur! Commodi et nihil fugiat! Quo culpa vel magnam consequuntur.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis deserunt dolorum praesentium eius excepturi possimus velit neque rerum ratione quide</p>
        </div>
    </div>
  )
}

export default DescriptionBox