import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-4xl">Answer Of the Questions!</h2>
            <div className=' flex items-center justify-center m-20'>

                <div className='grid grid-cols-1 gap-5'>
                    <div className='bg-slate-800 text-white w-1/2'>
                        <h2 className='text-3xl font-bold mb-10'>'How will we improve the performance of a React Application?</h2>
                        <p>To optimize React rendering, we need to make sure that components receive only necessary props. It will let us control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
                    </div>
                    <div className='bg-slate-800 text-white w-1/2'>
                        <h2 className='text-3xl font-bold mb-10'>'What are the different ways to manage a state in a React application?</h2>
                        <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.</p>
                    </div>
                    <div className='bg-slate-800 text-white w-1/2'>
                        <h2 className='text-3xl font-bold mb-10'>'What is a unit test? Why should write unit tests?</h2>
                        <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
                    </div>
                    <div className='bg-slate-800 text-white w-1/2'>
                        <h2 className='text-3xl font-bold mb-10'>'Why you do not set the state directly in React?</h2>
                        <p>If we update it directly, calling the setState() afterward may just replace the update we made.
                            When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            we will lose control of the state across all components.</p>
                    </div>
                    <div className='bg-slate-800 text-white w-1/2'>
                        <h2 className='text-3xl font-bold mb-10'>'How does prototypical inheritance work?</h2>
                        <p> prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;