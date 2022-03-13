import "./FeaturedInfo.css"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Orders</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">60</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Deficit</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">16</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Payemnt Overdue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">43</span>
               </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">on Hold</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">64</span>
                </div>
            </div>

        </div>
    )
}
