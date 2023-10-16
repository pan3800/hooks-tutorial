import { useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <indput value={nickName} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickName}
            </div>
        </div>
    )
}

export default Info;