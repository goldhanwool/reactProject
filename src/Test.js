import React from 'react';

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

export default Test;