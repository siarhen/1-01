import React from 'react';
import Icon from "../icon/Icon";

type OneSkillProps = {
    iconId: string;
}
export const OneSkill = (props:OneSkillProps) => {
    return (
        <div>
            <Icon iconId={props.iconId}/>
        </div>
    );
};

