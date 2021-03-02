# node-red-contrib-tello

[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/node-red-contrib-tello.svg)](https://badge.fury.io/js/node-red-contrib-tello)
![npm](https://img.shields.io/npm/dt/node-red-contrib-tello.svg)

This node uses [Tello SDK 2.0](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf) commands.

## Thanks for your donation

If you want to support this free project. Any help is welcome. You can donate by clicking one of the following here:

[![Donate](https://d1iczxrky3cnb2.cloudfront.net/button-medium-blue.png)](https://donorbox.org/donation-for-node-red-contrib-tello-1?default_interval=o)

## Install

### npm

```
$ cd ~/.node-red
$ npm install node-red-contrib-tello
```

### from Node-RED

- Select `Manage Pallete`
- Click `Add Node` tab
- Type `node-red-contrib-tello`
- Install

## All Nodes

|       node       | about                                                                         |
| :--------------: | ----------------------------------------------------------------------------- |
|     takeoff      | Send command `takeoff` to Tello                                               |
|       land       | Send `land` to Tello                                                          |
|        up        | Send `up` to Tello. If Distance form is blank, it refers to `msg.payload`,    |
|       down       | Send `down` to Tello. If Distance form is blank, it refers to `msg.payload`.  |
|       left       | Send `left` to Tello. If Distance form is blank, it refers to `msg.paylaod`.  |
|      right       | Send `right` to Tello. If Distance form is blank, it refers to `msg.payload`. |
|    clockwise     | Send `cw` to Tello. If Angle form is blank, it refers to `msg.payload`.       |
| counterclockwise | Send `ccw` to Tello. If Angle form is blank, it refers to `msg.payload`.      |
|       flip       | Send `flip` to Tello. Direction required to selectbox.                        |
|      speed       | Send `speed` to Tello. If Speed form is blank, it refers to `msg.paylaod`.    |
|      state       | Send state commands to Tello. These commands select select from select.       |
|     streamon     | Send `streamon` to Tello                                                      |
|    streamoff     | Send `streamoff` to Tello                                                     |

## Example Flows

![Flow Example](https://github.com/Miura55/node-red-contrib-tello/raw/master/images/flow_sample.png)

[example_flow.json](https://github.com/Miura55/node-red-contrib-tello/raw/master/examples/example_flow.json)

## Streaming Sample

This flow needs setup [node-red-contrib-ffmpeg](https://flows.nodered.org/node/node-red-contrib-ffmpeg)

![Streaming Sample](https://github.com/Miura55/node-red-contrib-tello/raw/master/images/streaming_sample.png)

[stream_flow.json](https://github.com/Miura55/node-red-contrib-tello/raw/master/examples/stream_flow.json)

## Contact Me

Twitter: [@k_miura_io](https://twitter.com/k_miura_io)
