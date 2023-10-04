import { PureComponent } from "react";
import EmojiResultsRow from "./EmojisResultRow";

export default class EmojiResuls extends PureComponent {
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