import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import TelegramParser from './utils/telegramParser'

import Mainbar from './components/Mainbar'
import Subbar from './components/Subbar'

import './css/framework.css'
import './css/list.css'

const App = () => {
    const [data, setData] = useState([] as any[])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get('https://telegram.projectbs.cn/cenc')
        setData(new TelegramParser(response.data).parseList())
    }

    if (!data.length) return (<div>loading...</div>)

    return (
        <div>
            <Mainbar
                time={`${moment.unix(data[0].time / 1000).format('MM/DD HH:mm')} ${data[0].reportNum ? '正式测定' : '自动测定'}`}
                epicenter={data[0].epicenter}
                depth={data[0].depth}
                magnitude={data[0].magnitude}
            />

            {
                data.map((item: any, index: number) => {
                    if (index === 0 || !item.reportNum) return

                    return (<Subbar
                        key={index}
                        time={`${moment.unix(item.time / 1000).format('MM/DD HH:mm')} ${item.depth >= 150 ? '深源' : ''}`}
                        epicenter={item.epicenter}
                        depth={item.depth}
                        magnitude={item.magnitude}
                    />)
                })
            }
        </div>
    )
}

export default App