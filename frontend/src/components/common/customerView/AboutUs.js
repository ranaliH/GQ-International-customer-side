import React, {useState} from "react";
import gqlogo2 from "../../../images/GQAbout.png";
import './AboutUs.css';
import AddExpenseBG from "../../../images/addexpense.jpg";


const AboutUs = () =>{

    return(
        <div
            className="mainback"
            style={{
                backgroundImage: `url(${AddExpenseBG})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                color: "#fff",
            }}
        >

            <div className="container emp-profile" style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
                <form method="">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">

                                <h1 style={{fontWeight:"bolder"}}>OUR STORY</h1>
                                <br/>
                                <div className="box"
                                     style={{
                                         backgroundImage: `url(${gqlogo2})`,
                                         backgroundSize: "cover",
                                         backgroundColor:"rgba(0,0,0,0.6)"
                                     }}>
                                <h2 className="h2" style={{fontWeight:"bolder"}}>Inside GQ-International</h2>
                                <p className="para" style={{fontWeight:"bold"}}>

                                    <br/>
                                    We are the exclusive dealer / distributor for all brands spare parts in Sri Lanka and a fully owned subsidiary of GQ-International PVT(Ltd). Hence, we are a global member company of every prestigious Groups.
                                    Embracing the traditions and passing it on to future generations,
                                    while reaching global destinations, GQ-International is the only automobile company in the country to be 100%
                                    owned by its own company company, the GQ-International.
                                    This global backing makes our company a truly global corporate entity, contributing to its customers, corporates, society and country.

                                    <hr/>
                                    GQ-International: <p style={{fontWeight:'bold',color:'red'}}> Specialist in Auto door handles </p>
                                    RANKINGS:<p style={{fontWeight:'bold',color:'red'}}><span>1/10</span></p>
                                    Web site:<p style={{fontWeight:'bold',color:'red'}}><a href="/">GQ-International</a></p>
                                    Our Products:<p style={{fontWeight:'bold',color:'red'}}> <a href="/items">Products of GQ-International</a></p>
                                    Hot Line:<p style={{fontWeight:'bold',color:'red'}}> 0112344568 / 0727787788 </p>
                                    Follow Us On:<p style={{fontWeight:'bold',color:'red'}}><a href="https://www.instagram.com/">instagram</a> <br/><a href="https://www.twitter.com/">Twitter</a></p>
                                    Location:<p style={{fontWeight:'bold',color:'red'}}> 231/10 2/3, <br/>
                                    Panchikawatta Rd,
                                    Colombo 10 </p>

                                    </p>
                                </div>
                                <br/>

                                <div className="box1">
                                    <div>
                                    <h1 style={{width:'100%',color:'#B22222',fontWeight:'bold'}}>OUR VISION</h1>
                                    <p className="box1p1">“TO BECOME THE MOST RESPECTED & ADMIRED TOTAL AUTOMOBILITY<br/>
                                        SOLUTIONS PROVIDER IN THE COUNTRY”</p>
                                    </div>

                                <div className="verticalLine">
                                    <div className="divM">
                                        <h1 className="box1h1">MISSION</h1>
                                        <p className="box1p2">“TO CREATE DELIGHTED LIFE-TIME CUSTOMERS & <br/> LIFETIME DELIGHTED EMPLOYEES”</p>
                                    </div>
                                </div>



                            </div>
                        </div>


                        </div>
                    </div>

                </form>

            </div>
</div>

    )
}

export default AboutUs;