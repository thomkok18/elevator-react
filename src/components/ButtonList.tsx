import React, {useState} from "react";
import Button from "./Button";

interface Props {
    floors: number
}

const Buttonlist = (props: Props) => {
    const [location, setLocation] = useState('Outside');

    if (location === 'Outside') {
        return (
            <div className='btn-list'>
                <Button onClick={() => setLocation('Inside')} text={'▲'}/>
                <Button onClick={() => setLocation('Inside')} text={'▼'}/>
            </div>
        );
    } else {
        const buttons: any[] = [];

        for (let i = 0; i <= props.floors; i++) {
            buttons.push(<Button key={i} onClick={() => setLocation('Outside')} text={i.toString()}/>);
        }

        return (
            <div className='btn-list'>
                {buttons}
            </div>
        );
    }
};

export default Buttonlist;