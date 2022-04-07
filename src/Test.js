import React from 'react';
import styled from 'styled-components';


const Test =  (props) => { 
    const my_list = props.list;
    console.log(my_list)
    return (
        <div className="lists"> 
        { //자바스크립트 시작
            my_list.map((list, index) => {
                console.log(index);
                return(<div className='list-item' key={index}>{list}</div>)
            })
        }     
        </div>
    )
}

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;


export default Test;