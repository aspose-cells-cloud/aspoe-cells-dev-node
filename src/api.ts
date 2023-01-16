/*
* MIT License
* 
* Copyright (c) 2023 Aspose.Cells Dev
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/


import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";


/**
 * Library for communicating with the Aspose.Cells Cloud API
 */
export class CellsDevApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param baseUrl Base api Url.
     */
    constructor( baseUrl?: string ,apiVersion?:string) {
        this.configuration = new Configuration(baseUrl,apiVersion );
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="GetHealthStatusRequest" /></param>
    public async getHealthStatus(  ): Promise<{response: http.ClientResponse, body: string}>
    {
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells";
        const queryParameters: any = {};
        const bodyParameter = "";

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostSearchRequest" /></param>
    public async postSearch(   requestObj:model.SearchRequest   ): Promise<{response: http.ClientResponse, body: model.TextItems}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearch.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/content/search";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostReplaceRequest" /></param>
    public async postReplace(   requestObj:model.ReplaceRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postReplace.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/content/replace";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookRequest" /></param>
    public async postConvertWorkbook(   requestObj:model.ConvertRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbook.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/convert";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostMergeRequest" /></param>
    public async postMerge(   requestObj:model.MergeRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFile}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMerge.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/merge";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFile");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostEncryptWithPasswordRequest" /></param>
    public async postEncryptWithPassword(   requestObj:model.ProtectionRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postEncryptWithPassword.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/protect/encrypt-with-password";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostDecryptWithPasswordRequest" /></param>
    public async postDecryptWithPassword(   requestObj:model.ProtectionRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDecryptWithPassword.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/protect/decrypt-with-password";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostDigitalSignatureRequest" /></param>
    public async postDigitalSignature(   requestObj:model.DigitalSignaturRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDigitalSignature.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/protect/digital-signature";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostSplitRequest" /></param>
    public async postSplit(   requestObj:model.SplitRequest   ): Promise<{response: http.ClientResponse, body: model.ResponseFiles}>
    {
     
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSplit.');
        }
         let localVarPath = this.configuration.getApiBaseUrl() + "/cells/split";
        const queryParameters: any = {};
        const bodyParameter = (requestObj == null) ? "" : ObjectSerializer.serialize(requestObj, requestObj.constructor.name);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:bodyParameter,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ResponseFiles");
        return Promise.resolve({body: result, response});
    }
}