import React form 'react';

import {BrowserRouter as Router, Route, Routes} form 'react-router-dom';

import Home form './pages/Home';

import Postdetail form './pages/PostDetail';

import AddPost form './components/AddPost';

function App(){
    return (
        <Router>
        <div>
            <Routes>
                <Route path="element ={<Home/>}"/>  
                          
                <Route/>            
                <Route/>            
            </Routes>        
        </div>
        </Router>
    )
}