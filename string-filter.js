/**

 node-red-contrib-string-filter/string-filter.js - Copyright 2024 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function StringNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var stringfilter = config.stringfilter; //the string should be entered in config section
        var isEnabled = false; // Variable to track whether the node is enabled or disabled

        // Initialize status
        node.status({ fill: "red", shape: "ring", text: "Disabled" });

        // Handle incoming messages
        node.on('input', function(msg) {
            // Check if input is true and topic is 'enable'
            if (msg.payload === true && msg.topic === 'enable') {
                isEnabled = true;
                node.status({ fill: "green", shape: "dot", text: "Enabled" });
            }
            // Check if input is false and topic is 'disable'
            else if (msg.payload === false && msg.topic === 'disable') {
                isEnabled = false;
                node.status({ fill: "red", shape: "ring", text: "Disabled" });
            }
            // If node is enabled, allow all messages to pass through
            else if (isEnabled) {
                var m = msg.payload.toLowerCase();
                var sf = stringfilter.toLowerCase();
                var stringFound = m.search(sf);

                if (stringFound > 0) {
                    node.send(msg);
                    node.status({ fill: "green", shape: "ring", text: "Valid" });
                } else {
                    node.status({ fill: "red", shape: "ring", text: "Invalid" });
                } 
            }
        });
    }
    RED.nodes.registerType("string-filter", StringNode);
}

