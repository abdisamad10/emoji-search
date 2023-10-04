import emojiList from "./emojiList.json";

function Filter(searchText, maxREsults) {
    return emojiList
    .filter((emoji)=> {
        if(emoji.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        ) {
            return true;
        }
        return false;
    })
    .slice(0, maxREsults);
}

export default Filter;