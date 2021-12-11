require('../scss/index.scss')

import Message from './lib/message'

const message = new Message('Hello World!')

message.publish('.content')
