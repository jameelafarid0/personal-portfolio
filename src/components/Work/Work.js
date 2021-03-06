import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import workInfo from '../../fakeData/workInfo';
import Header from '../Header/Header';
import WorkDetails from '../WorkDetails/WorkDetails';
import './Work.css'

const Work = () => {
    const [projects, setProjects] = useState(workInfo);
    return (
        <div className="body3">
            <Header></Header>



            <div style={{marginLeft:"40px"}}>
                <Spring
                    from={{ opacity: 0, marginTop: -800 }}
                    to={{ opacity: 1, marginTop: 0 }}
                >
                    {props => (
                        <div style={props}>
                            <div className="d-flex  justify-content-center ">
                                <div className=" container-md  row mt-3 mb-5 pt-3" >
                                    {
                                        projects.map(project => <WorkDetails
                                            key={project.key}
                                            topics={project}

                                        ></WorkDetails>)
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </Spring>

            </div>



        </div>
    );
};

export default Work;

