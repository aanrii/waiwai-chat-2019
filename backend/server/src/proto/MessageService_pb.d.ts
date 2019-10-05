// package: 
// file: MessageService.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetLatestMessagesResponse extends jspb.Message { 
    clearMessageList(): void;
    getMessageList(): Array<Message>;
    setMessageList(value: Array<Message>): void;
    addMessage(value?: Message, index?: number): Message;

    getLastId(): number;
    setLastId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLatestMessagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLatestMessagesResponse): GetLatestMessagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLatestMessagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLatestMessagesResponse;
    static deserializeBinaryFromReader(message: GetLatestMessagesResponse, reader: jspb.BinaryReader): GetLatestMessagesResponse;
}

export namespace GetLatestMessagesResponse {
    export type AsObject = {
        messageList: Array<Message.AsObject>,
        lastId: number,
    }
}

export class GetMessagesByIdRangeRequest extends jspb.Message { 
    getIdFrom(): number;
    setIdFrom(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMessagesByIdRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMessagesByIdRangeRequest): GetMessagesByIdRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMessagesByIdRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMessagesByIdRangeRequest;
    static deserializeBinaryFromReader(message: GetMessagesByIdRangeRequest, reader: jspb.BinaryReader): GetMessagesByIdRangeRequest;
}

export namespace GetMessagesByIdRangeRequest {
    export type AsObject = {
        idFrom: number,
    }
}

export class GetMessagesByIdRangeResponse extends jspb.Message { 
    clearMessageList(): void;
    getMessageList(): Array<Message>;
    setMessageList(value: Array<Message>): void;
    addMessage(value?: Message, index?: number): Message;

    getLastId(): number;
    setLastId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMessagesByIdRangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMessagesByIdRangeResponse): GetMessagesByIdRangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMessagesByIdRangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMessagesByIdRangeResponse;
    static deserializeBinaryFromReader(message: GetMessagesByIdRangeResponse, reader: jspb.BinaryReader): GetMessagesByIdRangeResponse;
}

export namespace GetMessagesByIdRangeResponse {
    export type AsObject = {
        messageList: Array<Message.AsObject>,
        lastId: number,
    }
}

export class PostMessageResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostMessageResponse): PostMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostMessageResponse;
    static deserializeBinaryFromReader(message: PostMessageResponse, reader: jspb.BinaryReader): PostMessageResponse;
}

export namespace PostMessageResponse {
    export type AsObject = {
        status: string,
    }
}

export class Message extends jspb.Message { 
    getText(): string;
    setText(value: string): void;

    getCreateTime(): number;
    setCreateTime(value: number): void;

    getAuthorName(): string;
    setAuthorName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        text: string,
        createTime: number,
        authorName: string,
    }
}
