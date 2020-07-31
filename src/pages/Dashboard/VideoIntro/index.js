import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import './index.css'
export default function VideoIntro(props) {
    const history = useHistory();
    const user_session = useSelector(state => state.user_session);
    // checkLogin(history, user_session);

    const [introTitle, setIntroTitle] = useState('Dashboard');
    const switchIntro = (event) => {
        console.log(event.target.innerText);
        const selectors = document.getElementsByClassName("subject_selector");
        console.log(selectors);
        for (let index = 0; index < selectors.length; index++) {
            const element = selectors[index];
            element.getElementsByTagName('button')[0].style = "background-color: -internal-light-dark-color";
        }
        event.target.style = "background-color: #ffffff; margin-right: -1px;";
        setIntroTitle(event.target.innerText);
    }
    return (
        <div className="video_intro">
            <h2>&nbsp;&nbsp;Instructional Videos</h2>
            <div className="container">
                <div className="intro_subject">
                    <ul>
                        <li className="subject_selector"><button onClick={switchIntro}>Dashboard</button></li>
                        <li className="subject_selector"><button onClick={switchIntro}>Metrics</button></li>
                        <li className="subject_selector"><button onClick={switchIntro}>Notices</button></li>
                        <li className="subject_selector"><button onClick={switchIntro}>Network</button></li>
                        <li className="subject_selector"><button onClick={switchIntro}>Form Builder</button></li>
                        <li className="subject_selector"><button onClick={switchIntro}>Tiles</button></li>
                    </ul>
                </div>
                <div className="intro_content">
                    <div className="intro_text">
                        <h2>{introTitle}</h2>
                        <p className="block-with-text">Lorem ipsum dolor sit amet, ad meliore recusabo mandamus mea, ut nec melius postulant. Eam ut eros quando legere, ex vel ignota gubergren euripidis. Te numquam blandit petentium vel, scripta maiestatis consetetur ei sed. Liber iusto abhorreant at sea, ea qui graeci intellegat. Sonet causae adipisci ut nec. Eos veritus corrumpit comprehensam ut.
                        Tempor pertinax maiestatis eu has, qui ut sale feugait sententiae. Sed perpetua corrumpit ea. Platonem disputationi te mei. Nam rebum deserunt ei, debet noster ex nec, quem tacimates voluptaria pro et. Veniam bonorum vis at, at consul omnium tamquam mea.

                        Sea utroque inciderint temporibus no. Id eam lorem tempor essent. In ius audire tacimates salutandi, ei clita deleniti eum. Eos cu sanctus nonumes.

                        Dicam vivendum praesent cu mel, ex sed commune constituto concludaturque, consetetur signiferumque cu quo.</p>
                    </div>
                    <div className="inner_video">
                        <video className="video_content" controls></video>
                    </div>
                </div>
            </div>
        </div>
    );
}