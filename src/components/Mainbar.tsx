import calcMaxInt from '../utils/calcMaxInt'
import _ from '../assets/intColor.json'

const intColor: any = _

interface MainbarProps {
    time: string
    epicenter: string
    depth: number
    magnitude: number
}

const Mainbar = ({ time, epicenter, depth, magnitude }: MainbarProps) => {
    const maxInt = calcMaxInt(magnitude, depth, epicenter)
    const maxIntColor = intColor[maxInt].bgcolor
    const maxIntStrokeColor = intColor[maxInt].strokeColor

    return (
        <div id="mainBar">
            <div id="mainLeft">
                <div id="mainTime">
                    { time }
                </div>

                <div id="mainEpicenter">
                    { epicenter }
                </div>

                <div id="mainDepth">
                    <span style={{fontSize: '18px'}}>深度:</span>{ depth }<span style={{fontSize: '18px'}}>&nbsp;km</span>
                </div>

                <div id="mainMagnitude">
                    <span style={{fontSize: '18px'}}>M</span>{ magnitude.toFixed(1) }
                </div>
            </div>

            <div id="mainMaxInt" style={{backgroundColor: maxIntColor, border: `5px solid ${maxIntStrokeColor}`, fontFamily: 'OPPOSans-H !important'}}>
                { maxInt }
            </div>
        </div>
    )
}

export default Mainbar