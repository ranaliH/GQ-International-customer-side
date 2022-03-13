import FeaturedInfo from "../../../../../components/common/adminView/admincomponent/featuredinfo/FeaturedInfo";
import "./overview.css"
import Edet from "../../../../../components/common/adminView/admincomponent/charts/Edet";
//import {userData} from "../../../../../dummyData";
import Widgetsm from "../../../../../components/common/adminView/admincomponent/widgetSmall/Widgetsm";
import WidgetLg from "../../../../../components/common/adminView/admincomponent/widgetLarge/WidgetLg";

export default function employeee() {
    return (
        <div className="overview">
           <FeaturedInfo/>



            <Edet/>

            <div className="HomeWidgets">
                <Widgetsm/>
                <WidgetLg/>
            </div>






        </div>
    )
}
