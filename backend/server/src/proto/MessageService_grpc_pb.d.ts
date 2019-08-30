// package: 
// file: MessageService.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as MessageService_pb from "./MessageService_pb";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMessageStream: IMessageServiceService_IGetMessageStream;
    postMessage: IMessageServiceService_IPostMessage;
}

interface IMessageServiceService_IGetMessageStream extends grpc.MethodDefinition<MessageService_pb.GetMessageStreamRequest, MessageService_pb.Message> {
    path: string; // "/.MessageService/GetMessageStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MessageService_pb.GetMessageStreamRequest>;
    requestDeserialize: grpc.deserialize<MessageService_pb.GetMessageStreamRequest>;
    responseSerialize: grpc.serialize<MessageService_pb.Message>;
    responseDeserialize: grpc.deserialize<MessageService_pb.Message>;
}
interface IMessageServiceService_IPostMessage extends grpc.MethodDefinition<MessageService_pb.Message, MessageService_pb.PostMessageResponse> {
    path: string; // "/.MessageService/PostMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MessageService_pb.Message>;
    requestDeserialize: grpc.deserialize<MessageService_pb.Message>;
    responseSerialize: grpc.serialize<MessageService_pb.PostMessageResponse>;
    responseDeserialize: grpc.deserialize<MessageService_pb.PostMessageResponse>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer {
    getMessageStream: grpc.handleServerStreamingCall<MessageService_pb.GetMessageStreamRequest, MessageService_pb.Message>;
    postMessage: grpc.handleUnaryCall<MessageService_pb.Message, MessageService_pb.PostMessageResponse>;
}

export interface IMessageServiceClient {
    getMessageStream(request: MessageService_pb.GetMessageStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    getMessageStream(request: MessageService_pb.GetMessageStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMessageStream(request: MessageService_pb.GetMessageStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public getMessageStream(request: MessageService_pb.GetMessageStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}
