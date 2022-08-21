import React from "react";
import { Link } from "react-router-dom";
import './_ShowCvBtn.scss';

interface Props{
    url:string
}
export const ShowCvBtn = ({url}: Props) => {
    return(
        <div className={'component-ShowCvBtn'}>
            <Link className='ShowCvBtn-Btn' to={url}>Pokaż Cv</Link>
        </div>
    )
}
