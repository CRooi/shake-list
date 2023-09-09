export default class TelegramParser {
    private msg: string

    constructor(msg: string) {
        this.msg = msg
    }

    public parseList(): any {
        let returnMsg: any = []
        const msg = this.msg
        const msgArray:any = msg.split(' /// ')
        msgArray.map((item: any) => {
            item = item.split(' ')
            if(item == '') return
            item.map((i: any | string, index: number) => {
                if(i == '//') item[index] = null
            })
            returnMsg.push({
                updated: Number(item[0]),
                title: item[1],
                reportNum: Number(item[2]),
                epicenter: item[3],
                epicenterLat: Number(item[4]),
                epicenterLng: Number(item[5]),
                magnitude: Number(item[6]),
                depth: Number(item[7]),
                maxInt: item[8],
                time: Number(item[9]),
                id: item[10]
            })
        })
        return returnMsg
    }
}