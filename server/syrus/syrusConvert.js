export default class SyrusConvert {
    time(data) {
        const week = parseInt(data.substr(0, 4))
        const day = parseInt(data.substr(4, 1))
        const seconds = parseInt(data.substr(5, 5))
        const time = (new Date((new Date(1980, 0, 6)).getTime() + ((week * 7 + day) * 24 * 60 * 60 + seconds) * 1000)).getTime()
        return new Date(time - 18000000).getTime()
    }
    latitude(data) {
        const sign = data.substr(0, 1)
        const integer = parseInt(data.substr(1, 2))
        const decimal = parseFloat('0.' + data.substr(3, 5))
        return (sign == '-' ? -1 : 1) * (integer + decimal)
    }
    longitude(data) {
        const sign = data.substr(0, 1)
        const integer = parseInt(data.substr(1, 3))
        const decimal = parseFloat('0.' + data.substr(4, 5))
        return (sign == '-' ? -1 : 1) * (integer + decimal)
    }
    speed(data) {
        /* kph */
        return Math.round(parseInt(data) * 1.60934)
    }
    getCardinal(angle) {
        //given "0-360" returns the nearest cardinal direction "N/NE/E/SE/S/SO/O/NO/N" 
        //easy to customize by changing the number of directions you have 
        var directions = 8;

        var degree = 360 / directions;
        angle = parseInt(angle) + degree / 2;

        if (angle >= 0 * degree && angle < 1 * degree)
            return "Norte";
        if (angle >= 1 * degree && angle < 2 * degree)
            return "Noreste";
        if (angle >= 2 * degree && angle < 3 * degree)
            return "Este";
        if (angle >= 3 * degree && angle < 4 * degree)
            return "Sureste";
        if (angle >= 4 * degree && angle < 5 * degree)
            return "Sur";
        if (angle >= 5 * degree && angle < 6 * degree)
            return "Suroeste";
        if (angle >= 6 * degree && angle < 7 * degree)
            return "Oeste";
        if (angle >= 7 * degree && angle < 8 * degree)
            return "Noroeste";
        //Should never happen: 
        return "Norte";
    }
}
