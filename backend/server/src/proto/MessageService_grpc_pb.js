// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var MessageService_pb = require('./MessageService_pb.js');

function serialize_GetMessageStreamRequest(arg) {
  if (!(arg instanceof MessageService_pb.GetMessageStreamRequest)) {
    throw new Error('Expected argument of type GetMessageStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMessageStreamRequest(buffer_arg) {
  return MessageService_pb.GetMessageStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Message(arg) {
  if (!(arg instanceof MessageService_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return MessageService_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PostMessageResponse(arg) {
  if (!(arg instanceof MessageService_pb.PostMessageResponse)) {
    throw new Error('Expected argument of type PostMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PostMessageResponse(buffer_arg) {
  return MessageService_pb.PostMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageServiceService = exports.MessageServiceService = {
  getMessageStream: {
    path: '/MessageService/GetMessageStream',
    requestStream: false,
    responseStream: true,
    requestType: MessageService_pb.GetMessageStreamRequest,
    responseType: MessageService_pb.Message,
    requestSerialize: serialize_GetMessageStreamRequest,
    requestDeserialize: deserialize_GetMessageStreamRequest,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
  postMessage: {
    path: '/MessageService/PostMessage',
    requestStream: false,
    responseStream: false,
    requestType: MessageService_pb.Message,
    responseType: MessageService_pb.PostMessageResponse,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_PostMessageResponse,
    responseDeserialize: deserialize_PostMessageResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
