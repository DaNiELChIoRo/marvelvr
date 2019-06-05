/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import { ViroARSceneNavigator} from 'react-viro';

var sharedProps = {
  apiKey:"DA96C074-B0F1-4E32-9C1A-852C73B08277",
}

var scene = require('./src/scene');

class App extends Component {
  render() {
    return (
      <ViroARSceneNavigator {...sharedProps}
        initialScene={{ scene }}/>
    )
  }
}
module.exports = App
