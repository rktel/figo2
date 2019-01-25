import Convert from './syrusConvert'
const convert = new Convert()

export default class SyrusParser{
    constructor(message) {
        this._eventCode = parseInt(message.substr(4, 2))
        this._updateTime = convert.time(message.substr(6, 10))
        this._latitude = convert.latitude(message.substr(16, 8))
        this._longitude = convert.longitude(message.substr(24, 9))
        this._speed = convert.speed(message.substr(33, 3))
        this._heading = parseInt(message.substr(36, 3))
        this._fixMode = parseInt(message.substr(39, 1))
        this._ageData = parseInt(message.substr(40, 1))
        this._direction = convert.getCardinal(message.substr(36, 3))

        let extendData = message.split(';')

        this._IO=extendData.find(el => el.startsWith('IO') )
        this._SV=extendData.find(el => el.startsWith('SV') ) 
        this._BL=extendData.find(el => el.startsWith('BL') ) 
        this._DOP=extendData.find(el => el.startsWith('DOP') ) 
        this._CF=extendData.find(el => el.startsWith('CF') ) 
        this._AL=extendData.find(el => el.startsWith('AL') ) 
        this._AC=extendData.find(el => el.startsWith('AC') ) 
        this._OF=extendData.find(el => el.startsWith('OF') ) 
        this._OD=extendData.find(el => el.startsWith('OD') ) 
        this._OC=extendData.find(el => el.startsWith('OC') ) 
        this._OI=extendData.find(el => el.startsWith('OI') ) 
        this._OL=extendData.find(el => el.startsWith('OL') ) 
        this._OT=extendData.find(el => el.startsWith('OT') ) 
        this._OH=extendData.find(el => el.startsWith('OH') ) 
        this._OU=extendData.find(el => el.startsWith('OU') ) 
        this._OY=extendData.find(el => el.startsWith('OY') ) 
        this._OX=extendData.find(el => el.startsWith('OX') ) 
        this._OE=extendData.find(el => el.startsWith('OE') ) 
        this._OA=extendData.find(el => el.startsWith('OA') ) 
        this._YT=extendData.find(el => el.startsWith('YT') ) 
        this._YO=extendData.find(el => el.startsWith('YO') ) 
        this._YD=extendData.find(el => el.startsWith('YD') ) 
        this._YE=extendData.find(el => el.startsWith('YE') ) 
        this._OJ=extendData.find(el => el.startsWith('OJ') ) 
        this._OB=extendData.find(el => el.startsWith('OB') ) 
        this._OG=extendData.find(el => el.startsWith('OG') ) 
        this._OK=extendData.find(el => el.startsWith('OK') ) 
        this._OM=extendData.find(el => el.startsWith('OM') ) 
        this._ON=extendData.find(el => el.startsWith('ON') ) 
        this._OO=extendData.find(el => el.startsWith('OO') ) 
        this._OR=extendData.find(el => el.startsWith('OR') ) 
        this._OV=extendData.find(el => el.startsWith('OV') ) 
        this._YB=extendData.find(el => el.startsWith('YB') ) 
        this._YF=extendData.find(el => el.startsWith('YF') ) 
        this._YH=extendData.find(el => el.startsWith('YH') ) 
        this._YI=extendData.find(el => el.startsWith('YI') ) 
        this._YJ=extendData.find(el => el.startsWith('YJ') ) 
        this._YL=extendData.find(el => el.startsWith('YL') ) 
        this._YM=extendData.find(el => el.startsWith('YM') ) 
        this._OZ=extendData.find(el => el.startsWith('OZ') ) 
        this._YN=extendData.find(el => el.startsWith('YN') ) 
        this._OS=extendData.find(el => el.startsWith('OS') ) 
        this._YA=extendData.find(el => el.startsWith('YA') ) 
        this._YU=extendData.find(el => el.startsWith('YU') ) 
        this._YC=extendData.find(el => el.startsWith('YC') ) 
        this._OP=extendData.find(el => el.startsWith('OP') ) 
        this._OQ=extendData.find(el => el.startsWith('OQ') ) 
  
    }
    track(Place) {
        return {
            EventCode: this._eventCode,
            Latitude: this._latitude,
            Longitude: this._longitude,
            Speed: this._speed,
            Heading: this._heading,
            Direction: this._direction,
            Altitude: this._AL,
            UpdateTime: this._updateTime,
            FixMode: this._fixMode,
            AgeData: this._ageData,
            ServerTimeReceive: (new Date()).getTime(),
            Place,
            // EXTENDS
            IO:    this._IO,
            SV:    this._SV,
            BL:    this._BL,
            DOP:   this._DOP,
            CF:    this._CF,
            //AL:    this._AL,
            AC:    this._AC,
            OF:    this._OF,
            OD:    this._OD,
            OC:    this._OC,
            OI:    this._OI,
            OL:    this._OL,
            OT:    this._OT,
            OH:    this._OH,
            OU:    this._OU,
            OY:    this._OY,
            OX:    this._OX,
            OE:    this._OE,
            OA:    this._OA,
            YT:    this._YT,
            YO:    this._YO,
            YD:    this._YD,
            YE:    this._YE,
            OJ:    this._OJ,
            OB:    this._OB,
            OG:    this._OG,
            OK:    this._OK,
            OM:    this._OM,
            ON:    this._ON,
            OO:    this._OO,
            OR:    this._OR,
            OV:    this._OV,
            YB:    this._YB,
            YF:    this._YF,
            YH:    this._YH,
            YI:    this._YI,
            YJ:    this._YJ,
            YL:    this._YL,
            YM:    this._YM,
            OZ:    this._OZ,
            YN:    this._YN,
            OS:    this._OS,
            YA:    this._YA,
            YU:    this._YU,
            YC:    this._YC,
            OP:    this._OP,
            OQ:    this._OQ

        }
    }

    get heading() {
        return this._heading
    }
    get speed() {
        return this._speed
    }
    get altitude() {
        return this._altitude
    }
    get longitude() {
        return this._longitude
    }
    get latitude() {
        return this._latitude
    }
    get updateTime() {
        return this._updateTime
    }
    get eventCode() {
        return this._eventCode
    }

    get fixMode(){
        return this._fixMode
    }
    get ageData(){
        return this._ageData
    }
    get direction() {
        return this._direction
    }

}