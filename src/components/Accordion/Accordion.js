import React from 'react';

const Accordion = () => {
    return (
        <div className='container'>
            <div className="accordion" id="accordionExample">
                <h2 className='text-center my-3'>Questions</h2>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How react works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React is a library. It works in declarative code. It is mostly used to make ui's in a predictable and clean code. React can also be used to make single page websites. React uses building blocks called Components to make their websites
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Props vs state?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Props are used to pass Data from one component to another, and state is passed within the component only!State is mutable but props immutable. Props is read only and state is read and write. Stateless components can have props and statless components cant have state
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;