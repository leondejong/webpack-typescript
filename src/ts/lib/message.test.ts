import test, { ExecutionContext } from 'ava'
import Message from './message.js'

test('sets and gets message content', (t: ExecutionContext) => {
  const message = new Message('init')
  message.content = 'content'
  t.is(message.content, 'content')
})
