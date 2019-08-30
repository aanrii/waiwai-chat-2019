// package: 
// file: MessageService.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class GetMessageStreamRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMessageStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMessageStreamRequest): GetMessageStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMessageStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMessageStreamRequest;
    static deserializeBinaryFromReader(message: GetMessageStreamRequest, reader: jspb.BinaryReader): GetMessageStreamRequest;
}

export namespace GetMessageStreamRequest {
    export type AsObject = {
    }
}

export class PostMessageResponse extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): void;

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
        messageId: string,
        status: string,
    }
}

export class Message extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

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
        id: string,
        text: string,
        createTime: number,
        authorName: string,
    }
}
