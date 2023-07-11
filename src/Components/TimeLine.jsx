import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
  {
    data: "2019",
    status: "status",
    statusB: "Ready for Dev",
    statusE: "In Progress",
    image:
      "https://plus.unsplash.com/premium_photo-1667434314666-8cc801bbe280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    data: "2020",
    status: "status",
    statusB: "In Progress",
    statusE: "Done",
    image:
      "https://plus.unsplash.com/premium_photo-1667434314666-8cc801bbe280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
  }
  // Add more objects with data, status, statusB, statusE, and image properties
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : "";
    const curImage = EXAMPLE[curIdx].image;

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "60%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={EXAMPLE.map((x) => x.data)}
          />
        </div>
        <div className="text-center">
          {/* Display image and status */}
          <img
            src={curImage}
            alt="Timeline"
            style={{ width: "200px", height: "150px", float: "Left" }}
          />
          <br />
          {curStatus} - {prevStatus}
        </div>
      </div>
    );
  }
}
