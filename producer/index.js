import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream(
  {
    'metadata.broker.list': 'localhost:9092'
  },
  {},
  {
    topic: 'test'
  }
);

function queueMessage() {
  const result = stream.write(Buffer.from(`Hello World ${Math.random()}`));
  console.log({ result });
}

setInterval(queueMessage, 3000);
