import { PureComponent } from "react";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
    handleText =(event) => {
         this.props.handleChange(event);
    }
    render () {
        return (
            <div className="Search-input">
                <input className="input-text" placeholder="Search Emoji" onChange={this.handleText}/>
            </div>
        )
    }
}