# node-red-contrib-tello

[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)

This node uses [Tello SDK 2.0](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf) commands.

## Thaks for your donation

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

## Example Flows

![Flow Example](https://github.com/Miura55/node-red-contrib-tello/raw/master/images/flow_sample.png)

```
[{"id":"d5c1ec7a.6f857","type":"tab","label":"Tello Node Test","disabled":false,"info":""},{"id":"81aea588.c25ab8","type":"inject","z":"d5c1ec7a.6f857","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"takeoff","payloadType":"str","x":90,"y":120,"wires":[["956dd09f.6465a"]]},{"id":"a60911ee.e7965","type":"debug","z":"d5c1ec7a.6f857","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":850,"y":120,"wires":[]},{"id":"956dd09f.6465a","type":"takeoff","z":"d5c1ec7a.6f857","name":"","x":230,"y":120,"wires":[["dd36b578.4fcb78"]]},{"id":"333be886.2c2478","type":"land","z":"d5c1ec7a.6f857","name":"","x":530,"y":120,"wires":[["e2d481b9.40831"]]},{"id":"dd36b578.4fcb78","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":380,"y":120,"wires":[["333be886.2c2478"]]},{"id":"d52a58d4.06e938","type":"flip","z":"d5c1ec7a.6f857","name":"","direction":"b","x":590,"y":620,"wires":[["fd57e5a.6754c18"]]},{"id":"8e4c28a.8818cd8","type":"debug","z":"d5c1ec7a.6f857","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":810,"y":680,"wires":[]},{"id":"fd57e5a.6754c18","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":160,"y":680,"wires":[["e29cbfb4.dc9a2"]]},{"id":"64a83a23.587794","type":"takeoff","z":"d5c1ec7a.6f857","name":"","x":250,"y":620,"wires":[["c9a9e5f4.3be318"]]},{"id":"c9a9e5f4.3be318","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":420,"y":620,"wires":[["d52a58d4.06e938"]]},{"id":"4717d310.7b185c","type":"land","z":"d5c1ec7a.6f857","name":"","x":650,"y":680,"wires":[["8e4c28a.8818cd8"]]},{"id":"f06dc5c5.15f8a8","type":"comment","z":"d5c1ec7a.6f857","name":"Flip","info":"","x":70,"y":580,"wires":[]},{"id":"d47350e6.7e039","type":"comment","z":"d5c1ec7a.6f857","name":" Hovering","info":"","x":80,"y":80,"wires":[]},{"id":"8e4ffcb2.32812","type":"inject","z":"d5c1ec7a.6f857","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"takeoff","payloadType":"str","x":90,"y":240,"wires":[["7981b9fc.eb8d58"]]},{"id":"6c14fb4b.661674","type":"inject","z":"d5c1ec7a.6f857","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"takeoff","payloadType":"str","x":90,"y":620,"wires":[["64a83a23.587794"]]},{"id":"14aed573.8e3cab","type":"comment","z":"d5c1ec7a.6f857","name":"Move","info":"","x":70,"y":200,"wires":[]},{"id":"7981b9fc.eb8d58","type":"takeoff","z":"d5c1ec7a.6f857","name":"","x":240,"y":240,"wires":[["4561d8c2.df4358"]]},{"id":"4561d8c2.df4358","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":380,"y":240,"wires":[["c9539fa3.b781c"]]},{"id":"c9539fa3.b781c","type":"speed","z":"d5c1ec7a.6f857","name":"","speed":"20","x":530,"y":240,"wires":[["800b8fa2.26353"]]},{"id":"800b8fa2.26353","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"2","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":680,"y":240,"wires":[["4d6c5e3f.67bd4"]]},{"id":"4d6c5e3f.67bd4","type":"up","z":"d5c1ec7a.6f857","name":"","distance":"50","x":830,"y":240,"wires":[["f9cf655a.a9ab48"]]},{"id":"f9cf655a.a9ab48","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":120,"y":300,"wires":[["aaffe201.1f081"]]},{"id":"aaffe201.1f081","type":"down","z":"d5c1ec7a.6f857","name":"","distance":"50","x":270,"y":300,"wires":[["a419a567.2ee8c8"]]},{"id":"a419a567.2ee8c8","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":420,"y":300,"wires":[["3f3c687e.8934a8"]]},{"id":"3f3c687e.8934a8","type":"forward","z":"d5c1ec7a.6f857","name":"","distance":"50","x":580,"y":300,"wires":[["81659fa.fc2076"]]},{"id":"81659fa.fc2076","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":740,"y":300,"wires":[["8236d65.8f31228"]]},{"id":"8236d65.8f31228","type":"back","z":"d5c1ec7a.6f857","name":"","distance":"50","x":870,"y":300,"wires":[["fb4cb848.590098"]]},{"id":"fb4cb848.590098","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":120,"y":360,"wires":[["e61c7cdf.e0acb"]]},{"id":"e61c7cdf.e0acb","type":"left","z":"d5c1ec7a.6f857","name":"","distance":"50","x":270,"y":360,"wires":[["820df367.613e2"]]},{"id":"820df367.613e2","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":420,"y":360,"wires":[["7d8606b6.1b0e18"]]},{"id":"7d8606b6.1b0e18","type":"right","z":"d5c1ec7a.6f857","name":"","distance":"50","x":550,"y":360,"wires":[["7179dc88.0c6ea4"]]},{"id":"7179dc88.0c6ea4","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":680,"y":360,"wires":[["716e91b5.3b4fb"]]},{"id":"716e91b5.3b4fb","type":"land","z":"d5c1ec7a.6f857","name":"","x":810,"y":360,"wires":[["5f3180a7.f88c5"]]},{"id":"5f3180a7.f88c5","type":"debug","z":"d5c1ec7a.6f857","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":970,"y":360,"wires":[]},{"id":"16e5eafd.1d8545","type":"comment","z":"d5c1ec7a.6f857","name":"Turn","info":"","x":70,"y":420,"wires":[]},{"id":"1784e8e4.0f8787","type":"inject","z":"d5c1ec7a.6f857","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"takeoff","payloadType":"str","x":90,"y":460,"wires":[["c8bbf7cc.8bdf28"]]},{"id":"c8bbf7cc.8bdf28","type":"takeoff","z":"d5c1ec7a.6f857","name":"","x":240,"y":460,"wires":[["b09b9e22.259da"]]},{"id":"b09b9e22.259da","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":400,"y":460,"wires":[["95cb02a6.13359"]]},{"id":"95cb02a6.13359","type":"clockwise","z":"d5c1ec7a.6f857","name":"","deg":"180","x":580,"y":460,"wires":[["2b6a470b.f7d738"]]},{"id":"2b6a470b.f7d738","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":740,"y":460,"wires":[["6da6950f.58e59c"]]},{"id":"6da6950f.58e59c","type":"counterclockwise","z":"d5c1ec7a.6f857","name":"","deg":"180","x":490,"y":520,"wires":[["a759a164.40aa8"]]},{"id":"a759a164.40aa8","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":660,"y":520,"wires":[["bdb06276.d4078"]]},{"id":"bdb06276.d4078","type":"land","z":"d5c1ec7a.6f857","name":"","x":810,"y":520,"wires":[["39dac34c.5d8e4c"]]},{"id":"39dac34c.5d8e4c","type":"debug","z":"d5c1ec7a.6f857","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":950,"y":520,"wires":[]},{"id":"c5c793fe.88bec","type":"debug","z":"d5c1ec7a.6f857","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":620,"y":780,"wires":[]},{"id":"d6a7dd92.56f91","type":"inject","z":"d5c1ec7a.6f857","name":"Start Call","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":110,"y":780,"wires":[["6c0fa238.803fec"]]},{"id":"9d31a587.c457a8","type":"comment","z":"d5c1ec7a.6f857","name":"Battery level","info":"","x":90,"y":740,"wires":[]},{"id":"6c0fa238.803fec","type":"state","z":"d5c1ec7a.6f857","name":"","command":"battery?","x":350,"y":780,"wires":[["c5c793fe.88bec"]]},{"id":"e2d481b9.40831","type":"state","z":"d5c1ec7a.6f857","name":"","command":"battery?","x":680,"y":120,"wires":[["a60911ee.e7965"]]},{"id":"46984e1e.bb324","type":"delay","z":"d5c1ec7a.6f857","name":"","pauseType":"delay","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":520,"y":680,"wires":[["4717d310.7b185c"]]},{"id":"e29cbfb4.dc9a2","type":"flip","z":"d5c1ec7a.6f857","name":"","direction":"f","x":350,"y":680,"wires":[["46984e1e.bb324"]]}]
```

## Contact Me

Twitter: [@k_miura_io](https://twitter.com/k_miura_io)
