import React from 'react'
import PropTypes from "prop-types";
import withError from './withError';
import loggerFunc from './loggerservice';

// const Hero = (props) => {
//     const { heroName } = props
//     let design = ''
//     try {
//         if (heroName === 'Joker') {
//             throw new Error('Not a hero')
//         }
//         design = <div>{heroName}</div>
//     }
//     catch (err) {
//         design = <span>Error occurred: Not a hero</span>
//     }
//     return design
// }
const Hero = (props) => {
    console.log('Hero rendered')
    const { heroName } = props
    if (heroName === 'Joker') {
        throw new Error('Not a hero')
    }
    return <div>{heroName}</div>
}
Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}
export default withError(Hero, loggerFunc)
//export default Hero