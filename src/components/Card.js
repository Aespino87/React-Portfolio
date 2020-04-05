import React from 'react';
import CardInfo from '../components/CardInfo'


function Card(props) {

    return(
        
        <div className="d-inline-block project-card col-md-3" onClick={(e) => props.click(props.item)}>
            <img className="project-card-img" src={props.item.imgSrc} alt={props.item.imgSrc}/> 
            { props.item.selected && <CardInfo title={props.item.title}  subTitle={props.item.subTitle} /> }
        </div>

    )
}

export default Card;