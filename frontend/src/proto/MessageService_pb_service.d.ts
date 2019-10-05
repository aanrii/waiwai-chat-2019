// package: 
// file: MessageService.proto

import * as MessageService_pb from "./MessageService_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MessageServiceGetMessageStream = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof MessageService_pb.Message;
};

type MessageServiceGetLatestMessageList = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof MessageService_pb.GetLatestMessagesResponse;
};

type MessageServiceGetMessageListByIdRange = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof MessageService_pb.GetMessagesByIdRangeRequest;
  readonly responseType: typeof MessageService_pb.GetMessagesByIdRangeResponse;
};

type MessageServicePostMessage = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof MessageService_pb.Message;
  readonly responseType: typeof MessageService_pb.PostMessageResponse;
};

export class MessageService {
  static readonly serviceName: string;
  static readonly GetMessageStream: MessageServiceGetMessageStream;
  static readonly GetLatestMessageList: MessageServiceGetLatestMessageList;
  static readonly GetMessageListByIdRange: MessageServiceGetMessageListByIdRange;
  static readonly PostMessage: MessageServicePostMessage;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MessageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMessageStream(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<MessageService_pb.Message>;
  getLatestMessageList(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.GetLatestMessagesResponse|null) => void
  ): UnaryResponse;
  getLatestMessageList(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.GetLatestMessagesResponse|null) => void
  ): UnaryResponse;
  getMessageListByIdRange(
    requestMessage: MessageService_pb.GetMessagesByIdRangeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.GetMessagesByIdRangeResponse|null) => void
  ): UnaryResponse;
  getMessageListByIdRange(
    requestMessage: MessageService_pb.GetMessagesByIdRangeRequest,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.GetMessagesByIdRangeResponse|null) => void
  ): UnaryResponse;
  postMessage(
    requestMessage: MessageService_pb.Message,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.PostMessageResponse|null) => void
  ): UnaryResponse;
  postMessage(
    requestMessage: MessageService_pb.Message,
    callback: (error: ServiceError|null, responseMessage: MessageService_pb.PostMessageResponse|null) => void
  ): UnaryResponse;
}

