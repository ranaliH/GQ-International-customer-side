import React from 'react'
import "./Topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import hehe from  '../../../../../images2/hehe.jpeg';
//import adminlg from '../../images2/gq-logo2.png';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">GQ INTERNATIONAL</span>
                
            </div>
            <div className="topRight">
            <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className ="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
            <Language/>
            <span className ="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
            <Settings/>
            </div>

            <img src={hehe} className="topAvatar" alt=""/>
            </div>
            </div>
        </div>
    )
}
