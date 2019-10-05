import { PubSub, Subscription, Topic } from '@google-cloud/pubsub';
import uuid from 'uuid/v4';
import { Message } from './proto/MessageService_pb';

class MessagePubSub {
  private static readonly PROJECT_ID = 'waiwai-chat-grpc';
  private static readonly TOPIC_NAME = 'messages';
  private static readonly SUBSCRIPTION_NAME = `backend-server-${uuid()}`;
  private static readonly MAX_SUBSCRIBE_ATTEMPT = 10;

  private readonly pubsub = new PubSub({
    projectId: MessagePubSub.PROJECT_ID,
  });

  private readonly topic: Topic;
  private subscription: Subscription;

  constructor() {
    this.topic = this.pubsub.topic(MessagePubSub.TOPIC_NAME);
    this.topic.createSubscription(MessagePubSub.SUBSCRIPTION_NAME, (err, subscription) => {
      if (err) {
        console.error(err);
      } else {
        this.subscription = subscription;
      }
    });
  }

  public async addListener(listener: (message: Message) => void) {
    try {
      await new Promise((resolve, reject) => {
        const waitForSubscription = (numAttempt: number) => {
          if (numAttempt >= MessagePubSub.MAX_SUBSCRIBE_ATTEMPT) {
            reject(new Error('The number of attempts reaches its limit.'));
          }
          if (this.subscription) {
            return resolve();
          }
          setTimeout(() => waitForSubscription(numAttempt + 1), 30);
        };
        waitForSubscription(1);
      });
    } catch (err) {
      throw err;
    }

    const messageHandler = (message: { data: Buffer; ack: () => void }) => {
      const protoMessage = Message.deserializeBinary(new Uint8Array(message.data));
      listener(protoMessage);
      message.ack();
    };
    this.subscription.on(`message`, messageHandler);
    return messageHandler;
  }

  public removeListener(messageHandler: (...args: any[]) => void) {
    this.subscription.removeListener(`message`, messageHandler);
  }

  public async publish(message: Message) {
    const buffer = Buffer.from(message.serializeBinary());
    return await this.topic.publish(buffer);
  }

  public async finalize() {
    this.subscription.removeAllListeners();
    await this.subscription.delete();
  }
}

export default MessagePubSub;
