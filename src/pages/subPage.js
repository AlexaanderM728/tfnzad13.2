import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Sub() {
    let query = useQuery();
    let x = parseFloat(query.get('x'));
    let y = parseFloat(query.get('y'));
    return <h2> {x} - {y} = {x - y}</h2>
}

export default Sub;
