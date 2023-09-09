// 实验性算法，仅供学习与参考，切勿搬用至其他项目。

const calcMaxInt = (magnitude: number, depth: number, epicenter: string): number => {
    let a: number, b: number, c: number, d: number

    if (epicenter == undefined) {
        a = 3.944
        b = 1.071
        c = 1.2355678010148
        d = 7

        return Math.floor(a + b * magnitude + 0 * magnitude * magnitude - c * Math.log(d * (depth + 25) / 40) + 0.2)
    }

    if (epicenter.includes('四川') || epicenter.includes('西藏') || epicenter.includes('青海')) {
        a = 3.6113
        b = 1.4347
        c = 1.6710348780191
        d = 13
    } else if (epicenter.includes('新疆')) {
        a = 3.3682
        b = 1.2746
        c = 1.4383398946154
        d = 9
    } else {
        a = 3.944
        b = 1.071
        c = 1.2355678010148
        d = 7
    }

    if (epicenter.includes('内江市') || epicenter.includes('宜宾市')) {
        a = 3.6588
        b = 1.3626
        c = 1.5376630426267
        d = 13
    }

    return Math.floor(a + b * magnitude + 0 * magnitude * magnitude - c * Math.log(d * (depth + 25) / 40) + 0.2)
}

export default calcMaxInt