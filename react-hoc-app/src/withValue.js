import { PureComponent } from "react";
//HOC
function withValue(Comp) {

    class WithValue extends PureComponent {
        // static count = 0
        // constructor() {
        //     super()
        //     WithValue.count++
        //     console.log(WithValue.count)
        // }
        state = {
            value: 0
        }
        increaseValueHandler = () => {
            this.setState(
                (currentState) => {
                    return {
                        value: currentState.value + 1
                    }
                }
            )
        }
        render() {

            //console.log(this.props)
            return <Comp value={this.state.value} valueHandler={this.increaseValueHandler} {...this.props} />
        }
        componentDidMount() {
            console.log('mounted')
        }
        componentWillUnmount() {
            console.log('component unmounted')
        }
    }
    return WithValue
}
export default withValue

// function withX(OC) {
//     function Wrapper() {
//         return <OC />
//     }
//     return Wrapper
// }
