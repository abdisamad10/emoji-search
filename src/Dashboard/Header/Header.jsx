import { PureComponent } from "react";

import './Header.css';

export default class Header extends PureComponent {
    render () {
        return (
           <header className="header">
             <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                  alt=""
                  width="32"
                  height="32"
                  />
                  Emojis Search
                  <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                  alt=""
                  width="32"
                  height="32"
                  />

           </header>
        )
    }

}