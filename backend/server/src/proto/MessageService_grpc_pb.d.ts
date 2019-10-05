// package: 
// file: MessageService.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as MessageService_pb from "./MessageService_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMessageStream: IMessageServiceService_IGetMessageStream;
    getLatestMessageList: IMessageServiceService_IGetLatestMessageList;
    getMessageListByIdRange: IMessageServiceService_IGetMessageListByIdRange;
    postMessage: IMessageServiceService_IPostMessage;
}

interface IMessageServiceService_IGetMessageStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, MessageService_pb.Message> {
    path: string; // "/.MessageService/GetMessageStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<MessageService_pb.Message>;
    responseDeserialize: grpc.deserialize<MessageService_pb.Message>;
}
interface IMessageServiceService_IGetLatestMessageList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, MessageService_pb.GetLatestMessagesResponse> {
    path: string; // "/.MessageService/GetLatestMessageList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<MessageService_pb.GetLatestMessagesResponse>;
    responseDeserialize: grpc.deserialize<MessageService_pb.GetLatestMessagesResponse>;
}
interface IMessageServiceService_IGetMessageListByIdRange extends grpc.MethodDefinition<MessageService_pb.GetMessagesByIdRangeRequest, MessageService_pb.GetMessagesByIdRangeResponse> {
    path: string; // "/.MessageService/GetMessageListByIdRange"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MessageService_pb.GetMessagesByIdRangeRequest>;
    requestDeserialize: grpc.deserialize<MessageService_pb.GetMessagesByIdRangeRequest>;
    responseSerialize: grpc.serialize<MessageService_pb.GetMessagesByIdRangeResponse>;
    responseDeserialize: grpc.deserialize<MessageService_pb.GetMessagesByIdRangeResponse>;
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
    getMessageStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, MessageService_pb.Message>;
    getLatestMessageList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, MessageService_pb.GetLatestMessagesResponse>;
    getMessageListByIdRange: grpc.handleUnaryCall<MessageService_pb.GetMessagesByIdRangeRequest, MessageService_pb.GetMessagesByIdRangeResponse>;
    postMessage: grpc.handleUnaryCall<MessageService_pb.Message, MessageService_pb.PostMessageResponse>;
}

export interface IMessageServiceClient {
    getMessageStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    getMessageStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    getLatestMessageList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    getLatestMessageList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    getLatestMessageList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMessageStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public getMessageStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public getLatestMessageList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    public getLatestMessageList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    public getLatestMessageList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetLatestMessagesResponse) => void): grpc.ClientUnaryCall;
    public getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    public getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    public getMessageListByIdRange(request: MessageService_pb.GetMessagesByIdRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.GetMessagesByIdRangeResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}
