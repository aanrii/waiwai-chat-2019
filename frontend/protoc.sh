#!/usr/bin/env bash

set -eu

PROTO_SRC=../proto
PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# Path to this plugin 
PROTOC_GEN_TS_PATH="$(yarn bin)/protoc-gen-ts"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${PROTO_DEST}" \
    --ts_out="service=true:${PROTO_DEST}" \
    -I ${PROTO_SRC} $(find ${PROTO_SRC} -name "*.proto")