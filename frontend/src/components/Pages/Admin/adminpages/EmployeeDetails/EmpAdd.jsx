import FeaturedInfo from "../../../../../components/common/adminView/admincomponent/featuredinfo/FeaturedInfo";
import "./overview.css"
import Eadd from "../../../../../components/common/adminView/admincomponent/charts/Eadd";
//import {userData} from "../../../../../dummyData";
import Widgetsm from "../../../../../components/common/adminView/admincomponent/widgetSmall/Widgetsm";
import WidgetLg from "../../../../../components/common/adminView/admincomponent/widgetLarge/WidgetLg";
export default function EmpAdd() {
    return (
        <div className="overview">
            <FeaturedInfo/>



            <Eadd/>
            <div className="HomeWidgets">
                <Widgetsm/>
                <WidgetLg/>
            </div>






        </div>
    )
}
