# Node Kafka Tutorial

## Structure

Docker Compose를 활용하여 Kafka를 구성하고,
Node.js 기반의 Producer/Consumer를 구성.

### develeopment

- containers
  - bitnami/kafka
  - bitnami/zookeeper
- local
  - producer
  - consumer

### production

- containers
  - bitnami/kafka
  - bitnami/zookeeper
  - producer node.js container
  - consumer node.js container

```
producer --> kafka --> consumer
```

### Goals

- containers
  - zookeeper:2181
  - kafka:9092
  - producer:3000
  - consumer:3001
  - ui:80

> local에서 단일 접근으로 ui(nginx):80만 열어두고,
> vue로 만들어진 app에서 consumer에 소켓 연결 및 kafka 연동.

> 랜덤 수로 만들어진 값을 통해 `lightweight-charts` 실시간 렌더링.
