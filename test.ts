let a: number = 4;
let b: string = 'wedfwefwe';
let c = true

let d: string[] = ['ds', 'df']

let e: any = 3

function test(a: string): number | string {
    return '3'
}

const test2 = (a:number):number => {
    return a*2;
}

const test3 = (a:number):void => {
    return
}

d = d.map((x: string) => x.toLowerCase())

type Point = {
    x: number,
    y: number
};

type D3Point = Point & {
    z: number
}

type stringOrNumber = string | number;

const f = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint
}

interface IPoint {
    x: number,
    y: number
};

interface IPoint {
    d:number
};

interface I3DPoint extends IPoint {
    z:number
}

function countCoord(coord: Point) {

}

function countCoordI(coord: IPoint) {

}

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString)
    } else if (typeof id === 'string') {
        id.toUpperCase()
    }
}

function getSam(a:number | number[]) {
    if(Array.isArray(a)) {
        
    }
}

const x: undefined = undefined
const z: null = null;