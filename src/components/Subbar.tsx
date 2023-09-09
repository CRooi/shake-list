import calcMaxInt from '../utils/calcMaxInt'
import _ from '../assets/intColor.json'

const intColor: any = _

interface SubbarProps {
    time: string
    epicenter: string
    depth: number
    magnitude: number
}

const Subbar = ({ time, epicenter, depth, magnitude }: SubbarProps) => {
    const maxInt = calcMaxInt(magnitude, depth, epicenter)
    const maxIntColor = intColor[maxInt].bgcolor
    const maxIntStrokeColor = intColor[maxInt].strokeColor
    const epicenterFontSize = calcEpicenerFontSize(epicenter.length)

    return (
        <div className="subBar">
            <div className="subLeft">
                <div className="subTime">
                    { time }
                </div>

                <div className="subEpicenter" style={{fontSize: epicenterFontSize}}>
                    { epicenter }
                </div>

                <div className="subMagnitude">
                    M{ magnitude.toFixed(1) }
                </div>
            </div>

            <div className="subMaxInt" style={{backgroundColor: maxIntColor, border: `3px solid ${maxIntStrokeColor}`, fontFamily: 'OPPOSans-H !important'}}>
                { maxInt }
            </div>
        </div>
    )
}

const calcEpicenerFontSize = (length: number) => {
    if (length < 12) {
        return '20px'
    }else if (length >= 12 && length < 14){
        return '16px'
    }else if (length >= 14 && length <= 16){
        return '12px'
    }
}

export default Subbar