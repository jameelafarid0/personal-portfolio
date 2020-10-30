import React from 'react';

const WorkDetails = ({topics}) => {
    const { name, description, image, github, live } = topics;
    return (
        <div className=" card box   mt-5 pt-3  ml-5 ">
            <div  class="card" style={{width: "18rem"}}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 style={{color: 'black'}} class="card-title">{name}</h5>
                    <p style={{color: 'black'}} class="card-text">{description}</p>
                    <div className="d-flex ">
                        <a href={github} class="btn btn-primary">github</a>
                        <a href={live} class="btn btn-primary ml-3">website link</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkDetails;