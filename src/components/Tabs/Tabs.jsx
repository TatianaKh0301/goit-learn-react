import React, {Component} from "react";

export class Tabs extends Component {
    state = {
        activeTabIdx: 0,
    };

    shouldComponentUpdate(nextProps, NextState) {
        return  NextState.activeTabIdx !== this.state.activeTabIdx;
    }

    setActiveTabIdx = idx => {
        this.setState({ activeTabIdx: idx});
    };

    render(){
        console.log(`Re-render @ ${Date.now()}`);
        const { activeTabIdx } = this.state;
        const { items } = this.props;
        const activeTab = items[activeTabIdx];
        return(
            <>
                <div>
                    {items.map((item, idx) => (
                        <button
                            type="button"
                            key={item.label}
                            onClick={() => this.setActiveTabIdx(idx)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div>
                    <h2>{activeTab.label}</h2>
                    <p>{activeTab.content}</p>
                </div>
            </>
        );
    }
}

