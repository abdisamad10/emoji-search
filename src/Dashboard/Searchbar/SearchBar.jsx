import { PureComponent } from "react";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
    render () {
        return (
            <div className="Search-input">
                <input className="input-text" placeholder="Search Emoji" />
            </div>
        )
    }
}