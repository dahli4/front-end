import { ResponseDto } from "apis/response";

type ResponseType<T> = T | ResponseDto | null;

export type {
    ResponseType
}