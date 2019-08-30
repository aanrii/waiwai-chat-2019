import * as grpc from 'grpc';
import MessageService from './MessageService';
import * as message_service_grpc_pb from './proto/MessageService_grpc_pb';

(() => {
  const server = new grpc.Server();
  server.bind(`0.0.0.0:9090`, grpc.ServerCredentials.createInsecure());
  server.addService(message_service_grpc_pb.MessageServiceService, new MessageService());
  server.start();
})();
