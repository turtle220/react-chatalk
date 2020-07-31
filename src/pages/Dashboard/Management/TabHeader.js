import React from "react";

export default function TabHeader(props) {
    const handleClick = (e) => {
        if (props.onChanged) props.onChanged(e, props.id)
    }
    return (
        <div className={`tab-header ${props.selected ? 'selected' : 'unselected'}`} onClick={handleClick} >
            <table style={{ height: '100%', minWidth: '250', fontSize: 14}}>
                <tbody>
                    <tr style={{ height: '50%' }}>
                        <td style={{ width: '1%', minWidth: 100, paddingTop: 10 }} rowSpan="2" align="center">
                            {props.icon}
                        </td>
                        <td style={{ fontSize: 18 }} align="left" valign="bottom">
                            {props.value}
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign='top' ><label style={{ paddingRight: 20 }}>{props.description}</label></td>
                    </tr>
                </tbody>
            </table>
            <section style={{ display: props.selected ? 'block' : 'block', backgroundColor: props.selected ? 'rgb(30, 255, 255)' : 'rgb(204, 204, 204)', height: 2, zIndex: 100 }}></section>
        </div>
    );
}
