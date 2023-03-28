import React from 'react'

const Card = ( { imgSrc, title, description}) => {
  return (
    <div className="col-md-3 mycards">
            <div className="card mycards" style={{width: "20rem"}}>
                <img src={imgSrc} className="card-img-top" alt="Olives Pizza"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                     <a href="/" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
  )
}

export default Card
