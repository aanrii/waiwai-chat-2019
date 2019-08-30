#!/usr/bin/env bash

set -eu

export PATH="$PATH:$(yarn bin)"

PROTO_SRC=../../proto
PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${PROTO_DEST} \
  --grpc_out=${PROTO_DEST} \
  --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*

grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=$(yarn bin)/protoc-gen-ts \
  --ts_out=${PROTO_DEST} \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*