# Node-RED Contrib String Filter

The `node-red-contrib-string-filter` node is a Node-RED module that enables filtering of messages based on a user-defined string. This node allows users to define a specific string pattern, and only messages containing this pattern will be allowed to pass through the node.

## Installation

1. Make sure you have Node-RED installed. You can install it via npm if you haven't already:

    ```bash
    npm install -g node-red
    ```

2. Install the `node-red-contrib-string-filter` node either through the Node-RED palette manager or via npm:

    ```bash
    npm install node-red-contrib-string-filter
    ```

3. Restart your Node-RED instance to ensure the new node is loaded.

## Usage

1. Drag and drop the "String Filter" node from the Node-RED palette onto your flow canvas.
2. Configure the node by entering the string you want to filter for in the node settings.
3. Connect the node to your input source (e.g., an MQTT node, an inject node, etc.).
4. Deploy your flow.

## Node Configuration

- **String to Filter**: Enter the string that you want the node to filter for. Messages containing this string will be allowed to pass through.
- **Enable/Disable**: You can enable or disable the node dynamically by sending a boolean message with `true` to enable and `false` to disable.

## Author

This Node-RED node was created by [Harshad Joshi](https://github.com/hj91).

## License

This project is licensed under the [GPL-3.0 License](LICENSE).

## GitHub Repository

You can find the source code and report issues on [GitHub](https://github.com/hj91/node-red-contrib-string-filter).

## Applications

- Filtering messages based on specific keywords or phrases.
- Controlling the flow of messages based on the presence or absence of certain strings.
- Implementing conditional logic in your Node-RED flows.


