import { useState, useEffect } from "react"


function Clock() {

    const [currentTime, setCurrentTime] = useState('');
    const dayWeek = ["Dom","Lun","Mar","Miérc","Juev","Vier","Sáb"];

    useEffect(() => {
        const day = dayWeek[new Date().getDay()];
        const hours = String(new Date().getHours()).padStart(2, "0");
        const min = String(new Date().getMinutes()).padStart(2, "0");

        setCurrentTime( day + ' ' + hours + ':' + min );
    }, []);

    return (
        <>
            <div className='topbar__item topbar__item__3'>{currentTime}</div>
        </>
    )
}

export default Clock