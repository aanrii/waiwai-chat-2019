// package: 
// file: MessageService.proto

import * as MessageService_pb from "./MessageService_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MessageServiceGetMessageStream = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof MessageService_pb.GetMessageStreamRequest;
  readonly responseType: typeof MessageService_pb.Message;
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
  getMessageStream(requestMessage: MessageService_pb.GetMessageStreamRequest, metadata?: grpc.Metadata): ResponseStream<MessageService_pb.Message>;
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

