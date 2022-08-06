import React from "react"
import ReactDOM from "react-dom/client"

const container = document.getElementById("root")
class Index extends React.Component {
  render() {
    return (<div>index
      ddd

    </div>)
  }
}

const root = ReactDOM.createRoot(container)
root.render(<Index />)