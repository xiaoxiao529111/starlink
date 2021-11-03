import React, {Component} from "react";
import { Button } from "antd";

class SatelliteList extends Component {
    render() {
        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn" size="large">
                    Track on the map
                <hr/>
                </Button>
            </div>
        );
    }
}

export default SatelliteList;