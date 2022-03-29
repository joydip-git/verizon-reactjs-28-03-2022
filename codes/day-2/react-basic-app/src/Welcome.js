import React from 'react'
//props={message:gretting}
export function Welcome(args) {
    console.log(args)
    return (
        <div id='welcomeDiv'>
            <span> {args.message}</span>
            <div>
                {args.name}<br />{args.val}
            </div>
            <br />
            <button onClick={args.valueHandler}>Say Hello</button>
        </div>
    )
}
/**
 * {
 *    type:'div',
 *    ref:null,
 *    key:null,
 *    props:{
 *     id:'welcomeDiv',
 *     message:'welcome to react js',
 *     name:'Joydip',
 *     val:10,
 *     children:[RE,RE]
 *    }
 * }
 */