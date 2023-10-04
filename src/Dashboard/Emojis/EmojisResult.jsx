import { PureComponent } from "react";
import EmojiResultsRow from "./EmojisResultRow";
import ClipboardJS from "clipboard";

export default class EmojiResuls extends PureComponent {
    componentDidMount (){
        this.ClipboardJS = new ClipboardJS(".copy-it");
    }

    componentWillUnmount() {
        this.ClipboardJS.destroy();
    }
    render () {
        const {emojiData} = this.props;
        return (
            <div className="component-emoji-results">
            {emojiData.map((emoji) => (
                    <EmojiResultsRow 
                        key={emoji.title}
                        symbol={emoji.symbol}
                        title={emoji.title}
                    />
            ))
            }

            </div>
        )
    }
}